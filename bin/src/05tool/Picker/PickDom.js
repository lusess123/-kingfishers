var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../Modal/ModalDom", "./PickerContainer", "./PickProtalBaseDom"], function (require, exports, domFile, React, ModalDomFile, PickerContainerFile, pickProtalBaseDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var PickDom;
    (function (PickDom) {
        var PickDomAction = (function (_super) {
            __extends(PickDomAction, _super);
            function PickDomAction() {
                _super.apply(this, arguments);
            }
            return PickDomAction;
        }(domCore.DomAction));
        PickDom.PickDomAction = PickDomAction;
        var PickDomReact = (function (_super) {
            __extends(PickDomReact, _super);
            function PickDomReact() {
                _super.apply(this, arguments);
                this.state = new PickDomStates();
            }
            PickDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, " ", React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 input-group Hm-input-group ACT-M-PARENT"}, this._tDom(this.props.Vm.PortalNode), React.createElement("span", {className: "input-group-addon Hu-pointer", onClick: function () { _this.openModal_fun(); }}, React.createElement("i", {className: "icon-search fa fa-search"})), this._tDom(this.props.Vm.modalObj, { nullNode: React.createElement("span", null, React.createElement("i", {className: "icon-spinner icon-spin fa  fa-spinner fa-spin "}), "未能载入弹出框组件") })));
            };
            PickDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            PickDomReact.prototype.openModal_fun = function () {
                if (this.props.Vm.modalObj) {
                    this.props.Vm.modalObj.open();
                }
                else {
                    alert("没有弹出层组件");
                }
            };
            return PickDomReact;
        }(domCore.DomReact));
        PickDom.PickDomReact = PickDomReact;
        var PickDomVm = (function (_super) {
            __extends(PickDomVm, _super);
            function PickDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PickDomReact;
                this.pRegName = "pick";
                if (config) {
                    if (config.IsSingle) {
                        this.IsSingle = config.IsSingle;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                        if (config.PickItemList) {
                            if (!config.PortalNode) {
                                this.PortalNode = new pickProtalBaseDomFile.PickProtalBaseDom.PickProtalBaseDomVm({
                                    PickItemList: config.PickItemList,
                                    UniId: this.UniId
                                });
                            }
                            else {
                                this.PortalNode = config.PortalNode;
                            }
                        }
                        if (config.PickerContainer) {
                            config.PickerContainer.UniId = this.UniId;
                            config.PickerContainer.PickItemList = config.PickItemList;
                            config.PickerContainer.IsSingle = config.IsSingle;
                            this.PickerContainer = new PickerContainerFile.PickerContainer.PickerContainerVm(config.PickerContainer);
                        }
                    }
                    this.modalObj = new ModalDomFile.ModalDom.ModalDomVm({
                        Title: "请选择",
                        IsDebug: false,
                        UniId: this.UniId,
                        DomObj: this.PickerContainer,
                        ModalShowingFun: function (obj, b) {
                            if (!obj.DomObj) {
                                // alert("弹出");
                                obj.DomObj = _this.PickerContainer;
                                _this.PickerContainer.regAppEvent();
                                _this.PickerContainer.LeftDomVmObj.regAppEvent();
                            }
                            _this.PickerContainer.loadDom(_this.PortalNode.PickItemList, b);
                            // b();
                        }
                    });
                    this.listenAppEvent("PickDom-ModalOpen", this.UniId, function () {
                        if (_this.modalObj) {
                            _this.modalObj.open();
                        }
                        else {
                            alert("没有弹出层组件");
                        }
                    });
                }
                //this.listenAppEvent("pickerContainerDelItemForce", this.UniId, () => {
                //    this.forceUpdate("");
                //})
            }
            return PickDomVm;
        }(domCore.DomVm));
        PickDom.PickDomVm = PickDomVm;
        var PickDomStates = (function (_super) {
            __extends(PickDomStates, _super);
            function PickDomStates() {
                _super.apply(this, arguments);
            }
            return PickDomStates;
        }(domCore.DomStates));
        PickDom.PickDomStates = PickDomStates;
        var PickDomProps = (function (_super) {
            __extends(PickDomProps, _super);
            function PickDomProps() {
                _super.apply(this, arguments);
            }
            return PickDomProps;
        }(domCore.DomProps));
        PickDom.PickDomProps = PickDomProps;
    })(PickDom = exports.PickDom || (exports.PickDom = {}));
});
