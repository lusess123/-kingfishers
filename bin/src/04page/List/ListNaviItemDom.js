var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Ioc", "./../../02col/00core/baseCol", "react"], function (require, exports, domFile, iocFile, baseColFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var ListNaviItemDom;
    (function (ListNaviItemDom) {
        var ListNaviItemDomAction = (function (_super) {
            __extends(ListNaviItemDomAction, _super);
            function ListNaviItemDomAction() {
                _super.apply(this, arguments);
            }
            return ListNaviItemDomAction;
        }(domCore.DomAction));
        ListNaviItemDom.ListNaviItemDomAction = ListNaviItemDomAction;
        var ListNaviItemDomReact = (function (_super) {
            __extends(ListNaviItemDomReact, _super);
            function ListNaviItemDomReact() {
                _super.apply(this, arguments);
                this.state = new ListNaviItemDomStates();
                this.ScreenDomName = ".ACT-CONTENT";
                this.pIsSetScreenMaxHeight = true;
            }
            ListNaviItemDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "panel"}, React.createElement("div", {className: "Hm-panel-node Hu-pointer", onClick: function () { _this.fun_NodeShow(); }}, React.createElement("i", {className: " icon-angle-down fa fa-angle-down " + (this.props.Vm.IsNodeShow ? "active" : "")}), React.createElement("span", null, this.props.Vm.Title)), React.createElement("div", {className: " ACT-CONTENT  Hg-overflow-auto Hz-scroll p-y " + (this.props.Vm.IsNodeShow ? "hide" : "")}, this._tDom(this.props.Vm.ColVm, { nullNode: React.createElement("div", null, React.createElement("i", {className: " fa fa-exclamation-triangle Hs-red "}, this.props.Vm.ControlTypeName)) })));
            };
            ListNaviItemDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            ListNaviItemDomReact.prototype.fun_NodeShow = function () {
                this.props.Vm.IsNodeShow = !this.props.Vm.IsNodeShow;
                this.forceUpdate();
            };
            return ListNaviItemDomReact;
        }(domCore.DomReact));
        ListNaviItemDom.ListNaviItemDomReact = ListNaviItemDomReact;
        var ListNaviItemDomVm = (function (_super) {
            __extends(ListNaviItemDomVm, _super);
            function ListNaviItemDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ListNaviItemDomReact;
                this.IsNodeShow = false;
                if (config) {
                    if (config.ColConfig) {
                        if (config.UniId) {
                            this.UniId = config.UniId;
                        }
                        if (config.ColConfig.ControlType) {
                            var _c = config.ColConfig.ControlType;
                            if (_c.toUpperCase() == "RADIONAVI") {
                                _c = "CheckBoxNavi";
                                this.IsRadioNavi = true;
                            }
                            this.ControlTypeName = _c;
                            var tv = iocFile.Core.Ioc.Current().FetchInstance(_c + "Vm", baseColFile.Core.BaseColVm);
                            if (tv) {
                                tv.makerInNavi({ NavigationColumnConfig: config.ColConfig, DataSet: config.DataSet });
                                this.ColVm = tv;
                                this.Title = config.ColConfig.DisplayName;
                                this.Name = config.ColConfig.Name;
                                tv.onChangeHandle(function (s) {
                                    //alert(s);
                                    if (_this.IsRadioNavi) {
                                        s = s.replace(/\"/g, "");
                                    }
                                    _this.emitAppEvent("04page/ListPage", _this.UniId, s);
                                    return true;
                                });
                            }
                        }
                    }
                }
            }
            ListNaviItemDomVm.prototype.getDataValue = function () {
                return this.ColVm.vmDataValueGet();
            };
            return ListNaviItemDomVm;
        }(domCore.DomVm));
        ListNaviItemDom.ListNaviItemDomVm = ListNaviItemDomVm;
        var ListNaviItemDomStates = (function (_super) {
            __extends(ListNaviItemDomStates, _super);
            function ListNaviItemDomStates() {
                _super.apply(this, arguments);
            }
            return ListNaviItemDomStates;
        }(domCore.DomStates));
        ListNaviItemDom.ListNaviItemDomStates = ListNaviItemDomStates;
        var ListNaviItemDomProps = (function (_super) {
            __extends(ListNaviItemDomProps, _super);
            function ListNaviItemDomProps() {
                _super.apply(this, arguments);
            }
            return ListNaviItemDomProps;
        }(domCore.DomProps));
        ListNaviItemDom.ListNaviItemDomProps = ListNaviItemDomProps;
    })(ListNaviItemDom = exports.ListNaviItemDom || (exports.ListNaviItemDom = {}));
});
