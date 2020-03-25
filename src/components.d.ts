/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IHubChat,
} from './utils/hub-types';
import {
  IItem,
} from '@esri/arcgis-rest-portal';
import {
  IUser,
} from '@esri/arcgis-rest-common-types';

export namespace Components {
  interface HubButton {
    /**
    * action to trigger when the button is clicked
    */
    'action': Function;
    /**
    * Icon to display alongside the text
    */
    'icon': JSX.Element;
    /**
    * Button text to display
    */
    'text': string;
  }
  interface HubCard {
    'buttonAction': Function;
    'buttonText': string;
    'contenttype': string;
    'description': string;
    'image': string;
    'item': string;
    /**
    * Specify the layout of the card
    */
    'layout': "horizontal" | "vertical";
    'name': string;
    'url': string;
  }
  interface HubChat {
    /**
    * Set property to pass in messages. Can be used for default welcome message.
    */
    'incomingMessages': IHubChat;
    /**
    * Chat bot name
    */
    'name': string;
    /**
    * Current (or default) open state of the chatbox
    */
    'open': boolean;
    /**
    * Default input placeholder
    */
    'placeholder': string;
  }
  interface HubContentCard {
    'actionButton': any;
    'content': string;
    'contentItem': IItem;
    'layout': "horizontal" | "vertical";
  }
  interface HubEvent {
    'attending': boolean;
    /**
    * ClientID to identify the app launching OAuth
    */
    'clientid': string;
    'eventDate': string;
    'eventGroupId': string;
    'eventOrganizer': string;
    'eventServiceUrl': string;
    'eventUrl': string;
    /**
    * identifier for the ArcGIS Hub initiative
    */
    'eventtitle': string;
    /**
    * url of the ArcGIS Online organization
    */
    'orgurl': string;
    /**
    * Serialized authentication information.
    */
    'session': string;
  }
  interface HubFilterCategory {
    'categories': Array<string>;
    'name': string;
  }
  interface HubFollowButton {
    /**
    * ClientID to identify the app launching auth
    */
    'clientid': string;
    /**
    * Denotes whether the user is already following the configured initiative.
    */
    'following': boolean;
    /**
    * Follow icon
    */
    'icon': JSX.Element;
    /**
    * identifier for the ArcGIS Hub initiative
    */
    'initiativeid': string;
    /**
    * url of the ArcGIS Online organization
    */
    'orgurl': string;
    /**
    * Serialized authentication information.
    */
    'session': string;
    /**
    * User metadata
    */
    'user': IUser;
  }
  interface HubInput {
    /**
    * Default address to search
    */
    'address': string;
    /**
    * Geographic extent limit for geocoding
    */
    'extent': any;
  }
  interface HubMap {
    /**
    * Center of the map, "[longitude, latitude]"
    */
    'center': string;
    /**
    * Option to show drawing tools
    */
    'drawing': boolean;
    /**
    * Webmap Item configuration to load
    */
    'webmap': string;
    /**
    * Map zoom level: 1=world ... 20=street
    */
    'zoom': number;
  }
  interface HubRadar {
    'address': string;
    'mapCenter': string;
    'mapItem': any;
    'mapItemData': any;
    'mapZoom': number;
    'messages': any;
    'showmap': boolean;
    'webmap': string;
  }
  interface HubSearch {}
  interface HubSonarChat {
    'sendMessages': IHubChat;
    'service': string;
  }
  interface HubSuggestInput {
    /**
    * Geographic extent limit for geocoding
    */
    'extent': any;
    /**
    * Value for input placeholder
    */
    'placeholder': string;
    /**
    * Default search
    */
    'query': string;
    /**
    * Value for submit button
    */
    'submit': string;
    /**
    * Values that the auto-complete textbox should search for
    */
    'suggestions': Array<string>;
  }
}

