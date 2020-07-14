export declare class HubIdentity {
    signin: string;
    signout: string;
    displaysignin: boolean;
    displaysignout: boolean;
    username: string;
    /**
    * ClientID to identify the app launching OAuth
    */
    clientid: string;
    /**
     * url of the ArcGIS Online organization
     */
    orgurl: string;
    /**
     * Serialized authentication information.
     */
    session: string;
    componentWillLoad(): void;
    identitySignin(): Promise<void>;
    identitySignout(): Promise<void>;
    render(): any;
}
