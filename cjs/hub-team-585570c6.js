'use strict';

const hubContent = require('./hub-content-a0a178d6.js');
const index$2 = require('./index-cd571829.js');
const index$3 = require('./index-5b155541.js');
const hubSearch = require('./hub-search-c6754048.js');
const index$7 = require('./index-7f78013a.js');

const portalUrl = 'https://www.arcgis.com';
/**
 * Get a specific resources associated with an user
 *
 * TODO: move this to arcgis-rest-js
 *
 * @param id - Username
 * @param resource - Name of the resource to fetch
 * @param requestOptions - Options for the request
 * @returns A Promise to get some item resources.
 */
async function getUserResource(id, resource, requestOptions) {
    const url = `${portalUrl}/sharing/rest/community/users/${id}/resources/${resource}`;
    // Mix in num:1000 with any user supplied params
    // Key thing - we don't want to mutate the passed in requestOptions
    // as that may be used in other (subsequent) calls in the course
    // of a long promise chains
    const options = Object.assign({}, requestOptions);
    options.params = Object.assign({ num: 1000 }, options.params);
    return index$2.request(url, options);
}
/**
 * ```js
 * import { addItemResource } from "@esri/arcgis-rest-portal";
 *
 * // Add a file resource
 * addItemResource({
 *   id: '3ef',
 *   resource: file,
 *   name: 'bigkahuna.jpg',
 *   authentication
 * })
 *   .then(response)
 *
 * // Add a text resource
 * addItemResource({
 *   id: '4fg',
 *   content: "Text content",
 *   name: 'bigkahuna.txt',
 *   authentication
 * })
 *   .then(response)
 * ```
 * Add a resource associated with an item. See the [REST Documentation](https://developers.arcgis.com/rest/users-groups-and-items/add-resources.htm) for more information.
 *
 * @param requestOptions - Options for the request
 * @returns A Promise to add item resources.
 */
function addUserResource(requestOptions) {
    const url = `${portalUrl}/sharing/rest/community/users/${requestOptions.username}/addresource`;
    requestOptions.params = Object.assign({ text: requestOptions.content, key: requestOptions.name, file: requestOptions.resource }, requestOptions.params);
    return index$2.request(url, requestOptions);
}

/* Copyright (c) 2018-2019 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { searchAnnotations } from "@esri/hub-annotations";
 * //
 * searchAnnotations({ url: annotationsUrl + "/0" })
 *   .then(response => {
 *     // {
 *     //   data: [{
 *     //     id: "User1",
 *     //     type: "annotations",
 *     //     attributes: {description: "Great place!", ...}
 *     //   }],
 *     //   included: [{
 *     //     id: "User1",
 *     //     type: "users",
 *     //     attributes: { firstName: "User", lastName: "Name", ...}
 *     //   }]
 *     // }
 *   });
 * ```
 * Query for annotations from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with decorated features from the annotation service for a Hub enabled ArcGIS Online organization.
 */
