# hub-embed



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type     | Default                                                                                          |
| ------------- | ------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------ |
| `code`        | `code`        |             | `string` | `'<hub-survey />'`                                                                               |
| `description` | `description` |             | `string` | `"You can add this card to your own site. Copy the code below and paste into your site editor."` |
| `title`       | `title`       |             | `string` | `"Embed this card"`                                                                              |


## Dependencies

### Used by

 - [arcgis-survey](../arcgis-survey)

### Depends on

- calcite-button
- calcite-modal

### Graph
```mermaid
graph TD;
  hub-embed --> calcite-button
  hub-embed --> calcite-modal
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  calcite-modal --> calcite-scrim
  calcite-modal --> calcite-icon
  calcite-scrim --> calcite-loader
  arcgis-survey --> hub-embed
  style hub-embed fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
