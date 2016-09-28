

export module data {

    export interface IDict<T> {
        [index: string]: T;
    } 

    //-----------------IData-----------------
    export interface IDataRow extends IDict<string | number> {
        [index: string]: string | number;
    }

    //export interface IDataTable extends IDict<IDataRow> {
    //    [index: string]: IDataRow;
    //}

    export interface IDataSet extends IDict<Array<IDataRow>> {
        [index: string]: Array<IDataRow>;
    }
    //----------------------------------------------


    //----------------IScript-----------------------
    export interface IScript {
        InternalStyle: string;
        Path: string;
        Function: string;
    }
    //----------------------------------------------

    //-----------------IHeader----------------------
    export interface IHeader {
        IsValid: boolean;
        Message: string;
    }
    //----------------------------------------------
     
    //-----------------ILayout-----------------------
    export interface Ilayout {
        ShowKind: string;
        VerticalTab: boolean;
        Panels: Array<IPanel>;
    }
    export interface IPanel {
        FormName: string;
    }
    //-------------------------------------------

    //-----------------IPageButton--------------
    export interface IPageButton {
        Insert: IInsert;
    }

    export interface IInsert {
        Name: string;
        Text: string;
        Unbatchable: boolean;
        Client: IClient;
        Server: string;
        Icon: string;
        BtnCss: string;
    }

    export interface IClient {
        Function: string;
    }
    //------------------------------------------

    //----------------IForms----------------
    export interface IForms extends IDict<IForm> {
        [index: string]: IForm;
    }

    export interface IForm {
        TableName?: string;
        PrimaryKey?: string;
        ParentKey?: string;
        FormType?: string;
        VerticalTab?: boolean;
        HasSearch?: boolean;
        HasPager?: boolean;
        HasNavigation?: boolean;
        Columns?: Array<IColumn>;
        ColumnGroups?: Array<IColumnGroup>;
        NavigationColumns?: Array<INavigationColumn>;
        Action?: string;
        IsDetailForm?: boolean;
        AfterInitFunName?: string;
        ParentFieldName?: string;
        TextFieldName?: string;
        IsParentFieldName?: string;
        CodeValueFieldName?: string;
        CodeTextFieldName?: string;
        IsSafeMode?: boolean;
        HasReview?: boolean;
        IsInner?: boolean;
        HaveNoSwitchForm?: boolean;
        HaveNoSortBar?: boolean;
        Tpl?: string;
        Calendar?: string;
        DisableColumnGroup?: boolean;
        ExpandDetailPlug?: string;
        RowTpl?: string;
        ContentTpl?: string;
        Name?: string;
        Title?: string;
        ShowKind?: string;
        ShowType?: number;
        Width?: number;
    }

    export interface IColumn {
        Name: string;
        DisplayName: string;
        Prompt?: string;
        ValPrompt?: string;
        Kind?: string;
        ControlType?: string;
        ShowType?: number;
        Sortable?: boolean;
        IsDetailLink?: boolean;
        Options?: IOption;
        ChangeEventFun?: string;
        MarkDown?: string;
        Report?: IReport;
        Editor?: string;
        QingColumnName?: string;
        TreeConfig?: string;
        Amount?: string;

        Changer?: IChager;

        LinkFormat?: string;
        NormalStyle?: string;
        Width?: string;
        TdStyle?: string;
        ShortCutName?: string;
        CustomControl?: string;
        IsHiddenCol?: boolean;
    }

    export interface IChager {
        Expression: string;

        DependColums: Array<IDependColum>;

        NotifyColums: Array<INotifyColum>;
    }

    export interface IDependColum extends IDict<string> {
        [index: string]: string;
    }

    export interface INotifyColum extends IDict<string> {
        [index: string]: string;
    }

    export interface IOption {
        RegName: string;
        DataValue: IDataValue;
        IsKey: boolean;
        IsParentColumn: boolean;
        Id: string;
        Legal: IControlLegal;
        PostSetting: string;
        IsReadOnly: boolean;
        DetialFormatFun: string;
        IsLike: boolean;
        DisplayName: string;
        Prompt: string;
        ValPrompt: string;
        IsOpenByDefault: boolean;
    }

