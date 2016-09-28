var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var RowButtonExpandDom;
    (function (RowButtonExpandDom) {
        var RowButtonExpandDomAction = (function (_super) {
            __extends(RowButtonExpandDomAction, _super);
            function RowButtonExpandDomAction() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandDomAction;
        }(domCore.DomAction));
        RowButtonExpandDom.RowButtonExpandDomAction = RowButtonExpandDomAction;
        var RowButtonExpandDomReact = (function (_super) {
            __extends(RowButtonExpandDomReact, _super);
            function RowButtonExpandDomReact() {
                _super.apply(this, arguments);
                this.state = new RowButtonExpandDomStates();
            }
            RowButtonExpandDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("span", null, React.createElement("i", {ref: "expandBtn", className: this.props.Vm.IsExpand ? "fa fa-minus-square acsPointer" : "fa fa-plus-square acsPointer", onClick: function () { _this.expandClick(); return false; }}));
            };
            RowButtonExpandDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            RowButtonExpandDomReact.prototype.expandClick = function () {
                var _vm = this.props.Vm;
                _vm.IsExpand = _vm.IsExpand = !_vm.IsExpand;
                this.forceUpdate();
                if (_vm.ExpandCustomFun) {
                    _vm.ExpandCustomFun(_vm);
                }
            };
            return RowButtonExpandDomReact;
        }(domCore.DomReact));
        RowButtonExpandDom.RowButtonExpandDomReact = RowButtonExpandDomReact;
        var RowButtonExpandDomVm = (function (_super) {
            __extends(RowButtonExpandDomVm, _super);
            function RowButtonExpandDomVm(config) {
                _super.call(this);
                this.ReactType = RowButtonExpandDomReact;
                this.IsExpand = false;
            }
            return RowButtonExpandDomVm;
        }(domCore.DomVm));
        RowButtonExpandDom.RowButtonExpandDomVm = RowButtonExpandDomVm;
        var RowButtonExpandDomStates = (function (_super) {
            __extends(RowButtonExpandDomStates, _super);
            function RowButtonExpandDomStates() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandDomStates;
        }(domCore.DomStates));
        RowButtonExpandDom.RowButtonExpandDomStates = RowButtonExpandDomStates;
        var RowButtonExpandDomProps = (function (_super) {
            __extends(RowButtonExpandDomProps, _super);
            function RowButtonExpandDomProps() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandDomProps;
        }(domCore.DomProps));
        RowButtonExpandDom.RowButtonExpandDomProps = RowButtonExpandDomProps;
    })(RowButtonExpandDom = exports.RowButtonExpandDom || (exports.RowButtonExpandDom = {}));
});
