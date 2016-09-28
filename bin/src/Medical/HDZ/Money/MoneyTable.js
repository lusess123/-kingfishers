var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Pagination"], function (require, exports, domFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var MoneyTable;
    (function (MoneyTable) {
        var MoneyTableAction = (function (_super) {
            __extends(MoneyTableAction, _super);
            function MoneyTableAction() {
                _super.apply(this, arguments);
            }
            return MoneyTableAction;
        }(domCore.DomAction));
        MoneyTable.MoneyTableAction = MoneyTableAction;
        var MoneyTableReact = (function (_super) {
            __extends(MoneyTableReact, _super);
            function MoneyTableReact() {
                _super.apply(this, arguments);
                this.state = new MoneyTableStates();
            }
            MoneyTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "YSm-table-title"}, React.createElement("i", {className: "fa fa-star Hs-red"}), React.createElement("b", null, "缴费号：123456789")), this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager(), this._initNote(), this._initBottom());
            };
            MoneyTableReact.prototype._initBtnGroup = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("span", {className: "YSu-name"}, "收费项目明细"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "退项"), React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "取消")));
            };
            MoneyTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "体检项目"), React.createElement("th", null, "价格"), React.createElement("th", null, "折扣"), React.createElement("th", {className: "text-right"}, "最终价格"), React.createElement("th", null, "状态"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "2")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", {className: "text-right"}, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", {className: "text-right"}), React.createElement("td", null))));
            };
            MoneyTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            MoneyTableReact.prototype._initNote = function () {
                return React.createElement("div", {className: "YSm-bill"}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "form-control-label pull-left"}, "是否需要发票："), React.createElement("div", {className: "form-control-label pull-left"}, React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: ""}), "是")), React.createElement("div", {className: "radio pull-left"}, React.createElement("label", null, React.createElement("input", {type: "radio", value: ""}), "否")))), React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票金额："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票类型："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票号："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {type: "text", className: "form-control"}))), React.createElement("div", {className: "col-lg-3 col-md-3 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "发票抬头："), React.createElement("div", {className: "col-md-7 col-sm-9"}, React.createElement("input", {type: "text", className: "form-control"})))));
            };
            MoneyTableReact.prototype._initBottom = function () {
                return React.createElement("div", {className: "YSm-fixed-bottom clearfix"}, React.createElement("div", {className: "pull-left"}, React.createElement("span", null, "收费金额", React.createElement("b", null, "89"), "元，缴纳费用 ", React.createElement("b", null, "100"), "元，应找零", React.createElement("b", null, "11"), "元")), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-danger"}, "确认收费")));
            };
            MoneyTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MoneyTableReact;
        }(domCore.DomReact));
        MoneyTable.MoneyTableReact = MoneyTableReact;
        var MoneyTableVm = (function (_super) {
            __extends(MoneyTableVm, _super);
            function MoneyTableVm(config) {
                _super.call(this);
                this.ReactType = MoneyTableReact;
                //  alert(123);
            }
            return MoneyTableVm;
        }(domCore.DomVm));
        MoneyTable.MoneyTableVm = MoneyTableVm;
        var MoneyTableStates = (function (_super) {
            __extends(MoneyTableStates, _super);
            function MoneyTableStates() {
                _super.apply(this, arguments);
            }
            return MoneyTableStates;
        }(domCore.DomStates));
        MoneyTable.MoneyTableStates = MoneyTableStates;
        var MoneyTableProps = (function (_super) {
            __extends(MoneyTableProps, _super);
            function MoneyTableProps() {
                _super.apply(this, arguments);
            }
            return MoneyTableProps;
        }(domCore.DomProps));
        MoneyTable.MoneyTableProps = MoneyTableProps;
    })(MoneyTable = exports.MoneyTable || (exports.MoneyTable = {}));
});
