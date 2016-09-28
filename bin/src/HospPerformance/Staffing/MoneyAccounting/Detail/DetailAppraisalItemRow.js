var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./DetailAppraisalUserItemRow"], function (require, exports, domFile, React, DetailAppraisalUserItemRow) {
    "use strict";
    var domCore = domFile.Core;
    var DetailAppraisalItemRow;
    (function (DetailAppraisalItemRow) {
        var DetailAppraisalItemRowAction = (function (_super) {
            __extends(DetailAppraisalItemRowAction, _super);
            function DetailAppraisalItemRowAction() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalItemRowAction;
        }(domCore.DomAction));
        DetailAppraisalItemRow.DetailAppraisalItemRowAction = DetailAppraisalItemRowAction;
        var DetailAppraisalItemRowReact = (function (_super) {
            __extends(DetailAppraisalItemRowReact, _super);
            function DetailAppraisalItemRowReact() {
                _super.apply(this, arguments);
                this.state = new DetailAppraisalItemRowStates();
            }
            DetailAppraisalItemRowReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initTable());
            };
            DetailAppraisalItemRowReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "姓名"), this.props.Vm.AppraisalItemValue.map(function (r) {
                    return React.createElement("th", null, r.Name);
                }), React.createElement("th", null, "综合"));
            };
            ;
            DetailAppraisalItemRowReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.AppraisalRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            DetailAppraisalItemRowReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, React.createElement("p", null, "考核项目：", this.props.Vm.AppraisalItem.AppraisalTitle), this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            DetailAppraisalItemRowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            DetailAppraisalItemRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailAppraisalItemRowReact;
        }(domCore.DomReact));
        DetailAppraisalItemRow.DetailAppraisalItemRowReact = DetailAppraisalItemRowReact;
        var DetailAppraisalItemRowVm = (function (_super) {
            __extends(DetailAppraisalItemRowVm, _super);
            function DetailAppraisalItemRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetailAppraisalItemRowReact;
                this.AppraisalItemValue = [];
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.AppraisalRowList = [];
                if (config) {
                    this.AppraisalItem = config.DataValue;
                    this.UniId = config.Unid;
                    this.UserData = config.UserData;
                    this.UserData.map(function (u) {
                        _this.AppraisalItem.AppraisalItemValue.map(function (b) {
                            if (u.UserId == b.UserId && _this.AppraisalItem.ApparaisalId == b.ApparaisalId) {
                                _this.AppraisalItemValue = _this.AppraisalItemValue.filter(function (r) {
                                    return r.FID != b.FID;
                                });
                                _this.AppraisalItemValue.push(b);
                            }
                        });
                        var _config = {
                            UserName: u.TrueName, DataValue: _this.AppraisalItemValue, ItemData: _this.AppraisalItem, Unid: _this.UniId
                        };
                        var _dom = new DetailAppraisalUserItemRow.DetailAppraisalUserItemRow.DetailAppraisalUserItemRowVm(_config);
                        _dom.IsChange = true;
                        _dom.IsMulit = true;
                        _this.AppraisalRowList.push(_dom);
                    });
                }
            }
            DetailAppraisalItemRowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return DetailAppraisalItemRowVm;
        }(domCore.DomVm));
        DetailAppraisalItemRow.DetailAppraisalItemRowVm = DetailAppraisalItemRowVm;
        var DetailAppraisalItemRowStates = (function (_super) {
            __extends(DetailAppraisalItemRowStates, _super);
            function DetailAppraisalItemRowStates() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalItemRowStates;
        }(domCore.DomStates));
        DetailAppraisalItemRow.DetailAppraisalItemRowStates = DetailAppraisalItemRowStates;
        var DetailAppraisalItemRowProps = (function (_super) {
            __extends(DetailAppraisalItemRowProps, _super);
            function DetailAppraisalItemRowProps() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalItemRowProps;
        }(domCore.DomProps));
        DetailAppraisalItemRow.DetailAppraisalItemRowProps = DetailAppraisalItemRowProps;
    })(DetailAppraisalItemRow = exports.DetailAppraisalItemRow || (exports.DetailAppraisalItemRow = {}));
});
