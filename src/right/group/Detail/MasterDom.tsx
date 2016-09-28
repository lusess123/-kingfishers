import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import alinkFile = require("./../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;

export module MasterDom {
    export class MasterDomAction extends domCore.DomAction {
    }

    export class MasterDomReact extends domCore.DomReact<MasterDomProps, MasterDomStates, MasterDomAction> implements domCore.IReact {

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        public state = new MasterDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                        <div className="panel-collapse collapse in">
                            <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                                <div className="Hm-form clearfix" >
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label>上级机构：</label>
                                        </div>
                                        <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.FParentFName}</label>
                                        </div>
                                    </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className=" Hu-label">
                                    <label>机构名称：</label>
                                        </div>
                                        <div className=" Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.GroupName}</label>
                                        </div>
                                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label >机构编码：</label>
                                        </div>
                                        <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.GroupID}</label>
                                        </div>
                                    </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label>联系方式：</label>
                                        </div>
                                        <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.FPhone}</label>
                                        </div>
                                        </div>  
                            <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label>传真：</label>
                                            </div>
                                        <div className=" Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.Fax}</label>
                                            </div>
                                        </div>  

                            <div className="col-lg-4 col-sm-12 col-xs-12  Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label>邮政编码：</label>
                                            </div>
                                        <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.Post}</label>
                                            </div>
                                        </div>  
                            <div className="col-lg-12 col-sm-12 col-xs-12 Hu-dashed-line">
                                        <div className=" Hu-label">
                                    <label >地址：</label>
                                            </div>
                                        <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.FAddress}</label>
                                            </div>
                                        </div> 
                            <div className="col-lg-12 col-sm-12 col-xs-12  Hu-dashed-line">
                                        <div className="Hu-label">
                                    <label  className="form-control-label">机构描述：</label>
                                            </div>
                                            <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.GroupDescrible}</label>
                                                </div>
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

    export interface IGroupDetailData {
        GroupID?: string;
        FParentFName?: string;
        GroupName?: string;
        GroupCode?: string;
        FPhone?: string;
        GroupDescrible?: string;
        FAddress?: string;
        //ProductFIDs?: string; 
        Fax?: string;
        Post?: string;
    }

    export class MasterDomVm extends domCore.DomVm {
        public ReactType = MasterDomReact;
        public GroupName: string;

        public Data: IGroupDetailData;
        public IsFormHide: boolean;

    }
    export class MasterDomStates extends domCore.DomStates {
    }


    export class MasterDomProps extends domCore.DomProps<MasterDomVm>{
    }



}


