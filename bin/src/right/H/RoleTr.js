var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var RoleTr;
    (function (RoleTr) {
        var RoleTrAction = (function (_super) {
            __extends(RoleTrAction, _super);
            function RoleTrAction() {
                _super.apply(this, arguments);
            }
            return RoleTrAction;
        }(domCore.DomAction));
        RoleTr.RoleTrAction = RoleTrAction;
        var RoleTrReact = (function (_super) {
            __extends(RoleTrReact, _super);
            function RoleTrReact() {
                _super.apply(this, arguments);
                this.state = new RoleTrStates();
            }
            RoleTrReact.prototype.pSender = function () {
                return React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, "报修人员角色"), React.createElement("a", {className: "button"})));
            };
            RoleTrReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return RoleTrReact;
        }(domCore.DomReact));
        RoleTr.RoleTrReact = RoleTrReact;
        var RoleTrVm = (function (_super) {
            __extends(RoleTrVm, _super);
            function RoleTrVm() {
                _super.apply(this, arguments);
                this.ReactType = RoleTrReact;
            }
            return RoleTrVm;
        }(domCore.DomVm));
        RoleTr.RoleTrVm = RoleTrVm;
        var RoleTrStates = (function (_super) {
            __extends(RoleTrStates, _super);
            function RoleTrStates() {
                _super.apply(this, arguments);
            }
            return RoleTrStates;
        }(domCore.DomStates));
        RoleTr.RoleTrStates = RoleTrStates;
        var RoleTrProps = (function (_super) {
            __extends(RoleTrProps, _super);
            function RoleTrProps() {
                _super.apply(this, arguments);
            }
            return RoleTrProps;
        }(domCore.DomProps));
        RoleTr.RoleTrProps = RoleTrProps;
    })(RoleTr = exports.RoleTr || (exports.RoleTr = {}));
});
