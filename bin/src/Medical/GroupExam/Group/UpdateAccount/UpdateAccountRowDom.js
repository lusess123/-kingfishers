var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./UpdateAccountMasterRowDom"], function (require, exports, React, domFile, masterRowFile) {
    "use strict";
    var domCore = domFile.Core;
    var UpdateAccountRowDom;
    (function (UpdateAccountRowDom) {
        var UpdateAccountRowDomAction = (function (_super) {
            __extends(UpdateAccountRowDomAction, _super);
            function UpdateAccountRowDomAction() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomAction;
        }(domCore.DomAction));
        UpdateAccountRowDom.UpdateAccountRowDomAction = UpdateAccountRowDomAction;
        var UpdateAccountRowDomReact = (function (_super) {
            __extends(UpdateAccountRowDomReact, _super);
            function UpdateAccountRowDomReact() {
                _super.apply(this, arguments);
                this.state = new UpdateAccountRowDomStates();
            }
            UpdateAccountRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            UpdateAccountRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return UpdateAccountRowDomReact;
        }(domCore.DomReact));
        UpdateAccountRowDom.UpdateAccountRowDomReact = UpdateAccountRowDomReact;
        var UpdateAccountRowDomVm = (function (_super) {
            __extends(UpdateAccountRowDomVm, _super);
            function UpdateAccountRowDomVm(config) {
                _super.call(this);
                this.ReactType = UpdateAccountRowDomReact;
                if (config) {
                    var config1 = { Data: config.Data, BatchId: config.BatchId };
                    this.MasterRow = new masterRowFile.UpdateAccountRowDom.UpdateAccountRowDomVm(config1);
                }
            }
            return UpdateAccountRowDomVm;
        }(domCore.DomVm));
        UpdateAccountRowDom.UpdateAccountRowDomVm = UpdateAccountRowDomVm;
        var UpdateAccountRowDomStates = (function (_super) {
            __extends(UpdateAccountRowDomStates, _super);
            function UpdateAccountRowDomStates() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomStates;
        }(domCore.DomStates));
        UpdateAccountRowDom.UpdateAccountRowDomStates = UpdateAccountRowDomStates;
        var UpdateAccountRowDomProps = (function (_super) {
            __extends(UpdateAccountRowDomProps, _super);
            function UpdateAccountRowDomProps() {
                _super.apply(this, arguments);
            }
            return UpdateAccountRowDomProps;
        }(domCore.DomProps));
        UpdateAccountRowDom.UpdateAccountRowDomProps = UpdateAccountRowDomProps;
    })(UpdateAccountRowDom = exports.UpdateAccountRowDom || (exports.UpdateAccountRowDom = {}));
});
