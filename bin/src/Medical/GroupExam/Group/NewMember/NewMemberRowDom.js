var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./NewMemberMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var NewMemberRowDom;
    (function (NewMemberRowDom) {
        var NewMemberRowDomAction = (function (_super) {
            __extends(NewMemberRowDomAction, _super);
            function NewMemberRowDomAction() {
                _super.apply(this, arguments);
            }
            return NewMemberRowDomAction;
        }(domCore.DomAction));
        NewMemberRowDom.NewMemberRowDomAction = NewMemberRowDomAction;
        var NewMemberRowDomReact = (function (_super) {
            __extends(NewMemberRowDomReact, _super);
            function NewMemberRowDomReact() {
                _super.apply(this, arguments);
                this.state = new NewMemberRowDomStates();
            }
            NewMemberRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            NewMemberRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return NewMemberRowDomReact;
        }(domCore.DomReact));
        NewMemberRowDom.NewMemberRowDomReact = NewMemberRowDomReact;
        var NewMemberRowDomVm = (function (_super) {
            __extends(NewMemberRowDomVm, _super);
            function NewMemberRowDomVm(config) {
                _super.call(this);
                this.ReactType = NewMemberRowDomReact;
                if (config) {
                    var config1 = { selectId: config.selectId, batchId: config.batchId };
                    this.MasterRow = new masterRowFile.NewMemberMasterRowDom.NewMemberMasterRowDomVm(config1);
                }
            }
            return NewMemberRowDomVm;
        }(domCore.DomVm));
        NewMemberRowDom.NewMemberRowDomVm = NewMemberRowDomVm;
        var NewMemberRowDomStates = (function (_super) {
            __extends(NewMemberRowDomStates, _super);
            function NewMemberRowDomStates() {
                _super.apply(this, arguments);
            }
            return NewMemberRowDomStates;
        }(domCore.DomStates));
        NewMemberRowDom.NewMemberRowDomStates = NewMemberRowDomStates;
        var NewMemberRowDomProps = (function (_super) {
            __extends(NewMemberRowDomProps, _super);
            function NewMemberRowDomProps() {
                _super.apply(this, arguments);
            }
            return NewMemberRowDomProps;
        }(domCore.DomProps));
        NewMemberRowDom.NewMemberRowDomProps = NewMemberRowDomProps;
    })(NewMemberRowDom = exports.NewMemberRowDom || (exports.NewMemberRowDom = {}));
});