declare global {


  interface HTMLHubButtonElement extends Components.HubButton, HTMLStencilElement {}
  var HTMLHubButtonElement: {
    prototype: HTMLHubButtonElement;
    new (): HTMLHubButtonElement;
  };

  interface HTMLHubCardElement extends Components.HubCard, HTMLStencilElement {}
  var HTMLHubCardElement: {
    prototype: HTMLHubCardElement;
    new (): HTMLHubCardElement;
  };

  interface HTMLHubChatElement extends Components.HubChat, HTMLStencilElement {}
  var HTMLHubChatElement: {
    prototype: HTMLHubChatElement;
    new (): HTMLHubChatElement;
  };

  interface HTMLHubContentCardElement extends Components.HubContentCard, HTMLStencilElement {}
  var HTMLHubContentCardElement: {
    prototype: HTMLHubContentCardElement;
    new (): HTMLHubContentCardElement;
  };

  interface HTMLHubEventElement extends Components.HubEvent, HTMLStencilElement {}
  var HTMLHubEventElement: {
    prototype: HTMLHubEventElement;
    new (): HTMLHubEventElement;
  };

  interface HTMLHubFilterCategoryElement extends Components.HubFilterCategory, HTMLStencilElement {}
  var HTMLHubFilterCategoryElement: {
    prototype: HTMLHubFilterCategoryElement;
    new (): HTMLHubFilterCategoryElement;
  };

  interface HTMLHubFollowButtonElement extends Components.HubFollowButton, HTMLStencilElement {}
  var HTMLHubFollowButtonElement: {
    prototype: HTMLHubFollowButtonElement;
    new (): HTMLHubFollowButtonElement;
  };

  interface HTMLHubInputElement extends Components.HubInput, HTMLStencilElement {}
  var HTMLHubInputElement: {
    prototype: HTMLHubInputElement;
    new (): HTMLHubInputElement;
  };

  interface HTMLHubMapElement extends Components.HubMap, HTMLStencilElement {}
  var HTMLHubMapElement: {
    prototype: HTMLHubMapElement;
    new (): HTMLHubMapElement;
  };

  interface HTMLHubRadarElement extends Components.HubRadar, HTMLStencilElement {}
  var HTMLHubRadarElement: {
    prototype: HTMLHubRadarElement;
    new (): HTMLHubRadarElement;
  };

  interface HTMLHubSearchElement extends Components.HubSearch, HTMLStencilElement {}
  var HTMLHubSearchElement: {
    prototype: HTMLHubSearchElement;
    new (): HTMLHubSearchElement;
  };

  interface HTMLHubSonarChatElement extends Components.HubSonarChat, HTMLStencilElement {}
  var HTMLHubSonarChatElement: {
    prototype: HTMLHubSonarChatElement;
    new (): HTMLHubSonarChatElement;
  };

  interface HTMLHubSuggestInputElement extends Components.HubSuggestInput, HTMLStencilElement {}
  var HTMLHubSuggestInputElement: {
    prototype: HTMLHubSuggestInputElement;
    new (): HTMLHubSuggestInputElement;
  };
  interface HTMLElementTagNameMap {
    'hub-button': HTMLHubButtonElement;
    'hub-card': HTMLHubCardElement;
    'hub-chat': HTMLHubChatElement;
    'hub-content-card': HTMLHubContentCardElement;
    'hub-event': HTMLHubEventElement;
    'hub-filter-category': HTMLHubFilterCategoryElement;
    'hub-follow-button': HTMLHubFollowButtonElement;
    'hub-input': HTMLHubInputElement;
    'hub-map': HTMLHubMapElement;
    'hub-radar': HTMLHubRadarElement;
    'hub-search': HTMLHubSearchElement;
    'hub-sonar-chat': HTMLHubSonarChatElement;
    'hub-suggest-input': HTMLHubSuggestInputElement;
  }
}

