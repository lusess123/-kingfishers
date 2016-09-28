var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./ResultCommonInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var ResultCommonInsertRowDom;
    (function (ResultCommonInsertRowDom) {
        var ResultCommonInsertRowDomAction = (function (_super) {
            __extends(ResultCommonInsertRowDomAction, _super);
            function ResultCommonInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertRowDomAction;
        }(domCore.DomAction));
        ResultCommonInsertRowDom.ResultCommonInsertRowDomAction = ResultCommonInsertRowDomAction;
        var ResultCommonInsertRowDomReact = (function (_super) {
            __extends(ResultCommonInsertRowDomReact, _super);
            function ResultCommonInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ResultCommonInsertRowDomStates();
            }
            ResultCommonInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            ResultCommonInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            ResultCommonInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ResultCommonInsertRowDomReact;
        }(domCore.DomReact));
        ResultCommonInsertRowDom.ResultCommonInsertRowDomReact = ResultCommonInsertRowDomReact;
        var ResultCommonInsertRowDomVm = (function (_super) {
            __extends(ResultCommonInsertRowDomVm, _super);
            function ResultCommonInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = ResultCommonInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.ResultCommonInsertMasterRowDom.ResultCommonInsertMasterRowDomVm();
            }
            return ResultCommonInsertRowDomVm;
        }(domCore.DomVm));
        ResultCommonInsertRowDom.ResultCommonInsertRowDomVm = ResultCommonInsertRowDomVm;
        var ResultCommonInsertRowDomStates = (function (_super) {
            __extends(ResultCommonInsertRowDomStates, _super);
            function ResultCommonInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertRowDomStates;
        }(domCore.DomStates));
        ResultCommonInsertRowDom.ResultCommonInsertRowDomStates = ResultCommonInsertRowDomStates;
        var ResultCommonInsertRowDomProps = (function (_super) {
            __extends(ResultCommonInsertRowDomProps, _super);
            function ResultCommonInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return ResultCommonInsertRowDomProps;
        }(domCore.DomProps));
        ResultCommonInsertRowDom.ResultCommonInsertRowDomProps = ResultCommonInsertRowDomProps;
    })(ResultCommonInsertRowDom = exports.ResultCommonInsertRowDom || (exports.ResultCommonInsertRowDom = {}));
});
