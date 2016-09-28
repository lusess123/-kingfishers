var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./../../01core/Ioc", "./Link"], function (require, exports, basecolFile, iocFile, link) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        var DownLinkAction = (function (_super) {
            __extends(DownLinkAction, _super);
            function DownLinkAction() {
                _super.apply(this, arguments);
            }
            return DownLinkAction;
        }(link.ui.LinkAction));
        ui.DownLinkAction = DownLinkAction;
        var DownLinkProps = (function (_super) {
            __extends(DownLinkProps, _super);
            function DownLinkProps() {
                _super.apply(this, arguments);
            }
            return DownLinkProps;
        }(link.ui.LinkProps));
        ui.DownLinkProps = DownLinkProps;
        var DownLinkVm = (function (_super) {
            __extends(DownLinkVm, _super);
            function DownLinkVm() {
                _super.apply(this, arguments);
                this.Text = "点击下载";
                this.pRegName = "下载控件";
                //下载url的路径
                this.href = "";
                this.ReactType = DownLinkReact;
            }
            DownLinkVm.Test = function () {
                var bean = new DownLinkVm;
                return bean;
            };
            return DownLinkVm;
        }(link.ui.LinkVm));
        ui.DownLinkVm = DownLinkVm;
        var DownLinkState = (function (_super) {
            __extends(DownLinkState, _super);
            function DownLinkState() {
                _super.apply(this, arguments);
            }
            return DownLinkState;
        }(link.ui.LinkState));
        ui.DownLinkState = DownLinkState;
        var DownLinkReact = (function (_super) {
            __extends(DownLinkReact, _super);
            function DownLinkReact() {
                _super.apply(this, arguments);
            }
            DownLinkReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            DownLinkReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DownLinkReact;
        }(link.ui.LinkReact));
        ui.DownLinkReact = DownLinkReact;
        iocFile.Core.Ioc.Current().RegisterType("DownLinkVm", BaseColVm, DownLinkVm);
    })(ui = exports.ui || (exports.ui = {}));
});
