var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/0Dom", "./../../01core/Ioc", "./../../02col/00core/BaseCol"], function (require, exports, React, domFile, iocFile, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var ItemConditionUpdateDetailRowDom;
    (function (ItemConditionUpdateDetailRowDom) {
        var ItemConditionUpdateDetailRowDomAction = (function (_super) {
            __extends(ItemConditionUpdateDetailRowDomAction, _super);
            function ItemConditionUpdateDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ItemConditionUpdateDetailRowDomAction;
        }(domCore.DomAction));
        ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomAction = ItemConditionUpdateDetailRowDomAction;
        var ItemConditionUpdateDetailRowDomReact = (function (_super) {
            __extends(ItemConditionUpdateDetailRowDomReact, _super);
            function ItemConditionUpdateDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ItemConditionUpdateDetailRowDomStates();
            }
            ItemConditionUpdateDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", {className: "hide"}, this.props.Vm.ColVmObjList["FID"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["ItemName"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["GreaterThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["LessThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Unit"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["IsPositive"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["KeyWord"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            ItemConditionUpdateDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            ItemConditionUpdateDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ItemConditionUpdateDetailRowDomReact;
        }(domCore.DomReact));
        ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomReact = ItemConditionUpdateDetailRowDomReact;
        var ItemConditionUpdateDetailRowDomVm = (function (_super) {
            __extends(ItemConditionUpdateDetailRowDomVm, _super);
            function ItemConditionUpdateDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ItemConditionUpdateDetailRowDomReact;
                this.ColVmObjList = {};
                this.IsNew = false;
                if (config) {
                    this.RowData = config.RowData;
                    if (config.IsNew) {
                        this.IsNew = config.IsNew;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
                this.initColVm("FID", "TextVm");
                this.initColVm("ItemName", "TextVm", "notNull");
                this.initColVm("GreaterThan", "TextVm");
                this.initColVm("LessThan", "TextVm");
                this.initColVm("Unit", "TextVm");
                this.initColVm("KeyWord", "TextVm");
                this.initColVm("IsPositive", "SingleCheckBoxVm");
            }
            ItemConditionUpdateDetailRowDomVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            ItemConditionUpdateDetailRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            ItemConditionUpdateDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/ItemCondition/update/DetailRow", this.UniId, this.RowNumber);
            };
            ItemConditionUpdateDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            ItemConditionUpdateDetailRowDomVm.prototype.getData = function () {
                var _this = this;
                var _data = {};
                var _Change = false;
                var fid = null;
                if (this.IsNew) {
                    _Change = true;
                }
                for (var vn in this.ColVmObjList) {
                    var colObj = this.ColVmObjList[vn];
                    colObj.getChangeValFun(function (isChange, val, col) {
                        if (isChange || _this.IsNew) {
                            _Change = true;
                            _data[colObj.Tag] = colObj.vmDataValueGet();
                        }
                    });
                    if (colObj.Tag == "FID") {
                        fid = colObj.vmDataValueGet();
                    }
                }
                if (_Change) {
                    _data.FID = fid;
                }
                return _data;
            };
            return ItemConditionUpdateDetailRowDomVm;
        }(domCore.DomVm));
        ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomVm = ItemConditionUpdateDetailRowDomVm;
        var ItemConditionUpdateDetailRowDomStates = (function (_super) {
            __extends(ItemConditionUpdateDetailRowDomStates, _super);
            function ItemConditionUpdateDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ItemConditionUpdateDetailRowDomStates;
        }(domCore.DomStates));
        ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomStates = ItemConditionUpdateDetailRowDomStates;
        var ItemConditionUpdateDetailRowDomProps = (function (_super) {
            __extends(ItemConditionUpdateDetailRowDomProps, _super);
            function ItemConditionUpdateDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ItemConditionUpdateDetailRowDomProps;
        }(domCore.DomProps));
        ItemConditionUpdateDetailRowDom.ItemConditionUpdateDetailRowDomProps = ItemConditionUpdateDetailRowDomProps;
    })(ItemConditionUpdateDetailRowDom = exports.ItemConditionUpdateDetailRowDom || (exports.ItemConditionUpdateDetailRowDom = {}));
});
