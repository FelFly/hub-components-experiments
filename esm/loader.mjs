import { a as patchEsm, b as bootstrapLazy } from './index-12d3ca5e.js';

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy(JSON.parse("[[\"calcite-button_15\",[[4,\"hub-radar\",{\"mapItem\":[8,\"map-item\"],\"mapItemData\":[8,\"map-item-data\"],\"mapCenter\":[1,\"map-center\"],\"mapZoom\":[2,\"map-zoom\"],\"messages\":[8],\"address\":[1025],\"webmap\":[1],\"showmap\":[4],\"isLoading\":[32]},[[0,\"eventAddressUpdated\",\"handleAddressUpdated\"]]],[1,\"hub-content-card\",{\"content\":[1],\"layout\":[1],\"contentItem\":[1040],\"actionButton\":[8,\"action-button\"],\"children\":[32]}],[1,\"hub-filter-category\",{\"name\":[1],\"categories\":[1040],\"facet\":[1],\"group\":[1],\"query\":[1537],\"facettype\":[1],\"facets\":[32],\"selectedCategories\":[32]},[[0,\"calciteTreeSelect\",\"treeSelected\"]]],[1,\"hub-gallery\",{\"site\":[1],\"groups\":[1],\"showsearch\":[4],\"searchbutton\":[1],\"searchplaceholder\":[1],\"buttontext\":[1],\"query\":[1],\"hubtype\":[1],\"sort\":[1],\"limit\":[2],\"layout\":[1],\"hubapi\":[4],\"portal\":[1],\"clientid\":[1],\"session\":[1537],\"queryInput\":[32],\"suggestions\":[32],\"results\":[32],\"catalog\":[32]},[[0,\"queryInput\",\"queryInputHandler\"],[0,\"querySelect\",\"querySelectHandler\"],[0,\"filterChanged\",\"filterChanged\"]]],[1,\"hub-input\",{\"address\":[1025],\"extent\":[520],\"inputAddress\":[32],\"addressSuggestions\":[32]},[[0,\"queryInput\",\"queryInputHandler\"],[0,\"querySelect\",\"querySelectHandler\"]]],[1,\"calcite-tree-item\",{\"selected\":[1540],\"expanded\":[1540],\"parentExpanded\":[1028,\"parent-expanded\"],\"depth\":[1538],\"hasChildren\":[1540,\"has-children\"],\"lines\":[1540],\"scale\":[1537],\"selectionMode\":[32]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-tree\",{\"lines\":[1540],\"theme\":[1537],\"scale\":[1537],\"selectionMode\":[1537,\"selection-mode\"],\"root\":[1540]},[[0,\"focus\",\"onFocus\"],[0,\"calciteTreeItemSelect\",\"onClick\"]]],[0,\"hub-map\",{\"webmap\":[1],\"center\":[1537],\"zoom\":[1538],\"drawing\":[1540],\"showFullscreen\":[4,\"show-fullscreen\"],\"geometry\":[16],\"mapCenter\":[32]}],[1,\"hub-suggest-input\",{\"query\":[1025],\"extent\":[520],\"placeholder\":[1],\"submit\":[1],\"suggestions\":[16],\"inputQuery\":[32],\"showSuggestions\":[32],\"suggestionArr\":[32],\"selectedSuggestionIndex\":[32],\"fuseIndex\":[32]},[[8,\"click\",\"handleWindowClick\"]]],[1,\"hub-card\",{\"item\":[1],\"image\":[1],\"name\":[1],\"description\":[1],\"contenttype\":[1],\"layout\":[1],\"url\":[1],\"buttonText\":[1,\"button-text\"],\"buttonAction\":[16],\"metadata\":[32]}],[1,\"calcite-card\",{\"loading\":[516],\"selected\":[1540],\"selectable\":[1540],\"theme\":[1537]}],[1,\"calcite-checkbox\",{\"checked\":[1540],\"indeterminate\":[1540],\"name\":[1537],\"value\":[1537],\"scale\":[1537],\"disabled\":[516],\"theme\":[513]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]],[1,\"calcite-button\",{\"color\":[1537],\"appearance\":[1537],\"theme\":[1537],\"scale\":[1537],\"width\":[1537],\"loading\":[516],\"round\":[516],\"floating\":[516],\"href\":[513],\"icon\":[513],\"iconPosition\":[1537,\"icon-position\"],\"disabled\":[516],\"hasText\":[32],\"setFocus\":[64]}],[1,\"calcite-loader\",{\"isActive\":[516,\"is-active\"],\"inline\":[516],\"type\":[513],\"value\":[2],\"text\":[1],\"noPadding\":[4,\"no-padding\"]}],[1,\"calcite-icon\",{\"icon\":[513],\"mirrored\":[516],\"scale\":[513],\"textLabel\":[1,\"text-label\"],\"theme\":[513],\"pathData\":[32],\"visible\":[32]}]]],[\"hub-upload\",[[1,\"hub-upload\",{\"clientid\":[1],\"portal\":[1],\"session\":[1025],\"uploads\":[32]},[[0,\"onFilesSubmitted\",\"fileHandler\"]]]]],[\"hub-workspace\",[[1,\"hub-workspace\",{\"session\":[1025],\"teams\":[32],\"member\":[32],\"events\":[32],\"places\":[32],\"content\":[32],\"comments\":[32]}]]],[\"hub-profile-editor\",[[1,\"hub-profile-editor\",{\"username\":[1],\"clientid\":[1],\"portal\":[1],\"session\":[1025],\"user\":[32]}]]],[\"hub-discussion\",[[1,\"hub-discussion\",{\"allowReply\":[4,\"allow-reply\"],\"org\":[1],\"target\":[1025],\"author\":[1025],\"query\":[1537],\"portalUrl\":[1025,\"portal-url\"],\"annotationsUrl\":[1025,\"annotations-url\"],\"update\":[4],\"session\":[1025],\"annotations\":[32],\"authors\":[32],\"annotationDescription\":[32],\"searchOptions\":[32],\"username\":[32]},[[0,\"eventAddAnnotation\",\"eventAddAnnotation\"],[0,\"eventDeleteAnnotation\",\"removeAnnotation\"]]]]],[\"arcgis-survey\",[[1,\"arcgis-survey\",{\"item\":[1]}]]],[\"calcite-date\",[[1,\"calcite-date\",{\"value\":[1537],\"valueAsDate\":[1040],\"min\":[1],\"max\":[1],\"active\":[516],\"prevMonthLabel\":[1,\"prev-month-label\"],\"nextMonthLabel\":[1,\"next-month-label\"],\"locale\":[1],\"noCalendarInput\":[4,\"no-calendar-input\"],\"scale\":[513],\"activeDate\":[32]},[[0,\"blur\",\"focusOutHandler\"],[8,\"focusin\",\"focusInHandler\"],[0,\"keyup\",\"keyDownHandler\"]]]]],[\"hub-event\",[[0,\"hub-event\",{\"clientid\":[1],\"eventtitle\":[1],\"orgurl\":[1],\"session\":[1025],\"eventDate\":[1025,\"event-date\"],\"eventOrganizer\":[1025,\"event-organizer\"],\"eventServiceUrl\":[1025,\"event-service-url\"],\"eventGroupId\":[1025,\"event-group-id\"],\"attending\":[1028],\"eventUrl\":[1025,\"event-url\"],\"callToActionText\":[32]}]]],[\"hub-profile-card\",[[1,\"hub-profile-card\",{\"username\":[1],\"type\":[1],\"profile\":[32]}]]],[\"arcgis-notebook\",[[1,\"arcgis-notebook\",{\"item\":[1],\"view\":[1],\"clientid\":[1],\"portal\":[1],\"session\":[1025],\"previewUrl\":[32],\"notebook\":[32]}]]],[\"calcite-split-button\",[[1,\"calcite-split-button\",{\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"dropdownIconType\":[1537,\"dropdown-icon-type\"],\"primaryText\":[513,\"primary-text\"],\"primaryIcon\":[513,\"primary-icon\"],\"primaryLabel\":[513,\"primary-label\"],\"dropdownLabel\":[513,\"dropdown-label\"],\"loading\":[516],\"disabled\":[516]}]]],[\"hub-follow-button\",[[0,\"hub-follow-button\",{\"icon\":[16],\"clientid\":[1],\"initiativeid\":[1],\"orgurl\":[1],\"user\":[1040],\"session\":[1025],\"following\":[1028],\"followtext\":[1],\"unfollowtext\":[1],\"callToActionText\":[32]}]]],[\"hub-identity\",[[1,\"hub-identity\",{\"signin\":[1],\"signout\":[1],\"displaysignin\":[4],\"displaysignout\":[4],\"clientid\":[1],\"orgurl\":[1],\"session\":[1025],\"username\":[32]}]]],[\"calcite-combobox\",[[1,\"calcite-combobox\",{\"active\":[516],\"disabled\":[516],\"theme\":[513],\"scale\":[1537],\"label\":[1],\"placeholder\":[1],\"items\":[32],\"selectedItems\":[32],\"visibleItems\":[32]},[[0,\"calciteComboboxItemChange\",\"calciteComboboxItemChangeHandler\"],[0,\"calciteChipDismiss\",\"calciteChipDismissHandler\"],[0,\"calciteComboboxItemKeyEvent\",\"calciteComboboxItemKeyEventHandler\"]]]]],[\"hub-topic-picker\",[[1,\"hub-topic-picker\",{\"topicsAvailable\":[16],\"values\":[1],\"options\":[1],\"topicsSelected\":[1040],\"allowSelection\":[4,\"allow-selection\"],\"topicsState\":[32]}]]],[\"calcite-combobox-item\",[[1,\"calcite-combobox-item\",{\"disabled\":[516],\"parentItem\":[16],\"selected\":[516],\"textLabel\":[513,\"text-label\"],\"value\":[513],\"isSelected\":[32],\"toggleSelected\":[64]},[[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-dropdown-item\",[[1,\"calcite-dropdown-item\",{\"active\":[1540],\"iconStart\":[513,\"icon-start\"],\"iconEnd\":[513,\"icon-end\"],\"href\":[513],\"setFocus\":[64]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteDropdownGroupRegister\",\"registerCalciteDropdownGroup\"],[16,\"calciteDropdownItemChange\",\"updateActiveItemOnChange\"]]]]],[\"calcite-link\",[[1,\"calcite-link\",{\"color\":[1537],\"theme\":[1537],\"href\":[513],\"icon\":[513],\"iconPosition\":[1537,\"icon-position\"],\"disabled\":[516],\"setFocus\":[64]}]]],[\"calcite-pagination\",[[1,\"calcite-pagination\",{\"num\":[2],\"start\":[2],\"total\":[2],\"textLabelNext\":[1,\"text-label-next\"],\"textLabelPrevious\":[1,\"text-label-previous\"],\"theme\":[513],\"scale\":[513],\"nextPage\":[64],\"previousPage\":[64]}]]],[\"calcite-popover\",[[1,\"calcite-popover\",{\"closeButton\":[516,\"close-button\"],\"disableFlip\":[516,\"disable-flip\"],\"disablePointer\":[516,\"disable-pointer\"],\"flipPlacements\":[16],\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"textClose\":[1,\"text-close\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64],\"setFocus\":[64],\"toggle\":[64]}]]],[\"calcite-radio-button\",[[1,\"calcite-radio-button\",{\"checked\":[1540],\"disabled\":[516],\"focused\":[1540],\"guid\":[1537],\"hidden\":[516],\"name\":[513],\"required\":[516],\"scale\":[1537],\"theme\":[1537],\"value\":[1]},[[0,\"click\",\"check\"]]]]],[\"calcite-radio-group-item\",[[1,\"calcite-radio-group-item\",{\"checked\":[1540],\"icon\":[513],\"iconPosition\":[1537,\"icon-position\"],\"value\":[8],\"useFallback\":[32]}]]],[\"calcite-slider\",[[1,\"calcite-slider\",{\"theme\":[513],\"disabled\":[1540],\"min\":[1538],\"max\":[1538],\"value\":[1538],\"minValue\":[2,\"min-value\"],\"maxValue\":[2,\"max-value\"],\"minLabel\":[1,\"min-label\"],\"maxLabel\":[1,\"max-label\"],\"snap\":[4],\"step\":[2],\"pageStep\":[2,\"page-step\"],\"ticks\":[2],\"labelTicks\":[516,\"label-ticks\"],\"labelHandles\":[516,\"label-handles\"],\"precise\":[4],\"histogram\":[16],\"tickValues\":[32],\"activeProp\":[32],\"minMaxValueRange\":[32],\"minValueDragRange\":[32],\"maxValueDragRange\":[32],\"setFocus\":[64]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"click\",\"clickHandler\"]]]]],[\"calcite-stepper-item\",[[1,\"calcite-stepper-item\",{\"active\":[1540],\"complete\":[1540],\"error\":[1028],\"disabled\":[1028],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"layout\":[1537],\"icon\":[1028],\"numbered\":[1028],\"scale\":[1537]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteStepperItemHasChanged\",\"updateActiveItemOnChange\"]]]]],[\"hub-content-table\",[[1,\"hub-content-table\",{\"site\":[1],\"query\":[1],\"limit\":[2],\"sort\":[1],\"hubapi\":[4],\"results\":[32],\"catalog\":[32]}]]],[\"hub-sonar-chat\",[[1,\"hub-sonar-chat\",{\"service\":[1],\"sendMessages\":[16]},[[0,\"onChatSubmitted\",\"onChatSubmittedHandler\"]]]]],[\"calcite-dropdown-group\",[[1,\"calcite-dropdown-group\",{\"groupTitle\":[513,\"group-title\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"calciteDropdownItemRegister\",\"registerCalciteDropdownItem\"],[0,\"calciteDropdownItemSelect\",\"updateActiveItemOnChange\"]]]]],[\"calcite-example\",[[1,\"calcite-example\",{\"property\":[1],\"state\":[32],\"doThing\":[64]},[[0,\"click\",\"onClick\"]]]]],[\"calcite-popover-manager\",[[0,\"calcite-popover-manager\",{\"selector\":[1],\"autoClose\":[516,\"auto-close\"]},[[10,\"click\",\"closeOpenPopovers\"]]]]],[\"calcite-radio-button-group\",[[1,\"calcite-radio-button-group\",{\"disabled\":[516],\"hidden\":[516],\"layout\":[1537],\"name\":[513],\"required\":[516],\"scale\":[1537],\"theme\":[1537]}]]],[\"calcite-radio-group\",[[1,\"calcite-radio-group\",{\"name\":[1],\"selectedItem\":[16],\"theme\":[513],\"scale\":[513],\"appearance\":[1537],\"layout\":[1537],\"width\":[1537],\"setFocus\":[64]},[[0,\"click\",\"handleClick\"],[0,\"calciteRadioGroupItemChange\",\"handleSelected\"],[0,\"keydown\",\"handleKeyDown\"]]]]],[\"calcite-stepper\",[[1,\"calcite-stepper\",{\"theme\":[1537],\"scale\":[1537],\"numbered\":[1540],\"icon\":[1540],\"layout\":[1537],\"requestedContent\":[16],\"nextStep\":[64],\"prevStep\":[64],\"goToStep\":[64],\"startStep\":[64],\"endStep\":[64]},[[0,\"calciteStepperItemKeyEvent\",\"calciteStepperItemKeyEvent\"],[0,\"registerCalciteStepperItem\",\"registerItem\"],[0,\"calciteStepperItemSelected\",\"updateItem\"]]]]],[\"calcite-switch\",[[1,\"calcite-switch\",{\"switched\":[1540],\"name\":[1537],\"value\":[1537],\"color\":[1537],\"scale\":[1537],\"theme\":[1537]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tab\",[[1,\"calcite-tab\",{\"tab\":[1537],\"isActive\":[1540,\"is-active\"],\"labeledBy\":[32],\"getTabIndex\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"]]]]],[\"calcite-tab-nav\",[[1,\"calcite-tab-nav\",{\"storageId\":[1,\"storage-id\"],\"syncId\":[1,\"sync-id\"],\"layout\":[1537],\"selectedTab\":[32]},[[0,\"calciteTabsFocusPrevious\",\"focusPreviousTabHandler\"],[0,\"calciteTabsFocusNext\",\"focusNextTabHandler\"],[0,\"calciteTabsActivate\",\"activateTabHandler\"],[32,\"calciteTabChange\",\"globalTabChangeHandler\"]]]]],[\"calcite-tab-title\",[[1,\"calcite-tab-title\",{\"tab\":[1537],\"isActive\":[1540,\"is-active\"],\"layout\":[1537],\"controls\":[32],\"getTabIndex\":[64],\"getTabIdentifier\":[64],\"updateAriaInfo\":[64]},[[16,\"calciteTabChange\",\"tabChangeHandler\"],[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-tabs\",[[1,\"calcite-tabs\",{\"theme\":[513],\"layout\":[513],\"titles\":[32],\"tabs\":[32]},[[0,\"calciteTabTitleRegister\",\"calciteTabTitleRegister\"],[0,\"calciteTabTitleUnregister\",\"calciteTabTitleUnregister\"],[0,\"calciteTabRegister\",\"calciteTabRegister\"],[0,\"calciteTabUnregister\",\"calciteTabUnregister\"]]]]],[\"calcite-tooltip\",[[1,\"calcite-tooltip\",{\"offsetDistance\":[514,\"offset-distance\"],\"offsetSkidding\":[514,\"offset-skidding\"],\"open\":[516],\"placement\":[513],\"referenceElement\":[1,\"reference-element\"],\"theme\":[513],\"_referenceElement\":[32],\"reposition\":[64]}]]],[\"calcite-tooltip-manager\",[[0,\"calcite-tooltip-manager\",{\"selector\":[1]},[[3,\"mouseenter\",\"mouseEnterShow\"],[3,\"mouseleave\",\"mouseLeaveHide\"],[2,\"focus\",\"focusShow\"],[2,\"blur\",\"blurHide\"]]]]],[\"hub-license-picker\",[[1,\"hub-license-picker\"]]],[\"hub-telemetry\",[[4,\"hub-telemetry\",{\"google\":[1],\"telemetry\":[32]},[[8,\"hub-telemetry-event\",\"handleEvent\"]]]]],[\"hub-embed\",[[1,\"hub-embed\",{\"title\":[1],\"description\":[1],\"code\":[1]}]]],[\"calcite-dropdown\",[[1,\"calcite-dropdown\",{\"active\":[1540],\"alignment\":[1537],\"maxItems\":[2,\"max-items\"],\"theme\":[1537],\"selectedItems\":[1040],\"scale\":[1537],\"width\":[1537],\"type\":[1537]},[[0,\"click\",\"openDropdown\"],[8,\"click\",\"closeCalciteDropdownOnClick\"],[0,\"calciteDropdownClose\",\"closeCalciteDropdownOnEvent\"],[0,\"keydown\",\"keyDownHandler\"],[1,\"mouseenter\",\"mouseoverHandler\"],[1,\"mouseleave\",\"mouseoffHandler\"],[0,\"calciteDropdownItemKeyEvent\",\"calciteDropdownItemKeyEvent\"],[0,\"calciteDropdownItemSelect\",\"handleItemSelect\"],[0,\"calciteDropdownGroupRegister\",\"registerCalciteDropdownGroup\"]]]]],[\"calcite-graph\",[[0,\"calcite-graph\",{\"data\":[16],\"width\":[2],\"height\":[2],\"highlightMin\":[2,\"highlight-min\"],\"highlightMax\":[2,\"highlight-max\"]}]]],[\"hub-chat\",[[1,\"hub-chat\",{\"name\":[1],\"open\":[1540],\"placeholder\":[1],\"incomingMessages\":[1040],\"chatInput\":[32],\"messageCount\":[32],\"messages\":[32]}]]],[\"drop-area_2\",[[1,\"hub-upload-file\",{\"file\":[16],\"itemType\":[1,\"item-type\"],\"clientid\":[1],\"portal\":[1],\"session\":[1025],\"editors\":[32]}],[1,\"drop-area\",{\"allowedTypes\":[16],\"highlighted\":[32]}]]],[\"calcite-alert\",[[1,\"calcite-alert\",{\"active\":[1540],\"autoDismiss\":[4,\"auto-dismiss\"],\"autoDismissDuration\":[1537,\"auto-dismiss-duration\"],\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"icon\":[4],\"alertQueue\":[16],\"alertQueueLength\":[2,\"alert-queue-length\"],\"currentAlert\":[1,\"current-alert\"],\"open\":[64],\"close\":[64],\"setFocus\":[64]},[[8,\"calciteAlertOpen\",\"alertOpen\"],[8,\"calciteAlertClose\",\"alertClose\"],[8,\"calciteAlertSync\",\"alertRegister\"]]]]],[\"discussion-entry_2\",[[1,\"discussion-input\",{\"placeholder\":[1],\"submit\":[1],\"target\":[1],\"annotationsUrl\":[1,\"annotations-url\"],\"session\":[1025],\"error\":[32],\"member\":[32]}],[1,\"discussion-entry\",{\"annotationId\":[1,\"annotation-id\"],\"authorImage\":[1,\"author-image\"],\"authorName\":[1,\"author-name\"],\"description\":[1],\"publishedDate\":[1,\"published-date\"],\"allowReply\":[4,\"allow-reply\"],\"allowEdit\":[4,\"allow-edit\"],\"allowDelete\":[4,\"allow-delete\"]}]]],[\"hub-button\",[[0,\"hub-button\",{\"text\":[1025],\"icon\":[16],\"action\":[16]},[[0,\"click\",\"handleKeyDown\"]]]]],[\"calcite-date-day\",[[1,\"calcite-date-day\",{\"day\":[2],\"disabled\":[516],\"currentMonth\":[516,\"current-month\"],\"selected\":[516],\"active\":[516],\"locale\":[1],\"scale\":[513]},[[0,\"click\",\"onClick\"],[0,\"keydown\",\"keyDownHandler\"]]]]],[\"calcite-date-month_2\",[[1,\"calcite-date-month\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1],\"scale\":[513]},[[0,\"keydown\",\"keyDownHandler\"],[0,\"focusout\",\"disableActiveFocus\"]]],[1,\"calcite-date-month-header\",{\"selectedDate\":[16],\"activeDate\":[16],\"min\":[16],\"max\":[16],\"locale\":[1],\"prevMonthLabel\":[1,\"prev-month-label\"],\"nextMonthLabel\":[1,\"next-month-label\"],\"scale\":[513]}]]],[\"calcite-chip\",[[1,\"calcite-chip\",{\"value\":[1],\"theme\":[513],\"scale\":[513],\"color\":[1537],\"appearance\":[1537],\"icon\":[513],\"dismissible\":[1540]}]]],[\"calcite-input_4\",[[1,\"calcite-input-message\",{\"active\":[1540],\"icon\":[516],\"scale\":[1537],\"status\":[1537],\"theme\":[1537],\"type\":[1537]}],[4,\"calcite-input\",{\"status\":[1537],\"loading\":[1540],\"scale\":[1537],\"alignment\":[1537],\"value\":[1537],\"step\":[513],\"min\":[513],\"max\":[513],\"prefixText\":[1025,\"prefix-text\"],\"suffixText\":[1025,\"suffix-text\"],\"icon\":[1544],\"type\":[1537],\"numberButtonType\":[1537,\"number-button-type\"],\"theme\":[1537],\"required\":[4],\"autofocus\":[4],\"placeholder\":[1],\"setFocus\":[64]},[[16,\"calciteLabelSelectedEvent\",\"calciteInputLabelSelected\"]]],[1,\"calcite-label\",{\"status\":[1537],\"scale\":[1537],\"theme\":[1537],\"layout\":[1537]},[[0,\"click\",\"handleClick\"]]],[1,\"calcite-progress\",{\"type\":[1],\"value\":[2],\"text\":[1],\"reversed\":[4],\"theme\":[513]}]]],[\"calcite-accordion_6\",[[1,\"metadata-form\",{\"sections\":[1040],\"locale\":[1],\"resource\":[1544]},[[0,\"resourceUpdated\",\"resourceUpdated\"]]],[1,\"metadata-section-view\",{\"spec\":[1],\"elementTitle\":[1025,\"element-title\"],\"description\":[1025],\"locale\":[1],\"inputs\":[16],\"resource\":[1040],\"translator\":[1],\"strings\":[32],\"sectionSchema\":[32]},[[0,\"elementUpdated\",\"elementUpdatedHandler\"]]],[1,\"calcite-accordion-item\",{\"active\":[1540],\"itemTitle\":[1,\"item-title\"],\"itemSubtitle\":[1,\"item-subtitle\"],\"icon\":[513]},[[0,\"keydown\",\"keyDownHandler\"],[16,\"calciteAccordionChange\",\"updateActiveItemOnChange\"]]],[1,\"calcite-accordion\",{\"theme\":[1537],\"scale\":[1537],\"appearance\":[1537],\"iconPosition\":[1537,\"icon-position\"],\"iconType\":[1537,\"icon-type\"],\"selectionMode\":[1537,\"selection-mode\"]},[[0,\"calciteAccordionItemKeyEvent\",\"calciteAccordionItemKeyEvent\"],[0,\"calciteAccordionItemRegister\",\"registerCalciteAccordionItem\"],[0,\"calciteAccordionItemSelect\",\"updateActiveItemOnChange\"]]],[1,\"metadata-element-view\",{\"elementTitle\":[1,\"element-title\"],\"required\":[4],\"type\":[1],\"schema\":[16],\"translator\":[1],\"subtype\":[1],\"elementId\":[1,\"element-id\"],\"value\":[1],\"description\":[1]},[[0,\"editorUpdated\",\"editorUpdatedHandler\"]]],[1,\"metadata-section-help\",{\"elementTitle\":[1,\"element-title\"],\"description\":[1]}]]],[\"calcite-notice_2\",[[1,\"hub-metadata-editor\",{\"item\":[1025],\"itemTitle\":[1025,\"item-title\"],\"tags\":[1040],\"summary\":[1025],\"clientid\":[1],\"portal\":[1],\"session\":[1025],\"resource\":[32]}],[1,\"calcite-notice\",{\"active\":[1540],\"color\":[1537],\"theme\":[1537],\"scale\":[1537],\"width\":[1537],\"dismissible\":[1540],\"icon\":[4],\"close\":[64],\"open\":[64],\"setFocus\":[64]}]]],[\"hub-events-list_4\",[[1,\"hub-places-map\",{\"value\":[1040],\"bindState\":[4,\"bind-state\"],\"session\":[1025],\"mode\":[1537]},[[0,\"drawingComplete\",\"placeAdded\"]]],[1,\"hub-events-list\",{\"session\":[1025],\"events\":[32]}],[1,\"hub-list\",{\"icon\":[1],\"name\":[1],\"url\":[1],\"summary\":[1],\"collection\":[16]}],[1,\"hub-statistic\",{\"value\":[8],\"label\":[1],\"units\":[1],\"size\":[1]}]]],[\"calcite-modal_2\",[[1,\"calcite-modal\",{\"beforeClose\":[16],\"closeLabel\":[1,\"close-label\"],\"docked\":[516],\"firstFocus\":[16],\"disableEscape\":[4,\"disable-escape\"],\"size\":[513],\"color\":[513],\"theme\":[513],\"noPadding\":[4,\"no-padding\"],\"isActive\":[32],\"open\":[64],\"close\":[64],\"focusElement\":[64],\"scrollContent\":[64]},[[8,\"keyup\",\"handleEscape\"]]],[1,\"calcite-scrim\",{\"loading\":[516],\"theme\":[1537]}]]]]"), options);
  });
};

export { defineCustomElements };
