var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var DetailAppraisalUserItemRow;
    (function (DetailAppraisalUserItemRow) {
        var DetailAppraisalUserItemRowAction = (function (_super) {
            __extends(DetailAppraisalUserItemRowAction, _super);
            function DetailAppraisalUserItemRowAction() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserItemRowAction;
        }(domCore.DomAction));
        DetailAppraisalUserItemRow.DetailAppraisalUserItemRowAction = DetailAppraisalUserItemRowAction;
        var DetailAppraisalUserItemRowReact = (function (_super) {
            __extends(DetailAppraisalUserItemRowReact, _super);
            function DetailAppraisalUserItemRowReact() {
                _super.apply(this, arguments);
                this.state = new DetailAppraisalUserItemRowStates();
            }
            DetailAppraisalUserItemRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.UserName), this.props.Vm.AppraisalItem.map(function (a) {
                    return React.createElement("td", null, _this.GetValue(a.FID, a.UserId, a.ApparaisalId));
                }), React.createElement("td", null, this.props.Vm.SumValue));
            };
            DetailAppraisalUserItemRowReact.prototype.GetValue = function (b, c, d) {
                return this.props.Vm.GetValue(b, c, d);
            };
            DetailAppraisalUserItemRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailAppraisalUserItemRowReact;
        }(domCore.DomReact));
        DetailAppraisalUserItemRow.DetailAppraisalUserItemRowReact = DetailAppraisalUserItemRowReact;
        var DetailAppraisalUserItemRowVm = (function (_super) {
            __extends(DetailAppraisalUserItemRowVm, _super);
            function DetailAppraisalUserItemRowVm(config) {
                _super.call(this);
                this.ReactType = DetailAppraisalUserItemRowReact;
                this.SumValue = 0.00;
                if (config) {
                    this.AppraisalItem = config.DataValue;
                    this.UniId = config.Unid;
                    this.UserName = config.UserName;
                    this.ItemdData = config.ItemData;
                }
            }
            DetailAppraisalUserItemRowVm.prototype.GetValue = function (b, c, d) {
                var value = "待计算";
                this.ItemdData.AppraisalItemValue.map(function (v) {
                    if (v.FID == b && v.UserId == c && v.ApparaisalId == d) {
                        value = v.Result;
                    }
                });
                this.SumValue += Number(value);
                return value;
            };
            return DetailAppraisalUserItemRowVm;
        }(domCore.DomVm));
        DetailAppraisalUserItemRow.DetailAppraisalUserItemRowVm = DetailAppraisalUserItemRowVm;
        var DetailAppraisalUserItemRowStates = (function (_super) {
            __extends(DetailAppraisalUserItemRowStates, _super);
            function DetailAppraisalUserItemRowStates() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserItemRowStates;
        }(domCore.DomStates));
        DetailAppraisalUserItemRow.DetailAppraisalUserItemRowStates = DetailAppraisalUserItemRowStates;
        var DetailAppraisalUserItemRowProps = (function (_super) {
            __extends(DetailAppraisalUserItemRowProps, _super);
            function DetailAppraisalUserItemRowProps() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserItemRowProps;
        }(domCore.DomProps));
        DetailAppraisalUserItemRow.DetailAppraisalUserItemRowProps = DetailAppraisalUserItemRowProps;
    })(DetailAppraisalUserItemRow = exports.DetailAppraisalUserItemRow || (exports.DetailAppraisalUserItemRow = {}));
});
