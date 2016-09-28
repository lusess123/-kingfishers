var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./AnomalyConExamRowDom"], function (require, exports, domFile, React, row) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalyConExamTableDom;
    (function (AnomalyConExamTableDom) {
        var AnomalyConExamTableDomAction = (function (_super) {
            __extends(AnomalyConExamTableDomAction, _super);
            function AnomalyConExamTableDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamTableDomAction;
        }(domCore.DomAction));
        AnomalyConExamTableDom.AnomalyConExamTableDomAction = AnomalyConExamTableDomAction;
        var AnomalyConExamTableDomReact = (function (_super) {
            __extends(AnomalyConExamTableDomReact, _super);
            function AnomalyConExamTableDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalyConExamTableDomStates();
            }
            AnomalyConExamTableDomReact.prototype.pSender = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, "项目名"), React.createElement("th", null, "上限"), React.createElement("th", null, "下限"), React.createElement("th", null, "是否位阳性"), React.createElement("th", null, "关键字"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (a) {
                    return a.intoDom();
                })));
            };
            AnomalyConExamTableDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalyConExamTableDomReact;
        }(domCore.DomReact));
        AnomalyConExamTableDom.AnomalyConExamTableDomReact = AnomalyConExamTableDomReact;
        var AnomalyConExamTableDomVm = (function (_super) {
            __extends(AnomalyConExamTableDomVm, _super);
            function AnomalyConExamTableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalyConExamTableDomReact;
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
                            var rowdom = new row.AnomalyConExamRowDom.AnomalyConExamRowDomVm(rowconfig);
                            _this.RowList.push(rowdom);
                        });
                    }
                }
            }
            return AnomalyConExamTableDomVm;
        }(domCore.DomVm));
        AnomalyConExamTableDom.AnomalyConExamTableDomVm = AnomalyConExamTableDomVm;
        var AnomalyConExamTableDomStates = (function (_super) {
            __extends(AnomalyConExamTableDomStates, _super);
            function AnomalyConExamTableDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamTableDomStates;
        }(domCore.DomStates));
        AnomalyConExamTableDom.AnomalyConExamTableDomStates = AnomalyConExamTableDomStates;
        var AnomalyConExamTableDomProps = (function (_super) {
            __extends(AnomalyConExamTableDomProps, _super);
            function AnomalyConExamTableDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalyConExamTableDomProps;
        }(domCore.DomProps));
        AnomalyConExamTableDom.AnomalyConExamTableDomProps = AnomalyConExamTableDomProps;
    })(AnomalyConExamTableDom = exports.AnomalyConExamTableDom || (exports.AnomalyConExamTableDom = {}));
});
