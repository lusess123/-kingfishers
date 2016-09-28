var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../01core/0Dom", "./../01core/Url", "react"], function (require, exports, domFile, urlFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var ALinkAction = (function (_super) {
            __extends(ALinkAction, _super);
            function ALinkAction() {
                _super.apply(this, arguments);
            }
            return ALinkAction;
        }(domFile.Core.DomAction));
        ui.ALinkAction = ALinkAction;
        var ALinkReact = (function (_super) {
            __extends(ALinkReact, _super);
            function ALinkReact() {
                _super.apply(this, arguments);
            }
            ALinkReact.prototype.pComponentWillMount = function () {
                if (this.props.Vm == null) {
                    this.props.Vm = new ALinkVm();
                }
                _super.prototype.pComponentWillMount.call(this);
            };
            ALinkReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("a", {onClick: function () { _this.fun_AClick(); }, className: this.props.Vm.ClassName}, this.props.children);
            };
            ;
            ALinkReact.prototype.fun_AClick = function () {
                if (this.props.href) {
                    urlFile.Core.AkUrl.Current().openUrl(this.props.href, this.props.Vm.IsUrl);
                }
            };
            return ALinkReact;
        }(domFile.Core.DomReact));
        ui.ALinkReact = ALinkReact;
        var ALinkVm = (function (_super) {
            __extends(ALinkVm, _super);
            function ALinkVm(isNoUrl, option) {
                _super.call(this);
                this.ReactType = ALinkReact;
                if (isNoUrl)
                    this.IsUrl = isNoUrl;
                if (option) {
                    if (option.ClassName) {
                        this.ClassName = option.ClassName;
                    }
                }
            }
            return ALinkVm;
        }(domFile.Core.DomVm));
        ui.ALinkVm = ALinkVm;
        var ALinkProps = (function (_super) {
            __extends(ALinkProps, _super);
            function ALinkProps() {
                _super.apply(this, arguments);
            }
            return ALinkProps;
        }(domFile.Core.DomProps));
        ui.ALinkProps = ALinkProps;
        var ALinkStates = (function (_super) {
            __extends(ALinkStates, _super);
            function ALinkStates() {
                _super.apply(this, arguments);
            }
            return ALinkStates;
        }(domFile.Core.DomStates));
        ui.ALinkStates = ALinkStates;
    })(ui = exports.ui || (exports.ui = {}));
});
