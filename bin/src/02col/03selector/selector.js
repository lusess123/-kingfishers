var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./../../01core/Url", "./../../05tool/Pagination", "react", "react-dom"], function (require, exports, basecolFile, iocFile, urlFile, Pagination, React, ReactDOM) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var SelectorAction = (function (_super) {
            __extends(SelectorAction, _super);
            function SelectorAction() {
                _super.apply(this, arguments);
            }
            return SelectorAction;
        }(BaseColAction));
        ui.SelectorAction = SelectorAction;
        var SelectorReact = (function (_super) {
            __extends(SelectorReact, _super);
            function SelectorReact() {
                _super.apply(this, arguments);
                this.fCurrentNumber = 0;
                this.fIsFirst = false;
                this.state = this.getInitialState1();
            }
            SelectorReact.prototype.fGetAreaId = function () {
                if (!this.fIsFirst) {
                    this.fIsFirst = true;
                    return this.fSetAreaId();
                }
                else {
                    return this.fCurrentNumber.toString();
                }
            };
            SelectorReact.prototype.fSetAreaId = function () {
                this.fCurrentNumber = SelectorReact.fNumber = SelectorReact.fNumber + 1;
                return this.fCurrentNumber.toString();
                ;
            };
            //每点击一下就会触发一下
            SelectorReact.prototype.getInitialState1 = function () {
                var _this = this;
                var s = new SelectorStates();
                s.Pagination.Vm.PageClickEvent = function (a) {
                    var xhr = urlFile.Core.AkPost("/core/Selector/Search", { RegName: _this.props.Vm.RegName, pageIndex: a, ds: _this.props.Vm.getPostDataSetFun() }, function (a) {
                        var _data = a;
                        //this.state.Pagination.Vm.PageNo = ;
                        _this.state.Pagination.Vm.PageNo = a.Index;
                        _this.state.ItemList.length = 0;
                        _data.List.forEach(function (b) {
                            var _bean = new SelectorItem();
                            _bean.Key = b.CODE_VALUE;
                            _bean.Text = b.CODE_TEXT;
                            _this.state.ItemList.push(_bean);
                        });
                        _this.props.Vm.IsChange = true;
                        _this.state.Pagination.Vm.IsChange = true;
                        _this.forceUpdate();
                    });
                    // xhr.done(() => { alert("成功的") }).fail(() => { alert("失败的"); }).always(() => { alert("总是要触发的")});
                    //在这里要进行单击事件的触发，发送异步到后台然后接受返回值从新加载 
                };
                return s;
            };
            SelectorReact.prototype.pInputOnChange = function (e) {
                var _this = this;
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
                    urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, ds: this.props.Vm.getPostDataSetFun() }, function (a) {
                        var _data = a;
                        _data.List.forEach(function (b) {
                            var _bean = new SelectorItem();
                            _bean.Key = b.CODE_VALUE;
                            _bean.Text = b.CODE_TEXT;
                            _this.state.ItemList.push(_bean);
                        });
                        _this.props.Vm.Text = _val;
                        _this.state.Pagination.Vm.IsChange = true;
                        _this.forceUpdate(function () {
                            _this.exeTextChangeFun(_val);
                        });
                    });
                }
                else {
                    this.forceUpdate(function () {
                        _this.exeTextChangeFun(_val);
                    });
                }
            };
            SelectorReact.prototype.exeTextChangeFun = function (val) {
                if (this.props.Vm.HasCanEdit && this.props.Vm.TextChangeFun) {
                    this.props.Vm.TextChangeFun(val);
                }
            };
            //自己写的
            SelectorReact.prototype.pButtonOnSearch = function (val) {
                var _this = this;
                //生成action ,并且广播
                this.state.IsOpenData = true;
                var _val = val; //e.target["value"];
                this.state.ItemList = [];
                urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, key: _val, pageIndex: 0, ds: this.props.Vm.getPostDataSetFun() }, function (a) {
                    var _data = a;
                    _this.state.Pagination.Vm.PageNo = 0;
                    _this.state.Pagination.Vm.PageSize = a.Size;
                    _this.state.Pagination.Vm.TotalCount = a.Total;
                    //this.state.Pagination.Vm.TotalPage = Math.ceil(a.Total / a.Size);
                    _data.List.forEach(function (b) {
                        var _bean = new SelectorItem();
                        _bean.Key = b.CODE_VALUE;
                        //var _text = $(b.CODE_TEXT).text();
                        //if (_text == "") {
                        _bean.Text = b.CODE_TEXT;
                        //}
                        //else {
                        //    _bean.Text = _text;
                        //}
                        _this.state.ItemList.push(_bean);
                    });
                    _this.setState(function (s, p) {
                        _this.props.Vm.IsChange = true;
                        s.IsModalShow = true;
                        var st = $(document).scrollTop(); //滚动条距顶部的距离    
                        var ch = $(window).height(); //屏幕的高度   
                        var objT = Number(st);
                        //+ (Number(ch)) * 0.1;   
                        // alert(objT);
                        s.ModalTop = (Number(ch)) * 0.05;
                        return s;
                    });
                });
            };
            //初始化的时候
            SelectorReact.prototype.onButtonClick = function () {
                var _this = this;
                if (this.props.Vm.Text == null || this.props.Vm.Text == "") {
                    this.state.SearchText = "";
                }
                else {
                    this.state.SearchText = this.props.Vm.Text;
                }
                this.state.ItemList = [];
                var __this = this;
                this.state.IsOpenData = true;
                urlFile.Core.AkPost("/core/Selector/Search", { RegName: this.props.Vm.RegName, pageIndex: 0, ds: this.props.Vm.getPostDataSetFun() }, function (a) {
                    var _data = a;
                    _this.state.Pagination.Vm.PageNo = 0;
                    _this.state.Pagination.Vm.PageSize = a.Size;
                    _this.state.Pagination.Vm.TotalCount = a.Total;
                    //this.state.Pagination.VM.TotalPage = Math.ceil(a.Total/a.Size);
                    _data.List.forEach(function (b) {
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
                        _this.state.ItemList.push(_bean);
                    });
                    //document.body.scrollTop = 0;
                    _this.setState(function (s, p) {
                        _this.props.Vm.IsChange = true;
                        s.IsModalShow = true;
                        var st = $(document).scrollTop(); //滚动条距顶部的距离    
                        var ch = $(window).height(); //屏幕的高度   
                        var objT = Number(st);
                        //+ (Number(ch)) * 0.1;   
                        // alert(objT);
                        s.ModalTop = (Number(ch)) * 0.05;
                        return s;
                    });
                });
                this.state.Pagination.Vm.IsChange = true;
            };
            SelectorReact.prototype.onClickLiSetValue = function (a) {
                var _val = a.Key;
                this.props.Vm.SelectText = this.props.Vm.Text = a.Text;
                this.state.SearchText = a.Text;
                var _ac = new SelectorAction();
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);
                this.props.Vm.IsEdit = false;
                this.state.ItemList = [];
                //调用Object的设置
                if (!this.props.Vm.reactDataValueSet(_val)) {
                    this.state.Pagination.Vm.IsChange = true;
                    this.forceUpdate();
                }
            };
            SelectorReact.prototype.pComponentWillUnmount = function () {
                _super.prototype.pComponentWillUnmount.call(this);
                // $(document).unbind("click", this.fDocumentEvent);
            };
            ;
            SelectorReact.prototype.pComponentDidMount = function () {
                //super.pComponentDidMount();
                // $(ReactDOM.findDOMNode(this.refs["modelButton"])).foundation();
                // $(document).foundation();
                //this.fDocumentEvent =
                //    () => {
                //    };
                //$(document).bind("click", this.fDocumentEvent);
            };
            SelectorReact.prototype.onOpenModal = function () {
                this.onButtonClick();
            };
            SelectorReact.prototype.getLegalMsgDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find(".ACT-INPUT").parent();
            };
            SelectorReact.prototype.getInputDom = function () {
                var _dom = ReactDOM.findDOMNode(this);
                return $(_dom).find(".ACT-INPUT");
            };
            SelectorReact.prototype._text = function (str) {
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
            };
            SelectorReact.prototype.bulrEvent = function (e) {
                if (this.props.Vm.onBlurFun != null) {
                    this.props.Vm.onBlurFun(this.props.Vm.Text);
                    // this.props.Vm.dataValueSet(this.props.Vm.Text);
                    this.props.Vm.IsChange = true;
                }
            };
            // private 
            SelectorReact.prototype.fInputOnFocus = function (e) {
                this.pInputOnChange(e);
            };
            SelectorReact.prototype.fInputOnBlur = function (e) {
                this.bulrEvent(e);
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
                        var _ac = new SelectorAction();
                        _ac.Vm = this.props.Vm;
                        this.pDispatcher(_ac);
                        this.forceUpdate();
                    }
                }
            };
            SelectorReact.prototype.fInitInputDOm = function () {
                var _this = this;
                if (this.props.Vm.IsTextArea) {
                    return React.createElement("textarea", {className: "form-control ACT-INPUT " + (this.props.Vm.IsEdit ? "Hs-fff6e2" : ""), value: this._text(this.props.Vm.Text), onChange: function (e) { _this.pInputOnChange(e); }, onFocus: function (e) { _this.fInputOnFocus(e); }, onBlur: function (e) { _this.fInputOnBlur(e); }});
                }
                else {
                    return React.createElement("input", {className: "form-control ACT-INPUT " + (this.props.Vm.IsEdit ? "Hs-fff6e2" : ""), value: this._text(this.props.Vm.Text), onChange: function (e) { _this.pInputOnChange(e); }, onFocus: function (e) { _this.fInputOnFocus(e); }, onBlur: function (e) { _this.fInputOnBlur(e); }});
                }
            };
            SelectorReact.prototype.fInitClickButtonDom = function () {
                var _this = this;
                if (this.props.Vm.OpenLinkTxt) {
                    return React.createElement("a", {className: "input-group-addon Hu-pointer", onClick: function (a) { _this.onButtonClick(); return false; }}, this.props.Vm.OpenLinkTxt);
                }
                else {
                    return React.createElement("span", {onClick: function (a) { _this.onButtonClick(); return false; }, className: "input-group-addon Hu-pointer"}, React.createElement("i", {className: "fa fa-external-link-square icon-external-link "}));
                }
            };
            SelectorReact.prototype.pSender = function () {
                var _this = this;
                var _fillMenu2 = React.createElement("ul", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 Hu-select-content Hz-scroll"}, [!this.state.IsOpenData ?
                        this.state.ItemList.map(function (a) {
                            return React.createElement("li", {dangerouslySetInnerHTML: { __html: a.Text }, className: "Hu-pointer " + (a.Key == _this.props.Vm.vmdataValue() ? "active" : ""), key: a.Key, onClick: function () { _this.onClickLiSetValue(a); return false; }});
                        }) : "",
                    (this.state.ItemList.length > 0 && !this.state.IsOpenData) ?
                        React.createElement("li", {className: "Hu-pointer ", onClick: function () { _this.onOpenModal(); return false; }}, "查看更多...") : ""]);
                var valueLink = {
                    value: this._text(this.state.SearchText),
                    requestChange: function (val) {
                        // this.setState({ message: newValue });
                        //this.state.SearchText = val;
                        _this.props.Vm.IsChange = true;
                        _this.setState(function (a, b) {
                            a.SearchText = val;
                            return a;
                        });
                    }
                };
                var _content2 = React.createElement("div", {className: "Hm-modals Hm-modals-content clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group "}, React.createElement("input", {className: "form-control", valueLink: valueLink}), React.createElement("span", {className: "input-group-addon Hu-pointer", onClick: function () { _this.pButtonOnSearch(_this.state.SearchText); return false; }}, React.createElement("i", {className: "fa fa-search icon-search"}))), React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12"}, React.createElement("div", {id: "Page"}, React.createElement("ul", {className: "Hc-list nav nav-tabs clearfix"}, this.state.ItemList ? this.state.ItemList.map(function (a) {
                    return React.createElement("li", {className: "nav-item Hu-pointer " + (a.Key == _this.props.Vm.vmdataValue() ? "active" : ""), onClick: function () {
                        _this.onClickLiSetValue(a);
                        _this.state.IsModalShow = false;
                        return false;
                    }}, React.createElement("span", {dangerouslySetInnerHTML: { __html: a.Text }}));
                }) : ""), React.createElement(Pagination.tool.PaginationReact, { Vm: this.state.Pagination.Vm, children: null }))));
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT"}, this.fInitInputDOm(), this.fInitClickButtonDom(), React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.state.IsModalShow ? "show" : "hide")}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff  " + (this.state.IsModalShow ? "show" : "hide"), style: { top: this.state.ModalTop.toString() + 'px' }}, React.createElement("div", {className: "Hu-naiv"}, React.createElement("h3", {className: "Hu-modals-title pull-left"}, "请选择"), React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function () {
                    _this.setState(function (s, p) {
                        _this.props.Vm.IsChange = true;
                        s.IsModalShow = false;
                        return s;
                    });
                }}, React.createElement("i", {className: "icon-remove fa fa-close"}))), _content2)), this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu2 : ""));
            };
            SelectorReact.fNumber = 0;
            return SelectorReact;
        }(BaseColReact));
        ui.SelectorReact = SelectorReact;
        var SelectorProps = (function (_super) {
            __extends(SelectorProps, _super);
            function SelectorProps() {
                _super.apply(this, arguments);
            }
            return SelectorProps;
        }(BaseColProps));
        ui.SelectorProps = SelectorProps;
        var SelectorItem = (function () {
            function SelectorItem() {
                this.IsSelect = false;
            }
            return SelectorItem;
        }());
        ui.SelectorItem = SelectorItem;
        var SelectorStates = (function (_super) {
            __extends(SelectorStates, _super);
            function SelectorStates() {
                _super.apply(this, arguments);
                this.ItemList = new Array();
                this.IsModalShow = false;
                this.IsOpenData = false;
                this.ModalTop = 0;
                //分页控件
                this.Pagination = new Pagination.tool.PaginationProps;
            }
            return SelectorStates;
        }(BaseColStates));
        ui.SelectorStates = SelectorStates;
        var SelectorVm = (function (_super) {
            __extends(SelectorVm, _super);
            function SelectorVm(config) {
                _super.call(this);
                this.pRegName = "选择器控件";
                this.ReactType = SelectorReact;
                //public ItemList: Array<SelectorItem> = new Array<SelectorItem>();    
                this.RegName = "USER_All_USERNAME_CORE";
                this.Text = "";
                //自定义的焦点移除事件
                this.onBlurFun = null;
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
            SelectorVm.Test = function () {
                var _bean = new SelectorVm();
                return _bean;
            };
            SelectorVm.prototype.getPostDataSetFun = function () {
                var str = "";
                var ds = {};
                if (this.OnPostDataSetFun) {
                    var _ds = this.OnPostDataSetFun(ds);
                    str = JSON.stringify(_ds);
                }
                return str;
            };
            return SelectorVm;
        }(BaseColVm));
        ui.SelectorVm = SelectorVm;
        iocFile.Core.Ioc.Current().RegisterType("SelectorVm", BaseColVm, SelectorVm);
    })(ui = exports.ui || (exports.ui = {}));
});
