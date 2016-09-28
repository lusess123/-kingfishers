import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import treeSelectorFile = require("./../../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");
//import menuButtonRowFile = require("./MenuButtonRow");
import mulSelectorFile = require("./../../../../02col/03selector/Mulselector");
import textFile = require("./../../../../02col/01single/Text");

export module Right {
    export class GroupNewMasterAction extends domCore.DomAction {
    }

    export class GroupNewMasterReact extends domCore.DomReact<GroupNewMasterProps, GroupNewMasterStates, GroupNewMasterAction> implements domCore.IReact {

        public state = new GroupNewMasterStates();
        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.GroupData[fName] = _val;
            this.forceUpdate();
        }
        private fun_titleMasterClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }

        //机构名称
        private inputGroupName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.GroupData.GroupName, "notNull");
            this.props.Vm.GroupNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.GroupData.GroupName = str;
                return true;
            });
            return _vm.intoDom();
        }
        //机构编码
        private inputGroupCode(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.GroupData.GroupCode, "notNull");
            this.props.Vm.GroupCodeTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.GroupData.GroupCode = str;
                return true;
            })
            return _vm.intoDom();
        }
        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {

            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            _bean.LegalObj.Kind = legalKind;

            return _bean;
        }

        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <div className="tabs-content">

                        <div className="acs-form clearfix" >
                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right required">上级机构：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.ParentSelector.intoDom() }
                                    </div>
                                </div>
                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right required">机构名称：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    {this.inputGroupName() }
                                    </div>
                                </div>

                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right required">机构编码：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    {this.inputGroupCode() }
                                    </div>
                                </div>
                            <div className="large-12 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right">机构描述：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <textarea value={this.props.Vm.GroupData.GroupDescrible} onChange={(e) => { this.fun_OnChange(e, "GroupDescrible") } }></textarea>
                                    </div>
                                </div>
                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right">地址：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" value={this.props.Vm.GroupData.FAddress} onChange={(e) => { this.fun_OnChange(e, "FAddress"); } }></input>
                                    </div>
                                </div>

                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right">联系方式：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" value={this.props.Vm.GroupData.FPhone} onChange={(e) => { this.fun_OnChange(e, "FPhone"); } }></input>
                                    </div>
                                </div>
                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right">传真：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" value={this.props.Vm.GroupData.Fax} onChange={(e) => { this.fun_OnChange(e, "Fax"); } }></input>
                                    </div>
                                </div>
                            <div className="large-6 small-12 columns">
                                <div className="pull-left Hu-label">
                                    <label className="right">邮政编码：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" value={this.props.Vm.GroupData.Post} onChange={(e) => { this.fun_OnChange(e, "Post"); } }></input>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>);

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class GroupNewMasterVm extends domCore.DomVm {
        public ReactType = GroupNewMasterReact;
        public GroupData: dataFile.GroupOrg.IGroupDetailData;

        public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;  //上级机构
        public GroupNameTextVm: textFile.ui.TextVm;  //机构名称
        public GroupCodeTextVm: textFile.ui.TextVm;  //机构编码
        //public GroupProductSelect: mulSelectorFile.ui.MulselectorVm;  //所属产品
        public GroupDesc: string;  //机构描述
        public GroupAddress: string;  //地址
        public GroupPhone: string; //联系方式
        public GroupFox: string;  //传值
        public GroupPost: string;  //邮政编码

        public IsMasterHide: boolean;

        public constructor() {
            super();

            this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.ParentSelector.RegName = "GroupCodeTable";
            //this.GroupProductSelect = new mulSelectorFile.ui.MulselectorVm();

            this.GroupData = { GroupID: "", FParentFID: "", FParentFName: "", GroupName: "", GroupCode: "", FPhone: "", GroupDescrible: "", FAddress: "", Fax: "", Post: "" };

        }
        public legal(): boolean {
            var groupName = this.GroupNameTextVm.legal();
            var groupCode = this.GroupCodeTextVm.legal();
            var _res = groupName && groupCode;
            return _res;
        }
    }


    export class GroupNewMasterStates extends domCore.DomStates {
    }


    export class GroupNewMasterProps extends domCore.DomProps<GroupNewMasterVm>{
    }



}


