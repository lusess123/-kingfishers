var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var HContacts;
    (function (HContacts) {
        var HContactsAction = (function (_super) {
            __extends(HContactsAction, _super);
            function HContactsAction() {
                _super.apply(this, arguments);
            }
            return HContactsAction;
        }(domCore.DomAction));
        HContacts.HContactsAction = HContactsAction;
        var HContactsReact = (function (_super) {
            __extends(HContactsReact, _super);
            function HContactsReact() {
                _super.apply(this, arguments);
                this.state = new HContactsStates();
            }
            HContactsReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: HContacts的组件");
            };
            HContactsReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return HContactsReact;
        }(domCore.DomReact));
        HContacts.HContactsReact = HContactsReact;
        var HContactsVm = (function (_super) {
            __extends(HContactsVm, _super);
            function HContactsVm() {
                _super.apply(this, arguments);
                this.ReactType = HContactsReact;
            }
            return HContactsVm;
        }(domCore.DomVm));
        HContacts.HContactsVm = HContactsVm;
        var HContactsStates = (function (_super) {
            __extends(HContactsStates, _super);
            function HContactsStates() {
                _super.apply(this, arguments);
            }
            return HContactsStates;
        }(domCore.DomStates));
        HContacts.HContactsStates = HContactsStates;
        var HContactsProps = (function (_super) {
            __extends(HContactsProps, _super);
            function HContactsProps() {
                _super.apply(this, arguments);
            }
            return HContactsProps;
        }(domCore.DomProps));
        HContacts.HContactsProps = HContactsProps;
    })(HContacts = exports.HContacts || (exports.HContacts = {}));
});
