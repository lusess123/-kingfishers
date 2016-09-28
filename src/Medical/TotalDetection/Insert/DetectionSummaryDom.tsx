import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./../data");
import textAreaFile = require("./../../../02col/01single/TextArea");
import ListPageFile = require("./DetectionInsertPage");
import medicalFile = require("./DetectionInsertMedicalDom");
import PickDomFile = require("./../../../05tool/Picker/PickDom");
import departPicklist = require("./../Tools/TotalDetectionPickListDom");
import anomalyPicklist = require("./../Tools/TotalAnomalyConclusion/AnomalyPickListDom");

export module DetectionSummaryDom {
    export class DetectionSummaryDomAction extends domCore.DomAction { }
    export class DetectionSummaryDomReact extends domCore.DomReact<DetectionSummaryDomProps, DetectionSummaryDomStates, DetectionSummaryDomAction> implements domCore.IReact {
        public state = new DetectionSummaryDomStates();
        public pSender(): React.ReactElement<any> {
            var row = this.createRow();
            return row;
        }

        public createRow(): React.ReactElement<any> {
            return (
                <div className="ui-summary-main clearfix">
                    <div className="ui-dpt-depart-summary pull-left col-lg-6 ui-lh-22">
                        <div><h2 className="pull-left summary-title">总检建议</h2>

                            {this.props.Vm.isedit ? null : < ul className= "pull-right ui-summary-opt" >

                                <li className="YSu-link" onClick={() => { this.props.Vm.AutoAdvice() } }>自动小结</li>
                                <li className="YSu-link" onClick={() => { this.props.Vm.AdviceTemplateClick() } }>模板</li></ul> }</div>
                        {this.props.Vm.AdviceAreaVm.intoDom() }

                        <div><h2 className="pull-left summary-title">总检综述</h2><ul className="pull-right ui-summary-opt"></ul></div>
                        {this.props.Vm.OverviewAreaVm.intoDom() }

                    </div>
                    <div className="ui-dpt-medical-summary pull-right col-lg-6 ui-lh-22">
                        <div><h2 className="pull-left summary-title">疾病诊断</h2>
                            {this.props.Vm.isedit ? null :
                                <ul className="pull-right ui-summary-opt">
                                    <li className="YSu-link" onClick={() => { this.props.Vm.autoDiagnosis() } }>自动诊断</li>

                                    <li className="YSu-link" onClick={() => { this.props.Vm.AnomalyClick() } }>从库中选择</li></ul>}</div>
                        {this.props.Vm.MedicalDomObj.intoDom() }
                    </div>
                    <div className="Hf-overflow" style={{ height: 1, width: 1 }}>
                        {this.props.Vm.PickDomObj.intoDom() }
                    </div>
                    <div className="Hf-overflow" style={{ height: 1, width: 1 }}>
                        {this.props.Vm.AnomalyPickDomObj.intoDom() }
                    </div>
                </div>

            )
        }
        //医生小结文本域
        public createDoctorArea(): React.ReactElement<any> {
            var _vm = this.props.Vm.DoctorAreaVm;
            if (!_vm) {
                _vm = this.getArea(this.props.Vm.SummaryData.DocterContent);
                if (this.props.Vm.isedit) {
                    _vm.onChangeHandle((str) => {
                        this.props.Vm.SummaryData.DocterContent = str;
                        return true;
                    })
                }
            }
            return _vm.intoDom();
        }
        //总检建议文本域
        public createDepartArea(): React.ReactElement<any> {
            var _vm = this.props.Vm.AdviceAreaVm;
            if (!_vm) {
                _vm = this.getArea(this.props.Vm.AdviceData.Advice);
                if (this.props.Vm.isedit) {
                    _vm.onChangeHandle((str) => {
                        this.props.Vm.AdviceData.Advice = str;
                        return true;
                    })
                }
            }
            return _vm.intoDom();
        }
        //获取文本域的值
        public getArea(val: string, legalKind?: string, fun?: Function): textAreaFile.ui.TextAreaVm {
            var _bean = new textAreaFile.ui.TextAreaVm();
            _bean.vmdataValue(val);
            _bean.LegalObj.Kind = legalKind;
            return _bean;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IDetectionData {
        FID?: string; //主键
        DeptId?: string//科室Id
        DeptName?: string; //科室名
        Name?: string;  //小结名称
        Content?: string; //小结内容
        DeleteItemList?: string[];
    }
    export interface IDetectionConfig {
        //data: dataFile.DepartmentData.IDepartmentData;
        //data2: dataFile.DepartmentData.IAonmalyData;
        data?: dataFile.DetectionData.IDocterAdviceData;
        UniId?: string;
        AreaText?: string;
        aonmalyData?: dataFile.DetectionData.AnomalyTemplate[];
        isedit?: boolean;
        Advice?: dataFile.DetectionData.SummaryData;
    }

    export interface IPickAdviceConfig {
        Text: string;
        Key: string;
    }

    export class DetectionSummaryDomVm extends domCore.DomVm {
        public ReactType = DetectionSummaryDomReact;

        public SummaryDomObj: ListPageFile.DetectionInsertPage.DetectionInsertPageVm;
        public text: string;
        public text1: string;
        public MedicalDomObj: medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm;

        public isedit: boolean = false;

        public DoctorAreaVm: textAreaFile.ui.TextAreaVm;//医生小结
        public SummaryData: dataFile.DetectionData.SummaryData = { DocterContent: "", TotalContent: "" };

        // 总检建议
        public AdviceData: dataFile.DetectionData.IDocterAdviceData = { Summary: "", Advice: "" };
        public AdviceAreaVm: textAreaFile.ui.TextAreaVm; //建议
        public OverviewAreaVm: textAreaFile.ui.TextAreaVm;//综述
        public AdviceDomObj: departPicklist.TotalDetectionPickListDom.TotalDetectionPickListDomVm;
        public PickDomObj: PickDomFile.PickDom.PickDomVm;
        public AnomalyDomObj: anomalyPicklist.AnomalyPickListDom.AnomalyPickListDomVm
        public AnomalyPickDomObj: PickDomFile.PickDom.PickDomVm;
        public aonmalyData: dataFile.DetectionData.AnomalyTemplate[];

        public Advice: string;
        public Summary: string;

        public constructor(config?: IDetectionConfig) {
            super();

            //this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm();

            if (config) {
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
              
                //if (config.AreaText) {
                //    this.text = config.Advice.DocterContent;
                //    this.text1 = config.Advice.DocterContent;
                //}

                if (config.isedit) {
                    this.isedit = config.isedit;
                }

                if (config.Advice) {
                    this.SummaryData = config.Advice;
                }
                if (config.aonmalyData) {
                    this.aonmalyData = config.aonmalyData;
                    var config1 = { data: config.aonmalyData, Unit: this.UniId, isedit: this.isedit }
                    // this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);
                    this.MedicalDomObj = new medicalFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);

                }
            }
            this.AdviceAreaVm = new textAreaFile.ui.TextAreaVm();
            this.AdviceAreaVm.LegalObj.Kind = "notNull";
            this.AdviceAreaVm.dataValueSet(this.SummaryData.DocterContent);

            if (this.isedit) {
                this.AdviceAreaVm.isReadOnly = true;
            }


            this.AdviceAreaVm.onChangeHandle((str) => {
                this.SummaryData.DocterContent = str;
                return true;
            })


            this.OverviewAreaVm = new textAreaFile.ui.TextAreaVm();
            this.OverviewAreaVm.LegalObj.Kind = "notNull";
            this.OverviewAreaVm.dataValueSet(this.SummaryData.TotalContent);
            if (this.isedit) {
                this.OverviewAreaVm.isReadOnly = true;
            }

            this.OverviewAreaVm.onChangeHandle((str) => {
                this.SummaryData.TotalContent = str;
                return true;
            })


            var _AdviceList: IPickAdviceConfig[] = [];
            var deptConfig: departPicklist.TotalDetectionPickListDom.ITotalDetectionPickListDomConfig = { UniId: this.UniId }
            var pickdomobj = new departPicklist.TotalDetectionPickListDom.TotalDetectionPickListDomVm(deptConfig);

            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {
                    UniId: this.UniId,
                    PickItemList: _AdviceList,
                    PickerContainer:
                    {
                        UniId: this.UniId,
                        IsSingle: true,
                        IsPickSelectHide: true,
                        LeftDomVmObj: pickdomobj,
                        isRightEmpty: true
                    }
                }
            );

            var anomlydomobj = new anomalyPicklist.AnomalyPickListDom.AnomalyPickListDomVm(deptConfig);
            this.AnomalyPickDomObj = new PickDomFile.PickDom.PickDomVm(
                {
                    UniId: this.UniId,
                    PickItemList: _AdviceList,
                    PickerContainer:
                    {
                        UniId: this.UniId,
                        IsSingle: true,
                        IsPickSelectHide: true,
                        LeftDomVmObj: anomlydomobj,
                        isRightEmpty: true
                    }
                }
            );
        }