    export interface IUploadOption extends IOption {
        FileSize: number;
        FileExtension: string;
        StorageName: string;
        UploadName: string;
        ImageSizeHeight: number;
        ImageSizeWidth: number;
        HasDocumentCenter: boolean;
        IsCut: boolean;
        MinUploadCount: number;
    }

    export interface IControlLegal {
        Kind: string;
        CustomLegalFun: string;
        reg: string;
        ErrMsg: string;
        LegalExpression: string;
    }

    export interface IDataValue {
        TableName: string;
        ColumnName: string;
        Index: number;
        FunString: string;
        DataValueType: string;
        Value: string;
        IsChange: boolean;
    }

    export interface IReport {
        FormatText: string;
        Enable: boolean;
    }


    export interface IColumnGroup {
        ShowType: number;
        Name: string;
        DisplayName: string;
        Columns: Array<IColumn>;
        IsHidden: boolean;
    }

    export interface INavigationColumn {
        IsRefrech: boolean;
        IsAvailable: boolean;
        IsExpand: boolean;
        Name: string;
        DisplayName: string;
        Prompt: string;
        ValPrompt: string;
        Kind: string;
        ControlType: string;
        ShowType: number;
        Sortable: boolean;
        IsDetailLink: boolean;
        Options: IOption;
        ChangeEventFun: string;
        MarkDown: string;
        Report: IReport;
        Editor: string;
        QingColumnName: string;
        TreeConfig: string;
        Amount: string;
        Changer: IChager;
        LinkFormat: string;
        NormalStyle: string;
        Width: string;
        TdStyle: string;
        ShortCutName: string;
        CustomControl: string;
        IsHiddenCol: boolean;

    }
    //--------------------------------------

    //--------------IDataButtons-------------
    export interface IDataButtons extends IDict<IDataButton> {
        [index: string]: IDataButton;
    }

    export interface IDataButton {
        Name: string;
        Text: string;
        Unbatchable: boolean;
        Client: IClient;
        Server: string;
        Icon: string;
        BtnCss: string;
    }

    export interface IClient {
        EFunction: string;
    }
    //---------------------------------------


    //-------------------SeaForms---------------
    export interface ISeaForms {

    }

    //-----------------MvcForms--------------
    export interface IMvcForms {

    }

    //------------ScriptForms---------------
    export interface IScriptForms {

    }
    export interface IPageView {
        //类
        Header: IHeader;
        Scripts: Array<IScript>;
        Data: IDataSet;
        Forms: IForms;

        Layout: Ilayout;
        DataButtons: IDataButtons;
        PageButtons: IDataButtons;

        //这三个是空的 未知
        SeaForms: ISeaForms;
        MvcForms: IMvcForms;
        ScriptForms: IScriptForms;

        //字段
        SearchFormName: string;
        ListFormName: string;
        RegName: string;
        Title: string;
        PageLayout: string;
        ReturnUrl: string;
        Route: string;
        IsPart: boolean;
        ExtData: string;
        KeyValue: string;

        //可能是类
        PageSelector: string;
        PageSourceData: string;
        TsHook: string;

    }
    
   

    ///-------Data-----
    //export class Data {
    //    public TopMyWork: TopMyWork;
    //    public TopMyWork_PAGER: TopMyWork_PAGER;
    //}

    //export class TopMyWork {
    //   any;
    //    //public ACTIVITYFROM: string;
    //    //public ACTIVITYITEMACTION: string;
    //    //public COMMENTCOUNT: string;
    //    //public FORWARDEDCOUNT: string;
    //    //public ORIGINALCONTENT: string;
    //    //public OWNERID: string;
    //    //public PRIVACYSTATUS: string;
    //    //public REFERENCEID: string;
    //    //public REFERENCENAME: string;
    //    //public SACT_SUBCONTENT: string;
    //}

