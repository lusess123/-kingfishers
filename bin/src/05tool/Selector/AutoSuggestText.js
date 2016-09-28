var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "./FillMenuDom", "./../../01core/Event"], function (require, exports, domFile, urlFile, React, FillMenuDomFile, eventFile) {
    "use strict";
    var domCore = domFile.Core;
    var AutoSuggestText;
    (function (AutoSuggestText) {
        var AutoSuggestTextAction = (function (_super) {
            __extends(AutoSuggestTextAction, _super);
            function AutoSuggestTextAction() {
                _super.apply(this, arguments);
            }
            return AutoSuggestTextAction;
        }(domCore.DomAction));
        AutoSuggestText.AutoSuggestTextAction = AutoSuggestTextAction;
        var AutoSuggestTextReact = (function (_super) {
            __extends(AutoSuggestTextReact, _super);
            function AutoSuggestTextReact() {
                _super.apply(this, arguments);
                this.state = new AutoSuggestTextStates();
            }
            AutoSuggestTextReact.prototype._text = function (str) {
                try {
                    var _texts = $(str).text();
                    if (_texts == "") {
                        return str;
                    }
                    else
                        return _texts;
                }
                catch (ff) {
                    return str;
                }
            };
            // private fIsSelector: boolean = false;
            AutoSuggestTextReact.prototype.pInputOnFocus = function (e) {
                if (this.props.Vm.TempDataValue && this.props.Vm.TempDataValue != "") {
                    // alert(123);
                    this.props.Vm.IsTxtSelector = true;
                }
                var _val = e.target["value"];
                //this.props.Vm.Text = _val;
                //this.props.Vm.TempDataValue = "";
                this.props.Vm.fillMenuLoadData(_val);
            };
            AutoSuggestTextReact.prototype.pInputOnChange = function (e) {
                var _val = e.target["value"];
                // alert(this.props.Vm.fIsSelector);
                //console.warn(_val);
                if (_val != this.props.Vm.Text) {
                    this.props.Vm.IsTxtSelector = false;
                    this.props.Vm.Text = _val;
                    this.props.Vm.TempDataValue = "";
                    this.props.Vm.sureSelect();
                }
                this.props.Vm.fillMenuLoadData(_val);
            };
            AutoSuggestTextReact.prototype.pInputOnBlur = function (e) {
                var _val = e.target["value"];
                // alert(this.fIsSelector);
                if ((this.props.Vm.TempDataValue != "" && this.props.Vm.IsTxtSelector) || _val == "") {
                }
                else {
                    this.props.Vm.Text = "";
                    //this.props.Vm.TempDataValue = "";
                    this.props.Vm.FillMenuDomObj = null;
                    this.props.Vm.sureSelect();
                    this.forceUpdate();
                }
            };
            AutoSuggestTextReact.prototype.onButtonClick = function () {
                // this.props.Vm.ModalObj.open();
                //this.forceUpdate();
            };
            AutoSuggestTextReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "ACT-M-PARENT clearfix"}, React.createElement("input", {className: "col-lg-8 col-md-7 col-sm-6 col-xs-6 ACT-INPUT  ACT-SELECTOR-INPUT ", value: this._text(this.props.Vm.Text), onChange: function (e) { _this.pInputOnChange(e); }, onFocus: function (e) { _this.pInputOnChange(e); }, onBlur: function (e) { _this.pInputOnBlur(e); }})), this._tDom(this.props.Vm.FillMenuDomObj));
            };
            AutoSuggestTextReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AutoSuggestTextReact;
        }(domCore.DomReact));
        AutoSuggestText.AutoSuggestTextReact = AutoSuggestTextReact;
        var AutoSuggestTextVm = (function (_super) {
            __extends(AutoSuggestTextVm, _super);
            function AutoSuggestTextVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AutoSuggestTextReact;
                this.pRegName = "新选择器控件";
                //  public ModalObj: ModalFile.ModalDom.ModalDomVm;
                this.RegName = "MRPUserCodeData";
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
                if (!this.UniId)
                    this.UniId = "Selector2Vm" + eventFile.App.getUniId();
                this.listenAppEvent("FillMenuDom-onSelected", this.UniId, function (a) {
                    _this.Text = a.Text;
                    _this.TempDataValue = a.Key;
                    _this.FillMenuDomObj = null;
                    _this.IsTxtSelector = true;
                    _this.sureSelect();
                    _this.forceUpdate("");
                });
                this.listenAppEvent("FillMenuDom-onClose", this.UniId, function () {
                    _this.FillMenuDomObj = null;
                    _this.forceUpdate("");
                });
            }
            AutoSuggestTextVm.prototype.getPostDataSetFun = function () {
                var str = "";
                var ds = {};
                if (this.OnPostDataSetFun) {
                    var _ds = this.OnPostDataSetFun(ds);
                    str = JSON.stringify(_ds);
                }
                return str;
            };
            AutoSuggestTextVm.prototype.sureSelect = function () {
                this.emitAppEvent("AutoSuggestText-setValue", this.UniId, [{ Text: this.Text, Key: this.TempDataValue }]);
            };
            AutoSuggestTextVm.prototype.fillMenuLoadData = function (str) {
                var _this = this;
                urlFile.Core.AkPost("/core/Selector/AutoComplete", {
                    RegName: this.RegName,
                    key: str,
                    ds: this.getPostDataSetFun()
                }, function (a) {
                    var _data = a;
                    var _list = _data.map(function (b) {
                        var _bean = { Key: b.CODE_VALUE, Text: b.CODE_TEXT };
                        return _bean;
                    });
                    //  alert(_list.length);
                    if (_list.length > 0) {
                        _this.FillMenuDomObj = new FillMenuDomFile.FillMenuDom.FillMenuDomVm({
                            SelectorItemList: _list,
                            UniId: _this.UniId
                        });
                        _this.FillMenuDomObj.IsChange = true;
                    }
                    else {
                        _this.FillMenuDomObj = null;
                    }
                    _this.forceUpdate("");
                });
            };
            return AutoSuggestTextVm;
        }(domCore.DomVm));
        AutoSuggestText.AutoSuggestTextVm = AutoSuggestTextVm;
        var AutoSuggestTextStates = (function (_super) {
            __extends(AutoSuggestTextStates, _super);
            function AutoSuggestTextStates() {
                _super.apply(this, arguments);
            }
            return AutoSuggestTextStates;
        }(domCore.DomStates));
        AutoSuggestText.AutoSuggestTextStates = AutoSuggestTextStates;
        var AutoSuggestTextProps = (function (_super) {
            __extends(AutoSuggestTextProps, _super);
            function AutoSuggestTextProps() {
                _super.apply(this, arguments);
            }
            return AutoSuggestTextProps;
        }(domCore.DomProps));
        AutoSuggestText.AutoSuggestTextProps = AutoSuggestTextProps;
    })(AutoSuggestText = exports.AutoSuggestText || (exports.AutoSuggestText = {}));
});
