import { r as registerInstance, c as createEvent, h, H as Host } from './index-12d3ca5e.js';

const hubTopicPickerCss = ":host{display:block}calcite-chip.topic-selectable{cursor:pointer}calcite-chip:hover{-webkit-box-shadow:0 0 5px 0 rgba(76,76,76,.25);box-shadow:0 0 5px 0 rgba(76,76,76,.25)}";

const HubTopicPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Array of topics to be displayed
         */
        this.topicsAvailable = ['education', 'health', 'recreation', 'transportation'];
        /**
         * Array of topics that are current selected
         */
        this.topicsSelected = []; // 'education', 'transportation'
        /**
         * Option to allow for selected & de-selecting topics
         */
        this.allowSelection = true;
        this.topicSelected = createEvent(this, "topicSelected", 7);
        this.topicsChanged = createEvent(this, "topicsChanged", 7);
        this.editorUpdated = createEvent(this, "editorUpdated", 7);
    }
    componentWillLoad() {
        console.log("hub-topic-picker: this.allowSelection", this.allowSelection);
        if (!!this.values) {
            console.log("hub-topic-picker: componentWillLoad: values", this.values);
            this.topicsSelected = this.values.split(",");
        }
        if (!!this.options) {
            console.log("hub-topic-picker: componentWillLoad: options", this.options);
            this.topicsAvailable = this.options.split(",");
        }
        console.log('hub-topic-picker: componentWillLoad', this.topicsAvailable, this.values);
        this.updateTopics();
    }
    updateTopics() {
        this.topicsState = [];
        this.topicsAvailable.forEach(element => {
            this.topicsState.push({
                name: element,
                selected: this.topicsSelected.includes(element)
            });
        });
        // Send event that topics changed
        this.topicsChanged.emit(this.topicsState);
        this.editorUpdated.emit(this.topicsSelected);
    }
    onTopicSelected(selectedName, selectedState) {
        // If selection isn't allowed, block events
        if (!this.allowSelection) {
            return false;
        }
        this.topicSelected.emit({ name: selectedName, selected: selectedState });
        if (selectedState) {
            this.topicsSelected = [...this.topicsSelected, selectedName];
        }
        else {
            this.topicsSelected = this.topicsSelected.filter((topic) => { return (topic !== selectedName); });
        }
    }
    render() {
        return (h(Host, null, h("slot", null), this.topicsState.map((topic) => h("calcite-chip", { class: this.allowSelection ? "topic-selectable" : "", onClick: (_ref) => this.onTopicSelected(topic.name, !topic.selected), value: topic.name, appearance: topic.selected ? 'solid' : 'clear', dismissible: this.allowSelection && topic.selected }, topic.name))));
    }
    static get watchers() { return {
        "topicsSelected": ["updateTopics"]
    }; }
};
HubTopicPicker.style = hubTopicPickerCss;

export { HubTopicPicker as hub_topic_picker };
