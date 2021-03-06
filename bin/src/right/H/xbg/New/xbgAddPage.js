var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../../../../02col/01single/Text", "react", "react-dom", "./../../../../02col/02Mulite/Combo"], function (require, exports, iocFile, utilFile, urlFile, baseWebPageFile, textFile, React, ReactDOM, comboFile) {
    "use strict";
    var xbgTestPage;
    (function (xbgTestPage) {
        var xbgAddPageAction = (function (_super) {
            __extends(xbgAddPageAction, _super);
            function xbgAddPageAction() {
                _super.apply(this, arguments);
            }
            return xbgAddPageAction;
        }(baseWebPageFile.Web.BaseWebPageAction));
        xbgTestPage.xbgAddPageAction = xbgAddPageAction;
        var xbgAddPageReact = (function (_super) {
            __extends(xbgAddPageReact, _super);
            function xbgAddPageReact() {
                _super.apply(this, arguments);
                this.state = new xbgAddPageStates();
            }
            xbgAddPageReact.prototype.inputRoleName = function () {
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
            xbgAddPageReact.prototype.inputRoleSign = function () {
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
            xbgAddPageReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            xbgAddPageReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "角色", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色标识：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleSign())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色名称：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "组织机构：")), React.createElement("div", {className: "col-xs-8"}, this.props.Vm.FControlUnitNameCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "描述：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("textarea", {placeholder: ".."}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "日期：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("input", {ref: "date", placeholder: "请选择日期...", value: this.props.Vm.reactDataValueGet()}))), React.createElement("span", {className: "btn btn-primary", onClick: function () { _this.Submits(); }}, "保存")))))));
            };
            //是否隐藏div
            xbgAddPageReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //提交
            xbgAddPageReact.prototype.Submits = function () {
                var roleName = this.props.Vm.RoleData.RoleName;
                var date = this.props.Vm.RoleData.Date;
                var roleSign = this.props.Vm.RoleData.RoleSign;
                var ff = this.props.Vm.FControlUnitNameCombo.vmDataValueGet();
                urlFile.Core.AkPost("/RightCloud/RightConfig/GroupSubmit", { RoleName: roleName, Date: date, RoleSign: roleSign }, function (data) {
                    alert("dd");
                    alert(ff);
                    utilFile.Core.Util.Noty("数据编辑成功");
                    //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                    //页面刷新
                    urlFile.Core.AkUrl.Current().openUrl("$xbgTestPage$", false, function () { });
                });
            };
            //日期控件
            xbgAddPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
                var _val = this.props.Vm.reactDataValueGet();
                var __this = this;
                utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/lhgcalendar/lhgcalendar.min.js", "/AtawStatic/lib/03Extend/lhgcalendar/skins/lhgcalendar.css"], function () {
                    var _$dom = __this.fGetDateDom();
                    _$dom.calendar({
                        format: "yyyy-MM-dd",
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
            xbgAddPageReact.prototype.fGetDateDom = function () {
                var _reactObj = this.refs["date"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return xbgAddPageReact;
        }(baseWebPageFile.Web.BaseWebPageReact));
        xbgTestPage.xbgAddPageReact = xbgAddPageReact;
        var xbgAddPageVm = (function (_super) {
            __extends(xbgAddPageVm, _super);
            function xbgAddPageVm() {
                _super.call(this);
                this.ReactType = xbgAddPageReact;
                this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
                this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
                var items = [];
                items.push({ Value: 1, Text: "你好" });
                items.push({ Value: 2, Text: "他好" });
                items.push({ Value: 3, Text: "我好" });
                this.FControlUnitNameCombo.ItemList = items;
            }
            xbgAddPageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
            };
            return xbgAddPageVm;
        }(baseWebPageFile.Web.BaseWebPageVm));
        xbgTestPage.xbgAddPageVm = xbgAddPageVm;
        var xbgAddPageStates = (function (_super) {
            __extends(xbgAddPageStates, _super);
            function xbgAddPageStates() {
                _super.apply(this, arguments);
            }
            return xbgAddPageStates;
        }(baseWebPageFile.Web.BaseWebPageStates));
        xbgTestPage.xbgAddPageStates = xbgAddPageStates;
        var xbgAddPageProps = (function (_super) {
            __extends(xbgAddPageProps, _super);
            function xbgAddPageProps() {
                _super.apply(this, arguments);
            }
            return xbgAddPageProps;
        }(baseWebPageFile.Web.BaseWebPageProps));
        xbgTestPage.xbgAddPageProps = xbgAddPageProps;
        iocFile.Core.Ioc.Current().RegisterType("xbgAddPage", baseWebPageFile.Web.BaseWebPageVm, xbgAddPageVm);
    })(xbgTestPage = exports.xbgTestPage || (exports.xbgTestPage = {}));
});
