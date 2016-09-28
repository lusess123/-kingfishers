var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var DetailSalartRow;
    (function (DetailSalartRow) {
        var DetailSalartRowAction = (function (_super) {
            __extends(DetailSalartRowAction, _super);
            function DetailSalartRowAction() {
                _super.apply(this, arguments);
            }
            return DetailSalartRowAction;
        }(domCore.DomAction));
        DetailSalartRow.DetailSalartRowAction = DetailSalartRowAction;
        var DetailSalartRowReact = (function (_super) {
            __extends(DetailSalartRowReact, _super);
            function DetailSalartRowReact() {
                _super.apply(this, arguments);
                this.state = new DetailSalartRowStates();
            }
            DetailSalartRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.UserData.FNumber), React.createElement("td", null, this.props.Vm.UserData.TrueName), React.createElement("td", null, this.props.Vm.Month), this.props.Vm.ItemTitle.map(function (b) {
                    if (b.Type != "绩效项") {
                        return React.createElement("td", null, _this.GetValue(b.FID));
                    }
                }));
            };
            DetailSalartRowReact.prototype.GetValue = function (b) {
                return this.props.Vm.GetValue(b);
            };
            DetailSalartRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailSalartRowReact;
        }(domCore.DomReact));
        DetailSalartRow.DetailSalartRowReact = DetailSalartRowReact;
        var DetailSalartRowVm = (function (_super) {
            __extends(DetailSalartRowVm, _super);
            function DetailSalartRowVm(config) {
                _super.call(this);
                this.ReactType = DetailSalartRowReact;
                this.ItemTitle = [];
                if (config) {
                    this.ItemTitle = config.Data;
                    this.UserData = config.UserData;
                    this.SalaryItemSet = config.DataValue;
                    this.UniId = config.Unid;
                    this.Month = config.Month;
                }
            }
            DetailSalartRowVm.prototype.GetValue = function (b) {
                var value = "待计算";
                this.SalaryItemSet.SalaryItemValue.map(function (v) {
                    if (v.SalaryItemID.FID == b) {
                        value = v.Value;
                    }
                });
                return value;
            };
            return DetailSalartRowVm;
        }(domCore.DomVm));
        DetailSalartRow.DetailSalartRowVm = DetailSalartRowVm;
        var DetailSalartRowStates = (function (_super) {
            __extends(DetailSalartRowStates, _super);
            function DetailSalartRowStates() {
                _super.apply(this, arguments);
            }
            return DetailSalartRowStates;
        }(domCore.DomStates));
        DetailSalartRow.DetailSalartRowStates = DetailSalartRowStates;
        var DetailSalartRowProps = (function (_super) {
            __extends(DetailSalartRowProps, _super);
            function DetailSalartRowProps() {
                _super.apply(this, arguments);
            }
            return DetailSalartRowProps;
        }(domCore.DomProps));
        DetailSalartRow.DetailSalartRowProps = DetailSalartRowProps;
    })(DetailSalartRow = exports.DetailSalartRow || (exports.DetailSalartRow = {}));
});
