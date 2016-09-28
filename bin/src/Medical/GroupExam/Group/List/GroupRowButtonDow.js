var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../05tool/Button", "react"], function (require, exports, domFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var GroupRowButtonDow;
    (function (GroupRowButtonDow) {
        var GroupRowButtonDowAction = (function (_super) {
            __extends(GroupRowButtonDowAction, _super);
            function GroupRowButtonDowAction() {
                _super.apply(this, arguments);
            }
            return GroupRowButtonDowAction;
        }(domCore.DomAction));
        GroupRowButtonDow.GroupRowButtonDowAction = GroupRowButtonDowAction;
        var GroupRowButtonDowReact = (function (_super) {
            __extends(GroupRowButtonDowReact, _super);
            function GroupRowButtonDowReact() {
                _super.apply(this, arguments);
                this.state = new GroupRowButtonDowStates();
            }
            GroupRowButtonDowReact.prototype.pSender = function () {
                return React.createElement("tr", {className: this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}, React.createElement("td", {colSpan: "1000", className: "ACT-ROW-BUTTON well ButtonBar ta1"}, this.props.Vm.BtnList.map(function (btn) {
                    return btn.intoDom();
                })));
            };
            GroupRowButtonDowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupRowButtonDowReact;
        }(domCore.DomReact));
        GroupRowButtonDow.GroupRowButtonDowReact = GroupRowButtonDowReact;
        var GroupRowButtonDowVm = (function (_super) {
            __extends(GroupRowButtonDowVm, _super);
            function GroupRowButtonDowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupRowButtonDowReact;
                if (config) {
                    this.Row = config.Row;
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                    this.UniId = config.UniId;
                }
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
                    this.Row.RowButtonExpand.ExpandCustomFun = (function (vm) { _this.forceUpdate(""); });
                }
                this.BtnList.forEach(function (btn) {
                    btn.ClickFun = function (a) {
                        //this.emitAppEvent("medical/base/Group/rowbtnclick", this.UniId, a.Name, this.Row.RowData.FID);
                    };
                });
            }
            return GroupRowButtonDowVm;
        }(domCore.DomVm));
        GroupRowButtonDow.GroupRowButtonDowVm = GroupRowButtonDowVm;
        var GroupRowButtonDowStates = (function (_super) {
            __extends(GroupRowButtonDowStates, _super);
            function GroupRowButtonDowStates() {
                _super.apply(this, arguments);
            }
            return GroupRowButtonDowStates;
        }(domCore.DomStates));
        GroupRowButtonDow.GroupRowButtonDowStates = GroupRowButtonDowStates;
        var GroupRowButtonDowProps = (function (_super) {
            __extends(GroupRowButtonDowProps, _super);
            function GroupRowButtonDowProps() {
                _super.apply(this, arguments);
            }
            return GroupRowButtonDowProps;
        }(domCore.DomProps));
        GroupRowButtonDow.GroupRowButtonDowProps = GroupRowButtonDowProps;
    })(GroupRowButtonDow = exports.GroupRowButtonDow || (exports.GroupRowButtonDow = {}));
});
