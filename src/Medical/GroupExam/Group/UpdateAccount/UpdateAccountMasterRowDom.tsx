import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import eventFile = require("./../../../../01core/Event");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import dateFile = require("./../../../../02col/01single/Date");
import Selector = require("./../../../../02col/03selector/selector");

export module UpdateAccountRowDom {
    export class UpdateAccountRowDomAction extends domCore.DomAction {
    }

    export class UpdateAccountRowDomReact extends domCore.DomReact<UpdateAccountRowDomProps, UpdateAccountRowDomStates, UpdateAccountRowDomAction> implements domCore.IReact {

        public state = new UpdateAccountRowDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-modal-body clearfix">
                <form className="">
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label  text-right">体检单位：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.RowData.UnitName }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">体检批次：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.RowData.BatchId}
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">预检人数：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.RowData.ReservationCount}
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">实检人数：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["RealCount"].intoDom() }
                        </div>
                    </div>
                    <div className="form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">应收金额：</label>
                        <div className="col-md-7 col-sm-9">
                            {this.props.Vm.ColVmObjList["Fee"].intoDom() }
                       </div>
                    </div>

                </form>
            </div>
        }




        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IUpdateAccountRowDomConfig {
        Data: DataFile.Group.IAccount;
        BatchId: string;

    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export class UpdateAccountRowDomVm extends domCore.DomVm {
        public ReactType = UpdateAccountRowDomReact;
        public IsDetailHide: boolean;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IAccount;
        public BatchId: string;
        public constructor(config?: IUpdateAccountRowDomConfig) {
            super();
            if (config)
            {
                this.BatchId = config.BatchId;
                this.RowData = config.Data
                this.initColVm("RealCount", "TextVm", "notNull");
                this.initColVm("Fee", "TextVm", "notNull");
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
                _exciteBean.IsChange = true
                _exciteBean.dataValue(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                this.ColVmObjList[_name] = _exciteBean;
            }
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
    export class UpdateAccountRowDomStates extends domCore.DomStates {
    }


    export class UpdateAccountRowDomProps extends domCore.DomProps<UpdateAccountRowDomVm>{
    }



}

