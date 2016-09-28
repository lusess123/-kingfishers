var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var RowButtonExpand;
    (function (RowButtonExpand) {
        var RowButtonExpandAction = (function (_super) {
            __extends(RowButtonExpandAction, _super);
            function RowButtonExpandAction() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandAction;
        }(domCore.DomAction));
        RowButtonExpand.RowButtonExpandAction = RowButtonExpandAction;
        var RowButtonExpandReact = (function (_super) {
            __extends(RowButtonExpandReact, _super);
            function RowButtonExpandReact() {
                _super.apply(this, arguments);
            }
            RowButtonExpandReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("span", null, React.createElement("i", {ref: "expandBtn", className: this.props.Vm.IsExpand ? "fa fa-minus-square Hu-pointer" : "fa fa-plus-square Hu-pointer", onClick: function () { _this.expandClick(); return false; }}));
            };
            RowButtonExpandReact.prototype.expandClick = function () {
                var _vm = this.props.Vm;
                _vm.IsExpand = _vm.IsExpand = !_vm.IsExpand;
                this.forceUpdate();
                if (_vm.ExpandCustomFun) {
                    _vm.ExpandCustomFun(_vm);
                }
            };
            return RowButtonExpandReact;
        }(domCore.DomReact));
        RowButtonExpand.RowButtonExpandReact = RowButtonExpandReact;
        var RowButtonExpandVm = (function (_super) {
            __extends(RowButtonExpandVm, _super);
            function RowButtonExpandVm() {
                _super.apply(this, arguments);
                this.ReactType = RowButtonExpandReact;
                this.IsExpand = false;
            }
            return RowButtonExpandVm;
        }(domCore.DomVm));
        RowButtonExpand.RowButtonExpandVm = RowButtonExpandVm;
        var RowButtonExpandStates = (function (_super) {
            __extends(RowButtonExpandStates, _super);
            function RowButtonExpandStates() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandStates;
        }(domCore.DomStates));
        RowButtonExpand.RowButtonExpandStates = RowButtonExpandStates;
        var RowButtonExpandProps = (function (_super) {
            __extends(RowButtonExpandProps, _super);
            function RowButtonExpandProps() {
                _super.apply(this, arguments);
            }
            return RowButtonExpandProps;
        }(domCore.DomProps));
        RowButtonExpand.RowButtonExpandProps = RowButtonExpandProps;
    })(RowButtonExpand = exports.RowButtonExpand || (exports.RowButtonExpand = {}));
});
