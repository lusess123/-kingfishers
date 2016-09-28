var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../03form/Base/BasePage", "./../01core/Ioc"], function (require, exports, basepage, iocFile) {
    "use strict";
    var ui;
    (function (ui) {
        var DetailPageAction = (function (_super) {
            __extends(DetailPageAction, _super);
            function DetailPageAction() {
                _super.apply(this, arguments);
            }
            return DetailPageAction;
        }(basepage.ui.BasePageAction));
        ui.DetailPageAction = DetailPageAction;
        var DetailPageReact = (function (_super) {
            __extends(DetailPageReact, _super);
            function DetailPageReact() {
                _super.apply(this, arguments);
            }
            DetailPageReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
                // alert("List页面注册变更事件");
            };
            DetailPageReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            ;
            return DetailPageReact;
        }(basepage.ui.BasePageReact));
        ui.DetailPageReact = DetailPageReact;
        var DetailPageProps = (function (_super) {
            __extends(DetailPageProps, _super);
            function DetailPageProps() {
                _super.apply(this, arguments);
            }
            return DetailPageProps;
        }(basepage.ui.BasePageProps));
        ui.DetailPageProps = DetailPageProps;
        var DetailPageVm = (function (_super) {
            __extends(DetailPageVm, _super);
            function DetailPageVm() {
                _super.apply(this, arguments);
                this.ReactType = DetailPageReact;
                this.pRegName = "DetailPage";
            }
            DetailPageVm.prototype.pSetForeachForm = function (form) {
                _super.prototype.pSetForeachForm.call(this, form);
                form.IsNoAdd = true;
                form.IsNoDel = true;
            };
            return DetailPageVm;
        }(basepage.ui.BasePageVm));
        ui.DetailPageVm = DetailPageVm;
        var DetailPageStates = (function (_super) {
            __extends(DetailPageStates, _super);
            function DetailPageStates() {
                _super.apply(this, arguments);
            }
            return DetailPageStates;
        }(basepage.ui.BasePageStates));
        ui.DetailPageStates = DetailPageStates;
        iocFile.Core.Ioc.Current().RegisterType("DETAIL", basepage.ui.BasePageVm, DetailPageVm);
    })(ui = exports.ui || (exports.ui = {}));
});
