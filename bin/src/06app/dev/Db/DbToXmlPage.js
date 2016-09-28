var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var DbToXmlPage;
    (function (DbToXmlPage) {
        var DbToXmlPageAction = (function (_super) {
            __extends(DbToXmlPageAction, _super);
            function DbToXmlPageAction() {
                _super.apply(this, arguments);
            }
            return DbToXmlPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DbToXmlPage.DbToXmlPageAction = DbToXmlPageAction;
        var DbToXmlPageReact = (function (_super) {
            __extends(DbToXmlPageReact, _super);
            function DbToXmlPageReact() {
                _super.apply(this, arguments);
                this.state = new DbToXmlPageStates();
            }
            DbToXmlPageReact.prototype.pSender = function () {
                return React.createElement("div", null, "DbToXmlPage的页面");
            };
            return DbToXmlPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DbToXmlPage.DbToXmlPageReact = DbToXmlPageReact;
        var DbToXmlPageVm = (function (_super) {
            __extends(DbToXmlPageVm, _super);
            function DbToXmlPageVm(config) {
                _super.call(this);
                this.ReactType = DbToXmlPageReact;
                this.Title = "DbToXmlPage页面;";
            }
            DbToXmlPageVm.prototype.init = function (config) {
            };
            DbToXmlPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return DbToXmlPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DbToXmlPage.DbToXmlPageVm = DbToXmlPageVm;
        var DbToXmlPageStates = (function (_super) {
            __extends(DbToXmlPageStates, _super);
            function DbToXmlPageStates() {
                _super.apply(this, arguments);
            }
            return DbToXmlPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DbToXmlPage.DbToXmlPageStates = DbToXmlPageStates;
        var DbToXmlPageProps = (function (_super) {
            __extends(DbToXmlPageProps, _super);
            function DbToXmlPageProps() {
                _super.apply(this, arguments);
            }
            return DbToXmlPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DbToXmlPage.DbToXmlPageProps = DbToXmlPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DBTOXMLPAGE", basewedPageFile.Web.BaseWebPageVm, DbToXmlPageVm);
    })(DbToXmlPage = exports.DbToXmlPage || (exports.DbToXmlPage = {}));
});
