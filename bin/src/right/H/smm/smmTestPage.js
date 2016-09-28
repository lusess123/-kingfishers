var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "./MenuOrgPage/MenuOrg"], function (require, exports, React, iocFile, urlFile, basewedPageFile, OrgMenuFile) {
    "use strict";
    var OrgMenuVm = OrgMenuFile.MenuOrg.MenuOrgVm;
    var smmTestPage;
    (function (smmTestPage) {
        var smmTestPageAction = (function (_super) {
            __extends(smmTestPageAction, _super);
            function smmTestPageAction() {
                _super.apply(this, arguments);
            }
            return smmTestPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        smmTestPage.smmTestPageAction = smmTestPageAction;
        var smmTestPageReact = (function (_super) {
            __extends(smmTestPageReact, _super);
            function smmTestPageReact() {
                _super.apply(this, arguments);
                this.state = new smmTestPageStates();
            }
            smmTestPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acs-table-absolute-org"}, this.props.Vm.OrgMenuObj.intoDom(), this.props.Vm.OrgMenuObj.table.rMenuOrgTrailSender());
            };
            return smmTestPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        smmTestPage.smmTestPageReact = smmTestPageReact;
        var smmTestPageVm = (function (_super) {
            __extends(smmTestPageVm, _super);
            function smmTestPageVm() {
                _super.apply(this, arguments);
                this.ReactType = smmTestPageReact;
                this.OrgMenuObj = new OrgMenuVm();
            }
            smmTestPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/fristinit", { FControlUnitID: "1" }, function (a) {
                    var OrgDatas = [];
                    var neworg = a.MenuOrgTable.OrgData;
                    OrgDatas.push(neworg);
                    var _config1 = { MenuOrg: { MenuOrgTable: { MenuData: a.MenuOrgTable.MenuData, OrgData: OrgDatas } } };
                    _this.OrgMenuObj = new OrgMenuVm(_config1.MenuOrg);
                    if (callback) {
                        callback();
                    }
                });
                //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", { json: "MenuOrg.json" }, (a) => {
                //    var _config1: IMainPageConfig = { MenuOrg: { MenuOrgTable: { MenuData: [], OrgData: [] } } };
                //    if (a) {
                //        _config1.MenuOrg = a;
                //        this.OrgMenuObj = new OrgMenuVm(_config1.MenuOrg);
                //        this.OrgMenuObj.forceUpdate("");
                //        if (callback) {
                //            callback();
                //        }
                //    }
                //});
            };
            smmTestPageVm.prototype.ReceivePageSend = function (config, obj) {
                _super.prototype.ReceivePageSend.call(this, config, obj);
                debugger;
                switch (config.FromModulename) {
                    case "SMMMENUNEWPAGE":
                        var _objMenu = obj;
                        this.OrgMenuObj.table.addMenu(_objMenu.MenuName, _objMenu.Type);
                        break;
                    default:
                        break;
                }
            };
            return smmTestPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        smmTestPage.smmTestPageVm = smmTestPageVm;
        var smmTestPageStates = (function (_super) {
            __extends(smmTestPageStates, _super);
            function smmTestPageStates() {
                _super.apply(this, arguments);
            }
            return smmTestPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        smmTestPage.smmTestPageStates = smmTestPageStates;
        var smmTestPageProps = (function (_super) {
            __extends(smmTestPageProps, _super);
            function smmTestPageProps() {
                _super.apply(this, arguments);
            }
            return smmTestPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        smmTestPage.smmTestPageProps = smmTestPageProps;
        iocFile.Core.Ioc.Current().RegisterType("smmTestPage", basewedPageFile.Web.BaseWebPageVm, smmTestPageVm);
    })(smmTestPage = exports.smmTestPage || (exports.smmTestPage = {}));
});
