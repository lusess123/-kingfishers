var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var AuthorizeObjectDetailDom;
    (function (AuthorizeObjectDetailDom) {
        var AuthorizeObjectDetailDomAction = (function (_super) {
            __extends(AuthorizeObjectDetailDomAction, _super);
            function AuthorizeObjectDetailDomAction() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDetailDomAction;
        }(domCore.DomAction));
        AuthorizeObjectDetailDom.AuthorizeObjectDetailDomAction = AuthorizeObjectDetailDomAction;
        var AuthorizeObjectDetailDomReact = (function (_super) {
            __extends(AuthorizeObjectDetailDomReact, _super);
            function AuthorizeObjectDetailDomReact() {
                _super.apply(this, arguments);
                this.state = new AuthorizeObjectDetailDomStates();
            }
            AuthorizeObjectDetailDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initContent());
            };
            AuthorizeObjectDetailDomReact.prototype._initContent = function () {
                return React.createElement("div", null, React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "授权对象")), React.createElement("div", null, this.props.Vm.SelectedUserList.map(function (a) {
                    return React.createElement("span", null, a.DisplayName);
                })));
            };
            AuthorizeObjectDetailDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AuthorizeObjectDetailDomReact;
        }(domCore.DomReact));
        AuthorizeObjectDetailDom.AuthorizeObjectDetailDomReact = AuthorizeObjectDetailDomReact;
        var AuthorizeObjectDetailDomVm = (function (_super) {
            __extends(AuthorizeObjectDetailDomVm, _super);
            function AuthorizeObjectDetailDomVm(config) {
                _super.call(this);
                this.ReactType = AuthorizeObjectDetailDomReact;
                this.ColVmObjList = {};
                this.SelectedUserList = [];
                var selectorDomObjConfig = {};
                if (config) {
                    this.UniId = config.UniId;
                    selectorDomObjConfig = { UserSelectorData: config.UserSelectorData, UniId: this.UniId };
                }
            }
            AuthorizeObjectDetailDomVm.prototype.init = function (config) {
                if (config.SelectedUserList) {
                    this.SelectedUserList = config.SelectedUserList;
                }
            };
            return AuthorizeObjectDetailDomVm;
        }(domCore.DomVm));
        AuthorizeObjectDetailDom.AuthorizeObjectDetailDomVm = AuthorizeObjectDetailDomVm;
        var AuthorizeObjectDetailDomStates = (function (_super) {
            __extends(AuthorizeObjectDetailDomStates, _super);
            function AuthorizeObjectDetailDomStates() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDetailDomStates;
        }(domCore.DomStates));
        AuthorizeObjectDetailDom.AuthorizeObjectDetailDomStates = AuthorizeObjectDetailDomStates;
        var AuthorizeObjectDetailDomProps = (function (_super) {
            __extends(AuthorizeObjectDetailDomProps, _super);
            function AuthorizeObjectDetailDomProps() {
                _super.apply(this, arguments);
            }
            return AuthorizeObjectDetailDomProps;
        }(domCore.DomProps));
        AuthorizeObjectDetailDom.AuthorizeObjectDetailDomProps = AuthorizeObjectDetailDomProps;
    })(AuthorizeObjectDetailDom = exports.AuthorizeObjectDetailDom || (exports.AuthorizeObjectDetailDom = {}));
});
