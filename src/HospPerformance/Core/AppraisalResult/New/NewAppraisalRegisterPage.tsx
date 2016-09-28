
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

import modalFile = require("./../../../../05tool/Modal/ModalDom");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import radioFile = require("./../../../../02col/01single/Radio");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import dataFile = require("./../data");
import textAreaFile = require("./../../../../02col/01single/TextArea");
import textFile = require("./../../../../02col/01single/Text");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;


export module NewAppraisalRegisterPage {
    export class NewAppraisalRegisterPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewAppraisalRegisterPageReact extends basewedPageFile.Web.BaseWebPageReact<NewAppraisalRegisterPageProps, NewAppraisalRegisterPageStates, NewAppraisalRegisterPageAction> implements domCore.IReact {

        public state = new NewAppraisalRegisterPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="p-a-md">

                {this._initTimes() }

                {this._initAppraisalObject() }

                {this._initTable() }

                {this._initVluation() }

                {this._initBtns() }

            </div>;
        }

        public _initTimes(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix hide">
                    <label className="col-lg-3 col-md-3 col-sm-3 form-control-label text-right">类型：</label>
                    <div className="col-lg-9 col-md-9 col-sm-9 YSm-textarea"></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-3 form-control-label text-right">启动日期：</label>
                    <div className="col-lg-9 col-md-9 col-sm-9 YSm-textarea"><label className="pull-left form-control-label">{this.props.Vm.PageData.AppraisalStartDate}</label></div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-3 form-control-label text-right required">开始日期：</label>
                    <div className="col-lg-9 col-md-9 col-sm-9 YSm-textarea">{this.props.Vm.ColVmObjList["AppraisalBeginDate"].intoDom() }</div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-3 form-control-label text-right required">结束日期：</label>
                    <div className="col-lg-9 col-md-9 col-sm-9 YSm-textarea">{this.props.Vm.ColVmObjList["AppraisalEndDate"].intoDom() }</div>
                </div>
            </form>;
        }

        public _initAppraisalObject(): React.ReactElement<any> {
            return <div className="clearfix">
                <div className="col-lg-5 col-md-5 col-sm-8 col-xs-8 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-3 form-control-label text-right">考核对象：</label>
                    <div className="col-lg-9 col-md-9 col-sm-9 ">{this.props.Vm.ColVmObjList["AppraisalObject"].intoDom() }</div>
                </div>
                <ul className="col-lg-12 col-md-12 col-sm-12 col-xs-12 nav nav-pills YSm-list">
                    { this.props.Vm.DisplayUserList.map((user) => {
                        return <li className={user.IsSelect ? "active nav-item" : "nav-item"} onClick={() => { this.selectUser(user.UserId) } }> { user.IsAppraised ? user.TrueName + "(已考核)" : user.TrueName} </li>
                    }) }
                </ul>
            </div>;
        }

        public selectUser(userId?: string) {
            this.props.Vm.DisplayUserList.forEach(a => {
                if (a.UserId == userId) {
                    a.IsSelect = true;
                    this.props.Vm.CurSelectedUser = a;
                }
                else
                    a.IsSelect = false;
            });
            this.props.Vm.fetchSelectedUserMarkData();
        }

        public _initTable(): React.ReactElement<any> {

            var theader = <thead className="thead-default">
                {this.initHeader() }
            </thead>
            var tbody = this.initBody();

            var table = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{table}</div>;
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.ScrollAuto(_$obj.scrollLeft());
        }

