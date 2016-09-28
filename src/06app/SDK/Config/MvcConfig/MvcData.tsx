export module ConfigData {
    //ApplictionData  dym
    export interface MvcConfigData
    {
        AppName: string;
        DataRoutes: Array<RoutesDate>;
        Routes: RoutesData;
        BasePath: string;
        FileName: string;   
        FilePath: string;
    }

    export interface RoutesData
    {
        RegName: Array<string>;
    }

    export interface RoutesDate
    {
        Name: string;
        ControlName: string;
        ActionName: string;
        AreaName: string;
        NameSpace: string;
        Param: string;
        RegName: string;
    }

    export const RodioData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];

    export interface submit
    {
        Xpath: string;
        Text: string;
        Value: string;
    }

    export interface MvcConfigSubmit
    {
        Name: string;
        ControlName: string;
        ActionName: string;
        AreaName: string;
        NameSpace: string;
        Param: string;
        RegName: string;
    }

    export interface submitData
    {
        submits: Array<submit>;
        Appsettings: Array<MvcConfigSubmit>;
        ServerList?: Array<string>;
    }
}