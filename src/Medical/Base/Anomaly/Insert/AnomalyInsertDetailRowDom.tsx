﻿import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import baseColFile = require("./../../../../02col/00core/BaseCol");


export module AnomalyInsertDetailRowDom {
    export class AnomalyInsertDetailRowDomAction extends domCore.DomAction {
    }

    export class AnomalyInsertDetailRowDomReact extends domCore.DomReact<AnomalyInsertDetailRowDomProps, AnomalyInsertDetailRowDomStates, AnomalyInsertDetailRowDomAction> implements domCore.IReact {

        public state = new AnomalyInsertDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>

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

    export interface IAnomalyInsertDetailRowDomConfig {
        UniId: string;
        RowData: dataFile.Anomaly.IAnomalyItemData;

    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class AnomalyInsertDetailRowDomVm extends domCore.DomVm {
        public ReactType = AnomalyInsertDetailRowDomReact;
        public RowNumber: number;
        public TextVmObjList: ITextVmDic = {};
        public ColVmObjList: IColVmDic = {};
        public RowData: dataFile.Anomaly.IAnomalyItemData;
        public IsPositiveCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string;

        public constructor(config?: IAnomalyInsertDetailRowDomConfig) {
            super();
            if (config) {
                this.UniId = config.UniId;
                this.RowData = config.RowData;
            }
            //this.initTextVm("ItemName", "notNull");
            //this.initTextVm("GreaterThan");
            //this.initTextVm("LessThan");
            //this.initTextVm("Unit");
            //this.initTextVm("KeyWord");

            //this.IsPositiveCheck = new singleCheckFile.ui.SingleCheckBoxVm();

            this.initColVm("ItemName", "TextVm", "notNull");
            this.initColVm("GreaterThan", "TextVm");
            this.initColVm("LessThan", "TextVm");
            this.initColVm("Unit", "TextVm");
            this.initColVm("KeyWord", "TextVm");
            this.initColVm("IsPositive", "SingleCheckBoxVm");
          
        }

        //private initTextVm(colName: string, legal?: string) {
        //    var _name = colName.toString()
        //    var isexcite = false;

        //    for (var vn in this.TextVmObjList) {
        //        var _obj = this.TextVmObjList[_name];
        //        if (_obj) {
        //            isexcite = true;
        //            _exciteBean = _obj;
        //        }
        //    }
        //    if (!isexcite) {
        //        var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
        //        _exciteBean.Tag = colName;
        //        _exciteBean.LegalObj.Kind = legal ? legal : "";
        //        _exciteBean.onChangeHandle((val) => {
        //            this.RowData[colName] = val;
        //            return true;
        //        });
        //        this.TextVmObjList[_name] = _exciteBean;
        //    }
        //}

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

        public delButtonRow() {
            this.emitAppEvent("medical/base/Anomaly/Insert/DetailRow", this.UniId, this.RowNumber);
        }

        public toChange() {
            this.IsChange = true;
            //for (var n in this.TextVmObjList) {
            //    this.TextVmObjList[n].IsChange = true;
            //}
            //this.IsPositiveCheck.IsChange = true;

            for (var n in this.ColVmObjList) {
                this.ColVmObjList[n].IsChange = true;
            }
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

    export class AnomalyInsertDetailRowDomStates extends domCore.DomStates {
    }


    export class AnomalyInsertDetailRowDomProps extends domCore.DomProps<AnomalyInsertDetailRowDomVm>{
    }



}


