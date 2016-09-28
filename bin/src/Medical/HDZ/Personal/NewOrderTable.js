var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var NewOrderTable;
    (function (NewOrderTable) {
        var NewOrderTableAction = (function (_super) {
            __extends(NewOrderTableAction, _super);
            function NewOrderTableAction() {
                _super.apply(this, arguments);
            }
            return NewOrderTableAction;
        }(domCore.DomAction));
        NewOrderTable.NewOrderTableAction = NewOrderTableAction;
        var NewOrderTableReact = (function (_super) {
            __extends(NewOrderTableReact, _super);
            function NewOrderTableReact() {
                _super.apply(this, arguments);
                this.state = new NewOrderTableStates();
            }
            NewOrderTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager());
            };
            NewOrderTableReact.prototype._initBtnGroup = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.newOpt("hu"); }}, React.createElement("i", {className: "fa fa-plus"}), "新增"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "删除"), React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "详情"), React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "编辑")));
            };
            NewOrderTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "预约套餐"), React.createElement("th", null, "预约项目"), React.createElement("th", null, "检查科室"), React.createElement("th", null, "说明"), React.createElement("th", null, "价格"), React.createElement("th", null, "折扣"), React.createElement("th", null, "最终价格（元）"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "超实惠全家福体检套餐1200元"), React.createElement("td", null, "心"), React.createElement("td", null, "内科"), React.createElement("td", null), React.createElement("td", null, "500"), React.createElement("td", null, ".58"), React.createElement("td", null, "290"), React.createElement("td", null, "删除")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "2")), React.createElement("td", null, "超实惠全家福体检套餐1200元"), React.createElement("td", null, "心"), React.createElement("td", null, "内科"), React.createElement("td", null), React.createElement("td", null, "500"), React.createElement("td", null, ".58"), React.createElement("td", null, "290"), React.createElement("td", null, "删除")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null))));
            };
            NewOrderTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            NewOrderTableReact.prototype.newOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$winPersonalNewPage$" + vals + "$", true);
            };
            NewOrderTableReact.prototype.detailOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupdetail$" + vals + "$", true);
            };
            NewOrderTableReact.prototype.updateOpt = function (vals) {
                urlFile.Core.AkUrl.Current().openUrl("$wingroupupdate$" + vals + "$", false);
            };
            NewOrderTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewOrderTableReact;
        }(domCore.DomReact));
        NewOrderTable.NewOrderTableReact = NewOrderTableReact;
        var NewOrderTableVm = (function (_super) {
            __extends(NewOrderTableVm, _super);
            function NewOrderTableVm(config) {
                _super.call(this);
                this.ReactType = NewOrderTableReact;
            }
            return NewOrderTableVm;
        }(domCore.DomVm));
        NewOrderTable.NewOrderTableVm = NewOrderTableVm;
        var NewOrderTableStates = (function (_super) {
            __extends(NewOrderTableStates, _super);
            function NewOrderTableStates() {
                _super.apply(this, arguments);
            }
            return NewOrderTableStates;
        }(domCore.DomStates));
        NewOrderTable.NewOrderTableStates = NewOrderTableStates;
        var NewOrderTableProps = (function (_super) {
            __extends(NewOrderTableProps, _super);
            function NewOrderTableProps() {
                _super.apply(this, arguments);
            }
            return NewOrderTableProps;
        }(domCore.DomProps));
        NewOrderTable.NewOrderTableProps = NewOrderTableProps;
    })(NewOrderTable = exports.NewOrderTable || (exports.NewOrderTable = {}));
});
