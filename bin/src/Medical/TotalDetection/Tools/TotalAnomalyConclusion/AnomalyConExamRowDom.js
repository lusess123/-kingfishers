var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyConExamRowDom;
    (function (AnomalyConExamRowDom) {
        var AnomalyConExamRowDomAction = (function (_super) {
            __extends(AnomalyConExamRowDomAction, _super);
            function AnomalyConExamRowDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamRowDomAction;
        }(domCore.DomAction));
        AnomalyConExamRowDom.AnomalyConExamRowDomAction = AnomalyConExamRowDomAction;
        var AnomalyConExamRowDomReact = (function (_super) {
            __extends(AnomalyConExamRowDomReact, _super);
            function AnomalyConExamRowDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyConExamRowDomStates();
            }
            AnomalyConExamRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Data.ItemName), React.createElement("td", null, this.props.Vm.Data.GreaterThan), React.createElement("td", null, this.props.Vm.Data.LessThan), React.createElement("td", null, this.props.Vm.Data.IsPositive ? "是" : "否"), React.createElement("td", null, this.props.Vm.Data.KeyWord));
            };
            AnomalyConExamRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyConExamRowDomReact;
        }(domCore.DomReact));
        AnomalyConExamRowDom.AnomalyConExamRowDomReact = AnomalyConExamRowDomReact;
        var AnomalyConExamRowDomVm = (function (_super) {
            __extends(AnomalyConExamRowDomVm, _super);
            function AnomalyConExamRowDomVm(config) {
                _super.call(this);
                this.ReactType = AnomalyConExamRowDomReact;
                if (config) {
                    this.UniId = config.Unid;
                    this.Data = config.Data;
                }
            }
            return AnomalyConExamRowDomVm;
        }(domCore.DomVm));
        AnomalyConExamRowDom.AnomalyConExamRowDomVm = AnomalyConExamRowDomVm;
        var AnomalyConExamRowDomStates = (function (_super) {
            __extends(AnomalyConExamRowDomStates, _super);
            function AnomalyConExamRowDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamRowDomStates;
        }(domCore.DomStates));
        AnomalyConExamRowDom.AnomalyConExamRowDomStates = AnomalyConExamRowDomStates;
        var AnomalyConExamRowDomProps = (function (_super) {
            __extends(AnomalyConExamRowDomProps, _super);
            function AnomalyConExamRowDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamRowDomProps;
        }(domCore.DomProps));
        AnomalyConExamRowDom.AnomalyConExamRowDomProps = AnomalyConExamRowDomProps;
    })(AnomalyConExamRowDom = exports.AnomalyConExamRowDom || (exports.AnomalyConExamRowDom = {}));
});
