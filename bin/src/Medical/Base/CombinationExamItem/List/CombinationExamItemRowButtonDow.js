var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "./CombinationExamItemListPage", "react"], function (require, exports, domFile, buttonFile, listFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var CombinationExamItemRowButtonDow;
    (function (CombinationExamItemRowButtonDow) {
        var CombinationExamItemRowButtonDowAction = (function (_super) {
            __extends(CombinationExamItemRowButtonDowAction, _super);
            function CombinationExamItemRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemRowButtonDowAction;
        }(domCore.DomAction));
        CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowAction = CombinationExamItemRowButtonDowAction;
        var CombinationExamItemRowButtonDowReact = (function (_super) {
            __extends(CombinationExamItemRowButtonDowReact, _super);
            function CombinationExamItemRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new CombinationExamItemRowButtonDowStates();
            }
            CombinationExamItemRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            CombinationExamItemRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return CombinationExamItemRowButtonDowReact;
        }(domCore.DomReact));
        CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowReact = CombinationExamItemRowButtonDowReact;
        var CombinationExamItemRowButtonDowVm = (function (_super) {
            __extends(CombinationExamItemRowButtonDowVm, _super);
            function CombinationExamItemRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = CombinationExamItemRowButtonDowReact;
                this.ListObj = new listFile.CombinationExamItemListPage.CombinationExamItemListPageVm();
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.IsNoBg = true;
                btnVm1.IconCss = "trash";
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "详情";
                btnVm2.IsNoBg = true;
                btnVm2.IconCss = "table";
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "编辑";
                btnVm3.IsNoBg = true;
                btnVm3.IconCss = "edit";
                this.BtnList.push(btnVm1);
                this.BtnList.push(btnVm2);
                this.BtnList.push(btnVm3);
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        var option = "";
                        if (btn.DisplayName == "删除") {
                            option = "delOpt";
                        }
                        else if (btn.DisplayName == "编辑") {
                            option = "updateOpt";
                        }
                        else {
                            option = "viewOpt";
                        }
                        _this.buttonClickFun(option);
                    };
                });
            }
            CombinationExamItemRowButtonDowVm.prototype.buttonClickFun = function (name) {
                this.ListObj[name](this.Row.RowData.FID);
            };
            return CombinationExamItemRowButtonDowVm;
        }(domCore.DomVm));
        CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowVm = CombinationExamItemRowButtonDowVm;
        var CombinationExamItemRowButtonDowStates = (function (_super) {
            __extends(CombinationExamItemRowButtonDowStates, _super);
            function CombinationExamItemRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemRowButtonDowStates;
        }(domCore.DomStates));
        CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowStates = CombinationExamItemRowButtonDowStates;
        var CombinationExamItemRowButtonDowProps = (function (_super) {
            __extends(CombinationExamItemRowButtonDowProps, _super);
            function CombinationExamItemRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return CombinationExamItemRowButtonDowProps;
        }(domCore.DomProps));
        CombinationExamItemRowButtonDow.CombinationExamItemRowButtonDowProps = CombinationExamItemRowButtonDowProps;
    })(CombinationExamItemRowButtonDow = exports.CombinationExamItemRowButtonDow || (exports.CombinationExamItemRowButtonDow = {}));
});
