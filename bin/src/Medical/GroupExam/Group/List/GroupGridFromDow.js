var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./GroupGridRowDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupGridFromDow;
    (function (GroupGridFromDow) {
        var GroupGridFromDowAction = (function (_super) {
            __extends(GroupGridFromDowAction, _super);
            function GroupGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return GroupGridFromDowAction;
        }(domCore.DomAction));
        GroupGridFromDow.GroupGridFromDowAction = GroupGridFromDowAction;
        var GroupGridFromDowReact = (function (_super) {
            __extends(GroupGridFromDowReact, _super);
            function GroupGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new GroupGridFromDowStates();
            }
            GroupGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            GroupGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            GroupGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            GroupGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "单位名称"), React.createElement("th", null, "批次"), React.createElement("th", null, "员工姓名"), React.createElement("th", null, "员工性别"), React.createElement("th", null, "联系方式"), React.createElement("th", null, "体检状态"));
            };
            ;
            GroupGridFromDowReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            GroupGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return GroupGridFromDowReact;
        }(domCore.DomReact));
        GroupGridFromDow.GroupGridFromDowReact = GroupGridFromDowReact;
        var GroupGridFromDowVm = (function (_super) {
            __extends(GroupGridFromDowVm, _super);
            function GroupGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupGridFromDowReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.FormData = new Array();
                this.RowList = [];
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.GroupGridRowDow.GroupGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        //var rowBtnConfig = { Row: rowVm, UniId: config.UniId }
                        //var rowBtnVm = new rowButtonFile.GroupRowButtonDow.GroupRowButtonDowVm(rowBtnConfig);
                        //this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            GroupGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return GroupGridFromDowVm;
        }(domCore.DomVm));
        GroupGridFromDow.GroupGridFromDowVm = GroupGridFromDowVm;
        var GroupGridFromDowStates = (function (_super) {
            __extends(GroupGridFromDowStates, _super);
            function GroupGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return GroupGridFromDowStates;
        }(domCore.DomStates));
        GroupGridFromDow.GroupGridFromDowStates = GroupGridFromDowStates;
        var GroupGridFromDowProps = (function (_super) {
            __extends(GroupGridFromDowProps, _super);
            function GroupGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return GroupGridFromDowProps;
        }(domCore.DomProps));
        GroupGridFromDow.GroupGridFromDowProps = GroupGridFromDowProps;
    })(GroupGridFromDow = exports.GroupGridFromDow || (exports.GroupGridFromDow = {}));
});
