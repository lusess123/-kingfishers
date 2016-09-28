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
import PickDomFile = require("./../../../../05tool/Picker/PickDom");
import pickLeftDomFile = require("./../../../MemberExam/newExamOrder/ExamPackagePickListDom");
import textFile = require("./../../../../02col/01single/Text");


export module GroupRuleRowDom {
    export class GroupRuleRowDomAction extends domCore.DomAction {
    }

    export class GroupRuleRowDomReact extends domCore.DomReact<GroupRuleRowDomProps, GroupRuleRowDomStates, GroupRuleRowDomAction> implements domCore.IReact {

        public state = new GroupRuleRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td  className={(this.props.Vm.IsAcsRelative ? "  Hf-relative Hf-table-td " : "") }
                    style={{ left: this.props.Vm.LeftNum }} >
                    <span>{this.createSingleCheckBox() }
                        <span>{this.props.Vm.RowNumber +1}
                        </span>
                    </span>
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["Name"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["AgeLowerLimit"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["AgeUpperLimit"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["Gender"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["MaritalStatus"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["Job"].intoDom() }
                </td>
                <td>
                    {this.props.Vm.ColVmObjList["Other"].intoDom() }
                </td>
                <td className="Hg-relative">
                    {this.props.Vm.ColVmObjList["selectName"].intoDom() }
                    <a className="col-lg-2 col-md-2 col-sm-2 input-group-addon YSu-selector-btn" onClick ={() => { this.props.Vm.selectOpt() } }><i className="fa fa-credit-card"></i></a>
                </td>
                <td>
                    <a className="text-danger"  onClick={() => { this.props.Vm.delOpt(this.props.Vm.RowData.FID) } }>删除</a>
                </td>
              <div className="Hf-overflow" style={{ height: 1, width: 1 }}>{this.props.Vm.PickDomObj.intoDom() }</div>
            </tr>;
        }
        private createSingleCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckVm.intoDom();
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGroupRuleRowDomVm extends domCore.DomVm {

    }
    export interface IPickItemDomConfig {
        Text: string;
        Key: string;
    }

    export interface IGroupRuleRowDomConfig {
        RowData: DataFile.Group.IGroupBathData;
        IsAcsRelative: boolean;
        LeftNum: number;
        RowNumber: number;
        UniId: string
        BatchId: string;
        UniIdSelect: string
    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class GroupRuleRowDomVm extends domCore.DomVm implements IReactGroupRuleRowDomVm {
        public ReactType = GroupRuleRowDomReact;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IGroupBathData = {};
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public RowNumber: number;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public BatchId: string;
        public PickDomObj: PickDomFile.PickDom.PickDomVm;
        public selectId: string;
        public UniIdSelect: string;
        public IsItemSelected: boolean = false;
        protected pIsHullAutoHide: boolean = true;
        public IsPackageSelected: boolean = true; //是否选择套餐

        public constructor(config?: IGroupRuleRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
                this.IsAcsRelative = config.IsAcsRelative;
                this.LeftNum = config.LeftNum;
                this.RowNumber = config.RowNumber;
                this.UniId = config.UniId
                this.UniIdSelect = config.UniIdSelect
                this.BatchId = config.BatchId
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("AgeLowerLimit", "TextVm", "SeatLegal");
                this.initColVm("AgeUpperLimit", "TextVm", "custom");
                this.initColVm("Gender", "ComboVm");
                this.initColVm("MaritalStatus", "ComboVm");
                this.initColVm("Job", "ComboVm");
                this.initColVm("Other", "TextVm");
                this.initColVm("selectName", "TextVm","notNull");
            }

            var _itemList: IPickItemDomConfig[] = [];
            var _LeftDomVmObj = new pickLeftDomFile.ExamPackagePickListDom.ExamPackagePickListDomVm({ UniId: this.UniIdSelect });
            this.PickDomObj = new PickDomFile.PickDom.PickDomVm(
                {
                    UniId: this.UniIdSelect,
                    PickItemList: _itemList,
                    PickerContainer:
                    {
                        UniId: this.UniIdSelect,
                        IsSingle: true,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: true,
                        SetSureCustomerObjFun: (items) => {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                }
            );
            this.listenAppEvent("ExamPackageItemsDisplay", this.UniIdSelect, (item: IPickItemDomConfig) => {
                var itemName = "";
                var itemId = ""
                itemId = item.Key
                itemName = item.Text
                this.IsPackageSelected = true;
                this.IsItemSelected = true;
                this.RowData.selectName = itemName;
                this.RowData.selectId = itemId;
                this.RowData.selectType = "Package";
                //this.initColVm("selectName", "TextVm", "Null");
                this.ColVmObjList["selectName"].dataValueSet(itemName);
               // this.sendData(itemName, itemId, "Package")
                this.forceUpdate("");
                return;
            });

            this.listenAppEvent("picker-sure", this.UniIdSelect, (items: IPickItemDomConfig[]) => {
                var _list = [];
                var itemName = "";
                var itemId = ""
                if (items.length >0)
                {
                    itemId = items[0].Key
                    itemName = items[0].Text
                    for (var i = 1; i < items.length;i++ )
                    {
                        itemId = itemId+","+ items[i].Key
                        itemName = itemName + ","+  items[i].Text
                    }
                }
                this.IsPackageSelected = false;

                this.RowData.selectName = itemName;
                this.RowData.selectId = itemId;
                this.RowData.selectType = "Item";
                this.ColVmObjList["selectName"].dataValueSet(itemName);
                //this.sendData(itemName, itemId, "Item")
                this.forceUpdate("");

                return;
               // this.initColVm("selectName", "TextVm","Null");
            });
         
        }
        //public sendData(selectName: string, selectId: string, selectType: string)
        //{
        //    this.emitAppEvent("Manage/GroupRuleRow/sendData", this.UniId, this.RowNumber, selectName, selectId,selectType);
        //}
        public delOpt(val: string) {
            this.emitAppEvent("Manage/GroupRuleRow", this.UniId, this.RowNumber, this.RowData.FID);
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
            if (legal == "Null")
            {
                _exciteBean.dataValueSet(this.RowData[colName]);
            }
            if (!isexcite) {
                var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance<baseColFile.Core.BaseColVm>(colType, baseColFile.Core.BaseColVm);
                _exciteBean.Tag = colName;
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                _exciteBean.IsMulit =true
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                if (legal == "custom") {
                    _exciteBean.LegalObj.CustomLegalFun = (col) => {
                        return this.compareSize(_exciteBean.TempDataValue, utilFile.Core.Util.Cast<textFile.ui.TextVm>(_exciteBean));
                    }
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        public compareSize(num2: string, textVm: textFile.ui.TextVm): string {
            var re = /^[0-9]*[1-9][0-9]*$/;
            if (!re.test(num2)) {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "输入整数"
                return "输入整数！";

            }

            var num = Number(num2)
            var num1 = Number(this.RowData["AgeLowerLimit"]);
            if (num1 > num) {
                textVm.LegalObj.LegalResult = true;
                textVm.LegalObj.ErrMsg = "年龄上限不能大于年龄下限"
                return "年龄下限大于年龄上限！";
            }
            else {
                textVm.LegalObj.LegalResult = false;
                textVm.showLegal();
                return "";
            }
        }

        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm) {
            switch (colName) {
                case "Gender":
                    comboVm.ItemList = constantData.Data.GenderTypeData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");               
                    else
                      comboVm.dataValueSet(String(this.RowData[colName]))
                      comboVm.setOriValue(String(this.RowData[colName]))                 
                    break;
                case "MaritalStatus":
                    comboVm.ItemList = constantData.Data.SelectMaritalData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");
                    else
                      comboVm.dataValueSet(String(this.RowData[colName]))
                      comboVm.setOriValue(String(this.RowData[colName]))                 
                    break; 
                case "Job":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");
                    else
                        comboVm.dataValueSet(String(this.RowData[colName]))
                        comboVm.setOriValue(String(this.RowData[colName]))                 
                    break; 
                case "Term":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");
                    else
                        comboVm.setOriValue(String(this.RowData[colName]))                 
                        comboVm.dataValue(this.RowData[colName]);
                    break; 
                case "Pay":
                    comboVm.ItemList = constantData.Data.ExamBanlanceKindData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");
                    else
                        comboVm.dataValueSet(String(this.RowData[colName]))
                        comboVm.setOriValue(String(this.RowData[colName]))                 

                    break; 
                case "Price":
                    comboVm.ItemList = constantData.Data.JobTypeData;
                    if (this.RowData[colName] == null || this.RowData[colName] == undefined || this.RowData[colName] == "")
                        comboVm.dataValue("0");
                    else
                        comboVm.dataValueSet(String(this.RowData[colName]))
                        comboVm.setOriValue(String(this.RowData[colName]))                 
                    break; 
                default:
                    break;
            }
        }
        public selectOpt() {

            this.PickDomObj.modalObj.open();
            this.emitAppEvent("PackageorItemChecked", this.UniIdSelect, this.IsPackageSelected);

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

    }
    export class GroupRuleRowDomStates extends domCore.DomStates {
    }


    export class GroupRuleRowDomProps extends domCore.DomProps<GroupRuleRowDomVm>{
    }



}
