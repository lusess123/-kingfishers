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
            MasterDomReact.prototype.fun_titleClick = function () {
                this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
                this.forceUpdate();
            };
            MasterDomReact.prototype.pSender = function () {
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsFormHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "上级机构：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.FParentFName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "机构名称：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.GroupName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "机构编码：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.GroupID))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "联系方式：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.FPhone))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "传真：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.Fax))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", null, "邮政编码：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.Post))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", null, "地址：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.FAddress))), React.createElement("div", {className: "col-lg-12 col-sm-12 col-xs-12  Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {className: "form-control-label"}, "机构描述：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {className: "form-control-label"}, this.props.Vm.Data.GroupDescrible))))))));
            };
            MasterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
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