    //export class _PAGER {
    //    public TableName: string;
    //    public PageSize: number;
    //    public PageIndex: number;
    //    public IsASC: boolean;
    //    public SortName: string;
    //    public TotalCount: number;
    //    //定义时间类型
    //    public DataTime: string;
    //}

    /////-----------------
    ////export class Forms {
    ////    public FormsTopMywork: FormsTopMyWork;
    ////}

    ////export class FormsTopMyWork
    ////{
    ////    public TableName: string;
    ////    public PrimaryKey: string;
    ////    public ParentKey: string;
    ////    public FormType: string;
    ////    public VerticalTab: boolean;
    ////    public HasSearch: boolean;
    ////    public HasPager: boolean;
    ////    public HasNavigation: boolean;
    ////    public Columns: Array<Column>=new Array<Column>();
    ////    public ColumnGroups: Array<ColumnGroup> = new Array<ColumnGroup>();
    ////    public NavigationColumns: Array<NavigationColumn> = new Array<NavigationColumn>();
    ////    public Action: string;
    ////    public IsDetailForm: boolean;
    ////    public AfterInitFunName: string;
    ////    public ParentFieldName: string;
    ////    public TextFieldName: string;
    ////    public IsParentFieldName: string;
    ////    public CodeValueFieldName: string;
    ////    public CodeTextFieldName: string;
    ////    public IsSafeMode: boolean;
    ////    public HasReview: boolean;
    ////    public IsInner: boolean;
    ////    public HaveNoSwitchForm: boolean;
    ////    public HaveNoSortBar: boolean;
    ////    public Tpl: string;
    ////    public Calendar: string;
    ////    public DisableColumnGroup: boolean;
    ////    public ExpandDetailPlug: string;
    ////    public RowTpl: string;
    ////    public ContentTpl: string;
    ////    public Name: string;
    ////    public Title: string;
    ////    public ShowKind: string;
    ////    public ShowType: number;
    ////    public Width:number;
    ////}
    ////-------------Columns----------

    //export class Column {
    //    public Name: string;
    //    public DisplayName: string;
    //    public Prompt: string;
    //    public ValPrompt: string;
    //    public Kind: string;
    //    public ControlType: string;
    //    public ShowType: number;
    //    public Sortable: boolean;
    //    public IsDetailLink: boolean;
    //    public Options: Array<Option> = new Array<Option>();
    //    public ChangeEventFun: string;
    //    public MarkDown: string;
    //    public Report: Report;
    //    public Editor: string;
    //    public QingColumnName: string;
    //    public TreeConfig: string;
    //    public Amount: string;
    //    public Changer: string;
    //    public LinkFormat: string;
    //    public NormalStyle: string;
    //    public Width: string;
    //    public TdStyle: string;
    //    public ShortCutName: string;
    //    public CustomControl: string;
    //    public IsHiddenCol: boolean;
    //}

    //export class Option {
    //    public RegName: string;
    //    public DataValue: DataValue;
    //    public IsKey: boolean;
    //    public IsParentColumn: boolean;
    //    public Id: string;
    //    public Legal: string;
    //    public PostSetting: string;
    //    public IsReadOnly: boolean;
    //    public DetialFormatFun: string;
    //    public IsLike: boolean;
    //    public DisplayName: string;
    //    public Prompt: string;
    //    public ValPrompt: string;
    //    public IsOpenByDefault: boolean;
    //}

    //export class DataValue {
    //    public TableName: string;
    //    public ColumnName: string;
    //    public Index: number;
    //    public FunString: string;
    //    public DataValueType: string;
    //    public Value: string;
    //    public IsChange: boolean;
    //}

    //export class Report {
    //    public FormatText: string;
    //    public Enable: boolean;
    //}
    ////---------------------------
    //export class ColumnGroup {
    //}

    //export class NavigationColumn {
    //}

 
}

export module Data {
    export interface ITreeCodeTableModel {
        CODE_VALUE: string;
        CODE_TEXT: string;
        ExtData: IExtData;
        Children: Array<ITreeCodeTableModel>;
    }

    export interface IExtData {
        RightValue: string;
        Icon: string;
        RightType: string | number;
    }

}