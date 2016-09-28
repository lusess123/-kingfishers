var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./ReliefmonthGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ReliefmonthGridFormDom;
    (function (ReliefmonthGridFormDom) {
        var ReliefmonthGridFormDomAction = (function (_super) {
            __extends(ReliefmonthGridFormDomAction, _super);
            function ReliefmonthGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridFormDomAction;
        }(domCore.DomAction));
        ReliefmonthGridFormDom.ReliefmonthGridFormDomAction = ReliefmonthGridFormDomAction;
        var ReliefmonthGridFormDomReact = (function (_super) {
            __extends(ReliefmonthGridFormDomReact, _super);
            function ReliefmonthGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new ReliefmonthGridFormDomStates();
            }
            ReliefmonthGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            ReliefmonthGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            ReliefmonthGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            ReliefmonthGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            ReliefmonthGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ReliefmonthGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return ReliefmonthGridFormDomReact;
        }(domCore.DomReact));
        ReliefmonthGridFormDom.ReliefmonthGridFormDomReact = ReliefmonthGridFormDomReact;
        var ReliefmonthGridFormDomVm = (function (_super) {
            __extends(ReliefmonthGridFormDomVm, _super);
            function ReliefmonthGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ReliefmonthGridFormDomReact;
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
                        var rowVm = new gridRowFile.ReliefmonthGridRowDom.ReliefmonthGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            ReliefmonthGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return ReliefmonthGridFormDomVm;
        }(domCore.DomVm));
        ReliefmonthGridFormDom.ReliefmonthGridFormDomVm = ReliefmonthGridFormDomVm;
        var ReliefmonthGridFormDomStates = (function (_super) {
            __extends(ReliefmonthGridFormDomStates, _super);
            function ReliefmonthGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridFormDomStates;
        }(domCore.DomStates));
        ReliefmonthGridFormDom.ReliefmonthGridFormDomStates = ReliefmonthGridFormDomStates;
        var ReliefmonthGridFormDomProps = (function (_super) {
            __extends(ReliefmonthGridFormDomProps, _super);
            function ReliefmonthGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return ReliefmonthGridFormDomProps;
        }(domCore.DomProps));
        ReliefmonthGridFormDom.ReliefmonthGridFormDomProps = ReliefmonthGridFormDomProps;
    })(ReliefmonthGridFormDom = exports.ReliefmonthGridFormDom || (exports.ReliefmonthGridFormDom = {}));
});
