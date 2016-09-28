var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var BaseMDDetailRowDom;
    (function (BaseMDDetailRowDom) {
        var BaseMDDetailRowDomAction = (function (_super) {
            __extends(BaseMDDetailRowDomAction, _super);
            function BaseMDDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return BaseMDDetailRowDomAction;
        }(domCore.DomAction));
        BaseMDDetailRowDom.BaseMDDetailRowDomAction = BaseMDDetailRowDomAction;
        var BaseMDDetailRowDomReact = (function (_super) {
            __extends(BaseMDDetailRowDomReact, _super);
            function BaseMDDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new BaseMDDetailRowDomStates();
            }
            BaseMDDetailRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: BaseMDDetailRowDom的组件");
            };
            BaseMDDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BaseMDDetailRowDomReact;
        }(domCore.DomReact));
        BaseMDDetailRowDom.BaseMDDetailRowDomReact = BaseMDDetailRowDomReact;
        var BaseMDDetailRowDomVm = (function (_super) {
            __extends(BaseMDDetailRowDomVm, _super);
            function BaseMDDetailRowDomVm() {
                _super.apply(this, arguments);
                this.ReactType = BaseMDDetailRowDomReact;
                this.Index = 0;
            }
            return BaseMDDetailRowDomVm;
        }(domCore.DomVm));
        BaseMDDetailRowDom.BaseMDDetailRowDomVm = BaseMDDetailRowDomVm;
        var BaseMDDetailRowDomStates = (function (_super) {
            __extends(BaseMDDetailRowDomStates, _super);
            function BaseMDDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return BaseMDDetailRowDomStates;
        }(domCore.DomStates));
        BaseMDDetailRowDom.BaseMDDetailRowDomStates = BaseMDDetailRowDomStates;
        var BaseMDDetailRowDomProps = (function (_super) {
            __extends(BaseMDDetailRowDomProps, _super);
            function BaseMDDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return BaseMDDetailRowDomProps;
        }(domCore.DomProps));
        BaseMDDetailRowDom.BaseMDDetailRowDomProps = BaseMDDetailRowDomProps;
    })(BaseMDDetailRowDom = exports.BaseMDDetailRowDom || (exports.BaseMDDetailRowDom = {}));
});
