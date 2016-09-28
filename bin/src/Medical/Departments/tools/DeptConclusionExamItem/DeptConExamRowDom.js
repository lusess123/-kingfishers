var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConExamRowDom;
    (function (DeptConExamRowDom) {
        var DeptConExamRowDomAction = (function (_super) {
            __extends(DeptConExamRowDomAction, _super);
            function DeptConExamRowDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConExamRowDomAction;
        }(domCore.DomAction));
        DeptConExamRowDom.DeptConExamRowDomAction = DeptConExamRowDomAction;
        var DeptConExamRowDomReact = (function (_super) {
            __extends(DeptConExamRowDomReact, _super);
            function DeptConExamRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConExamRowDomStates();
            }
            DeptConExamRowDomReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Data.ItemName), React.createElement("td", null, this.props.Vm.Data.GreaterThan), React.createElement("td", null, this.props.Vm.Data.LessThan), React.createElement("td", null, this.sender(this.props.Vm.Data.IsPositive)), React.createElement("td", null, this.props.Vm.Data.KeyWord));
            };
            DeptConExamRowDomReact.prototype.sender = function (isPostitive) {
                if (isPostitive == "True") {
                    return "是";
                }
                else if (isPostitive == "False") {
                    return "否";
                }
            };
            DeptConExamRowDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DeptConExamRowDomReact;
        }(domCore.DomReact));
        DeptConExamRowDom.DeptConExamRowDomReact = DeptConExamRowDomReact;
        var DeptConExamRowDomVm = (function (_super) {
            __extends(DeptConExamRowDomVm, _super);
            function DeptConExamRowDomVm(config) {
                _super.call(this);
                this.ReactType = DeptConExamRowDomReact;
                if (config) {
                    this.UniId = config.Unid;
                    this.Data = config.Data;
                }
            }
            return DeptConExamRowDomVm;
        }(domCore.DomVm));
        DeptConExamRowDom.DeptConExamRowDomVm = DeptConExamRowDomVm;
        var DeptConExamRowDomStates = (function (_super) {
            __extends(DeptConExamRowDomStates, _super);
            function DeptConExamRowDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConExamRowDomStates;
        }(domCore.DomStates));
        DeptConExamRowDom.DeptConExamRowDomStates = DeptConExamRowDomStates;
        var DeptConExamRowDomProps = (function (_super) {
            __extends(DeptConExamRowDomProps, _super);
            function DeptConExamRowDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConExamRowDomProps;
        }(domCore.DomProps));
        DeptConExamRowDom.DeptConExamRowDomProps = DeptConExamRowDomProps;
    })(DeptConExamRowDom = exports.DeptConExamRowDom || (exports.DeptConExamRowDom = {}));
});
