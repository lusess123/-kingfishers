var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Pagination"], function (require, exports, domFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalPayTable;
    (function (PersonalPayTable) {
        var PersonalPayTableAction = (function (_super) {
            __extends(PersonalPayTableAction, _super);
            function PersonalPayTableAction() {
                _super.apply(this, arguments);
            }
            return PersonalPayTableAction;
        }(domCore.DomAction));
        PersonalPayTable.PersonalPayTableAction = PersonalPayTableAction;
        var PersonalPayTableReact = (function (_super) {
            __extends(PersonalPayTableReact, _super);
            function PersonalPayTableReact() {
                _super.apply(this, arguments);
                this.state = new PersonalPayTableStates();
            }
            PersonalPayTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager());
            };
            PersonalPayTableReact.prototype._initBtnGroup = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-danger"}, "￥缴费"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "删除")));
            };
            PersonalPayTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "体检人"), React.createElement("th", null, "体检时间"), React.createElement("th", null, "缴费时间"), React.createElement("th", {className: "text-right"}, "缴费金额（元）"), React.createElement("th", null, "单位"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "300"), React.createElement("td", null, "浙江省杭州市信使网络科技有限公司"), React.createElement("td", null, React.createElement("span", {className: "label label-warning"}, "待缴费"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "500"), React.createElement("td", null, "浙江省杭州市信使网络科技有限公司"), React.createElement("td", null, React.createElement("span", {className: "label label-default"}, "已缴费"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null), React.createElement("td", null))));
            };
            PersonalPayTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            PersonalPayTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalPayTableReact;
        }(domCore.DomReact));
        PersonalPayTable.PersonalPayTableReact = PersonalPayTableReact;
        var PersonalPayTableVm = (function (_super) {
            __extends(PersonalPayTableVm, _super);
            function PersonalPayTableVm(config) {
                _super.call(this);
                this.ReactType = PersonalPayTableReact;
            }
            return PersonalPayTableVm;
        }(domCore.DomVm));
        PersonalPayTable.PersonalPayTableVm = PersonalPayTableVm;
        var PersonalPayTableStates = (function (_super) {
            __extends(PersonalPayTableStates, _super);
            function PersonalPayTableStates() {
                _super.apply(this, arguments);
            }
            return PersonalPayTableStates;
        }(domCore.DomStates));
        PersonalPayTable.PersonalPayTableStates = PersonalPayTableStates;
        var PersonalPayTableProps = (function (_super) {
            __extends(PersonalPayTableProps, _super);
            function PersonalPayTableProps() {
                _super.apply(this, arguments);
            }
            return PersonalPayTableProps;
        }(domCore.DomProps));
        PersonalPayTable.PersonalPayTableProps = PersonalPayTableProps;
    })(PersonalPayTable = exports.PersonalPayTable || (exports.PersonalPayTable = {}));
});
