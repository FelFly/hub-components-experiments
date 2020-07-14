'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-987d1b3d.js');
require('./index-859d80b7.js');
require('./index-52faf404.js');
const utils = require('./utils-05b33af8.js');

const hubUploadCss = ":host{display:block}";

// import { UserSession } from '@esri/arcgis-rest-auth';
// import * as Portal from "@esri/arcgis-rest-portal";
const MAX_UPLOAD_SIZE = 1024; // bytes
const ALLOWED_FILE_TYPES = {
    'image/*': 'Image',
    'application/pdf': 'PDF',
    'text/csv': 'CSV'
};
const HubUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * ClientID to identify the app launching auth
         */
        this.clientid = "WXC842NRBVB6NZ2r";
        this.portal = "https://www.arcgis.com";
        this.uploads = [];
        this.onUploadCompleted = index.createEvent(this, "onUploadCompleted", 7);
    }
    fileHandler(event) {
        console.log("hubUpload fileHandler", event);
        let files = event.detail;
        utils.authenticateUser(this.clientid, this.portal).then(session => {
            this.session = session;
            this.handleFiles(files);
        });
        return true;
    }
    handleFiles(files) {
        console.log("hubUpload: handleFiles", files);
        for (let i = 0; i < files.length; i++) {
            this.processFile(files[i]);
        }
    }
    processFile(newFile) {
        console.log("hubUpload#processFile");
        let itemType = this.getFileType(newFile.type);
        // check if the user isn't trying to upload a file larger then the MAX_UPLOAD_SIZE
        if (!this.checkFileSize(newFile.size)) {
            console.error('Maximum file size exceeded. Max file size is: ' + MAX_UPLOAD_SIZE);
            return false;
        }
        // check if the user isn't trying to upload anything else then an image
        else if (!itemType) {
            console.error('File type is not allowed');
            return false;
        }
        return this.uploadFile(newFile, itemType);
    }
    checkFileSize(size) {
        return (size / MAX_UPLOAD_SIZE / MAX_UPLOAD_SIZE) <= MAX_UPLOAD_SIZE;
    }
    getFileType(type) {
        let fileType = null;
        Object.keys(ALLOWED_FILE_TYPES).map((mimeType) => {
            console.log("mimeType", [type, mimeType, type.match(mimeType)]);
            let testMimeType = mimeType.replace(`/*`, `.*`);
            if (type.match(testMimeType) && type.match(mimeType).length > 0) {
                fileType = ALLOWED_FILE_TYPES[mimeType];
            }
        });
        return fileType;
    }
    uploadFile(file, itemType) {
        this.uploads.push([file, itemType]);
    }
    // TODO: Fix uploads to use params not index values
    uploadList(files) {
        console.log("hubUpload#uploadList");
        let update = files.map((file) => {
            return index.h("hub-upload-file", { file: file[0], session: this.session, itemType: file[1] });
        });
        console.log("... uploadList", update);
        return update;
    }
    render() {
        if (this.uploads.length == 0) {
            return (index.h("div", { class: "file-upload" }, index.h("drop-area", { allowedTypes: Object.keys(ALLOWED_FILE_TYPES) })));
        }
        else {
            return (index.h("div", { class: "status", ref: (el) => this.statusEl = el }, this.uploadList(this.uploads)));
        }
    }
};
HubUpload.style = hubUploadCss;

exports.hub_upload = HubUpload;
