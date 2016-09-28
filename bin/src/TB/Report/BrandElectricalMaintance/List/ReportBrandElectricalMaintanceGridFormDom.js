var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./ReportBrandElectricalMaintanceGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportBrandElectricalMaintanceGridFormDom;
    (function (ReportBrandElectricalMaintanceGridFormDom) {
        var ReportBrandElectricalMaintanceGridFormDomAction = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridFormDomAction, _super);
            function ReportBrandElectricalMaintanceGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridFormDomAction;
        }(domCore.DomAction));
        ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomAction = ReportBrandElectricalMaintanceGridFormDomAction;
        var ReportBrandElectricalMaintanceGridFormDomReact = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridFormDomReact, _super);
            function ReportBrandElectricalMaintanceGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportBrandElectricalMaintanceGridFormDomStates();
            }
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ReportBrandElectricalMaintanceGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ReportBrandElectricalMaintanceGridFormDomReact;
        }(domCore.DomReact));
        ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomReact = ReportBrandElectricalMaintanceGridFormDomReact;
        var ReportBrandElectricalMaintanceGridFormDomVm = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridFormDomVm, _super);
            function ReportBrandElectricalMaintanceGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportBrandElectricalMaintanceGridFormDomReact;
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
                        var rowVm = new gridRowFile.ReportBrandElectricalMaintanceGridRowDom.ReportBrandElectricalMaintanceGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ReportBrandElectricalMaintanceGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ReportBrandElectricalMaintanceGridFormDomVm;
        }(domCore.DomVm));
        ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomVm = ReportBrandElectricalMaintanceGridFormDomVm;
        var ReportBrandElectricalMaintanceGridFormDomStates = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridFormDomStates, _super);
            function ReportBrandElectricalMaintanceGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridFormDomStates;
        }(domCore.DomStates));
        ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomStates = ReportBrandElectricalMaintanceGridFormDomStates;
        var ReportBrandElectricalMaintanceGridFormDomProps = (function (_super) {
            __extends(ReportBrandElectricalMaintanceGridFormDomProps, _super);
            function ReportBrandElectricalMaintanceGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportBrandElectricalMaintanceGridFormDomProps;
        }(domCore.DomProps));
        ReportBrandElectricalMaintanceGridFormDom.ReportBrandElectricalMaintanceGridFormDomProps = ReportBrandElectricalMaintanceGridFormDomProps;
    })(ReportBrandElectricalMaintanceGridFormDom = exports.ReportBrandElectricalMaintanceGridFormDom || (exports.ReportBrandElectricalMaintanceGridFormDom = {}));
});
