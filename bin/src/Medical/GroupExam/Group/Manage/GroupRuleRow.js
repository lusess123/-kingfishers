var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "react", "./../../../../02col/00core/BaseCol", "./../../../Common/Data", "./../../../../02col/02Mulite/SingleCheckBox", "./../../../../05tool/Picker/PickDom", "./../../../MemberExam/newExamOrder/ExamPackagePickListDom"], function (require, exports, domFile, utilFile, iocFile, React, baseColFile, constantData, singleCheckFile, PickDomFile, pickLeftDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var GroupRuleRowDom;
    (function (GroupRuleRowDom) {
        var GroupRuleRowDomAction = (function (_super) {
            __extends(GroupRuleRowDomAction, _super);
            function GroupRuleRowDomAction() {
                _super.apply(this, arguments);
            }
            return GroupRuleRowDomAction;
        }(domCore.DomAction));
        GroupRuleRowDom.GroupRuleRowDomAction = GroupRuleRowDomAction;
        var GroupRuleRowDomReact = (function (_super) {
            __extends(GroupRuleRowDomReact, _super);
            function GroupRuleRowDomReact() {
                _super.apply(this, arguments);
                this.state = new GroupRuleRowDomStates();
            }
            GroupRuleRowDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", {className: (this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : ""), style: { left: this.props.Vm.LeftNum }}, React.createElement("span", null, this.createSingleCheckBox(), React.createElement("span", null, this.props.Vm.RowNumber + 1))), React.createElement("td", null, this.props.Vm.ColVmObjList["Name"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["AgeLowerLimit"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["AgeUpperLimit"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Gender"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["MaritalStatus"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Job"].intoDom()), React.createElement("td", null, this.props.Vm.ColVmObjList["Other"].intoDom()), React.createElement("td", {className: "Hg-relative"}, this.props.Vm.ColVmObjList["selectName"].intoDom(), React.createElement("a", {className: "col-lg-2 col-md-2 col-sm-2 input-group-addon YSu-selector-btn", onClick: function () { _this.props.Vm.selectOpt(); }}, React.createElement("i", {className: "fa fa-credit-card"}))), React.createElement("td", null, React.createElement("a", {className: "text-danger", onClick: function () { _this.props.Vm.delOpt(_this.props.Vm.RowData.FID); }}, "删除")), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.PickDomObj.intoDom()));
            };
            GroupRuleRowDomReact.prototype.createSingleCheckBox = function () {
                return this.props.Vm.SingleCheckVm.intoDom();
            };
            GroupRuleRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupRuleRowDomReact;
        }(domCore.DomReact));
        GroupRuleRowDom.GroupRuleRowDomReact = GroupRuleRowDomReact;
        var GroupRuleRowDomVm = (function (_super) {
            __extends(GroupRuleRowDomVm, _super);
            function GroupRuleRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupRuleRowDomReact;
                this.ColVmObjList = {};
                this.RowData = {};
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsItemSelected = false;
                this.pIsHullAutoHide = true;
                this.IsPackageSelected = true; //是否选择套餐
                if (config) {
                    this.RowData = config.RowData;
                    this.IsAcsRelative = config.IsAcsRelative;
                    this.LeftNum = config.LeftNum;
                    this.RowNumber = config.RowNumber;
                    this.UniId = config.UniId;
                    this.UniIdSelect = config.UniIdSelect;
                    this.BatchId = config.BatchId;
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("AgeLowerLimit", "TextVm", "SeatLegal");
                    this.initColVm("AgeUpperLimit", "TextVm", "custom");
                    this.initColVm("Gender", "ComboVm");
                    this.initColVm("MaritalStatus", "ComboVm");
                    this.initColVm("Job", "ComboVm");
                    this.initColVm("Other", "TextVm");
                    this.initColVm("selectName", "TextVm", "notNull");
                }
                var _itemList = [];
                var _LeftDomVmObj = new pickLeftDomFile.ExamPackagePickListDom.ExamPackagePickListDomVm({ UniId: this.UniIdSelect });
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniIdSelect,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniIdSelect,
                        IsSingle: true,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: true,
                        SetSureCustomerObjFun: function (items) {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                });
                this.listenAppEvent("ExamPackageItemsDisplay", this.UniIdSelect, function (item) {
                    var itemName = "";
                    var itemId = "";
                    itemId = item.Key;
                    itemName = item.Text;
                    _this.IsPackageSelected = true;
                    _this.IsItemSelected = true;
                    _this.RowData.selectName = itemName;
                    _this.RowData.selectId = itemId;
                    _this.RowData.selectType = "Package";
                    //this.initColVm("selectName", "TextVm", "Null");
                    _this.ColVmObjList["selectName"].dataValueSet(itemName);
                    // this.sendData(itemName, itemId, "Package")
                    _this.forceUpdate("");
                    return;
                });
                this.listenAppEvent("picker-sure", this.UniIdSelect, function (items) {
                    var _list = [];
                    var itemName = "";
                    var itemId = "";
                    if (items.length > 0) {
                        itemId = items[0].Key;
                        itemName = items[0].Text;
                        for (var i = 1; i < items.length; i++) {
                            itemId = itemId + "," + items[i].Key;
                            itemName = itemName + "," + items[i].Text;
                        }
                    }
                    _this.IsPackageSelected = false;
                    _this.RowData.selectName = itemName;
                    _this.RowData.selectId = itemId;
                    _this.RowData.selectType = "Item";
                    _this.ColVmObjList["selectName"].dataValueSet(itemName);
                    //this.sendData(itemName, itemId, "Item")
                    _this.forceUpdate("");
                    return;
                    // this.initColVm("selectName", "TextVm","Null");
                });
            }
            //public sendData(selectName: string, selectId: string, selectType: string)
            //{
            //    this.emitAppEvent("Manage/GroupRuleRow/sendData", this.UniId, this.RowNumber, selectName, selectId,selectType);
            //}
            GroupRuleRowDomVm.prototype.delOpt = function (val) {
                this.emitAppEvent("Manage/GroupRuleRow", this.UniId, this.RowNumber, this.RowData.FID);
            };
            GroupRuleRowDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                if (legal == "Null") {
                    _exciteBean.dataValueSet(this.RowData[colName]);
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.dataValueSet(this.RowData[colName]);
                    _exciteBean.setOriValue(this.RowData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    _exciteBean.IsMulit = true;
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    if (legal == "custom") {
                        _exciteBean.LegalObj.CustomLegalFun = function (col) {
                            return _this.compareSize(_exciteBean.TempDataValue, utilFile.Core.Util.Cast(_exciteBean));
                        };
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            GroupRuleRowDomVm.prototype.compareSize = function (num2, textVm) {
                var re = /^[0-9]*[1-9][0-9]*$/;
                if (!re.test(num2)) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "输入整数";
                    return "输入整数！";
                }
                var num = Number(num2);
                var num1 = Number(this.RowData["AgeLowerLimit"]);
                if (num1 > num) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "年龄上限不能大于年龄下限";
                    return "年龄下限大于年龄上限！";
                }
                else {
                    textVm.LegalObj.LegalResult = false;
                    textVm.showLegal();
                    return "";
                }
            };
            GroupRuleRowDomVm.prototype.initCombo = function (colName, comboVm) {
                switch (colName) {
                    case "Gender":
                        comboVm.ItemList = constantData.Data.GenderTypeData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.dataValueSet(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "MaritalStatus":
                        comboVm.ItemList = constantData.Data.SelectMaritalData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.dataValueSet(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Job":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.dataValueSet(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Term":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.setOriValue(String(this.RowData[colName]));
                        comboVm.dataValue(this.RowData[colName]);
                        break;
                    case "Pay":
                        comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.dataValueSet(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    case "Price":
                        comboVm.ItemList = constantData.Data.JobTypeData;
                        if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                            comboVm.dataValue("0");
                        else
                            comboVm.dataValueSet(String(this.RowData[colName]));
                        comboVm.setOriValue(String(this.RowData[colName]));
                        break;
                    default:
                        break;
                }
            };
            GroupRuleRowDomVm.prototype.selectOpt = function () {
                this.PickDomObj.modalObj.open();
                this.emitAppEvent("PackageorItemChecked", this.UniIdSelect, this.IsPackageSelected);
            };
            GroupRuleRowDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            return GroupRuleRowDomVm;
        }(domCore.DomVm));
        GroupRuleRowDom.GroupRuleRowDomVm = GroupRuleRowDomVm;
        var GroupRuleRowDomStates = (function (_super) {
            __extends(GroupRuleRowDomStates, _super);
            function GroupRuleRowDomStates() {
                _super.apply(this, arguments);
            }
            return GroupRuleRowDomStates;
        }(domCore.DomStates));
        GroupRuleRowDom.GroupRuleRowDomStates = GroupRuleRowDomStates;
        var GroupRuleRowDomProps = (function (_super) {
            __extends(GroupRuleRowDomProps, _super);
            function GroupRuleRowDomProps() {
                _super.apply(this, arguments);
            }
            return GroupRuleRowDomProps;
        }(domCore.DomProps));
        GroupRuleRowDom.GroupRuleRowDomProps = GroupRuleRowDomProps;
    })(GroupRuleRowDom = exports.GroupRuleRowDom || (exports.GroupRuleRowDom = {}));
});
