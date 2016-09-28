import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import EditSpanFile = require("./../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

export module OrgEdit {
    export class OrgEditAction extends domCore.DomAction {
    }

    export class OrgEditReact extends domCore.DomReact<OrgEditProps, OrgEditStates, OrgEditAction> implements domCore.IReact {

        public state = new OrgEditStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hm-org-edit">
                <div className="Hu-org-title clearfix">
                    <ESpan  children={null} Vm={new ESpanVm({ Content: "上海商务有限公司" }) }   />
                    <b>编码：<ESpan  children={null} Vm={new ESpanVm({ Content: "Bussniss Company" }) }   /></b>
                    <a className="btn btn-xs btn-secondary">保存</a>
                </div>                
            </div>;
        }


        private fun_EditClick() {
            this.props.Vm.IsOrgEditShow = !this.props.Vm.IsOrgEditShow;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class OrgEditVm extends domCore.DomVm {
        public ReactType = OrgEditReact;

        public IsOrgEditShow: boolean = false;

        public constructor()
        {
            super();
            this.MetaShowData = {
                Name: "组织机构编辑",
                Content: " 可以对组织机构进行编辑修改、保存或删除 ",
                List: ["张奇", "王梦辉"] 
            };
        }
    }
    export class OrgEditStates extends domCore.DomStates {
    }


    export class OrgEditProps extends domCore.DomProps<OrgEditVm>{
    }



}
