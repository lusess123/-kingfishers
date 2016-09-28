var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../09Web/dom/ThDom", "./../../../../02col/01single/Text", "./../../../../02col/01single/Radio", "./DetailSalaryItemTitleRow", "./DetailSalartRow"], function (require, exports, domFile, React, thFile, TextFile, radioFile, ItemTitleRow, DetailSalartRow) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DetailMoneyAccountingPage;
    (function (DetailMoneyAccountingPage) {
        var DetailMoneyAccountingPageAction = (function (_super) {
            __extends(DetailMoneyAccountingPageAction, _super);
            function DetailMoneyAccountingPageAction() {
                _super.apply(this, arguments);
            }
            return DetailMoneyAccountingPageAction;
        }(domCore.DomAction));
        DetailMoneyAccountingPage.DetailMoneyAccountingPageAction = DetailMoneyAccountingPageAction;
        var DetailMoneyAccountingPageReact = (function (_super) {
            __extends(DetailMoneyAccountingPageReact, _super);
            function DetailMoneyAccountingPageReact() {
                _super.apply(this, arguments);
                this.state = new DetailMoneyAccountingPageStates();
            }
            DetailMoneyAccountingPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "p-a-md"}, React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.InputExcel(); }}, "导出")), this._initTable());
            };
            //public _initForm(): React.ReactElement<any> {
            //    return <form className="clearfix">
            //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
            //            <label className="col-md-5 col-sm-3 form-control-label text-right">编号/姓名：</label>
            //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
            //        </div>
            //    </form>;
            //}
            DetailMoneyAccountingPageReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            DetailMoneyAccountingPageReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            DetailMoneyAccountingPageReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "员工编号"), React.createElement("th", null, "姓名"), React.createElement("th", null, "日期"), this.props.Vm.ItemTitleList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            DetailMoneyAccountingPageReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.SalartRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            DetailMoneyAccountingPageReact.prototype.InputExcel = function () {
                this.props.Vm.InputExcel();
            };
            DetailMoneyAccountingPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return DetailMoneyAccountingPageReact;
        }(domCore.DomReact));
        DetailMoneyAccountingPage.DetailMoneyAccountingPageReact = DetailMoneyAccountingPageReact;
        var DetailMoneyAccountingPageVm = (function (_super) {
            __extends(DetailMoneyAccountingPageVm, _super);
            function DetailMoneyAccountingPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DetailMoneyAccountingPageReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.TextObj = new TextFile.ui.TextVm();
                this.RadioObj = new radioFile.ui.RadioVm();
                this.ItemList = [];
                this.ItemTitleList = [];
                this.RowList = [];
                this.UserList = [];
                this.SalartRowList = [];
                this.RadioObj.ItemList = [{ Value: "0", Text: "在职" }, { Value: "1", Text: "离职" }];
                if (config) {
                    this.PageData = config.SalaryPageData;
                    this.ItemList = config.SalaryPageData.ItemList;
                    this.RowList = config.SalaryPageData.SalaryItemSet;
                    this.UserList = config.SalaryPageData.UserList;
                }
                this.ItemList.map(function (a) {
                    if (a.Type != "绩效项") {
                        var config = { Data: a, Unid: _this.UniId };
                        var _row = new ItemTitleRow.DetailSalaryItemTitleRow.DetailSalaryItemTitleRowVm(config);
                        _row.IsChange = true;
                        _row.IsMulit = true;
                        _this.ItemTitleList.push(_row);
                    }
                });
                this.RowList.map(function (a) {
                    _this.UserList.map(function (b) {
                        if (a.UserID == b.UserId) {
                            var _config = { Data: _this.ItemList, UserData: b, DataValue: a, Unid: _this.UniId, Month: _this.PageData.SalaryData.Month };
                            var _rowDom = new DetailSalartRow.DetailSalartRow.DetailSalartRowVm(_config);
                            _rowDom.IsChange = true;
                            _rowDom.IsMulit = true;
                            _this.SalartRowList.push(_rowDom);
                        }
                    });
                });
            }
            DetailMoneyAccountingPageVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            DetailMoneyAccountingPageVm.prototype.InputExcel = function () {
                var fid = this.PageData.SalaryData.FID;
                window.open("/HospPerformance/HumanResource/InputExcelFromSalary?fid=" + fid, 'fullscreen=yes, scrollbars=auto');
            };
            DetailMoneyAccountingPageVm.prototype.init = function (config) {
            };
            return DetailMoneyAccountingPageVm;
        }(domCore.DomVm));
        DetailMoneyAccountingPage.DetailMoneyAccountingPageVm = DetailMoneyAccountingPageVm;
        var DetailMoneyAccountingPageStates = (function (_super) {
            __extends(DetailMoneyAccountingPageStates, _super);
            function DetailMoneyAccountingPageStates() {
                _super.apply(this, arguments);
            }
            return DetailMoneyAccountingPageStates;
        }(domCore.DomStates));
        DetailMoneyAccountingPage.DetailMoneyAccountingPageStates = DetailMoneyAccountingPageStates;
        var DetailMoneyAccountingPageProps = (function (_super) {
            __extends(DetailMoneyAccountingPageProps, _super);
            function DetailMoneyAccountingPageProps() {
                _super.apply(this, arguments);
            }
            return DetailMoneyAccountingPageProps;
        }(domCore.DomProps));
        DetailMoneyAccountingPage.DetailMoneyAccountingPageProps = DetailMoneyAccountingPageProps;
    })(DetailMoneyAccountingPage = exports.DetailMoneyAccountingPage || (exports.DetailMoneyAccountingPage = {}));
});
