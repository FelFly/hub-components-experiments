import{r as e,c as t,h as i,g as a,H as r}from"./p-1fd9320b.js";import"./p-3a73ba05.js";import{n as o,p as s,q as l,r as c}from"./p-25b1b343.js";import{U as n}from"./p-87086a15.js";const d=class{constructor(i){e(this,i),this.allowedTypes=["image/*"],this.highlighted=!1,this.handleDrop=e=>{this.handleFiles(e.dataTransfer.files)},this.handleFiles=e=>{e=[...e],console.log("Handle Files",e),this.onFilesSubmitted.emit(e)},this.onFilesSubmitted=t(this,"onFilesSubmitted",7)}componentDidLoad(){["dragenter","dragover","dragleave","drop"].forEach(e=>{this.dropArea.addEventListener(e,this.preventDefaults,!1),document.body.addEventListener(e,this.preventDefaults,!1)}),["dragenter","dragover"].forEach(e=>{this.dropArea.addEventListener(e,()=>this.highlighted=!0,!1)}),["dragleave","drop"].forEach(e=>{this.dropArea.addEventListener(e,()=>this.highlighted=!1,!1)}),this.dropArea.addEventListener("drop",this.handleDrop,!1)}preventDefaults(e){e.preventDefault(),e.stopPropagation()}render(){return i("div",{id:"drop-area"},i("form",{class:{highlight:this.highlighted}},i("h3",null,"Drag Files to Upload"),i("p",null,"Maximum Size: 200 gb "),i("p",null,"Supported types: Spreadsheet CSV, Excel, Shapefile, GeoJSON, PDF, Word Doc, Images"),i("input",{type:"file",id:"fileElem",multiple:!0,accept:this.allowedTypes.join(","),onChange:e=>this.handleFiles(e.target.files)}),i("label",{class:"button retry",htmlFor:"fileElem"},"Browse")))}get dropArea(){return a(this)}};d.style=':host{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Avenir Next W01", "Avenir Next W00", "Avenir Next", "Avenir", "Helvetica Neue", sans-serif}#drop-area form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;width:100%;height:100%;padding:50px 0px;margin:0px;-ms-flex-align:baseline;align-items:baseline;padding-left:50px;border:2px dashed lightgray;border-radius:4px;overflow:scroll;background-color:#DDD}#drop-area form p{margin:0px;color:#333}#drop-area form.highlight{border:2px solid green;background:rgba(0, 128, 0, 0.1)}#drop-area form #fileElem{display:none}#drop-area .retry{color:white;background-color:#007ac2;font-size:15px;height:30px;margin-top:20px;padding:8px 18px 0px 18px;cursor:pointer}#drop-area .retry:hover{background-color:#0069b1}@media (min-width: 768px) and (max-width: 991.98px){#drop-area #gallery{grid-template-columns:calc(50% - 1.5ch) calc(50% - 1.5ch)}}@media (min-width: 992px) and (max-width: 1199.98px){#drop-area #gallery{grid-template-columns:calc(33.33% - 2ch) calc(33.33% - 2ch) calc(33.33% - 2ch)}}@media (min-width: 1200px){#drop-area #gallery{grid-template-columns:calc(25% - 2.28ch) calc(25% - 2.28ch) calc(25% - 2.28ch) calc(25% - 2.28ch)}}';const h=class{constructor(t){e(this,t),this.clientid="WXC842NRBVB6NZ2r",this.portal="https://www.arcgis.com",this.editors=[]}componentDidLoad(){const e=n.deserialize(this.session);this.uploadItem(e)}uploadItem(e){o({item:{title:this.file.name,type:this.itemType},file:this.file,overwrite:!1,multipart:!0,async:!0,filename:this.file.name,authentication:e}).then(t=>{console.log("Created Item",t),s({id:t.id,file:this.file,partNum:1,authentication:e}).then(i=>{console.log("addItemPart",i),l({id:t.id,authentication:e,params:{title:this.file.name,type:this.itemType}}).then(e=>{console.log("commitItemUpload",e),this.checkStatus(e.id)})})}).catch(e=>{console.error("uploadItem error",e),this.showError(e.message)})}showError(e){this.editors=[i("calcite-notice",{color:"red",width:"full",scale:"s",active:!0},i("div",{slot:"notice-title"},"Upload Error: ",this.file.name),i("div",{slot:"notice-message"},e))]}checkStatus(e){const t=n.deserialize(this.session);c({id:e,authentication:t}).then(t=>{console.log("Check Status",t),"completed"==t.status?this.editItem(e):setTimeout(()=>{this.checkStatus(e)},1e3)})}editItem(e){this.editors=[i("hub-metadata-editor",{item:e})]}render(){return i(r,null,i("slot",null),0==this.editors.length?i("calcite-loader",{text:"Fetching data...","is-active":!0}):this.editors)}};h.style=":host{display:block}";export{d as drop_area,h as hub_upload_file}