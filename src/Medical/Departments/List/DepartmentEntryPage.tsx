import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import eventFile = require("./../../../01core/Event");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
//import examOrderDomFile = require("./examOrderGridRowMaster");
//import textFile = require("./../../02col/01single/Text");
//import comboFile = require("./../../02col/02Mulite/Combo");
//import dateFile = require("./../../02col/01single/Date");
import TabDomFile = require("./../../../05tool/TabDom");
import textAreaFile = require("./../../../02col/01single/TextArea");
import TableFile = require("./DepartmentTableDom");
import summaryDomFile = require("./DepartSummaryDom");
import Data = require("./../data");
import DisCheckBox = require("./../tools/DiseaseCheckBoxDom");
import constantData = require("./../../Common/Data");
import RowDom = require("./MedicalRowDom")
import medicalFile = require("./MedicalTableDom");



export module DepartmentEntryPage {
    export class DepartmentEntryPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class DepartmentEntryPageReact extends basewedPageFile.Web.BaseWebPageReact<DepartmentEntryPageProps, DepartmentEntryPageStates, DepartmentEntryPageAction> implements domCore.IReact {
        public state = new DepartmentEntryPageStates();
        public pSender(): React.ReactElement<any> {
            var table = this.initTable();
            var initHandle = this._initHandle();
            var meminfo = this._meminfo();
            return (
                <div className="container-fluid ui-dpt-main">
                    <div className="row-fluid">
                        {meminfo}
                        <div className="ui-dpt-content col-lg-9 col-md-9">
                            <div className="YSm-handle ui-dpt-search">
                                {initHandle}
                            </div>
                            <div className="ui-dpt-tab">
                                {this._tDom(this.props.Vm.TabDomFileObj) }
                            </div>
                            {this.initTable() }
                            {this._tDom(this.props.Vm.SummaryVm) }
                            <div className="ui-dpt-send"><a className={this.props.Vm.BtnIsHidde ? " hide " : "" + " btn btn-primary ui-dpt-submit "} onClick ={() => { this.fun_Submit(); } }>提交</a></div>
                        </div>

                    </div>
                </div>
            )
        }

        private fun_Submit() {
            this.props.Vm.submit();
        }

        private fun_linkcode(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchCode = _val;
            this.forceUpdate();
        }

        public fun_searchBtn() {
            this.props.Vm.Search(this.props.Vm.SearchCode.trim());
        }

        public initTable(): React.ReactNode {
            //var table = new TableFile.DepartmentGridDom.DepartmentGridDomVm();
            //table.DepartmentGridDomObj = this.props.Vm;
            //return table.intoDom();
            return this._tDom(this.props.Vm.TableVm);
        }
        public initSummary(): React.ReactElement<any> {
            //var summary = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm();
            //summary.SummaryDomObj = this.props.Vm;
            //return summary.intoDom();
            return;
        }

        public _initHandle(): React.ReactElement<any> {
            return <div className="col-lg-8 col-md-8 YSm-search">
                <input className="col-lg-10 col-md-10 YSu-border-blue " type="text" placeholder="输入体检编号查询" value={this.props.Vm.SearchCode} onChange = {(e) => { this.fun_linkcode(e); } } ></input>
                <a className="col-lg-2 col-md-2 btn btn-primary" onClick = {() => { this.fun_searchBtn(); } }>查询</a>
            </div>;
        }

