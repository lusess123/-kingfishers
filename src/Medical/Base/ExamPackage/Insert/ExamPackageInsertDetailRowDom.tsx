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


export module ExamPackageInsertDetailRowDom {
    export class ExamPackageInsertDetailRowDomAction extends domCore.DomAction {
    }

    export class ExamPackageInsertDetailRowDomReact extends domCore.DomReact<ExamPackageInsertDetailRowDomProps, ExamPackageInsertDetailRowDomStates, ExamPackageInsertDetailRowDomAction> implements domCore.IReact {

        public state = new ExamPackageInsertDetailRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <tr>
                <td>{this.props.Vm.RowNumber + 1 }</td>
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

    export interface IExamPackageInsertDetailRowDomConfig {
        UniId: string;
        RowData: dataFile.ExamPackage.IExamPackageItemData;
    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export class ExamPackageInsertDetailRowDomVm extends domCore.DomVm {
        public ReactType = ExamPackageInsertDetailRowDomReact;
        public RowNumber: number;
        public TextVmObjList: ITextVmDic = {};
        public RowData: dataFile.ExamPackage.IExamPackageItemData;
        public UniId: string;
        public IsNew: boolean = false;

        public constructor(config?: IExamPackageInsertDetailRowDomConfig) {
            super();
            this.initTextVm("ItemId", "notNull");
            if (config) {
                this.UniId = config.UniId;
                this.RowData = config.RowData;
            }

        }

        public legal(): boolean {
            var _res: boolean = true;
            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[vn];
                _res = _obj.legal() && _res;
            }
            return _res;
        }
        private initTextVm(colName: string, legal?: string){
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
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.TextVmObjList[_name] = _exciteBean;
            }
        }

        public delButtonRow() {
            this.emitAppEvent("medical/base/exampackage/insert/detailrow", this.UniId, this.RowNumber);
        }

    }

    export class ExamPackageInsertDetailRowDomStates extends domCore.DomStates {
    }


    export class ExamPackageInsertDetailRowDomProps extends domCore.DomProps<ExamPackageInsertDetailRowDomVm>{
    }



}


