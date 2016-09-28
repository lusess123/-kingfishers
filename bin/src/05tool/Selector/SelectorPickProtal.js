var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "react", "./../Picker/PickProtalBaseDom", "./AutoSuggestText"], function (require, exports, domFile, React, PickProtalBaseDomFile, AutoSuggestTextFile) {
    "use strict";
    var domCore = domFile.Core;
    var SelectorPickProtal;
    (function (SelectorPickProtal) {
        var SelectorPickProtalAction = (function (_super) {
            __extends(SelectorPickProtalAction, _super);
            function SelectorPickProtalAction() {
                _super.apply(this, arguments);
            }
            return SelectorPickProtalAction;
        }(domCore.DomAction));
        SelectorPickProtal.SelectorPickProtalAction = SelectorPickProtalAction;
        var SelectorPickProtalReact = (function (_super) {
            __extends(SelectorPickProtalReact, _super);
            function SelectorPickProtalReact() {
                _super.apply(this, arguments);
                this.state = new SelectorPickProtalStates();
            }
            SelectorPickProtalReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.SuggetTxtObj));
            };
            SelectorPickProtalReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return SelectorPickProtalReact;
        }(domCore.DomReact));
        SelectorPickProtal.SelectorPickProtalReact = SelectorPickProtalReact;
        var SelectorPickProtalVm = (function (_super) {
            __extends(SelectorPickProtalVm, _super);
            //public 
            function SelectorPickProtalVm(config) {
                var _this = this;
                _super.call(this, { UniId: config.UniId });
                this.ReactType = SelectorPickProtalReact;
                this.UniId = config.UniId;
                this.SuggetTxtObj = new AutoSuggestTextFile.AutoSuggestText.AutoSuggestTextVm({ UniId: this.UniId });
                //this.listenAppEvent("FillMenuDom-onSelected", this.UniId, (a: IPickItem) => {
                //    this.PickItemList = [a];
                //});
                //window["xxx"] = this;
                this.listenAppEvent("AutoSuggestText-setValue", this.UniId, function (list) {
                    if (list.length == 1 && list[0].Key == "") {
                        _this.PickItemList = [];
                    }
                    else {
                        _this.PickItemList = list;
                    }
                });
            }
            SelectorPickProtalVm.prototype.pPickerSure = function (items) {
                if (this.pCheckItemEq(items)) {
                    //没有更新不需要操作
                    this.forceUpdate("");
                }
                else {
                    this.PickItemList = items;
                    if (items.length > 0) {
                        this.SuggetTxtObj.Text = items[0].Text;
                        this.SuggetTxtObj.TempDataValue = items[0].Key;
                        this.SuggetTxtObj.IsTxtSelector = true;
                        this.SuggetTxtObj.IsChange = true;
                        this.forceUpdate("");
                    }
                }
            };
            return SelectorPickProtalVm;
        }(PickProtalBaseDomFile.PickProtalBaseDom.PickProtalBaseDomVm));
        SelectorPickProtal.SelectorPickProtalVm = SelectorPickProtalVm;
        var SelectorPickProtalStates = (function (_super) {
            __extends(SelectorPickProtalStates, _super);
            function SelectorPickProtalStates() {
                _super.apply(this, arguments);
            }
            return SelectorPickProtalStates;
        }(domCore.DomStates));
        SelectorPickProtal.SelectorPickProtalStates = SelectorPickProtalStates;
        var SelectorPickProtalProps = (function (_super) {
            __extends(SelectorPickProtalProps, _super);
            function SelectorPickProtalProps() {
                _super.apply(this, arguments);
            }
            return SelectorPickProtalProps;
        }(domCore.DomProps));
        SelectorPickProtal.SelectorPickProtalProps = SelectorPickProtalProps;
    })(SelectorPickProtal = exports.SelectorPickProtal || (exports.SelectorPickProtal = {}));
});
