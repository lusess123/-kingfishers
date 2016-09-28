var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../cxj/HWorkBenchPage", "./shortCut"], function (require, exports, domFile, React, WorkBenchFile, shortcutFile) {
    "use strict";
    var domCore = domFile.Core;
    var WorkBenchVm = WorkBenchFile.HWorkBenchPage.HWorkBenchPageVm;
    var shortcutVm = shortcutFile.shortcut.shortcutVm;
    var main;
    (function (main) {
        var mainAction = (function (_super) {
            __extends(mainAction, _super);
            function mainAction() {
                _super.apply(this, arguments);
            }
            return mainAction;
        }(domCore.DomAction));
        main.mainAction = mainAction;
        var mainReact = (function (_super) {
            __extends(mainReact, _super);
            function mainReact() {
                _super.apply(this, arguments);
                this.state = new mainStates();
            }
            mainReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", null, React.createElement("span", null, "当前位置："), React.createElement("a", {className: "ablue"}, "桌面"), React.createElement("a", {className: "ablue acsMarginLR0-5"}, "/"), React.createElement("a", {className: "active"}, " 动态")), this.props.Vm.WorkBenchObj.intoDom());
            };
            mainReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return mainReact;
        }(domCore.DomReact));
        main.mainReact = mainReact;
        var mainVm = (function (_super) {
            __extends(mainVm, _super);
            function mainVm(config) {
                _super.call(this);
                this.ReactType = mainReact;
                this.WorkBenchObj = new WorkBenchVm();
                this.ShortCutObj = new shortcutVm();
                this.IsMainShow = false;
            }
            return mainVm;
        }(domCore.DomVm));
        main.mainVm = mainVm;
        var mainStates = (function (_super) {
            __extends(mainStates, _super);
            function mainStates() {
                _super.apply(this, arguments);
            }
            return mainStates;
        }(domCore.DomStates));
        main.mainStates = mainStates;
        var mainProps = (function (_super) {
            __extends(mainProps, _super);
            function mainProps() {
                _super.apply(this, arguments);
            }
            return mainProps;
        }(domCore.DomProps));
        main.mainProps = mainProps;
    })(main = exports.main || (exports.main = {}));
});
