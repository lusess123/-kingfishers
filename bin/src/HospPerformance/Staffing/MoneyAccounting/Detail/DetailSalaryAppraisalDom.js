var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./DetailAppraisalUserRow"], function (require, exports, domFile, React, AppraisalUserRow) {
    "use strict";
    var domCore = domFile.Core;
    var DetailSalaryAppraisalDom;
    (function (DetailSalaryAppraisalDom) {
        var DetailSalaryAppraisalDomAction = (function (_super) {
            __extends(DetailSalaryAppraisalDomAction, _super);
            function DetailSalaryAppraisalDomAction() {
                _super.apply(this, arguments);
            }
            return DetailSalaryAppraisalDomAction;
        }(domCore.DomAction));
        DetailSalaryAppraisalDom.DetailSalaryAppraisalDomAction = DetailSalaryAppraisalDomAction;
        var DetailSalaryAppraisalDomReact = (function (_super) {
            __extends(DetailSalaryAppraisalDomReact, _super);
            function DetailSalaryAppraisalDomReact() {
                _super.apply(this, arguments);
                this.state = new DetailSalaryAppraisalDomStates();
            }
            DetailSalaryAppraisalDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-md"}, React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.InputExcel(); }}, "导出")), this.props.Vm.AppraisalUserRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            DetailSalaryAppraisalDomReact.prototype.InputExcel = function () {
                this.props.Vm.InputExcel();
            };
            DetailSalaryAppraisalDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailSalaryAppraisalDomReact;
        }(domCore.DomReact));
        DetailSalaryAppraisalDom.DetailSalaryAppraisalDomReact = DetailSalaryAppraisalDomReact;
        var DetailSalaryAppraisalDomVm = (function (_super) {
            __extends(DetailSalaryAppraisalDomVm, _super);
            function DetailSalaryAppraisalDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetailSalaryAppraisalDomReact;
                // public ItemTitle: dataFile.Data.SalaryItemValueOrCount;
                this.UserData = [];
                this.ItemData = [];
                this.AppraisalUserRowList = [];
                if (config) {
                    this.ItemData = config.ItemData;
                    this.UserData = config.UserData;
                    this.UniId = config.Unid;
                    this.SalaryData = config.SalaryData;
                    this.ItemData.map(function (b) {
                        if (b.Type == "绩效项") {
                            var _config = { UserData: _this.UserData, ItemData: b, SalaryData: _this.SalaryData };
                            var _rowDom = new AppraisalUserRow.DetailAppraisalUserRow.DetailAppraisalUserRowVm(_config);
                            _rowDom.IsChange = true;
                            _rowDom.IsMulit = true;
                            _this.AppraisalUserRowList.push(_rowDom);
                        }
                    });
                }
            }
            DetailSalaryAppraisalDomVm.prototype.InputExcel = function () {
                var fid = this.SalaryData.FID;
                window.open("/HospPerformance/HumanResource/InputExcelFromAppraisal?fid=" + fid, 'fullscreen=yes, scrollbars=auto');
            };
            return DetailSalaryAppraisalDomVm;
        }(domCore.DomVm));
        DetailSalaryAppraisalDom.DetailSalaryAppraisalDomVm = DetailSalaryAppraisalDomVm;
        var DetailSalaryAppraisalDomStates = (function (_super) {
            __extends(DetailSalaryAppraisalDomStates, _super);
            function DetailSalaryAppraisalDomStates() {
                _super.apply(this, arguments);
            }
            return DetailSalaryAppraisalDomStates;
        }(domCore.DomStates));
        DetailSalaryAppraisalDom.DetailSalaryAppraisalDomStates = DetailSalaryAppraisalDomStates;
        var DetailSalaryAppraisalDomProps = (function (_super) {
            __extends(DetailSalaryAppraisalDomProps, _super);
            function DetailSalaryAppraisalDomProps() {
                _super.apply(this, arguments);
            }
            return DetailSalaryAppraisalDomProps;
        }(domCore.DomProps));
        DetailSalaryAppraisalDom.DetailSalaryAppraisalDomProps = DetailSalaryAppraisalDomProps;
    })(DetailSalaryAppraisalDom = exports.DetailSalaryAppraisalDom || (exports.DetailSalaryAppraisalDom = {}));
});