function searchAnnotations(requestOptions) {
    if (!requestOptions.outFields) {
        requestOptions.outFields = [
            "OBJECTID",
            "Creator",
            "Editor",
            "created_at",
            "updated_at",
            "description",
            "source",
            "status",
            "target",
            "dataset_id"
        ];
    }
    if(requestOptions.where === undefined || requestOptions.where === null || requestOptions.where.length <= 0) {
        // idiosyncrasie of the ArcGIS feature layer API
        requestOptions.where = "1=1";
    }
    
    // upvotes and downvotes should not be returned
    requestOptions.where += " AND parent_id IS NULL";
    console.log("hub-annotations: searchAnnotations: requestOptions", requestOptions);
    return index$7.queryFeatures(requestOptions).then(function (response) {
        var users = [];
        var data = [];
        // use .reduce()?
        response.features.forEach(function (comment) {
            var attributes = comment.attributes;
            var geometry = comment.geometry;
            var resource = {
                id: attributes.OBJECTID,
                type: "annotations",
                attributes: attributes
            };
            if (geometry) {
                resource.geometry = geometry;
            }
            data.push(resource);
            // ensure we only fetch metadata about each user once
            if (users.indexOf(attributes.Creator) === -1) {
                users.push(attributes.Creator);
            }
        });
        var getUserInfo = users
            .filter(function (name) { return name !== ""; }) // filter out anonymous comments
            .map(function (name) {
            return index$3.getUser({
                username: name,
                portal: requestOptions.portal,
                authentication: requestOptions.authentication
            }).catch(function () { return null; });
        });
        return Promise.all(getUserInfo).then(function (userInfo) {
            var included = [];
            userInfo.forEach(function (attributes) {
                if (!attributes) {
                    return;
                }
                included.push({ id: attributes.username, type: "users", attributes: attributes });
            });
            return { included: included, data: data };
        });
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { request } from "@esri/arcgis-rest-request";
 * import { getAnnotationServiceUrl } from "@esri/hub-events";
 * // org ids can be retrieved via a call to portals/self
 * request("http://custom.maps.arcgis.com/sharing/rest/portals/self")
 *   .then(response => {
 *     getAnnotationServiceUrl(response.id)
 *       .then(url)
 *   })
 * ```
 * Fetch the annotations associated with a Hub Site.
 * @param orgId - Identifier of the ArcGIS Online Organization
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with an annotations url for a Hub enabled ArcGIS Online organization.
 */
function getAnnotationServiceUrl(orgId, requestOptions) {
    return index$3.searchItems(index$2.__assign({ q: "typekeywords:hubAnnotationLayer AND orgid:" + orgId }, requestOptions)).then(function (response) {
        var annoResponse = response;
        if (annoResponse.results && annoResponse.results.length > 0) {
            // this will need to be smarter if there is more than one service
            var url = annoResponse.results[0].url;
            // force https
            url = url.replace(/^http:/gi, "https:");
            // it feels like we can/should += '/0' internally here
            return url;
        }
        else {
            throw Error("No annotation service found. Commenting is likely not enabled.");
        }
    });
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { addAnnotations } from "@esri/hub-annotations";
 * //
 * addAnnotations({
 *   url: annotationsUrl + "/0",
 *   features: [{
 *     attributes: {
 *       target: "http://...", // required, explains what is being commented on
 *       description: "A grand idea!" // also required. this is the actual comment
 *     }
 *   }]
 * })
 *   .then(response);
 * ```
 * Add an annotation to ArcGIS Hub. Uses authentication to derive authorship, appends a timestamp and sets a default status of "pending" to new comments by default.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to add one or more new annotations.
 */
function addAnnotations(requestOptions) {
    /* istanbul ignore else */
    if (requestOptions.features && requestOptions.features.length) {
        requestOptions.features.forEach(function (anno) { return enrichAnnotation(anno); });
    }
    return index$7.addFeatures(requestOptions);
}
function enrichAnnotation(annotation) {
    var defaults = {
        status: "pending",
        source: "hub.js"
    };
    // mixin, giving precedence to what was passed to the method
    annotation.attributes = index$2.__assign(index$2.__assign({}, defaults), annotation.attributes);
}

/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * ```js
 * import { deleteAnnotations } from "@esri/hub-annotations";
 * //
 * deleteAnnotations({
 *   url: annotationsUrl + "/0",
 *   // an array of featureIds
 *   objectIds: [ 1 ]
 * })
 *   .then(response);
 * ```
 *
 * Delete an annotation from ArcGIS Hub.
 * @param requestOptions - request options that may include authentication
 * @returns A Promise that will resolve with the response from the service after attempting to delete annotations.
 */
function deleteAnnotations(requestOptions) {
    return index$7.deleteFeatures(requestOptions);
}

const portalUrl$1 = 'https://www.arcgis.com';
async function searchMembers(query, authentication) {
    let users = await index$3.searchUsers({ q: query, authentication });
    let members = users.results.reduce((userResults, user) => {
        userResults.push(convertUserToMember(user));
        return userResults;
    }, []);
    return { results: members };
}
async function convertMemberToUser(attributes) {
    attributes = embedUserInterests(attributes);
    // Member is a superset of User
    let user = attributes;
    return user;
}
async function updateMember(id, attributes, authentication) {
    console.log("hub-member: updateMember", id, attributes);
    let user = convertMemberToUser(attributes);
    // Portal
    index$3.updateUser({
        user: Object.assign({ username: id }, user),
        authentication
    });
    return getMember(id, authentication);
}
async function getMember(id, authentication) {
    let user = await index$3.getUser({ username: id, authentication: authentication });
    return convertUserToMember(user);
}
function getAnonymousMember() {
    return convertUserToMember({
        username: "",
        fullName: "Anonymous",
        thumbnail: ""
    });
}
async function getMemberEvents(authentication) {
    // Process:
    // 1. Find Portal eventGroups=Portal.search where(type=event && members.include?(user))
    // 2. Query Events Service where(groupId.include?(eventGroups)) && other filters (e.g. upcoming/nearby)
    // 3. Convert Group+Features into IHubEvent
    let groups = await index$3.searchGroups({
        q: "tags:Hub Event Group",
        params: { searchUserAccess: "groupMember", num: 100 },
        authentication
    });
    let eventGroups = groups.results.reduce((teamResults, group) => {
        teamResults.push(`groupId = '${group.id}'`); // TODO: build this array elsewhere
        return teamResults;
    }, []);
    let portal = await index$3.getPortal(null, { authentication: authentication });
    // @esri/hub-events directly calls Feature Service instead of using the Hub API proxy.
    // let eventServiceUrl = await getEventFeatureServiceUrl( portal.id );
    let eventServiceUrl = `https://hub.arcgis.com/api/v3/events/${portal.id}/Hub%20Events/FeatureServer/0/`;
    // TODO: add support for all vs. upcoming events
    const searchOptions = index$7.getEventQueryFromType("upcoming", {
        url: eventServiceUrl,
        authentication
    });
    searchOptions.where += ` AND (${eventGroups.join(' OR ')})`;
    let eventFeatures = await index$7.searchEvents(searchOptions);
    console.log("hub-member: getMemberEvents", [searchOptions, eventFeatures]);
    let events = eventFeatures.data.reduce((eventResults, event) => {
        eventResults.push({
            id: event.id,
            name: event.attributes.title,
            summary: event.attributes.venue,
            description: event.attributes.description,
            hubtype: hubContent.HubType.event
        });
        return eventResults;
    }, []);
    // EventGroups are all events the user has registered, and events are matches for upcoming.
    return { results: events, meta: { total: eventGroups.length, count: events.length, start: 1 } };
}
async function setMemberPlaces(username, places, authentication) {
    let resp = await addUserResource({ username, name: "places.json", content: JSON.stringify({ places }), authentication });
    console.log("hub-member: getMemberPlaces", places);
    return resp.success;
}
async function getMemberPlaces(username, authentication) {
    let places;
    try {
        places = await getUserResource(username, "places.json", { authentication });
    }
    catch (_a) {
        places = { places: [] };
    }
    console.log("hub-member: getMemberPlaces", places);
    return places.places;
}
async function getMemberTeams(authentication) {
    let groups = await index$3.searchGroups({ q: "tags:initiativeCollaborationGroup",
        params: { searchUserAccess: "groupMember", num: 100 },
        authentication
    });
    let teams = groups.results.reduce((teamResults, group) => {
        teamResults.push(convertGroupToTeam(group));
        return teamResults;
    }, []);
    return { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } };
}
async function searchMemberComments(username, authentication) {
    let query = ["1=1"];
    query.push(`Creator LIKE '${username}'`);
    let portal = await index$3.getPortal(null, { authentication: authentication });
    let annotationsUrl = await getAnnotationServiceUrl(portal.id);
    annotationsUrl += '/0';
    let annotations;
    try {
        console.log("hub-discussion: Search", [hubSearch.search, query, { url: annotationsUrl, params: { where: query.join(" AND ") } }]);
        annotations = await searchAnnotations({ url: annotationsUrl, where: query.join(" AND ") });
    }
    catch (_a) {
        annotations = { data: [] };
    }
    return annotations.data;
}
async function searchMemberContent(username, authentication) {
    let content = await hubSearch.search({ owner: username,
        authentication
    });
    return content;
}
function embedUserInterests(member) {
    member.tags = member.tags.concat(member.metadata.interests.map((interest) => { return `interest:${interest}`; }));
    return member;
}
function extractUserInterests(user) {
    var _a;
    let interests = (_a = user.tags) === null || _a === void 0 ? void 0 : _a.reduce((agg, tag) => {
        let m = tag.match(/^interest:(.*)/);
        console.log("usersInterests", m);
        if (m) {
            agg.push(m[1]);
        }
        return agg;
    }, []);
    return interests;
}
function convertUserToMember(user, _authentication) {
    let member = Object.assign(user, {
        id: user.username,
        name: user.fullName || user.username,
        publisher: { name: user.username, username: user.username },
        hubtype: hubContent.HubType.member,
        summary: user.description || "No profile summary.",
        description: user.description || "No profile description.",
        hubType: hubContent.HubType.member,
        url: `${portalUrl$1}/home/user.html?user=${user.username}`,
        permissions: {
            visibility: hubContent.VisibilityOptions.public
        },
        // Explicit data information since this is a common confusion + bug report
        createdDate: new Date(user.created),
        createdDateSource: 'user.created',
        updatedDate: new Date(user.modified),
        updatedDateSource: 'user.modified',
        thumbnailUrl: "",
        culture: user.culture,
        region: user.region,
        metadata: {
            interests: extractUserInterests(user)
        }
    });
    if (user.thumbnail !== undefined && user.thumbnail !== null) {
        member.thumbnailUrl = `${portalUrl$1}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`;
    }
    return member;
}

const portalUrl$2 = 'https://www.arcgis.com';
async function searchTeams(query) {
    let groups = await index$3.searchGroups(query);
    let teams = groups.results.reduce((teamResults, group) => {
        teamResults.push(convertGroupToTeam(group));
        return teamResults;
    }, []);
    return { results: teams, meta: { total: groups.total, count: groups.num, start: groups.start } };
}
async function getTeam(id) {
    let group = await index$3.getGroup(id);
    return convertGroupToTeam(group);
}
function convertGroupToTeam(group) {
    let team = Object.assign(group, {
        id: group.id,
        name: group.title,
        hubtype: hubContent.HubType.team,
        publisher: { name: group.owner, username: group.owner },
        summary: group.snippet || group.description || "No profile summary.",
        description: group.description || "No profile description.",
        hubType: hubContent.HubType.team,
        url: `${portalUrl$2}/home/group.html?id=${group.id}`,
        permissions: {
            visibility: hubContent.VisibilityOptions[group.access]
        },
        // Explicit data information since this is a common confusion + bug report
        createdDate: new Date(group.created),
        createdDateSource: 'group.created',
        updatedDate: new Date(group.modified),
        updatedDateSource: 'group.modified',
        thumbnailUrl: "",
        culture: group.culture,
        region: group.region,
    });
    if (group.thumbnail !== undefined && team.thumbnail !== null) {
        team.thumbnailUrl = `${portalUrl$2}/sharing/rest/community/groups/${group.id}/info/${group.thumbnail}`;
    }
    return team;
}

exports.addAnnotations = addAnnotations;
exports.convertUserToMember = convertUserToMember;
exports.deleteAnnotations = deleteAnnotations;
exports.getAnnotationServiceUrl = getAnnotationServiceUrl;
exports.getAnonymousMember = getAnonymousMember;
exports.getMember = getMember;
exports.getMemberEvents = getMemberEvents;
exports.getMemberPlaces = getMemberPlaces;
exports.getMemberTeams = getMemberTeams;
exports.getTeam = getTeam;
exports.searchAnnotations = searchAnnotations;
exports.searchMemberComments = searchMemberComments;
exports.searchMemberContent = searchMemberContent;
exports.searchMembers = searchMembers;
exports.searchTeams = searchTeams;
exports.setMemberPlaces = setMemberPlaces;
exports.updateMember = updateMember;