        public initHeader(): React.ReactElement<any> {
            return <tr>
                <th>考核项目</th>
                <th>考核内容</th>
                <th>考核标准</th>
                <th>标准分</th>
                <th>最大分</th>
                <th>分数</th>
                <th>评语</th>
            </tr>
        };
        public initBody(): React.ReactElement<any> {
            return <tbody>
                { this.props.Vm.CurSelectedUser.ItemList.map((item, i) => {
                    return <tr>
                        <td>{item.Name}</td>
                        <td name="standard">{item.Content}</td>
                        <td name="standard">{item.Standard}</td>
                        <td>{item.ObjectValue}</td>
                        <td>{item.MaxValue}</td>
                        <td>{this.props.Vm.ItemResultTextList[i].intoDom() }</td>
                        <td>{this.props.Vm.ItemReviewsTextAreaList[i].intoDom() }</td>
                    </tr>
                }) }

            </tbody>;
        };

        private getThDomVM(w?: number) {
            var _ther = new thFile.Web.ThDomVm();
            if (w) {
                _ther.Width = w;
            }
            return _ther;
        }
        public _initVluation(): React.ReactElement<any> {
            return <form className="clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix">
                    <label className="col-lg-1 col-md-2 col-sm-3 form-control-label text-right">总评：</label>
                    <div className="col-lg-11 col-md-10 col-sm-9 YSm-textarea">{this.props.Vm.ColVmObjList["OverallReviews"].intoDom() }</div>
                </div>
            </form>;
        }

        public _initBtns(): React.ReactElement<any> {
            return <div className="text-center">
                <a className="btn btn-sm btn-primary" onClick={() => { this.save() } }>保存</a>
            </div>;
        }

