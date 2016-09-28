var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../01core/Ioc", "./../../../04page/BaseWebPage"], function (require, exports, React, iocFile, basewedPageFile) {
    "use strict";
    var OrgListPage;
    (function (OrgListPage) {
        var OrgListPageAction = (function (_super) {
            __extends(OrgListPageAction, _super);
            function OrgListPageAction() {
                _super.apply(this, arguments);
            }
            return OrgListPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        OrgListPage.OrgListPageAction = OrgListPageAction;
        var OrgListPageReact = (function (_super) {
            __extends(OrgListPageReact, _super);
            function OrgListPageReact() {
                _super.apply(this, arguments);
                this.state = new OrgListPageStates();
            }
            OrgListPageReact.prototype.pSender = function () {
                return React.createElement("div", null, "OrgListPage的页面");
            };
            return OrgListPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        OrgListPage.OrgListPageReact = OrgListPageReact;
        var OrgListPageVm = (function (_super) {
            __extends(OrgListPageVm, _super);
            function OrgListPageVm() {
                _super.apply(this, arguments);
                this.ReactType = OrgListPageReact;
            }
            return OrgListPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        OrgListPage.OrgListPageVm = OrgListPageVm;
        var OrgListPageStates = (function (_super) {
            __extends(OrgListPageStates, _super);
            function OrgListPageStates() {
                _super.apply(this, arguments);
            }
            return OrgListPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        OrgListPage.OrgListPageStates = OrgListPageStates;
        var OrgListPageProps = (function (_super) {
            __extends(OrgListPageProps, _super);
            function OrgListPageProps() {
                _super.apply(this, arguments);
            }
            return OrgListPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        OrgListPage.OrgListPageProps = OrgListPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ORGLISTPAGE", basewedPageFile.Web.BaseWebPageVm, OrgListPageVm);
    })(OrgListPage = exports.OrgListPage || (exports.OrgListPage = {}));
});
