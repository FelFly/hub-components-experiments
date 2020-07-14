'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
const hubContent = require('./hub-content-efa80cdb.js');
require('./index-859d80b7.js');
require('./index-c635a7b6.js');
require('./index-0c96a340.js');
require('./index-7b2ecf99.js');
require('./hub-search-318bba26.js');
require('./index-a3b3575e.js');
const hubTeam = require('./hub-team-5a96cf28.js');

const hubProfileCardCss = ":host{display:block}";

const HubProfileCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * ID For the profile. Username, Team ID, Org ID
         */
        this.username = "";
        /**
         * Which Profile: member, team
         */
        this.type = "member";
    }
    componentWillLoad() {
        this.loadProfile(this.username);
    }
    /**
     *
     * @param id
     * @param type
     */
    async loadProfile(id) {
        try {
            console.log("Profile: ", [this.type, hubContent.CommunityType.team, hubContent.CommunityType[this.type] == hubContent.CommunityType.team]);
            this.profile = (hubContent.CommunityType[this.type] == hubContent.CommunityType.team) ? await hubTeam.getTeam(id) : await hubTeam.getMember(id);
        }
        catch (_a) {
            console.log("hub-profile-card: error with profile", id);
        }
    }
    render() {
        let output = [];
        if (this.profile !== undefined && this.profile !== null) {
            output.push(index.h("hub-card", { class: "hub-profile", contenttype: hubContent.HubType[this.profile.hubType], image: this.profile.thumbnailUrl, name: this.profile.name, description: this.profile.summary, url: this.profile.url }));
        }
        return (index.h(index.Host, null, output));
    }
};
HubProfileCard.style = hubProfileCardCss;

exports.hub_profile_card = HubProfileCard;
