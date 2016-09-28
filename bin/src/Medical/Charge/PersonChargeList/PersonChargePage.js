var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../01core/Event", "./../../../04page/BaseWebPage", "react", "./PersonChargeBottomDom", "./PersonChargeGridFormDom", "./PersonChargeNoteDom", "./PersonChargeRowBtnDom", "./../../../05tool/Pagination"], function (require, exports, iocFile, urlFile, eventFile, basewedPageFile, React, bottom, Form, Note, rowBtn, pagination) {
    "use strict";
    var PersonChargePage;
    (function (PersonChargePage) {
        var PersonChargePageAction = (function (_super) {
            __extends(PersonChargePageAction, _super);
            function PersonChargePageAction() {
                _super.apply(this, arguments);
            }
            return PersonChargePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonChargePage.PersonChargePageAction = PersonChargePageAction;
        var PersonChargePageReact = (function (_super) {
            __extends(PersonChargePageReact, _super);
            function PersonChargePageReact() {
                _super.apply(this, arguments);
                this.state = new PersonChargePageStates();
            }
            PersonChargePageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table"}, React.createElement("div", {className: "YSm-table-title"}), this.props.Vm.rowBtn.intoDom(), React.createElement("div", {className: "table-responsive"}, this.props.Vm.table.intoDom()), this.props.Vm.textbox.intoDom()), this.props.Vm.Bottom.intoDom());
            };
            PersonChargePageReact.prototype._initPager = function () {
                var pagerVm = new pagination.tool.PaginationVm();
                pagerVm.PageNo = 0;
                pagerVm.PageSize = 5;
                pagerVm.TotalCount = 20;
                pagerVm.isPartHidden = true;
                return pagerVm.intoDom();
            };
            return PersonChargePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonChargePage.PersonChargePageReact = PersonChargePageReact;
        var PersonChargePageVm = (function (_super) {
            __extends(PersonChargePageVm, _super);
            function PersonChargePageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonChargePageReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.listenAppEvent("medical/Charge/PersonChargeBottomDom", this.UniId, function () {
                    //调用Note里面的方法
                    _this.textbox.confirmCharge(_this.keyID);
                });
            }
            PersonChargePageVm.prototype.init = function (config) {
            };
            PersonChargePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.keyID = this.Param1;
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/Charge", { fids: this.keyID }, function (data) {
                    if (data) {
                        _this.DataList = { Data: [] };
                        _this.DataList.Data = data.Data;
                        _this.textbox = new Note.PersonChargeNoteDom.PersonChargeNoteDomVm();
                        var bottomData = { Amout: "", UniId: _this.UniId };
                        bottomData.Amout = data.Content;
                        _this.Bottom = new bottom.PersonChargeBottomDom.PersonChargeBottomDomVm(bottomData);
                        _this.rowBtn = new rowBtn.PersonChargeRowBtnDom.PersonChargeRowBtnDomVm();
                        _this.table = new Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm(_this.DataList);
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            return PersonChargePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonChargePage.PersonChargePageVm = PersonChargePageVm;
        var PersonChargePageStates = (function (_super) {
            __extends(PersonChargePageStates, _super);
            function PersonChargePageStates() {
                _super.apply(this, arguments);
            }
            return PersonChargePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonChargePage.PersonChargePageStates = PersonChargePageStates;
        var PersonChargePageProps = (function (_super) {
            __extends(PersonChargePageProps, _super);
            function PersonChargePageProps() {
                _super.apply(this, arguments);
            }
            return PersonChargePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonChargePage.PersonChargePageProps = PersonChargePageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONCHARGEPAGE", basewedPageFile.Web.BaseWebPageVm, PersonChargePageVm);
    })(PersonChargePage = exports.PersonChargePage || (exports.PersonChargePage = {}));
});
