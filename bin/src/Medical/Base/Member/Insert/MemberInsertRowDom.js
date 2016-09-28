var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./MemberInsertMasterRowDom", "./../../../../01core/Event"], function (require, exports, React, domFile, masterRowFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var MemberInsertRowDom;
    (function (MemberInsertRowDom) {
        var MemberInsertRowDomAction = (function (_super) {
            __extends(MemberInsertRowDomAction, _super);
            function MemberInsertRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberInsertRowDomAction;
        }(domCore.DomAction));
        MemberInsertRowDom.MemberInsertRowDomAction = MemberInsertRowDomAction;
        var MemberInsertRowDomReact = (function (_super) {
            __extends(MemberInsertRowDomReact, _super);
            function MemberInsertRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberInsertRowDomStates();
            }
            MemberInsertRowDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this.props.Vm.MasterRow.intoDom());
            };
            MemberInsertRowDomReact.prototype.fun_detailTitleClick = function () {
                this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
                this.forceUpdate();
            };
            MemberInsertRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberInsertRowDomReact;
        }(domCore.DomReact));
        MemberInsertRowDom.MemberInsertRowDomReact = MemberInsertRowDomReact;
        var MemberInsertRowDomVm = (function (_super) {
            __extends(MemberInsertRowDomVm, _super);
            function MemberInsertRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberInsertRowDomReact;
                this.UniId = eventFile.App.getUniId().toString();
                this.MasterRow = new masterRowFile.MemberInsertMasterRowDom.MemberInsertMasterRowDomVm();
            }
            return MemberInsertRowDomVm;
        }(domCore.DomVm));
        MemberInsertRowDom.MemberInsertRowDomVm = MemberInsertRowDomVm;
        var MemberInsertRowDomStates = (function (_super) {
            __extends(MemberInsertRowDomStates, _super);
            function MemberInsertRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberInsertRowDomStates;
        }(domCore.DomStates));
        MemberInsertRowDom.MemberInsertRowDomStates = MemberInsertRowDomStates;
        var MemberInsertRowDomProps = (function (_super) {
            __extends(MemberInsertRowDomProps, _super);
            function MemberInsertRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberInsertRowDomProps;
        }(domCore.DomProps));
        MemberInsertRowDom.MemberInsertRowDomProps = MemberInsertRowDomProps;
    })(MemberInsertRowDom = exports.MemberInsertRowDom || (exports.MemberInsertRowDom = {}));
});
