import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import DataFile = require("./../Data")
import combo = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import dateFile = require("./../../../../02col/01single/Date");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import textFile = require("./../../../../02col/01single/Text");
import dateTimeFile = require("./../../../../02col/01single/DateTime");

export module BatchDetailDom {
    export class BatchDetailDomAction extends domCore.DomAction {
    }

    export class BatchDetailDomReact extends domCore.DomReact<BatchDetailDomProps, BatchDetailDomStates, BatchDetailDomAction> implements domCore.IReact {

        public state = new BatchDetailDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-batch-detail">
                <div className="col-xl-3 col-lg-3 col-md-3">
                    <div className="form-group form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">单位名称：</label>
                        <label className="col-md-7 col-sm-9 form-control-label">{this.props.Vm.RowBatchDetailData.Name}</label>
                    </div>
                    <div className="form-group form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">企业类型：</label>
                        <label className="col-md-7 col-sm-9 form-control-label">{this.props.Vm.GetText(constantData.Data.UnitTypeData,this.props.Vm.RowBatchDetailData.Type)}</label>
                    </div>
                    <div className="form-group form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">联系人：</label>
                        <label className="col-md-7 col-sm-9 form-control-label">{ this.props.Vm.RowBatchDetailData.ContactPerson }</label>
                    </div>
                    <div className="form-group form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">联系电话：</label>
                        <label className="col-md-7 col-sm-9 form-control-label">{this.props.Vm.RowBatchDetailData.Phone}</label>
                    </div>
                    <div className="form-group form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">联系地址：</label>
                        <label className="col-md-7 col-sm-9 form-control-label">{this.props.Vm.RowBatchDetailData.Address}</label>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <form className="clearfix">
                        <div className="form-group  form-inline clearfix">
                            <label className="col-md-5 col-sm-3 form-control-label  text-right">批次名称：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.ColVmObjList["Name"].intoDom() }

                            </div>
                        </div>
                        <div className="form-group  form-inline clearfix">
                            <label className="col-md-5 col-sm-3 form-control-label text-right">开始时间：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.ColVmObjList["BeginDate"].intoDom() }
                            </div>
                        </div>
                        <div className="form-group  form-inline clearfix">
                            <label className="col-md-5 col-sm-3 form-control-label text-right">体检人数：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.ColVmObjList["PreNumber"].intoDom() }
                            </div>
                        </div>
                        <div className="form-group  form-inline clearfix">
                            <label className="col-md-5 col-sm-3 form-control-label text-right">结算方式：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.ColVmObjList["BanlanceKind"].intoDom() }
                            </div>
                        </div>
                        <div className="form-group  form-inline clearfix">
                            <label className="col-md-5 col-sm-3 form-control-label text-right">状态：</label>
                            <div className="col-md-7 col-sm-9">
                                {this.props.Vm.ColVmObjList["Status"].intoDom() }
                            </div>
                        </div>
                        <div className="form-group  form-inline text-center YSm-handle-btn">
                            <button className="btn btn-sm">取消</button>
                            <button className="btn btn-sm btn-primary"  onClick={() => { this.props.Vm.Submit(); }}>提交</button>
                        </div>
                    </form>
                </div>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactBatchDetailDomVm extends domCore.DomVm {
        ComboVm: combo.ui.ComboVm;
    }

    export interface IBatchDetailDomConfig {

        BatchDetailData: DataFile.Group.IBatchDetail;
        ItemList: DataFile.Group.IBatch;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class BatchDetailDomVm extends domCore.DomVm implements IReactBatchDetailDomVm {
        public ReactType = BatchDetailDomReact;
        public ComboVm: combo.ui.ComboVm;
        public RowBatchDetailData: DataFile.Group.IBatchDetail
        public ItemData: DataFile.Group.IBatch = {};
        public ColVmObjList: IColVmDic = {};

        public constructor(config?: IBatchDetailDomConfig) {
            super();
            this.RowBatchDetailData = [];
            if (config)
            {
                this.RowBatchDetailData = config.BatchDetailData;
                this.ItemData = config.ItemList
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("BeginDate", "DateTimeVm", "custom");
                //this.initColVm("EndDate", "DateTimeVm", "custom");
                this.initColVm("PreNumber", "TextVm", "SeatLegal");
                this.initColVm("BanlanceKind", "ComboVm");
                this.initColVm("Status", "ComboVm");
            }

        }  
        private initColVm(colName: string, colType: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }

            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                if (this.ItemData[colName] != undefined || this.ItemData[colName] != null) {
                    _exciteBean.dataValueSet(this.ItemData[colName]);
                }
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.ItemData[colName] = val;
                    return true;
                });
                if (legal == "custom") {
                    _exciteBean.LegalObj.CustomLegalFun = (col) => {
                        return this.compareSize(colName, _exciteBean.TempDataValue, utilFile.Core.Util.Cast<textFile.ui.TextVm>(_exciteBean));
                    }
                }
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                if (colName == "BeginDate") {
                    var dateTimeT = utilFile.Core.Util.Cast<dateTimeFile.ui.DateTimeVm>(_exciteBean)
                    dateTimeT.IsInAndAfterToday = true;
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }
        public legal(): boolean {
            var _res = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                if (_obj) {
                    _res = _res && _obj.legal();
                }
            }
            return _res;
        }  
        public FormatDate(strTime) {
            var date = new Date(strTime);
            return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        }
        public compareSize(colName: string, endDate: string, textVm: textFile.ui.TextVm): string {
            if (colName == "BeginDate") {
                if (endDate == undefined || endDate == "") {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间不能为空"
                    return "开始时间不能为空！";

                }
                var date = this.FormatDate(new Date(endDate));
                var today = this.FormatDate(new Date());
                if (date <= today) {
                    textVm.LegalObj.LegalResult = true;
                    textVm.LegalObj.ErrMsg = "开始时间大于现在时间"
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
        }
        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            switch (colName) {
                case "BanlanceKind":
                    comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                    comboVm.dataValueSet(String(this.ItemData[colName]))
                    comboVm.setOriValue(String(this.ItemData[colName]))                 
                    break;
                case "Status":
                    comboVm.ItemList = constantData.Data.ExamStatusData;
                    comboVm.dataValueSet(String(this.ItemData[colName]))
                    comboVm.setOriValue(String(this.ItemData[colName]))                 
                    break;
                default:
                    break;
            }
        } 
        public Submit()
        {
            var postData = [];
            var Data = this.ItemData;
            postData.push(Data);
            var jsonData = JSON.stringify(postData);
            var isSuccess = this.legal();
            if (isSuccess)
            {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/ModifyBatch", { batch: jsonData }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, "BatchDetail");
                        utilFile.Core.Util.Noty("数据编辑成功");
                    }
                });
                
            }
        }
        public GetText(List: any, Id: string): string {
            for (var index = 0; index < List.length; index++) {
                if (List[index].Value == Id) {
                    return List[index].Text;
                }
            }
            return ""
        }
    }
    export class BatchDetailDomStates extends domCore.DomStates {
    }


    export class BatchDetailDomProps extends domCore.DomProps<BatchDetailDomVm>{
    }



}


