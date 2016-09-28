var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var LeftNaviDom;
    (function (LeftNaviDom) {
        var LeftNaviDomAction = (function (_super) {
            __extends(LeftNaviDomAction, _super);
            function LeftNaviDomAction() {
                _super.apply(this, arguments);
            }
            return LeftNaviDomAction;
        }(domCore.DomAction));
        LeftNaviDom.LeftNaviDomAction = LeftNaviDomAction;
        var LeftNaviDomReact = (function (_super) {
            __extends(LeftNaviDomReact, _super);
            function LeftNaviDomReact() {
                _super.apply(this, arguments);
                this.state = new LeftNaviDomStates();
            }
            LeftNaviDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hm-toggle-menu text-left"}, React.createElement("h5", null, this.props.Vm.Title));
            };
            LeftNaviDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return LeftNaviDomReact;
        }(domCore.DomReact));
        LeftNaviDom.LeftNaviDomReact = LeftNaviDomReact;
        var LeftNaviDomVm = (function (_super) {
            __extends(LeftNaviDomVm, _super);
            function LeftNaviDomVm() {
                _super.apply(this, arguments);
                this.ReactType = LeftNaviDomReact;
            }
            return LeftNaviDomVm;
        }(domCore.DomVm));
        LeftNaviDom.LeftNaviDomVm = LeftNaviDomVm;
        var LeftNaviDomStates = (function (_super) {
            __extends(LeftNaviDomStates, _super);
            function LeftNaviDomStates() {
                _super.apply(this, arguments);
            }
            return LeftNaviDomStates;
        }(domCore.DomStates));
        LeftNaviDom.LeftNaviDomStates = LeftNaviDomStates;
        var LeftNaviDomProps = (function (_super) {
            __extends(LeftNaviDomProps, _super);
            function LeftNaviDomProps() {
                _super.apply(this, arguments);
            }
            return LeftNaviDomProps;
        }(domCore.DomProps));
        LeftNaviDom.LeftNaviDomProps = LeftNaviDomProps;
    })(LeftNaviDom = exports.LeftNaviDom || (exports.LeftNaviDom = {}));
});
