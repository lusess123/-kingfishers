var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../Picker/PickDom", "./SelectorPickProtal", "./../../01core/Event", "./SelectorPickList"], function (require, exports, domFile, React, PickDomFile, SelectorPickProtalFile, eventFile, SelectorPickListFile) {
    "use strict";
    var domCore = domFile.Core;
    var SelectorDom;
    (function (SelectorDom) {
        var SelectorDomAction = (function (_super) {
            __extends(SelectorDomAction, _super);
            function SelectorDomAction() {
                _super.apply(this, arguments);
            }
            return SelectorDomAction;
        }(domCore.DomAction));
        SelectorDom.SelectorDomAction = SelectorDomAction;
        var SelectorDomReact = (function (_super) {
            __extends(SelectorDomReact, _super);
            function SelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new SelectorDomStates();
            }
            SelectorDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.PickDomObj));
            };
            SelectorDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return SelectorDomReact;
        }(domCore.DomReact));
        SelectorDom.SelectorDomReact = SelectorDomReact;
        var SelectorDomVm = (function (_super) {
            __extends(SelectorDomVm, _super);
            function SelectorDomVm(config) {
                _super.call(this);
                this.ReactType = SelectorDomReact;
                if (!this.UniId) {
                    this.UniId = "SelectorDomVm" + eventFile.App.getUniId();
                }
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    IsSingle: true,
                    PortalNode: new SelectorPickProtalFile.SelectorPickProtal.SelectorPickProtalVm({
                        UniId: this.UniId
                    }),
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: true,
                        LeftDomVmObj: new SelectorPickListFile.SelectorPickList.SelectorPickListVm({ UniId: this.UniId })
                    },
                    PickItemList: []
                });
            }
            return SelectorDomVm;
        }(domCore.DomVm));
        SelectorDom.SelectorDomVm = SelectorDomVm;
        var SelectorDomStates = (function (_super) {
            __extends(SelectorDomStates, _super);
            function SelectorDomStates() {
                _super.apply(this, arguments);
            }
            return SelectorDomStates;
        }(domCore.DomStates));
        SelectorDom.SelectorDomStates = SelectorDomStates;
        var SelectorDomProps = (function (_super) {
            __extends(SelectorDomProps, _super);
            function SelectorDomProps() {
                _super.apply(this, arguments);
            }
            return SelectorDomProps;
        }(domCore.DomProps));
        SelectorDom.SelectorDomProps = SelectorDomProps;
    })(SelectorDom = exports.SelectorDom || (exports.SelectorDom = {}));
});
