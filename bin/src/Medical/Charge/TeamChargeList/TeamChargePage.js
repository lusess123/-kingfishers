var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./../../../01core/Event", "./TeamChargeBottomDom", "./TeamChargeNoteDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, eventFile, bottom, note) {
    "use strict";
    var TeamChargePage;
    (function (TeamChargePage) {
        var TeamChargePageAction = (function (_super) {
            __extends(TeamChargePageAction, _super);
            function TeamChargePageAction() {
                _super.apply(this, arguments);
            }
            return TeamChargePageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamChargePage.TeamChargePageAction = TeamChargePageAction;
        var TeamChargePageReact = (function (_super) {
            __extends(TeamChargePageReact, _super);
            function TeamChargePageReact() {
                _super.apply(this, arguments);
                this.state = new TeamChargePageStates();
            }
            TeamChargePageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-table"}, this.props.Vm.Note.intoDom(), this.props.Vm.Bottom.intoDom());
            };
            return TeamChargePageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        TeamChargePage.TeamChargePageReact = TeamChargePageReact;
        var TeamChargePageVm = (function (_super) {
            __extends(TeamChargePageVm, _super);
            function TeamChargePageVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TeamChargePageReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.listenAppEvent("medical/Charge/Team", this.UniId, function () {
                    _this.Note.confirmCharge(_this.keyID);
                });
            }
            TeamChargePageVm.prototype.init = function (config) {
            };
            TeamChargePageVm.prototype.loadPage = function (callback) {
                var _this = this;
                //查找Team   GetModelReceivableAmount
                this.keyID = this.Param1;
                urlFile.Core.AkPost("/MedicalCenter/TeamCharge/GetModelReceivableAmount", { FID: this.keyID }, function (data) {
                    var BottomData = { Amount: data, UniId: _this.UniId };
                    _this.Bottom = new bottom.TeamChargeBottomDom.TeamChargeBottomDomVm(BottomData);
                    _this.Note = new note.TeamChargeNoteDom.TeamChargeNoteDomVm();
                    if (callback) {
                        callback();
                    }
                });
            };
            return TeamChargePageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        TeamChargePage.TeamChargePageVm = TeamChargePageVm;
        var TeamChargePageStates = (function (_super) {
            __extends(TeamChargePageStates, _super);
            function TeamChargePageStates() {
                _super.apply(this, arguments);
            }
            return TeamChargePageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        TeamChargePage.TeamChargePageStates = TeamChargePageStates;
        var TeamChargePageProps = (function (_super) {
            __extends(TeamChargePageProps, _super);
            function TeamChargePageProps() {
                _super.apply(this, arguments);
            }
            return TeamChargePageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        TeamChargePage.TeamChargePageProps = TeamChargePageProps;
        iocFile.Core.Ioc.Current().RegisterType("TEAMCHARGEPAGE", basewedPageFile.Web.BaseWebPageVm, TeamChargePageVm);
    })(TeamChargePage = exports.TeamChargePage || (exports.TeamChargePage = {}));
});