        public _meminfo(): React.ReactElement<any> {
            return <div className="ui-dpt-memberinfo col-lg-3 col-md-3">
                <ul>
                    <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">姓名：</span><span className="col-lg-7 col-md-7">{this.props.Vm.MemInfoData.Name}</span></li>
                    <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">年龄：</span><span className="col-lg-7 col-md-7">{this.props.Vm.MemInfoData.Age}</span></li>
                    <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">性别：</span><span className="col-lg-7 col-md-7">{this.GetText(constantData.Data.GenderTypeData, String(this.props.Vm.MemInfoData.Gender)) }</span></li>
                    <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">身份证：</span><span className="col-lg-7 col-md-7">{this.props.Vm.MemInfoData.IDCard}</span></li>
                    <li className="clearfix"><span className="col-lg-5 col-md-5 ui-dpt-sp">联系电话：</span><span className="col-lg-7 col-md-7">{this.props.Vm.MemInfoData.Phone}</span></li>
                </ul>
            </div>
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
    export interface IDepartmentConfig {
        Data: Data.Result.IDeptEntryPageData;
    }
    export interface MemInfoData {
        MemData: Data.Result.IMemberData;

    }
    export class DepartmentEntryPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DepartmentEntryPageReact;
        public TabDomFileObj: TabDomFile.TabDom.TabDomVm;
        public MemInfoData: Data.Result.IMemberData = {};
        public TableVm: TableFile.DepartmentGridDom.DepartmentGridDomVm;
        public SummaryVm: summaryDomFile.DepartSummaryDom.DepartSummaryDomVm;
        public DeptId: string;
        public SearchCode: string;
        public ExamNumber: string;
        public BtnIsHidde: boolean = true;
        protected pIsHullAutoHide: boolean = true;
        public diseasebox: DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm;
        public diseasebox1: DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm;
        public DiseasList: string[] = [];
        public isResultNUll: boolean = false;

        public isedit: boolean = true;
        public constructor(config?: IDepartmentConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();

            this.TableVm = new TableFile.DepartmentGridDom.DepartmentGridDomVm();
            this.diseasebox = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
            this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                Items: [
                    {
                        DomObj: this.diseasebox,
                        Title: "既往病史",
                        IsActive: true,
                        ReloadFun: (item) => {
                            if (!item.IsNoFirst) {
                                item.DomObj = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                this.forceUpdate("");
                            }
                        }
                    },
                    {
                        DomObj: this.diseasebox,
                        Title: "家族遗传史",
                        ReloadFun: (item) => {
                            if (!item.DomObj) {
                                item.DomObj = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                this.forceUpdate("");
                            }
                        }
                    }
                ]
            });

