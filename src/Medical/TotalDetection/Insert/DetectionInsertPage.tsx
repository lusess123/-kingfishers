import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import textAreaFile = require("./../../../02col/01single/TextArea");
import eventFile = require("./../../../01core/Event");
//import TableFile = require("./DepartmentTableDom");
import summaryDomFile = require("./DetectionSummaryDom");
import gridDomFile = require("./DetectionInsertGridDom");
import DisCheckBox = require("./../Tools/TotalDetectionCheckBoxDom");
import MedicalDomFile = require("./DetectionInsertMedicalDom");
import Data = require("./../data");
export module DetectionInsertPage {
    export class DetectionInsertPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class DetectionInsertPageReact extends basewedPageFile.Web.BaseWebPageReact<DetectionInsertPageProps, DetectionInsertPageStates, DetectionInsertPageAction> implements domCore.IReact {
        public state = new DetectionInsertPageStates();
        public pSender(): React.ReactElement<any> {
            return (
                <div className="container-fluid ui-dpt-main">
                    <div className="row-fluid">
                        <div className="ui-dpt-memberinfo col-lg-3 col-md-3">
                            <ul>
                                <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">姓名：</span><span className="col-lg-7 col-md-7">{this.props.Vm.userInfoData.Name}</span></li>
                                <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">年龄：</span><span className="col-lg-7 col-md-7">{this.props.Vm.userInfoData.Age}</span></li>
                                <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">性别：</span><span className="col-lg-7 col-md-7">{this.sexPSend(this.props.Vm.userInfoData.Gender)}</span></li>
                                <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">身份证：</span><span className="col-lg-7 col-md-7">{this.props.Vm.userInfoData.IDCard}</span></li>
                                <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">联系电话：</span><span className="col-lg-7 col-md-7">{this.props.Vm.userInfoData.phone}</span></li>
                            </ul>
                        </div>
                        <div className="ui-dpt-content col-lg-9 col-md-9">
                            <div className="YSm-handle ui-dpt-search">
                                <div className="col-lg-6 col-md-6 YSm-search">
                                    <input className="col-lg-10 col-md-10 YSu-border-blue " type="text" placeholder="输入正确的体检号" value={this.props.Vm.examNum} onChange={(e) => { this.props.Vm.onExamChage(e) } } />
                                    <a className="col-lg-2 col-md-2 btn btn-primary" onClick={() => { this.props.Vm.onSreach() } }>查询</a>
                                </div>
                            </div>
                           
                            <div className="ui-total-table">
                                {this.initTable() }
                            </div>
                            {this.initSummary() }
                            <div className="ui-dpt-send">
                                {this.props.Vm.isedit ? null :
                                    this.props.Vm.isCheck ?
                                        <a className="btn btn-primary ui-dpt-submit "onClick={() => { this.props.Vm.onCheck() } }>审核</a> : <a className="btn btn-primary ui-dpt-submit "onClick={() => { this.props.Vm.onSubmit() } }>提交</a>
                                }

                            </div>

                        </div>


                    </div>
                </div>
            )
        }

        public sexPSend(num: number) {
            switch (num) {
                case 0: return "保密";
                case 1: return "男";
                case 2: return "女";
                default: return "";
            }
        }

        public initTable(): React.ReactNode {
            return this._tDom(this.props.Vm.DeteGridVm);
        }
        public initSummary(): React.ReactNode {
            return this._tDom(this.props.Vm.SummaryVm);
        }
    }
    export interface DetectionInsertConfig {
        data: Data.DetectionData.IExamineResult;
        data2: Data.DetectionData.IAonmalyData;
    }
    export class DetectionInsertPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DetectionInsertPageReact;
        //public TabDomFileObj: TabDomFile.TabDom.TabDomVm;
        public userInfoData: Data.DetectionData.IUserInfoData;
        //public TableVm: TableFile.DepartmentGridDom.DepartmentGridDomVm;
        public tableData: Data.DetectionData.IExamineResult[];
        public SummaryVm: summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm;
        public DeteGridVm: gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm;
        public MedicalDomVm: MedicalDomFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm;
        public diseasebox: DisCheckBox.TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomVm;
        public diseasebox1: DisCheckBox.TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomVm;

        public examNum = "";

