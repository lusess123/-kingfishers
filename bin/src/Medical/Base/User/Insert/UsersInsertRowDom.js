var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UsersInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var UsersInsertRowDom;
    (function (UsersInsertRowDom) {
        var UsersInsertRowDomAction = (function (_super) {
            __extends(UsersInsertRowDomAction, _super);
            function UsersInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return UsersInsertRowDomAction;
        }(domCore.DomAction));
        UsersInsertRowDom.UsersInsertRowDomAction = UsersInsertRowDomAction;
        var UsersInsertRowDomReact = (function (_super) {
            __extends(UsersInsertRowDomReact, _super);
            function UsersInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UsersInsertRowDomStates();
            }
            UsersInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            UsersInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            UsersInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UsersInsertRowDomReact;
        }(domCore.DomReact));
        UsersInsertRowDom.UsersInsertRowDomReact = UsersInsertRowDomReact;
        var UsersInsertRowDomVm = (function (_super) {
            __extends(UsersInsertRowDomVm, _super);
            function UsersInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = UsersInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.UsersInsertMasterRowDom.UsersInsertMasterRowDomVm();
            }
            return UsersInsertRowDomVm;
        }(domCore.DomVm));
        UsersInsertRowDom.UsersInsertRowDomVm = UsersInsertRowDomVm;
        var UsersInsertRowDomStates = (function (_super) {
            __extends(UsersInsertRowDomStates, _super);
            function UsersInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return UsersInsertRowDomStates;
        }(domCore.DomStates));
        UsersInsertRowDom.UsersInsertRowDomStates = UsersInsertRowDomStates;
        var UsersInsertRowDomProps = (function (_super) {
            __extends(UsersInsertRowDomProps, _super);
            function UsersInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return UsersInsertRowDomProps;
        }(domCore.DomProps));
        UsersInsertRowDom.UsersInsertRowDomProps = UsersInsertRowDomProps;
    })(UsersInsertRowDom = exports.UsersInsertRowDom || (exports.UsersInsertRowDom = {}));
});