            this.listenAppEvent("medical/Departments/tools/DeptConclusion", this.UniId, (a) => {
                this.SummaryVm.SummaryData.Content = a;
                this.SummaryVm.DepartAreaVm.dataValueSet(a);
                this.SummaryVm.IsChange = true;
                this.SummaryVm.DepartAreaVm.IsChange = true;
                this.SummaryVm.forceUpdate("");
            });
            this.listenAppEvent("medical/Anomaly/tools/AnomalyConclusion", this.UniId, (fid, name) => {
                var data = { FID: fid, Name: name }
                if (!this.SummaryVm.MedicalDomObj.RowData) {
                    this.SummaryVm.MedicalDomObj.RowData = [];
                }

                var isRepeat = false;

                this.SummaryVm.MedicalDomObj.RowData.forEach((a) => {
                    if (a.FID == data.FID) isRepeat = true;
                })
                if (!isRepeat) {
                    this.SummaryVm.MedicalDomObj.RowData.push(data)
                    var config1 = { Unid: this.UniId, data: this.SummaryVm.MedicalDomObj.RowData, isedit: this.isedit }

                    //var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(data);
                    //this.SummaryVm.MedicalDomObj.MedicalRowDom.push(rowVm);
                    //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                    this.SummaryVm.MedicalDomObj.initData(config1);
                    //this.SummaryVm.MedicalDomObj.IsMulit = true;
                    //this.SummaryVm.MedicalDomObj.IsChange = true;
                    //this.SummaryVm.MedicalDomObj.MedicalRowDom.forEach(a => { a.IsChange = true });
                    //this.SummaryVm.MedicalDomObj.forceUpdate("");
                    //this.forceUpdate("");
                }
            });
            this.listenAppEvent("medical/Anomaly/tools/delAnomalyConclusion", this.UniId, (index) => {
                this.SummaryVm.MedicalDomObj.RowData.splice(index, 1);
                var config1 = { Unid: this.UniId, data: this.SummaryVm.MedicalDomObj.RowData, isedit: this.isedit }
                //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                this.SummaryVm.MedicalDomObj.initData(config1);
                // this.SummaryVm.MedicalDomObj.IsMulit = true;
                //this.forceUpdate("");
            });
            this.listenAppEvent("Departments/List/DepartSummaryDom", this.UniId, () => {
                var array = [];
                this.TableVm.RowList.forEach((row) => {
                    array.push(row.getData());
                });
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/autoSummary", { examNumber:this.SearchCode,dataList: JSON.stringify(array) }, (a) => {

                    if (a) {
                        this.SummaryVm.SummaryData.Content = a.Content;
                        this.SummaryVm.DepartAreaVm.dataValueSet(a.Content);
                    } else {
                        alert("没有找到合适的模板！")
                        //this.SummaryVm.SummaryData.Content = ""
                        //this.SummaryVm.DepartAreaVm.dataValueSet("");
                    }
                    this.SummaryVm.IsChange = true;
                    this.SummaryVm.DepartAreaVm.IsChange = true;
                    this.SummaryVm.forceUpdate("");
                })
            })
            this.listenAppEvent("Departments/List/autoDiagnosis", this.UniId, () => {
                var array = [];
                this.TableVm.RowList.forEach((row) => {
                    array.push(row.getData());
                });
                urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/autoDiagnosis", { dataList: JSON.stringify(array) }, (a) => {

                    if (a) {
                        a.forEach((row) => {
                            var data = { FID: row.FID, Name: row.Name }
                            var isRepeat = false;
                            this.SummaryVm.MedicalDomObj.RowData.forEach((a) => {
                                if (a.FID == data.FID) isRepeat = true;
                            })
                            if (!isRepeat)
                            {
                                this.SummaryVm.MedicalDomObj.RowData.push(data)
                            }
                        })
                        //var config1 = { Unid: this.UniId, aonmalyData: this.SummaryVm.MedicalDomObj.RowData }

                        var config1 = { data: this.SummaryVm.MedicalDomObj.RowData, Unid: this.UniId, isedit: this.isedit }
                        //this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(config1)
                        this.SummaryVm.MedicalDomObj.initData(config1);
                        //this.SummaryVm.MedicalDomObj = new medicalFile.MedicalDom.MedicalDomVm(config1);
                        //this.SummaryVm.MedicalDomObj.IsChange = true;
                        //this.SummaryVm.MedicalDomObj.forceUpdate("");
                        //this.forceUpdate("");

                    } else {
                        alert("没有找到合适的小结！")
                    }
                })
            })
        }

        public Search(val: string) {
            urlFile.Core.AkPost("/MedicalCenter/Result/SearchMemberDeptExamItems", { examNumber: val }, (data) => {
                var _data: Data.Result.IDeptEntryPageData = data.Data;
                if (data.Content == "OverallExamed") {
                    alert("该体检号已经总检完毕，请您到总检列表中查看。")
                }
                else if (data.Content == "refund") {
                    alert("该体检号已经退款")
                }
                else if (data.Content == "UnReceived") {
                    alert("该体检号未缴费,不能录入")
                } else if (data.Content == "NoMember") {
                    alert("未查到体检信息，请重新输入正确的体检好")
                } else {
                    if (_data) {
                        if (_data.Member) {
                            this.MemInfoData = _data.Member;
                        }
                        if (!data.Data.Condtion) {
                            data.Data.Condtion = "";
                        }

                        if (_data.ItemList.length == 0) {
                            this.isedit = false;
                        }

                        var summarydata: summaryDomFile.DepartSummaryDom.IDepartmentConfig = { Unid: this.UniId, AreaText: data.Data.Condtion, aonmalyData: data.Data.AnomalyList, isedit: this.isedit }

                        this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(summarydata);

                        if (_data.Condtion) {
                            this.SummaryVm.SummaryData.Content = _data.Condtion;
                        }
                        this.ExamNumber = _data.ExamNumber;
                        this.DeptId = _data.DeptId;
                        var _config: TableFile.DepartmentGridDom.IDepartmentTableConfig = { ListData: _data.ItemList };
                        this.TableVm = new TableFile.DepartmentGridDom.DepartmentGridDomVm(_config);

                        if (_data.ItemList.length != 0) {
                            this.BtnIsHidde = false;
                        } else {
                            this.BtnIsHidde = true;
                        }

                        var _DiseasList: Data.Result.IDiseaseData[] = [];
                        var _DiseasList2: Data.Result.IDiseaseData[] = [];

                        _data.DiseaseList.forEach((a) => {
                            if (a.isGenetic == "False") {
                                _DiseasList.push(a);
                            } else if (a.isGenetic == "True") {
                                _DiseasList2.push(a);
                            }
                        })

                        var _boxconfig: DisCheckBox.DiseaseCheckBoxDom.IDiseaseCheckBoxDomConfig = { Data: _DiseasList }
                        var _boxconfig1: DisCheckBox.DiseaseCheckBoxDom.IDiseaseCheckBoxDomConfig = { Data: _DiseasList2, isfamily: "1" }



                        this.diseasebox = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm(_boxconfig);
                        this.diseasebox1 = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm(_boxconfig1);

                        this.TabDomFileObj = new TabDomFile.TabDom.TabDomVm({
                            Items: [
                                {
                                    DomObj: this.diseasebox,
                                    Title: "既往病史",
                                    IsActive: true,
                                },
                                {
                                    DomObj: this.diseasebox1,
                                    Title: "家族遗传史",
                                }
                            ]
                        });
                        this.diseasebox.IsChange = true;
                        this.diseasebox1.IsChange = true;
                        this.TableVm.IsChange = true;
                        this.SummaryVm.DepartAreaVm.IsChange = true;
                        this.SummaryVm.IsChange = true;
                        this.forceUpdate("");
                    }
                    else {
                        var summarydata: summaryDomFile.DepartSummaryDom.IDepartmentConfig = { Unid: this.UniId, AreaText: "", isedit: this.isedit }
                        this.SummaryVm = new summaryDomFile.DepartSummaryDom.DepartSummaryDomVm(summarydata);
                        this.SummaryVm.IsChange = true;
                        this.forceUpdate("");
                    }

                }
            });
        }

        protected ReceivePageSend(config: basewedPageFile.Web.IPageActor, obj: any) {
            super.ReceivePageSend(config, obj);
            switch (config.FromModulename) {
                case "DEPARTMENTIMAGEPAGE":
                    if (obj.Select) {
                        this.UpdateImage(obj.Select);
                    }
                    break;
                default:
                    break;
            }

        }


        public UpdateImage(Any: any) {
            this.TableVm.ListData.forEach((a) => {
                if (a.ItemId == Any.ItemId) {
                    a.Picture = Any.Picture;
                    a.PictureCount = Any.PictureCount;
                }

            })

            this.TableVm.RowList.forEach((a) => { a.IsChange = true });
            this.TableVm.forceUpdate("");
        }

        public submit() {
            if (this.SummaryVm.DepartAreaVm.legal()) {
                var postData: Data.Result.IDeptEntryResultData = {};
                postData.DeptConclusion = this.SummaryVm.Text;
                postData.DeptId = this.DeptId;
                postData.ExamNumber = this.ExamNumber;
                postData.ItemResultList = [];
                postData.Anomaly = [];
                this.isResultNUll = false;
                this.TableVm.RowList.forEach((row) => {
                    if (row.getData().Result == "") {
                        this.isResultNUll = true;
                    }
                    postData.ItemResultList.push(row.getData());
                });

                this.DiseasList = [];
                var data1 = this.diseasebox.submit();
                var data2 = this.diseasebox1.submit();
                data1.forEach((a) => {
                    this.DiseasList.push(a);
                })

                data2.forEach((a) => {
                    this.DiseasList.push(a);
                })
                postData.DiseaseData = this.DiseasList;
                postData.Anomaly = this.SummaryVm.MedicalDomObj.getAnomalyData();
                var issubmit = true;
                //防止一开始就点击提交
                if (this.ExamNumber) {
                    if (this.isResultNUll) {
                        //要给提示
                        if (!confirm("有项目结果为空，会标记为已检未录入，是否提交？")) {
                            issubmit = false;
                        }

                    }
                    if (issubmit) {
                        urlFile.Core.AkPost("/MedicalCenter/Result/addResult",
                            {
                                result: JSON.stringify(postData)
                            },
                            (a) => {
                                if (a.Content == "ok") {
                                    alert("提交成功！")
                                    this.SearchCode = "";
                                    this.forceUpdate("");

                                    urlFile.Core.AkUrl.Current().openUrl("$DepartmentEntryPage$", false);
                                    utilFile.Core.Util.ToggleLoading(true);
                                    urlFile.Core.AkUrl.Current().refresh();

                                    //this.MemInfoData = {};
                                    ////this.SummaryVm.DepartAreaVm.dataValueSet("");
                                    //this.diseasebox = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                    //this.diseasebox1 = new DisCheckBox.DiseaseCheckBoxDom.DiseaseCheckBoxDomVm();
                                    //this.TableVm = new TableFile.DepartmentGridDom.DepartmentGridDomVm();
                                    //this.SummaryVm.DepartAreaVm = new textAreaFile.ui.TextAreaVm();
                                    //this.SummaryVm.DepartAreaVm.IsChange = true;
                                    //this.SummaryVm.DepartAreaVm.dataValueSet("");
                                    //this.diseasebox1.IsChange = true;
                                    //this.diseasebox.IsChange = true;
                                    //this.TableVm.IsChange = true;
                                    //this.Search("");
                                    //this.forceUpdate("");
                                }
                                else {
                                    utilFile.Core.Util.Noty("提交失败");
                                }
                            });
                    }
                }
            }

        }

        public loadPage(callback?: () => any) {
            this.MemInfoData = {}
            var key = this.Param1;
            this.Search(key);
            if (callback) {
                callback();
            }
        }
    }
    export class DepartmentEntryPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DepartmentEntryPageProps extends basewedPageFile.Web.BaseWebPageProps<DepartmentEntryPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DepartmentEntryPage", basewedPageFile.Web.BaseWebPageVm, DepartmentEntryPageVm);
}