        public keyID: string;
        public isCheck: boolean;
        public isedit: boolean;
        protected pIsHullAutoHide: boolean = true;

        public constructor(config?: DetectionInsertConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            var data: summaryDomFile.DetectionSummaryDom.IDetectionConfig = { UniId: this.UniId }
            // this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(data);
            this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm();
            this.diseasebox = new DisCheckBox.TotalDetectionCheckBoxDom.TotalDetectionCheckBoxDomVm();
            
            this.listenAppEvent("medical/TotalDetection/Tools/AdviceConclusion", this.UniId, (a) => {
                this.SummaryVm.AdviceData.Advice = a.Advice;
                this.SummaryVm.AdviceAreaVm.dataValueSet(a);
                this.SummaryVm.IsChange = true;
                this.SummaryVm.AdviceAreaVm.IsChange = true;
            });
            this.listenAppEvent("medical/TotalDetection/Tools/AdviceConclusion1", this.UniId, (a) => {
                this.SummaryVm.AdviceData.Summary = a.Summary;
                this.SummaryVm.OverviewAreaVm.dataValueSet(a);
                this.SummaryVm.IsChange = true;
                this.SummaryVm.OverviewAreaVm.IsChange = true;
                this.SummaryVm.forceUpdate("");
            });
            this.listenAppEvent("Departments/List/autoDiagnosis", this.UniId, () => {
                
                var array = [];
                this.DeteGridVm.RowList.forEach((row) => {
                    Array.prototype.push.apply(array, row.getData());
                });
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/autoDiagnosis", { dataList: JSON.stringify(array) }, (a) => {
                    if (a) {
                        a.forEach((row) => {
                            var isRepeat = false;
                            var data = { FID: row.FID, Name: row.Name }
                            this.SummaryVm.MedicalDomObj.RowData.forEach((a) => {
                                if (a.FID == data.FID) isRepeat = true;
                            })
                            if (!isRepeat) {
                                this.SummaryVm.MedicalDomObj.RowData.push(data)
                            }
                        })
                        var config1 = { data: this.SummaryVm.MedicalDomObj.RowData, Unit: this.UniId, isedit: this.isedit }

                        this.SummaryVm.MedicalDomObj = new MedicalDomFile.DetectionInsertMedicalDom.DetectionInsertMedicalDomVm(config1);
                        this.SummaryVm.MedicalDomObj.IsChange = true;
                        this.SummaryVm.MedicalDomObj.forceUpdate("");
                        this.forceUpdate("");

                    } else {
                        alert("没有匹配的异常！")
                    }
                })
            })
            this.listenAppEvent("medical/Anomaly/tools/AllAnomalyConclusion", this.UniId, (fid, name) => {

                debugger
                var data = { FID: fid, Name: name }
                if (!this.SummaryVm.MedicalDomObj.RowData) {
                    this.SummaryVm.MedicalDomObj.RowData = [];
                }
                var isRepeat = false;
                this.SummaryVm.MedicalDomObj.RowData.forEach((a) => {
                    if (a.FID == data.FID) isRepeat = true;
                })
                if (!isRepeat) {
                    this.SummaryVm.MedicalDomObj.RowData.push(data);
                    var config1 = { Unit: this.UniId, data: this.SummaryVm.MedicalDomObj.RowData, isedit: this.isedit};
                    this.SummaryVm.MedicalDomObj.initData(config1);

                }
                //this.SummaryVm.MedicalDomObj.RowData.push(data)
                //var config1 = { UniId: this.UniId, aonmalyData: this.SummaryVm.MedicalDomObj.RowData }
                //this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(config1)
                //this.SummaryVm.MedicalDomObj.IsMulit = true;
                //this.forceUpdate("");
            });
            this.listenAppEvent("medical/Anomaly/tools/delAnomalyConclusion", this.UniId, (index) => {
                this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                var config1 = { Unid: this.UniId, aonmalyData: this.SummaryVm.MedicalDomObj.RowData, isedit: this.isedit}
                this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(config1)
                this.SummaryVm.MedicalDomObj.IsMulit = true;
                this.forceUpdate("");
            });
            this.listenAppEvent("medical/Anomaly/tools/delAllAnomalyConclusion", this.UniId, (index) => {
                this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                var config1 = { Unit: this.UniId, data: this.SummaryVm.MedicalDomObj.RowData, isedit: this.isedit};
                this.SummaryVm.MedicalDomObj.initData(config1);
            })

            this.listenAppEvent("TotalDetection/Insert/DetectionSummaryDom", this.UniId, () => {
                var array = [];
                
                this.tableData.forEach((row) => {
                    Array.prototype.push.apply(array, row.Submit);
                    array;
                })
                //this.DeteGridVm.RowList.forEach((row) => {
                //    Array.prototype.push.apply(array, row.getData());
                //    array;
                //});
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/AutoAdvice", { dataList: JSON.stringify(array) }, (a) => {
                    if (a) {
                        this.SummaryVm.AdviceData.Advice = a.Advice;
                        this.SummaryVm.AdviceAreaVm.dataValueSet(a.Advice);

                        this.SummaryVm.AdviceData.Summary = a.Summary;
                        this.SummaryVm.OverviewAreaVm.dataValueSet(a.Advice);
                    } else {
                        alert("没有找到合适的模板！")
                        this.SummaryVm.AdviceData.Advice = ""
                        this.SummaryVm.AdviceAreaVm.dataValueSet("");

                        this.SummaryVm.AdviceData.Summary = ""
                        this.SummaryVm.OverviewAreaVm.dataValueSet("");
                    }
                    this.SummaryVm.IsChange = true;
                    this.SummaryVm.AdviceAreaVm.IsChange = true;
                    this.SummaryVm.forceUpdate("");
                })
            })


        }

        public loadPage(callback?: () => any) {

            this.keyID = this.Param1;

           
            if (this.Param2 && this.Param2 == "check") {
                this.isCheck = true;
            } else {
                this.isCheck = false;
            }

            if (this.Param2 && this.Param2 == "true") {
                this.isedit = true;
            } else {
                this.isedit = false;
            }

            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/DetailList", { fid: this.keyID }, (data) => {
                if (data) {
                    this.tableData = data.Totalinfo;
                    this.userInfoData = data.MemberInfo;
                    var config: gridDomFile.DetectionInsertGridDom.IDetectionGridConfig = {
                        data: this.tableData
                    }
                    var summary = { data: data.summay, UniId: this.UniId, aonmalyData: data.AnomalyData, isedit: this.isedit, Advice: data.Advice };
                    // var Animaly = { data: data.AnomalyData, Unit: this.UniId };
                    this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm(config);
                    this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(summary);

                }
                if (callback) {
                    callback();
                }
            })
        }

        public onCheck() {
            this.SummaryVm.Submit(this.keyID, true);
        }

        public onSubmit() {
            this.SummaryVm.Submit(this.keyID, false);
        }

        public onExamChage(e: React.FormEvent) {
            this.examNum = e.target["value"];
            this.forceUpdate("")
        }

        public onSreach() {
            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/SreachDetailList", { ExamNum: this.examNum }, (data) => {
                if (data == "Empty") {
                    alert("请输入正确的体检编号");
                }
                else if (data.ExamInfo.Status && data.ExamInfo.Status == "7") {
                    alert("该体检号已经退款");
                } else if (data) {
                    this.tableData = data.Totalinfo;
                    this.userInfoData = data.MemberInfo;
                    var config: gridDomFile.DetectionInsertGridDom.IDetectionGridConfig = {
                        data: this.tableData
                    }


                    var istype = data.ExamInfo.Status;
                    if (data.ExamInfo.Status == "6") {
                        this.isCheck = true;
                        this.isedit = false;
                    } else if (data.ExamInfo.Status == "8") {
                        this.isCheck = false;
                        this.isedit = true;
                    } else {
                        this.isCheck = false;
                        this.isedit = false;
                    }

                    var summary = { data: data.summay, UniId: this.UniId, aonmalyData: data.AnomalyData, isedit: this.isedit, Advice: data.Advice };
                    this.DeteGridVm = new gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm(config);
                    this.SummaryVm = new summaryDomFile.DetectionSummaryDom.DetectionSummaryDomVm(summary);
                    this.forceUpdate("");
                }
            })
        }
    }
    export class DetectionInsertPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DetectionInsertPageProps extends basewedPageFile.Web.BaseWebPageProps<DetectionInsertPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DetectionInsertPage", basewedPageFile.Web.BaseWebPageVm, DetectionInsertPageVm);
}