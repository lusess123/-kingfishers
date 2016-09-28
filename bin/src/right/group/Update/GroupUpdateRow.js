var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/03selector/TreeSelector", "./GroupUpdateMaster"], function (require, exports, domFile, React, treeSelectorFile, groupInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupUpdateRow;
    (function (GroupUpdateRow) {
        var GroupUpdateRowAction = (function (_super) {
            __extends(GroupUpdateRowAction, _super);
            function GroupUpdateRowAction() {
                _super.apply(this, arguments);
            }
            return GroupUpdateRowAction;
        }(domCore.DomAction));
        GroupUpdateRow.GroupUpdateRowAction = GroupUpdateRowAction;
        var GroupUpdateRowReact = (function (_super) {
            __extends(GroupUpdateRowReact, _super);
            function GroupUpdateRowReact() {
                _super.apply(this, arguments);
                this.state = new GroupUpdateRowStates();
            }
            GroupUpdateRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            GroupUpdateRowReact.prototype.fun_masterTitleClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            GroupUpdateRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer", onClick: function () { _this.fun_masterTitleClick(); }}, this.props.Vm.Index + 1, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down")})), React.createElement("div", {className: this.props.Vm.IsMasterHide ? "hide" : ""}, this.props.Vm.GroupMasterObj.intoDom()));
            };
            GroupUpdateRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupUpdateRowReact;
        }(domCore.DomReact));
        GroupUpdateRow.GroupUpdateRowReact = GroupUpdateRowReact;
        var GroupUpdateRowVm = (function (_super) {
            __extends(GroupUpdateRowVm, _super);
            function GroupUpdateRowVm() {
                _super.call(this);
                this.ReactType = GroupUpdateRowReact;
                this.GroupMasterObj = new groupInsertRowFile.Right.GroupUpdateMasterVm();
                this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
                this.GroupData = { GroupID: "", FParentFID: "", GroupName: "", GroupCode: "", FPhone: "", GroupDescrible: "", FAddress: "", Fax: "", Post: "", FParentFName: "" };
            }
            return GroupUpdateRowVm;
        }(domCore.DomVm));
        GroupUpdateRow.GroupUpdateRowVm = GroupUpdateRowVm;
        var GroupUpdateRowStates = (function (_super) {
            __extends(GroupUpdateRowStates, _super);
            function GroupUpdateRowStates() {
                _super.apply(this, arguments);
            }
            return GroupUpdateRowStates;
        }(domCore.DomStates));
        GroupUpdateRow.GroupUpdateRowStates = GroupUpdateRowStates;
        var GroupUpdateRowProps = (function (_super) {
            __extends(GroupUpdateRowProps, _super);
            function GroupUpdateRowProps() {
                _super.apply(this, arguments);
            }
            return GroupUpdateRowProps;
        }(domCore.DomProps));
        GroupUpdateRow.GroupUpdateRowProps = GroupUpdateRowProps;
    })(GroupUpdateRow = exports.GroupUpdateRow || (exports.GroupUpdateRow = {}));
});
