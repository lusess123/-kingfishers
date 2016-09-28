var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./ReportElectricalMaintanceGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportElectricalMaintanceGridFormDom;
    (function (ReportElectricalMaintanceGridFormDom) {
        var ReportElectricalMaintanceGridFormDomAction = (function (_super) {
            __extends(ReportElectricalMaintanceGridFormDomAction, _super);
            function ReportElectricalMaintanceGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridFormDomAction;
        }(domCore.DomAction));
        ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomAction = ReportElectricalMaintanceGridFormDomAction;
        var ReportElectricalMaintanceGridFormDomReact = (function (_super) {
            __extends(ReportElectricalMaintanceGridFormDomReact, _super);
            function ReportElectricalMaintanceGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportElectricalMaintanceGridFormDomStates();
            }
            ReportElectricalMaintanceGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ReportElectricalMaintanceGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ReportElectricalMaintanceGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            ReportElectricalMaintanceGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            ReportElectricalMaintanceGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ReportElectricalMaintanceGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ReportElectricalMaintanceGridFormDomReact;
        }(domCore.DomReact));
        ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomReact = ReportElectricalMaintanceGridFormDomReact;
        var ReportElectricalMaintanceGridFormDomVm = (function (_super) {
            __extends(ReportElectricalMaintanceGridFormDomVm, _super);
            function ReportElectricalMaintanceGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportElectricalMaintanceGridFormDomReact;
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
                        var rowVm = new gridRowFile.ReportElectricalMaintanceGridRowDom.ReportElectricalMaintanceGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ReportElectricalMaintanceGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ReportElectricalMaintanceGridFormDomVm;
        }(domCore.DomVm));
        ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomVm = ReportElectricalMaintanceGridFormDomVm;
        var ReportElectricalMaintanceGridFormDomStates = (function (_super) {
            __extends(ReportElectricalMaintanceGridFormDomStates, _super);
            function ReportElectricalMaintanceGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridFormDomStates;
        }(domCore.DomStates));
        ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomStates = ReportElectricalMaintanceGridFormDomStates;
        var ReportElectricalMaintanceGridFormDomProps = (function (_super) {
            __extends(ReportElectricalMaintanceGridFormDomProps, _super);
            function ReportElectricalMaintanceGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportElectricalMaintanceGridFormDomProps;
        }(domCore.DomProps));
        ReportElectricalMaintanceGridFormDom.ReportElectricalMaintanceGridFormDomProps = ReportElectricalMaintanceGridFormDomProps;
    })(ReportElectricalMaintanceGridFormDom = exports.ReportElectricalMaintanceGridFormDom || (exports.ReportElectricalMaintanceGridFormDom = {}));
});
