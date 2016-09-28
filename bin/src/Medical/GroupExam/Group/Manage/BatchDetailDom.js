var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "./../../../../01core/Url", "react", "./../../../Common/Data", "./../../../../02col/00core/BaseCol"], function (require, exports, domFile, utilFile, iocFile, urlFile, React, constantData, baseColFile) {
    "use strict";
    var domCore = domFile.Core;
    var BatchDetailDom;
    (function (BatchDetailDom) {
        var BatchDetailDomAction = (function (_super) {
            __extends(BatchDetailDomAction, _super);
            function BatchDetailDomAction() {
                _super.apply(this, arguments);
            }
            return BatchDetailDomAction;
        }(domCore.DomAction));
        BatchDetailDom.BatchDetailDomAction = BatchDetailDomAction;
        var BatchDetailDomReact = (function (_super) {
            __extends(BatchDetailDomReact, _super);
            function BatchDetailDomReact() {
                _super.apply(this, arguments);
                this.state = new BatchDetailDomStates();
            }
            BatchDetailDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-batch-detail"}, React.createElement("div", {className: "col-xl-3 col-lg-3 col-md-3"}, React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "单位名称："), React.createElement("label", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.RowBatchDetailData.Name)), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "企业类型："), React.createElement("label", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.GetText(constantData.Data.UnitTypeData, this.props.Vm.RowBatchDetailData.Type))), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "联系人："), React.createElement("label", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.RowBatchDetailData.ContactPerson)), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "联系电话："), React.createElement("label", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.RowBatchDetailData.Phone)), React.createElement("div", {className: "form-group form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "联系地址："), React.createElement("label", {className: "col-md-7 col-sm-9 form-control-label"}, this.props.Vm.RowBatchDetailData.Address))), React.createElement("div", {className: "col-xl-4 col-lg-4 col-md-4"}, React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label  text-right"}, "批次名称："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Name"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "开始时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BeginDate"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "体检人数："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["PreNumber"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "结算方式："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["BanlanceKind"].intoDom())), React.createElement("div", {className: "form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "状态："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Status"].intoDom())), React.createElement("div", {className: "form-group  form-inline text-center YSm-handle-btn"}, React.createElement("button", {className: "btn btn-sm"}, "取消"), React.createElement("button", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.Submit(); }}, "提交")))));
            };
            BatchDetailDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BatchDetailDomReact;
        }(domCore.DomReact));
        BatchDetailDom.BatchDetailDomReact = BatchDetailDomReact;
        var BatchDetailDomVm = (function (_super) {
            __extends(BatchDetailDomVm, _super);
            function BatchDetailDomVm(config) {
                _super.call(this);
                this.ReactType = BatchDetailDomReact;
                this.ItemData = {};
                this.ColVmObjList = {};
                this.RowBatchDetailData = [];
                if (config) {
                    this.RowBatchDetailData = config.BatchDetailData;
                    this.ItemData = config.ItemList;
                    this.initColVm("Name", "TextVm", "notNull");
                    this.initColVm("BeginDate", "DateTimeVm", "custom");
                    //this.initColVm("EndDate", "DateTimeVm", "custom");
                    this.initColVm("PreNumber", "TextVm", "SeatLegal");
                    this.initColVm("BanlanceKind", "ComboVm");
                    this.initColVm("Status", "ComboVm");
                }
            }
            BatchDetailDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    if (this.ItemData[colName] != undefined || this.ItemData[colName] != null) {
                        _exciteBean.dataValueSet(this.ItemData[colName]);
                    }
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.ItemData[colName] = val;
                        return true;
                    });
                    if (legal == "custom") {
                        _exciteBean.LegalObj.CustomLegalFun = function (col) {
                            return _this.compareSize(colName, _exciteBean.TempDataValue, utilFile.Core.Util.Cast(_exciteBean));
                        };
                    }
                    if (colType == "ComboVm") {
                        this.initCombo(colName, utilFile.Core.Util.Cast(_exciteBean));
                    }
                    if (colName == "BeginDate") {
                        var dateTimeT = utilFile.Core.Util.Cast(_exciteBean);
                        dateTimeT.IsInAndAfterToday = true;
                    }
                    this.ColVmObjList[_name] = _exciteBean;
                }
            };
            BatchDetailDomVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                return _res;
            };
            BatchDetailDomVm.prototype.FormatDate = function (strTime) {
                var date = new Date(strTime);
                return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            };
            BatchDetailDomVm.prototype.compareSize = function (colName, endDate, textVm) {
                if (colName == "BeginDate") {
                    if (endDate == undefined || endDate == "") {
                        textVm.LegalObj.LegalResult = true;
                        textVm.LegalObj.ErrMsg = "开始时间不能为空";
                        return "开始时间不能为空！";
                    }
                    var date = this.FormatDate(new Date(endDate));
                    var today = this.FormatDate(new Date());
                    if (date <= today) {
                        textVm.LegalObj.LegalResult = true;
                        textVm.LegalObj.ErrMsg = "开始时间大于现在时间";
                        return "开始时间大于现在时间！";
                    }
                    else {
                        textVm.LegalObj.LegalResult = false;
                        textVm.showLegal();
                        return "";
                    }
                }
                //else {
                //    if (endDate == undefined || endDate == "") {
                //        textVm.LegalObj.LegalResult = true;
                //        textVm.LegalObj.ErrMsg = "结束时间不能为空"
                //        return "结束时间不能为空！";
                //    }
                //    var beginDate = this.ItemData["BeginDate"];
                //    var date1 = new Date(beginDate);
                //    var date2 = new Date(endDate);
                //    if (date1 > date2) {
                //        textVm.LegalObj.LegalResult = true;
                //        textVm.LegalObj.ErrMsg = "开始时间不能大于结束时间"
                //        return "开始时间不能大于结束时间！";
                //    }
                //    else {
                //        textVm.LegalObj.LegalResult = false;
                //        textVm.showLegal();
                //        return "";
                //    }
                //}
            };
            BatchDetailDomVm.prototype.initCombo = function (colName, comboVm) {
                switch (colName) {
                    case "BanlanceKind":
                        comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                        comboVm.dataValueSet(String(this.ItemData[colName]));
                        comboVm.setOriValue(String(this.ItemData[colName]));
                        break;
                    case "Status":
                        comboVm.ItemList = constantData.Data.ExamStatusData;
                        comboVm.dataValueSet(String(this.ItemData[colName]));
                        comboVm.setOriValue(String(this.ItemData[colName]));
                        break;
                    default:
                        break;
                }
            };
            BatchDetailDomVm.prototype.Submit = function () {
                var _this = this;
                var postData = [];
                var Data = this.ItemData;
                postData.push(Data);
                var jsonData = JSON.stringify(postData);
                var isSuccess = this.legal();
                if (isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/ModifyBatch", { batch: jsonData }, function (data) {
                        var _data = data.Content;
                        if (_data == "ok") {
                            _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "BatchDetail");
                            utilFile.Core.Util.Noty("数据编辑成功");
                        }
                    });
                }
            };
            BatchDetailDomVm.prototype.GetText = function (List, Id) {
                for (var index = 0; index < List.length; index++) {
                    if (List[index].Value == Id) {
                        return List[index].Text;
                    }
                }
                return "";
            };
            return BatchDetailDomVm;
        }(domCore.DomVm));
        BatchDetailDom.BatchDetailDomVm = BatchDetailDomVm;
        var BatchDetailDomStates = (function (_super) {
            __extends(BatchDetailDomStates, _super);
            function BatchDetailDomStates() {
                _super.apply(this, arguments);
            }
            return BatchDetailDomStates;
        }(domCore.DomStates));
        BatchDetailDom.BatchDetailDomStates = BatchDetailDomStates;
        var BatchDetailDomProps = (function (_super) {
            __extends(BatchDetailDomProps, _super);
            function BatchDetailDomProps() {
                _super.apply(this, arguments);
            }
            return BatchDetailDomProps;
        }(domCore.DomProps));
        BatchDetailDom.BatchDetailDomProps = BatchDetailDomProps;
    })(BatchDetailDom = exports.BatchDetailDom || (exports.BatchDetailDom = {}));
});
