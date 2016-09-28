var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var Web;
    (function (Web) {
        var BaseStageAction = (function (_super) {
            __extends(BaseStageAction, _super);
            function BaseStageAction() {
                _super.apply(this, arguments);
            }
            return BaseStageAction;
        }(domCore.DomAction));
        Web.BaseStageAction = BaseStageAction;
        var BaseStageReact = (function (_super) {
            __extends(BaseStageReact, _super);
            function BaseStageReact() {
                _super.apply(this, arguments);
            }
            BaseStageReact.prototype.pSender = function () {
                //return React.DOM.div({}, "空白的页面");
                return React.createElement("div", null, "空白的页面");
            };
            return BaseStageReact;
        }(domCore.DomReact));
        Web.BaseStageReact = BaseStageReact;
        var BaseStageVm = (function (_super) {
            __extends(BaseStageVm, _super);
            function BaseStageVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseStageReact;
            }
            return BaseStageVm;
        }(domCore.DomVm));
        Web.BaseStageVm = BaseStageVm;
        var BaseStageStates = (function (_super) {
            __extends(BaseStageStates, _super);
            function BaseStageStates() {
                _super.apply(this, arguments);
            }
            return BaseStageStates;
        }(domCore.DomStates));
        Web.BaseStageStates = BaseStageStates;
        var BaseStageProps = (function (_super) {
            __extends(BaseStageProps, _super);
            function BaseStageProps() {
                _super.apply(this, arguments);
            }
            return BaseStageProps;
        }(domCore.DomProps));
        Web.BaseStageProps = BaseStageProps;
    })(Web = exports.Web || (exports.Web = {}));
});
