var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom"], function (require, exports, domFile, React, thFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalItemDetailDom;
    (function (AppraisalItemDetailDom) {
        var AppraisalItemDetailDomAction = (function (_super) {
            __extends(AppraisalItemDetailDomAction, _super);
            function AppraisalItemDetailDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDetailDomAction;
        }(domCore.DomAction));
        AppraisalItemDetailDom.AppraisalItemDetailDomAction = AppraisalItemDetailDomAction;
        var AppraisalItemDetailDomReact = (function (_super) {
            __extends(AppraisalItemDetailDomReact, _super);
            function AppraisalItemDetailDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemDetailDomStates();
            }
            AppraisalItemDetailDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("p", null, "已选项目："), this._initTable());
            };
            AppraisalItemDetailDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            AppraisalItemDetailDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            AppraisalItemDetailDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "项目分类"), React.createElement("th", null, "项目名称"), React.createElement("th", null, "分值"), React.createElement("th", null, "最大分值"));
            };
            ;
            AppraisalItemDetailDomReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row) {
                    return React.createElement("tr", null, React.createElement("td", null, row.CategoryName), React.createElement("td", null, row.Name), React.createElement("td", null, row.ObjectValue), React.createElement("td", null, row.MaxValue));
                }));
            };
            ;
            AppraisalItemDetailDomReact.prototype.deleteItem = function (id) {
                this.props.Vm.RowList = this.props.Vm.RowList.filter(function (row) {
                    return row.FID != id;
                });
                this.props.Vm.CalculateTotalScore();
                this.forceUpdate();
            };
            AppraisalItemDetailDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            AppraisalItemDetailDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalItemDetailDomReact;
        }(domCore.DomReact));
        AppraisalItemDetailDom.AppraisalItemDetailDomReact = AppraisalItemDetailDomReact;
        var AppraisalItemDetailDomVm = (function (_super) {
            __extends(AppraisalItemDetailDomVm, _super);
            function AppraisalItemDetailDomVm(config) {
                _super.call(this);
                this.ReactType = AppraisalItemDetailDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.RowList = [];
                this.TotalScore = "0";
                this.IsLoaded = false;
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.RowList) {
                        this.RowList = config.RowList;
                        this.CalculateTotalScore();
                    }
                }
            }
            AppraisalItemDetailDomVm.prototype.CalculateTotalScore = function () {
                var totalScore = 0;
                this.RowList.forEach(function (a) {
                    totalScore += parseFloat(a.MaxValue);
                });
                this.TotalScore = totalScore.toString();
            };
            AppraisalItemDetailDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            AppraisalItemDetailDomVm.prototype.getData = function () {
                var idList = [];
                this.RowList.forEach(function (a) {
                    idList.push(a.FID);
                });
                return idList;
            };
            return AppraisalItemDetailDomVm;
        }(domCore.DomVm));
        AppraisalItemDetailDom.AppraisalItemDetailDomVm = AppraisalItemDetailDomVm;
        var AppraisalItemDetailDomStates = (function (_super) {
            __extends(AppraisalItemDetailDomStates, _super);
            function AppraisalItemDetailDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDetailDomStates;
        }(domCore.DomStates));
        AppraisalItemDetailDom.AppraisalItemDetailDomStates = AppraisalItemDetailDomStates;
        var AppraisalItemDetailDomProps = (function (_super) {
            __extends(AppraisalItemDetailDomProps, _super);
            function AppraisalItemDetailDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDetailDomProps;
        }(domCore.DomProps));
        AppraisalItemDetailDom.AppraisalItemDetailDomProps = AppraisalItemDetailDomProps;
    })(AppraisalItemDetailDom = exports.AppraisalItemDetailDom || (exports.AppraisalItemDetailDom = {}));
});
