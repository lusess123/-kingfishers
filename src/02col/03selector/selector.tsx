
import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import Entity = require("./../../../Typings/0Type/Entity");
import Pagination = require("./../../05tool/Pagination");
import pageViewFile = require("./../../07data/PageView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {


    export class SelectorAction extends BaseColAction {
    }


    export class SelectorReact extends BaseColReact<SelectorProps, SelectorStates, SelectorAction> implements domFile.Core.IReact {

        private static fNumber: number = 0;
        private fCurrentNumber: number = 0;
        private fIsFirst: boolean = false;
        private fDocumentEvent: (eventObject: JQueryEventObject) => any;

        private fGetAreaId() {
            if (!this.fIsFirst) {
                this.fIsFirst = true;
                return this.fSetAreaId();
            }
            else {
                return this.fCurrentNumber.toString();
            }
        }

        private fSetAreaId() {
            this.fCurrentNumber = SelectorReact.fNumber = SelectorReact.fNumber + 1;
            return this.fCurrentNumber.toString();;

        }

        public state: SelectorStates = this.getInitialState1();

        //每点击一下就会触发一下
        public getInitialState1(): SelectorStates {
            var s = new SelectorStates();
            s.Pagination.Vm.PageClickEvent = (a) => {
                var xhr = urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: a, ds: this.props.Vm.getPostDataSetFun() }, (a) => {
                    var _data: Entity.entity.SelectorModel = a;
                    //this.state.Pagination.Vm.PageNo = ;
                    this.state.Pagination.Vm.PageNo = a.Index;
                    this.state.ItemList.length = 0;
                    _data.List.forEach((b) => {
                        var _bean = new SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        _bean.Text = b.CODE_TEXT;
                        this.state.ItemList.push(_bean);
                    });

                    this.props.Vm.IsChange = true;
                    this.state.Pagination.Vm.IsChange = true;
                    this.forceUpdate();
                });
                // xhr.done(() => { alert("成功的") }).fail(() => { alert("失败的"); }).always(() => { alert("总是要触发的")});

                //在这里要进行单击事件的触发，发送异步到后台然后接受返回值从新加载 
            }
            return s;
        }

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            this.state.IsOpenData = false;
            var _val = e.target["value"];
            this.props.Vm.Text = _val;
            this.state.ItemList = [];
            if (_val != this.props.Vm.SelectText) {
                this.props.Vm.IsEdit = true;
            }
            else {
                this.props.Vm.IsEdit = false;
            }
            if (!this.props.Vm.NoAutoSuggest) {
                urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, ds: this.props.Vm.getPostDataSetFun() }, (a) => {
                    var _data: Entity.entity.SelectorModel = a;
                    _data.List.forEach((b) => {
                        var _bean = new SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        _bean.Text = b.CODE_TEXT;
                        this.state.ItemList.push(_bean);
                    });
                    this.props.Vm.Text = _val;
                    this.state.Pagination.Vm.IsChange = true;
                    this.forceUpdate(() => {
                        this.exeTextChangeFun(_val);
                    });
                });
            }
            else {
                this.forceUpdate(() => {
                    this.exeTextChangeFun(_val);
                });
            }
        }

        private exeTextChangeFun(val: string) {
            if (this.props.Vm.HasCanEdit && this.props.Vm.TextChangeFun) {
                this.props.Vm.TextChangeFun(val);
            }
        }

        //自己写的
        protected pButtonOnSearch(val: string) {
            //生成action ,并且广播
            this.state.IsOpenData = true;
            var _val = val;//e.target["value"];
            this.state.ItemList = [];
            urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, pageIndex: 0, ds: this.props.Vm.getPostDataSetFun() }, (a) => {
                var _data: Entity.entity.SelectorModel = a;
                this.state.Pagination.Vm.PageNo = 0;
                this.state.Pagination.Vm.PageSize = a.Size;
                this.state.Pagination.Vm.TotalCount = a.Total;

                //this.state.Pagination.Vm.TotalPage = Math.ceil(a.Total / a.Size);

                _data.List.forEach((b) => {
                    var _bean = new SelectorItem();
                    _bean.Key = b.CODE_VALUE;
                    //var _text = $(b.CODE_TEXT).text();
                    //if (_text == "") {
                    _bean.Text = b.CODE_TEXT;
                    //}
                    //else {
                    //    _bean.Text = _text;
                    //}
                    this.state.ItemList.push(_bean);
                });

                this.setState((s, p) => {
                    this.props.Vm.IsChange = true;
                    s.IsModalShow = true;
                    var st = $(document).scrollTop();//滚动条距顶部的距离    
                    var ch = $(window).height();//屏幕的高度   
                    var objT = Number(st);
                    //+ (Number(ch)) * 0.1;   
                    // alert(objT);
                    s.ModalTop = (Number(ch)) * 0.05;
                    return s;
                });
            });
        }

        //初始化的时候
        private onButtonClick() {

            if (this.props.Vm.Text == null || this.props.Vm.Text == "") {
                this.state.SearchText = "";
            } else {
                this.state.SearchText = this.props.Vm.Text;
            }

            this.state.ItemList = [];
            var __this = this;
            this.state.IsOpenData = true;

            urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: 0, ds: this.props.Vm.getPostDataSetFun() }, (a) => {
                var _data: Entity.entity.SelectorModel = a;
                this.state.Pagination.Vm.PageNo = 0;
                this.state.Pagination.Vm.PageSize = a.Size;
                this.state.Pagination.Vm.TotalCount = a.Total;

                //this.state.Pagination.VM.TotalPage = Math.ceil(a.Total/a.Size);
                _data.List.forEach((b) => {
                    var _bean = new SelectorItem();
                    _bean.Key = b.CODE_VALUE;
                    var _text = "";
                    try {
                        _text = $(b.CODE_TEXT).text();
                    }
                    catch (eee) {
                        _text = b.CODE_TEXT;
                    }
                    // if (_text == "") {
                    _bean.Text = b.CODE_TEXT;
                    //}
                    //else {
                    //    _bean.Text = _text;
                    //}
                    this.state.ItemList.push(_bean);
                });
                //document.body.scrollTop = 0;
                this.setState((s, p) => {
                    this.props.Vm.IsChange = true;
                    s.IsModalShow = true;
                    var st = $(document).scrollTop();//滚动条距顶部的距离    
                    var ch = $(window).height();//屏幕的高度   
                    var objT = Number(st);
                    //+ (Number(ch)) * 0.1;   
                    // alert(objT);
                    s.ModalTop = (Number(ch)) * 0.05;
                    return s;
                });
            }
            )
            this.state.Pagination.Vm.IsChange = true;

        }

        private onClickLiSetValue(a: SelectorItem): void {
            var _val = a.Key;
            this.props.Vm.SelectText = this.props.Vm.Text = a.Text;
            this.state.SearchText = a.Text;
            var _ac: SelectorAction = new SelectorAction();
            _ac.Vm = this.props.Vm;
            this.pDispatcher(_ac);
            this.props.Vm.IsEdit = false;
            this.state.ItemList = [];
            //调用Object的设置
            if (!this.props.Vm.reactDataValueSet(_val)) {
                this.state.Pagination.Vm.IsChange = true;
                this.forceUpdate();
            }

        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            // $(document).unbind("click", this.fDocumentEvent);
        };

        protected pComponentDidMount(): void {
            //super.pComponentDidMount();
            // $(ReactDOM.findDOMNode(this.refs["modelButton"])).foundation();
            // $(document).foundation();

            //this.fDocumentEvent =
            //    () => {

            //    };
            //$(document).bind("click", this.fDocumentEvent);
        }

        private onOpenModal(): void {
            this.onButtonClick();
        }
        protected getLegalMsgDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find(".ACT-INPUT").parent();
        }
        protected getInputDom(): JQuery {
            var _dom = ReactDOM.findDOMNode(this);
            return $(_dom).find(".ACT-INPUT");
        }

        private _text(str) {
            try {
                var _texts = $(str).text();
                if (_texts == "") {
                    return str;
                }
                else
                    return _texts;
            }
            catch (ff) {
                return str;
            }
        }


        private bulrEvent(e): void {
            if (this.props.Vm.onBlurFun != null) {
                this.props.Vm.onBlurFun(this.props.Vm.Text);
               // this.props.Vm.dataValueSet(this.props.Vm.Text);
                this.props.Vm.IsChange = true;
            }
        }
        // private 
        private fInputOnFocus(e: React.FormEvent) {
            this.pInputOnChange(e);
        }
        private fInputOnBlur(e: React.FormEvent) {
            this.bulrEvent(e)
            var _val = e.target["value"];
            if (_val != this.props.Vm.SelectText) {
                if (!this.props.Vm.HasCanEdit) {
                    this.props.Vm.Text = this.props.Vm.SelectText;
                    if (!this.props.Vm.SelectText)
                        this.props.Vm.Text = this.props.Vm.SelectText = "";
                    this.props.Vm.IsEdit = false;
                    this.forceUpdate();
                }
                else {
                    this.props.Vm.SelectText = null;
                    this.props.Vm.vmDataValueSet("");
                    this.props.Vm.IsEdit = true;
                    var _ac: SelectorAction = new SelectorAction();
                    _ac.Vm = this.props.Vm;
                    this.pDispatcher(_ac);

                    this.forceUpdate();
                }
            }

        }
        private fInitInputDOm(): React.ReactElement<any> {
            if (this.props.Vm.IsTextArea) {
                return <textarea className={"form-control ACT-INPUT " + (this.props.Vm.IsEdit ? "Hs-fff6e2" : "") }
                    value={  this._text(this.props.Vm.Text) }
                    onChange={(e) => { this.pInputOnChange(e) } }
                    onFocus={(e) => { this.fInputOnFocus(e) } }
                    onBlur={(e) => { this.fInputOnBlur(e) } }
                    ></textarea>;

            } else {
                return <input className={"form-control ACT-INPUT " + (this.props.Vm.IsEdit ? "Hs-fff6e2" : "") }
                    value={  this._text(this.props.Vm.Text) }
                    onChange={(e) => { this.pInputOnChange(e) } }
                    onFocus={(e) => { this.fInputOnFocus(e) } }
                    onBlur={(e) => { this.fInputOnBlur(e) } }
                    ></input>;
            }
        }


        private fInitClickButtonDom(): React.ReactElement<any> {

            if (this.props.Vm.OpenLinkTxt) {
                return <a className="input-group-addon Hu-pointer" onClick={(a) => { this.onButtonClick(); return false; } }>
                    {this.props.Vm.OpenLinkTxt}
                </a>;

            } else {
                return <span onClick={(a) => { this.onButtonClick(); return false; } }
                    className="input-group-addon Hu-pointer">
                    <i className="fa fa-external-link-square icon-external-link "></i>
                </span>;
            }
        }

        public pSender(): React.ReactElement<any> {


            var _fillMenu2 = <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Hu-select-content Hz-scroll">
                {
                    [!this.state.IsOpenData ?
                        this.state.ItemList.map((a) => {
                            return <li    dangerouslySetInnerHTML={{ __html: a.Text }}
                                className={"Hu-pointer " + (a.Key == this.props.Vm.vmdataValue() ? "active" : "") } key={a.Key} onClick={() => { this.onClickLiSetValue(a); return false; } }>

                            </li>
                        }) : "",

                        (this.state.ItemList.length > 0 && !this.state.IsOpenData) ?
                            <li className="Hu-pointer " onClick={() => { this.onOpenModal(); return false; } }>查看更多...</li> : ""]
                }
            </ul>



            var valueLink = {
                value: this._text(this.state.SearchText),
                requestChange: (val: string) => {
                    // this.setState({ message: newValue });
                    //this.state.SearchText = val;
                    this.props.Vm.IsChange = true;
                    this.setState((a, b) => {
                        a.SearchText = val;
                        return a;
                    })
                }
            };

            var _content2 = <div className="Hm-modals Hm-modals-content clearfix">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group ">
                    <input className="form-control" valueLink={valueLink} >
                    </input>
                    <span className="input-group-addon Hu-pointer"
                        onClick={() => { this.pButtonOnSearch(this.state.SearchText); return false; } }>
                        <i className="fa fa-search icon-search"></i>
                    </span>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div id="Page">                      
                        <ul className="Hc-list nav nav-tabs clearfix">
                            {
                                this.state.ItemList ? this.state.ItemList.map((a) => {
                                    return <li
                                        className={"nav-item Hu-pointer " + (a.Key == this.props.Vm.vmdataValue() ? "active" : "") }
                                        onClick={() => {
                                            this.onClickLiSetValue(a);
                                            this.state.IsModalShow = false;
                                            return false;
                                        } }
                                        >
                                        <span dangerouslySetInnerHTML={{ __html: a.Text }} ></span>
                                    </li>
                                }) : "" }
                        </ul>
                        {React.createElement(Pagination.tool.PaginationReact, { Vm: this.state.Pagination.Vm, children: null}) }
                    </div>
                </div>
            </div>



            return <div className="clearfix"><div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT">
                {this.fInitInputDOm() }
                {this.fInitClickButtonDom() }

                <div className={ "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.state.IsModalShow ? "show" : "hide") }>
                    <div
                        className={"Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff  " + (this.state.IsModalShow ? "show" : "hide") }
                        style={{ top: this.state.ModalTop.toString() + 'px' }}>
                        <div className="Hu-naiv">
                            <h3 className="Hu-modals-title pull-left">请选择</h3>
                        <a className="Hu-close Hu-pointer pull-right" onClick={() => {
                            this.setState((s, p) => {
                                this.props.Vm.IsChange = true;
                                s.IsModalShow = false;
                                return s;
                            })
                        } }>
                            <i className="icon-remove fa fa-close"></i>
                        </a>
                        </div>
                        {_content2}
                    </div>
                </div>
                {this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu2 : ""}
            </div>
            </div>
        }
    }


    export class SelectorProps extends BaseColProps<SelectorVm> {



    }

    export class SelectorItem {
        public Key: string;
        public Text: string;
        public IsSelect: boolean = false;
    }

    export interface IBlurOutEvent {
        (value: string): void
    }


    export class SelectorStates extends BaseColStates {

        public ItemList: Array<SelectorItem> = new Array<SelectorItem>();
        public IsModalShow: boolean = false;
        public IsOpenData: boolean = false;
        public Text: string;
        public ModalTop: number = 0;
        public SearchText: string;
        public SearchChangeText: string;

        //分页控件
        public Pagination: Pagination.tool.PaginationProps = new Pagination.tool.PaginationProps;
    }

    export interface ISelectorConfig {
        IsTextArea?: boolean;
        NoAutoSuggest?: boolean;
        OpenLinkTxt?: string;
        RegName?: string;
        TextChangeFun?: (text: string) => void;
        HasCanEdit?: boolean;
    }

    export class SelectorVm extends BaseColVm {
        protected pRegName: string = "选择器控件";
        public ReactType = SelectorReact;
        //public ItemList: Array<SelectorItem> = new Array<SelectorItem>();    
        public RegName: string = "USER_All_USERNAME_CORE";

        public Text: string = "";
        //自定义的焦点移除事件
        public onBlurFun: IBlurOutEvent = null;
        public IsTextArea: boolean;
        public NoAutoSuggest: boolean;
        public OpenLinkTxt: string;
        public TextChangeFun: (text: string) => void;
        public OnPostDataSetFun: (ds: any) => pageViewFile.data.IDataSet;
        public SelectText: string;
        public HasCanEdit: boolean;

        public IsEdit: boolean;

        public constructor(config?: ISelectorConfig) {
            super();
            if (config) {
                this.IsTextArea = config.IsTextArea;
                this.NoAutoSuggest = config.NoAutoSuggest;
                this.OpenLinkTxt = config.OpenLinkTxt;
                if (config.RegName) {
                    this.RegName = config.RegName;
                }
                if (config.TextChangeFun) {
                    this.TextChangeFun = config.TextChangeFun;
                }
                if (config.HasCanEdit) {
                    this.HasCanEdit = config.HasCanEdit;
                }
            }
        }

        public static Test(): SelectorVm {
            var _bean: SelectorVm = new SelectorVm();
            return _bean;
        }

        public getPostDataSetFun(): string {
            var str = "";
            var ds = {};
            if (this.OnPostDataSetFun) {
                var _ds = this.OnPostDataSetFun(ds);
                str = JSON.stringify(_ds);
            }

            return str;
        }

    }

    iocFile.Core.Ioc.Current().RegisterType("SelectorVm", BaseColVm, SelectorVm);
}