var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./ReportDeptMaintanceGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReportDeptMaintanceGridFormDom;
    (function (ReportDeptMaintanceGridFormDom) {
        var ReportDeptMaintanceGridFormDomAction = (function (_super) {
            __extends(ReportDeptMaintanceGridFormDomAction, _super);
            function ReportDeptMaintanceGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridFormDomAction;
        }(domCore.DomAction));
        ReportDeptMaintanceGridFormDom.ReportDeptMaintanceGridFormDomAction = ReportDeptMaintanceGridFormDomAction;
        var ReportDeptMaintanceGridFormDomReact = (function (_super) {
            __extends(ReportDeptMaintanceGridFormDomReact, _super);
            function ReportDeptMaintanceGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReportDeptMaintanceGridFormDomStates();
            }
            ReportDeptMaintanceGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ReportDeptMaintanceGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ReportDeptMaintanceGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            ReportDeptMaintanceGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            ReportDeptMaintanceGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ReportDeptMaintanceGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ReportDeptMaintanceGridFormDomReact;
        }(domCore.DomReact));
        ReportDeptMaintanceGridFormDom.ReportDeptMaintanceGridFormDomReact = ReportDeptMaintanceGridFormDomReact;
        var ReportDeptMaintanceGridFormDomVm = (function (_super) {
            __extends(ReportDeptMaintanceGridFormDomVm, _super);
            function ReportDeptMaintanceGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReportDeptMaintanceGridFormDomReact;
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
                        var rowVm = new gridRowFile.ReportDeptMaintanceGridRowDom.ReportDeptMaintanceGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ReportDeptMaintanceGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ReportDeptMaintanceGridFormDomVm;
        }(domCore.DomVm));
        ReportDeptMaintanceGridFormDom.ReportDeptMaintanceGridFormDomVm = ReportDeptMaintanceGridFormDomVm;
        var ReportDeptMaintanceGridFormDomStates = (function (_super) {
            __extends(ReportDeptMaintanceGridFormDomStates, _super);
            function ReportDeptMaintanceGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridFormDomStates;
        }(domCore.DomStates));
        ReportDeptMaintanceGridFormDom.ReportDeptMaintanceGridFormDomStates = ReportDeptMaintanceGridFormDomStates;
        var ReportDeptMaintanceGridFormDomProps = (function (_super) {
            __extends(ReportDeptMaintanceGridFormDomProps, _super);
            function ReportDeptMaintanceGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReportDeptMaintanceGridFormDomProps;
        }(domCore.DomProps));
        ReportDeptMaintanceGridFormDom.ReportDeptMaintanceGridFormDomProps = ReportDeptMaintanceGridFormDomProps;
    })(ReportDeptMaintanceGridFormDom = exports.ReportDeptMaintanceGridFormDom || (exports.ReportDeptMaintanceGridFormDom = {}));
});
