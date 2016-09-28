var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../PersonChargeList/PersonChargeGridFormDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, Form) {
    "use strict";
    var PersonItemDetailPage;
    (function (PersonItemDetailPage) {
        var PersonItemDetailPageAction = (function (_super) {
            __extends(PersonItemDetailPageAction, _super);
            function PersonItemDetailPageAction() {
                _super.apply(this, arguments);
            }
            return PersonItemDetailPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonItemDetailPage.PersonItemDetailPageAction = PersonItemDetailPageAction;
        var PersonItemDetailPageReact = (function (_super) {
            __extends(PersonItemDetailPageReact, _super);
            function PersonItemDetailPageReact() {
                _super.apply(this, arguments);
                this.state = new PersonItemDetailPageStates();
            }
            PersonItemDetailPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "table-responsive"}, this._tDom(this.props.Vm.table));
            };
            return PersonItemDetailPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        PersonItemDetailPage.PersonItemDetailPageReact = PersonItemDetailPageReact;
        var PersonItemDetailPageVm = (function (_super) {
            __extends(PersonItemDetailPageVm, _super);
            function PersonItemDetailPageVm(config) {
                _super.call(this);
                this.ReactType = PersonItemDetailPageReact;
            }
            PersonItemDetailPageVm.prototype.init = function (config) { };
            PersonItemDetailPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.keyID = this.Param1;
                urlFile.Core.AkPost("/MedicalCenter/MemberCharge/Charge", { fids: this.keyID }, function (data) {
                    if (data) {
                        _this.DataList = { Data: [] };
                        _this.DataList.Data = data.Data;
                        var bottomData = { Amout: "", UniId: _this.UniId };
                        bottomData.Amout = data.Content;
                        _this.table = new Form.PersonChargeGridFormDom.PersonChargeGridFormDomVm(_this.DataList);
                    }
                    if (callback) {
                        callback();
                    }
                });
            };
            return PersonItemDetailPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        PersonItemDetailPage.PersonItemDetailPageVm = PersonItemDetailPageVm;
        var PersonItemDetailPageStates = (function (_super) {
            __extends(PersonItemDetailPageStates, _super);
            function PersonItemDetailPageStates() {
                _super.apply(this, arguments);
            }
            return PersonItemDetailPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        PersonItemDetailPage.PersonItemDetailPageStates = PersonItemDetailPageStates;
        var PersonItemDetailPageProps = (function (_super) {
            __extends(PersonItemDetailPageProps, _super);
            function PersonItemDetailPageProps() {
                _super.apply(this, arguments);
            }
            return PersonItemDetailPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        PersonItemDetailPage.PersonItemDetailPageProps = PersonItemDetailPageProps;
        iocFile.Core.Ioc.Current().RegisterType("PERSONITEMDETAILPAGE", basewedPageFile.Web.BaseWebPageVm, PersonItemDetailPageVm);
    })(PersonItemDetailPage = exports.PersonItemDetailPage || (exports.PersonItemDetailPage = {}));
});
