var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../05tool/Pagination"], function (require, exports, domFile, React, pagination) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalMTable;
    (function (PersonalMTable) {
        var PersonalMTableAction = (function (_super) {
            __extends(PersonalMTableAction, _super);
            function PersonalMTableAction() {
                _super.apply(this, arguments);
            }
            return PersonalMTableAction;
        }(domCore.DomAction));
        PersonalMTable.PersonalMTableAction = PersonalMTableAction;
        var PersonalMTableReact = (function (_super) {
            __extends(PersonalMTableReact, _super);
            function PersonalMTableReact() {
                _super.apply(this, arguments);
                this.state = new PersonalMTableStates();
            }
            PersonalMTableReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "table-responsive"}, this._initTable()), this._initPager());
            };
            PersonalMTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", null, React.createElement("i", {className: "fa fa-square-o"})), React.createElement("th", null, "分组名称"), React.createElement("th", null, "年龄区间"), React.createElement("th", null, "性别"), React.createElement("th", null, "婚姻状况"), React.createElement("th", null, "职务条件"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", null, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……"), React.createElement("td", null, React.createElement("a", {className: "btn btn-primary-outline"}, "修改"), React.createElement("a", {className: "btn btn-danger-outline"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "2")), React.createElement("td", null, "阿骨打-完颜洪烈"), React.createElement("td", null, "331002199510135210"), React.createElement("td", null, "2016/09/21"), React.createElement("td", null, "2B喉科全家福套餐"), React.createElement("td", null, "生化五项检查，心，肝，胆，胃，甲状腺，颈动脉粥样硬化，骨质疏松以及癌症筛查……"), React.createElement("td", null, "2B喉科全家福套餐")), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null)), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null), React.createElement("td", null))));
            };
            PersonalMTableReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            PersonalMTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalMTableReact;
        }(domCore.DomReact));
        PersonalMTable.PersonalMTableReact = PersonalMTableReact;
        var PersonalMTableVm = (function (_super) {
            __extends(PersonalMTableVm, _super);
            function PersonalMTableVm(config) {
                _super.call(this);
                this.ReactType = PersonalMTableReact;
            }
            return PersonalMTableVm;
        }(domCore.DomVm));
        PersonalMTable.PersonalMTableVm = PersonalMTableVm;
        var PersonalMTableStates = (function (_super) {
            __extends(PersonalMTableStates, _super);
            function PersonalMTableStates() {
                _super.apply(this, arguments);
            }
            return PersonalMTableStates;
        }(domCore.DomStates));
        PersonalMTable.PersonalMTableStates = PersonalMTableStates;
        var PersonalMTableProps = (function (_super) {
            __extends(PersonalMTableProps, _super);
            function PersonalMTableProps() {
                _super.apply(this, arguments);
            }
            return PersonalMTableProps;
        }(domCore.DomProps));
        PersonalMTable.PersonalMTableProps = PersonalMTableProps;
    })(PersonalMTable = exports.PersonalMTable || (exports.PersonalMTable = {}));
});
