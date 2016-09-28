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


        private fun_ParentOnChange(e) {
            
        }

        private fun_titleClick()
        {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        public state = new MasterDomStates();

        public pSender(): React.ReactElement<any> {
            return (<div className="panel">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                        <a onClick={() => { this.fun_titleClick(); } }>基础菜单明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ?"up":"down")}></i></a>
                        </h4>    
                    </div>
                    <div className={"panel-collapse" + (this.props.Vm.IsFormHide ? " hide": "") }>
                        <div className="content active " >
                        <div className="Hm-form clearfix" >
                             <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>菜单名：</label>
                                 </div>
                                <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.MenuName}</label>
                                </div>
                             </div>
                             <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>上级菜单：</label>
                                 </div>
                                <div className="Hu-input">
                                    <label className="form-control-label">
                                        {this.props.Vm.Data.ParentName == "" ? "(此菜单是根节点)" : this.props.Vm.Data.ParentName}
                                    </label>
                                </div>
                             </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                    <div className="Hu-label">
                                    <label>菜单类别：</label>
                                     </div>
                                    <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.MenuKindName}</label>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                    <div className="Hu-label">
                                    <label>排序编号：</label>
                                     </div>
                                    <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.OrderId}</label>
                                    </div>
                                 </div>
                                <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                    <div className="Hu-label">
                                    <label>权值：</label>
                                     </div>
                                    <div className="Hu-input"><label for="right-label" className="form-control-label">{this.props.Vm.Data.Key}</label> </div>
                                 </div>
                                  <div className="col-lg-6 col-sm-12 col-xs-12 Hu-dashed-line">
                                    <div className="Hu-label">
                                    <label>菜单描述：</label>
                                     </div>
                                    <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.RightDesc}</label>
                                    </div>
                                    </div>
                                 </div>
                                 
                                    </div>
                                 </div>
                     
                    </div> );
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        private fun_TrashDel()
        {
            //-----------------
             alert("删除");
        }
        private fun_Update() {
            //-----------------
             alert("删除");
        }



    }

    export interface IMenuDetailData
    {
        FID?: string;
        MenuName?: string;
        ParentId?: string;
        RightDesc?: string;
        ParentName?: string;
        MenuKindId?: string;
        MenuKindName?: string;
        Key?: string;
        IconName?: string;
        OrderId?: number;
    }

    export class MasterDomVm extends domCore.DomVm {
        public ReactType = MasterDomReact;
        public MenuKindName: string;

        public Data: IMenuDetailData;
        public IsFormHide: boolean;

    }
    export class MasterDomStates extends domCore.DomStates {
    }


    export class MasterDomProps extends domCore.DomProps<MasterDomVm>{
    }



}


