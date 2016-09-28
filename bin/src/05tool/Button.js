var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var ButtonAction = (function (_super) {
            __extends(ButtonAction, _super);
            function ButtonAction() {
                _super.apply(this, arguments);
            }
            return ButtonAction;
        }(domFile.Core.DomAction));
        ui.ButtonAction = ButtonAction;
        var ButtonReact = (function (_super) {
            __extends(ButtonReact, _super);
            function ButtonReact() {
                _super.apply(this, arguments);
            }
            ButtonReact.prototype.pSender = function () {
                var _this = this;
                var _fa = this.props.Vm.FaCss != "" ? ("fa fa-" + this.props.Vm.FaCss) : " ";
                var _icon = this.props.Vm.IconCss != "" ? ("icon-" + this.props.Vm.IconCss) : " ";
                return React.createElement("a", {className: ("  " + (this.props.Vm.IsNoBg ? "" : "btn ") + " Hu-pointer " + this.props.Vm.KindCss + (this.props.Vm.NoEnable ? " Hs-btn-disabled " : "")), onClick: function () {
                    if (!_this.props.Vm.NoEnable) {
                        _this.props.Vm.ClickFun(_this.props.Vm);
                    }
                    else {
                        alert("该按钮不可用");
                    }
                    ;
                    return false;
                }}, " ", React.createElement("i", {className: (_icon + " " + _fa)}), this.props.Vm.DisplayName);
            };
            ;
            return ButtonReact;
        }(domFile.Core.DomReact));
        ui.ButtonReact = ButtonReact;
        var ButtonVm = (function (_super) {
            __extends(ButtonVm, _super);
            function ButtonVm(config) {
                _super.call(this);
                this.ReactType = ButtonReact;
                this.FaCss = "";
                this.IconCss = "";
                this.KindCss = "btn-sm";
                if (config) {
                    if (config.Name) {
                        this.Name = config.Name;
                    }
                    if (config.DisplayName) {
                        this.DisplayName = config.DisplayName;
                    }
                    if (config.FaCss) {
                        this.FaCss = config.FaCss;
                    }
                    if (config.FaCss) {
                        this.FaCss = config.FaCss;
                    }
                    if (config.IconCss) {
                        this.IconCss = config.IconCss;
                    }
                    if (config.NoEnable) {
                        this.NoEnable = config.NoEnable;
                    }
                    if (config.KindCss) {
                        this.KindCss = config.KindCss;
                    }
                    if (config.ClickFun) {
                        this.ClickFun = config.ClickFun;
                    }
                    if (config.Right) {
                        this.Right = config.Right;
                    }
                    if (config.IsData) {
                        this.IsData = config.IsData;
                    }
                    if (config.IsNoBg) {
                        this.IsNoBg = config.IsNoBg;
                    }
                }
            }
            return ButtonVm;
        }(domFile.Core.DomVm));
        ui.ButtonVm = ButtonVm;
        var ButtonProps = (function (_super) {
            __extends(ButtonProps, _super);
            function ButtonProps() {
                _super.apply(this, arguments);
            }
            return ButtonProps;
        }(domFile.Core.DomProps));
        ui.ButtonProps = ButtonProps;
        var ButtonStates = (function (_super) {
            __extends(ButtonStates, _super);
            function ButtonStates() {
                _super.apply(this, arguments);
            }
            return ButtonStates;
        }(domFile.Core.DomStates));
        ui.ButtonStates = ButtonStates;
    })(ui = exports.ui || (exports.ui = {}));
});
