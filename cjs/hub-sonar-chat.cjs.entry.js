'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');

const hubSonarChatCss = ":host{display:block}";

const HubSonarChat = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.service = null;
        this.name = "Sonar";
        this.open = true;
        this.placeholder = "Ask a question...";
        this.sendMessages = { messages: [
                { text: "Welcome to Sonar", type: "text", user: "user2" },
                { text: "Search for Datasets", type: "action", user: "user2", route: "/index" },
            ] };
    }
    async onChatSubmittedHandler(event) {
        console.debug("HubSonarChat: onChatSubmitted", event);
        let messages = undefined;
        if (this.service) {
            let path = event.detail.route ? event.detail.route : '/index';
            let url = `${this.service}${path}`;
            console.debug("HubSonarChat: service", url);
            let response = await fetch(url);
            messages = await response.json();
            console.debug("HubSonarChat: response", messages);
        }
        else {
            messages = {
                messages: [{ text: "Thanks for " + event.detail.text, type: "text", user: "user2" }],
                actions: [{ text: "Search for Data" }]
            };
        }
        this.sendMessages = messages;
        return new Promise((_resolve, _reject) => { });
        // return "true";
    }
    render() {
        return (index.h(index.Host, null, index.h("hub-chat", { open: this.open, name: this.name, placeholder: this.placeholder, incomingMessages: this.sendMessages })));
    }
};
HubSonarChat.style = hubSonarChatCss;

exports.hub_sonar_chat = HubSonarChat;
