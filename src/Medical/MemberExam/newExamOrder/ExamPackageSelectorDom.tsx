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
import singleRadioFile = require("./../../../02col/01single/Radio");
import dataFile = require("./data");
import examFile = require("./newExamOrderPage");
import packageFormFile = require("./PackageSelectorFormDom");
import itemFormFile = require("./ItemSelectorFormDom");

export module ExamPackageSelectorDomDom {
    export class ExamPackageSelectorDomAction extends domCore.DomAction { }

    export class ExamPackageSelectorDomReact extends domCore.DomReact<ExamPackageSelectorDomProps, ExamPackageSelectorDomStates, ExamPackageSelectorDomAction> implements domCore.IReact {
        public state = new ExamPackageSelectorDomStates();
        public fun_radioChange(e) {
            var _val = e.target["value"];
            if (_val == "1") {
                this.props.Vm.isRadioSel = true;
            } else if (_val == "2") {
                this.props.Vm.isRadioSel = false;
            }
            this.props.Vm.radioClick();
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return (
                <div className="YSm-modals">
                    <div className="YSm-modal-header clearfix">
                        <div className="pull-left"><div className="radio">
                            <label>
                                <input type="radio" name="type" value="1" onChange={(a) => { this.fun_radioChange(a) }
                                } checked={this.props.Vm.isRadioSel}/>套餐类型</label>
                        </div>
                        </div>
                        <div className="pull-left"><div className="radio">
                            <label><input type="radio" name="type" onChange={(a) => { this.fun_radioChange(a) } } value="2" checked={!this.props.Vm.isRadioSel} />体检项目</label>
                        </div>
                        </div>
                    </div>
                    <div className="YSm-modal-body clearfix">
                        <div className={this.props.Vm.isRadioSel?"":" hide "}>{ this._tDom(this.props.Vm.PackageFormVm, { nullNode: <span>请载入表单</span> }) }</div>
                        <div className={this.props.Vm.isRadioSel? " hide " : ""}>  {this._tDom(this.props.Vm.ItemFormVm) }</div>
                    </div>
                </div>
            )
        }
        
        //创建选择框
        //public createCheckBox(obj?: any): React.ReactElement<any> {
        //    var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        //    singleCheckVm.Tag = obj;
        //    this.props.Vm.CheckBoxList.push(singleCheckVm);
        //    singleCheckVm.ChangeEventFun = ((val, col) => {
        //        this.props.Vm.checkCheckBox(val, col);
        //        return true;
        //    });
        //    return singleCheckVm.intoDom();
        //}
        //套餐表格 
        //public createMealTable(): React.ReactElement<any> {
        //    return (
        //        <div className="Hm-table table-responsive">
        //            <table className="table table-striped table-bordered table-hover">
        //                <thead>
        //                    <tr>
        //                        <td>{this.props.Vm.AllCheck.intoDom() }</td>
        //                        <td>套餐</td>
        //                        <td>套餐项目</td>
        //                        <td>价格（元）</td>
        //                    </tr>
        //                </thead>
        //                {this.initMealBody() }
        //            </table>
        //        </div>
        //    )
        //}
        //public initMealBody(): React.ReactElement<any> {
        //    return (
        //        <tbody>
        //            {this.props.Vm.RowMealList.map((data) => {
        //                var rowVm = this.createMealRow(data);
        //                return rowVm;
        //            }) }
        //        </tbody>
        //    )
        //}
        ////项目表格
        //public createProjTable(): React.ReactElement<any> {
        //    return (
        //        <div className="Hm-table table-responsive">
        //            <table className="table table-striped table-bordered table-hover">
        //                <thead>
        //                    <tr>
        //                        <td>{this.props.Vm.AllCheck.intoDom() }</td>
        //                        <td>科室</td>
        //                        <td>项目</td>
        //                        <td>价格（元）</td>
        //                    </tr>
        //                </thead>
        //                {this.initProjBody() }
        //            </table>
        //        </div>
        //    )
        //}
        //public initProjBody(): React.ReactElement<any> {
        //    return (
        //        <tbody>
        //            {this.props.Vm.RowProjList.map((data) => {
        //                var rowVm = this.createProjRow(data);
        //                return rowVm;
        //            }) }
        //        </tbody>
        //    )
        //}
        ////创建套餐表格行
        //public createMealRow(data: any): React.ReactElement<any> {
        //    var rowVm = new mealGridRowFile.MealGridRowDom.MealGridRowDomVm();
        //    rowVm.RowData = data;
        //    rowVm.MealDomObj = this.props.Vm;
        //    this.props.Vm.RowMealList.push(rowVm);
        //    rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
        //        this.props.Vm.checkCheckBox(val, col);
        //        rowVm.forceUpdate("");
        //        return true;
        //    });
        //    return rowVm.intoDom();
        //}
        ////创建体检项目表格行
        //public createProjRow(data: any): React.ReactElement<any> {
        //    var rowVm = new projGridRowFile.ProjGridRowDom.ProjGridRowDomVm();
        //    rowVm.RowData = data;
        //    rowVm.ProjDomObj = this.props.Vm;
        //    this.props.Vm.RowProjList.push(rowVm);
        //    rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
        //        this.props.Vm.checkCheckBox(val, col);
        //        rowVm.forceUpdate("");
        //        return true;
        //    })
        //    return rowVm.intoDom();
        //}
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }

