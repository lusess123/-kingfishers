import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import textFile = require("./../../02col/01single/Text");
import dataFile = require("./Data");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import baseColFile = require("./../../02col/00core/BaseCol");

import PickSelectorFile = require("./../../02col/03selector/PickSelector");
import ExamPickListDomFile = require("./ExamItemSelector/Pick/ExamPickListDom");



export module ItemConditionInsertDetailRowDom {
    export class ItemConditionInsertDetailRowDomAction extends domCore.DomAction {
    }

    export class ItemConditionInsertDetailRowDomReact extends domCore.DomReact<ItemConditionInsertDetailRowDomProps, ItemConditionInsertDetailRowDomStates, ItemConditionInsertDetailRowDomAction> implements domCore.IReact {

        public state = new ItemConditionInsertDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>
                <td>{this.props.Vm.PickSelector.intoDom()}</td>
                <td>{this.props.Vm.ColVmObjList["GreaterThan"].intoDom() }</td>
                <td>{this.props.Vm.ColVmObjList["LessThan"].intoDom() }</td>
                <td>{this.props.Vm.ColVmObjList["Unit"].intoDom() }</td>
                <td>{this.props.Vm.ColVmObjList["IsPositive"].intoDom() }</td>
                <td>{this.props.Vm.ColVmObjList["KeyWord"].intoDom() }</td>

                <td><i className="fa fa-minus-circle Hu-pointer red" onClick={(e) => { this.fun_delButtonRow() } }></i></td>
            </tr>;
        }

        private fun_delButtonRow() {
            this.props.Vm.delButtonRow();
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


    export interface IItemConditionInsertDetailRowDomConfig {

        UniId: string;
        RowData: dataFile.Data.IItemConditionData;
        IsNew?: boolean;
    }

    export class ItemConditionInsertDetailRowDomVm extends domCore.DomVm {
        public ReactType = ItemConditionInsertDetailRowDomReact;
        public RowNumber: number;
        public ColVmObjList: IColVmDic = {};
        public RowData: dataFile.Data.IItemConditionData;
        public UniId: string;
        public IsPositiveCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public IsNew: boolean = false;
        public PickSelector: PickSelectorFile.PickSelector.PickSelectorVm;

        public constructor(config?: IItemConditionInsertDetailRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                if (config.IsNew) {
                    this.IsNew = config.IsNew;
                }
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
            }
            var _obj: ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm =
                new ExamPickListDomFile.ExamPickListDom.ExamPickListDomVm(
                    {
                        UniId: this.UniId
                    });
            this.PickSelector =
                new PickSelectorFile.PickSelector.PickSelectorVm(
                    {
                        LeftDomVmObj: _obj,
                        UniId: this.UniId
                    }
                );
            this.PickSelector.LegalObj.Kind = "notNull";
            //this.initColVm("ItemName", "TextVm", "notNull");
            this.initColVm("GreaterThan", "TextVm");
            this.initColVm("LessThan", "TextVm");
            this.initColVm("Unit", "TextVm");
            this.initColVm("KeyWord", "TextVm");
            this.initColVm("IsPositive", "SingleCheckBoxVm");
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
                    this.RowData[colName] = val;
                    return true;
                });
                this.ColVmObjList[_name] = _exciteBean;
            }
        }

        public toChange() {
            this.IsChange = true;
            for (var n in this.ColVmObjList) {
                this.ColVmObjList[n].IsChange = true;
            }
        }

        public delButtonRow() {
            this.emitAppEvent("medical/base/ItemCondition/update/DetailRow", this.UniId, this.RowNumber);
        }

        public legal(): boolean {
            var _res: boolean = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                _res = _obj.legal() && _res;
            }
            return _res;
        }
      

    }
    export class ItemConditionInsertDetailRowDomStates extends domCore.DomStates {
    }


    export class ItemConditionInsertDetailRowDomProps extends domCore.DomProps<ItemConditionInsertDetailRowDomVm>{
    }



}


