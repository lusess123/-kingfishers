var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Util", "./../../../01core/event", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./PersonPaymentGridFormDom", "./PersonPaymentRowBtnDom", "./PersonPaymentSearchFormDom", "./../../../05tool/Pagination"], function (require, exports, iocFile, utilFile, eventFile, urlFile, basewedPageFile, React, Form, RowBtn, Search, pagination) {
    "use strict";
    var PersonPaymentPage;
    (function (PersonPaymentPage) {
        var PersonPaymentPageAction = (function (_super) {
            __extends(PersonPaymentPageAction, _super);
            function PersonPaymentPageAction() {
                _super.apply(this, arguments);
            }
            return PersonPaymentPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonPaymentPage.PersonPaymentPageAction = PersonPaymentPageAction;
        var PersonPaymentPageReact = (function (_super) {
            __extends(PersonPaymentPageReact, _super);
            function PersonPaymentPageReact() {
                _super.apply(this, arguments);
                this.state = new PersonPaymentPageStates();
            }
            PersonPaymentPageReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-tab-content"}, this.props.Vm.searchform.intoDom(), React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("div", {className: "btn-group"}, React.createElement("a", {className: "btn btn-sm btn-danger", onClick: function () { _this.props.Vm.payment(); }}, "￥缴费")), React.createElement("div", {className: "btn-group m-l"}, React.createElement("a", {type: "button", className: "btn btn-sm btn-primary-outline", onClick: function () {
                    _this.props.Vm.delete();
                }}, "删除"), React.createElement("a", {type: "button", className: "btn btn-sm btn-primary-outline", onClick: function () {
                    _this.props.Vm.refund();
                }}, "个人退款"), React.createElement("a", {type: "button", className: "btn btn-sm btn-primary-outline", onClick: function () {
                    _this.props.Vm.Detail();
                }}, "项目详情"), React.createElement("a", {type: "button", className: "btn btn-sm btn-primary-outline", onClick: function () {
                    _this.props.Vm.Print();
                }}, "打印收费票据"))), React.createElement("div", {className: "table-responsive"}, this.props.Vm.table.intoDom()), this.props.Vm.pagertion.intoDom()));
            };
            return PersonPaymentPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonPaymentPage.PersonPaymentPageReact = PersonPaymentPageReact;
        var PersonPaymentPageVm = (function (_super) {
            __extends(PersonPaymentPageVm, _super);
            function PersonPaymentPageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonPaymentPageReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.listenAppEvent("Medical/charge/PersonPayment/Search", this.UniId, function (a) {
                    urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List", { code: a }, function (a) {
                        if (a) {
                            _this.DataList = { Data: [] };
                            _this.DataList.Data = a.Data.ListData;
                            _this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(_this.DataList);
                            _this.table.IsChange = true;
                            _this.table.IsMulit = true;
                            //this.table.RowItemList.forEach((a) => { a.IsChange = true; })
                            _this.pagertion.PageNo = a.Data.Pager.PageNo;
                            _this.pagertion.PageSize = a.Data.Pager.PageSize;
                            _this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                            _this.pagertion.isPartHidden = true;
                            _this.pagertion.IsChange = true;
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            PersonPaymentPageVm.prototype.init = function (config) { };
            PersonPaymentPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List", {}, function (data) {
                    if (data) {
                        _this.DataList = { Data: [] };
                        _this.DataList.Data = data.Data.ListData;
                        _this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(_this.DataList);
                        _this.rowbtn = new RowBtn.PersonPaymentRowBtnDom.PersonPaymentRowBtnDomVm();
                        var config = { Unid: _this.UniId };
                        _this.searchform = new Search.PersonPaymentSearchFormDom.PersonPaymentSearchFormDomVm(config);
                        _this.pagertion = new pagination.tool.PaginationVm();
                        _this.pagertion.PageNo = data.Data.Pager.PageNo;
                        _this.pagertion.PageSize = data.Data.Pager.PageSize;
                        _this.pagertion.TotalCount = data.Data.Pager.TotalCount;
                        _this.pagertion.isPartHidden = true;
                        _this.pagertion.PageClickEvent = function (pageIndex) {
                            _this.loadPageData(pageIndex);
                        };
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            PersonPaymentPageVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                //this.GridFormVm.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/List", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    _this.DataList = { Data: [] };
                    _this.DataList.Data = a.Data.ListData;
                    _this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(_this.DataList);
                    _this.table.IsChange = true;
                    _this.table.IsMulit = true;
                    //this.table.RowItemList.forEach((a) => { a.IsChange = true; })
                    _this.pagertion.PageNo = a.Data.Pager.PageNo;
                    _this.pagertion.PageSize = a.Data.Pager.PageSize;
                    _this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                    _this.pagertion.isPartHidden = true;
                    _this.pagertion.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            PersonPaymentPageVm.prototype.payment = function () {
                this.Util(function (value, status) {
                    if (status == "0") {
                        urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$#$PERSONCHARGEPAGE$" + value + "$", false);
                    }
                    else if (status == "1") {
                        alert("已缴费");
                    }
                    else if (status == "2") {
                        alert("已退款");
                    }
                });
            };
            PersonPaymentPageVm.prototype.Util = function (Fun) {
                var val = 0;
                var value = "";
                var status = "";
                this.table.List.forEach(function (a, index) {
                    if (a.isSelect == "1") {
                        value = a.FID;
                        status = a.ChargeStatus;
                        val++;
                    }
                    else if (a.isSelect == "2") {
                        alert("已经退款了");
                    }
                });
                if (val > 1) {
                    alert("不支持多选");
                }
                else if (val == 0) {
                    alert("请选着一条数据");
                }
                else {
                    Fun(value, status);
                }
            };
            PersonPaymentPageVm.prototype.delete = function () {
                if (confirm("确定删除？")) {
                    this.Util(function (value, status) {
                        urlFile.Core.AkPost("/MedicalCenter/MemberCharge/RemoveData", { FID: value }, function (a) {
                            if (a) {
                                utilFile.Core.Util.Noty("数据删除成功！");
                                urlFile.Core.AkUrl.Current().openUrl("$eee$", true);
                                urlFile.Core.AkUrl.Current().openUrl("$PERSONPAYMENTPAGE$", true);
                            }
                        });
                    });
                }
            };
            PersonPaymentPageVm.prototype.refund = function () {
                this.Util(function (value, status) {
                    if (status == "2") {
                        alert("已退款");
                    }
                    else if (status != "0") {
                        //先查看是否所有的项目是否检查
                        urlFile.Core.AkPost("/MedicalCenter/MemberCharge/refund", { value: value }, function (a) {
                            if (a.Data == false) {
                                //弹出退费框  PERSONREFUNDPAGE
                                urlFile.Core.AkUrl.Current().openUrl("$winPERSONREFUNDPAGE$" + value + "$", true);
                            }
                            else {
                                alert("已经完成部分检查，无法退款");
                            }
                        });
                    }
                    else {
                        alert("未交费缴费");
                    }
                });
            };
            PersonPaymentPageVm.prototype.Detail = function () {
                this.Util(function (value, status) {
                    urlFile.Core.AkUrl.Current().openUrl("$winPERSONITEMDETAILPAGE$" + value + "$", true);
                });
            };
            PersonPaymentPageVm.prototype.Print = function () {
                this.Util(function (value, status) {
                    if (status == "1") {
                        var fid = value;
                        window.open("/MedicalCenter/PrintInsheet/FeeBillPrint?ids=" + fid);
                    }
                    else {
                        alert("未缴费或者退款不能打印");
                    }
                });
            };
            PersonPaymentPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                switch (config.FromModulename) {
                    case "PERSONREFUNDPAGE":
                        if (obj.success) {
                            urlFile.Core.AkUrl.Current().refresh();
                        }
                        break;
                    default:
                        break;
                }
            };
            return PersonPaymentPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonPaymentPage.PersonPaymentPageVm = PersonPaymentPageVm;
        var PersonPaymentPageStates = (function (_super) {
            __extends(PersonPaymentPageStates, _super);
            function PersonPaymentPageStates() {
                _super.apply(this, arguments);
            }
            return PersonPaymentPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonPaymentPage.PersonPaymentPageStates = PersonPaymentPageStates;
        var PersonPaymentPageProps = (function (_super) {
            __extends(PersonPaymentPageProps, _super);
            function PersonPaymentPageProps() {
                _super.apply(this, arguments);
            }
            return PersonPaymentPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonPaymentPage.PersonPaymentPageProps = PersonPaymentPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONPAYMENTPAGE", basewedPageFile.Web.BaseWebPageVm, PersonPaymentPageVm);
    })(PersonPaymentPage = exports.PersonPaymentPage || (exports.PersonPaymentPage = {}));
});
