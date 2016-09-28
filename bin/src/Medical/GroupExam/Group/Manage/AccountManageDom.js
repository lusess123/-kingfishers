var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./AccountTable"], function (require, exports, domFile, React, AccountTableFile) {
    "use strict";
    var domCore = domFile.Core;
    var AccountManageDom;
    (function (AccountManageDom) {
        var AccountManageDomAction = (function (_super) {
            __extends(AccountManageDomAction, _super);
            function AccountManageDomAction() {
                _super.apply(this, arguments);
            }
            return AccountManageDomAction;
        }(domCore.DomAction));
        AccountManageDom.AccountManageDomAction = AccountManageDomAction;
        var AccountManageDomReact = (function (_super) {
            __extends(AccountManageDomReact, _super);
            function AccountManageDomReact() {
                _super.apply(this, arguments);
                this.state = new AccountManageDomStates();
            }
            AccountManageDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.AccountTableFile.intoDom());
            };
            AccountManageDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AccountManageDomReact;
        }(domCore.DomReact));
        AccountManageDom.AccountManageDomReact = AccountManageDomReact;
        var AccountManageDomVm = (function (_super) {
            __extends(AccountManageDomVm, _super);
            function AccountManageDomVm(config) {
                _super.call(this);
                this.ReactType = AccountManageDomReact;
                if (config) {
                    var config1 = { Data: config.Data, Unild: config.UniId, BatchId: config.BatchId };
                    this.AccountTableFile = new AccountTableFile.AccountTable.AccountTableVm(config1);
                }
            }
            return AccountManageDomVm;
        }(domCore.DomVm));
        AccountManageDom.AccountManageDomVm = AccountManageDomVm;
        var AccountManageDomStates = (function (_super) {
            __extends(AccountManageDomStates, _super);
            function AccountManageDomStates() {
                _super.apply(this, arguments);
            }
            return AccountManageDomStates;
        }(domCore.DomStates));
        AccountManageDom.AccountManageDomStates = AccountManageDomStates;
        var AccountManageDomProps = (function (_super) {
            __extends(AccountManageDomProps, _super);
            function AccountManageDomProps() {
                _super.apply(this, arguments);
            }
            return AccountManageDomProps;
        }(domCore.DomProps));
        AccountManageDom.AccountManageDomProps = AccountManageDomProps;
    })(AccountManageDom = exports.AccountManageDom || (exports.AccountManageDom = {}));
});
