export module ConfigData {

    export interface ApplictionData
    {
        IsSupportMobile: boolean;
        IsSupportReport: boolean;
        IsSupportQing: boolean;
        PageHelpStack: boolean;
        SignStack: boolean;
        AppName: string;
        AppSettings: Array<AppSettingsData>;
        HasLogger: boolean;
        ExceptionStack: boolean;
        IsMigration: boolean;
        Memcached: MemcachedData;
        BasePath: string;
        FileName: string;   
        FilePath: string;
    }



    export interface FileManageData
    {
        FileRoots: Array<FileRootsData>;
        FileUploads: Array<FileUploadsData>
        FileStorages: Array<FileStoragesData>
        BasePath: string;
        FileName: string;
        FilePath: string;
    }
    export interface FileRootsData
    {
        Name: string;
        ID: string;
        PhysicalPath: string;
        HttpPath: string;
        FtpPath: string;
        MMSPath: string;
    }
    export interface FileUploadsData
    {
        Name: string;
        MaxSize: string;
        Extensions: string;
        FilePath: string;
        ImageSizeWidth: string;
        ImageSizeHeight: string;
        ImageCutGroupName: string;
    }
    export interface FileStoragesData
    {
        Name: string;
        FileRootID: string;
        FileNameFormat: string;
        FilePathFormat: string;
    }



    export interface MemcachedData
    {
        ServerList: Array<string>;
        Init: string;
        Min: string;
        Max: string;
    }

    export interface AppSettingsData
    {
        Key: string;
        Value: string;
        RegName: string;
        NeedParse: string;
    }

    export const RodioData = [{ Value: "0", Text: "是" }, { Value: "1", Text: "否" }];

    export interface submit
    {
        Xpath: string;
        Text: string;
        Value: string;
    }

    export interface AppsettingSubmit
    {
        Text: string;
        Value: string;
        NeedPares: string;
    }
    export interface FileRootsSubmit
    {
        Name: string;
        ID: string;
        PhysicalPath: string;
        HttpPath: string;
        FtpPath: string;
        MMSPath: string;
    }

    export interface submitData
    {
        submits: Array<submit>;
        Appsettings: Array<AppsettingSubmit>;
        ServerList?: Array<string>;
    }

    export interface MvcData {
        AppName?: string;
        DataRoutes?: Array<DataRouteData>;
        Routes?: RoutesData;
        BasePath?: string;
        FileName?: string;
        FilePath?: string;
    }
    export interface RoutesData {
        RegName: string;
    }
    export interface DataRouteData {
        IsUser: boolean;
        Name?: string;
        ControlName?: string;
        ActionName?: string;
        AreaName?: string;
        NameSpace?: string;
        Param?: string;
    }
    export interface RegRouteData {
        RegName: string;
    }
    export interface MvcsettingSubmit {
        IsUser: boolean;
        Name: string;
        ControlName: string;
        ActionName: string;
        AreaName: string;
        NameSpace: string;
        Param: string;
    }

    export interface MvcsubmitData {
        AppName: string;
        DataRoutes: Array<MvcsettingSubmit>;
        Routes:Array<RegRouteData>;
    }


    export interface submitDatas
    {
        FileRoots: Array<FileRootsData>;
        FileUploads: Array<FileUploadsData>;
        FileStorages: Array<FileStoragesData>;
    }

    export interface DBData {
        IsDefault?: boolean;
        Name?: string;
        DataSource?: string;
        InitialCatalog?: string;
        UserID?: string;
        PassWord?: string;
    }

    export interface DBSubmit {
        Name?: string;
        RegName?: string;
        IsDefault?: boolean;
        ConnectionString?: string;
    }

    export interface SubmitDB {
        DBData: Array<DBSubmit>;
    }
}