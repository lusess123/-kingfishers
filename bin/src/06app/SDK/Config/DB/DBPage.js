var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../01core/Event", "./DBPageGirdForm"], function (require, exports, iocFile, urlFile, basewedPageFile, React, eventFile, DBForm) {
    "use strict";
    var DBPage;
    (function (DBPage) {
        var DBPageAction = (function (_super) {
            __extends(DBPageAction, _super);
            function DBPageAction() {
                _super.apply(this, arguments);
            }
            return DBPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DBPage.DBPageAction = DBPageAction;
        var DBPageReact = (function (_super) {
            __extends(DBPageReact, _super);
            function DBPageReact() {
                _super.apply(this, arguments);
                this.state = new DBPageStates();
            }
            DBPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "well"}, React.createElement("h6", {className: "Hu-title Hs-fw "}, "基础设置"), React.createElement("span", null)), this.props.Vm.DBFrom.intoDom());
            };
            return DBPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DBPage.DBPageReact = DBPageReact;
        var DBPageVm = (function (_super) {
            __extends(DBPageVm, _super);
            function DBPageVm(config) {
                _super.call(this);
                this.ReactType = DBPageReact;
                this.Title = "DBPage页面;";
            }
            DBPageVm.prototype.init = function (config) {
            };
            DBPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                this.UniId = eventFile.App.getUniId().toString();
                urlFile.Core.AkPost("/Dev/DB/GetDBXml", {}, function (a) {
                    _this.DBList = a.Databases;
                    var config = { Data: _this.DBList, Unid: _this.UniId };
                    _this.DBFrom = new DBForm.DBPageGirdForm.DBPageGirdFormVm(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            return DBPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DBPage.DBPageVm = DBPageVm;
        var DBPageStates = (function (_super) {
            __extends(DBPageStates, _super);
            function DBPageStates() {
                _super.apply(this, arguments);
            }
            return DBPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DBPage.DBPageStates = DBPageStates;
        var DBPageProps = (function (_super) {
            __extends(DBPageProps, _super);
            function DBPageProps() {
                _super.apply(this, arguments);
            }
            return DBPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DBPage.DBPageProps = DBPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ZHMDBPAGE", basewedPageFile.Web.BaseWebPageVm, DBPageVm);
    })(DBPage = exports.DBPage || (exports.DBPage = {}));
});
