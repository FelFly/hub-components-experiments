'use strict';

const hubContent = require('./hub-content-a0a178d6.js');
const index$3 = require('./index-5b155541.js');
const index$5 = require('./index-8549fee6.js');

// TODO: Change hubRequestOptions to better handle different Hub & Portal endpoints (Prod/QA/Enterprise/etc.)
async function search(queryParams, hubRequestOptions) {
    console.debug("hub-search search: queryParams", [queryParams, hubRequestOptions]);
    if (hubRequestOptions === undefined
        || (hubRequestOptions !== undefined && hubRequestOptions.isPortal)) {
        return await searchPortal(queryParams, hubRequestOptions);
    }
    else {
        return await searchHub(queryParams, hubRequestOptions);
    }
}
// https://developers.arcgis.com/rest/users-groups-and-items/search.htm
async function searchPortal(queryParams, hubRequestOptions) {
    var _a;
    // TODO: Consider better ways to map terms across multiple parameters
    queryParams.sort = (queryParams.sort || 'modified').replace(/name/, 'title');
    let query = [];
    if (queryParams.q === undefined || ((_a = queryParams.q) === null || _a === void 0 ? void 0 : _a.length) === 0) {
        queryParams.q = "*";
    }
    query.push(queryParams.q);
    if (queryParams.owner) {
        query.push(`owner:${queryParams.owner}`);
    }
    // Portal splits "sort=-name" into "sortField=name&sortOrder=desc"
    // Supported sort field names are title, created, type, owner, modified, avgrating, numratings, numcomments, and numviews.
    let sortField = queryParams.sort;
    let sortOrder = "asc";
    let match = queryParams.sort.match(/^-/);
    if (match !== null) {
        sortField = match[1];
        sortOrder = "desc";
    }
    // TODO: clean up "group search" routing
    if (queryParams.customParams !== undefined
        && queryParams.customParams.group !== undefined) {
        return index$3.searchGroupContent({
            groupId: queryParams.customParams.group.id,
            q: query.join(' AND '),
            num: queryParams.limit || "10",
            sortField: sortField,
            sortOrder: sortOrder,
            params: {
                categories: queryParams.customParams.group.categories
            }
        }).then((results) => {
            return new Promise((resolve, _reject) => {
                const output = results.results.map(item => hubContent._convertItemToContent({ item: item }));
                resolve({ results: output });
            });
        });
    }
    // Normal, non-group-specific search
    if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
        const groupQuery = queryParams.groups.map(group => `group:${group}`).join(" OR ");
        query.push(`(${groupQuery})`);
    }
    console.debug("hub-search searchPortal: queryParams", [queryParams, hubRequestOptions]);
    return index$3.searchItems({
        q: query.join(' AND '),
        num: queryParams.limit || "10",
        sortField: sortField,
        sortOrder: sortOrder,
        authentication: hubRequestOptions === null || hubRequestOptions === void 0 ? void 0 : hubRequestOptions.authentication
    }).then((results) => {
        return new Promise((resolve, _reject) => {
            const output = results.results.map(item => hubContent._convertItemToContent({ item: item }));
            resolve({ results: output, meta: { total: results.total, count: results.num, start: results.start } });
        });
    });
}
// https://gist.github.com/hamhands/b6d1f0f514678b88cdc01070bf006263
async function searchHub(queryParams, _hubRequestOptions) {
    queryParams.sort = (queryParams.sort || 'modified').replace(/title/, 'name');
    // Search query params that ArcGIS Hub expects
    const params = {
        q: queryParams.q,
        sort: queryParams.sort,
        agg: { fields: "tags,collection,owner,source,hasApi,downloadable", size: queryParams.limit }
    };
    params.page = { key: btoa(JSON.stringify({
            hub: {
                start: 1,
                size: queryParams.limit
            },
            ago: {
                start: 1,
                size: queryParams.limit
            }
        })) };
    if (queryParams.groups !== undefined && queryParams.groups.length > 0) {
        params.groupIds = queryParams.groups.join(",");
    }
    // const token = 'xxxYYY' // AGO token
    // const portal = 'https://www.arcgis.com/sharing/rest'
    // const headers = { authorization: token, portal }
    const serializedParams = index$5.serialize(params);
    // Query hub v3's new search endpoint
    let json = await fetch(`${_hubRequestOptions.hubApiUrl}/api/v3/search?${serializedParams}`, {});
    let results = await json.json();
    let output = results.data.map(hubContent._convertHubv3ToContent);
    return { results: output };
    // return HubSearch.agoSearch({q: query});
}

exports.search = search;
