


import domFile = require("./../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import comboFile = require("./../../02col/02Mulite/Combo");
import textFile = require("./../../02col/01single/Text");
import textareaFile = require("./../../02col/01single/TextArea");

export module NewOrg {
    export class NewOrgAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class NewOrgReact extends basewedPageFile.Web.BaseWebPageReact<NewOrgProps, NewOrgStates, NewOrgAction> implements domCore.IReact {

        public state = new NewOrgStates();


        private fun_orgName_change(e:React.FormEvent)
        {
            var _val = e.target["value"];
            this.props.Vm.OrgName = _val;
        }


        public pSender(): React.ReactElement<any> {

            return <div>
                   <div className="Hm-modals" >
                    <h4>新增组织机构</h4>
                    <div>
                        <div className="panel">
                            <div className="panel-collapse collapse in">
                        <div className="Hm-form clearfix" >

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="form-control-label pull-right required">上级机构：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                   <span>信使测试</span>
                                   </div>
                                </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                    <label className="form-control-label pull-right required">机构名称：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder="请输入" type="text"
                                    onChange={(e) => { this.fun_orgName_change(e); } }  value={this.props.Vm.OrgName}   ></input>
                                   </div>
                                </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                            <label className="form-control-label pull-right required">机构编码：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" ></input>
                                    </div>
                                </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                            <label className="form-control-label pull-right">机构描述：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    {this.props.Vm.TextAreaObj.intoDom()}
                                    </div>
                                </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                            <label className="form-control-label pull-right">地址：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" ></input>
                                    </div>
                                </div>

                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="columns Hu-label ">
                                            <label className="form-control-label pull-right">联系方式：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text"></input>
                                    </div>
                                </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                            <label className="form-control-label pull-right">传真：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" ></input>
                                    </div>
                                </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className="pull-left Hu-label">
                                            <label className="form-control-label pull-right">邮政编码：</label>
                                    </div>
                                <div className="pull-left Hu-input">
                                    <input placeholder=".." type="text" ></input>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                       </div>
                 <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submit();}}>提交</span></div>
                </div>;
        }

        private fun_submit()
        {
            this.props.Vm.addNodeByName();
        }
        
    }
    export class NewOrgVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewOrgReact;

        public IsMasterHide: boolean;

        public TextAreaObj: textareaFile.ui.TextAreaVm;

        public OrgName: string;

        public constructor() {
            super();
            this.TextAreaObj =  new textareaFile.ui.TextAreaVm();
        }

        public addNodeByName()
        {
            this.SendPageActor({ ToPanelName: "" }, this.OrgName);
            this.closePage();
        }
    }
    export class NewOrgStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class NewOrgProps extends basewedPageFile.Web.BaseWebPageProps<NewOrgVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("NEWORGPAGES", basewedPageFile.Web.BaseWebPageVm, NewOrgVm);

}

