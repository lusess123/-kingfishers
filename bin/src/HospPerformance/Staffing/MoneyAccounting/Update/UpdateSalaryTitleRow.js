var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var UpdateSalaryTitleRow;
    (function (UpdateSalaryTitleRow) {
        var UpdateSalaryTitleRowAction = (function (_super) {
            __extends(UpdateSalaryTitleRowAction, _super);
            function UpdateSalaryTitleRowAction() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryTitleRowAction;
        }(domCore.DomAction));
        UpdateSalaryTitleRow.UpdateSalaryTitleRowAction = UpdateSalaryTitleRowAction;
        var UpdateSalaryTitleRowReact = (function (_super) {
            __extends(UpdateSalaryTitleRowReact, _super);
            function UpdateSalaryTitleRowReact() {
                _super.apply(this, arguments);
                this.state = new UpdateSalaryTitleRowStates();
            }
            UpdateSalaryTitleRowReact.prototype.pSender = function () {
                return React.createElement("th", null, this.props.Vm.ItemTitle.Name);
            };
            UpdateSalaryTitleRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return UpdateSalaryTitleRowReact;
        }(domCore.DomReact));
        UpdateSalaryTitleRow.UpdateSalaryTitleRowReact = UpdateSalaryTitleRowReact;
        var UpdateSalaryTitleRowVm = (function (_super) {
            __extends(UpdateSalaryTitleRowVm, _super);
            function UpdateSalaryTitleRowVm(config) {
                _super.call(this);
                this.ReactType = UpdateSalaryTitleRowReact;
                if (config) {
                    this.ItemTitle = config.Data;
                    this.UniId = config.Unid;
                }
            }
            return UpdateSalaryTitleRowVm;
        }(domCore.DomVm));
        UpdateSalaryTitleRow.UpdateSalaryTitleRowVm = UpdateSalaryTitleRowVm;
        var UpdateSalaryTitleRowStates = (function (_super) {
            __extends(UpdateSalaryTitleRowStates, _super);
            function UpdateSalaryTitleRowStates() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryTitleRowStates;
        }(domCore.DomStates));
        UpdateSalaryTitleRow.UpdateSalaryTitleRowStates = UpdateSalaryTitleRowStates;
        var UpdateSalaryTitleRowProps = (function (_super) {
            __extends(UpdateSalaryTitleRowProps, _super);
            function UpdateSalaryTitleRowProps() {
                _super.apply(this, arguments);
            }
            return UpdateSalaryTitleRowProps;
        }(domCore.DomProps));
        UpdateSalaryTitleRow.UpdateSalaryTitleRowProps = UpdateSalaryTitleRowProps;
    })(UpdateSalaryTitleRow = exports.UpdateSalaryTitleRow || (exports.UpdateSalaryTitleRow = {}));
});
