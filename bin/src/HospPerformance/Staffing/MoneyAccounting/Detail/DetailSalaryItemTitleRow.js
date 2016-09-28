var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var DetailSalaryItemTitleRow;
    (function (DetailSalaryItemTitleRow) {
        var DetailSalaryItemTitleRowAction = (function (_super) {
            __extends(DetailSalaryItemTitleRowAction, _super);
            function DetailSalaryItemTitleRowAction() {
                _super.apply(this, arguments);
            }
            return DetailSalaryItemTitleRowAction;
        }(domCore.DomAction));
        DetailSalaryItemTitleRow.DetailSalaryItemTitleRowAction = DetailSalaryItemTitleRowAction;
        var DetailSalaryItemTitleRowReact = (function (_super) {
            __extends(DetailSalaryItemTitleRowReact, _super);
            function DetailSalaryItemTitleRowReact() {
                _super.apply(this, arguments);
                this.state = new DetailSalaryItemTitleRowStates();
            }
            DetailSalaryItemTitleRowReact.prototype.pSender = function () {
                return React.createElement("th", null, this.props.Vm.ItemTitle.Name);
            };
            DetailSalaryItemTitleRowReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DetailSalaryItemTitleRowReact;
        }(domCore.DomReact));
        DetailSalaryItemTitleRow.DetailSalaryItemTitleRowReact = DetailSalaryItemTitleRowReact;
        var DetailSalaryItemTitleRowVm = (function (_super) {
            __extends(DetailSalaryItemTitleRowVm, _super);
            function DetailSalaryItemTitleRowVm(config) {
                _super.call(this);
                this.ReactType = DetailSalaryItemTitleRowReact;
                if (config) {
                    this.ItemTitle = config.Data;
                    this.UniId = config.Unid;
                }
            }
            return DetailSalaryItemTitleRowVm;
        }(domCore.DomVm));
        DetailSalaryItemTitleRow.DetailSalaryItemTitleRowVm = DetailSalaryItemTitleRowVm;
        var DetailSalaryItemTitleRowStates = (function (_super) {
            __extends(DetailSalaryItemTitleRowStates, _super);
            function DetailSalaryItemTitleRowStates() {
                _super.apply(this, arguments);
            }
            return DetailSalaryItemTitleRowStates;
        }(domCore.DomStates));
        DetailSalaryItemTitleRow.DetailSalaryItemTitleRowStates = DetailSalaryItemTitleRowStates;
        var DetailSalaryItemTitleRowProps = (function (_super) {
            __extends(DetailSalaryItemTitleRowProps, _super);
            function DetailSalaryItemTitleRowProps() {
                _super.apply(this, arguments);
            }
            return DetailSalaryItemTitleRowProps;
        }(domCore.DomProps));
        DetailSalaryItemTitleRow.DetailSalaryItemTitleRowProps = DetailSalaryItemTitleRowProps;
    })(DetailSalaryItemTitleRow = exports.DetailSalaryItemTitleRow || (exports.DetailSalaryItemTitleRow = {}));
});
