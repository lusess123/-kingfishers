var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../02col/00core/baseCol", "react"], function (require, exports, domFile, basecolFile, React) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var ui;
    (function (ui) {
        var BaseColumnAction = (function (_super) {
            __extends(BaseColumnAction, _super);
            function BaseColumnAction() {
                _super.apply(this, arguments);
            }
            return BaseColumnAction;
        }(BaseColAction));
        ui.BaseColumnAction = BaseColumnAction;
        var BaseColumnReact = (function (_super) {
            __extends(BaseColumnReact, _super);
            function BaseColumnReact() {
                _super.apply(this, arguments);
            }
            BaseColumnReact.prototype.pGetErrorName = function () {
                return this.props.Vm.ColumnConfig.DisplayName + " 【" + this.props.Vm.ColumnConfig.Name + "】 \r\n" + _super.prototype.pGetErrorName.call(this) + "\r\n";
            };
            BaseColumnReact.prototype.pSender = function () {
                // try {
                var _hide = this.props.Vm.ColumnConfig.ControlType == "Hidden" ? "hide" : "";
                return React.createElement("div", {key: this.props.Vm.key, className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line acs-label-block" + _hide, "data-act-post": this.props.Vm.SubmitSign}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", null)), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", null, this.props.Vm.ControlObj.intoDom())));
            };
            return BaseColumnReact;
        }(domFile.Core.DomReact));
        ui.BaseColumnReact = BaseColumnReact;
        var BaseColumnVm = (function (_super) {
            __extends(BaseColumnVm, _super);
            function BaseColumnVm() {
                _super.apply(this, arguments);
                this.ColumnNum = 4;
                this.pRegName = "BaseColumn";
            }
            BaseColumnVm.prototype.link = function () {
                var _this = this;
                if (this.ControlObj) {
                    this.ControlObj.getEmit().addListener("BaseColVm_change", function () {
                        _this.getEmit().emit("BaseColumnVm_change", _this);
                    });
                }
            };
            return BaseColumnVm;
        }(BaseColVm));
        ui.BaseColumnVm = BaseColumnVm;
        var BaseColumnProps = (function (_super) {
            __extends(BaseColumnProps, _super);
            function BaseColumnProps() {
                _super.apply(this, arguments);
            }
            return BaseColumnProps;
        }(BaseColProps));
        ui.BaseColumnProps = BaseColumnProps;
        var BaseColumnStates = (function (_super) {
            __extends(BaseColumnStates, _super);
            function BaseColumnStates() {
                _super.apply(this, arguments);
            }
            return BaseColumnStates;
        }(BaseColStates));
        ui.BaseColumnStates = BaseColumnStates;
    })(ui = exports.ui || (exports.ui = {}));
});
