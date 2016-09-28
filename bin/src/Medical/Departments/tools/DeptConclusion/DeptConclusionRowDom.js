var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionRowDom;
    (function (DeptConclusionRowDom) {
        var DeptConclusionRowDomAction = (function (_super) {
            __extends(DeptConclusionRowDomAction, _super);
            function DeptConclusionRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionRowDomAction;
        }(domCore.DomAction));
        DeptConclusionRowDom.DeptConclusionRowDomAction = DeptConclusionRowDomAction;
        var DeptConclusionRowDomReact = (function (_super) {
            __extends(DeptConclusionRowDomReact, _super);
            function DeptConclusionRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionRowDomStates();
            }
            DeptConclusionRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, React.createElement("span", null, React.createElement("i", {className: " fa fa-circle-o", onClick: function () { _this.props.Vm.getCheck(); }}))), React.createElement("td", null, this.props.Vm.DeptrData.DeptName), React.createElement("td", null, this.props.Vm.DeptrData.ConclusionName), React.createElement("td", null, this.props.Vm.DeptrData.ConclusionContent), React.createElement("td", null, React.createElement("i", {onClick: function () { _this.props.Vm.getItemTable(); }}, "查看")));
            };
            DeptConclusionRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DeptConclusionRowDomReact;
        }(domCore.DomReact));
        DeptConclusionRowDom.DeptConclusionRowDomReact = DeptConclusionRowDomReact;
        var DeptConclusionRowDomVm = (function (_super) {
            __extends(DeptConclusionRowDomVm, _super);
            function DeptConclusionRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConclusionRowDomReact;
                //public dataList = new Array<data.Result.DepartTemplate>();
                this.DeptrData = { FID: "", DeptName: "", ConclusionContent: "", ConclusionName: "" };
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.DeptrData = config.Data;
                    this.UniId = config.Unid;
                }
            }
            DeptConclusionRowDomVm.prototype.getCheck = function () {
                this.emitAppEvent("medical/Departments/tools/DeptConclusion", this.UniId, this.DeptrData.ConclusionContent);
                this.emitAppEvent("modal-close", this.UniId);
            };
            DeptConclusionRowDomVm.prototype.getItemTable = function () {
                //medical / Departments / tool / DeptConclusion
                this.emitAppEvent("medical/Departments/tool/DeptConclusion", this.UniId, this.DeptrData.FID);
            };
            return DeptConclusionRowDomVm;
        }(domCore.DomVm));
        DeptConclusionRowDom.DeptConclusionRowDomVm = DeptConclusionRowDomVm;
        var DeptConclusionRowDomStates = (function (_super) {
            __extends(DeptConclusionRowDomStates, _super);
            function DeptConclusionRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionRowDomStates;
        }(domCore.DomStates));
        DeptConclusionRowDom.DeptConclusionRowDomStates = DeptConclusionRowDomStates;
        var DeptConclusionRowDomProps = (function (_super) {
            __extends(DeptConclusionRowDomProps, _super);
            function DeptConclusionRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionRowDomProps;
        }(domCore.DomProps));
        DeptConclusionRowDom.DeptConclusionRowDomProps = DeptConclusionRowDomProps;
    })(DeptConclusionRowDom = exports.DeptConclusionRowDom || (exports.DeptConclusionRowDom = {}));
});
