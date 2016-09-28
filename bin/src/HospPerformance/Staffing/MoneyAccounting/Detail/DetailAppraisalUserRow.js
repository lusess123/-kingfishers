var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./DetailAppraisalItemRow"], function (require, exports, domFile, urlFile, React, AppraisalItemRow) {
    "use strict";
    var domCore = domFile.Core;
    var DetailAppraisalUserRow;
    (function (DetailAppraisalUserRow) {
        var DetailAppraisalUserRowAction = (function (_super) {
            __extends(DetailAppraisalUserRowAction, _super);
            function DetailAppraisalUserRowAction() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserRowAction;
        }(domCore.DomAction));
        DetailAppraisalUserRow.DetailAppraisalUserRowAction = DetailAppraisalUserRowAction;
        var DetailAppraisalUserRowReact = (function (_super) {
            __extends(DetailAppraisalUserRowReact, _super);
            function DetailAppraisalUserRowReact() {
                _super.apply(this, arguments);
                this.state = new DetailAppraisalUserRowStates();
            }
            DetailAppraisalUserRowReact.prototype.pSender = function () {
                return React.createElement("div", {className: "p-a-md"}, this.props.Vm.AppraisalRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            DetailAppraisalUserRowReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            DetailAppraisalUserRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailAppraisalUserRowReact;
        }(domCore.DomReact));
        DetailAppraisalUserRow.DetailAppraisalUserRowReact = DetailAppraisalUserRowReact;
        var DetailAppraisalUserRowVm = (function (_super) {
            __extends(DetailAppraisalUserRowVm, _super);
            function DetailAppraisalUserRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetailAppraisalUserRowReact;
                this.ItemTitle = [];
                this.AppraisalItemSetList = [];
                this.AppraisalItemValues = [];
                this.AppraisalRowList = [];
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                if (config) {
                    this.UserData = config.UserData;
                    this.ItemData = config.ItemData;
                    this.SalaryData = config.SalaryData;
                    var templateID = this.ItemData.AppraisalID;
                    var month = this.SalaryData.Month;
                    urlFile.Core.AkPost("/HospPerformance/HumanResource/GetAppraisalDetail", { templateID: templateID, month: month }, function (r) {
                        var _config = r.Data;
                        _config.AppraisalItems.map(function (i) {
                            var _itemConifg = {
                                Unid: _this.UniId, DataValue: i, UserData: _this.UserData
                            };
                            var _rowDom = new AppraisalItemRow.DetailAppraisalItemRow.DetailAppraisalItemRowVm(_itemConifg);
                            _rowDom.IsChange = true;
                            _rowDom.IsMulit = true;
                            _this.AppraisalRowList.push(_rowDom);
                        });
                    });
                }
            }
            DetailAppraisalUserRowVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            return DetailAppraisalUserRowVm;
        }(domCore.DomVm));
        DetailAppraisalUserRow.DetailAppraisalUserRowVm = DetailAppraisalUserRowVm;
        var DetailAppraisalUserRowStates = (function (_super) {
            __extends(DetailAppraisalUserRowStates, _super);
            function DetailAppraisalUserRowStates() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserRowStates;
        }(domCore.DomStates));
        DetailAppraisalUserRow.DetailAppraisalUserRowStates = DetailAppraisalUserRowStates;
        var DetailAppraisalUserRowProps = (function (_super) {
            __extends(DetailAppraisalUserRowProps, _super);
            function DetailAppraisalUserRowProps() {
                _super.apply(this, arguments);
            }
            return DetailAppraisalUserRowProps;
        }(domCore.DomProps));
        DetailAppraisalUserRow.DetailAppraisalUserRowProps = DetailAppraisalUserRowProps;
    })(DetailAppraisalUserRow = exports.DetailAppraisalUserRow || (exports.DetailAppraisalUserRow = {}));
});
