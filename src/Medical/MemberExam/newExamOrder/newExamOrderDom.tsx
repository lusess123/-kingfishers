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
import Data = require("./../data");
import examFile = require("./newExamOrderPage");
import mealGridRowFile = require("./mealGridRowDom");
import projGridRowFile = require("./projGridRowDom");
export module ExamNewDom {
    export class ExamNewDomAction extends domCore.DomAction { }
    export class ExamNewDomReact extends domCore.DomReact<ExamNewDomProps, ExamNewDomStates, ExamNewDomAction> implements domCore.IReact {
        public state = new ExamNewDomStates();
        public fun_radioChange(e) {
            var _val = e.target["value"];
            if (_val == "1") {
                this.props.Vm.isRadioSel = true;
            } else if (_val == "2") {
                this.props.Vm.isRadioSel = false;
            }
            this.forceUpdate();
        }
        public pSender(): React.ReactElement<any> {
            return (
                <div className="YSm-modals">
                    <h4 className="YSu-modal-title">新增体检项</h4>
                    <div className="YSm-modal-header clearfix">
                        <div className="pull-left"><div className="radio">
                            <label>
                                <input type="radio" name="type" value="1" onChange={(a) => { this.fun_radioChange(a) }
                                }  defaultChecked/>套餐类型</label>
                        </div>
                        </div>
                        <div className="pull-left"><div className="radio">
                            <label><input type="radio" name="type" onChange={(a) => { this.fun_radioChange(a) } } value="2"/>体检项目</label>
                        </div>
                        </div>
                    </div>
                    <div className="YSm-modal-body clearfix">
                        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 YSm-modal-left">
                            <div className="YSm-search">
                                <label className=" YSu-modal-label">检索</label>
                                <input type="text" className="Hg-width"/>
                            </div>
                            {this.props.Vm.isRadioSel ? this.createMealTable() : this.createProjTable() }
           
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 YSm-modal-right">
                            <p className="YSu-title">已选择项目</p>
                            <ul className="nav">
                                <li className="nav-item"><a>血常规<i className="fa fa-close"></i></a></li>
                                <li className="nav-item"><a>内科<i className="fa fa-close"></i></a></li>
                                <li className="nav-item"><a>泌尿<i className="fa fa-close"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="YSm-modal-footer text-center">
                        <a className="btn btn-sm btn-secondary">取消</a>
                        <a className="btn btn-sm btn-primary">保存</a>
                    </div>
                </div>
            )
        }
        
        //创建选择框
        public createCheckBox(obj?: any): React.ReactElement<any> {
            var singleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
            singleCheckVm.Tag = obj;
            this.props.Vm.CheckBoxList.push(singleCheckVm);
            singleCheckVm.ChangeEventFun = ((val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                return true;
            });
            return singleCheckVm.intoDom();
        }
        //套餐表格 
        public createMealTable(): React.ReactElement<any> {
            return (
                <div className="Hm-table table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>{this.props.Vm.AllCheck.intoDom() }</th>
                                <th>套餐</th>
                                <th>套餐项目</th>
                                <th>价格（元）</th>
                            </tr>
                        </thead>
                        {this.initMealBody() }
                    </table>
                </div>
            )
        }
        public initMealBody(): React.ReactElement<any> {
            return (
                <tbody>
                    {this.props.Vm.RowMealList.map((data) => {
                        var rowVm = this.createMealRow(data);
                        return rowVm;
                    }) }
                </tbody>
            )
        }
        //项目表格
        public createProjTable(): React.ReactElement<any> {
            return (
                <div className="Hm-table table-responsive">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>{this.props.Vm.AllCheck.intoDom() }</th>
                                <th>科室</th>
                                <th>项目</th>
                                <th>价格（元）</th>
                            </tr>
                        </thead>
                        {this.initProjBody() }
                    </table>
                </div>
            )
        }
        public initProjBody(): React.ReactElement<any> {
            return (
                <tbody>
                    {this.props.Vm.RowProjList.map((data) => {
                        var rowVm = this.createProjRow(data);
                        return rowVm;
                    }) }
                </tbody>
            )
        }
        //创建套餐表格行
        public createMealRow(data: any): React.ReactElement<any> {
            var rowVm = new mealGridRowFile.MealGridRowDom.MealGridRowDomVm();
            rowVm.RowData = data;
            rowVm.MealDomObj = this.props.Vm;
            this.props.Vm.RowMealList.push(rowVm);
            rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            });
            return rowVm.intoDom();
        }
        //创建体检项目表格行
        public createProjRow(data: any): React.ReactElement<any> {
            var rowVm = new projGridRowFile.ProjGridRowDom.ProjGridRowDomVm();
            rowVm.RowData = data;
            rowVm.ProjDomObj = this.props.Vm;
            this.props.Vm.RowProjList.push(rowVm);
            rowVm.SingleCheckboxVm.ChangeEventFun = ((val, col) => {
                this.props.Vm.checkCheckBox(val, col);
                rowVm.forceUpdate("");
                return true;
            })
            return rowVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }

    export interface IExamNewDomConfig {
        data1: Data.ExamOrder.IMealTypeListData;
        data2: Data.ExamOrder.IProjItemListData;
    }
    export class ExamNewDomVm extends domCore.DomVm {
        public ReactType = ExamNewDomReact;

        public SerachTextVm: string;//检索
        public isRadioSel: boolean=true;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();  //选择框
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;  //全选框 
        public mealRadio: boolean;
        public projRadio: boolean;
        public ExamNewListObj: examFile.NewExamOrderPage.NewExamOrderPageVm;
        public tableData: IExamNewDomConfig;
        public RowMealList = new Array<mealGridRowFile.MealGridRowDom.MealGridRowDomVm>();
        public RowProjList = new Array<projGridRowFile.ProjGridRowDom.ProjGridRowDomVm>();



        public constructor(config?: IExamNewDomConfig) {
            super();
            //if (config) {
            //    this.tableData.data1 = config.data1;
            //    this.tableData.data2 = config.data2;
            //}
            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = ((val, col) => {
                this.allCheckChecked(val, col);
                return true;
            });
        }
       
        //选择框
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            window["isHand"] = true;
            var isCheck = false;
            var misAllCheck = true;
            var pisAllCheck = true;
            var checkCount = 0;
            if (val == "true") {
                isCheck = true;
            }
            this.RowMealList.forEach((row) => {
                var chk = row.SingleCheckboxVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkCount++;
                    }
                }
            });
            this.RowProjList.forEach((row) => {
                var chk = row.SingleCheckboxVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkCount++;
                    }
                }
            });
            misAllCheck = this.RowMealList.length == checkCount ? true : false;
            pisAllCheck = this.RowProjList.length == checkCount ? true : false;
            this.AllCheck.vmDataValueSet(misAllCheck ? "true" : "false");
            this.AllCheck.vmDataValueSet(pisAllCheck ? "true" : "false");
            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            })
        }
        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {
            if (!window["isHand"]) {
                this.CheckBoxList.forEach((chk) => {
                    chk.reactDataValueSet(val);
                });
                //套餐全选
                this.RowMealList.forEach((row) => {
                    var chk = row.SingleCheckboxVm;
                    chk.reactDataValueSet(val);
                });
                //体检项目全选
                this.RowProjList.forEach((row) => {
                    var chk = row.SingleCheckboxVm;
                    chk.reactDataValueSet(val);
                })
            }
        }

    }
    export class ExamNewDomStates extends domCore.DomStates { }
    export class ExamNewDomProps extends domCore.DomProps<ExamNewDomVm>{ }
}