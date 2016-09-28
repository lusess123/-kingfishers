var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyConclusionRowDom;
    (function (AnomalyConclusionRowDom) {
        var AnomalyConclusionRowDomAction = (function (_super) {
            __extends(AnomalyConclusionRowDomAction, _super);
            function AnomalyConclusionRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionRowDomAction;
        }(domCore.DomAction));
        AnomalyConclusionRowDom.AnomalyConclusionRowDomAction = AnomalyConclusionRowDomAction;
        var AnomalyConclusionRowDomReact = (function (_super) {
            __extends(AnomalyConclusionRowDomReact, _super);
            function AnomalyConclusionRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyConclusionRowDomStates();
            }
            AnomalyConclusionRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, React.createElement("span", null, React.createElement("i", {className: " fa fa-circle-o", onClick: function () { _this.props.Vm.getCheck(); }}))), React.createElement("td", null, this.props.Vm.AnomalyrData.Name), React.createElement("td", null, React.createElement("i", {onClick: function () { _this.props.Vm.getItemTable(); }}, "查看")));
            };
            AnomalyConclusionRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyConclusionRowDomReact;
        }(domCore.DomReact));
        AnomalyConclusionRowDom.AnomalyConclusionRowDomReact = AnomalyConclusionRowDomReact;
        var AnomalyConclusionRowDomVm = (function (_super) {
            __extends(AnomalyConclusionRowDomVm, _super);
            function AnomalyConclusionRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyConclusionRowDomReact;
                //public dataList = new Array<data.Result.DepartTemplate>();
                this.AnomalyrData = { FID: "", Name: "" };
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.AnomalyrData = config.Data;
                    this.UniId = config.Unid;
                }
            }
            AnomalyConclusionRowDomVm.prototype.getCheck = function () {
                this.emitAppEvent("medical/Anomaly/tools/AllAnomalyConclusion", this.UniId, this.AnomalyrData.FID, this.AnomalyrData.Name);
                this.emitAppEvent("modal-close", this.UniId);
            };
            AnomalyConclusionRowDomVm.prototype.getItemTable = function () {
                //medical / Departments / tool / AnomalyConclusion
                this.emitAppEvent("medical/Anomaly/tools/TotalAnomalyConclusion", this.UniId, this.AnomalyrData.FID);
            };
            return AnomalyConclusionRowDomVm;
        }(domCore.DomVm));
        AnomalyConclusionRowDom.AnomalyConclusionRowDomVm = AnomalyConclusionRowDomVm;
        var AnomalyConclusionRowDomStates = (function (_super) {
            __extends(AnomalyConclusionRowDomStates, _super);
            function AnomalyConclusionRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionRowDomStates;
        }(domCore.DomStates));
        AnomalyConclusionRowDom.AnomalyConclusionRowDomStates = AnomalyConclusionRowDomStates;
        var AnomalyConclusionRowDomProps = (function (_super) {
            __extends(AnomalyConclusionRowDomProps, _super);
            function AnomalyConclusionRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionRowDomProps;
        }(domCore.DomProps));
        AnomalyConclusionRowDom.AnomalyConclusionRowDomProps = AnomalyConclusionRowDomProps;
    })(AnomalyConclusionRowDom = exports.AnomalyConclusionRowDom || (exports.AnomalyConclusionRowDom = {}));
});
