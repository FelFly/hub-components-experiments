# arcgis-notebook



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                 | Type                  | Default                              |
| ---------- | ---------- | ------------------------------------------- | --------------------- | ------------------------------------ |
| `clientid` | `clientid` | ClientID to identify the app launching auth | `string`              | `"WXC842NRBVB6NZ2r"`                 |
| `item`     | `item`     |                                             | `string`              | `"9cd1f9bdc6794e63ae450087b3b67e05"` |
| `portal`   | `portal`   |                                             | `string`              | `"https://www.arcgis.com"`           |
| `session`  | `session`  | Serialized authentication information.      | `string`              | `undefined`                          |
| `view`     | `view`     |                                             | `"edit" \| "preview"` | `"preview"`                          |


## Dependencies

### Depends on

- [hub-button](../../presentation/hub-button)

### Graph
```mermaid
graph TD;
  arcgis-notebook --> hub-button
  hub-button --> calcite-button
  calcite-button --> calcite-loader
  calcite-button --> calcite-icon
  style arcgis-notebook fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
