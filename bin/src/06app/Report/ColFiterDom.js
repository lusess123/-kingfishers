var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./ColFiterIDomItem"], function (require, exports, domFile, React, ColFlterItemDom) {
    "use strict";
    var domCore = domFile.Core;
    var ColFiterDom;
    (function (ColFiterDom) {
        var ColFiterDomAction = (function (_super) {
            __extends(ColFiterDomAction, _super);
            function ColFiterDomAction() {
                _super.apply(this, arguments);
            }
            return ColFiterDomAction;
        }(domCore.DomAction));
        ColFiterDom.ColFiterDomAction = ColFiterDomAction;
        var ColFiterDomReact = (function (_super) {
            __extends(ColFiterDomReact, _super);
            function ColFiterDomReact() {
                _super.apply(this, arguments);
                this.state = new ColFiterDomStates();
            }
            ColFiterDomReact.prototype.fun_navShowClick = function () {
                this.props.Vm.IsNavHide = !this.props.Vm.IsNavHide;
                this.forceUpdate();
            };
            ColFiterDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hu-row-title Hu-pointer m-y", onClick: function () { _this.fun_navShowClick(); }}, React.createElement("i", {className: "fa fa-angle-double-" + (this.props.Vm.IsNavHide ? "down" : "right")}), React.createElement("span", null, "筛选字段")), React.createElement("ul", {className: "Hc-list Hm-custom-col nav nav-tabs m-y clearfix" + (this.props.Vm.IsNavHide ? " " : " hide")}, this.props.Vm.AllItems.map(function (n, i) {
                    n.key = i;
                    return n.intoDom();
                })));
            };
            ColFiterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ColFiterDomReact;
        }(domCore.DomReact));
        ColFiterDom.ColFiterDomReact = ColFiterDomReact;
        var ColFiterDomVm = (function (_super) {
            __extends(ColFiterDomVm, _super);
            function ColFiterDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = ColFiterDomReact;
                this.AllItems = [];
                this.SelectItems = [];
                this.IsNavHide = false;
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.Items) {
                        this.AllItems = config.Items.map(function (item) {
                            if (!item.IsNoCheck) {
                                _this.SelectItems.push(new ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm({
                                    Name: item.Name,
                                    Text: item.Text,
                                    IsNoCheck: item.IsNoCheck,
                                    UniId: _this.UniId
                                }));
                            }
                            return new ColFlterItemDom.ColFiterIDomItem.ColFiterIDomItemVm({
                                Name: item.Name,
                                Text: item.Text,
                                IsNoCheck: item.IsNoCheck,
                                UniId: _this.UniId
                            });
                        });
                    }
                }
                this.listenAppEvent("clickLi-check", this.UniId, function (isCheck, name) {
                    _this.checkItem(name, isCheck);
                    // this.forceUpdate("");
                });
                this.listenAppEvent("clickLi-del", this.UniId, function (name) {
                    _this.delItem(name);
                    _this.forceUpdate("");
                });
            }
            ColFiterDomVm.prototype.delItem = function (name) {
                for (var i = 0; i < this.SelectItems.length; i++) {
                    var _item = this.SelectItems[i];
                    if (_item.Name == name) {
                        this.SelectItems.splice(i, 1);
                        break;
                    }
                }
            };
            ColFiterDomVm.prototype.checkItem = function (name, isCheck) {
                var _list = [];
                this.AllItems.forEach(function (n) {
                    if (n.IsNoCheck) {
                        _list.push(n.Name);
                    }
                });
                //alert(name);
                var _json = JSON.stringify(_list);
                // alert(_json);
                this.emitAppEvent("clickLi-check-json", this.UniId, _json);
            };
            return ColFiterDomVm;
        }(domCore.DomVm));
        ColFiterDom.ColFiterDomVm = ColFiterDomVm;
        var ColFiterDomStates = (function (_super) {
            __extends(ColFiterDomStates, _super);
            function ColFiterDomStates() {
                _super.apply(this, arguments);
            }
            return ColFiterDomStates;
        }(domCore.DomStates));
        ColFiterDom.ColFiterDomStates = ColFiterDomStates;
        var ColFiterDomProps = (function (_super) {
            __extends(ColFiterDomProps, _super);
            function ColFiterDomProps() {
                _super.apply(this, arguments);
            }
            return ColFiterDomProps;
        }(domCore.DomProps));
        ColFiterDom.ColFiterDomProps = ColFiterDomProps;
    })(ColFiterDom = exports.ColFiterDom || (exports.ColFiterDom = {}));
});
