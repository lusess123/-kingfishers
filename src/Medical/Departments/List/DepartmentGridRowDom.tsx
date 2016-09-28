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
import SelectorFile = require("./../../../02col/03selector/selector");
import dataFile = require("./../data");
import dptGridDomFile = require("./DepartmentTableDom");
import textFile = require("./../../../02col/01single/Text");
import baseColFile = require("./../../../02col/00core/BaseCol");

export module DepartmentGridRowDom {
    export class DepartmentGridRowDomAction extends domCore.DomAction { }
    export class DepartmentGridRowDomReact extends domCore.DomReact<DepartmentGridRowDomProps, DepartmentGridRowDomStates, DepartmentGridRowDomAction> implements domCore.IReact {
        public state = new DepartmentGridRowDomStates();
        public pSender(): React.ReactElement<any> {
            return (
                <tr>
                    <td>{this.props.Vm.Itemdata.Name}</td>
                    <td>{this.props.Vm.ColVmObjList["IsPositive"].intoDom() }</td>
                    <td>{this.props.Vm.SelectResult.intoDom() }</td>
                    <td>{this.props.Vm.Itemdata.Unit}</td>
                    <td><i className={this.fun_Isoverproof() } aria-hidden="true"></i></td>
                    <td>{this.props.Vm.Itemdata.UpperLimit}</td>
                    <td>{this.props.Vm.Itemdata.LowerLimit}</td>
                    <td>{this.props.Vm.ColVmObjList["IsGivenUp"].intoDom() }</td>
                    <td><a onClick={() => { this.props.Vm.onUplodeImage() } }>{this.Send(this.props.Vm.Itemdata.PictureCount) }</a></td>
                </tr>
            )
        }
        public Send(count: string) {
            if (!count) {
                return "上传图片";
            } else {
                return "已上传" + count + "张图片";
            }
        }

        //public createSingleCheckBox(): React.ReactElement<any> {
        //    return this.props.Vm.SingleCheckboxVm.intoDom();
        //}
        ////是否阴性 
        //public fun_positive(e) {
        //    var _val = e.target["value"];
        //    if (_val == "1") {
        //        this.props.Vm.IsPositive = true;
        //    } else {
        //        this.props.Vm.IsPositive = false;
        //    }
        //    this.forceUpdate();
        //}
        ////是否弃检
        //public fun_waiver(e) {
        //    var _val = e.target["value"];
        //    if (_val == "1") {
        //        this.props.Vm.IsWaiver = true;
        //    } else {
        //        this.props.Vm.IsWaiver = false;
        //    }
        //    this.forceUpdate();
        //}
        //超标图标
        public fun_Isoverproof() {
            var _val = this.props.Vm.IsOverproof;
            if (_val == "2") { //超标
                this.props.Vm.Itemdata.IsOverHint = 2;
                this.props.Vm.IsOverproof = "fa fa-long-arrow-up";
            } else if (_val == "1") {
                this.props.Vm.Itemdata.IsOverHint = 1;
                this.props.Vm.IsOverproof = "fa fa-long-arrow-down";
            } else {
                this.props.Vm.Itemdata.IsOverHint = 0;
                this.props.Vm.IsOverproof = "";
            }

            return this.props.Vm.IsOverproof;
        }
        //public fun_result(e) {
        //    var _val = e.target["value"];
        //    this.props.Vm.ResultData.Result = _val;
        //    this.forceUpdate();

