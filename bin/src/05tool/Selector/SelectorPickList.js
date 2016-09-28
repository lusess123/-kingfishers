var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../01core/Url", "react", "./../Picker/PickListBaseDom", "./../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, Pagination) {
    "use strict";
    var domCore = domFile.Core;
    var SelectorPickList;
    (function (SelectorPickList) {
        var SelectorPickListAction = (function (_super) {
            __extends(SelectorPickListAction, _super);
            function SelectorPickListAction() {
                _super.apply(this, arguments);
            }
            return SelectorPickListAction;
        }(domCore.DomAction));
        SelectorPickList.SelectorPickListAction = SelectorPickListAction;
        var SelectorPickListReact = (function (_super) {
            __extends(SelectorPickListReact, _super);
            function SelectorPickListReact() {
                _super.apply(this, arguments);
                this.state = new SelectorPickListStates();
            }
            SelectorPickListReact.prototype.li_clickFun = function (item) {
                this.props.Vm.addItem(item);
            };
            SelectorPickListReact.prototype.fInputOnChange = function (e) {
                var _val = e.target["value"];
                if (this.props.Vm.Text != _val) {
                    this.props.Vm.Text = _val;
                    this.props.Vm.searchList();
                }
            };
            SelectorPickListReact.prototype._text = function (str) {
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
            SelectorPickListReact.prototype._fSendUl = function () {
                var _this = this;
                return React.createElement("ul", {className: "nav nav-tabs clearfix"}, this.props.Vm.PickList.map(function (item) {
                    return React.createElement("li", {className: "nav-item Hu-pointer Hc-multi-selector pull-left   " + (item.IsSelect ? "Hz-selected" : "")}, React.createElement("a", {onClick: function () { _this.li_clickFun(item); }}, _this._text(item.Text), item.IsSelect ? React.createElement("em", null) : null, item.IsSelect ? React.createElement("i", {className: "icon-ok fa fa-check"}) : null));
                }));
            };
            SelectorPickListReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "Hc-list-item  "}, React.createElement("input", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 ", value: this._text(this.props.Vm.Text), onChange: function (e) { _this.fInputOnChange(e); }}), this.props.Vm.PickList.length > 0 ?
                    React.createElement("div", null, this._tDom(this.props.Vm.PaginationObj), this._fSendUl(), this._tDom(this.props.Vm.PaginationObj))
                    :
                        React.createElement("div", null, "搜索不到数据..."));
            };
            SelectorPickListReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return SelectorPickListReact;
        }(domCore.DomReact));
        SelectorPickList.SelectorPickListReact = SelectorPickListReact;
        var SelectorPickListVm = (function (_super) {
            __extends(SelectorPickListVm, _super);
            function SelectorPickListVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = SelectorPickListReact;
                this.RegName = "MRPUserCodeData";
                if (config) {
                    this.UniId = config.UniId;
                }
                this.PaginationObj = new Pagination.tool.PaginationVm();
                this.PaginationObj.PageNo = 0;
                this.PaginationObj.IsMulit = true;
                this.PaginationObj.PageClickEvent = function (a) {
                    _this.fLoadDom("", a, function () {
                        _this.forceUpdate("");
                    });
                };
            }
            SelectorPickListVm.prototype.searchList = function () {
                var _this = this;
                this.fLoadDom(this.Text, this.PaginationObj.PageNo, function () {
                    _this.forceUpdate("");
                });
            };
            SelectorPickListVm.prototype.fLoadDom = function (key, pageIndex, callback) {
                var _this = this;
                //key: _val, pageIndex: 0
                // alert($.toJSON(items));
                var items = this.SelectPickList;
                this.PickList = [];
                if (this.IsSingle) {
                }
                urlFile.Core.AkPost("/core/Selector/Search", {
                    RegName: this.RegName,
                    key: key,
                    pageIndex: pageIndex
                }, function (a) {
                    var _data = a;
                    _this.PaginationObj.PageNo = _data.Index;
                    _this.PaginationObj.PageSize = _data.Size;
                    _this.PaginationObj.TotalCount = _data.Total;
                    _data.List.forEach(function (d) {
                        var _item = {
                            Text: d.CODE_TEXT,
                            Key: d.CODE_VALUE,
                            IsSelect: false
                        };
                        if (items.filter(function (a) { return a.Key == _item.Key; }).length > 0) {
                            _item.IsSelect = true;
                        }
                        _this.PickList.push(_item);
                    });
                    _this.IsChange = true;
                    callback();
                });
            };
            SelectorPickListVm.prototype.loadDom = function (items, callback) {
                //alert($.toJSON(items));
                this.SelectPickList = items.map(function (i) {
                    return { Key: i.Key, Text: i.Text };
                });
                this.fLoadDom("", 0, callback);
            };
            return SelectorPickListVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        SelectorPickList.SelectorPickListVm = SelectorPickListVm;
        var SelectorPickListStates = (function (_super) {
            __extends(SelectorPickListStates, _super);
            function SelectorPickListStates() {
                _super.apply(this, arguments);
            }
            return SelectorPickListStates;
        }(domCore.DomStates));
        SelectorPickList.SelectorPickListStates = SelectorPickListStates;
        var SelectorPickListProps = (function (_super) {
            __extends(SelectorPickListProps, _super);
            function SelectorPickListProps() {
                _super.apply(this, arguments);
            }
            return SelectorPickListProps;
        }(domCore.DomProps));
        SelectorPickList.SelectorPickListProps = SelectorPickListProps;
    })(SelectorPickList = exports.SelectorPickList || (exports.SelectorPickList = {}));
});
