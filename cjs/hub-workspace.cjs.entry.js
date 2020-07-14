'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const hubContent = require('./hub-content-efa80cdb.js');
require('./index-859d80b7.js');
require('./index-c635a7b6.js');
require('./index-0c96a340.js');
require('./index-7b2ecf99.js');
require('./hub-search-318bba26.js');
const index$6 = require('./index-52faf404.js');
require('./index-a3b3575e.js');
const hubTeam = require('./hub-team-5a96cf28.js');
const utils = require('./utils-05b33af8.js');

const hubWorkspaceCss = ":host{display:block}.workspace-grid{display:grid;grid-template-columns:15% 30% 30% 25%;grid-template-rows:auto;grid-template-areas:\"avatar bio map .\"\n    \"interests teams teams events\";-webkit-column-gap:10px;-moz-column-gap:10px;column-gap:10px;row-gap:20px;padding:0 1rem 0 3rem}.workspace-avatar{grid-area:avatar}img.avatar{border-radius:50%}.workspace-bio{grid-area:bio}.workspace-map{grid-area:map;height:200px}.workspace-interests{grid-area:interests}.workspace-events{grid-area:events}.workspace-teams{grid-area:teams;}@media screen and (max-width: 530px){.gallery-card{width:calc((100% - (0 * 30px))/ 1)}}@media screen and (min-width: 530px) and (max-width: 975px){.gallery-card{width:calc((100% - (1 * 30px))/ 2)}}@media screen and (min-width: 975px) and (max-width: 1200px){.gallery-card{width:calc((100% - (2 * 30px))/ 3)}}@media screen and (min-width:1200px){.gallery-card{width:calc((100% - (3 * 30px))/ 4)}}.gallery{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:30px;-ms-flex-pack:justify;justify-content:space-between}.gallery-card{-ms-flex:1;flex:1;width:32%;color:#4c4c4c;-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25);margin-right:10px;}.gallery-header,h3,h4{border-bottom:1px solid #888;margin-bottom:3px;width:100%}.gallery-header a,.gallery-header h4,.gallery-header h2{display:inline}.gallery-header a{text-decoration:none;color:#448}a.explore{float:right;font-size:0.8em;margin-top:5px}.gallery-header a:hover{text-decoration:underline}.team-gallery{padding:24px;margin:16px 0;width:auto;-webkit-box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);box-shadow:0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);-webkit-transition:-webkit-box-shadow 83ms;transition:-webkit-box-shadow 83ms;transition:box-shadow 83ms;transition:box-shadow 83ms, -webkit-box-shadow 83ms}";

const HubWorkspace = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    async componentWillLoad() {
        this.session = utils.readSessionFromCookie();
        const auth = index$6.UserSession.deserialize(this.session);
        console.log("Session", this.session);
        if (!!this.session) {
            const username = JSON.parse(this.session).username;
            [this.member,
                this.teams,
                this.events,
                this.places,
                this.content,
                this.comments] = await Promise.all([
                await hubTeam.getMember(username, auth),
                await hubTeam.getMemberTeams(auth),
                await hubTeam.getMemberEvents(auth),
                await hubTeam.getMemberPlaces(username, auth),
                await hubTeam.searchMemberContent(username, auth),
                await hubTeam.searchMemberComments(username, auth)
            ]);
            console.log("Workspace: Events", this.events);
        }
    }
    dateToText(date) {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });
        const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
        return `${day}-${month}-${year}`;
    }
    render() {
        var _a;
        let output = [];
        if (this.session !== undefined) {
            output.push(index.h("div", { class: "workspace-grid" }, index.h("div", { class: "workspace-avatar" }, index.h("img", { src: this.member.thumbnailUrl, class: "avatar", alt: "Profile Image" })), index.h("div", { class: "workspace-bio" }, index.h("h1", null, this.member.name), index.h("p", null, this.member.summary), index.h("em", null, "Joined ", this.dateToText(this.member.createdDate))), index.h("div", { class: "workspace-map" }, index.h("hub-places-map", { mode: "view", session: this.session })), index.h("div", { class: "workspace-interests" }, index.h("h3", null, "Stats"), index.h("hub-statistic", { size: "m", value: this.teams.meta.total, units: "Teams" }), index.h("hub-statistic", { size: "m", value: this.events.meta.total, units: "Events" }), index.h("hub-statistic", { size: "m", value: this.content.meta.total, units: "Content Items" }), index.h("hub-statistic", { size: "m", value: this.places.length, units: "Places" }), index.h("hub-statistic", { size: "m", value: this.comments.length, units: "Comments" }), index.h("h3", null, "Interests"), (_a = this.member.metadata) === null || _a === void 0 ? void 0 :
                _a.interests.map((tag) => index.h("calcite-chip", { value: tag }, tag)), index.h("h3", null, "Places"), this.places.map((place) => index.h("calcite-chip", { value: place.name }, place.name, " (", place.coverage, ")"))), index.h("div", { class: "workspace-events" }, index.h("h3", null, "Upcoming Events"), index.h("hub-events-list", { session: this.session }), index.h("hub-list", { collection: this.teams.results }, index.h("h3", null, "Your Teams"))), index.h("div", { class: "workspace-teams" }, index.h("div", { class: "gallery-header" }, index.h("h2", null, "My Content"), index.h("a", { class: "explore", href: "#" }, "See all>")), index.h("div", { class: "gallery" }, this.content.results.slice(0, 4).map((result) => index.h("hub-card", { class: "gallery-card", contenttype: `${hubContent.HubType[result.hubType]} by ${result.publisher.name}`, image: result.thumbnailUrl, name: utils.truncateString(result.name, 55), description: utils.truncateString(result.summary, 90), url: result.url, buttonText: `View ${hubContent.HubType[result.hubType]}`, onClick: () => "" }))), index.h("h2", null, "Your Teams"), this.teams.results.slice(0, 8).map((result) => index.h("div", { class: "team-gallery" }, index.h("div", { class: "gallery-header" }, index.h("h4", null, index.h("a", { href: result.url }, result.name, " >"))), index.h("hub-gallery", { session: this.session, limit: 4, groups: result.id, showsearch: false, sort: "modified", hubtype: "content" }))))));
        }
        else {
            output.push(index.h("calcite-loader", { text: "Fetching workspace...", "is-active": true }));
        }
        return (index.h(index.Host, null, index.h("slot", null), output));
    }
};
HubWorkspace.style = hubWorkspaceCss;

exports.hub_workspace = HubWorkspace;
