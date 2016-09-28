var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../01core/0Dom", "./../../01core/Ioc", "./../../02col/00core/BaseCol", "./../../02col/03selector/PickSelector", "./ExamItemSelector/Pick/ExamPickListDom"], function (require, exports, React, domFile, iocFile, baseColFile, PickSelectorFile, ExamPickListDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var ItemConditionInsertDetailRowDom;
    (function (ItemConditionInsertDetailRowDom) {
        var ItemConditionInsertDetailRowDomAction = (function (_super) {
            __extends(ItemConditionInsertDetailRowDomAction, _super);
            function ItemConditionInsertDetailRowDomAction() {
                _super.apply(this, arguments);
            }
            return ItemConditionInsertDetailRowDomAction;
        }(domCore.DomAction));
        ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomAction = ItemConditionInsertDetailRowDomAction;
        var ItemConditionInsertDetailRowDomReact = (function (_super) {
            __extends(ItemConditionInsertDetailRowDomReact, _super);
            function ItemConditionInsertDetailRowDomReact() {
                _super.apply(this, arguments);
                this.state = new ItemConditionInsertDetailRowDomStates();
            }
            ItemConditionInsertDetailRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", null, this.props.Vm.PickSelector.intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["GreaterThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["LessThan"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Unit"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["IsPositive"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["KeyWord"].intoDom()), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            ItemConditionInsertDetailRowDomReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            ItemConditionInsertDetailRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ItemConditionInsertDetailRowDomReact;
        }(domCore.DomReact));
        ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomReact = ItemConditionInsertDetailRowDomReact;
        var ItemConditionInsertDetailRowDomVm = (function (_super) {
            __extends(ItemConditionInsertDetailRowDomVm, _super);
            function ItemConditionInsertDetailRowDomVm(config) {
                _super.call(this);
                this.ReactType = ItemConditionInsertDetailRowDomReact;
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
                var _obj = new ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm({
                    UniId: this.UniId
                });
                this.PickSelector =
                    new PickSelectorFile.PickSelector.PickSelectorVm({
                        LeftDomVmObj: _obj,
                        UniId: this.UniId
                    });
                this.PickSelector.LegalObj.Kind = "notNull";
                //this.initColVm("ItemName", "TextVm", "notNull");
                this.initColVm("GreaterThan", "TextVm");
                this.initColVm("LessThan", "TextVm");
                this.initColVm("Unit", "TextVm");
                this.initColVm("KeyWord", "TextVm");
                this.initColVm("IsPositive", "SingleCheckBoxVm");
            }
            ItemConditionInsertDetailRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            ItemConditionInsertDetailRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.ColVmObjList) {
                    this.ColVmObjList[n].IsChange = true;
                }
            };
            ItemConditionInsertDetailRowDomVm.prototype.delButtonRow = function () {
                this.emitAppEvent("medical/base/ItemCondition/update/DetailRow", this.UniId, this.RowNumber);
            };
            ItemConditionInsertDetailRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                return _res;
            };
            return ItemConditionInsertDetailRowDomVm;
        }(domCore.DomVm));
        ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomVm = ItemConditionInsertDetailRowDomVm;
        var ItemConditionInsertDetailRowDomStates = (function (_super) {
            __extends(ItemConditionInsertDetailRowDomStates, _super);
            function ItemConditionInsertDetailRowDomStates() {
                _super.apply(this, arguments);
            }
            return ItemConditionInsertDetailRowDomStates;
        }(domCore.DomStates));
        ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomStates = ItemConditionInsertDetailRowDomStates;
        var ItemConditionInsertDetailRowDomProps = (function (_super) {
            __extends(ItemConditionInsertDetailRowDomProps, _super);
            function ItemConditionInsertDetailRowDomProps() {
                _super.apply(this, arguments);
            }
            return ItemConditionInsertDetailRowDomProps;
        }(domCore.DomProps));
        ItemConditionInsertDetailRowDom.ItemConditionInsertDetailRowDomProps = ItemConditionInsertDetailRowDomProps;
    })(ItemConditionInsertDetailRowDom = exports.ItemConditionInsertDetailRowDom || (exports.ItemConditionInsertDetailRowDom = {}));
});
