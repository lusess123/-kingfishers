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
import dptListPageFile = require("./DepartmentEntryPage");
import medicalFile = require("./MedicalTableDom");
import textile = require("./../../../02col/01single/Text");
import PickDomFile = require("./../../../05tool/Picker/PickDom");
import departPicklist = require("./../tools/DepartPickListDom");
import anomalyPicklist = require("./../tools/AnomalyConclusion/AnomalyPickListDom");

export module DepartSummaryDom {
    export class DepartSummaryDomAction extends domCore.DomAction { }
    export class DepartSummaryDomReact extends domCore.DomReact<DepartSummaryDomProps, DepartSummaryDomStates, DepartSummaryDomAction> implements domCore.IReact {
        public state = new DepartSummaryDomStates();
        public pSender(): React.ReactElement<any> {
            var row = this.createRow();
            return row;
        }

        public createRow(): React.ReactElement<any> {
            return (
                <div className="ui-summary-main clearfix">
                    <div className="ui-dpt-depart-summary pull-left col-lg-6 required">
                        <div><h2 className="pull-left summary-title">科室小结</h2><ul className="pull-right ui-summary-opt">

                            <li className="YSu-link" onClick={() => { this.props.Vm.autoSummary() } }>自动小结</li>

                            <li className="YSu-link" onClick={() => { this.props.Vm.TemplateClick() } }>模板</li>

                        </ul>
                        </div>
                        {this.props.Vm.DepartAreaVm.intoDom() }
                    </div>
                    <div className="ui-dpt-medical-summary pull-right col-lg-6">
                        <div><h2 className="pull-left summary-title">疾病诊断</h2><ul className="pull-right ui-summary-opt">
                            <li className="YSu-link" onClick={() => { this.props.Vm.autoDiagnosis() } }>自动诊断</li>

                            <li className="YSu-link" onClick={() => { this.props.Vm.AnomalyClick() } }>从库中选择</li></ul></div>
                        {
                            this.props.Vm.MedicalDomObj.intoDom()
                        }


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
        //科室小结文本域
        public createDepartArea(): React.ReactElement<any> {
            var _vm = this.props.Vm.DepartAreaVm;
            if (!_vm) {
                _vm = this.getArea(this.props.Vm.Text);
                _vm.onChangeHandle((str) => {
                    this.props.Vm.Text = str;
                    return true;
                })
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
    export interface IDepartmentConfig {
        data?: dataFile.Result.IConclusionData;
        Unid?: string;
        AreaText?: string;
        aonmalyData?: dataFile.Result.AnomalyTemplate[];
        isedit?: boolean;
    }

    export interface IPickItemDomConfig {
        Text: string;
        Key: string;

    }
    export class DepartSummaryDomVm extends domCore.DomVm {
        public ReactType = DepartSummaryDomReact;
        public SummaryData: dataFile.Result.IConclusionData = { Content: "" };
        //public SummaryDomObj: dptListPageFile.DepartmentEntryPage.DepartmentPageVm;
        public MedicalDomObj: medicalFile.MedicalDom.MedicalDomVm;
        //弹出框控件
        public PickDomObj: PickDomFile.PickDom.PickDomVm = new PickDomFile.PickDom.PickDomVm();
        public AnomalyPickDomObj: PickDomFile.PickDom.PickDomVm;

        public DepartDomObj: departPicklist.DepartPickListDom.DepartPickListDomVm;
        public AnomalyDomObj: anomalyPicklist.AnomalyPickListDom.AnomalyPickListDomVm
        public Text: string;
        public aonmalyData: dataFile.Result.AnomalyTemplate[]
        public DepartAreaVm: textAreaFile.ui.TextAreaVm; // 科室小结

        public isedit: boolean;
        public constructor(config?: IDepartmentConfig) {
            super();
            this.aonmalyData = new Array<dataFile.Result.AnomalyTemplate>();
            this.MedicalDomObj = new medicalFile.MedicalDom.MedicalDomVm();
            if (config) {

                if (config.Unid) {
                    this.UniId = config.Unid;
                }
                if (config.AreaText) {
                    this.Text = config.AreaText;
                }
                if (config.isedit) {
                    this.isedit = config.isedit;
                }
                this.aonmalyData = config.aonmalyData
                if (config.aonmalyData) {
                    var config1 = { data: config.aonmalyData, Unid: this.UniId, isedit: config.isedit }
                    this.MedicalDomObj = new medicalFile.MedicalDom.MedicalDomVm(config1);
                }

            }
            this.DepartAreaVm = new textAreaFile.ui.TextAreaVm();
            if (!this.isedit)
            {
                this.DepartAreaVm.isReadOnly = true;
            }
            this.DepartAreaVm.LegalObj.Kind = "notNull";

            this.DepartAreaVm.dataValueSet(this.Text);

            this.DepartAreaVm.onChangeHandle((str) => {
                this.Text = str;
                return true;
            })
            var _itemList: IPickItemDomConfig[] = [];
            var deptConfig: departPicklist.DepartPickListDom.IDepartPickListDomConfig = { UniId: this.UniId }
            var pickdomobj = new departPicklist.DepartPickListDom.DepartPickListDomVm(deptConfig);
            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {
                    UniId: this.UniId,
                    PickItemList: _itemList,
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
                    PickItemList: _itemList,
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

        public TemplateClick() {
            if (this.isedit) {
                this.PickDomObj.modalObj.open();
            } else {
                alert("您不能修改！");
            }
        }

        public AnomalyClick() {
            if (this.isedit) {
                this.AnomalyPickDomObj.modalObj.open();
            }
            else {
                alert("您不能修改！");
            }
        }
        public autoSummary() {
            if (this.isedit) {
                this.emitAppEvent("Departments/List/DepartSummaryDom", this.UniId);
            } else {
                alert("您不能修改！");
            }
        }
        public autoDiagnosis() {
            if (this.isedit) {
                this.emitAppEvent("Departments/List/autoDiagnosis", this.UniId);
            } else {
                alert("您不能修改！");
            }
        }
    }
    export class DepartSummaryDomStates extends domCore.DomStates { }
    export class DepartSummaryDomProps extends domCore.DomProps<DepartSummaryDomVm>{ }
}