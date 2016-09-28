var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./AnomalyConclusionRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyConclusionTableDom;
    (function (AnomalyConclusionTableDom) {
        var AnomalyConclusionTableDomAction = (function (_super) {
            __extends(AnomalyConclusionTableDomAction, _super);
            function AnomalyConclusionTableDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionTableDomAction;
        }(domCore.DomAction));
        AnomalyConclusionTableDom.AnomalyConclusionTableDomAction = AnomalyConclusionTableDomAction;
        var AnomalyConclusionTableDomReact = (function (_super) {
            __extends(AnomalyConclusionTableDomReact, _super);
            function AnomalyConclusionTableDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyConclusionTableDomStates();
            }
            AnomalyConclusionTableDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "异常名"), React.createElement("th", null, "关联项目详情"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (r) {
                    return r.intoDom();
                })));
            };
            AnomalyConclusionTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyConclusionTableDomReact;
        }(domCore.DomReact));
        AnomalyConclusionTableDom.AnomalyConclusionTableDomReact = AnomalyConclusionTableDomReact;
        var AnomalyConclusionTableDomVm = (function (_super) {
            __extends(AnomalyConclusionTableDomVm, _super);
            function AnomalyConclusionTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalyConclusionTableDomReact;
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
                            var rowDom = new row.AnomalyConclusionRowDom.AnomalyConclusionRowDomVm(rowconfig);
                            _this.RowList.push(rowDom);
                        });
                    }
                }
            }
            return AnomalyConclusionTableDomVm;
        }(domCore.DomVm));
        AnomalyConclusionTableDom.AnomalyConclusionTableDomVm = AnomalyConclusionTableDomVm;
        var AnomalyConclusionTableDomStates = (function (_super) {
            __extends(AnomalyConclusionTableDomStates, _super);
            function AnomalyConclusionTableDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionTableDomStates;
        }(domCore.DomStates));
        AnomalyConclusionTableDom.AnomalyConclusionTableDomStates = AnomalyConclusionTableDomStates;
        var AnomalyConclusionTableDomProps = (function (_super) {
            __extends(AnomalyConclusionTableDomProps, _super);
            function AnomalyConclusionTableDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyConclusionTableDomProps;
        }(domCore.DomProps));
        AnomalyConclusionTableDom.AnomalyConclusionTableDomProps = AnomalyConclusionTableDomProps;
    })(AnomalyConclusionTableDom = exports.AnomalyConclusionTableDom || (exports.AnomalyConclusionTableDom = {}));
});
