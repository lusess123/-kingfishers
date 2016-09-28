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
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleClick(); }}, "基础菜单明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse" + (this.props.Vm.IsFormHide ? " hide" : "")}, React.createElement("div", {className: "content active "}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.MenuName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "上级菜单：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.ParentName == "" ? "(此菜单是根节点)" : this.props.Vm.Data.ParentName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单类别：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.MenuKindName))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "排序编号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.OrderId))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "权值：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Key), " ")), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "菜单描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.RightDesc))))))));
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
