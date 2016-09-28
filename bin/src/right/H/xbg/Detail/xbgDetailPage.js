var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../04page/BaseWebPage", "./../../../../02col/01single/Text", "react", "react-dom", "./../../../../02col/02Mulite/Combo"], function (require, exports, iocFile, utilFile, baseWebPageFile, textFile, React, ReactDOM, comboFile) {
    "use strict";
    var xbgTestPage;
    (function (xbgTestPage) {
        var xbgDetailPageAction = (function (_super) {
            __extends(xbgDetailPageAction, _super);
            function xbgDetailPageAction() {
                _super.apply(this, arguments);
            }
            return xbgDetailPageAction;
        }(baseWebPageFile.Web.BaseWebPageAction));
        xbgTestPage.xbgDetailPageAction = xbgDetailPageAction;
        var xbgDetailPageReact = (function (_super) {
            __extends(xbgDetailPageReact, _super);
            function xbgDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new xbgDetailPageStates();
            }
            xbgDetailPageReact.prototype.inputRoleName = function () {
                var _this = this;
                if (!this.props.Vm.RoleNameTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.RoleData.RoleName, "notNull");
                    this.props.Vm.RoleNameTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.RoleData.RoleName = str;
                        return true;
                    });
                }
                return this.props.Vm.RoleNameTextVm.intoDom();
            };
            xbgDetailPageReact.prototype.inputRoleSign = function () {
                var _this = this;
                if (!this.props.Vm.RoleSignTextVm) {
                    var _vm = this.getInputVm(this.props.Vm.RoleData.RoleSign, "notNull");
                    this.props.Vm.RoleSignTextVm = _vm;
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.RoleData.RoleSign = str;
                        return true;
                    });
                }
                return this.props.Vm.RoleSignTextVm.intoDom();
            };
            xbgDetailPageReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            xbgDetailPageReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "角色", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色标识：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleSign())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色名称：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "组织机构：")), React.createElement("div", {className: "col-xs-8"}, this.props.Vm.FControlUnitNameCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "描述：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("textarea", {placeholder: ".."}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "日期：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("input", {ref: "date", placeholder: "请选择日期...", value: this.props.Vm.reactDataValueGet()})))))))));
            };
            //是否隐藏div
            xbgDetailPageReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //日期控件
            xbgDetailPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
                    var _$dom = __this.fGetDateDom();
                    _$dom.calendar({
                        format: "yyyy-MM-dd hh:mm:ss",
                        btnBar: false,
                        onSetDate: function () {
                            __this.props.Vm.RoleData.Date = this.getDate('date'); //获取时间的值
                            return false;
                        }
                    });
                });
                __this.fGetDateDom().addClass("runcode");
            };
            ;
            xbgDetailPageReact.prototype.fGetDateDom = function () {
                var _reactObj = this.refs["date"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return xbgDetailPageReact;
        }(baseWebPageFile.Web.BaseWebPageReact));
        xbgTestPage.xbgDetailPageReact = xbgDetailPageReact;
        var xbgDetailPageVm = (function (_super) {
            __extends(xbgDetailPageVm, _super);
            function xbgDetailPageVm() {
                _super.call(this);
                this.ReactType = xbgDetailPageReact;
                this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
                this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
                var items = [];
                items.push({ Value: 1, Text: "你好" });
                items.push({ Value: 2, Text: "他好" });
                items.push({ Value: 3, Text: "我好" });
                this.FControlUnitNameCombo.ItemList = items;
            }
            xbgDetailPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
            };
            return xbgDetailPageVm;
        }(baseWebPageFile.Web.BaseWebPageVm));
        xbgTestPage.xbgDetailPageVm = xbgDetailPageVm;
        var xbgDetailPageStates = (function (_super) {
            __extends(xbgDetailPageStates, _super);
            function xbgDetailPageStates() {
                _super.apply(this, arguments);
            }
            return xbgDetailPageStates;
        }(baseWebPageFile.Web.BaseWebPageStates));
        xbgTestPage.xbgDetailPageStates = xbgDetailPageStates;
        var xbgDetailPageProps = (function (_super) {
            __extends(xbgDetailPageProps, _super);
            function xbgDetailPageProps() {
                _super.apply(this, arguments);
            }
            return xbgDetailPageProps;
        }(baseWebPageFile.Web.BaseWebPageProps));
        xbgTestPage.xbgDetailPageProps = xbgDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("xbgDetailPage", baseWebPageFile.Web.BaseWebPageVm, xbgDetailPageVm);
    })(xbgTestPage = exports.xbgTestPage || (exports.xbgTestPage = {}));
});
