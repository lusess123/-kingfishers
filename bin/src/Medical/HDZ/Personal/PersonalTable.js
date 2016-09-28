var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../05tool/Pagination"], function (require, exports, domFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalTable;
    (function (PersonalTable) {
        var PersonalTableAction = (function (_super) {
            __extends(PersonalTableAction, _super);
            function PersonalTableAction() {
                _super.apply(this, arguments);
            }
            return PersonalTableAction;
        }(domCore.DomAction));
        PersonalTable.PersonalTableAction = PersonalTableAction;
        var PersonalTableReact = (function (_super) {
            __extends(PersonalTableReact, _super);
            function PersonalTableReact() {
                _super.apply(this, arguments);
                this.state = new PersonalTableStates();
            }
            PersonalTableReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager());
            };
            PersonalTableReact.prototype._initBtnGroup = function () {
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-primary"}, "登记"), React.createElement("div", {className: "btn-group btn-group-sm"}, React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "删除"), React.createElement("button", {type: "button", className: "btn btn-primary-outline"}, "编辑")));
            };
            PersonalTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "预约人"), React.createElement("th", null, "身份证"), React.createElement("th", null, "来检时间"), React.createElement("th", null, "预约套餐"), React.createElement("th", null, "预约项目"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", null, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "2")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", null, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null))));
            };
            PersonalTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            PersonalTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalTableReact;
        }(domCore.DomReact));
        PersonalTable.PersonalTableReact = PersonalTableReact;
        var PersonalTableVm = (function (_super) {
            __extends(PersonalTableVm, _super);
            function PersonalTableVm(config) {
                _super.call(this);
                this.ReactType = PersonalTableReact;
            }
            return PersonalTableVm;
        }(domCore.DomVm));
        PersonalTable.PersonalTableVm = PersonalTableVm;
        var PersonalTableStates = (function (_super) {
            __extends(PersonalTableStates, _super);
            function PersonalTableStates() {
                _super.apply(this, arguments);
            }
            return PersonalTableStates;
        }(domCore.DomStates));
        PersonalTable.PersonalTableStates = PersonalTableStates;
        var PersonalTableProps = (function (_super) {
            __extends(PersonalTableProps, _super);
            function PersonalTableProps() {
                _super.apply(this, arguments);
            }
            return PersonalTableProps;
        }(domCore.DomProps));
        PersonalTable.PersonalTableProps = PersonalTableProps;
    })(PersonalTable = exports.PersonalTable || (exports.PersonalTable = {}));
});
