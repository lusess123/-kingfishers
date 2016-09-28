import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");
import dataFile = require("./../Data");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

export module ExamPackageUpdateDetailRowDom {
    export class ExamPackageUpdateDetailRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageUpdateDetailRowDomReact extends domCore.DomReact<ExamPackageUpdateDetailRowDomProps, ExamPackageUpdateDetailRowDomStates, ExamPackageUpdateDetailRowDomAction> implements domCore.IReact {

        public state = new ExamPackageUpdateDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>
                <td className="hide">{this.props.Vm.TextVmObjList["FID"].intoDom() }</td>
                <td>{this.props.Vm.TextVmObjList["ItemId"].intoDom() }</td>
                <td><i className="fa fa-minus-circle acsPointer red" onClick={(e) => { this.fun_delButtonRow() } }></i></td>
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


    export interface IExamPackageUpdateDetailRowDomConfig {

        UniId: string;
        RowData: dataFile.ExamPackage.IExamPackageItemData;
    }

    export class ExamPackageUpdateDetailRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageUpdateDetailRowDomReact;
        public RowNumber: number;
        public TextVmObjList: ITextVmDic = {};
        public RowData: dataFile.ExamPackage.IExamPackageItemData;
        public UniId: string;
        public IsNew: boolean = false;

        public constructor(config?: IExamPackageUpdateDetailRowDomConfig) {
            super();
            if (config)
            {
                this.RowData = config.RowData;
                this.UniId = config.UniId;
            }
            this.initTextVm("FID");
            this.initTextVm("ItemId", "notNull");
        }

        public legal(): boolean {
            var _res: boolean = true;
            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[vn];
                _res = _obj.legal() && _res;
            }
            return _res;
        }

        public getData(): dataFile.ExamPackage.IExamPackageItemData {
            var _data: dataFile.ExamPackage.IExamPackageItemData = {};
            var _Change: boolean = false;
            var fid: string = null;
            if (this.IsNew) {
                _Change = true;
            }
            for (var vn in this.TextVmObjList) {
                var txtObj = this.TextVmObjList[vn];

                txtObj.getChangeValFun((isChange, val, col) => {
                    if (isChange || this.IsNew) {
                        _Change = true;
                        _data[txtObj.Tag] = txtObj.vmDataValueGet();
                    }
                });
                if (txtObj.Tag == "FID") {
                    fid = txtObj.vmDataValueGet();
                }
            }
            if (_Change) {
                _data.FID = fid;
            }
            return _data;
        }
        private initTextVm(colName: string, legal?: string) {
            var _name = colName.toString()
            var isexcite = false;

            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[_name];
                if (_obj) {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
                _exciteBean.Tag = colName;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.dataValueSet(this.RowData[colName]);
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }

        public delButtonRow() {
            this.emitAppEvent("medical/base/exampackage/update/DetailRow", this.UniId, this.RowNumber);
        }

    }
    export class ExamPackageUpdateDetailRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageUpdateDetailRowDomProps extends domCore.DomProps<ExamPackageUpdateDetailRowDomVm>{
    }



}