        public save() {
            this.props.Vm.save();
        }

    }

    export interface IReactNewAppraisalRegisterPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ColVmObjList: IColVmDic;
        ScrollAuto(left: number);
        PageData: dataFile.Data.IAppraisalMarkPageData;
        ItemReviewsTextAreaList: textAreaFile.ui.TextAreaVm[];
        ItemResultTextList: textFile.ui.TextVm[];
        save(): void;
        CurSelectedUser: dataFile.Data.IUserAppraisalData;
        // setSelectedUserValue(): void;
        DisplayUserList: dataFile.Data.IUserAppraisalData[];
        fetchSelectedUserMarkData(): void;

    }

    export interface IColVmDic {
        [name: string]: baseColFile.Core.BaseColVm;
    }


    export interface INewAppraisalRegisterPageConfig {
        PageData: dataFile.Data.IAppraisalMarkPageData;

    }
    export class NewAppraisalRegisterPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewAppraisalRegisterPageVm {
        public ReactType = NewAppraisalRegisterPageReact;

        public ModalObj: modalFile.ModalDom.ModalDomVm;
        public ColVmObjList: IColVmDic = {};
        public PageData: dataFile.Data.IAppraisalMarkPageData;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public ItemReviewsTextAreaList: textAreaFile.ui.TextAreaVm[] = [];
        public ItemResultTextList: textFile.ui.TextVm[] = [];
        public CurSelectedUser: dataFile.Data.IUserAppraisalData;
        public DisplayUserList: dataFile.Data.IUserAppraisalData[] = [];
        public IsLastUser: boolean = false;

        public constructor(config?: INewAppraisalRegisterPageConfig) {
            super();
            this.Title = "考核登记"; //弹出窗标题
            if (config) {
                this.init(config);
            }
        }



        private init(config: INewAppraisalRegisterPageConfig) {
            if (config) {
                this.PageData = config.PageData;
            }
            this.DisplayUserList = this.PageData.UserAppraisalList ? this.PageData.UserAppraisalList : [];
            this.CurSelectedUser = this.PageData.UserAppraisalList ? this.PageData.UserAppraisalList[0] : { ItemList: [] };
            this.CurSelectedUser.IsSelect = true;
            this.initColVm("AppraisalBeginDate", "DateVm", "notNull");
            this.initColVm("AppraisalEndDate", "DateVm", "notNull");
            this.initColVm("AppraisalObject", "RadioVm");
            // this.initColVm("OverallReviews", "TextAreaVm", "notNull");
            this.initItemList();

        }

        private initItemList() {
            var newTextAreaVm = new textAreaFile.ui.TextAreaVm();
            this.ColVmObjList["OverallReviews"] = newTextAreaVm;
            newTextAreaVm.dataValueSet(this.CurSelectedUser.OverallReviews);
            newTextAreaVm.onChangeHandle((val) => {
                this.CurSelectedUser.OverallReviews = val;
                return true;
            });

            this.ItemReviewsTextAreaList = [];
            this.ItemResultTextList = [];
            if (this.CurSelectedUser.ItemList) {
                this.CurSelectedUser.ItemList.forEach(a => {
                    var textAreaVm = new textAreaFile.ui.TextAreaVm();
                    textAreaVm.dataValueSet(a.Reviews);
                    textAreaVm.ChangeEventFun = (val, col) => {
                        a.Reviews = val;
                        return true;
                    }
                    this.ItemReviewsTextAreaList.push(textAreaVm);
                    var textVm = new textFile.ui.TextVm();
                    textVm.LegalObj.Kind = "notNull";
                    textVm.dataValueSet(a.Result || (a.Result && Number(a.Result)) == 0 ? a.Result.toString() : "");
                    textVm.ChangeEventFun = (val, col) => {
                        a.Result = val;
                        return true;
                    }
                    this.ItemResultTextList.push(textVm);
                });
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
                _exciteBean.LegalObj.Kind = legal ? legal : "";
                _exciteBean.IsMulit = true;
                if (colName == "AppraisalBeginDate" || colName == "AppraisalEndDate") {
                    _exciteBean.dataValueSet(this.PageData[colName]);
                    _exciteBean.onChangeHandle((val) => {
                        this.PageData[colName] = val;
                        return true;
                    });
                }
                if (colName == "AppraisalObject") {
                    var typeRadioVm = utilFile.Core.Util.Cast<radioFile.ui.RadioVm>(_exciteBean);
                    typeRadioVm.ItemList = dataFile.Data.AppraisalObjectData;
                    typeRadioVm.dataValueSet(typeRadioVm.ItemList[0].Value);
                    typeRadioVm.onChangeHandle((val) => {
                        if (val == "0") {
                            this.DisplayUserList = this.PageData.UserAppraisalList;
                        }
                        else if (val == "1") {
                            this.DisplayUserList = [];
                            this.DisplayUserList = this.PageData.UserAppraisalList.filter((a) => {
                                return a.IsAppraised;
                            });

                        }
                        else {
                            this.DisplayUserList = [];
                            this.DisplayUserList = this.PageData.UserAppraisalList.filter((a) => {
                                return !a.IsAppraised;
                            });
                        }
                        if (this.DisplayUserList.length > 0) {
                            this.CurSelectedUser = this.DisplayUserList[0];
                            this.DisplayUserList.forEach(a => {
                                a.IsSelect = false;
                            });
                            this.CurSelectedUser.IsSelect = true;
                            this.fetchSelectedUserMarkData();
                        }
                        else {
                            this.disableLegal();
                            this.ColVmObjList["OverallReviews"].dataValueSet("");
                            this.ItemResultTextList.forEach(a => {
                                a.dataValueSet("");
                            });
                            this.ItemReviewsTextAreaList.forEach(a => {
                                a.dataValueSet("");
                            });
                            this.forceUpdate("");
                        }
                        return true;
                    });
                }

            }
            this.ColVmObjList[_name] = _exciteBean;
        }

        public legal(): boolean {
            var _res = true;
            for (var vn in this.ColVmObjList) {
                var _obj = this.ColVmObjList[vn];
                if (_obj) {
                    _res = _res && _obj.legal();
                }
            }
            this.ItemResultTextList.forEach(a => {
                _res = _res && a.legal();
            });
            return _res;
        }

        public setNextUserSelected() {
            this.CurSelectedUser.IsAppraised = true;
            this.CurSelectedUser.IsSelect = false;
            var curIndex = this.DisplayUserList.indexOf(this.CurSelectedUser);
            if (curIndex + 1 < this.PageData.UserAppraisalList.length) {
                this.CurSelectedUser = this.DisplayUserList[curIndex + 1];
                this.CurSelectedUser.IsSelect = true;
            }
            else {
                this.IsLastUser = true;
            }
        }

        public ScrollAuto(left: number) {
            this.IsAcsRelative = left > 0;
            this.LeftNum = left;
            this.forceUpdate("");
        }

        public disableLegal() {
            this.ColVmObjList["OverallReviews"].LegalObj.Kind = null;
            this.ItemResultTextList.forEach(a => {
                a.LegalObj.Kind = null;
            });
        }

        public enableLegal() {
            this.ColVmObjList["OverallReviews"].LegalObj.Kind = "notNull";
            this.ItemResultTextList.forEach(a => {
                a.LegalObj.Kind = "notNull";
            });
        }

        public fetchSelectedUserMarkData() {
            this.disableLegal();
            urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchUserMarkData", { appraisalId: this.Param1, userId: this.CurSelectedUser.UserId }, (a) => {
                if (a.Data) {
                    this.CurSelectedUser.OverallReviews = a.Data.OverallReviews;
                    var _itemList: dataFile.Data.IAppraisalItemData[] = a.Data.ItemList;
                    for (var i = 0; i < _itemList.length; i++) {
                        var _item = this.CurSelectedUser.ItemList[i];
                        _item.Result = _itemList[i].Result;
                        _item.Reviews = _itemList[i].Reviews;
                    }
                    // this.setSelectedUserValue();
                    this.initItemList();
                    // this.bindTextChange();
                    this.forceUpdate("");
                }
            });
        }


        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchAppraisalMarkPageData", { appraisalId: this.Param1 }, (a) => {
                var config: INewAppraisalRegisterPageConfig = { PageData: a.Data };
                this.init(config);
                if (callback) {
                    callback();
                }
            });
        }

        public save() {
            if (this.DisplayUserList.length == 0) {
                alert("当前无考核对象");
                return;
            }
            this.enableLegal();
            var isLegal = this.legal();
            if (!isLegal) {
                alert("输入的数据有误，请检查！");
                return;
            }

            if (new Date(this.PageData.AppraisalEndDate.toString()) < new Date(this.PageData.AppraisalBeginDate.toString())) {
                alert("开始日期不能大于结束日期");
                return;
            }
            var submitData: dataFile.Data.IAppraisalMarkSubmitData = {};
            submitData.AppraisalId = this.Param1;
            submitData.AppraisalBeginDate = this.PageData.AppraisalBeginDate;
            submitData.AppraisalEndDate = this.PageData.AppraisalEndDate;
            submitData.AppraisalUser = this.CurSelectedUser;
            urlFile.Core.AkPost("/HospPerformance/AppraisalResult/AddUserAppraisalResult", { appraisalResult: JSON.stringify(submitData) }, (a) => {
                if (a.Content == "ok") {
                    alert("保存成功");
                    this.setNextUserSelected();
                    //判断是否全部登记
                    var len = this.PageData.UserAppraisalList.length;
                    var appraisaledUserList = this.PageData.UserAppraisalList.filter((a) => {
                        return a.IsAppraised;
                    });
                    if (len == appraisaledUserList.length) {
                        var url = "$$module/HospPerformance/Core/performance_core_Appraisal";
                        urlFile.Core.AkUrl.Current().openUrl(url, true);
                    }
                    else {
                        if (!this.IsLastUser) {
                            this.fetchSelectedUserMarkData();
                        }
                        else {
                            this.forceUpdate("");
                        }
                    }
                }
                else {
                    utilFile.Core.Util.Noty("数据新增失败");
                }
            });

        }


    }
    export class NewAppraisalRegisterPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewAppraisalRegisterPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewAppraisalRegisterPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALREGISTERPAGE", basewedPageFile.Web.BaseWebPageVm, NewAppraisalRegisterPageVm);

}