        public AdviceTemplateClick() {
            this.PickDomObj.modalObj.open();
        }

        public AutoAdvice() {
            this.emitAppEvent("TotalDetection/Insert/DetectionSummaryDom", this.UniId);
        }
        public AnomalyClick() {
            this.AnomalyPickDomObj.modalObj.open();
        }
        public autoDiagnosis() {
            this.emitAppEvent("Departments/List/autoDiagnosis", this.UniId);
        }

        public Submit(fid: string, isCheck?: boolean) {
            if (this.AdviceAreaVm.legal()) {
                var postData: dataFile.DetectionData.DetectionSubmit = {};
                postData.FID = fid;
                postData.Advice = this.SummaryData.TotalContent;
                postData.Summary = this.SummaryData.DocterContent;
                postData.Anomaly = this.MedicalDomObj.getAnomalyData();
                postData.isCheck = isCheck;
                if (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/TotalDetection/submit", { data: JSON.stringify(postData) }, (data) => {
                        if (data) {
                            urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", true);
                        }
                    })
                }
            }
        }
        //public Submit(fid: string) {
        //    debugger
        //    if (this.AdviceAreaVm.legal()){
        //        var data = {
        //            FID: fid,
        //            Advice: this.AdviceData.Advice,
        //            Summary: this.AdviceData.Summary,
        //            Aonmaly: this.aonmalyData
        //        }
        //    }
        //urlFile.Core.AkPost("/MedicalCenter/TotalDetection/submit", { data: JSON.stringify(data) }, (data) => {
        //    if (data) {
        //        urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$", true);
        //    }
        //})
        //}
    }
    export class DetectionSummaryDomStates extends domCore.DomStates { }
    export class DetectionSummaryDomProps extends domCore.DomProps<DetectionSummaryDomVm>{ }
}