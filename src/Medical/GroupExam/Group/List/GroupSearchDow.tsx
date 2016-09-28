import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import thFile = require("./../../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");

import React = require("react");
import ReactDOM = require("react-dom");

export module GroupSearchDow {
    export class GroupSearchDowAction extends domCore.DomAction {
    }

    export class GroupSearchDowReact extends domCore.DomReact<GroupSearchDowProps, GroupSearchDowStates, GroupSearchDowAction> implements domCore.IReact {

        public state = new GroupSearchDowStates();

        public pSender(): React.ReactElement<any> {
          return <div className="YSm-handle">
                <div className="col-lg-6 col-md-6 YSm-search">
                  <input className="col-lg-11 col-md-10 YSu-border-blue " type="text" placeholder="输入单位信息查询"  value={this.props.Vm.SearchName}  onChange={(e) => { this.fun_linkName(e); }} />
                  <a className="col-lg-1 col-md-2 btn btn-primary" onClick ={() => { this.props.Vm.Search() } }>查询</a>
                </div>
                <a className="btn btn-primary" href="#$NewGroupPage$"><i className="fa fa-plus"></i>新增团体预约</a>
            </div>;
        }
        private fun_linkCode(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchSimpleCode = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_linkName(e) {
            var _val = e.target["value"];
            this.props.Vm.SearchName = _val;
            if (!_val || _val == "") {
                this.props.Vm.IsHideClearBtn = true;
            }
            else {
                this.props.Vm.IsHideClearBtn = false;
            }
            this.forceUpdate();
        }

        private fun_seachClearBtn() {
            this.props.Vm.SearchSimpleCode = "";
            this.props.Vm.SearchName = "";
            this.props.Vm.IsHideClearBtn = true;
            this.props.Vm.loadPageData(0);
            this.forceUpdate();
        }


        private fun_searchBtn() {
            this.props.Vm.loadPageData(0);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }

    }

    export interface IGroupSearchDowConfig {
        UniId: string;
    }

    export class GroupSearchDowVm extends domCore.DomVm {
        public ReactType = GroupSearchDowReact;
        public SearchSimpleCode: string;
        public SearchName: string;
        public IsHideClearBtn: boolean = true;
        public UniId: string = "";

        public constructor(config?: IGroupSearchDowConfig) {
            super();
            this.SearchName =""
            if (config)
            {
                this.UniId = config.UniId;
            }

        }
        public loadPageData(pageIndex: number) {
            this.emitAppEvent("loadGrouppagedata", this.UniId, pageIndex);
        }
        public Search() {
            var vals = this.SearchName;
            urlFile.Core.AkUrl.Current().openUrl("$winInitGroupTreePage$" + vals + "$", true);

        }
    }
    export class GroupSearchDowStates extends domCore.DomStates {
    }


    export class GroupSearchDowProps extends domCore.DomProps<GroupSearchDowVm>{
    }



}


