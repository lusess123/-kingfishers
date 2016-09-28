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
    export class NewGroupNewMasterAction extends domCore.DomAction {
    }

    export class NewGroupNewMasterReact extends domCore.DomReact<NewGroupNewMasterProps, NewGroupNewMasterStates, NewGroupNewMasterAction> implements domCore.IReact {

        public state = new NewGroupNewMasterStates();
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
            var _vm = this.getInputVm(this.props.Vm.GroupData.RCG_Name, "notNull");
            this.props.Vm.GroupNameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.GroupData.RCG_Name = str;
                return true;
            });
            return _vm.intoDom();
        }
        //机构编码
        private inputGroupCode(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.GroupData.RCG_Code, "notNull");
            this.props.Vm.GroupCodeTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.GroupData.RCG_Code = str;
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
                            </div>
                    </div>
                </div>);

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class NewGroupNewMasterVm extends domCore.DomVm {
        public ReactType = NewGroupNewMasterReact;
        public GroupData: dataFile.GroupOrg.IGroupDetailData;

        public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;  //上级机构
        public GroupNameTextVm: textFile.ui.TextVm;  //机构名称
        public GroupCodeTextVm: textFile.ui.TextVm;  //机构编码
       

        public IsMasterHide: boolean;

        public constructor() {
            super();

            this.ParentSelector = new treeSelectorFile.ui.TreeSingleSelectorVm();
            this.ParentSelector.RegName = "RCGroupCodeTable";
            //this.GroupProductSelect = new mulSelectorFile.ui.MulselectorVm();

            this.GroupData = { FID: "", PID: "", FParentFName: "", RCG_Name: "", RCG_Code: ""};

        }
        public legal(): boolean {
            var groupName = this.GroupNameTextVm.legal();
            var groupCode = this.GroupCodeTextVm.legal();
            var _res = groupName && groupCode;
            return _res;
        }
    }


    export class NewGroupNewMasterStates extends domCore.DomStates {
    }


    export class NewGroupNewMasterProps extends domCore.DomProps<NewGroupNewMasterVm>{
    }



}


