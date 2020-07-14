import"./p-0609b493.js";import{b as e,g as a,a as i}from"./p-ae78f844.js";function o(a){return o=void 0,(i=e(a)).match(/(qaext|\.mapsqa)\.arcgis.com/)?o="https://hubqa.arcgis.com":i.match(/(devext|\.mapsdevext)\.arcgis.com/)?o="https://hubdev.arcgis.com":i.match(/(www|\.maps)\.arcgis.com/)&&(o="https://hub.arcgis.com"),o;var i,o}var t={app:["Application","Dashboard","Form","Insights Page","Insights Workbook","Operation View","Web Mapping Application","StoryMap","Web Experience"],dataset:["CSV Collection","CSV","Feature Collection Template","Feature Collection","Feature Layer","Feature Service","File Geodatabase","GeoJSON","GeoJson","KML Collection","KML","Microsoft Excel","Raster Layer","Shapefile","Stream Service","Table"],document:["CAD Drawing","Document Link","Hub Page","Site Page","Image","iWork Keynote","iWork Numbers","iWork Pages","Microsoft Powerpoint","Microsoft Visio","Microsoft Word","PDF","Pro Map","Report Template"],event:["Hub Event"],initiative:["Hub Initiative"],map:["City Engine Web Scene","CityEngine Web Scene","Image Collection","Image Service","Map Service Layer","Map Service","Scene Service","Vector Tile Service","Web Map Service","Web Map Tile Service","Web Map","Web Scene","WFS","WMS"],other:["360 VR Experience","AppBuilder Widget Package","Application Configuration","ArcPad Package","Code Attachment","Code Sample","Desktop Add In","Desktop Application Template","Desktop Application","Desktop Style","Explorer Add In","Explorer Layer","Geocoding Service","Geometry Service","Geoprocessing Package","Geoprocessing Sample","Geoprocessing Service","Layer File","Layer Package","Layer Template","Layer","Layout","Locator Package","Map Area","Map Document","Map Package","Map Service Definition","Map Template","Mobile Application","Mobile Map Package","Native Application","Network Analysis Service","Operations Dashboard Add In","Project Package","Project Template","Raster Function Template","Rule Package","Scene Package","Service Definition","SQLite Geodatabase","Style","Tile Package","Vector Tile Package","Workflow Manager Package"],site:["Hub Site Application","Site Application"],downloadableTypes:["360 VR Experience","Application","CityEngine Web Scene","Code Sample","CSV Collection","CSV","CAD Drawing","Desktop Application","Desktop Application Template","Desktop Style","File Geodatabase","GeoJson","Geoprocessing Package","Geoprocessing Sample","Image","iWork Keynote","iWork Numbers","KML Collection","KML","Layer","Layer File","Layer Package","Layout","Locator Package","Map Package","Map Service Definition","Map Template","Microsoft Excel","Microsoft Powerpoint","Microsoft Visio","Microsoft Word","Operations Dashboard Add In","PDF","Pro Map","Project Package","Project Template","Raster function template","Rule Package","Service Definition","Shapefile","Vector Tile Package","Workflow Manager Package"],downloadableTypeKeywords:["Data"],apiTypes:["Feature Service","Map Service","Image Service"]},r={};function n(e){if(void 0===e&&(e=""),r[e])return r[e];for(var a=0,i=Object.keys(t);a<i.length;a++)for(var o=i[a],n=0,c=t[o];n<c.length;n++){var p=c[n];if(e.toLowerCase()===p.toLowerCase())return r[e]=o,o}}function c(e){return void 0===e&&(e=""),t[e.toLowerCase()]}function p(e){void 0===e&&(e={});var a=n(function(e){void 0===e&&(e={});var a=e.typeKeywords||[];if("Web Mapping Application"===e.type){if(a.includes("hubSite"))return"Hub Site Application";if(a.includes("hubPage"))return"Hub Page"}return e.type}(e));if(a){var i=Array.from(a);return i[0]=i[0].toUpperCase(),[i.join("")]}return["Other"]}function s(e,a){return a.split(".").reduce((function(e,a){return e?e[a]:void 0}),e)}function l(e){var a={};if(Array.isArray(e))a=e.map(l);else if("object"==typeof e)for(var i in e)a[i]=null!=e[i]&&"object"==typeof e[i]?l(e[i]):e[i];else a=e;return a}function u(e,a,i){return i.indexOf(e)===a}function g(e,a){try{var i=new Date(e);return new Date(i.setDate(i.getDate()+a)).toISOString().split("T")[0]}catch(o){throw new Error("Invalid Date")}}function S(e,a){for(var i=[],o=0;o<e.length;)i.push(e.slice(o,o+a)),o+=a;return i}function f(e,o){return Promise.all([a(e,o),i(e,o)]).then((function(e){return{item:e[0],data:e[1]}}))}export{n as a,s as b,t as c,g as d,c as e,S as f,f as g,p as h,o as i,l as j,u}