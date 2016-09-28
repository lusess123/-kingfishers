var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./MemberGridRowDow", "./MemberRowButtonDow", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, rowButtonFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var MemberGridFromDow;
    (function (MemberGridFromDow) {
        var MemberGridFromDowAction = (function (_super) {
            __extends(MemberGridFromDowAction, _super);
            function MemberGridFromDowAction() {
                _super.apply(this, arguments);
            }
            return MemberGridFromDowAction;
        }(domCore.DomAction));
        MemberGridFromDow.MemberGridFromDowAction = MemberGridFromDowAction;
        var MemberGridFromDowReact = (function (_super) {
            __extends(MemberGridFromDowReact, _super);
            function MemberGridFromDowReact() {
                _super.apply(this, arguments);
                this.state = new MemberGridFromDowStates();
            }
            MemberGridFromDowReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-hover"}, theader, tbody);
                return React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            MemberGridFromDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            MemberGridFromDowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            MemberGridFromDowReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll acsTextC acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "档案编码")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "单位ID")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "姓名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(100)}, React.createElement("span", null, "性别")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "出生日期")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "年龄")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "婚姻状况")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "民族")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "籍贯")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "身份证号")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "工作单位")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "职务")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "职称")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "类型")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "联系地址")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "联系电话")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "既往病史")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "家族病史")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "体检次数")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "备注")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "最后编辑时间")));
            };
            ;
            MemberGridFromDowReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return [row.intoDom(), _this.props.Vm.RowButtonList[index].intoDom()];
                }));
            };
            ;
            MemberGridFromDowReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return MemberGridFromDowReact;
        }(domCore.DomReact));
        MemberGridFromDow.MemberGridFromDowReact = MemberGridFromDowReact;
        var MemberGridFromDowVm = (function (_super) {
            __extends(MemberGridFromDowVm, _super);
            function MemberGridFromDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MemberGridFromDowReact;
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
                        var rowVm = new gridRowFile.MemberGridRowDow.MemberGridRowDowVm(rowConfig);
                        _this.RowList.push(rowVm);
                        var rowBtnConfig = { Row: rowVm, UniId: config.UniId };
                        var rowBtnVm = new rowButtonFile.MemberRowButtonDow.MemberRowButtonDowVm(rowBtnConfig);
                        _this.RowButtonList.push(rowBtnVm);
                    });
                }
            }
            MemberGridFromDowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return MemberGridFromDowVm;
        }(domCore.DomVm));
        MemberGridFromDow.MemberGridFromDowVm = MemberGridFromDowVm;
        var MemberGridFromDowStates = (function (_super) {
            __extends(MemberGridFromDowStates, _super);
            function MemberGridFromDowStates() {
                _super.apply(this, arguments);
            }
            return MemberGridFromDowStates;
        }(domCore.DomStates));
        MemberGridFromDow.MemberGridFromDowStates = MemberGridFromDowStates;
        var MemberGridFromDowProps = (function (_super) {
            __extends(MemberGridFromDowProps, _super);
            function MemberGridFromDowProps() {
                _super.apply(this, arguments);
            }
            return MemberGridFromDowProps;
        }(domCore.DomProps));
        MemberGridFromDow.MemberGridFromDowProps = MemberGridFromDowProps;
    })(MemberGridFromDow = exports.MemberGridFromDow || (exports.MemberGridFromDow = {}));
});
