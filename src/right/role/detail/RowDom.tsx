
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

//import masterDomFile = require("./MasterDom");
import thFile = require("./../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;

import dataFile = require("./../Data");


export module Row {
    export class RowAction extends domCore.DomAction {
    }

    export class RowReact extends domCore.DomReact<RowProps, RowStates, RowAction> implements domCore.IReact {

        public state = new RowStates();

        private fun_submitBtn() {

        }

        private fun_titleClick() {
            this.props.Vm.IsFormHide = !this.props.Vm.IsFormHide;
            this.forceUpdate();
        }

        private fun_rowTitleClick(){
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }

        private fun_itemTitleClick(){
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></div>
                    <div className={this.props.Vm.IsItemFormHide?"hide":""}>
                    {this.createRow()}
                    </div>
               
            </div>;
        }

        public createRow(): React.ReactElement<any> {
            return (<div className="panel">
                <div className="panel-heading">
                    <div className="panel-title"><a onClick={() => { this.fun_titleClick(); } }>角色明细<i className={"fa fa-angle-" + (this.props.Vm.IsFormHide ? "up" : "down") }></i></a></div>
                </div>
                <div className="tabs-content">
                    <div className={"content active " + (this.props.Vm.IsFormHide ? "hide" : "") } >
                        <div className="Hm-form clearfix" >
                            <div className="col-lg-6 col-sm-12  Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>角色标识：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.RoleSign}</label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12  Hu-dashed-line">
                                <div className="Hu-label">
                                    <label >角色名称：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">
                                        {this.props.Vm.Data.RoleName}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12  Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>组织机构：</label>
                                </div>
                                <div className="Hu-input">
                                    <label  className="form-control-label">{this.props.Vm.Data.FControlUnitName}</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-sm-12  Hu-dashed-line">
                                <div className="Hu-label">
                                    <label>描述：</label>
                                </div>
                                <div className="Hu-input">
                                    <label className="form-control-label">{this.props.Vm.Data.Description}</label>
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
  
    export class RowVm extends domCore.DomVm {
        public ReactType = RowReact;
       // public MasterDomObj: masterDomFile.MasterDom.MasterDomVm = new masterDomFile.MasterDom.MasterDomVm();
        public Index: number;
       // public MenuButtonList: IMenuButtonData[] = [];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;
        public Data: dataFile.Role.IRoleData;
        public IsFormHide: boolean;

      

    }
    export class RowStates extends domCore.DomStates {
    }


    export class RowProps extends domCore.DomProps<RowVm>{
    }



}
