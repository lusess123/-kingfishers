var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./DeptConExamRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var DeptConExamTableDom;
    (function (DeptConExamTableDom) {
        var DeptConExamTableDomAction = (function (_super) {
            __extends(DeptConExamTableDomAction, _super);
            function DeptConExamTableDomAction() {
                _super.apply(this, arguments);
            }
            return DeptConExamTableDomAction;
        }(domCore.DomAction));
        DeptConExamTableDom.DeptConExamTableDomAction = DeptConExamTableDomAction;
        var DeptConExamTableDomReact = (function (_super) {
            __extends(DeptConExamTableDomReact, _super);
            function DeptConExamTableDomReact() {
                _super.apply(this, arguments);
                this.state = new DeptConExamTableDomStates();
            }
            DeptConExamTableDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "项目名"), React.createElement("th", null, "上限"), React.createElement("th", null, "下限"), React.createElement("th", null, "是否位阳性"), React.createElement("th", null, "关键字"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (a) {
                    return a.intoDom();
                })));
            };
            DeptConExamTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DeptConExamTableDomReact;
        }(domCore.DomReact));
        DeptConExamTableDom.DeptConExamTableDomReact = DeptConExamTableDomReact;
        var DeptConExamTableDomVm = (function (_super) {
            __extends(DeptConExamTableDomVm, _super);
            function DeptConExamTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DeptConExamTableDomReact;
                this.DataList = [];
                this.RowList = [];
                if (config) {
                    this.UniId = config.Unid;
                    this.DataList = config.ListData;
                    if (this.DataList) {
                        this.DataList.forEach(function (a) {
                            var rowconfig = {
                                Data: a,
                                Unid: _this.UniId
                            };
                            var rowdom = new row.DeptConExamRowDom.DeptConExamRowDomVm(rowconfig);
                            _this.RowList.push(rowdom);
                        });
                    }
                }
            }
            return DeptConExamTableDomVm;
        }(domCore.DomVm));
        DeptConExamTableDom.DeptConExamTableDomVm = DeptConExamTableDomVm;
        var DeptConExamTableDomStates = (function (_super) {
            __extends(DeptConExamTableDomStates, _super);
            function DeptConExamTableDomStates() {
                _super.apply(this, arguments);
            }
            return DeptConExamTableDomStates;
        }(domCore.DomStates));
        DeptConExamTableDom.DeptConExamTableDomStates = DeptConExamTableDomStates;
        var DeptConExamTableDomProps = (function (_super) {
            __extends(DeptConExamTableDomProps, _super);
            function DeptConExamTableDomProps() {
                _super.apply(this, arguments);
            }
            return DeptConExamTableDomProps;
        }(domCore.DomProps));
        DeptConExamTableDom.DeptConExamTableDomProps = DeptConExamTableDomProps;
    })(DeptConExamTableDom = exports.DeptConExamTableDom || (exports.DeptConExamTableDom = {}));
});
