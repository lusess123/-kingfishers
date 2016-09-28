var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./NewGroupNewMaster"], function (require, exports, domFile, React, groupInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var NewGroupNewRow;
    (function (NewGroupNewRow) {
        var NewGroupNewRowAction = (function (_super) {
            __extends(NewGroupNewRowAction, _super);
            function NewGroupNewRowAction() {
                _super.apply(this, arguments);
            }
            return NewGroupNewRowAction;
        }(domCore.DomAction));
        NewGroupNewRow.NewGroupNewRowAction = NewGroupNewRowAction;
        var NewGroupNewRowReact = (function (_super) {
            __extends(NewGroupNewRowReact, _super);
            function NewGroupNewRowReact() {
                _super.apply(this, arguments);
                this.state = new NewGroupNewRowStates();
            }
            NewGroupNewRowReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            NewGroupNewRowReact.prototype.pSender = function () {
                return (React.createElement("div", null, this.props.Vm.GroupMasterObj.intoDom()));
            };
            NewGroupNewRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewGroupNewRowReact;
        }(domCore.DomReact));
        NewGroupNewRow.NewGroupNewRowReact = NewGroupNewRowReact;
        var NewGroupNewRowVm = (function (_super) {
            __extends(NewGroupNewRowVm, _super);
            function NewGroupNewRowVm() {
                _super.call(this);
                this.ReactType = NewGroupNewRowReact;
                this.GroupMasterObj = new groupInsertRowFile.Right.NewGroupNewMasterVm();
            }
            return NewGroupNewRowVm;
        }(domCore.DomVm));
        NewGroupNewRow.NewGroupNewRowVm = NewGroupNewRowVm;
        var NewGroupNewRowStates = (function (_super) {
            __extends(NewGroupNewRowStates, _super);
            function NewGroupNewRowStates() {
                _super.apply(this, arguments);
            }
            return NewGroupNewRowStates;
        }(domCore.DomStates));
        NewGroupNewRow.NewGroupNewRowStates = NewGroupNewRowStates;
        var NewGroupNewRowProps = (function (_super) {
            __extends(NewGroupNewRowProps, _super);
            function NewGroupNewRowProps() {
                _super.apply(this, arguments);
            }
            return NewGroupNewRowProps;
        }(domCore.DomProps));
        NewGroupNewRow.NewGroupNewRowProps = NewGroupNewRowProps;
    })(NewGroupNewRow = exports.NewGroupNewRow || (exports.NewGroupNewRow = {}));
});
