var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../09Web/dom/ThDom", "./../../../../02col/02Mulite/SingleCheckBox", "./UserGridRowDom", "./UserRowButtonDom"], function (require, exports, React, domFile, thFile, singleCheckFile, gridRowFile, rowButtonFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var UserGridFormDom;
    (function (UserGridFormDom) {
        var UserGridFormDomAction = (function (_super) {
            __extends(UserGridFormDomAction, _super);
            function UserGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return UserGridFormDomAction;
        }(domCore.DomAction));
        UserGridFormDom.UserGridFormDomAction = UserGridFormDomAction;
        var UserGridFormDomReact = (function (_super) {
            __extends(UserGridFormDomReact, _super);
            function UserGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new UserGridFormDomStates();
            }
            UserGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            UserGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            UserGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5" + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th" : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "简码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "类别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "职称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            UserGridFormDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            UserGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            UserGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserGridFormDomReact;
        }(domCore.DomReact));
        UserGridFormDom.UserGridFormDomReact = UserGridFormDomReact;
        var UserGridFormDomVm = (function (_super) {
            __extends(UserGridFormDomVm, _super);
            function UserGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UserGridFormDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.FormData = new Array();
                this.RowList = new Array();
                this.RowButtonList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber };
                        var rowVm = new gridRowFile.UserGridRowDom.UserGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.UserRowButtonDom.UserRowButtonDomVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            ;
            UserGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return UserGridFormDomVm;
        }(domCore.DomVm));
        UserGridFormDom.UserGridFormDomVm = UserGridFormDomVm;
        var UserGridFormDomStates = (function (_super) {
            __extends(UserGridFormDomStates, _super);
            function UserGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return UserGridFormDomStates;
        }(domCore.DomStates));
        UserGridFormDom.UserGridFormDomStates = UserGridFormDomStates;
        var UserGridFormDomProps = (function (_super) {
            __extends(UserGridFormDomProps, _super);
            function UserGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return UserGridFormDomProps;
        }(domCore.DomProps));
        UserGridFormDom.UserGridFormDomProps = UserGridFormDomProps;
    })(UserGridFormDom = exports.UserGridFormDom || (exports.UserGridFormDom = {}));
});
