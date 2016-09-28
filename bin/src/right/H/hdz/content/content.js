var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./shortCut", "./leftmenu", "./main", "./main_table"], function (require, exports, domFile, React, shortcutFile, leftMenuFile, mainFile, mainTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var shortcutVm = shortcutFile.shortcut.shortcutVm;
    var leftMenuVm = leftMenuFile.leftMenu.leftMenuVm;
    var mainVm = mainFile.main.mainVm;
    var mainTableVm = mainTableFile.mainTable.mainTableVm;
    //import appCenterFile = require("./appCenter");
    //import appCenter = appCenterFile.appCenter.appCenterReact;
    //import appCenterVm = appCenterFile.appCenter.appCenterVm;
    var content;
    (function (content) {
        var contentAction = (function (_super) {
            __extends(contentAction, _super);
            function contentAction() {
                _super.apply(this, arguments);
            }
            return contentAction;
        }(domCore.DomAction));
        content.contentAction = contentAction;
        var contentReact = (function (_super) {
            __extends(contentReact, _super);
            function contentReact() {
                _super.apply(this, arguments);
                this.state = new contentStates();
            }
            contentReact.prototype.pSender = function () {
                return React.createElement("div", {className: "content clearfix"}, this.props.Vm.ShortCutObj.intoDom(), this.props.Vm.LeftMenuObj.intoDom(), React.createElement("div", {className: "main-content left acsWhiteBg" + (this.props.Vm.IsMainShow ? " hide" : " ")}, this.props.Vm.MainObj.intoDom()), React.createElement("div", {className: "main-table left" + (this.props.Vm.IsMainTableShow ? " " : " hide")}, this.props.Vm.MainTableObj.intoDom()), React.createElement("div", {className: "main-appcenter left" + (this.props.Vm.IsAppCenterShow ? "" : " hide")}));
            };
            //{this.props.Vm.MainObj.intoDom() }
            contentReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return contentReact;
        }(domCore.DomReact));
        content.contentReact = contentReact;
        var contentVm = (function (_super) {
            __extends(contentVm, _super);
            function contentVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = contentReact;
                this.MainObj = new mainVm();
                this.MainTableObj = new mainTableVm();
                // public AppCenterObj: appCenterVm = new appCenterVm();
                this.IsMainShow = false;
                this.IsMainTableShow = false;
                this.IsAppCenterShow = false;
                this.ShortCutObj = new shortcutVm(config.IshortcutConfig);
                this.LeftMenuObj = new leftMenuVm(config.IleftMenuConfig);
                this.listenAppEvent("_shortcut", config.IshortcutConfig.UniId, function (rowIndex) {
                    _this.IsMainTableShow = !_this.IsMainTableShow;
                    _this.IsMainShow = !_this.IsMainShow;
                    _this.IsAppCenterShow = !_this.IsAppCenterShow;
                    _this.forceUpdate("");
                });
                // this.AppCenterObj = new appCenterVm(config.IshortcutConfig);
                this.listenAppEvent("_topbar", config.IshortcutConfig.UniId, function (rowIndex) {
                    _this.IsAppCenterShow = !_this.IsAppCenterShow;
                    _this.forceUpdate("");
                });
            }
            return contentVm;
        }(domCore.DomVm));
        content.contentVm = contentVm;
        var contentStates = (function (_super) {
            __extends(contentStates, _super);
            function contentStates() {
                _super.apply(this, arguments);
            }
            return contentStates;
        }(domCore.DomStates));
        content.contentStates = contentStates;
        var contentProps = (function (_super) {
            __extends(contentProps, _super);
            function contentProps() {
                _super.apply(this, arguments);
            }
            return contentProps;
        }(domCore.DomProps));
        content.contentProps = contentProps;
    })(content = exports.content || (exports.content = {}));
});
