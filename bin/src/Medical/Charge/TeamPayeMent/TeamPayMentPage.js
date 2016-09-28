var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./TeamPayMentGridFormDom", "./TeamPayMentRowBtnDom", "./TeamPayMentSearchFromDom", "./../../../05tool/Pagination"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, Form, RowBtn, Search, pagination) {
    "use strict";
    var TeamPayMentPage;
    (function (TeamPayMentPage) {
        var TeamPayMentPageAction = (function (_super) {
            __extends(TeamPayMentPageAction, _super);
            function TeamPayMentPageAction() {
                _super.apply(this, arguments);
            }
            return TeamPayMentPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamPayMentPage.TeamPayMentPageAction = TeamPayMentPageAction;
        var TeamPayMentPageReact = (function (_super) {
            __extends(TeamPayMentPageReact, _super);
            function TeamPayMentPageReact() {
                _super.apply(this, arguments);
                this.state = new TeamPayMentPageStates();
            }
            TeamPayMentPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.searchform.intoDom(), React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("div", {className: "btn-group"}, React.createElement("a", {className: "btn btn-sm btn-danger", onClick: function () { _this.props.Vm.payment(); }}, "￥缴费")), React.createElement("div", {className: "btn-group m-l"}, React.createElement("a", {className: "btn btn-sm btn-primary-outline", onClick: function () { _this.props.Vm.refund(); }}, "团体退款"), React.createElement("a", {type: "button", className: "btn btn-sm btn-primary-outline", onClick: function () { _this.props.Vm.delete(); }}, "删除"), React.createElement("a", {className: "btn btn-sm btn-primary-outline", onClick: function () { _this.props.Vm.Detail(); }}, "批次详情"))), React.createElement("div", {className: "table-responsive"}, this.props.Vm.table.intoDom()), this.props.Vm.pagetion.intoDom()));
            };
            return TeamPayMentPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TeamPayMentPage.TeamPayMentPageReact = TeamPayMentPageReact;
        var TeamPayMentPageVm = (function (_super) {
            __extends(TeamPayMentPageVm, _super);
            function TeamPayMentPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TeamPayMentPageReact;
                var data = { Data: [] };
                this.listenAppEvent("Medical/charge/TeamPayment/Search", this.UniId, function (a) {
                    urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List", { code: a }, function (a) {
                        if (a) {
                            _this.DataList = { Data: [] };
                            _this.DataList.Data = a.Data.ListData;
                            _this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(_this.DataList);
                            _this.table.IsChange = true;
                            _this.table.IsMulit = true;
                            //this.table.RowItemList.forEach((a) => { a.IsChange = true; })
                            _this.pagetion.PageNo = a.Data.Pager.PageNo;
                            _this.pagetion.PageSize = a.Data.Pager.PageSize;
                            _this.pagetion.TotalCount = a.Data.Pager.TotalCount;
                            _this.pagetion.isPartHidden = true;
                            _this.pagetion.IsChange = true;
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            TeamPayMentPageVm.prototype.init = function (config) { };
            TeamPayMentPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List", {}, function (data) {
                    if (data) {
                        _this.DataList = { Data: [] };
                        _this.DataList.Data = data.Data.ListData;
                        _this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(_this.DataList);
                        _this.rowbtn = new RowBtn.TeamPayMentRowBtnDom.TeamPayMentRowBtnDomVm();
                        var config = {
                            Unid: _this.UniId
                        };
                        _this.searchform = new Search.TeamPayMentSearchFormDom.TeamPayMentSearchFormDomVm(config);
                        _this.pagetion = new pagination.tool.PaginationVm();
                        _this.pagetion.PageNo = data.Data.Pager.PageNo;
                        _this.pagetion.PageSize = data.Data.Pager.PageSize;
                        _this.pagetion.TotalCount = data.Data.Pager.TotalCount;
                        _this.pagetion.PageClickEvent = function (pageIndex) {
                            _this.loadPageData(pageIndex);
                        };
                        _this.pagetion.isPartHidden = true;
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            TeamPayMentPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                //this.GridFormVm.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/List", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    _this.DataList = { Data: [] };
                    _this.DataList.Data = a.Data.ListData;
                    _this.table = new Form.TeamPayMentGridFormDom.TeamPayMentGridFormDomVm(_this.DataList);
                    _this.pagetion.PageNo = a.Data.Pager.PageNo;
                    _this.pagetion.PageSize = a.Data.Pager.PageSize;
                    _this.pagetion.TotalCount = a.Data.Pager.TotalCount;
                    _this.pagetion.isPartHidden = true;
                    _this.pagetion.IsChange = true;
                    _this.table.IsMulit = true;
                    _this.table.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            TeamPayMentPageVm.prototype.payment = function () {
                this.util(function (value, status) {
                    if (status == "0") {
                        urlFile.Core.AkUrl.Current().openUrl("$TeamPayMentPAGE$#$TEAMCHARGEPAGE$" + value + "$", false);
                    }
                    else {
                        alert("已缴费");
                    }
                });
            };
            TeamPayMentPageVm.prototype.util = function (Util) {
                var val = 0;
                var value = "";
                var status = "";
                this.table.List.forEach(function (a, index) {
                    if (a.isSelect == "1") {
                        value = a.FID.toString();
                        status = a.ChargeStatus;
                        val++;
                    }
                });
                if (val > 1) {
                    alert("不支持多选");
                }
                else if (val == 0) {
                    alert("请选着一条数据");
                }
                else {
                    Util(value, status);
                }
            };
            TeamPayMentPageVm.prototype.delete = function () {
                if (confirm("确定删除？")) {
                    this.util(function (value, status) {
                        urlFile.Core.AkPost("/MedicalCenter/TeamCharge/RemoveData", { BatchFID: value }, function (a) {
                            if (a) {
                                utilFile.Core.Util.Noty("数据删除成功！");
                                urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                                urlFile.Core.AkUrl.Current().openUrl("$TeamPayMentPAGE$", true);
                            }
                        });
                    });
                }
            };
            TeamPayMentPageVm.prototype.Detail = function () {
                this.util(function (value, status) {
                    urlFile.Core.AkUrl.Current().openUrl("$winTEAMDETAILPAGE$" + value + "$", true);
                });
            };
            //TEAMREFUNDPAGE
            TeamPayMentPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "TEAMREFUNDPAGE":
                        if (obj.success) {
                            urlFile.Core.AkUrl.Current().refresh();
                        }
                        break;
                    default:
                        break;
                }
            };
            TeamPayMentPageVm.prototype.refund = function () {
                this.util(function (value, status) {
                    if (status == "1") {
                        urlFile.Core.AkPost("/MedicalCenter/TeamCharge/refund", { BatchFID: value }, function (a) {
                            if (a.Content == "empty") {
                                alert("无法退款");
                            }
                            else if (a.Content == "UnPaid") {
                                alert("无法退款");
                            }
                            else {
                                urlFile.Core.AkUrl.Current().openUrl("$winTEAMREFUNDPAGE$" + value + "$" + a.Content + "$", true);
                            }
                        });
                    }
                    else {
                        alert("无法退款");
                    }
                });
            };
            return TeamPayMentPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TeamPayMentPage.TeamPayMentPageVm = TeamPayMentPageVm;
        var TeamPayMentPageStates = (function (_super) {
            __extends(TeamPayMentPageStates, _super);
            function TeamPayMentPageStates() {
                _super.apply(this, arguments);
            }
            return TeamPayMentPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamPayMentPage.TeamPayMentPageStates = TeamPayMentPageStates;
        var TeamPayMentPageProps = (function (_super) {
            __extends(TeamPayMentPageProps, _super);
            function TeamPayMentPageProps() {
                _super.apply(this, arguments);
            }
            return TeamPayMentPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TeamPayMentPage.TeamPayMentPageProps = TeamPayMentPageProps;
        iocFile.Core.Ioc.Current().RegisterType("TeamPayMentPAGE", basewedPageFile.Web.BaseWebPageVm, TeamPayMentPageVm);
    })(TeamPayMentPage = exports.TeamPayMentPage || (exports.TeamPayMentPage = {}));
});
