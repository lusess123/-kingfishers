var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../Base/BaseColumn", "./../../01core/0Dom", "./../../01core/Ioc", "react"], function (require, exports, baseColumn, domFile, iocFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var NormalColumnAction = (function (_super) {
            __extends(NormalColumnAction, _super);
            function NormalColumnAction() {
                _super.apply(this, arguments);
            }
            return NormalColumnAction;
        }(domFile.Core.DomAction));
        ui.NormalColumnAction = NormalColumnAction;
        var NormalColumnReact = (function (_super) {
            __extends(NormalColumnReact, _super);
            function NormalColumnReact() {
                _super.apply(this, arguments);
            }
            NormalColumnReact.prototype.pSender = function () {
                // try {
                var _hide = this.props.Vm.ColumnConfig.ControlType == "Hidden" ? "hide" : "";
                return React.createElement("div", {key: this.props.Vm.key, className: "col-lg-" + this.props.Vm.getFormColumnsCols() + " col-sm-12 col-xs-12 Hu-dashed-line " + _hide, "data-act-post": this.props.Vm.SubmitSign}, React.createElement("div", {className: "Hu-label Hu-pull-left"}, React.createElement("label", null, this.props.Vm.ColumnConfig.DisplayName + " : ")), React.createElement("div", {className: "Hu-input Hu-pull-right"}, React.createElement("div", null, this.props.Vm.ControlObj.intoDom())));
            };
            return NormalColumnReact;
        }(baseColumn.ui.BaseColumnReact));
        ui.NormalColumnReact = NormalColumnReact;
        var NormalColumnVm = (function (_super) {
            __extends(NormalColumnVm, _super);
            function NormalColumnVm() {
                _super.apply(this, arguments);
                this.ReactType = NormalColumnReact;
                this.pRegName = "NormalColumn";
            }
            NormalColumnVm.prototype.getFormColumnsCols = function () {
                return this.getColumnsCols(this.ColumnNum);
            };
            NormalColumnVm.prototype.getColumnsCols = function (num) {
                if (!num)
                    num = 4;
                if (num == 4) {
                    switch (this.ColumnConfig.ShowType) {
                        //case 0:
                        //    return 12;
                        case 1:
                            return 3;
                        case 2:
                            return 6;
                        case 3:
                            return 8;
                        default:
                            return 12;
                    }
                }
                else {
                    if (num == 2) {
                        switch (this.ColumnConfig.ShowType) {
                            //case 0:
                            //    return 12;
                            case 1:
                                return 6;
                            case 2:
                                return 6;
                            case 3:
                                return 12;
                            default:
                                return 12;
                        }
                    }
                    else {
                        if (num == 3) {
                            switch (this.ColumnConfig.ShowType) {
                                //case 0:
                                //    return 12;
                                case 1:
                                    return 4;
                                case 2:
                                    return 8;
                                case 3:
                                    return 12;
                                default:
                                    return 12;
                            }
                        }
                    }
                }
            };
            return NormalColumnVm;
        }(baseColumn.ui.BaseColumnVm));
        ui.NormalColumnVm = NormalColumnVm;
        var NormalColumnProps = (function (_super) {
            __extends(NormalColumnProps, _super);
            function NormalColumnProps() {
                _super.apply(this, arguments);
            }
            return NormalColumnProps;
        }(baseColumn.ui.BaseColumnProps));
        ui.NormalColumnProps = NormalColumnProps;
        var NormalColumnStates = (function (_super) {
            __extends(NormalColumnStates, _super);
            function NormalColumnStates() {
                _super.apply(this, arguments);
            }
            return NormalColumnStates;
        }(baseColumn.ui.BaseColumnStates));
        ui.NormalColumnStates = NormalColumnStates;
        iocFile.Core.Ioc.Current().RegisterType("Normal", baseColumn.ui.BaseColumnVm, NormalColumnVm);
    })(ui = exports.ui || (exports.ui = {}));
});