        //}
        public createRow(): React.ReactElement<any> {
            return (
                <tr>
                    <td>{this.props.Vm.Itemdata.Name}</td>
                    <td>{this.props.Vm.IsPositiveCheckBox.intoDom() }</td>
                    <td>{this.props.Vm.result}</td>
                    <td>{this.props.Vm.Itemdata.Unit}</td>
                    <td><i className={this.fun_Isoverproof() } aria-hidden="true"></i></td>
                    <td>{this.props.Vm.Itemdata.UpperLimit}</td>
                    <td>{this.props.Vm.Itemdata.LowerLimit}</td>
                    <td>{this.props.Vm.IsGivenupCheckBox.intoDom() }</td>
                    <td>{this.props.Vm.IsExamedCheckBox.intoDom() }</td>
                    <td><a onClick={this.props.Vm.onUplodeImage() }>{this.props.Vm.Affix}</a></td>
                </tr>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface IDepartmentConfig {
        ExamItemData: dataFile.Result.IMemberExamItemData;
    }
    export class DepartmentGridRowDomVm extends domCore.DomVm {
        public ReactType = DepartmentGridRowDomReact;
        public SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsPositiveCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsExamedCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();
        public IsGivenupCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();

        public SelectResult: SelectorFile.ui.SelectorVm;
        public ResultData: dataFile.Result.IItemResultData = {};
        public Itemdata: dataFile.Result.IMemberExamItemData;

        //public IsPositive: boolean = false; //是否阴性
        //public IsWaiver: boolean = false; //是否弃检
        public IsOverproof: string; //是否超标
        public Affix: string = "上传图片";//附件

        public ColVmObjList: IColVmDic = {};
        public TextVmObjList: ITextVmDic = {};

        public result = "";
        public ResultVm: string;
        public RowNumber: string;
        public IDepartmentRowDomObj: dptGridDomFile.DepartmentGridDom.DepartmentGridDomVm;
        public constructor(config?: IDepartmentConfig) {
            super();
            var data: SelectorFile.ui.ISelectorConfig = { IsTextArea: true, NoAutoSuggest: true, OpenLinkTxt: "常见结果", RegName: "BaseResultCommonCodeTable", HasCanEdit: true }

            this.SelectResult = new SelectorFile.ui.SelectorVm(data);
            this.initColVm("Result", "TextVm");
            this.initColVm("IsPositive", "SingleCheckBoxVm");
            this.initColVm("IsGivenUp", "SingleCheckBoxVm");
            if (config) {
                
                this.Itemdata = config.ExamItemData;

                var itemid = this.Itemdata.ItemId;
                var Upper = this.Itemdata.UpperLimit;
                var Lower = this.Itemdata.LowerLimit;
                if (this.Itemdata.IsOverHint) {
                    this.IsOverproof = this.Itemdata.IsOverHint.toString();
                }
                if (this.Itemdata.Picture) {
                    var imageobj = JSON.parse(this.Itemdata.Picture);
                    this.Itemdata.PictureCount = imageobj["ResourceInfoList"].length;
                }


                this.SelectResult.OnPostDataSetFun = function (ds) {
                    var _rows = ds["ItemId"] = [];
                    var _row = { ItemId: itemid };
                    _rows.push(_row);
                    return ds;
                }

                this.SelectResult.onBlurFun = (a) => {
                    if (Upper && Lower) {
                        var num = parseFloat(a);
                        if (num > Upper) {
                            this.IsOverproof = "2";
                        } else if (num < Lower) {
                            this.IsOverproof = "1";
                        } else {
                            this.IsOverproof = "0";
                        }
                        this.forceUpdate("");
                    }
                }


                if (this.Itemdata.IsGivenUp != null && this.Itemdata.IsGivenUp == 1) {
                    this.ColVmObjList["IsGivenUp"].dataValueSet("true");
                }

                if (this.Itemdata.IsPositive != null && this.Itemdata.IsPositive == 1) {
                    this.ColVmObjList["IsPositive"].dataValueSet("true");
                }

                if (this.Itemdata.Result) {
                    this.SelectResult.Text = this.Itemdata.Result;
                    //this.SelectResult.dataValueSet(this.Itemdata.Result);
                }

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
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.ResultData[colName] = val;
                    return true;
                });
            }
            this.ColVmObjList[_name] = _exciteBean;
        }

        public getData() {
            var data = this.ResultData;
            data.Result = this.SelectResult.Text;
            data.FID = this.Itemdata.MemberExamItemId;
            data.Picture = this.Itemdata.Picture;
            data.IsOverHint = this.Itemdata.IsOverHint;
            return data;
        }

        public onUplodeImage() {
            urlFile.Core.AkUrl.Current().openUrl("$winDEPARTMENTIMAGEPAGE$" + JSON.stringify(this.Itemdata) + "$", true);
        }

    }
    export class DepartmentGridRowDomStates extends domCore.DomStates { }
    export class DepartmentGridRowDomProps extends domCore.DomProps<DepartmentGridRowDomVm>{ }
}