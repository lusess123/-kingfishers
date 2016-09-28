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
        var MomeryAction = (function (_super) {
            __extends(MomeryAction, _super);
            function MomeryAction() {
                _super.apply(this, arguments);
            }
            return MomeryAction;
        }(BaseColAction));
        ui.MomeryAction = MomeryAction;
        var MomeryReact = (function (_super) {
            __extends(MomeryReact, _super);
            function MomeryReact() {
                _super.apply(this, arguments);
                //状态要初始化
                // private _this = this;
                this.state = this.getInitialState();
            }
            MomeryReact.prototype.getInitialState = function () {
                var _this = this;
                var s = new MomeryStates();
                s.Pagination.Vm.PageClickEvent = function (a) {
                    urlFile.Core.AkPost("/core/momery/Search", {
                        RegName: _this.props.Vm.RegName,
                        pageIndex: a,
                        key: "",
                        callback: Math.random()
                    }, function (a) {
                        var _data = a;
                        _this.state.ItemList.length = 0;
                        _this.state.Pagination.Vm.PageNo = a.Index;
                        _this.state.Pagination.Vm.TotalCount = a.Total;
                        //this.state.Pagination.Vm.PageSize = a.Size;
                        _data.List.forEach(function (b) {
                            var _bean = new Entity.entity.SelectorItem();
                            //_bean.Key = b.CODE_VALUE;
                            _bean.Text = b;
                            _this.state.ItemList.push(_bean);
                        });
                        _this.state.Pagination.Vm.IsChange = true;
                        _this.forceUpdate();
                    });
                };
                return s;
            };
            //文本框改变内容
            MomeryReact.prototype.pInputOnChange = function (e) {
                this.state.IsOpenData = false;
                var _val = e.target["value"];
                this.state.SearchText = _val;
                this.props.Vm.Text = _val;
                this.state.ItemList = [];
                this.Search(_val, 0);
            };
            MomeryReact.prototype.onButtonClick = function () {
                this.getInitialState();
                var ch = $(window).height(); //屏幕的高度  
                this.state.ModalTop = (Number(ch)) * 0.05;
                this.state.IsModalShow = true;
                this.state.IsOpenData = true;
                //每更新一次就要 清空数据
                this.state.ItemList.length = 0;
                this.Search("", 0);
            };
            MomeryReact.prototype.AddData = function () {
                //要将数据添加进去 先拿到文本框中的值才能添加
                var _this = this;
                if (this.state.SearchText && this.state.SearchText != "") {
                    urlFile.Core.AkPost("/core/momery/Add", {
                        //ds: _this.getPostDsStr(),
                        text: this.state.SearchText,
                        regName: this.props.Vm.RegName,
                        callback: Math.random()
                    }, function (data) {
                        //查询出来  然后清空text中的值
                        _this.state.SearchText = "";
                        _this.Search("", 0);
                    });
                }
            };
            MomeryReact.prototype.Remove = function (a) {
                var _this = this;
                //点击事件
                urlFile.Core.AkPost("/core/momery/Remove", {
                    //ds: _this.getPostDsStr(),
                    text: a.Text,
                    regName: this.props.Vm.RegName,
                    callback: Math.random()
                }, function (data) {
                    _this.Search("", 0);
                });
            };
            MomeryReact.prototype.Search = function (key, pageIndex) {
                var _this = this;
                //每查询一次将数据清空一次
                this.state.ItemList.length = 0;
                urlFile.Core.AkPost("/core/momery/Search", {
                    // ds: this.props.Vm.getPostDsStr(),
                    pageIndex: pageIndex,
                    regName: this.props.Vm.RegName,
                    key: key,
                    callback: Math.random()
                }, function (data) {
                    var _date = data;
                    _this.state.Pagination.Vm.PageSize = _date.Size;
                    _this.state.Pagination.Vm.PageNo = _date.Index;
                    _this.state.Pagination.Vm.TotalCount = _date.Total;
                    _date.List.forEach(function (b) {
                        var _bean = new Entity.entity.SelectorItem();
                        _bean.Text = b;
                        _bean.IsSelect = false;
                        _this.state.ItemList.push(_bean);
                    });
                    _this.state.Pagination.Vm.IsChange = true;
                    _this.forceUpdate();
                });
            };
            MomeryReact.prototype.onClickLiSetValue = function (a) {
                //关闭弹出框 设置值
                this.state.IsModalShow = false;
                this.state.IsOpenData = true;
                var _ac = new MomeryAction();
                _ac.Vm = this.props.Vm;
                this.pDispatcher(_ac);
                this.props.Vm.Text = a.Text;
                this.props.Vm.dataValueSet(a.Text);
                this.state.Pagination.Vm.IsChange = true;
                this.forceUpdate();
            };
            MomeryReact.prototype.pSender = function () {
                var _this = this;
                //将text的数据传入到this.SeacrchText中
                var valueLink = {
                    value: this.state.SearchText,
                    requestChange: function (val) {
                        _this.props.Vm.IsChange = true;
                        _this.setState(function (a, b) {
                            a.SearchText = val;
                            return a;
                        });
                    }
                };
                //var _fillMenu = React.DOM.ul({
                //    className: "large-9 medium-8 small-8 acsSeclectContent"
                //},
                //    !this.state.IsOpenData ?
                //        this.state.ItemList.map((a) => {
                //            return React.DOM.li(
                //                {
                //                    className: "Hu-pointer " + (a.Key == this.props.Vm.vmdataValue() ? "active" : ""),
                //                    keyValue: a.Key,
                //                    onClick: () => {
                //                        this.onClickLiSetValue(a);
                //                    }
                //                }, a.Text
                //            );
                //        }) : "",
                //    (this.state.ItemList.length > 0 && !this.state.IsOpenData) ? React.DOM.li(
                //        {
                //            className: "Hu-pointer ",
                //            onClick: () => {
                //                this.onButtonClick();
                //            }
                //        }
                //        , "查看更多...") : ""
                //);
                var _fillMenu2 = React.createElement("ul", {className: "col-lg-9 col-md-9 col-sm-9 Hu-select-content"}, [!this.state.IsOpenData ?
                        (this.state.ItemList.map(function (a) {
                            return React.createElement("li", {className: "Hu-pointer " + (a.Key == _this.props.Vm.vmdataValue() ? "active" : ""), key: a.Key, onClick: function () { _this.onClickLiSetValue(a); return false; }}, a.Text);
                        })) : (""),
                    (this.state.ItemList.length > 0 && !this.state.IsOpenData) ?
                        React.createElement("li", {className: "Hu-pointer ", onClick: function () { _this.onButtonClick(); return false; }}, "查看更多...") : ""
                ]);
                var _content2 = React.createElement("div", {className: "Hm-modals Hm-modals-content"}, React.createElement("div", {className: "col-lg-8 col-md-8 col-sm-8 col-xs-8 input-group clearfix"}, React.createElement("input", {className: "form-control", valueLink: valueLink}), React.createElement("span", {className: "input-group-addon Hu-pointer ", onClick: function () { _this.AddData(); }}, React.createElement("i", {className: "fa fa-plus"})), React.createElement("span", {className: "input-group-addon Hu-pointer ", onClick: function () { _this.Search(_this.state.SearchText, 0); }}, React.createElement("i", {className: "fa fa-search"}))), React.createElement("div", {className: "row"}, React.createElement("ul", {className: "acsList clearfix"}, this.state.ItemList ? this.state.ItemList.map(function (a) {
                    return React.createElement("li", null, React.createElement("a", {className: "Hu-pointer ", keyValue: a.Key, onClick: function () { _this.onClickLiSetValue(a); }}, a.Text), React.createElement("a", {className: "Hu-pointer ", onClick: function () { _this.Remove(a); }}, "删除"));
                }) : "")));
                //return React.DOM.div({ className: "ACT-M-PARENT c-select clearfix" }, React.DOM.input({
                //    className: "large-8 medium-7 small-6 columns",
                //    value: this.props.Vm.Text,
                //    onChange: (e) => { this.pInputOnChange(e) },
                //    onFocus: (e) => { this.pInputOnChange(e) },
                //    //onBlur: (e) => { console.log(e);  this.fInputObBlur(e)}
                //}),
                //    React.DOM.a(
                //        {
                //            onClick: (a) => { this.onButtonClick(); },
                //            className: "large-1 medium-1 small-2 columns acsPaddingLR0 Hu-pointer"
                //        },
                //        React.DOM.button({ className: "button tiny success acsTinyBtn" }, React.DOM.i({ className: "fa fa-external-link-square" }))
                //    ), this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu : "",
                //    React.DOM.div(
                //        {
                //            className: "acsModalBg " + (this.state.IsModalShow ? "show" : "hide")
                //        }
                //    ),
                //    React.DOM.div(
                //        {
                //            className: (" large-12 medium-12 small-12 columns acsModalPanel acsModal " + (this.state.IsModalShow ? "show" : "hide")),
                //            style: {
                //                top: this.state.ModalTop.toString() + "px"
                //            }
                //        }, _content,
                //        //<a class="close-reveal-modal" aria-label="Close">&#215;</a>
                //        React.DOM.a({
                //            className: "Hu-close",
                //            onClick: (a) => {
                //                this.setState((s, p) => {
                //                    this.props.Vm.IsChange = true;
                //                    s.IsModalShow = false;
                //                    return s;
                //                });
                //                // this.forceUpdate();
                //            }
                //        }, React.DOM.i({
                //            className: "fa fa-close Hu-pointer "
                //        }))
                //    )
                //);
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-8 col-md-8 col-sm-10 col-xs-10 input-group Hm-input-group ACT-M-PARENT"}, React.createElement("input", {className: "form-control ACT-INPUT", value: this.props.Vm.Text, onChange: function (e) { _this.pInputOnChange(e); }, onFocus: function (e) { _this.pInputOnChange(e); }}), React.createElement("span", {onClick: function (a) { _this.onButtonClick(); return false; }, className: "input-group-addon Hu-pointer"}, React.createElement("i", {className: "fa fa-external-link-square"})), this.state.ItemList.length > 0 && !this.state.IsOpenData ? _fillMenu2 : "", React.createElement("div", {className: "Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.state.IsModalShow ? "show" : "hide")}, React.createElement("div", {className: " Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff " + (this.state.IsModalShow ? "show" : "hide"), style: { top: this.state.ModalTop.toString() + 'px' }}, React.createElement("div", {className: "Hu-naiv"}, React.createElement("h3", {className: "Hu-modals-title pull-left"}, "填写"), React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function () {
                    _this.setState(function (s, p) {
                        _this.props.Vm.IsChange = true;
                        s.IsModalShow = false;
                        return s;
                    });
                }}, React.createElement("i", {className: "icon-remove fa fa-close Hu-pointer "}))), _content2))));
            };
            return MomeryReact;
        }(BaseColReact));
        ui.MomeryReact = MomeryReact;
        var MomeryProps = (function (_super) {
            __extends(MomeryProps, _super);
            function MomeryProps() {
                _super.apply(this, arguments);
            }
            return MomeryProps;
        }(BaseColProps));
        ui.MomeryProps = MomeryProps;
        var MomeryStates = (function (_super) {
            __extends(MomeryStates, _super);
            function MomeryStates() {
                _super.apply(this, arguments);
                this.ItemList = new Array();
                this.IsModalShow = false;
                this.IsOpenData = false;
                this.ModalTop = 0;
                //分页控件
                this.Pagination = new Pagination.tool.PaginationProps;
            }
            return MomeryStates;
        }(BaseColStates));
        ui.MomeryStates = MomeryStates;
        var MomeryVm = (function (_super) {
            __extends(MomeryVm, _super);
            function MomeryVm() {
                _super.apply(this, arguments);
                this.pRegName = "记忆控件";
                this.ReactType = MomeryReact;
                this.ItemList = new Array();
                this.RegName = "SqMomery";
                this.Text = "";
            }
            MomeryVm.Test = function () {
                var _bean = new MomeryVm();
                //var _d: MomeryStates = new MomeryStates();
                return _bean;
            };
            return MomeryVm;
        }(BaseColVm));
        ui.MomeryVm = MomeryVm;
        iocFile.Core.Ioc.Current().RegisterType("MomeryVm", BaseColVm, MomeryVm);
    })(ui = exports.ui || (exports.ui = {}));
});
