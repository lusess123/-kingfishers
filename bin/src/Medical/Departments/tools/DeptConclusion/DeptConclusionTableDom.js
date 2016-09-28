var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./DeptConclusionRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConclusionTableDom;
    (function (DeptConclusionTableDom) {
        var DeptConclusionTableDomAction = (function (_super) {
            __extends(DeptConclusionTableDomAction, _super);
            function DeptConclusionTableDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTableDomAction;
        }(domCore.DomAction));
        DeptConclusionTableDom.DeptConclusionTableDomAction = DeptConclusionTableDomAction;
        var DeptConclusionTableDomReact = (function (_super) {
            __extends(DeptConclusionTableDomReact, _super);
            function DeptConclusionTableDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConclusionTableDomStates();
            }
            DeptConclusionTableDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "选择"), React.createElement("th", null, "科室名"), React.createElement("th", null, "小结名称"), React.createElement("th", null, "小结内容"), React.createElement("th", null, "关联项目详情"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (r) {
                    return r.intoDom();
                })));
            };
            DeptConclusionTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DeptConclusionTableDomReact;
        }(domCore.DomReact));
        DeptConclusionTableDom.DeptConclusionTableDomReact = DeptConclusionTableDomReact;
        var DeptConclusionTableDomVm = (function (_super) {
            __extends(DeptConclusionTableDomVm, _super);
            function DeptConclusionTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DeptConclusionTableDomReact;
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
            return DeptConclusionTableDomVm;
        }(domCore.DomVm));
        DeptConclusionTableDom.DeptConclusionTableDomVm = DeptConclusionTableDomVm;
        var DeptConclusionTableDomStates = (function (_super) {
            __extends(DeptConclusionTableDomStates, _super);
            function DeptConclusionTableDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTableDomStates;
        }(domCore.DomStates));
        DeptConclusionTableDom.DeptConclusionTableDomStates = DeptConclusionTableDomStates;
        var DeptConclusionTableDomProps = (function (_super) {
            __extends(DeptConclusionTableDomProps, _super);
            function DeptConclusionTableDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConclusionTableDomProps;
        }(domCore.DomProps));
        DeptConclusionTableDom.DeptConclusionTableDomProps = DeptConclusionTableDomProps;
    })(DeptConclusionTableDom = exports.DeptConclusionTableDom || (exports.DeptConclusionTableDom = {}));
});
