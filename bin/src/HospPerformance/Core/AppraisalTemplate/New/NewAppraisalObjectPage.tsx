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
import ListBoxFile = require("./../../../../02col/02Mulite/Listbox");
import textFile = require("./../../../../02col/01single/Text");
import ListBox = ListBoxFile.ui.ListBoxReact;
import ListBoxVm = ListBoxFile.ui.ListboxVm;
import treeFile = require("./../../../../05tool/Tree");
import baseTreeFile = require("./../../../../02col/03selector/BaseTree");
import dataFile = require("./../data");

export module NewAppraisalObjectPage {
    export class NewAppraisalObjectPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewAppraisalObjectPageReact extends basewedPageFile.Web.BaseWebPageReact<NewAppraisalObjectPageProps, NewAppraisalObjectPageStates, NewAppraisalObjectPageAction> implements domCore.IReact {

        public state = new NewAppraisalObjectPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initForm() }
                {this._initSelect() }
                {this._initBtns()}
            </div>;
        }


        public _initForm(): React.ReactElement<any> {
            return <form className="p-a-md">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-6 form-control-label text-right">部门：</label>
                    <div className="col-lg-9 col-md-9 col-sm-6">
                        <input type="text" className="Hg-width form-control" value={this.props.Vm.DeptInputText} disabled/><i className="fa fa-caret-down Hu-pointer YSu-caret-down" onClick={() => { this.fun_IsDepTreeHide() } }></i>
                        <div className={"Hu-select-content " + this.props.Vm.IsDepTreeHidden ? " hide " :"  "}>{this.props.Vm.DepTreeObj.intoDom()}</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-6 form-control-label text-right">职位：</label>
                    <div className="col-lg-9 col-md-9 col-sm-6">
                        {this.props.Vm.JobComboObj.intoDom()}
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.search() } }>查询</a>
                    <a className="btn btn-sm btn-primary" onClick={() => { this.clear() } }>清空</a>
                </div>
            </form>;
        }

        private search()
        {
            this.props.Vm.search();
        }

        private clear()
        {
            this.props.Vm.clear();
        }

        public _initSelect(): React.ReactElement<any> {
            return <div> {this.props.Vm.UserListboxObj.intoDom()} </div>;
        }

        public _initBtns(): React.ReactElement<any> {
            return <div className="text-center">
                <a className="btn btn-sm btn-primary">保存</a>
                <a className="btn btn-sm btn-secondary">取消</a>
            </div>;
        }

        private fun_IsDepTreeHide() {
            this.props.Vm.IsDepTreeHidden = !this.props.Vm.IsDepTreeHidden;
            this.forceUpdate();
        }

        //private fun_IsJobTreeHide() {
        //    this.props.Vm.IsJobTreeHidden = !this.props.Vm.IsJobTreeHidden;
        //    this.forceUpdate();
        //}


    }

    export interface IReactNewAppraisalObjectPageVm extends basewedPageFile.Web.BaseWebPageVm {
        DepTreeObj: baseTreeFile.ui.BaseTreeVm;
       // JobTreeObj: treeFile.ui.TreeVm;
        UserListboxObj: ListBoxFile.ui.ListboxVm;
        IsDepTreeHidden: boolean;
        JobComboObj: comboFile.ui.ComboVm;
        DeptInputText: string;
        search(): void;
        clear(): void;
       // IsJobTreeHidden: boolean;
    }


    export interface INewAppraisalObjectPageConfig {


    }
    export class NewAppraisalObjectPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactNewAppraisalObjectPageVm {
        public ReactType = NewAppraisalObjectPageReact;

        public DepTreeObj: baseTreeFile.ui.BaseTreeVm;
      //  public JobTreeObj: treeFile.ui.TreeVm;        
        public UserListboxObj: ListBoxVm = new ListBoxFile.ui.ListboxVm;
        public JobComboObj: comboFile.ui.ComboVm = new comboFile.ui.ComboVm();
        public IsDepTreeHidden: boolean=true;
        public DeptInputText: string;
        public SelectedDeptId: string;
       // public IsJobTreeHidden: boolean;

        public constructor(config?: INewAppraisalObjectPageConfig) {
            super();
            this.DepTreeObj = new baseTreeFile.ui.BaseTreeVm({ RegName: "HRDepartmentTreeCodeTable" });
            this.DepTreeObj.Tree.onReactNodeClick((node) => {
                this.SelectedDeptId = node.Value;
                this.DeptInputText = node.Text;
                this.IsDepTreeHidden = true;
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchPositions", { deptId: node.Value }, (a) => {
                    this.JobComboObj.ItemList = this.setPositionItemList(a.Data);
                    this.JobComboObj.IsChange = true;
                    this.forceUpdate("");
                });
                return true;
            });
        }

        public search()
        {
            urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUsers", { deptId: this.SelectedDeptId, positionId: this.JobComboObj.dataValue() }, (a) => {
                this.UserListboxObj.ItemList = this.setUserItemList(a.Data);
                this.UserListboxObj.IsChange = true;
                this.forceUpdate("");
            });
        }

        public clear()
        {
            urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, (a) => {
                this.SelectedDeptId = "";
                this.IsDepTreeHidden = true;
                this.DeptInputText = "";
                this.JobComboObj.dataValueSet("");
                this.UserListboxObj.ItemList = this.setUserItemList(a.Data.UserList);
                this.JobComboObj.ItemList = this.setPositionItemList(a.Data.PositionList);
                this.UserListboxObj.IsChange = true;
                this.JobComboObj.IsChange = true;
                this.forceUpdate("");
            });

        }

        private init(config: INewAppraisalObjectPageConfig) {
        }

        private setPositionItemList(sourceList: dataFile.Data.IPositionData[])
        {
            var positionItemList = [];
            positionItemList.push({ Value: "", Text: "请选择" });
            if (sourceList) {
                sourceList.forEach(a => {
                    positionItemList.push({ Value: a.FID, Text: a.Name });
                });
            }
            return positionItemList;
        }

        private setUserItemList(sourceList: dataFile.Data.IUserData[]) {
            var userItemList = [];
            if (sourceList) {
                sourceList.forEach(a => {
                    userItemList.push({ Value: a.UserId, Text: a.TrueName });
                });
            }
            return userItemList;
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, (a) => {

                this.UserListboxObj.ItemList = this.setUserItemList(a.Data.UserList);
                this.JobComboObj.ItemList = this.setPositionItemList(a.Data.PositionList);
                if (callback) {
                    callback();
                }
            });

            //this.DepTreeObj.initTreeVm({
            //    CODE_VALUE: "0", CODE_TEXT: "根",
            //    Children: [
            //        {
            //            CODE_VALUE: "key1", CODE_TEXT: "内科系统",
            //            Children: [
            //                { CODE_VALUE: "$menu$", CODE_TEXT: "感染病科" },
            //                { CODE_VALUE: "$group$", CODE_TEXT: "神经内科" },
            //                { CODE_VALUE: "$role$", CODE_TEXT: "营养科" },
            //                { CODE_VALUE: "$UserManagerPage$", CODE_TEXT: "放疗中心" },
            //                { CODE_VALUE: "$rightPage$", CODE_TEXT: "儿科" },
            //                { CODE_VALUE: "$rightMainPage$", CODE_TEXT: "消化内科" },
            //            ]
            //        },
            //        {
            //            CODE_VALUE: "key2", CODE_TEXT: "外科系统",
            //            Children: [
            //                { CODE_VALUE: "$allcolpage$", CODE_TEXT: "胃肠外科" },
            //                { CODE_VALUE: "$BASELISTPAGE$", CODE_TEXT: "心胸外科" },
            //                { CODE_VALUE: "$BASEMDPAGE$", CODE_TEXT: "口腔科" },
            //                { CODE_VALUE: "$test1$", CODE_TEXT: "产科" },
            //                { CODE_VALUE: "$ORGLISTPAGE$", CODE_TEXT: "血管外科" },
            //                { CODE_VALUE: "$$module/AllControls/AllControls$", CODE_TEXT: "骨科" },
            //                {
            //                    CODE_VALUE: "key3", CODE_TEXT: "整型美容科",
            //                    Children: [
            //                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "整型美容科1" },
            //                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "整型美容科2" }]
            //                }
            //            ]
            //        }
            //    ]
            //});

            //this.JobTreeObj = new treeFile.ui.TreeVm({ IsMultiSelect: true });
            //this.JobTreeObj.initTreeVm({
            //    CODE_VALUE: "0", CODE_TEXT: "根",
            //    Children: [
            //        {
            //            CODE_VALUE: "key1", CODE_TEXT: "主任",
            //            Children: [
            //                { CODE_VALUE: "$menu$", CODE_TEXT: "主治医师" },
            //                {
            //                    CODE_VALUE: "key2", CODE_TEXT: "普通医师",
            //                    Children: [
            //                        { CODE_VALUE: "$zykTestPage$", CODE_TEXT: "助理" },
            //                        { CODE_VALUE: "$sjTestPage$", CODE_TEXT: "见习生" }]
            //                }
            //            ]
            //        }
            //    ]
            //});


            //if (callback) {
            //    callback();
            //}
        }

    }
    export class NewAppraisalObjectPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewAppraisalObjectPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactNewAppraisalObjectPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALOBJECTPAGE", basewedPageFile.Web.BaseWebPageVm, NewAppraisalObjectPageVm);

}
