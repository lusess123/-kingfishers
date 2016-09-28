var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var BaseMDMasterDom;
    (function (BaseMDMasterDom) {
        var BaseMDMasterDomAction = (function (_super) {
            __extends(BaseMDMasterDomAction, _super);
            function BaseMDMasterDomAction() {
                _super.apply(this, arguments);
            }
            return BaseMDMasterDomAction;
        }(domCore.DomAction));
        BaseMDMasterDom.BaseMDMasterDomAction = BaseMDMasterDomAction;
        var BaseMDMasterDomReact = (function (_super) {
            __extends(BaseMDMasterDomReact, _super);
            function BaseMDMasterDomReact() {
                _super.apply(this, arguments);
                this.state = new BaseMDMasterDomStates();
            }
            BaseMDMasterDomReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: BaseMDMasterDom的组件");
            };
            BaseMDMasterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BaseMDMasterDomReact;
        }(domCore.DomReact));
        BaseMDMasterDom.BaseMDMasterDomReact = BaseMDMasterDomReact;
        var BaseMDMasterDomVm = (function (_super) {
            __extends(BaseMDMasterDomVm, _super);
            function BaseMDMasterDomVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseMDMasterDomReact;
            }
            return BaseMDMasterDomVm;
        }(domCore.DomVm));
        BaseMDMasterDom.BaseMDMasterDomVm = BaseMDMasterDomVm;
        var BaseMDMasterDomStates = (function (_super) {
            __extends(BaseMDMasterDomStates, _super);
            function BaseMDMasterDomStates() {
                _super.apply(this, arguments);
            }
            return BaseMDMasterDomStates;
        }(domCore.DomStates));
        BaseMDMasterDom.BaseMDMasterDomStates = BaseMDMasterDomStates;
        var BaseMDMasterDomProps = (function (_super) {
            __extends(BaseMDMasterDomProps, _super);
            function BaseMDMasterDomProps() {
                _super.apply(this, arguments);
            }
            return BaseMDMasterDomProps;
        }(domCore.DomProps));
        BaseMDMasterDom.BaseMDMasterDomProps = BaseMDMasterDomProps;
    })(BaseMDMasterDom = exports.BaseMDMasterDom || (exports.BaseMDMasterDom = {}));
});
