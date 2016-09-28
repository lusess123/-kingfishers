import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import dataFile = require("./../Data");
import textFile = require("./../../../../02col/01single/Text");
import baseColFile = require("./../../../../02col/00core/BaseCol");

export module AnomalyUpdateMasterRowDom {
    export class AnomalyUpdateMasterRowDomAction extends domCore.DomAction {
    }

    export class AnomalyUpdateMasterRowDomReact extends domCore.DomReact<AnomalyUpdateMasterRowDomProps, AnomalyUpdateMasterRowDomStates, AnomalyUpdateMasterRowDomAction> implements domCore.IReact {

        public state = new AnomalyUpdateMasterRowDomStates();

        public pSender(): React.ReactElement<any> {
            return (
                <div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a onClick={() => { this.fun_titleMasterClick(); } }>异常<i className={"fa fa-angle-" + (this.props.Vm.IsMasterHide ? "up" : "down") }></i></a>
                        </h4>
                    </div>
                    <div className="panel-collapse collapse in">
                        <div className={"content active " + (this.props.Vm.IsMasterHide ? "hide" : "") }  >
                            <div className="Hm-form clearfix" >
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right required form-control-label">简码：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["SimpleCode"].intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right required form-control-label">名称：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["Name"].intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right">序号：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["OrderNumber"].intoDom() }
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label">
                                        <label className="pull-right">备注：</label>
                                    </div>
                                    <div className="pull-left Hu-input">
                                        {this.props.Vm.ColVmObjList["Remark"].intoDom() }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            );
        }

        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IAnomalyUpdateMasterRowDomConfig {
        UniId: string;
        RowData: dataFile.Anomaly.IAnomalyData;
    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class AnomalyUpdateMasterRowDomVm extends domCore.DomVm {
        public ReactType = AnomalyUpdateMasterRowDomReact;
        public IsMasterHide: boolean;
        public RowData: dataFile.Anomaly.IAnomalyData = {};
        public SimpleCodeVm: textFile.ui.TextVm;
        public NameVm: textFile.ui.TextVm;
        public UniId: string;
        public TextVmObjList: ITextVmDic = {};
        public ColVmObjList: IColVmDic = {};

        public RemarkOgi: string;


        public constructor(config?: IAnomalyUpdateMasterRowDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
                this.RemarkOgi = this.RowData.Remark;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }

                this.initColVm("SimpleCode", "TextVm", "notNull");
                this.initColVm("Name", "TextVm", "notNull");
                this.initColVm("OrderNumber", "TextVm");
                this.initColVm("Remark", "TextAreaVm");

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
                _exciteBean.dataValueSet(this.RowData[colName]);
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

        private fIsChangeRow: boolean = false;

        public getData(isDetailChange?: boolean): dataFile.Anomaly.IAnomalyData {
            var _obj: dataFile.Anomaly.IAnomalyData = {};

            //this.ColVmObjList["SimpleCode"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.SimpleCode = val;
            //    }
            //});

            //this.ColVmObjList["Name"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.Name = val;
            //    }
            //});

            //this.ColVmObjList["OrderNumber"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.OrderNumber = parseInt(val);
            //    }
            //});


            //this.ColVmObjList["Remark"].getChangeValFun((isChange, val) => {
            //    if (isChange) {
            //        this.fIsChangeRow = true;
            //        _obj.OrderNumber = parseInt(val);
            //    }
            //});


            //if (this.RowData.Remark != this.RemarkOgi) {
            //    this.fIsChangeRow = true;
            //    _obj.Remark = this.RowData.Remark;
            //}

            for (var vn in this.ColVmObjList) {
                var _colObj = this.ColVmObjList[vn];
                if (_colObj) {
                    _colObj.getChangeValFun((isChange, val) => {
                        if (isChange) {
                            this.fIsChangeRow = true;
                            _obj[vn] = val;
                        }
                    });
                }
            }


            if (this.fIsChangeRow || isDetailChange) {

                _obj.FID = this.RowData.FID;
            }

            this.fIsChangeRow = false;
            return _obj;
        }


    }
    export class AnomalyUpdateMasterRowDomStates extends domCore.DomStates {
    }


    export class AnomalyUpdateMasterRowDomProps extends domCore.DomProps<AnomalyUpdateMasterRowDomVm>{
    }



}


