var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../00core/baseCol", "./BaseTree", "react"], function (require, exports, basecolFile, BaseTreeFile, React) {
    "use strict";
    var BaseColProps = basecolFile.Core.BaseColProps;
    var ui;
    (function (ui) {
        var BaseTreeSelectorAction = (function (_super) {
            __extends(BaseTreeSelectorAction, _super);
            function BaseTreeSelectorAction() {
                _super.apply(this, arguments);
            }
            return BaseTreeSelectorAction;
        }(BaseTreeFile.ui.BaseTreeAction));
        ui.BaseTreeSelectorAction = BaseTreeSelectorAction;
        var BaseTreeSelectorStates = (function (_super) {
            __extends(BaseTreeSelectorStates, _super);
            function BaseTreeSelectorStates() {
                _super.apply(this, arguments);
                this.ModalTop = 0;
            }
            return BaseTreeSelectorStates;
        }(BaseTreeFile.ui.BaseTreeStates));
        ui.BaseTreeSelectorStates = BaseTreeSelectorStates;
        var BaseTreeSelectorReact = (function (_super) {
            __extends(BaseTreeSelectorReact, _super);
            function BaseTreeSelectorReact() {
                _super.apply(this, arguments);
            }
            BaseTreeSelectorReact.prototype.fCloseFun = function () {
                this.props.Vm.IsChange = true;
                this.props.Vm.IsModalShow = false;
                this.forceUpdate();
            };
            BaseTreeSelectorReact.prototype.pSender = function () {
                //    var _content = ;
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT"}, React.createElement("input", {className: "form-control", value: this.props.Vm.Text, disabled: true}), React.createElement("span", {onClick: function (a) { _this.onButtonClick(); return false; }, className: "input-group-addon Hu-pointer"}, React.createElement("i", {className: "icon-external-link fa fa-external-link-square"})), React.createElement("div", {className: " Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto Hc-control-modal " + (this.props.Vm.IsModalShow ? "show" : "hide")}, React.createElement("div", {className: "Hm-modals Hg-relative Hg-default-top Hm-modals-shape Hs-fff"}, React.createElement("div", {className: "Hu-naiv"}, React.createElement("h3", {className: "Hu-modals-title pull-left"}, "请选择"), React.createElement("a", {className: "Hu-close Hu-pointer pull-right", onClick: function () { _this.fCloseFun(); }}, React.createElement("i", {className: " icon-remove fa fa-close"}))), this.initModalContent(_super.prototype.pSender.call(this))))));
            };
            BaseTreeSelectorReact.prototype.initModalContent = function (content) {
                return React.createElement("div", {className: "Hm-modals Hm-modals-content"}, React.createElement("div", {className: "Hc-modals-list"}, content));
            };
            ;
            BaseTreeSelectorReact.prototype.onButtonClick = function () {
                var _this = this;
                //  var __this = this;
                this.setState(function (s, p) {
                    _this.props.Vm.IsChange = true;
                    _this.props.Vm.IsModalShow = true;
                    var st = $(document).scrollTop(); //滚动条距顶部的距离    
                    var ch = $(window).height(); //屏幕的高度   
                    var objT = Number(st);
                    s.ModalTop = (Number(ch)) * 0.05;
                    return s;
                });
            };
            BaseTreeSelectorReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BaseTreeSelectorReact;
        }(BaseTreeFile.ui.BaseTreeReact));
        ui.BaseTreeSelectorReact = BaseTreeSelectorReact;
        var BaseTreeSelectorProps = (function (_super) {
            __extends(BaseTreeSelectorProps, _super);
            function BaseTreeSelectorProps() {
                _super.apply(this, arguments);
            }
            return BaseTreeSelectorProps;
        }(BaseColProps));
        ui.BaseTreeSelectorProps = BaseTreeSelectorProps;
        var BaseTreeSelectorVm = (function (_super) {
            __extends(BaseTreeSelectorVm, _super);
            function BaseTreeSelectorVm() {
                _super.apply(this, arguments);
                this.Text = "";
                this.IsModalShow = false;
            }
            return BaseTreeSelectorVm;
        }(BaseTreeFile.ui.BaseTreeVm));
        ui.BaseTreeSelectorVm = BaseTreeSelectorVm;
    })(ui = exports.ui || (exports.ui = {}));
});