declare namespace LocalJSX {
  interface HubButton {
    /**
    * action to trigger when the button is clicked
    */
    'action'?: Function;
    /**
    * Icon to display alongside the text
    */
    'icon'?: JSX.Element;
    /**
    * Button text to display
    */
    'text'?: string;
  }
  interface HubCard {
    'buttonAction'?: Function;
    'buttonText'?: string;
    'contenttype'?: string;
    'description'?: string;
    'image'?: string;
    'item'?: string;
    /**
    * Specify the layout of the card
    */
    'layout'?: "horizontal" | "vertical";
    'name'?: string;
    'url'?: string;
  }
  interface HubChat {
    /**
    * Set property to pass in messages. Can be used for default welcome message.
    */
    'incomingMessages'?: IHubChat;
    /**
    * Chat bot name
    */
    'name'?: string;
    /**
    * Emits the chat input
    */
    'onOnChatSubmitted'?: (event: CustomEvent<any>) => void;
    /**
    * Current (or default) open state of the chatbox
    */
    'open'?: boolean;
    /**
    * Default input placeholder
    */
    'placeholder'?: string;
  }
  interface HubContentCard {
    'actionButton'?: any;
    'content'?: string;
    'contentItem'?: IItem;
    'layout'?: "horizontal" | "vertical";
  }
  interface HubEvent {
    'attending'?: boolean;
    /**
    * ClientID to identify the app launching OAuth
    */
    'clientid'?: string;
    'eventDate'?: string;
    'eventGroupId'?: string;
    'eventOrganizer'?: string;
    'eventServiceUrl'?: string;
    'eventUrl'?: string;
    /**
    * identifier for the ArcGIS Hub initiative
    */
    'eventtitle'?: string;
    /**
    * url of the ArcGIS Online organization
    */
    'orgurl'?: string;
    /**
    * Serialized authentication information.
    */
    'session'?: string;
  }
  interface HubFilterCategory {
    'categories'?: Array<string>;
    'name'?: string;
    'onFilterChanged'?: (event: CustomEvent<any>) => void;
  }
  interface HubFollowButton {
    /**
    * ClientID to identify the app launching auth
    */
    'clientid'?: string;
    /**
    * Denotes whether the user is already following the configured initiative.
    */
    'following'?: boolean;
    /**
    * Follow icon
    */
    'icon'?: JSX.Element;
    /**
    * identifier for the ArcGIS Hub initiative
    */
    'initiativeid'?: string;
    /**
    * url of the ArcGIS Online organization
    */
    'orgurl'?: string;
    /**
    * Serialized authentication information.
    */
    'session'?: string;
    /**
    * User metadata
    */
    'user'?: IUser;
  }
  interface HubInput {
    /**
    * Default address to search
    */
    'address'?: string;
    /**
    * Geographic extent limit for geocoding
    */
    'extent'?: any;
    /**
    * Emits the {address, coordinates} of the geocoded result
    */
    'onEventAddressUpdated'?: (event: CustomEvent<any>) => void;
  }
  interface HubMap {
    /**
    * Center of the map, "[longitude, latitude]"
    */
    'center'?: string;
    /**
    * Option to show drawing tools
    */
    'drawing'?: boolean;
    /**
    * Sends event when drawing is complete
    */
    'onDrawingComplete'?: (event: CustomEvent<any>) => void;
    /**
    * Webmap Item configuration to load
    */
    'webmap'?: string;
    /**
    * Map zoom level: 1=world ... 20=street
    */
    'zoom'?: number;
  }
  interface HubRadar {
    'address'?: string;
    'mapCenter'?: string;
    'mapItem'?: any;
    'mapItemData'?: any;
    'mapZoom'?: number;
    'messages'?: any;
    'showmap'?: boolean;
    'webmap'?: string;
  }
  interface HubSearch {}
  interface HubSonarChat {
    'sendMessages'?: IHubChat;
    'service'?: string;
  }
  interface HubSuggestInput {
    /**
    * Geographic extent limit for geocoding
    */
    'extent'?: any;
    'onQueryInput'?: (event: CustomEvent<any>) => void;
    /**
    * Emits the query of the input result
    */
    'onQuerySelect'?: (event: CustomEvent<any>) => void;
    /**
    * Value for input placeholder
    */
    'placeholder'?: string;
    /**
    * Default search
    */
    'query'?: string;
    /**
    * Value for submit button
    */
    'submit'?: string;
    /**
    * Values that the auto-complete textbox should search for
    */
    'suggestions'?: Array<string>;
  }

  interface IntrinsicElements {
    'hub-button': HubButton;
    'hub-card': HubCard;
    'hub-chat': HubChat;
    'hub-content-card': HubContentCard;
    'hub-event': HubEvent;
    'hub-filter-category': HubFilterCategory;
    'hub-follow-button': HubFollowButton;
    'hub-input': HubInput;
    'hub-map': HubMap;
    'hub-radar': HubRadar;
    'hub-search': HubSearch;
    'hub-sonar-chat': HubSonarChat;
    'hub-suggest-input': HubSuggestInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hub-button': LocalJSX.HubButton & JSXBase.HTMLAttributes<HTMLHubButtonElement>;
      'hub-card': LocalJSX.HubCard & JSXBase.HTMLAttributes<HTMLHubCardElement>;
      'hub-chat': LocalJSX.HubChat & JSXBase.HTMLAttributes<HTMLHubChatElement>;
      'hub-content-card': LocalJSX.HubContentCard & JSXBase.HTMLAttributes<HTMLHubContentCardElement>;
      'hub-event': LocalJSX.HubEvent & JSXBase.HTMLAttributes<HTMLHubEventElement>;
      'hub-filter-category': LocalJSX.HubFilterCategory & JSXBase.HTMLAttributes<HTMLHubFilterCategoryElement>;
      'hub-follow-button': LocalJSX.HubFollowButton & JSXBase.HTMLAttributes<HTMLHubFollowButtonElement>;
      'hub-input': LocalJSX.HubInput & JSXBase.HTMLAttributes<HTMLHubInputElement>;
      'hub-map': LocalJSX.HubMap & JSXBase.HTMLAttributes<HTMLHubMapElement>;
      'hub-radar': LocalJSX.HubRadar & JSXBase.HTMLAttributes<HTMLHubRadarElement>;
      'hub-search': LocalJSX.HubSearch & JSXBase.HTMLAttributes<HTMLHubSearchElement>;
      'hub-sonar-chat': LocalJSX.HubSonarChat & JSXBase.HTMLAttributes<HTMLHubSonarChatElement>;
      'hub-suggest-input': LocalJSX.HubSuggestInput & JSXBase.HTMLAttributes<HTMLHubSuggestInputElement>;
    }
  }
}


