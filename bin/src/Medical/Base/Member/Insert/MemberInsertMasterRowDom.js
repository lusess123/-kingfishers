var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./../../../../01core/0Dom", "./../../../../02col/01single/Text", "./../../../../02col/01single/Date"], function (require, exports, React, domFile, textFile, dateFile) {
    "use strict";
    var domCore = domFile.Core;
    var MemberInsertMasterRowDom;
    (function (MemberInsertMasterRowDom) {
        var MemberInsertMasterRowDomAction = (function (_super) {
            __extends(MemberInsertMasterRowDomAction, _super);
            function MemberInsertMasterRowDomAction() {
                _super.apply(this, arguments);
            }
            return MemberInsertMasterRowDomAction;
        }(domCore.DomAction));
        MemberInsertMasterRowDom.MemberInsertMasterRowDomAction = MemberInsertMasterRowDomAction;
        var MemberInsertMasterRowDomReact = (function (_super) {
            __extends(MemberInsertMasterRowDomReact, _super);
            function MemberInsertMasterRowDomReact() {
                _super.apply(this, arguments);
                this.state = new MemberInsertMasterRowDomStates();
            }
            MemberInsertMasterRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("div", {className: "panel"}, React.createElement("div", {className: "panel-heading"}, React.createElement("h4", {className: "panel-title"}, React.createElement("a", {onClick: function () { _this.fun_titleMasterClick(); }}, "会员明细", React.createElement("i", {className: "fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down")})))), React.createElement("div", {className: "panel-collapse collapse in"}, React.createElement("div", {className: "content active " + (this.props.Vm.IsMasterHide ? "hide" : "")}, React.createElement("div", {className: "Hm-form clearfix"}, React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "档案编码：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["FileNumber"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "单位名称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["UnitId"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "姓名：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["Name"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "性别：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.SexTypeCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "婚姻状况：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.MaritalCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "民族：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.NationCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "会员类型：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TypeCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "年龄：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["Age"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "出生日期：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.inputUserBrithdayDate()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "籍贯：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["NativePlace"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "身份证：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.inputIDCard()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "工作单位：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["WorkUnit"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "职务：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.JobCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "职称：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.JobTitleCombo.intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系地址：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["Address"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "联系电话：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["Phone"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "既往病史：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["PastMedicalHistory"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "家族病史：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["FamilyMedicalHistory"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "体检次数：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, this.props.Vm.TextVmObjList["ExamCount"].intoDom()))), React.createElement("div", {className: "col-lg-6 col-sm-12 col-xs-12"}, React.createElement("div", {className: "pull-left Hu-label"}, React.createElement("label", {className: "pull-right"}, "备注：")), React.createElement("div", {className: "pull-left Hu-input"}, React.createElement("label", {className: "pull-left"}, React.createElement("textarea", {placeholder: "..", value: this.props.Vm.RowData.Remark, onChange: function (e) { _this.fun_OnChange(e, "Remark"); }})))))))));
            };
            MemberInsertMasterRowDomReact.prototype.inputUserBrithdayDate = function () {
                var _this = this;
                var _vm = this.props.Vm.BrithdayDate;
                if (!_vm) {
                    this.props.Vm.BrithdayDate = _vm = this.getDateVm(this.props.Vm.RowData.BirthDate, "notNull");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.RowData.BirthDate = str;
                        return true;
                    });
                }
                return _vm.intoDom();
            };
            MemberInsertMasterRowDomReact.prototype.inputIDCard = function () {
                var _this = this;
                var _vm = this.props.Vm.IDCardVm;
                if (!_vm) {
                    this.props.Vm.IDCardVm = _vm = this.getInputVm(this.props.Vm.RowData.IDCard, "custom");
                    _vm.onChangeHandle(function (str) {
                        _this.props.Vm.RowData.IDCard = str;
                        return true;
                    });
                    _vm.LegalObj.CustomLegalFun = function (col) {
                        return _this.props.Vm.CheckID(_vm.TempDataValue, _vm);
                    };
                }
                return _vm.intoDom();
            };
            MemberInsertMasterRowDomReact.prototype.getInputVm = function (val, legalKind, fun) {
                var _bean = new textFile.ui.TextVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            //获取日期的值
            MemberInsertMasterRowDomReact.prototype.getDateVm = function (val, legalKind, fun) {
                var _bean = new dateFile.ui.DateVm();
                _bean.vmdataValue(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
            };
            MemberInsertMasterRowDomReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.RowData[fName] = _val;
                this.forceUpdate();
            };
            MemberInsertMasterRowDomReact.prototype.fun_titleMasterClick = function () {
                this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
                this.forceUpdate();
            };
            MemberInsertMasterRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MemberInsertMasterRowDomReact;
        }(domCore.DomReact));
        MemberInsertMasterRowDom.MemberInsertMasterRowDomReact = MemberInsertMasterRowDomReact;
        var MemberInsertMasterRowDomVm = (function (_super) {
            __extends(MemberInsertMasterRowDomVm, _super);
            function MemberInsertMasterRowDomVm(config) {
                _super.call(this);
                this.ReactType = MemberInsertMasterRowDomReact;
                this.RowData = {};
                this.TextVmObjList = {};
                //this.BrithdayDate = new dateFile.ui.DateVm();
                //this.SexTypeCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.GenderTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.SexTypeCombo.ItemList = itemList;
                //this.RowData.Gender =0
                //this.SexTypeCombo.onChangeHandle((str) => {
                //    this.RowData.Gender = Number(str);
                //    return true;
                //})
                //this.BrithdayDate.onChangeHandle((str) => {
                //        this.RowData.BirthDate = str;
                //        return true;
                //})
                //this.MaritalCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.MaritalTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.MaritalCombo.ItemList = itemList;
                //this.RowData.MaritalStatus = 0;
                //this.MaritalCombo.onChangeHandle((str) => {
                //    this.RowData.MaritalStatus =Number(str);
                //    return true;
                //})
                //this.NationCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.NationTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.NationCombo.ItemList = itemList;
                //this.RowData.Nation = 0;
                //this.NationCombo.onChangeHandle((str) => {
                //    this.RowData.Nation = Number(str);
                //    return true;
                //})
                //this.TypeCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.MemberTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.TypeCombo.ItemList = itemList;
                //this.RowData.Type  =0;
                //this.TypeCombo.onChangeHandle((str) => {
                //    this.RowData.Type =Number(str);
                //    return true;
                //})  
                //this.JobCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.JobTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.JobCombo.ItemList = itemList;
                //this.RowData.Job = 0;
                //this.JobCombo.onChangeHandle((str) => {
                //    this.RowData.Job = Number(str);
                //    return true;
                //})
                //this.JobTitleCombo = new comboFile.ui.ComboVm();
                //var List = constantData.Data.JobTitleTypeData;
                //var itemList = [];
                //for (var index = 0; index < List.length; index++) {
                //    itemList.push(List[index])
                //}
                //this.JobTitleCombo.ItemList = itemList;
                //this.RowData.JobTitle = 0;
                //this.JobTitleCombo.onChangeHandle((str) => {
                //    this.RowData.JobTitle =Number (str);
                //    return true;
                //})
                this.initTextVm("FileNumber", "notNull");
                this.initTextVm("UnitId");
                this.initTextVm("Name", "notNull");
                this.initTextVm("BirthDate", "notNull");
                this.initTextVm("Age");
                this.initTextVm("NativePlace", "notNull");
                this.initTextVm("IDCard", "IDCardLegal");
                this.initTextVm("WorkUnit");
                this.initTextVm("Address");
                this.initTextVm("Phone", "MobilePhoneLegal");
                this.initTextVm("PastMedicalHistory");
                this.initTextVm("FamilyMedicalHistory");
                this.initTextVm("ExamCount", "SeatLegalNull");
            }
            MemberInsertMasterRowDomVm.prototype.CheckID = function (ID, textVm) {
                var _reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/gi;
                if (!_reg.test(ID)) {
                    textVm.LegalObj.LegalResult = false;
                    textVm.LegalObj.ErrMsg = "身份证号码格式不正确";
                    return "身份证号码格式不正确！";
                }
                else {
                    textVm.LegalObj.LegalResult = true;
                    textVm.showLegal();
                    return "";
                }
            };
            MemberInsertMasterRowDomVm.prototype.legal = function () {
                var l1 = this.TextVmObjList["FileNumber"].legal();
                var l2 = this.TextVmObjList["Name"].legal();
                var l3 = this.BrithdayDate.legal();
                var l4 = this.TextVmObjList["NativePlace"].legal();
                var l5 = this.IDCardVm.legal();
                var l6 = this.TextVmObjList["Phone"].legal();
                var l7 = this.TextVmObjList["ExamCount"].legal();
                var _res = l1 && l2 && l3 && l4 && l5 && l6 && l7;
                return _res;
            };
            MemberInsertMasterRowDomVm.prototype.initTextVm = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                    this.TextVmObjList[_name] = _exciteBean;
                }
            };
            MemberInsertMasterRowDomVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
            };
            return MemberInsertMasterRowDomVm;
        }(domCore.DomVm));
        MemberInsertMasterRowDom.MemberInsertMasterRowDomVm = MemberInsertMasterRowDomVm;
        var MemberInsertMasterRowDomStates = (function (_super) {
            __extends(MemberInsertMasterRowDomStates, _super);
            function MemberInsertMasterRowDomStates() {
                _super.apply(this, arguments);
            }
            return MemberInsertMasterRowDomStates;
        }(domCore.DomStates));
        MemberInsertMasterRowDom.MemberInsertMasterRowDomStates = MemberInsertMasterRowDomStates;
        var MemberInsertMasterRowDomProps = (function (_super) {
            __extends(MemberInsertMasterRowDomProps, _super);
            function MemberInsertMasterRowDomProps() {
                _super.apply(this, arguments);
            }
            return MemberInsertMasterRowDomProps;
        }(domCore.DomProps));
        MemberInsertMasterRowDom.MemberInsertMasterRowDomProps = MemberInsertMasterRowDomProps;
    })(MemberInsertMasterRowDom = exports.MemberInsertMasterRowDom || (exports.MemberInsertMasterRowDom = {}));
});
