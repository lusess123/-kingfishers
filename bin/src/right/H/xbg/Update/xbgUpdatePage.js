var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "./../../../../02col/01single/Text", "react", "react-dom", "./../../../../02col/02Mulite/Combo"], function (require, exports, iocFile, utilFile, urlFile, baseWebPageFile, textFile, React, ReactDOM, comboFile) {
    "use strict";
    var xbgUpdatePage;
    (function (xbgUpdatePage) {
        var xbgUpdatePageAction = (function (_super) {
            __extends(xbgUpdatePageAction, _super);
            function xbgUpdatePageAction() {
                _super.apply(this, arguments);
            }
            return xbgUpdatePageAction;
        }(baseWebPageFile.Web.BaseWebPageAction));
        xbgUpdatePage.xbgUpdatePageAction = xbgUpdatePageAction;
        var xbgUpdatePageReact = (function (_super) {
            __extends(xbgUpdatePageReact, _super);
            function xbgUpdatePageReact() {
                _super.apply(this, arguments);
                this.state = new xbgUpdatePageStates();
            }
            xbgUpdatePageReact.prototype.inputRoleName = function () {
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
            xbgUpdatePageReact.prototype.inputRoleSign = function () {
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
            xbgUpdatePageReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            xbgUpdatePageReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "角色", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色标识：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleSign())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "角色名称：")), React.createElement("div", {className: "col-xs-8"}, this.inputRoleName())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "组织机构：")), React.createElement("div", {className: "col-xs-8"}, this.props.Vm.FControlUnitNameCombo.intoDom())), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "描述：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("textarea", {placeholder: ".."}))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "col-xs-4"}, React.createElement("label", {className: "pull-right"}, "日期：")), React.createElement("div", {className: "col-xs-8"}, React.createElement("input", {ref: "date", placeholder: "请选择日期...", value: this.props.Vm.reactDataValueGet()}))), React.createElement("span", {className: "btn btn-primary", onClick: function () { _this.Submits(); }}, "保存")))))));
            };
            //是否隐藏div
            xbgUpdatePageReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            //提交
            xbgUpdatePageReact.prototype.Submits = function () {
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
            xbgUpdatePageReact.prototype.pComponentDidMount = function () {
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
            xbgUpdatePageReact.prototype.fGetDateDom = function () {
                var _reactObj = this.refs["date"];
                var _dom = ReactDOM.findDOMNode(_reactObj);
                var _$dom = $(_dom);
                return _$dom;
            };
            return xbgUpdatePageReact;
        }(baseWebPageFile.Web.BaseWebPageReact));
        xbgUpdatePage.xbgUpdatePageReact = xbgUpdatePageReact;
        var xbgUpdatePageVm = (function (_super) {
            __extends(xbgUpdatePageVm, _super);
            function xbgUpdatePageVm() {
                _super.call(this);
                this.ReactType = xbgUpdatePageReact;
                this.RoleData = { RoleID: "", RoleSign: "", RoleName: "", FControlUnitName: "11", Description: "", FControlUnitID: "11", Date: "" };
                this.FControlUnitNameCombo = new comboFile.ui.ComboVm();
                var items = [];
                items.push({ Value: 1, Text: "你好" });
                items.push({ Value: 2, Text: "他好" });
                items.push({ Value: 3, Text: "我好" });
                this.FControlUnitNameCombo.ItemList = items;
            }
            xbgUpdatePageVm.prototype.initData = function () {
                this.ListData = { Pager: { PageNo: 0, PageSize: 2, TotalCount: 0, TableName: "", IsASC: false, DataTime: null, SortName: "" }, List: [] };
            };
            return xbgUpdatePageVm;
        }(baseWebPageFile.Web.BaseWebPageVm));
        xbgUpdatePage.xbgUpdatePageVm = xbgUpdatePageVm;
        var xbgUpdatePageStates = (function (_super) {
            __extends(xbgUpdatePageStates, _super);
            function xbgUpdatePageStates() {
                _super.apply(this, arguments);
            }
            return xbgUpdatePageStates;
        }(baseWebPageFile.Web.BaseWebPageStates));
        xbgUpdatePage.xbgUpdatePageStates = xbgUpdatePageStates;
        var xbgUpdatePageProps = (function (_super) {
            __extends(xbgUpdatePageProps, _super);
            function xbgUpdatePageProps() {
                _super.apply(this, arguments);
            }
            return xbgUpdatePageProps;
        }(baseWebPageFile.Web.BaseWebPageProps));
        xbgUpdatePage.xbgUpdatePageProps = xbgUpdatePageProps;
        iocFile.Core.Ioc.Current().RegisterType("xbgUpdatePage", baseWebPageFile.Web.BaseWebPageVm, xbgUpdatePageVm);
    })(xbgUpdatePage = exports.xbgUpdatePage || (exports.xbgUpdatePage = {}));
});
