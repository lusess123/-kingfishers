var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./UserInsertRow"], function (require, exports, domFile, React, userInsertRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UserRow;
    (function (UserRow) {
        var UserRowAction = (function (_super) {
            __extends(UserRowAction, _super);
            function UserRowAction() {
                _super.apply(this, arguments);
            }
            return UserRowAction;
        }(domCore.DomAction));
        UserRow.UserRowAction = UserRowAction;
        var UserRowReact = (function (_super) {
            __extends(UserRowReact, _super);
            function UserRowReact() {
                _super.apply(this, arguments);
                this.state = new UserRowStates();
            }
            UserRowReact.prototype.pSender = function () {
                return (React.createElement("div", null, this.props.Vm.UserInsertRow.intoDom()));
            };
            UserRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UserRowReact;
        }(domCore.DomReact));
        UserRow.UserRowReact = UserRowReact;
        var UserRowVm = (function (_super) {
            __extends(UserRowVm, _super);
            function UserRowVm(config) {
                _super.call(this);
                this.ReactType = UserRowReact;
                if (config) {
                    if (config.UserInsertRow) {
                        this.UserInsertRow = new userInsertRowFile.UserInsertRow.UserInsertRowVm(config.UserInsertRow);
                    }
                }
            }
            return UserRowVm;
        }(domCore.DomVm));
        UserRow.UserRowVm = UserRowVm;
        var UserRowStates = (function (_super) {
            __extends(UserRowStates, _super);
            function UserRowStates() {
                _super.apply(this, arguments);
            }
            return UserRowStates;
        }(domCore.DomStates));
        UserRow.UserRowStates = UserRowStates;
        var UserRowProps = (function (_super) {
            __extends(UserRowProps, _super);
            function UserRowProps() {
                _super.apply(this, arguments);
            }
            return UserRowProps;
        }(domCore.DomProps));
        UserRow.UserRowProps = UserRowProps;
    })(UserRow = exports.UserRow || (exports.UserRow = {}));
});
