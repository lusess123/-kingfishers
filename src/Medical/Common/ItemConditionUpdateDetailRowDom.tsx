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

export module ItemConditionUpdateDetailRowDom {
    export class ItemConditionUpdateDetailRowDomAction extends domCore.DomAction {
    }

    export class ItemConditionUpdateDetailRowDomReact extends domCore.DomReact<ItemConditionUpdateDetailRowDomProps, ItemConditionUpdateDetailRowDomStates, ItemConditionUpdateDetailRowDomAction> implements domCore.IReact {

        public state = new ItemConditionUpdateDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>
                <td className="hide">{this.props.Vm.ColVmObjList["FID"].intoDom() }</td>
                <td>{this.props.Vm.ColVmObjList["ItemName"].intoDom() }</td>
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


    export interface IItemConditionUpdateDetailRowDomConfig {

        UniId: string;
        RowData: dataFile.Data.IItemConditionData;
        IsNew?: boolean;
    }

    export class ItemConditionUpdateDetailRowDomVm extends domCore.DomVm {
        public ReactType = ItemConditionUpdateDetailRowDomReact;
        public RowNumber: number;
        public ColVmObjList: IColVmDic = {};
        public RowData: dataFile.Data.IItemConditionData;
        public UniId: string;
        public IsPositiveCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public IsNew: boolean = false;

        public constructor(config?: IItemConditionUpdateDetailRowDomConfig) {
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

            this.initColVm("FID", "TextVm");
            this.initColVm("ItemName", "TextVm", "notNull");
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
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
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

        public getData(): dataFile.Data.IItemConditionData {
            var _data: dataFile.Data.IItemConditionData = {};
            var _Change: boolean = false;
            var fid: string = null;
            if (this.IsNew) {
                _Change = true;
            }

            for (var vn in this.ColVmObjList) {
                var colObj = this.ColVmObjList[vn];

                colObj.getChangeValFun((isChange, val, col) => {
                    if (isChange || this.IsNew) {
                        _Change = true;
                        _data[colObj.Tag] = colObj.vmDataValueGet();
                    }
                });
                if (colObj.Tag == "FID") {
                    fid = colObj.vmDataValueGet();
                }
            }

            if (_Change) {
                _data.FID = fid;
            }
            return _data;
        }

    }
    export class ItemConditionUpdateDetailRowDomStates extends domCore.DomStates {
    }


    export class ItemConditionUpdateDetailRowDomProps extends domCore.DomProps<ItemConditionUpdateDetailRowDomVm>{
    }



}


