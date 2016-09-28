var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./GroupNewMaster"], function (require, exports, domFile, React, groupInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupNewRow;
    (function (GroupNewRow) {
        var GroupNewRowAction = (function (_super) {
            __extends(GroupNewRowAction, _super);
            function GroupNewRowAction() {
                _super.apply(this, arguments);
            }
            return GroupNewRowAction;
        }(domCore.DomAction));
        GroupNewRow.GroupNewRowAction = GroupNewRowAction;
        var GroupNewRowReact = (function (_super) {
            __extends(GroupNewRowReact, _super);
            function GroupNewRowReact() {
                _super.apply(this, arguments);
                this.state = new GroupNewRowStates();
            }
            GroupNewRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            GroupNewRowReact.prototype.pSender = function () {
                return (React.createElement("div", null, this.props.Vm.GroupMasterObj.intoDom()));
            };
            GroupNewRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupNewRowReact;
        }(domCore.DomReact));
        GroupNewRow.GroupNewRowReact = GroupNewRowReact;
        var GroupNewRowVm = (function (_super) {
            __extends(GroupNewRowVm, _super);
            function GroupNewRowVm() {
                _super.call(this);
                this.ReactType = GroupNewRowReact;
                this.GroupMasterObj = new groupInsertRowFile.Right.GroupNewMasterVm();
            }
            return GroupNewRowVm;
        }(domCore.DomVm));
        GroupNewRow.GroupNewRowVm = GroupNewRowVm;
        var GroupNewRowStates = (function (_super) {
            __extends(GroupNewRowStates, _super);
            function GroupNewRowStates() {
                _super.apply(this, arguments);
            }
            return GroupNewRowStates;
        }(domCore.DomStates));
        GroupNewRow.GroupNewRowStates = GroupNewRowStates;
        var GroupNewRowProps = (function (_super) {
            __extends(GroupNewRowProps, _super);
            function GroupNewRowProps() {
                _super.apply(this, arguments);
            }
            return GroupNewRowProps;
        }(domCore.DomProps));
        GroupNewRow.GroupNewRowProps = GroupNewRowProps;
    })(GroupNewRow = exports.GroupNewRow || (exports.GroupNewRow = {}));
});
