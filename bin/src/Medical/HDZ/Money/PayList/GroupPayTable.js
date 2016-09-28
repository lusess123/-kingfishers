var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Pagination"], function (require, exports, domFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var GroupPayTable;
    (function (GroupPayTable) {
        var GroupPayTableAction = (function (_super) {
            __extends(GroupPayTableAction, _super);
            function GroupPayTableAction() {
                _super.apply(this, arguments);
            }
            return GroupPayTableAction;
        }(domCore.DomAction));
        GroupPayTable.GroupPayTableAction = GroupPayTableAction;
        var GroupPayTableReact = (function (_super) {
            __extends(GroupPayTableReact, _super);
            function GroupPayTableReact() {
                _super.apply(this, arguments);
                this.state = new GroupPayTableStates();
            }
            GroupPayTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager());
            };
            GroupPayTableReact.prototype._initBtnGroup = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-danger"}, "￥缴费"), React.createElement("a", {className: "btn btn-sm btn-secondary"}, "团体退款"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("a", {className: "btn btn-primary-outline"}, "删除")));
            };
            GroupPayTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "批次"), React.createElement("th", null, "体检时间"), React.createElement("th", null, "缴费时间"), React.createElement("th", {className: "text-right"}, "缴费金额（元）"), React.createElement("th", null, "单位"), React.createElement("th", null, "体检状态"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "第4000次"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "300"), React.createElement("td", null, "浙江省杭州市信使网络科技有限公司"), React.createElement("td", null, React.createElement("span", {className: "label label-default"}, "已完成")), React.createElement("td", null, React.createElement("span", {className: "label label-warning"}, "待缴费"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "第252次"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "500"), React.createElement("td", null, "浙江省杭州市信使网络科技有限公司"), React.createElement("td", null, React.createElement("span", {className: "label label-danger"}, "未完成")), React.createElement("td", null, React.createElement("span", {className: "label label-default"}, "未缴费"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null))));
            };
            GroupPayTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            GroupPayTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupPayTableReact;
        }(domCore.DomReact));
        GroupPayTable.GroupPayTableReact = GroupPayTableReact;
        var GroupPayTableVm = (function (_super) {
            __extends(GroupPayTableVm, _super);
            function GroupPayTableVm(config) {
                _super.call(this);
                this.ReactType = GroupPayTableReact;
            }
            return GroupPayTableVm;
        }(domCore.DomVm));
        GroupPayTable.GroupPayTableVm = GroupPayTableVm;
        var GroupPayTableStates = (function (_super) {
            __extends(GroupPayTableStates, _super);
            function GroupPayTableStates() {
                _super.apply(this, arguments);
            }
            return GroupPayTableStates;
        }(domCore.DomStates));
        GroupPayTable.GroupPayTableStates = GroupPayTableStates;
        var GroupPayTableProps = (function (_super) {
            __extends(GroupPayTableProps, _super);
            function GroupPayTableProps() {
                _super.apply(this, arguments);
            }
            return GroupPayTableProps;
        }(domCore.DomProps));
        GroupPayTable.GroupPayTableProps = GroupPayTableProps;
    })(GroupPayTable = exports.GroupPayTable || (exports.GroupPayTable = {}));
});
