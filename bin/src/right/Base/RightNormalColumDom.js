var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../03form/Norml/NormalColumn"], function (require, exports, React, NormalCoumnFile) {
    "use strict";
    var RightNormalColumDom;
    (function (RightNormalColumDom) {
        var RightNormalColumDomReact = (function (_super) {
            __extends(RightNormalColumDomReact, _super);
            function RightNormalColumDomReact() {
                _super.apply(this, arguments);
            }
            RightNormalColumDomReact.prototype.vm = function () {
                var _vm = this.props.Vm;
                return _vm;
            };
            RightNormalColumDomReact.prototype.hasLegal = function () {
                return this.vm().LegalObj != null;
            };
            RightNormalColumDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "col-" + this.props.Vm.getColumnsCols() + " col-sm-12 Hu-dashed-line"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "form-control-label pull-right " + this.hasLegal() ? "required" : ""}, this.vm().ColumnConfig.DisplayName + "：")), React.createElement("div", {className: "pull-left Hu-input", "data-act-post": this.vm().SubmitSign}, React.createElement("label", {className: "pull-left"}, this.vm().ControlObj.intoDom())));
            };
            RightNormalColumDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RightNormalColumDomReact;
        }(NormalCoumnFile.ui.NormalColumnReact));
        RightNormalColumDom.RightNormalColumDomReact = RightNormalColumDomReact;
        var RightNormalColumDomVm = (function (_super) {
            __extends(RightNormalColumDomVm, _super);
            function RightNormalColumDomVm() {
                _super.apply(this, arguments);
                this.ReactType = RightNormalColumDomReact;
            }
            return RightNormalColumDomVm;
        }(NormalCoumnFile.ui.NormalColumnVm));
        RightNormalColumDom.RightNormalColumDomVm = RightNormalColumDomVm;
    })(RightNormalColumDom = exports.RightNormalColumDom || (exports.RightNormalColumDom = {}));
});
