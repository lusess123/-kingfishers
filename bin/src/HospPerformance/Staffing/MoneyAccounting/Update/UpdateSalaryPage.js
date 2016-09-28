var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../09Web/dom/ThDom", "./../../../../02col/01single/Text", "./../../../../02col/01single/Radio", "./UpdateSalaryTitleRow", "./UpdateSalaryRow"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, thFile, TextFile, radioFile, ItemTitleRow, UpdateSalartRow) {
    "use strict";
    var UpdateSalaryPage;
    (function (UpdateSalaryPage) {
        var UpdateSalaryPageAction = (function (_super) {
            __extends(UpdateSalaryPageAction, _super);
            function UpdateSalaryPageAction() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdateSalaryPage.UpdateSalaryPageAction = UpdateSalaryPageAction;
        var UpdateSalaryPageReact = (function (_super) {
            __extends(UpdateSalaryPageReact, _super);
            function UpdateSalaryPageReact() {
                _super.apply(this, arguments);
                this.state = new UpdateSalaryPageStates();
            }
            UpdateSalaryPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "p-a-md"}, this._initMoneyDetial(), this._initTable());
            };
            UpdateSalaryPageReact.prototype._initMoneyDetial = function () {
                var _this = this;
                return React.createElement("div", {className: "clearfix YSm-detail-money"}, React.createElement("ul", {className: "nav nav-pills pull-left"}, React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资主题："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.Title)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资套账："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.TemplateName)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资月份："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.Month)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "人员总数："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.UserNumbers)), React.createElement("li", {className: "nav-item"}, React.createElement("label", null, "薪资总额："), React.createElement("span", null, this.props.Vm.PageData.SalaryData.SalaryTotal))), React.createElement("div", {className: "pull-right"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.Submit(); }}, "保存")));
            };
            UpdateSalaryPageReact.prototype.Submit = function () {
                this.props.Vm.Submit();
            };
            //public _initForm(): React.ReactElement<any> {
            //    return <form className="clearfix">
            //        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
            //            <label className="col-md-5 col-sm-3 form-control-label text-right">编号/姓名：</label>
            //            <div className="col-md-7 col-sm-9">{this.props.Vm.TextObj.intoDom() }</div>
            //        </div>
            //    </form>;
            //}
            UpdateSalaryPageReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            UpdateSalaryPageReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            UpdateSalaryPageReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "员工编号"), React.createElement("th", null, "姓名"), React.createElement("th", null, "日期"), this.props.Vm.ItemTitleList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            UpdateSalaryPageReact.prototype.initBody = function () {
                return React.createElement("tbody", null, this.props.Vm.SalartRowList.map(function (r) {
                    return r.intoDom();
                }));
            };
            ;
            UpdateSalaryPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            return UpdateSalaryPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UpdateSalaryPage.UpdateSalaryPageReact = UpdateSalaryPageReact;
        var UpdateSalaryPageVm = (function (_super) {
            __extends(UpdateSalaryPageVm, _super);
            function UpdateSalaryPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = UpdateSalaryPageReact;
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
                this.listenAppEvent("SendToPage", this.UniId, function (_data) {
                    var _config = { UserID: _data.UserID, SalaryItemValue: [] };
                    _config.SalaryItemValue.push(_data.SalaryItemValue);
                    _this.SubmitData.map(function (s) {
                        if (s.UserID.UserId == _data.UserID.UserId) {
                            s.SalaryItemValue = s.SalaryItemValue.filter(function (row) {
                                return row.SalaryItemID.FID != _data.SalaryItemValue.SalaryItemID.FID;
                            });
                        }
                    });
                    _this.SubmitData.map(function (s) {
                        if (s.UserID.UserId == _data.UserID.UserId) {
                            s.SalaryItemValue.push(_data.SalaryItemValue);
                        }
                    });
                    _this.IsMulit = true;
                    _this.IsChange = true;
                    _this.forceUpdate("");
                });
            }
            UpdateSalaryPageVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            UpdateSalaryPageVm.prototype.init = function (config) {
                var _this = this;
                if (config) {
                    this.PageData = config.SalaryPageData;
                    this.ItemList = config.SalaryPageData.ItemList;
                    this.RowList = config.SalaryPageData.SalaryItemSet;
                    this.UserList = config.SalaryPageData.UserList;
                    this.SubmitData = config.SalaryPageData.SalaryItemSet;
                }
                this.ItemList.map(function (a) {
                    if (a.Type != "绩效项") {
                        var config = { Data: a, Unid: _this.UniId };
                        var _row = new ItemTitleRow.UpdateSalaryTitleRow.UpdateSalaryTitleRowVm(config);
                        _row.IsChange = true;
                        _row.IsMulit = true;
                        _this.ItemTitleList.push(_row);
                    }
                });
                this.RowList.map(function (a) {
                    _this.UserList.map(function (b) {
                        if (a.UserID == b.UserId) {
                            var _config = { Data: _this.ItemList, UserData: b, DataValue: a, Unid: _this.UniId, Month: _this.PageData.SalaryData.Month };
                            var _rowDom = new UpdateSalartRow.UpdateSalaryRow.UpdateSalaryRowVm(_config);
                            _rowDom.IsChange = true;
                            _rowDom.IsMulit = true;
                            _this.SalartRowList.push(_rowDom);
                        }
                    });
                });
            };
            UpdateSalaryPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.fid = this.Param1;
                urlFile.Core.AkPost("/HospPerformance/HumanResource/GetSalaryDetail", { fid: this.Param1 }, function (a) {
                    var config = { SalaryPageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            UpdateSalaryPageVm.prototype.Submit = function () {
                var data = this.SubmitData;
                var _jsonData = JSON.stringify(data);
                //alert(_jsonData);
                urlFile.Core.AkPost("/HospPerformance/HumanResource/UpdateSalary", { fid: this.fid, data: _jsonData }, function (res) {
                    if (res) {
                        alert("修改成功");
                        utilFile.Core.Util.Noty("数据修改成功");
                        //urlFile.Core.AkUrl.Current().openUrl('', false, () => { })
                        //页面刷新
                        urlFile.Core.AkUrl.Current().openUrl("$$module/HospPerformance/HumanResource/performance_hr_Salary", false, function () { });
                    }
                    else {
                        alert("修改失败");
                    }
                });
            };
            return UpdateSalaryPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UpdateSalaryPage.UpdateSalaryPageVm = UpdateSalaryPageVm;
        var UpdateSalaryPageStates = (function (_super) {
            __extends(UpdateSalaryPageStates, _super);
            function UpdateSalaryPageStates() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UpdateSalaryPage.UpdateSalaryPageStates = UpdateSalaryPageStates;
        var UpdateSalaryPageProps = (function (_super) {
            __extends(UpdateSalaryPageProps, _super);
            function UpdateSalaryPageProps() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UpdateSalaryPage.UpdateSalaryPageProps = UpdateSalaryPageProps;
        iocFile.Core.Ioc.Current().RegisterType("UpdateSalaryPage", basewedPageFile.Web.BaseWebPageVm, UpdateSalaryPageVm);
    })(UpdateSalaryPage = exports.UpdateSalaryPage || (exports.UpdateSalaryPage = {}));
});
