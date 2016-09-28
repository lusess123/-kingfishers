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
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../data");
import gridDomFile = require("./DetectionInsertGridDom");
import SelectorFile = require("./../../../02col/03selector/selector");
export module DetectionInsertGridBodyDom {
    export class DetectionInsertGridBodyDomAction extends domCore.DomAction { }
    export class DetectionInsertGridBodyDomReact extends domCore.DomReact<DetectionInsertGridBodyDomProps, DetectionInsertGridBodyDomStates, DetectionInsertGridBodyDomAction> implements domCore.IReact {
        public state = new DetectionInsertGridBodyDomStates();
        public pSender(): React.ReactElement<any> {
            var body = this.initBody();
            return body;
        }
        public initBody(): React.ReactElement<any> {
            return (
                <tbody>
                    {this.props.Vm.ExamineData.map((a) => {
                        return this.examRow(a);
                        //return this.examSummary(a);
                        //return this.examDoctor(a);
                    }) }
                </tbody>
            )
        }

        public Send(count: string) {
            if (!count) {
                return "";
            } else {
                return "已上传" + count + "张图片";
            }
        }

        public examRow(data: dataFile.DetectionData.IExamineResult): React.ReactElement<any>[] {

            var array = [];
            this.props.Vm.isfrist = true;
            //var length = data.Submit.length();
            var row1 = data.Submit.map((s, index) => {

                //if (index == 0) {
                //    this.props.Vm.isfrist = true;
                //} else {
                //    this.props.Vm.isfrist = false;
                //}

                if (s.isPicture) {
                    s.pictureCount = JSON.parse(s.isPicture)["ResourceInfoList"].length
                }


                var dd = <tr>
                    {
                        this.props.Vm.isfrist ? <td rowSpan={data.Submit.length} className="rowspan">
                            <div className="lr">{data.DeptName}</div>
                        </td> : null
                    }
                    <td>{s.ItemName}</td>
                    <td>{s.Result}</td>
                    <td>{s.Unit}</td>
                    <td>{s.IsPositive == "1" ? "是" : "否"}</td>
                    <td><i className={this.fun_Isoverproof(s.IsOverHint) } aria-hidden="true"></i>{}</td>
                    <td>{s.UpperLimit}</td>
                    <td>{s.LessLimit}</td>
                    <td><a onClick={() => { this.props.Vm.onclickImage(s.isPicture) } }>{this.Send(s.pictureCount) }</a></td>
                </tr>
                this.props.Vm.isfrist = false;
                return dd;
            });
            var row2 = this.examSummary(data);
            var row3 = this.examDoctor(data);
            array.push(row1);
            array.push(row2);
            array.push(row3);
            return array;
        }

        public fun_Isoverproof(_val:number) {
            if (_val == 2) { //超标
                this.props.Vm.IsOverproof = "fa fa-long-arrow-up";
            } else if (_val == 1) {
                this.props.Vm.IsOverproof = "fa fa-long-arrow-down";
            } else {
                this.props.Vm.IsOverproof = "";
            }

            return this.props.Vm.IsOverproof;
        }

        //小结
        public examSummary(data: dataFile.DetectionData.IExamineResult): React.ReactElement<any> {
            return (
                <tr>
                    <td className="rowspan"><div className="lr">小结</div></td>
                    <td colSpan="8">{data.Summary}</td>
                </tr>
            )
        }
        //医生 
        public examDoctor(data: dataFile.DetectionData.IExamineResult): React.ReactElement<any> {
            return (
                <tr>
                    <td className="rowspan"><div className="lr">医生</div></td>
                    <td colSpan="8">{data.GeneralResult}</td>
                </tr>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
    //项目
    export interface IExamineResultData {
        FID?: string;//主键
        Item?: string;//项目
        Conent?: string; //小结
        Doctor?: string;//医生
        Subitem: IExamSubitem[];
    }
    //子项
    export interface IExamSubitem {
        FID?: string;//主键
        Name?: string;//子项名称
        Result?: string;//子项结果
        Unit?: string;//单位
        IsPositive?: string; //阳性
        Indicate?: string;  //指示
        LessLimit?: string;//下限
        UpperLimit?: string;//上限
        IsOverHint?: number;//是否超标提示
        Affix?: string; //附件
    }
    export interface IDetectionGridBodyConfig {
        data: dataFile.DetectionData.IExamineResult[];
    }
    export class DetectionInsertGridBodyDomVm extends domCore.DomVm {
        public isfrist = true;
        public ReactType = DetectionInsertGridBodyDomReact;
        public ExamineData: dataFile.DetectionData.IExamineResult[] = [];
        public gridBodyDomObj: gridDomFile.DetectionInsertGridDom.DetectionInsertGridDomVm;
        public IsOverproof: string;
        public ResultData: dataFile.DetectionData.IExamineResult = {};
        //public SelectResult: SelectorFile.ui.SelectorVm;
        public Itemdata: dataFile.DetectionData.IExamineResult;
        public constructor(config?: IDetectionGridBodyConfig) {
            super();
            if (config) {
              
                this.ExamineData = config.data;
                this.ResultData = config.data;
                //pictureCount
                

                //this.ExamineData.map((a) => {
                //    a.Conent = config.data.Conent;
                //    a.Item = config.data.Item;
                //    a.Doctor = config.data.Doctor;
                //    a.Subitem = config.data.Subitem;
                //})
            }
        }
        //计算需要合并的数量
        public rowspan() {
            var len = this.ExamineData[0].Submit.length;
            return len;
        }
        public getData() {
            var data = this.ResultData[0].Submit;
            return data;
        }

        public onclickImage(picture: string) {
            urlFile.Core.AkUrl.Current().openUrl("$winTOTALDETACIONIMAGEPAGE$" + picture + "$", true);
        }
    }
    export class DetectionInsertGridBodyDomStates extends domCore.DomStates { }
    export class DetectionInsertGridBodyDomProps extends domCore.DomProps<DetectionInsertGridBodyDomVm>{ }
}