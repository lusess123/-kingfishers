import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import dateFile = require("./../../../../02col/01single/DateTime");
import buttonFile = require("./../../../../05tool/Button");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dataFile = require("./../data");

export module BasicInformationDom {
    export class BasicInformationDomAction extends domCore.DomAction {
    }

    export class BasicInformationDomReact extends domCore.DomReact<BasicInformationDomProps, BasicInformationDomStates, BasicInformationDomAction> implements domCore.IReact {

        public state = new BasicInformationDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initForm()}
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">创建人：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Subject"].intoDom()}</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">创建时间：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["Type"].intoDom()}</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">有效期：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["IsValid"].intoDom()}</div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-md-5 col-sm-3 form-control-label text-right">有效期：</label>
                    <div className="col-md-7 col-sm-9">{this.props.Vm.ColVmObjList["CreateDateTime"].intoDom() }</div>
                </div>
            </form>
        }

        //public _initObjectTable(): React.ReactElement<any> {
        //   var theader = <thead className="thead-default">
        //        {this._initObjectHeader() }
        //    </thead>
        //    var tbody = this._initObjectBody();

        //    //var ObjectTableButton = this._initObjectTableBtn();
        //    var ObjetTable = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;

        //    return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>

        //        { ObjectTableButton }
        //        { ObjetTable }

        //    </div>;
        //}

        public _initObjectTableBtn(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <b>考核对象</b>
                <div className="btn-group btn-group-sm">
                    {this.props.Vm.BtnList.map((btn) => {
                        return this._tDom(btn);
                    }) }
                </div>
                </div>;
        }           

        public _initObjectHeader(): React.ReactElement<any> {
            return <tr>
                <th></th>
                <th>部门</th>
                <th>职位</th>
                <th>人员</th>
                <th>操作</th>
            </tr>;
        }

        public _initObjectBody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td><i className="fa fa-square-o"></i><span>1</span></td>
                    <td>内科</td>
                    <td>主治医师</td>
                    <td>黄某某</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
                <tr>
                    <td><i className="fa fa-square-o"></i><span>2</span></td>
                    <td>内科</td>
                    <td>主治医师</td>
                    <td>黄某某</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
                <tr>
                    <td><i className="fa fa-square-o"></i><span>3</span></td>
                    <td>内科</td>
                    <td>主治医师</td>
                    <td>黄某某</td>
                    <td><a className="text-primary">编辑</a><a className="text-danger">删除</a></td>
                </tr>
            </tbody>;
        }

        //public _initAccreditTable(): React.ReactElement<any> {
        //    var theader = <thead className="thead-default">
        //        {this._initAccreditHeader() }
        //    </thead>
        //    var tbody = this._initAccreditBody();

        //    var AccreditTable = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
        //    return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{ AccreditTable }</div>;
        //}

        //public _initAccreditTableBtn(): React.ReactElement<any> {
        //    return <div className="YSm-table-btngroup">
        //        <b>授权范围</b>
        //        <div className="btn-group btn-group-sm">
        //            {this.props.Vm.BtnList1.map((btn) => {
        //                return this._tDom(btn);
        //            }) }
        //        </div>
        //    </div>;
        //}

        //public _initAccreditHeader(): React.ReactElement<any> {
        //    return <tr>
        //        <th></th>
        //        <th>部门</th>
        //        <th>职位</th>
        //        <th>权限设置</th>
        //    </tr>;
        //}

        //public _initAccreditBody(): React.ReactElement<any> {
        //    return <tbody>
        //        <tr>
        //            <td><i className="fa fa-square-o"></i><span>1</span></td>
        //            <td>内科</td>
        //            <td>主治医师</td>
        //            <td>黄某某</td>
        //        </tr>
        //        <tr>
        //            <td><i className="fa fa-square-o"></i><span>2</span></td>
        //            <td>内科</td>
        //            <td>主治医师</td>
        //            <td>黄某某</td>
        //        </tr>
        //        <tr>
        //            <td><i className="fa fa-square-o"></i><span>3</span></td>
        //            <td>内科</td>
        //            <td>主治医师</td>
        //            <td>黄某某</td>
        //        </tr>
        //    </tbody>;
        //}


        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }


        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactBasicInformationDomVm extends domCore.DomVm {
        TextObj: TextFile.ui.TextVm;
        ScrollAuto(left: number);
        BtnList;
        BtnList1;
        ColVmObjList: IColVmDic;
    }

    export interface IBasicInformationDomConfig {

    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }

    export class BasicInformationDomVm extends domCore.DomVm implements IReactBasicInformationDomVm {
        public ReactType = BasicInformationDomReact;

        public BtnList = new Array<buttonFile.ui.ButtonVm>();
        public BtnList1 = new Array<buttonFile.ui.ButtonVm>();

        public TextObj: TextVm = new TextFile.ui.TextVm;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public ColVmObjList: IColVmDic = {};
        public RowData: any = {};


        public constructor(config?: IBasicInformationDomConfig) {
            super();
            this.initBtnList();
            this.initColVm("Subject", "TextVm");
            this.initColVm("Type", "ComboVm", "notNull");
            this.initColVm("IsValid", "SingleCheckBoxVm", "notNull");
            this.initColVm("CreateDateTime", "DateTimeVm", "notNull");

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
            if (colName == "Type")
            {
                var typeComboVm = utilFile.Core.Util.Cast<comboFile.ui.ComboVm>(_exciteBean);
                typeComboVm.ItemList = dataFile.Data.AppraiseTypeData;
            }
                this.ColVmObjList[_name] = _exciteBean;
            }


        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

        private initBtnList() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "新增";
            btnVm.IconCss = "plus";
            btnVm.KindCss = "btn-primary";
            btnVm.NoEnable = false;
            this.BtnList.push(btnVm);


            btnVm.ClickFun = (a) => {
               // this.buttonClickCommond(a);
            };

        }

        private initBtnList1() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "选择";
            btnVm.KindCss = "btn-primary";
            btnVm.NoEnable = false;
            this.BtnList.push(btnVm);


            btnVm.ClickFun = (a) => {
                // this.buttonClickCommond(a);
            };

        }


    }
    export class BasicInformationDomStates extends domCore.DomStates {
    }


    export class BasicInformationDomProps extends domCore.DomProps<IReactBasicInformationDomVm>{
    }



}


