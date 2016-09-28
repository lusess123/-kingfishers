var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./BatchNewMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var BatchNewRowDom;
    (function (BatchNewRowDom) {
        var BatchNewRowDomAction = (function (_super) {
            __extends(BatchNewRowDomAction, _super);
            function BatchNewRowDomAction() {
                _super.apply(this, arguments);
            }
            return BatchNewRowDomAction;
        }(domCore.DomAction));
        BatchNewRowDom.BatchNewRowDomAction = BatchNewRowDomAction;
        var BatchNewRowDomReact = (function (_super) {
            __extends(BatchNewRowDomReact, _super);
            function BatchNewRowDomReact() {
                _super.apply(this, arguments);
                this.state = new BatchNewRowDomStates();
            }
            BatchNewRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            BatchNewRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BatchNewRowDomReact;
        }(domCore.DomReact));
        BatchNewRowDom.BatchNewRowDomReact = BatchNewRowDomReact;
        var BatchNewRowDomVm = (function (_super) {
            __extends(BatchNewRowDomVm, _super);
            function BatchNewRowDomVm(config) {
                _super.call(this);
                this.ReactType = BatchNewRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.BatchNewMasterRowDom.BatchNewMasterRowDomVm();
            }
            return BatchNewRowDomVm;
        }(domCore.DomVm));
        BatchNewRowDom.BatchNewRowDomVm = BatchNewRowDomVm;
        var BatchNewRowDomStates = (function (_super) {
            __extends(BatchNewRowDomStates, _super);
            function BatchNewRowDomStates() {
                _super.apply(this, arguments);
            }
            return BatchNewRowDomStates;
        }(domCore.DomStates));
        BatchNewRowDom.BatchNewRowDomStates = BatchNewRowDomStates;
        var BatchNewRowDomProps = (function (_super) {
            __extends(BatchNewRowDomProps, _super);
            function BatchNewRowDomProps() {
                _super.apply(this, arguments);
            }
            return BatchNewRowDomProps;
        }(domCore.DomProps));
        BatchNewRowDom.BatchNewRowDomProps = BatchNewRowDomProps;
    })(BatchNewRowDom = exports.BatchNewRowDom || (exports.BatchNewRowDom = {}));
});