    export interface IExamPackageSelectorDomConfig {
        //data1: Data.ExamOrder.IMealTypeListData;
        //data2: Data.ExamOrder.IProjItemListData;
        PackagePagerListData?:dataFile.ExamPackageSelectorData.IPackagePagerListData;
        ItemPagerListData?: dataFile.ExamPackageSelectorData.IItemPagerListData;
        UniId?: string;
        IsGroup?: boolean;
    }

    export class ExamPackageSelectorDomVm extends domCore.DomVm {
        public ReactType = ExamPackageSelectorDomReact;

        public SerachTextVm: string;//检索
        public isRadioSel: boolean=true;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();  //选择框
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;  //全选框 
        public mealRadio: boolean;
        public projRadio: boolean;
        public ExamNewListObj: examFile.NewExamOrderPage.NewExamOrderPageVm;
        public tableData: IExamPackageSelectorDomConfig;
        //public RowMealList = new Array<mealGridRowFile.MealGridRowDom.MealGridRowDomVm>();
        //public RowProjList = new Array<projGridRowFile.ProjGridRowDom.ProjGridRowDomVm>();
        public PackageFormVm: packageFormFile.PackageSelectorFormDom.PackageSelectorFormDomVm;
        public ItemFormVm: itemFormFile.ItemSelectorFormDom.ItemSelectorFormDomVm;
       // public IsPackageChecked: boolean = true;


        public constructor(config?: IExamPackageSelectorDomConfig) {
            super();
            if(config)
            {
                this.UniId = config.UniId;
                if (config.PackagePagerListData && config.ItemPagerListData) {
                    this.init(config);
                }
            }
         
            //if (config) {
            //    this.tableData.data1 = config.data1;
            //    this.tableData.data2 = config.data2;
            //}
            //this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            //this.AllCheck.ChangeEventFun = ((val, col) => {
            //    this.allCheckChecked(val, col);
            //    return true;
            //});
        }

        public radioClick()
        {
            if (this.isRadioSel) {
                this.emitAppEvent("pickerSelect-HideOrShow", this.UniId, false);
            }
            else
            {
                this.emitAppEvent("pickerSelect-HideOrShow", this.UniId, true);

            }

        }

        public init(config?: IExamPackageSelectorDomConfig)
        {
            //if (config&&config.UniId)
            //{
            //    this.UniId = config.UniId;
            //}
          
            this.PackageFormVm = new packageFormFile.PackageSelectorFormDom.PackageSelectorFormDomVm(
                {
                    PagerListData: config.PackagePagerListData,
                    UniId: this.UniId,
                    IsGroup: config.IsGroup
                });
            this.ItemFormVm = new itemFormFile.ItemSelectorFormDom.ItemSelectorFormDomVm(
                {
                    PagerListData: config.ItemPagerListData,
                    UniId: this.UniId
                });

        }
       
        //选择框
        //public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
        //    window["isHand"] = true;
        //    var isCheck = false;
        //    var misAllCheck = true;
        //    var pisAllCheck = true;
        //    var checkCount = 0;
        //    if (val == "true") {
        //        isCheck = true;
        //    }
        //    this.RowMealList.forEach((row) => {
        //        var chk = row.SingleCheckboxVm;
        //        var _val = chk.dataValue();
        //        if (_val == "true" && checkDom != chk) {
        //            isCheck = true;
        //            checkCount++;
        //        }
        //        if (checkDom == chk) {
        //            if (val == "true") {
        //                checkCount++;
        //            }
        //        }
        //    });
        //    this.RowProjList.forEach((row) => {
        //        var chk = row.SingleCheckboxVm;
        //        var _val = chk.dataValue();
        //        if (_val == "true" && checkDom != chk) {
        //            isCheck = true;
        //            checkCount++;
        //        }
        //        if (checkDom == chk) {
        //            if (val == "true") {
        //                checkCount++;
        //            }
        //        }
        //    });
        //    misAllCheck = this.RowMealList.length == checkCount ? true : false;
        //    pisAllCheck = this.RowProjList.length == checkCount ? true : false;
        //    this.AllCheck.vmDataValueSet(misAllCheck ? "true" : "false");
        //    this.AllCheck.vmDataValueSet(pisAllCheck ? "true" : "false");
        //    this.AllCheck.forceUpdate("", () => {
        //        window["isHand"] = false;
        //    })
        //}
        //public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
        //    if (!window["isHand"]) {
        //        this.CheckBoxList.forEach((chk) => {
        //            chk.reactDataValueSet(val);
        //        });
        //        //套餐全选
        //        this.RowMealList.forEach((row) => {
        //            var chk = row.SingleCheckboxVm;
        //            chk.reactDataValueSet(val);
        //        });
        //        //体检项目全选
        //        this.RowProjList.forEach((row) => {
        //            var chk = row.SingleCheckboxVm;
        //            chk.reactDataValueSet(val);
        //        })
        //    }
        //}

    }

    export class ExamPackageSelectorDomStates extends domCore.DomStates { }

    export class ExamPackageSelectorDomProps extends domCore.DomProps<ExamPackageSelectorDomVm>{ }
}