var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var MasterDom;
    (function (MasterDom) {
        var MasterDomAction = (function (_super) {
            __extends(MasterDomAction, _super);
            function MasterDomAction() {
                _super.apply(this, arguments);
            }
            return MasterDomAction;
        }(domCore.DomAction));
        MasterDom.MasterDomAction = MasterDomAction;
        var MasterDomReact = (function (_super) {
            __extends(MasterDomReact, _super);
            function MasterDomReact() {
                _super.apply(this, arguments);
                this.state = new MasterDomStates();
            }
            MasterDomReact.prototype.fun_ParentOnChange = function (e) {
            };
            MasterDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            MasterDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "用户管理明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsFormHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "姓名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.NickName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "登录名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.UserName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "所在地区：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.Area))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "用户类型：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.UserKindName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "创建时间：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.CreateTime))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "创建人：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.CreaterName == null ? "(空)" : $(this.props.Vm.Data.CreaterName).text()))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "描述：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.Remark))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-full-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "手机MDIE号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.MEID))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-full-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "组织结构：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.FControlUnitName))))))));
            };
            MasterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MasterDomReact.prototype.fun_TrashDel = function () {
                //-----------------
                alert("删除");
            };
            MasterDomReact.prototype.fun_Update = function () {
                //-----------------
                alert("删除");
            };
            return MasterDomReact;
        }(domCore.DomReact));
        MasterDom.MasterDomReact = MasterDomReact;
        var MasterDomVm = (function (_super) {
            __extends(MasterDomVm, _super);
            function MasterDomVm() {
                _super.apply(this, arguments);
                this.ReactType = MasterDomReact;
            }
            return MasterDomVm;
        }(domCore.DomVm));
        MasterDom.MasterDomVm = MasterDomVm;
        var MasterDomStates = (function (_super) {
            __extends(MasterDomStates, _super);
            function MasterDomStates() {
                _super.apply(this, arguments);
            }
            return MasterDomStates;
        }(domCore.DomStates));
        MasterDom.MasterDomStates = MasterDomStates;
        var MasterDomProps = (function (_super) {
            __extends(MasterDomProps, _super);
            function MasterDomProps() {
                _super.apply(this, arguments);
            }
            return MasterDomProps;
        }(domCore.DomProps));
        MasterDom.MasterDomProps = MasterDomProps;
    })(MasterDom = exports.MasterDom || (exports.MasterDom = {}));
});
