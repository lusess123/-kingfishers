import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import pagination = require("./../../../../05tool/Pagination");
import Selector = require("./../../../../02col/03selector/selector");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");

export module NewGroupMaster {
    export class NewGroupMasterAction extends domCore.DomAction {
    }

    export class NewGroupMasterReact extends domCore.DomReact<NewGroupMasterProps, NewGroupMasterStates, NewGroupMasterAction> implements domCore.IReact {

        public state = new NewGroupMasterStates();

        public pSender(): React.ReactElement<any> {
            return <form className="Hg-default-mt YSm-form YSg-height clearfix">
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3 form-control-label  text-right required">单位名称：</label>
                    <div className="col-md-7 col-sm-9">
                        {this.props.Vm.IsSelectOpt? this.props.Vm.ColVmObjList["Unit"].intoDom() : this.props.Vm.ColVmObjList["Name"].intoDom() }
                    </div>
                    <a onClick ={() => { this.props.Vm.Opt() } }>{!this.props.Vm.IsSelectOpt ? <i className="fa fa-reply"></i> : <i className="fa fa-plus"></i>}</a>
                </div>
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3 form-control-label text-right required">企业类型：</label>
                    <div className="col-md-7 col-sm-9">
                        {this.props.Vm.ColVmObjList["Type"].intoDom() }

                    </div>
                </div>
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3 form-control-label text-right required">联系人：</label>
                    <div className="col-md-7 col-sm-9">
                        {this.props.Vm.ColVmObjList["ContactPerson"].intoDom() }
                    </div>
                </div>
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3 form-control-label text-right required">联系电话：</label>
                    <div className="col-md-7 col-sm-9">
                        {this.props.Vm.ColVmObjList["Phone"].intoDom() }
                    </div>
                </div>
                <div className="form-group form-inline clearfix">
                    <label className="col-md-4 col-sm-3 form-control-label text-right required">联系地址：</label>
                    <div className="col-md-7 col-sm-9">
                        {this.props.Vm.ColVmObjList["Address"].intoDom() }

                    </div>
                </div>
            </form>;

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

    }
    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }
    export interface IReactNewGroupMasterVm extends domCore.DomVm {

    }

    export interface INewGroupMasterConfig {
        RowData: DataFile.Group.IBatchDetail;
        IsSelectOpt:boolean
        UniId: string
    }

    export class NewGroupMasterVm extends domCore.DomVm implements IReactNewGroupMasterVm {
        public ReactType = NewGroupMasterReact;
        public SelectorVM: Selector.ui.SelectorVm;
        public ColVmObjList: IColVmDic = {};
        public RowData: DataFile.Group.IBatchDetail;
        public IsMulit: boolean = true;
        public IsSelectOpt = true;
        public flag: string;
        public constructor(config?: INewGroupMasterConfig) {
            super();
            this.RowData = []
            if (config) {
                this.IsSelectOpt = config.IsSelectOpt
                this.RowData = config.RowData
                this.UniId = config.UniId
                if (this.IsSelectOpt) {
                    this.initColVm("Unit", "SelectorVm", "notNull");
                }
                else {
                    this.initColVm("Name", "TextVm", "notNull");
                }
                this.initColVm("Type", "ComboVm");
                this.initColVm("ContactPerson", "TextVm", "notNull");
                this.initColVm("Phone", "TextVm", "MobilePhoneLegal");
                this.initColVm("Address", "TextVm", "notNull");
                if (!this.IsSelectOpt)
                {
                    this.ColVmObjList["ContactPerson"].dataValueSet("")
                    this.ColVmObjList["Phone"].dataValueSet("")
                    this.ColVmObjList["Address"].dataValueSet("")

                }

            }

        }
        public Opt() {
            this.IsSelectOpt = !this.IsSelectOpt
            this.emitAppEvent("Manage/NewGroupPage/InitPageData", this.UniId, this.IsSelectOpt);

        }
        public initColVm(colName: string, colType: string, legal?: string) {
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
                _exciteBean.dataValue(this.RowData[colName]);
                _exciteBean.setOriValue(this.RowData[colName]);
                _exciteBean.IsChange = true;
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
                if (colType == "ComboVm") {
                    this.initCombo(colName, utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean));
                }
                if (colType == "SelectorVm")
                {
                    this.initSelectorVm(colName,utilFile.Core.Util.Cast<Selector.ui.SelectorVm>(_exciteBean))
                }
                this.ColVmObjList[_name] = _exciteBean;
            }
        }
        public initSelectorVm(colName: string, selectVm: Selector.ui.SelectorVm) {
            selectVm.RegName = "UnitBaseCodeTable";
            selectVm.dataValueSet(this.RowData[colName]);
            selectVm.Text = this.RowData["Name"]
            //selectVm.HasCanEdit =true
            //selectVm.TextChangeFun = (val) => {
            //    this.RowData.Name = val
            //    this.RowData[colName] = "";
            //};

            selectVm.onChangeHandle((val) => {
                this.RowData[colName] = val;
                this.RowData.Name = val
                this.initUnit(val)
                return true;
            });
        }
        public initUnit(unitID: string)
        {
            this.emitAppEvent("New/NewGroupPage/loadPageData", this.UniId, unitID);
        }
        public initCombo(colName: string, comboVm: comboFile.ui.ComboVm)
        {
            comboVm.ItemList = constantData.Data.UnitTypeData;
            var str = this.RowData[colName] == null ? "0" : String(this.RowData[colName]);
            comboVm.dataValueSet(str)
            comboVm.setOriValue(str) 
                            
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
    export class NewGroupMasterStates extends domCore.DomStates {
    }


    export class NewGroupMasterProps extends domCore.DomProps<NewGroupMasterVm>{
    }
}