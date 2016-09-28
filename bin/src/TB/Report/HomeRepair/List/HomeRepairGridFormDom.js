var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./HomeRepairGridRowDom", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, React, domFile, thFile, gridRowFile, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var HomeRepairGridFormDom;
    (function (HomeRepairGridFormDom) {
        var HomeRepairGridFormDomAction = (function (_super) {
            __extends(HomeRepairGridFormDomAction, _super);
            function HomeRepairGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridFormDomAction;
        }(domCore.DomAction));
        HomeRepairGridFormDom.HomeRepairGridFormDomAction = HomeRepairGridFormDomAction;
        var HomeRepairGridFormDomReact = (function (_super) {
            __extends(HomeRepairGridFormDomReact, _super);
            function HomeRepairGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new HomeRepairGridFormDomStates();
            }
            HomeRepairGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            HomeRepairGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            HomeRepairGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, this.props.Vm.ColList.map(function (col) {
                    return React.createElement("th", null, React.createElement("span", null, col));
                }));
            };
            ;
            HomeRepairGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            //private initHeader2(row?:any): React.ReactElement<any> 
            //{
            //    return 
            //}
            HomeRepairGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            HomeRepairGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return HomeRepairGridFormDomReact;
        }(domCore.DomReact));
        HomeRepairGridFormDom.HomeRepairGridFormDomReact = HomeRepairGridFormDomReact;
        var HomeRepairGridFormDomVm = (function (_super) {
            __extends(HomeRepairGridFormDomVm, _super);
            function HomeRepairGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = HomeRepairGridFormDomReact;
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
                        var rowVm = new gridRowFile.HomeRepairGridRowDom.HomeRepairGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            HomeRepairGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return HomeRepairGridFormDomVm;
        }(domCore.DomVm));
        HomeRepairGridFormDom.HomeRepairGridFormDomVm = HomeRepairGridFormDomVm;
        var HomeRepairGridFormDomStates = (function (_super) {
            __extends(HomeRepairGridFormDomStates, _super);
            function HomeRepairGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridFormDomStates;
        }(domCore.DomStates));
        HomeRepairGridFormDom.HomeRepairGridFormDomStates = HomeRepairGridFormDomStates;
        var HomeRepairGridFormDomProps = (function (_super) {
            __extends(HomeRepairGridFormDomProps, _super);
            function HomeRepairGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return HomeRepairGridFormDomProps;
        }(domCore.DomProps));
        HomeRepairGridFormDom.HomeRepairGridFormDomProps = HomeRepairGridFormDomProps;
    })(HomeRepairGridFormDom = exports.HomeRepairGridFormDom || (exports.HomeRepairGridFormDom = {}));
});
