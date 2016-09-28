var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./ReportElectricalFaultCategoryGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalFaultCategoryGridFormDom;
    (function (ReportElectricalFaultCategoryGridFormDom) {
        var ReportElectricalFaultCategoryGridFormDomAction = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridFormDomAction, _super);
            function ReportElectricalFaultCategoryGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridFormDomAction;
        }(domCore.DomAction));
        ReportElectricalFaultCategoryGridFormDom.ReportElectricalFaultCategoryGridFormDomAction = ReportElectricalFaultCategoryGridFormDomAction;
        var ReportElectricalFaultCategoryGridFormDomReact = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridFormDomReact, _super);
            function ReportElectricalFaultCategoryGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalFaultCategoryGridFormDomStates();
            }
            ReportElectricalFaultCategoryGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ReportElectricalFaultCategoryGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ReportElectricalFaultCategoryGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            ReportElectricalFaultCategoryGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            ReportElectricalFaultCategoryGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ReportElectricalFaultCategoryGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ReportElectricalFaultCategoryGridFormDomReact;
        }(domCore.DomReact));
        ReportElectricalFaultCategoryGridFormDom.ReportElectricalFaultCategoryGridFormDomReact = ReportElectricalFaultCategoryGridFormDomReact;
        var ReportElectricalFaultCategoryGridFormDomVm = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridFormDomVm, _super);
            function ReportElectricalFaultCategoryGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportElectricalFaultCategoryGridFormDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.ColList = [];
                this.FormData = {};
                this.RowList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.DataSet) {
                    this.FormData = config.DataSet;
                    var oriColList = [];
                    for (var col in this.FormData["Table"][0]) {
                        oriColList.push(col);
                        if (col == "DepartmentName") {
                            col = "部门";
                        }
                        this.ColList.push(col);
                    }
                    this.FormData["Table"].forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber, ColList: oriColList };
                        var rowVm = new gridRowFile.ReportElectricalFaultCategoryGridRowDom.ReportElectricalFaultCategoryGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ReportElectricalFaultCategoryGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ReportElectricalFaultCategoryGridFormDomVm;
        }(domCore.DomVm));
        ReportElectricalFaultCategoryGridFormDom.ReportElectricalFaultCategoryGridFormDomVm = ReportElectricalFaultCategoryGridFormDomVm;
        var ReportElectricalFaultCategoryGridFormDomStates = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridFormDomStates, _super);
            function ReportElectricalFaultCategoryGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridFormDomStates;
        }(domCore.DomStates));
        ReportElectricalFaultCategoryGridFormDom.ReportElectricalFaultCategoryGridFormDomStates = ReportElectricalFaultCategoryGridFormDomStates;
        var ReportElectricalFaultCategoryGridFormDomProps = (function (_super) {
            __extends(ReportElectricalFaultCategoryGridFormDomProps, _super);
            function ReportElectricalFaultCategoryGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalFaultCategoryGridFormDomProps;
        }(domCore.DomProps));
        ReportElectricalFaultCategoryGridFormDom.ReportElectricalFaultCategoryGridFormDomProps = ReportElectricalFaultCategoryGridFormDomProps;
    })(ReportElectricalFaultCategoryGridFormDom = exports.ReportElectricalFaultCategoryGridFormDom || (exports.ReportElectricalFaultCategoryGridFormDom = {}));
});
