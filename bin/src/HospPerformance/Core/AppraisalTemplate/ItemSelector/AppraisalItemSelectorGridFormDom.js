var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./AppraisalItemSelectorGridRowDom", "./../../../../09Web/dom/ThDom", "react", "./../../../../02col/02Mulite/SingleCheckBox"], function (require, exports, domFile, gridRowFile, thFile, React, singleCheckFile) {
    "use strict";
    var domCore = domFile.Core;
    var ThDom = thFile.Web.ThDomReact;
    var AppraisalItemSelectorGridFormDom;
    (function (AppraisalItemSelectorGridFormDom) {
        var AppraisalItemSelectorGridFormDomAction = (function (_super) {
            __extends(AppraisalItemSelectorGridFormDomAction, _super);
            function AppraisalItemSelectorGridFormDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorGridFormDomAction;
        }(domCore.DomAction));
        AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomAction = AppraisalItemSelectorGridFormDomAction;
        var AppraisalItemSelectorGridFormDomReact = (function (_super) {
            __extends(AppraisalItemSelectorGridFormDomReact, _super);
            function AppraisalItemSelectorGridFormDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemSelectorGridFormDomStates();
            }
            AppraisalItemSelectorGridFormDomReact.prototype.pSender = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            AppraisalItemSelectorGridFormDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            AppraisalItemSelectorGridFormDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            AppraisalItemSelectorGridFormDomReact.prototype.initHeader = function () {
                return React.createElement("tr", {className: "ACT-HEADER MEMBER"}, React.createElement("th", {className: "thCheckAll text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", {className: "hide"}, React.createElement("span", null, "主键")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(200)}, React.createElement("span", null, "分类名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "项目名")), React.createElement(ThDom, {children: null, Vm: this.getThDomVM(150)}, React.createElement("span", null, "目标值")), React.createElement(ThDom, {children: null, Vm: new thFile.Web.ThDomVm()}, React.createElement("span", null, "最大值")));
            };
            ;
            AppraisalItemSelectorGridFormDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                }));
            };
            ;
            AppraisalItemSelectorGridFormDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return AppraisalItemSelectorGridFormDomReact;
        }(domCore.DomReact));
        AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomReact = AppraisalItemSelectorGridFormDomReact;
        var AppraisalItemSelectorGridFormDomVm = (function (_super) {
            __extends(AppraisalItemSelectorGridFormDomVm, _super);
            function AppraisalItemSelectorGridFormDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppraisalItemSelectorGridFormDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.CheckBoxList = new Array();
                this.FormData = new Array();
                this.RowList = new Array();
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                if (config && config.Data) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    this.FormData = config.Data;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index < 9 ? "0" + (index + 1) : (index + 1).toString();
                        var rowConfig = {
                            RowData: rowData,
                            IsAcsRelative: _this.IsAcsRelative,
                            LeftNum: _this.LeftNum,
                            RowNumber: rowNumber,
                            IsMultiSelect: config.IsMultiSelect,
                            UniId: _this.UniId
                        };
                        var rowVm = new gridRowFile.AppraisalItemSelectorGridRowDom.AppraisalItemSelectorGridRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                }
            }
            AppraisalItemSelectorGridFormDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return AppraisalItemSelectorGridFormDomVm;
        }(domCore.DomVm));
        AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomVm = AppraisalItemSelectorGridFormDomVm;
        var AppraisalItemSelectorGridFormDomStates = (function (_super) {
            __extends(AppraisalItemSelectorGridFormDomStates, _super);
            function AppraisalItemSelectorGridFormDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorGridFormDomStates;
        }(domCore.DomStates));
        AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomStates = AppraisalItemSelectorGridFormDomStates;
        var AppraisalItemSelectorGridFormDomProps = (function (_super) {
            __extends(AppraisalItemSelectorGridFormDomProps, _super);
            function AppraisalItemSelectorGridFormDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemSelectorGridFormDomProps;
        }(domCore.DomProps));
        AppraisalItemSelectorGridFormDom.AppraisalItemSelectorGridFormDomProps = AppraisalItemSelectorGridFormDomProps;
    })(AppraisalItemSelectorGridFormDom = exports.AppraisalItemSelectorGridFormDom || (exports.AppraisalItemSelectorGridFormDom = {}));
});
