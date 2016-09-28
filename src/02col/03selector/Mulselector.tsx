/// <reference path="../../../typings/jquery/jquery.d.ts" />

import domFile = require("./../../01core/0Dom");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
//import jqueryExtend = require("./../../01core/JQueryExtend");
import Entity = require("./../../../Typings/0Type/Entity");
import Pagination = require("./../../05tool/Pagination");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class MulselectorAction extends BaseColAction {
    }

    export class MulselectorReact extends BaseColReact<MulselectorProps, MulselectorStates, MulselectorAction> implements domFile.Core.IReact {
        public state = new MulselectorStates();

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
            this.fCurrentNumber = MulselectorReact.fNumber = MulselectorReact.fNumber + 1;
            return this.fCurrentNumber.toString();
        }

        //public state: MulselectorStates = this.getInitialState1();

        //点击分页
        //public getInitialState1(): MulselectorStates {

        //    var s = new MulselectorVm();

        //    s.Pagination.Vm.PageClickEvent = (a) => {
        //        s.Pagination.Vm.PageNo = a;
        //        var xhr = urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: s.Pagination.Vm.PageNo, key: this.state.SearchText }, (a) => {
        //            var _data: Entity.entity.SelectorModel = a;
        //            this.props.Vm.ItemList.length = 0;
        //            _data.List.forEach((b) => {
        //                var _bean = new Entity.entity.SelectorItem();
        //                _bean.Key = b.CODE_VALUE;
        //                _bean.Text = b.CODE_TEXT;
        //                this.props.Vm.ItemList.push(_bean);
        //            });

        //            for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
        //                for (var j = 0; j < this.props.Vm.SelectItemList.length; j++) {
        //                    if (this.props.Vm.ItemList[i].Key == this.props.Vm.SelectItemList[j].Key) {
        //                        this.props.Vm.ItemList[i].IsSelect = true;
        //                    }
        //                }
        //            }
        //            this.props.Vm.Pagination.Vm.IsChange = true;
        //            this.forceUpdate();
        //        });
        //        // xhr.done(() => { alert("成功的") }).fail(() => { alert("失败的"); }).always(() => { alert("总是要触发的")});
               
        //        //在这里要进行单击事件的触发，发送异步到后台然后接受返回值从新加载 
        //    }
        //    return s;
        //}
        //点击分页
        public initPagination(): React.ReactElement<any> {
            var pageVm = new Pagination.tool.PaginationVm();
            pageVm.PageClickEvent = (a) => {
                pageVm.PageNo = a;
                var xhr = urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: pageVm.PageNo, key: this.props.Vm.SearchText }, (b) => {
                    var _data: Entity.entity.SelectorModel = b;
                    this.props.Vm.ItemList.length = 0;
                    _data.List.forEach((d) => {
                        var _bean = new Entity.entity.SelectorItem();
                        _bean.Key = d.CODE_VALUE;
                        _bean.Text = d.CODE_TEXT;
                        this.props.Vm.ItemList.push(_bean);
                    });
                    for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                        for (var j = 0; j < this.props.Vm.SelectItemList.length; j++) {
                            if (this.props.Vm.ItemList[i].Key == this.props.Vm.SelectItemList[j].Key) {
                                this.props.Vm.ItemList[i].IsSelect = true;
                            }
                        }
                    }
                    this.props.Vm.Pagination.IsChange = true;
                    this.forceUpdate();
                })
            }
            return pageVm.intoDom();
        }

        protected pInputOnChange(e: React.FormEvent) {
            //生成action ,并且广播
            this.props.Vm.IsOpenData = false;
            var _val = e.target["value"];
            this.props.Vm.Text = _val;
            this.props.Vm.ItemList = [];

            urlFile.Core.AkPost("/core/selector/Search", { RegName: this.props.Vm.RegName, key: _val }, (a) => {
                var _data: Entity.entity.SelectorModel = a;
                _data.List.forEach((b) => {
                    var _bean = new Entity.entity.SelectorItem();
                    _bean.Key = b.CODE_VALUE;
                    _bean.Text = b.CODE_TEXT;
                    this.props.Vm.ItemList.push(_bean);
                });
                this.props.Vm.Pagination.IsChange = true;
                this.props.Vm.Text = _val;
                this.forceUpdate();
            });
        }

        //点击发送异步  然后将结果接收到ItemList中
        protected pButtonOnSearch(val: string) {

            //生成action ,并且广播
            this.props.Vm.IsOpenData = true;
            var _val = val;//e.target["value"];
            this.props.Vm.ItemList = [];
            urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, pageIndex: 0 }, (a) => {

                var _data: Entity.entity.SelectorModel = a;
                this.props.Vm.Pagination.PageNo = 0;
                this.props.Vm.Pagination.PageSize = a.Size;
                this.props.Vm.Pagination.TotalCount = a.Total;
                // this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);

                _data.List.forEach((b) => {
                    var _bean = new Entity.entity.SelectorItem();
                    _bean.Key = b.CODE_VALUE;
                    _bean.Text = b.CODE_TEXT;
                    this.props.Vm.ItemList.push(_bean);
                });
                for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                    for (var j = 0; j < this.props.Vm.SelectItemList.length; j++) {
                        if (this.props.Vm.ItemList[i].Key == this.props.Vm.SelectItemList[j].Key) {
                            this.props.Vm.ItemList[i].IsSelect = true;
                        }
                    }
                }
                this.props.Vm.IsChange = true;
                this.props.Vm.isModalShow = true;
                var st = $(document).scrollTop();
                var ch = $(document).height();
                var objT = Number(st);
                this.props.Vm.ModalTop = (Number(ch)) * 0.05;
                this.forceUpdate();
                //this.setState((s, p) => {
                //    this.props.Vm.IsChange = true;
                //    s.isModalShow = true;
                //    var st = $(document).scrollTop();//滚动条距顶部的距离    
                //    var ch = $(window).height();//屏幕的高度   
                //    var objT = Number(st);
                //    //+ (Number(ch)) * 0.1;   
                //    // alert(objT);
                //    s.ModalTop = (Number(ch)) * 0.05;
                //    return s;
                //});
            });
        }

        private onButtonClick() {
            if (this.props.Vm.Text == null || this.props.Vm.Text == "") {
                this.props.Vm.SearchText = "";
            } else {
                this.props.Vm.SearchText = this.props.Vm.Text;
            }

            this.props.Vm.ItemList = [];
            var __this = this;
            this.props.Vm.IsOpenData = true;

            urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: 0 }, (a) => {
                var _data: Entity.entity.SelectorModel = a;
                this.props.Vm.Pagination.PageNo = 0;
                this.props.Vm.Pagination.PageSize = a.Size;
                this.props.Vm.Pagination.TotalCount = a.Total;

                var _value = this.props.Vm.dataValueGet();
                if (_value)
                {
                    var _valArr = this.props.Vm.reactDataValueGet().replace(/\"/g, "").split(',');
                }
                //var _valueItem = _value.split(",");
                //var _name = this.props.Vm.allStrName;
                //var _allname = _name.split(",");

                //this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);
                this.props.Vm.SelectItemList.length = 0;
                _data.List.forEach((b) => {
                    var _bean = new Entity.entity.SelectorItem();
                    _bean.Key = b.CODE_VALUE;
                    _bean.Text = b.CODE_TEXT;
                    _bean.IsSelect = false;
                    this.props.Vm.ItemList.push(_bean);
                });

                if (_valArr) {
                    this.props.Vm.ItemList.map((a) => {
                        for (var j = 0; j < _valArr.length; j++) {
                            if (a.Key == _valArr[j]) {
                                a.IsSelect = true;
                                this.props.Vm.SelectItemList.push(a);
                            }
                        }
                      
                    });
                }
                

                this.props.Vm.SelectNum = this.props.Vm.SelectItemList.length;

                
                this.props.Vm.Pagination.IsChange = true;
                this.props.Vm.IsChange = true;
                this.props.Vm.isModalShow = true;
                var st = $(document).scrollTop(); //滚动条顶部的距离
                var ch = $(window).height();//屏幕的高度
                var objT = Number(st);
                this.props.Vm.ModalTop = (Number(ch)) * 0.05;
                this.forceUpdate();
            }
            )
        }
        
        //选择好选项之后 点击确定触发的事件
        private onClickLiSetValue(): void {
            //var _val = "";
            var _text = "";
            var selectArr = [];
            var selectText = [];
            this.props.Vm.SelectItemList.map((a) => {
                selectText.push("\"" + a.Text + "\"");
                selectArr.push("\"" + a.Key + "\"");
            })
            this.props.Vm.allStrName = selectText.toString();
            this.props.Vm.SearchText = selectText.toString();
            //var _ac: MulselectorAction = new MulselectorAction();
            //_ac.Vm = this.props.Vm;
            //this.pDispatcher(_ac);
            //清空
            this.props.Vm.ItemList = [];
            this.props.Vm.SelectItemList = [];

            this.props.Vm.isModalShow = false;
            this.props.Vm.IsOpenData = false;
            this.props.Vm.IsChange = true;
            //将元素传到下一个div中
            //调用Object的设置
            if (!this.props.Vm.reactDataValueSet(selectArr.toString() + ":" + selectText.toString())) {
                this.props.Vm.Pagination.IsChange = true;
                this.forceUpdate();
            }
            
        }

        //点击选项触发的事件
        private onClickSelect(a: Entity.entity.SelectorItem): void {
            //首先判断有没有active的属性
            if (!a.IsSelect) {
                var Item = new Entity.entity.SelectorItem();
                Item.Key = a.Key;
                Item.Text = a.Text;
                a.IsSelect = true;
                this.props.Vm.SelectItemList.push(Item);

            } else {
                a.IsSelect = false;

                for (var i = 0; i < this.props.Vm.SelectItemList.length; i++) {
                    if (a.Key == this.props.Vm.SelectItemList[i].Key) {
                        this.props.Vm.SelectItemList.splice(i, 1);
                    }
                }
            }
            this.props.Vm.SelectNum = this.props.Vm.SelectItemList.length;
            this.props.Vm.Pagination.IsChange = true;
            this.forceUpdate();
        }

        //点击将选项删除
        private onClickRemove(a: Entity.entity.SelectorItem): void {
            //将选项删除
            for (var i = 0; i < this.props.Vm.SelectItemList.length; i++) {
                if (a.Key == this.props.Vm.SelectItemList[i].Key) {
                    this.props.Vm.SelectItemList.splice(i, 1);
                }
            }

            for (var i = 0; i < this.props.Vm.ItemList.length; i++) {
                if (a.Key == this.props.Vm.ItemList[i].Key) {
                    this.props.Vm.ItemList[i].IsSelect = false;
                }
            }
            this.props.Vm.SelectNum = this.props.Vm.SelectItemList.length;
            this.props.Vm.IsChange = true;
            this.props.Vm.Pagination.IsChange = true;
            this.forceUpdate();
        }

        private onClose() {
            this.props.Vm.SelectNum = 0;
            this.props.Vm.SelectItemList = [];

        }

        protected pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            $(document).unbind("click", this.fDocumentEvent);

        };

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
            // $(ReactDOM.findDOMNode(this.refs["modelButton"])).foundation();
            // $(document).foundation();
            this.fDocumentEvent =
            () => {
                var _val: string = "";
                this.props.Vm.ItemList.forEach(
                    (a) => {
                        if (a.Key == this.props.Vm.vmdataValue()) {
                            _val = a.Text;
                            return;
                        }
                    }
                );
                if (_val != "" && this.props.Vm.Text != _val) {
                    this.props.Vm.ItemList = [];
                    this.props.Vm.Text = _val;
                    this.props.Vm.Pagination.IsChange = true;
                    this.forceUpdate();
                }
            };
            $(document).bind("click", this.fDocumentEvent);

        }

        private onOpenModal(): void {
            this.onButtonClick();
        }


        public fun_valueLink(e) {
            var value = e
            this.props.Vm.SearchText = value;
            this.props.Vm.IsChange = true;
            //this.setState((a, b) => {
            //    a.SearchText = value;
            //    return a;
            //})
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
             return <div className="clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT">
                    <input className="form-control ACT-INPUT" value={this.props.Vm.allStrName} onChange={(e) => { this.pInputOnChange(e) } } onFocus={(e) => { this.pInputOnChange(e) } }>
                    </input>
                    <span onClick={(a) => { this.onButtonClick(); return false; } } className="input-group-addon Hu-pointer">
                        <i className="fa fa-external-link-square"></i>
                    </span>
                    <div className={ "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.isModalShow ? "show" : "hide") }>
                        <div className={"Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.props.Vm.isModalShow ? "show" : "hide") }
                             style={{ top: this.props.Vm.ModalTop.toString() + 'px' }} >
                             <a className="Hu-close Hu-pointer pull-right" onClick={() => { this.closeModal() } }></a>
                                <div className="Hu-naiv">
                                 <h3 className="Hu-modals-title pull-left">请选择</h3>
                                 <a className="Hu-close Hu-pointer pull-right" onClick={() => {this.closeModal()} }>
                                        <i className="icon-remove fa fa-close "></i>
                                    </a>
                                    {this.content2()}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        public closeModal() {
            this.props.Vm.IsChange = true;
            this.props.Vm.isModalShow = false;
            this.forceUpdate();
        }
        public content2(): React.ReactElement<any> {
            return (
                <div className="Hm-modals Hm-modals-content clearfix">
                    
                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group">
                        <input className="form-control" value={this.props.Vm.SearchText}></input>
                        <span className="input-group-addon Hu-pointer"
                            onClick={() => { this.pButtonOnSearch(this.props.Vm.SearchText); return false; } }>
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div id="Page">{this.initPagination() }
                            <ul className="Hc-list nav nav-tabs clearfix">
                                {
                                    this.props.Vm.ItemList ?
                                        this.props.Vm.ItemList.map((a) => {
                                            return <li
                                                className={ "nav-item Hu-pointer" + (a.IsSelect ? " Hc-multi-selector Hz-selected " : "") }
                                                id={a.Key}
                                                keyValue={a.Key}
                                                onClick={() => {this.onClickSelect(a);this.props.Vm.isModalShow = true; return false; } }
                                                >
                                                <span>{a.Key}</span>
                                                {a.IsSelect ? <em/> : null}
                                                {a.IsSelect ? <i className="fa fa-check"></i> : null}
                                            </li>
                                        }) : ""
                                }
                            </ul>
                            {this.initPagination()}
                        </div>
                    </div>
                    <div id="Page">
                        <ul className="Hc-list nav nav-tabs clearfix"
                            id="SelectUl">
                            {
                                this.props.Vm.SelectItemList ?
                                    this.props.Vm.SelectItemList.map((a) => {
                                        return <li
                                            className="Hu-pointer nav-item Hc-multi-selector selected-del"
                                            id={a.Key}
                                            keyValue={a.Key}
                                            onClick={() => { this.onClickRemove(a); return false; } }
                                            >
                                            <span>{a.Key}</span>
                                            <em/>
                                            <i className="fa fa-close" ></i>
                                        </li>
                                    }) : ""
                            }
                        </ul>
                        <button className="btn btn-xs btn-primary" onClick={() => { this.onClickLiSetValue(); } }>确定</button>
                        <span>{"一共选择了" + this.props.Vm.SelectNum + "条"}</span>
                    </div>
                </div>
            )
        }
    }

    export class MulselectorProps extends BaseColProps<MulselectorVm>{}
    
    export class MulselectorStates extends BaseColStates {
        

    }

    export class MulselectorVm extends BaseColVm {
         public ReactType = MulselectorReact;
        //************
        
         public ItemList: Entity.entity.SelectorItem[] = [];

        public SelectItemList: Entity.entity.SelectorItem[] = []

        public isModalShow: boolean = false;
        //是否展开下拉框
        public IsOpenData: boolean = false;

        public SelectNum: number = 0;
        //public Text: string;

        public ModalTop: number = 0;
        //文本框的值？
        public SearchText: string;
        //搜索时改变的值?
        public SearchChangeText: string;

        // public Pagination: Pagination.tool.PaginationProps = new Pagination.tool.PaginationProps;
        public Pagination: Pagination.tool.PaginationVm = new Pagination.tool.PaginationVm();
        //************

        // public SelectedItemList: Array<MulSelectorItem> = new Array<MulSelectorItem>();
       

        public allStrName: string = "";
          
        //public allStrKey: string = "";

        protected pRegName: string = "多选择器的控件";

        public RegName: string = "USER_All_USERNAME_CORE";

        //public ReactType: any = MulselectorReact;

        //在文本框中显示的值
        public Text: string = "";

        public constructor() {
            super();
        }

        public static Test(): MulselectorVm {
            var _bean: MulselectorVm = new MulselectorVm();

            return _bean;
        }

        protected pOnchange(val: string): boolean
        {
            var isCheck: boolean = super.pOnchange(val);
            if (isCheck) {
                this.pDataValue = val;
                this.allStrName = val.split(":")[1];
            }
            return isCheck;
        }
    }


    iocFile.Core.Ioc.Current().RegisterType("MultiSelectorVm", BaseColVm, MulselectorVm);
} 