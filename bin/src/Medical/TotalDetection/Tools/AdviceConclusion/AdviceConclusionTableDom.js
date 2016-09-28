var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./AdviceConclusionRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var AdviceConclusionTableDom;
    (function (AdviceConclusionTableDom) {
        var AdviceConclusionTableDomAction = (function (_super) {
            __extends(AdviceConclusionTableDomAction, _super);
            function AdviceConclusionTableDomAction() {
                _super.apply(this, arguments);
            }
            return AdviceConclusionTableDomAction;
        }(domCore.DomAction));
        AdviceConclusionTableDom.AdviceConclusionTableDomAction = AdviceConclusionTableDomAction;
        var AdviceConclusionTableDomReact = (function (_super) {
            __extends(AdviceConclusionTableDomReact, _super);
            function AdviceConclusionTableDomReact() {
                _super.apply(this, arguments);
                this.state = new AdviceConclusionTableDomStates();
            }
            AdviceConclusionTableDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "模板名称"), React.createElement("th", null, "综述"), React.createElement("th", null, "建议"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (r) {
                    return r.intoDom();
                })));
            };
            AdviceConclusionTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AdviceConclusionTableDomReact;
        }(domCore.DomReact));
        AdviceConclusionTableDom.AdviceConclusionTableDomReact = AdviceConclusionTableDomReact;
        var AdviceConclusionTableDomVm = (function (_super) {
            __extends(AdviceConclusionTableDomVm, _super);
            function AdviceConclusionTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AdviceConclusionTableDomReact;
                this.dataList = new Array();
                this.RowList = [];
                if (config) {
                    this.dataList = config.ListData;
                    this.UniId = config.Unid;
                    if (this.dataList) {
                        this.dataList.forEach(function (a) {
                            var rowconfig = {
                                Data: a,
                                Unid: _this.UniId
                            };
                            var rowDom = new row.DeptConclusionRowDom.DeptConclusionRowDomVm(rowconfig);
                            _this.RowList.push(rowDom);
                        });
                    }
                }
            }
            return AdviceConclusionTableDomVm;
        }(domCore.DomVm));
        AdviceConclusionTableDom.AdviceConclusionTableDomVm = AdviceConclusionTableDomVm;
        var AdviceConclusionTableDomStates = (function (_super) {
            __extends(AdviceConclusionTableDomStates, _super);
            function AdviceConclusionTableDomStates() {
                _super.apply(this, arguments);
            }
            return AdviceConclusionTableDomStates;
        }(domCore.DomStates));
        AdviceConclusionTableDom.AdviceConclusionTableDomStates = AdviceConclusionTableDomStates;
        var AdviceConclusionTableDomProps = (function (_super) {
            __extends(AdviceConclusionTableDomProps, _super);
            function AdviceConclusionTableDomProps() {
                _super.apply(this, arguments);
            }
            return AdviceConclusionTableDomProps;
        }(domCore.DomProps));
        AdviceConclusionTableDom.AdviceConclusionTableDomProps = AdviceConclusionTableDomProps;
    })(AdviceConclusionTableDom = exports.AdviceConclusionTableDom || (exports.AdviceConclusionTableDom = {}));
});
