/// <reference path="../../../typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Url", "./../../../Typings/0Type/Entity", "./../../05tool/Pagination", "react"], function (require, exports, basecolFile, iocFile, urlFile, Entity, Pagination, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var MulselectorAction = (function (_super) {
            __extends(MulselectorAction, _super);
            function MulselectorAction() {
                _super.apply(this, arguments);
            }
            return MulselectorAction;
        }(BaseColAction));
        ui.MulselectorAction = MulselectorAction;
        var MulselectorReact = (function (_super) {
            __extends(MulselectorReact, _super);
            function MulselectorReact() {
                _super.apply(this, arguments);
                this.state = new MulselectorStates();
                this.fCurrentNumber = 0;
                this.fIsFirst = false;
            }
            MulselectorReact.prototype.fGetAreaId = function () {
                if (!this.fIsFirst) {
                    this.fIsFirst = true;
                    return this.fSetAreaId();
                }
                else {
                    return this.fCurrentNumber.toString();
                }
            };
            MulselectorReact.prototype.fSetAreaId = function () {
                this.fCurrentNumber = MulselectorReact.fNumber = MulselectorReact.fNumber + 1;
                return this.fCurrentNumber.toString();
            };
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
            MulselectorReact.prototype.initPagination = function () {
                var _this = this;
                var pageVm = new Pagination.tool.PaginationVm();
                pageVm.PageClickEvent = function (a) {
                    pageVm.PageNo = a;
                    var xhr = urlFile.Core.AkPost("/core/Selector/Search", { RegName: _this.props.Vm.RegName, pageIndex: pageVm.PageNo, key: _this.props.Vm.SearchText }, function (b) {
                        var _data = b;
                        _this.props.Vm.ItemList.length = 0;
                        _data.List.forEach(function (d) {
                            var _bean = new Entity.entity.SelectorItem();
                            _bean.Key = d.CODE_VALUE;
                            _bean.Text = d.CODE_TEXT;
                            _this.props.Vm.ItemList.push(_bean);
                        });
                        for (var i = 0; i < _this.props.Vm.ItemList.length; i++) {
                            for (var j = 0; j < _this.props.Vm.SelectItemList.length; j++) {
                                if (_this.props.Vm.ItemList[i].Key == _this.props.Vm.SelectItemList[j].Key) {
                                    _this.props.Vm.ItemList[i].IsSelect = true;
                                }
                            }
                        }
                        _this.props.Vm.Pagination.IsChange = true;
                        _this.forceUpdate();
                    });
                };
                return pageVm.intoDom();
            };
            MulselectorReact.prototype.pInputOnChange = function (e) {
                var _this = this;
                //生成action ,并且广播
                this.props.Vm.IsOpenData = false;
                var _val = e.target["value"];
                this.props.Vm.Text = _val;
                this.props.Vm.ItemList = [];
                urlFile.Core.AkPost("/core/selector/Search", { RegName: this.props.Vm.RegName, key: _val }, function (a) {
                    var _data = a;
                    _data.List.forEach(function (b) {
                        var _bean = new Entity.entity.SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        _bean.Text = b.CODE_TEXT;
                        _this.props.Vm.ItemList.push(_bean);
                    });
                    _this.props.Vm.Pagination.IsChange = true;
                    _this.props.Vm.Text = _val;
                    _this.forceUpdate();
                });
            };
            //点击发送异步  然后将结果接收到ItemList中
            MulselectorReact.prototype.pButtonOnSearch = function (val) {
                var _this = this;
                //生成action ,并且广播
                this.props.Vm.IsOpenData = true;
                var _val = val; //e.target["value"];
                this.props.Vm.ItemList = [];
                urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, pageIndex: 0 }, function (a) {
                    var _data = a;
                    _this.props.Vm.Pagination.PageNo = 0;
                    _this.props.Vm.Pagination.PageSize = a.Size;
                    _this.props.Vm.Pagination.TotalCount = a.Total;
                    // this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);
                    _data.List.forEach(function (b) {
                        var _bean = new Entity.entity.SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        _bean.Text = b.CODE_TEXT;
                        _this.props.Vm.ItemList.push(_bean);
                    });
                    for (var i = 0; i < _this.props.Vm.ItemList.length; i++) {
                        for (var j = 0; j < _this.props.Vm.SelectItemList.length; j++) {
                            if (_this.props.Vm.ItemList[i].Key == _this.props.Vm.SelectItemList[j].Key) {
                                _this.props.Vm.ItemList[i].IsSelect = true;
                            }
                        }
                    }
                    _this.props.Vm.IsChange = true;
                    _this.props.Vm.isModalShow = true;
                    var st = $(document).scrollTop();
                    var ch = $(document).height();
                    var objT = Number(st);
                    _this.props.Vm.ModalTop = (Number(ch)) * 0.05;
                    _this.forceUpdate();
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
            };
            MulselectorReact.prototype.onButtonClick = function () {
                var _this = this;
                if (this.props.Vm.Text == null || this.props.Vm.Text == "") {
                    this.props.Vm.SearchText = "";
                }
                else {
                    this.props.Vm.SearchText = this.props.Vm.Text;
                }
                this.props.Vm.ItemList = [];
                var __this = this;
                this.props.Vm.IsOpenData = true;
                urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: 0 }, function (a) {
                    var _data = a;
                    _this.props.Vm.Pagination.PageNo = 0;
                    _this.props.Vm.Pagination.PageSize = a.Size;
                    _this.props.Vm.Pagination.TotalCount = a.Total;
                    var _value = _this.props.Vm.dataValueGet();
                    if (_value) {
                        var _valArr = _this.props.Vm.reactDataValueGet().replace(/\"/g, "").split(',');
                    }
                    //var _valueItem = _value.split(",");
                    //var _name = this.props.Vm.allStrName;
                    //var _allname = _name.split(",");
                    //this.state.Pagination.VM.TotalPage = Math.ceil(a.Total / a.Size);
                    _this.props.Vm.SelectItemList.length = 0;
                    _data.List.forEach(function (b) {
                        var _bean = new Entity.entity.SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        _bean.Text = b.CODE_TEXT;
                        _bean.IsSelect = false;
                        _this.props.Vm.ItemList.push(_bean);
                    });
                    if (_valArr) {
                        _this.props.Vm.ItemList.map(function (a) {
                            for (var j = 0; j < _valArr.length; j++) {
                                if (a.Key == _valArr[j]) {
                                    a.IsSelect = true;
                                    _this.props.Vm.SelectItemList.push(a);
                                }
                            }
                        });
                    }
                    _this.props.Vm.SelectNum = _this.props.Vm.SelectItemList.length;
                    _this.props.Vm.Pagination.IsChange = true;
                    _this.props.Vm.IsChange = true;
                    _this.props.Vm.isModalShow = true;
                    var st = $(document).scrollTop(); //滚动条顶部的距离
                    var ch = $(window).height(); //屏幕的高度
                    var objT = Number(st);
                    _this.props.Vm.ModalTop = (Number(ch)) * 0.05;
                    _this.forceUpdate();
                });
            };
            //选择好选项之后 点击确定触发的事件
            MulselectorReact.prototype.onClickLiSetValue = function () {
                //var _val = "";
                var _text = "";
                var selectArr = [];
                var selectText = [];
                this.props.Vm.SelectItemList.map(function (a) {
                    selectText.push("\"" + a.Text + "\"");
                    selectArr.push("\"" + a.Key + "\"");
                });
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
            };
            //点击选项触发的事件
            MulselectorReact.prototype.onClickSelect = function (a) {
                //首先判断有没有active的属性
                if (!a.IsSelect) {
                    var Item = new Entity.entity.SelectorItem();
                    Item.Key = a.Key;
                    Item.Text = a.Text;
                    a.IsSelect = true;
                    this.props.Vm.SelectItemList.push(Item);
                }
                else {
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
            };
            //点击将选项删除
            MulselectorReact.prototype.onClickRemove = function (a) {
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
            };
            MulselectorReact.prototype.onClose = function () {
                this.props.Vm.SelectNum = 0;
                this.props.Vm.SelectItemList = [];
            };
            MulselectorReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                $(document).unbind("click", this.fDocumentEvent);
            };
            ;
            MulselectorReact.prototype.pComponentDidMount = function () {
                var _this = this;
                _super.prototype.pComponentDidMount.call(this);
                // $(ReactDOM.findDOMNode(this.refs["modelButton"])).foundation();
                // $(document).foundation();
                this.fDocumentEvent =
                    function () {
                        var _val = "";
                        _this.props.Vm.ItemList.forEach(function (a) {
                            if (a.Key == _this.props.Vm.vmdataValue()) {
                                _val = a.Text;
                                return;
                            }
                        });
                        if (_val != "" && _this.props.Vm.Text != _val) {
                            _this.props.Vm.ItemList = [];
                            _this.props.Vm.Text = _val;
                            _this.props.Vm.Pagination.IsChange = true;
                            _this.forceUpdate();
                        }
                    };
                $(document).bind("click", this.fDocumentEvent);
            };
            MulselectorReact.prototype.onOpenModal = function () {
                this.onButtonClick();
            };
            MulselectorReact.prototype.fun_valueLink = function (e) {
                var value = e;
                this.props.Vm.SearchText = value;
                this.props.Vm.IsChange = true;
                //this.setState((a, b) => {
                //    a.SearchText = value;
                //    return a;
                //})
                this.forceUpdate();
            };
            MulselectorReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT"}, React.createElement("input", {className: "form-control ACT-INPUT", value: this.props.Vm.allStrName, onChange: function (e) { _this.pInputOnChange(e); }, onFocus: function (e) { _this.pInputOnChange(e); }}), React.createElement("span", {onClick: function (a) { _this.onButtonClick(); return false; }, className: "input-group-addon Hu-pointer"}, React.createElement("i", {className: "fa fa-external-link-square"})), React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.isModalShow ? "show" : "hide")}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.props.Vm.isModalShow ? "show" : "hide"), style: { top: this.props.Vm.ModalTop.toString() + 'px' }}, React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function () { _this.closeModal(); }}), React.createElement("div", {className: "Hu-naiv"}, React.createElement("h3", {className: "Hu-modals-title pull-left"}, "请选择"), React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function () { _this.closeModal(); }}, React.createElement("i", {className: "icon-remove fa fa-close "})), this.content2())))));
            };
            MulselectorReact.prototype.closeModal = function () {
                this.props.Vm.IsChange = true;
                this.props.Vm.isModalShow = false;
                this.forceUpdate();
            };
            MulselectorReact.prototype.content2 = function () {
                var _this = this;
                return (React.createElement("div", {className: "Hm-modals Hm-modals-content clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group"}, React.createElement("input", {className: "form-control", value: this.props.Vm.SearchText}), React.createElement("span", {className: "input-group-addon Hu-pointer", onClick: function () { _this.pButtonOnSearch(_this.props.Vm.SearchText); return false; }}, React.createElement("i", {className: "fa fa-search"}))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"}, React.createElement("div", {id: "Page"}, this.initPagination(), React.createElement("ul", {className: "Hc-list nav nav-tabs clearfix"}, this.props.Vm.ItemList ?
                    this.props.Vm.ItemList.map(function (a) {
                        return React.createElement("li", {className: "nav-item Hu-pointer" + (a.IsSelect ? " Hc-multi-selector Hz-selected " : ""), id: a.Key, keyValue: a.Key, onClick: function () { _this.onClickSelect(a); _this.props.Vm.isModalShow = true; return false; }}, React.createElement("span", null, a.Key), a.IsSelect ? React.createElement("em", null) : null, a.IsSelect ? React.createElement("i", {className: "fa fa-check"}) : null);
                    }) : ""), this.initPagination())), React.createElement("div", {id: "Page"}, React.createElement("ul", {className: "Hc-list nav nav-tabs clearfix", id: "SelectUl"}, this.props.Vm.SelectItemList ?
                    this.props.Vm.SelectItemList.map(function (a) {
                        return React.createElement("li", {className: "Hu-pointer nav-item Hc-multi-selector selected-del", id: a.Key, keyValue: a.Key, onClick: function () { _this.onClickRemove(a); return false; }}, React.createElement("span", null, a.Key), React.createElement("em", null), React.createElement("i", {className: "fa fa-close"}));
                    }) : ""), React.createElement("button", {className: "btn btn-xs btn-primary", onClick: function () { _this.onClickLiSetValue(); }}, "确定"), React.createElement("span", null, "一共选择了" + this.props.Vm.SelectNum + "条"))));
            };
            MulselectorReact.fNumber = 0;
            return MulselectorReact;
        }(BaseColReact));
        ui.MulselectorReact = MulselectorReact;
        var MulselectorProps = (function (_super) {
            __extends(MulselectorProps, _super);
            function MulselectorProps() {
                _super.apply(this, arguments);
            }
            return MulselectorProps;
        }(BaseColProps));
        ui.MulselectorProps = MulselectorProps;
        var MulselectorStates = (function (_super) {
            __extends(MulselectorStates, _super);
            function MulselectorStates() {
                _super.apply(this, arguments);
            }
            return MulselectorStates;
        }(BaseColStates));
        ui.MulselectorStates = MulselectorStates;
        var MulselectorVm = (function (_super) {
            __extends(MulselectorVm, _super);
            function MulselectorVm() {
                _super.call(this);
                this.ReactType = MulselectorReact;
                //************
                this.ItemList = [];
                this.SelectItemList = [];
                this.isModalShow = false;
                //是否展开下拉框
                this.IsOpenData = false;
                this.SelectNum = 0;
                //public Text: string;
                this.ModalTop = 0;
                // public Pagination: Pagination.tool.PaginationProps = new Pagination.tool.PaginationProps;
                this.Pagination = new Pagination.tool.PaginationVm();
                //************
                // public SelectedItemList: Array<MulSelectorItem> = new Array<MulSelectorItem>();
                this.allStrName = "";
                //public allStrKey: string = "";
                this.pRegName = "多选择器的控件";
                this.RegName = "USER_All_USERNAME_CORE";
                //public ReactType: any = MulselectorReact;
                //在文本框中显示的值
                this.Text = "";
            }
            MulselectorVm.Test = function () {
                var _bean = new MulselectorVm();
                return _bean;
            };
            MulselectorVm.prototype.pOnchange = function (val) {
                var isCheck = _super.prototype.pOnchange.call(this, val);
                if (isCheck) {
                    this.pDataValue = val;
                    this.allStrName = val.split(":")[1];
                }
                return isCheck;
            };
            return MulselectorVm;
        }(BaseColVm));
        ui.MulselectorVm = MulselectorVm;
        iocFile.Core.Ioc.Current().RegisterType("MultiSelectorVm", BaseColVm, MulselectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
