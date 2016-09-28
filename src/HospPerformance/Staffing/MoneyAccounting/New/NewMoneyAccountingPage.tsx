import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import listBoxFile = require("./../../../../02col/02Mulite/Listbox");

export module NewMoneyAccountingPage {
    export class NewMoneyAccountingPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewMoneyAccountingPageReact extends basewedPageFile.Web.BaseWebPageReact<NewMoneyAccountingPageProps, NewMoneyAccountingPageStates, NewMoneyAccountingPageAction> implements domCore.IReact {

        public state = new NewMoneyAccountingPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initForm()}
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">薪资主题：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["MoneyTheme"].intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">薪资月份：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["MoneyMonth"].intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">创建人：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Creater"].intoDom() }</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">创建时间：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["CreatTime"].intoDom() }</div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix">
                    <label className="form-control-label text-right">包含人员：</label>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">部门：</label>
                        <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Department"].intoDom() }</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                        <label className="col-md-5 col-sm-3 form-control-label text-right">职位：</label>
                        <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Job"].intoDom() }</div>
                    </div>
                    <div className="col-md-12 col-sm-12">{this.props.Vm.ColVmObjList["Personal"].intoDom() }</div>
                    </div>
                </div>
            </form>;
        }




    }

    export interface IReactNewMoneyAccountingPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ColVmObjList: IColVmDic;
    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export interface INewMoneyAccountingPageConfig {


    }
    export class NewMoneyAccountingPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewMoneyAccountingPageVm {
        public ReactType = NewMoneyAccountingPageReact;

        public ColVmObjList: IColVmDic = {};
        public RowData: any = {};

        public constructor(config?: INewMoneyAccountingPageConfig) {
            super();
            this.initColVm("MoneyTheme", "TextVm", "notNull");
            this.initColVm("MoneyMonth", "ComboVm", "notNull");
            this.initColVm("Creater", "TextVm", "notNull");
            this.initColVm("CreatTime", "DateTimeVm", "notNull");
            this.initColVm("Personal", "ListBoxVm", "notNull");
            this.initColVm("Department", "TextVm", "notNull");
            this.initColVm("Job", "TextVm", "notNull");
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
                _exciteBean.IsMulit = true;
                _exciteBean.onChangeHandle((val) => {
                    this.RowData[colName] = val;
                    return true;
                });
            }
            if (colName == "MoneyMonth") {
                var typeComboVm = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean);
                typeComboVm.ItemList = [{ Value: "0", Text: "4月份" }, { Value: "1", Text: "5月份" }, { Value: "2", Text: "6月份" }, { Value: "3", Text: "7月份" }];
            }
            if (colName == "Personal") {
                var typeListBoxVm = utilFile.Core.Util.Cast<listBoxFile.ui.ListboxVm>(_exciteBean);
                typeListBoxVm.ItemList = [{ Value: "0", Text: "黄小菜", Select: false }, { Value: "0", Text: "丁小花", Select: false }, { Value: "0", Text: "连袜子", Select: true }, { Value: "0", Text: "沈小君", Select: true}];
            }
            this.ColVmObjList[_name] = _exciteBean;
        }



        private init(config: INewMoneyAccountingPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class NewMoneyAccountingPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewMoneyAccountingPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewMoneyAccountingPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWMONEYACCOUNTINGPAGE", basewedPageFile.Web.BaseWebPageVm, NewMoneyAccountingPageVm);

}
