


import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
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

export module AppraisalTemplateUserSelectorDom {
    export class AppraisalTemplateUserSelectorDomAction extends domCore.DomAction {
    }

    export class AppraisalTemplateUserSelectorDomReact extends domCore.DomReact<AppraisalTemplateUserSelectorDomProps, AppraisalTemplateUserSelectorDomStates, AppraisalTemplateUserSelectorDomAction> implements domCore.IReact {

        public state = new AppraisalTemplateUserSelectorDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                {this._initForm() }
                {this._initSelect() }
                {this._initBtns() }
            </div>;
        }

        public _initForm(): React.ReactElement<any> {
            return <form className="p-a-md">
                <div className="clearfix">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix YSu-department">
                    <label className="col-lg-3 col-md-3 col-sm-6 form-control-label text-right">部门：</label>
                    <div className="col-lg-9 col-md-9 col-sm-6" onClick={() => { this.fun_IsDepTreeHide() } }>
                        <input type="text" className="Hg-width form-control" value={this.props.Vm.DeptInputText} disabled/><i className="fa fa-caret-down Hu-select-icon" ></i>
                        <div className={"Hm-select-content " + (this.props.Vm.IsDepTreeHidden ? " hide " : "  ")}>{this.props.Vm.DepTreeObj.intoDom() }</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-6 form-control-label text-right">职位：</label>
                    <div className="col-lg-9 col-md-9 col-sm-6">
                        {this.props.Vm.JobComboObj.intoDom() }
                    </div>
                </div>
                    </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix">
                    <label className="col-lg-3 col-md-3 col-sm-6 form-control-label text-right">人员：</label>
                    <div className="col-lg-9 col-md-9 col-sm-6">
                        <input type="text" className="Hg-width form-control" value={this.props.Vm.UserInputText} placeholder="请输入姓名"  onChange={(e) => { this.fun_linkName(e); } }/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix text-center">
                    <a className="btn btn-sm btn-primary" onClick={() => { this.search() } }>查询</a>
                    <a className="btn btn-sm btn-primary" onClick={() => { this.clear() } }>清空</a>
                </div>
            </form>;
        }

        public search() {
            this.props.Vm.search();
        }

        public clear() {
            this.props.Vm.clear();
        }
        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.UserInputText = _val;
            this.forceUpdate();
        }
        public _initSelect(): React.ReactElement<any> {
            return <div> {this.props.Vm.UserListboxObj.intoDom() } </div>;
        }

        public _initBtns(): React.ReactElement<any> {
            return <div className="text-center">
                <a className="btn btn-sm btn-primary" onClick={() => {this.save() }}>保存</a>
            </div>;
        }

        public fun_IsDepTreeHide() {
            this.props.Vm.IsDepTreeHidden = !this.props.Vm.IsDepTreeHidden;
            this.forceUpdate();
        }

        public save()
        {
            this.props.Vm.save();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalTemplateUserSelectorDomVm extends domCore.DomVm {
        DepTreeObj: baseTreeFile.ui.BaseTreeVm;
        UserListboxObj: ListBoxFile.ui.ListboxVm;
        IsDepTreeHidden: boolean;
        JobComboObj: comboFile.ui.ComboVm;
        DeptInputText: string;
        UserInputText: string;
        search(): void;
        clear(): void;
        save(): void;
    }

    export interface IAppraisalTemplateUserSelectorDomConfig {
        UserSelectorData?: dataFile.Data.IUserSelectorData;
        UniId?: string;
        SelectedValue?: string;

    }

    export class AppraisalTemplateUserSelectorDomVm extends domCore.DomVm implements IReactAppraisalTemplateUserSelectorDomVm {
        public ReactType = AppraisalTemplateUserSelectorDomReact;
        public DepTreeObj: baseTreeFile.ui.BaseTreeVm;
        public UserListboxObj: ListBoxVm = new ListBoxFile.ui.ListboxVm;
        public JobComboObj: comboFile.ui.ComboVm = new comboFile.ui.ComboVm();
        public IsDepTreeHidden: boolean = true;
        public DeptInputText: string;
        public UserInputText: string;
        public SelectedDeptId: string;
        public UniId: string;

        public constructor(config?: IAppraisalTemplateUserSelectorDomConfig) {
            super();
            var flag = false;
            this.DepTreeObj = new baseTreeFile.ui.BaseTreeVm({ RegName: "HRDepartmentTreeCodeTable" });
            this.DepTreeObj.Tree.onReactNodeClick((node) => {
                this.SelectedDeptId = node.Value;
                this.DeptInputText = node.Text;
                flag = true
                urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchPositions", { deptId: node.Value }, (a) => {
                    this.JobComboObj.ItemList = this.setPositionItemList(a.Data);
                    this.JobComboObj.IsChange = true;
                    this.forceUpdate("");
                });
                return true;
            });
            if (flag)
            {
                this.IsDepTreeHidden = false;
            }
            if (config)
            {
                this.UniId = config.UniId;
                if (config.UserSelectorData) {
                    this.UserListboxObj.ItemList = this.setUserItemList(config.UserSelectorData.UserList);
                    //this.JobComboObj.ItemList = this.setPositionItemList(config.UserSelectorData.PositionList);
                }

                this.initListBox(config);
                //if (config.SelectedValue)
                //{
                //    this.UserListboxObj.dataValueSet(config.SelectedValue);
                //}

            }
        }

        public initListBox(config?: IAppraisalTemplateUserSelectorDomConfig)
        {
            if (config.SelectedValue) {
                this.UserListboxObj.dataValueSet(config.SelectedValue);
            }
        }

        public save()
        {
            this.emitAppEvent("AppraisalTemplateUserSelectorSave", this.UniId);

        }

        public search() {
            urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUsers", { deptId: this.SelectedDeptId, positionId: this.JobComboObj.dataValue(), name: this.UserInputText }, (a) => {
                this.UserListboxObj.ItemList = this.setUserItemList(a.Data);
                this.UserListboxObj.IsChange = true;
                this.forceUpdate("");
            });
        }

        public clear() {
            urlFile.Core.AkPost("/HospPerformance/UserSelector/FetchUserSelectorData", {}, (a) => {
                this.SelectedDeptId = "";
                this.IsDepTreeHidden = true;
                this.DeptInputText = "";
                this.UserInputText = "";
                this.JobComboObj.dataValueSet("");
                this.UserListboxObj.ItemList = this.setUserItemList(a.Data.UserList);
                this.JobComboObj.ItemList = this.setPositionItemList(a.Data.PositionList);
                this.UserListboxObj.IsChange = true;
                this.JobComboObj.IsChange = true;
                this.forceUpdate("");
            });

        }
       

        public setPositionItemList(sourceList: dataFile.Data.IPositionData[]) {
            var positionItemList = [];
            positionItemList.push({ Value: "", Text: "请选择" });
            if (sourceList) {
                sourceList.forEach(a => {
                    positionItemList.push({ Value: a.FID, Text: a.Name });
                });
            }
            return positionItemList;
        }

        public setUserItemList(sourceList: dataFile.Data.IUserData[]) {
            var userItemList = [];
            if (sourceList) {
                sourceList.forEach(a => {
                    userItemList.push({ Value: a.UserId, Text: a.TrueName });
                });
            }
            return userItemList;
        }

    }
    export class AppraisalTemplateUserSelectorDomStates extends domCore.DomStates {
    }


    export class AppraisalTemplateUserSelectorDomProps extends domCore.DomProps<IReactAppraisalTemplateUserSelectorDomVm>{
    }



}


