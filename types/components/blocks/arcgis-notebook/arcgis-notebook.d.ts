export declare class Notebook {
    item: string;
    view: "preview" | "edit";
    /**
     * ClientID to identify the app launching auth
     */
    clientid: string;
    portal: string;
    /**
     * Serialized authentication information.
     */
    session: string;
    previewUrl: any;
    notebook: any;
    iFrameEl: HTMLIFrameElement;
    titleEl: HTMLElement;
    componentDidLoad(): void;
    getEdit(): void;
    getPreview(): void;
    onCopy(_e: any): Promise<void>;
    copyNotebook(): void;
    render(): any;
}
