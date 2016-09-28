var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "classnames"], function (require, exports, domFile, React, classnames_1) {
    "use strict";
    var domCore = domFile.Core;
    var ColFiterIDomItem;
    (function (ColFiterIDomItem) {
        var ColFiterIDomItemAction = (function (_super) {
            __extends(ColFiterIDomItemAction, _super);
            function ColFiterIDomItemAction() {
                _super.apply(this, arguments);
            }
            return ColFiterIDomItemAction;
        }(domCore.DomAction));
        ColFiterIDomItem.ColFiterIDomItemAction = ColFiterIDomItemAction;
        var ColFiterIDomItemReact = (function (_super) {
            __extends(ColFiterIDomItemReact, _super);
            function ColFiterIDomItemReact() {
                _super.apply(this, arguments);
                this.state = new ColFiterIDomItemStates();
            }
            ColFiterIDomItemReact.prototype.fLiClickFun = function () {
                this.props.Vm.checkLi();
                this.forceUpdate();
            };
            ColFiterIDomItemReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("li", {key: this.props.Vm.key, onClick: function () { _this.fLiClickFun(); }, className: classnames_1["default"]("nav-item Hu-pointer ", (!this.props.Vm.IsNoCheck ? "Hz-checked" : "selected-del"))}, this.props.Vm.Text);
            };
            ColFiterIDomItemReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ColFiterIDomItemReact;
        }(domCore.DomReact));
        ColFiterIDomItem.ColFiterIDomItemReact = ColFiterIDomItemReact;
        var ColFiterIDomItemVm = (function (_super) {
            __extends(ColFiterIDomItemVm, _super);
            function ColFiterIDomItemVm(config) {
                _super.call(this);
                this.ReactType = ColFiterIDomItemReact;
                if (config) {
                    this.Text = config.Text;
                    this.Name = config.Name;
                    this.IsNoCheck = config.IsNoCheck;
                    this.UniId = config.UniId;
                }
            }
            ColFiterIDomItemVm.prototype.checkLi = function () {
                this.IsNoCheck = !this.IsNoCheck;
                this.emitAppEvent("clickLi-check", this.UniId, this.Name, this.IsNoCheck);
            };
            return ColFiterIDomItemVm;
        }(domCore.DomVm));
        ColFiterIDomItem.ColFiterIDomItemVm = ColFiterIDomItemVm;
        var ColFiterIDomItemStates = (function (_super) {
            __extends(ColFiterIDomItemStates, _super);
            function ColFiterIDomItemStates() {
                _super.apply(this, arguments);
            }
            return ColFiterIDomItemStates;
        }(domCore.DomStates));
        ColFiterIDomItem.ColFiterIDomItemStates = ColFiterIDomItemStates;
        var ColFiterIDomItemProps = (function (_super) {
            __extends(ColFiterIDomItemProps, _super);
            function ColFiterIDomItemProps() {
                _super.apply(this, arguments);
            }
            return ColFiterIDomItemProps;
        }(domCore.DomProps));
        ColFiterIDomItem.ColFiterIDomItemProps = ColFiterIDomItemProps;
    })(ColFiterIDomItem = exports.ColFiterIDomItem || (exports.ColFiterIDomItem = {}));
});
