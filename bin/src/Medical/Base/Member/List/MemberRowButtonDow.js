var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var MemberRowButtonDow;
    (function (MemberRowButtonDow) {
        var MemberRowButtonDowAction = (function (_super) {
            __extends(MemberRowButtonDowAction, _super);
            function MemberRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return MemberRowButtonDowAction;
        }(domCore.DomAction));
        MemberRowButtonDow.MemberRowButtonDowAction = MemberRowButtonDowAction;
        var MemberRowButtonDowReact = (function (_super) {
            __extends(MemberRowButtonDowReact, _super);
            function MemberRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new MemberRowButtonDowStates();
            }
            MemberRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            MemberRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberRowButtonDowReact;
        }(domCore.DomReact));
        MemberRowButtonDow.MemberRowButtonDowReact = MemberRowButtonDowReact;
        var MemberRowButtonDowVm = (function (_super) {
            __extends(MemberRowButtonDowVm, _super);
            function MemberRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MemberRowButtonDowReact;
                this.BtnList = new Array();
                var btnVm1 = new buttonFile.ui.ButtonVm();
                btnVm1.DisplayName = "删除";
                btnVm1.IsNoBg = true;
                btnVm1.IconCss = "trash";
                btnVm1.Name = "del";
                var btnVm2 = new buttonFile.ui.ButtonVm();
                btnVm2.DisplayName = "详情";
                btnVm2.IsNoBg = true;
                btnVm2.IconCss = "table";
                btnVm2.Name = "view";
                var btnVm3 = new buttonFile.ui.ButtonVm();
                btnVm3.DisplayName = "编辑";
                btnVm3.IsNoBg = true;
                btnVm3.IconCss = "edit";
                btnVm3.Name = "update";
                this.BtnList.push(btnVm1);
                this.BtnList.push(btnVm2);
                this.BtnList.push(btnVm3);
                if (config) {
                    this.Row = config.Row;
                    this.UniId = config.UniId;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        _this.emitAppEvent("medical/base/member/rowbtnclick", _this.UniId, a.Name, _this.Row.RowData.FID);
                    };
                });
            }
            return MemberRowButtonDowVm;
        }(domCore.DomVm));
        MemberRowButtonDow.MemberRowButtonDowVm = MemberRowButtonDowVm;
        var MemberRowButtonDowStates = (function (_super) {
            __extends(MemberRowButtonDowStates, _super);
            function MemberRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return MemberRowButtonDowStates;
        }(domCore.DomStates));
        MemberRowButtonDow.MemberRowButtonDowStates = MemberRowButtonDowStates;
        var MemberRowButtonDowProps = (function (_super) {
            __extends(MemberRowButtonDowProps, _super);
            function MemberRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return MemberRowButtonDowProps;
        }(domCore.DomProps));
        MemberRowButtonDow.MemberRowButtonDowProps = MemberRowButtonDowProps;
    })(MemberRowButtonDow = exports.MemberRowButtonDow || (exports.MemberRowButtonDow = {}));
});
