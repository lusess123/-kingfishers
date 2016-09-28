import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import pagination = require("./../../../../05tool/Pagination");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import Selector = require("./../../../../02col/03selector/selector");


export module PersonalRowDom {
    export class PersonalRowDomAction extends domCore.DomAction {
    }

    export class PersonalRowDomReact extends domCore.DomReact<PersonalRowDomProps, PersonalRowDomStates, PersonalRowDomAction> implements domCore.IReact {

        public state = new PersonalRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber + 1}
                        </span>
                    </span>
                </td>
                <td>
                    {this.props.Vm.RowData.GroupName  }
                </td>
                <td>
                    {this.props.Vm.RowData.Name  }
                </td>
                <td>
                    {this.props.Vm.RowData.IDCard }
                </td>
                
                <td>
                    {this.props.Vm.RowData.Age }
                </td>
                <td>
                    {this.props.Vm.GetText(constantData.Data.GenderTypeData, this.props.Vm.RowData.Gender )}
                </td>
                <td>
                    {this.props.Vm.GetText(constantData.Data.MaritalTypeData, this.props.Vm.RowData.MaritalStatus) }
                </td>
                <td>
                    <a className="text-primary" onClick={() => { this.props.Vm.updateOpt(this.props.Vm.RowData.MemberId) } }>修改</a>
                    <a className="text-danger"  onClick={() => { this.props.Vm.delOpt(this.props.Vm.RowData.FID) } }>删除</a></td>

            </tr>;
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPersonalRowDomVm extends domCore.DomVm {

    }

    export interface IPersonalRowDomConfig {
        RowData: DataFile.Group.IMember;
        IsAcsRelative: boolean;
        LeftNum: number;
        UniId: string;
        BatchId: string;
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class PersonalRowDomVm extends domCore.DomVm implements IReactPersonalRowDomVm {
        public ReactType = PersonalRowDomReact;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IMember;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowNumber: number;
        public UniId: string;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public BatchId: string;
        public constructor(config?: IPersonalRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.UniId = config.UniId
                this.BatchId = config.BatchId;
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
        public updateOpt(vals: string) {
            vals = vals + "," + this.BatchId;
            urlFile.Core.AkUrl.Current().openUrl("$WINMemberUPDATEPAGE$" + vals + "$", true);
        }
        public delOpt(vals: string) {
            if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveMember", { fids: vals }, (data) => {
                    var _data = data.Content;
                    if (_data == "ok") {
                        this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId,"PersonalManage");
                    }
                });

            }
        }
        //private initColVm(colName: string, colType: string, legal?: string) {
        //    var _name = colName.toString()
        //    var isexcite = false;

        //    for (var vn in this.ColVmObjList) {
        //        var _obj = this.ColVmObjList[_name];
        //        if (_obj) {
        //            isexcite = true;
        //            _exciteBean = _obj;
        //        }
        //    }

        //    if (!isexcite) {
        //        var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
        //        if (this.RowData[colName] != undefined || this.RowData[colName] != null) {
        //            _exciteBean.dataValueSet(this.RowData[colName]);
        //        }
        //        _exciteBean.Tag = colName;
        //        _exciteBean.LegalObj.Kind = legal ? legal : "";
        //        _exciteBean.onChangeHandle((val) => {
        //            this.RowData[colName] = val;
        //            return true;
        //        });
        //        if (colType == "ComboVm") {
        //            this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
        //        }
        //        //if (colType == "SelectorVm")
        //        //{
        //        //    this.initSelector(colName, utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean));
        //        //}
        //        this.ColVmObjList[_name] = _exciteBean;
        //    }
        //}
        //public initSelector(colName: string, selectVm: Selector.ui.SelectorVm) {
        //    selectVm.RegName = "UnitDataTable";
        //    selectVm.OnPostDataSetFun = function (ds) {
        //        var _rows = ds["UnitGroupTable"] = [];
        //        var _row = { UnitId: "001" };
        //        _rows.push(_row);
        //        return ds;
        //    } 
        //}
        //public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
        //    switch (colName) {
        //        case "Gender":
        //            comboVm.ItemList = constantData.Data.GenderTypeData;
        //            comboVm.dataValue(String(this.RowData[colName]));
        //            break;
        //        case "MaritalStatus":
        //            comboVm.ItemList = constantData.Data.MaritalTypeData;
        //            comboVm.dataValue(String(this.RowData[colName]));
        //            break;
        //        case "Job":
        //            comboVm.ItemList = constantData.Data.JobTypeData;
        //            comboVm.dataValue(String(this.RowData[colName]));
        //            break;
        //        case "Term":
        //            comboVm.ItemList = constantData.Data.JobTypeData;
        //            comboVm.dataValue(String(this.RowData[colName]));
        //            break;
        //        case "Pay":
        //            comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
        //            comboVm.dataValue(String(this.RowData[colName]));
        //            break;
        //        case "Price":
        //            comboVm.ItemList = constantData.Data.JobTypeData;
        //            comboVm.dataValue(this.RowData[colName]);
        //            break;
        //        default:
        //            break;
        //    }
        //}
        public legal(): boolean {
            //  var l1 = this.initColVm["BatchName"].legal();
            // var l2 = this.initColVm["BeginDate"].legal();
            //   var l3 = this.initColVm["EndDate"].legal();
            //  var l4 = this.initColVm["PreNumber"].legal();
            //  var _res = l1 && l2 && l3 && l4;
            return true;
        }

    }
    export class PersonalRowDomStates extends domCore.DomStates {
    }


    export class PersonalRowDomProps extends domCore.DomProps<PersonalRowDomVm>{
    }



}
