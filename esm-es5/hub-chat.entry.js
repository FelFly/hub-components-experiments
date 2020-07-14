import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-12d3ca5e.js';
import { s as send24, x as x32, a as speechBubbles32 } from './index-21611a9b.js';
var hubChatCss = ":host{display:block;background:#efefef;height:100%}#center-text{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%}#chat-circle:hover{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:1}#chat-circle{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0.8;fill:white;position:fixed;bottom:50px;right:50px;background:#5A5EB9;width:30px;height:30px;border-radius:50%;color:white;padding:28px;cursor:pointer;-webkit-box-shadow:0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}.btn#my-btn{background:white;padding-top:13px;padding-bottom:12px;border-radius:45px;padding-right:40px;padding-left:40px;color:#5865C3}#chat-overlay{background:rgba(255,255,255,0.1);position:absolute;top:0;left:0;width:100%;height:100%;border-radius:50%;display:none}.chat-box{-webkit-transform:scale(0);transform:scale(0);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform-origin:80% 90%;transform-origin:80% 90%;background:#efefef;position:fixed;right:30px;bottom:50px;width:350px;max-width:85vw;max-height:100vh;border-radius:5px;-webkit-box-shadow:0px 5px 35px 9px #ccc;box-shadow:0px 5px 35px 9px #ccc}.chat-box-toggle{float:right;margin-right:15px;cursor:pointer;fill:white}.chat-box-header{background:#5A5EB9;height:70px;border-top-left-radius:5px;border-top-right-radius:5px;color:white;text-align:center;font-size:20px;padding-top:17px}.chat-box-body{position:relative;height:370px;height:auto;border:1px solid #ccc;overflow:hidden}.chat-box-body:after{content:\"\";background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');opacity:0.1;top:0;left:0;bottom:0;right:0;height:100%;position:absolute;z-index:-1}#chat-input{background:#f4f7f9;width:100%;position:relative;height:47px;padding-top:10px;padding-right:50px;padding-bottom:10px;padding-left:15px;border:none;resize:none;outline:none;border:1px solid #ccc;color:#888;border-top:none;border-bottom-right-radius:5px;border-bottom-left-radius:5px;overflow:hidden}.chat-input>form{margin-bottom:0}#chat-input::-webkit-input-placeholder{color:#ccc}#chat-input::-moz-placeholder{color:#ccc}#chat-input:-ms-input-placeholder{color:#ccc}#chat-input:-moz-placeholder{color:#ccc}.chat-submit{position:absolute;bottom:3px;right:10px;background:transparent;-webkit-box-shadow:none;box-shadow:none;border:none;border-radius:50%;color:#5A5EB9;width:35px;height:35px}.chat-logs{padding:15px;height:370px;overflow-y:scroll}.chat-logs::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);background-color:#F5F5F5}.chat-logs::-webkit-scrollbar{width:5px;background-color:#F5F5F5}.chat-logs::-webkit-scrollbar-thumb{background-color:#5A5EB9}@media only screen and (max-width: 500px){.chat-logs{height:40vh}}.chat-msg.user3>.msg-avatar img,.chat-msg.user2>.msg-avatar img{width:45px;height:45px;border-radius:50%;float:left;width:15%}.chat-msg.self>.msg-avatar img{width:45px;height:45px;border-radius:50%;float:right;width:15%}.cm-msg-body{background:white;padding:10px 15px 10px 15px;color:#666;max-width:75%;float:left;margin-left:10px;position:relative;margin-bottom:20px}.cm-msg-text{border-radius:30px}.cm-msg-action{cursor:pointer;float:right}.cm-msg-action .cm-msg-body{font-size:0.8em;text-decoration:underline}.cm-msg-action .msg-avatar{display:none}.chat-msg{clear:both}.chat-msg.self>.cm-msg-text{float:right;margin-right:10px;background:#5A5EB9;color:white}.cm-msg-button>ul>li{list-style:none;float:left;width:50%}.cm-msg-button{clear:both;margin-bottom:70px}button{cursor:pointer}";
var HubChat = /** @class */ (function () {
    function HubChat(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Chat bot name
         */
        this.name = "Sonar";
        /**
         * Current (or default) open state of the chatbox
         */
        this.open = true;
        /**
         * Default input placeholder
         */
        this.placeholder = "Send a message...";
        this.messageCount = 0;
        this.messages = [];
        this.onChatSubmitted = createEvent(this, "onChatSubmitted", 7);
    }
    HubChat.prototype.componentWillLoad = function () {
        var _this = this;
        this.incomingMessages.messages.map(function (message) {
            console.log("HubChat willLoad", message);
            _this.messageCount++;
            _this.messages.push(message);
        });
    };
    HubChat.prototype.componentDidRender = function () {
        console.debug("HubChat componentDidRender", [this.open, this.incomingMessages]);
        this.toggleChatbox(this.open);
    };
    HubChat.prototype.openDidChange = function (newOpenState) {
        console.log("HubChat openDidChange", newOpenState);
        this.toggleChatbox(newOpenState);
    };
    HubChat.prototype.receiveMessages = function (newMessages) {
        var _this = this;
        console.log("HubChat incomingMessagesDidChange", newMessages);
        window.setTimeout(function () {
            newMessages.messages.map(function (message) {
                _this.messageCount++;
                _this.messages.push(message);
            });
        }, 1000);
    };
    // Send a message 
    HubChat.prototype.sendMessage = function (message) {
        // Always send as user and text
        var convertMessage = {
            text: message.text,
            user: 'self',
            type: 'text',
            route: message.route
        };
        this.messageCount++;
        this.messages.push(convertMessage);
        console.log("HubChat sendMessage", convertMessage);
        this.onChatSubmitted.emit(convertMessage);
    };
    HubChat.prototype.submitChat = function (e) {
        e.preventDefault();
        console.debug("HubChat submitChat", [this.chatInputEl.value]);
        this.sendMessage({
            text: this.chatInputEl.value,
            user: 'self',
            type: 'text'
        });
        // Clear out the user input
        this.chatInputEl.value = "";
    };
    // TODO: autosuggest like CLUI
    HubChat.prototype.onInput = function (e) {
        e.preventDefault();
        //   // use this.chatInputEl.value instead.
        //   // this.chatInput = e.target.value;
        return 'true';
    };
    HubChat.prototype.sendAction = function (action) {
        console.log("HubChat sendAction", action);
        this.sendMessage(action);
    };
    HubChat.prototype.toggleChatbox = function (boxState) {
        if (boxState === void 0) { boxState = null; }
        console.debug("Hub Chat: toggleChatbox", boxState);
        if (boxState !== null) {
            this.open = boxState;
        }
        else {
            this.open = !this.open;
        }
        this.chatBoxEl.style.setProperty('transform', this.open ? "scale(1)" : "scale(0)");
        this.chatCircleEl.style.setProperty('transform', this.open ? "scale(0)" : "scale(1)");
    };
    HubChat.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { id: "body" }, h("div", { id: "chat-circle", class: "btn btn-raised", onClick: function () { return _this.toggleChatbox(); }, ref: function (el) { return _this.chatCircleEl = el; } }, h("div", { id: "chat-overlay" }), h("svg", { width: "32", height: "32" }, h("path", { d: speechBubbles32 }))), h("div", { class: "chat-box", ref: function (el) { return _this.chatBoxEl = el; } }, h("div", { class: "chat-box-header" }, this.name, h("span", { class: "chat-box-toggle", onClick: function () { return _this.toggleChatbox(); } }, h("svg", { width: "32", height: "32" }, h("path", { d: x32 })))), h("div", { class: "chat-box-body" }, h("div", { class: "chat-box-overlay" }), h("div", { class: "chat-logs" }, this.messages.map(function (message) {
            //  add cm-msg- prefix below
            return h("div", { id: "cm-msg-" + _this.messageCount, class: "cm-msg-" + message.type + " chat-msg " + (message.user ? message.user : 'user2') }, h("span", { class: "msg-avatar" }, h("img", { src: "https://i.pravatar.cc/150?u=" + (message.user ? message.user : 'user2') + "@sonar" })), h("div", { innerHTML: message.text, class: "cm-msg-body cm-msg-" + message.type, onClick: function () { return _this.sendAction(message); } }));
        }))), h("div", { class: "chat-input" }, h("form", { onSubmit: function (e) { return _this.submitChat(e); } }, h("input", { type: "text", id: "chat-input", placeholder: this.placeholder, value: this.chatInput, onInput: function (e) { return _this.onInput(e); }, ref: function (el) { return _this.chatInputEl = el; } }), h("button", { type: "submit", class: "chat-submit", id: "chat-submit" }, h("svg", { width: "32", height: "32" }, h("path", { d: send24 })))))))));
    };
    Object.defineProperty(HubChat.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubChat, "watchers", {
        get: function () {
            return {
                "open": ["openDidChange"],
                "incomingMessages": ["receiveMessages"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return HubChat;
}());
HubChat.style = hubChatCss;
export { HubChat as hub_chat };
