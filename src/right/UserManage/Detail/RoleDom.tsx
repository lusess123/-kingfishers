
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import masterDomFile = require("./MasterDom");
import thFile = require("./../../../09Web/dom/ThDom");
import data = require("./../Data");
import ThDom = thFile.Web.ThDomReact;

export module Row {
    export class RowAction extends domCore.DomAction {
    }

    export class RowReact extends domCore.DomReact<RowProps, RowStates, RowAction> implements domCore.IReact {

        public state = new RowStates();

        private fun_submitBtn() {

        }

        private fun_rowTitleClick() {
            this.props.Vm.IsRowFormHide = !this.props.Vm.IsRowFormHide;
            this.forceUpdate();
        }

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-Pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsItemFormHide ? "hide" : ""}>
                    {this.props.Vm.MasterDomObj.intoDom() }
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a onClick = {() => { this.fun_rowTitleClick(); } }>管理与角色相关的明细<i className={"fa fa-angle-" + (this.props.Vm.IsRowFormHide ? "up" : "down") }></i></a>
                            </h4>
                        </div>
                        <div className={"panel-collapse" + (this.props.Vm.IsRowFormHide?" hide": "") }>
                            <div className="content clearfix active ">
                                {
                                    this.props.Vm.RoleList.map((r) => {
                                        return <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                                            <div className="pull-left Hu-label"><label  className="pull-right">角色：</label></div>
                                            <div className="pull-left Hu-input"><label  className="pull-left">{r.RoleName}</label></div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }


    }

    export class RowVm extends domCore.DomVm {
        public ReactType = RowReact;
        public MasterDomObj: masterDomFile.MasterDom.MasterDomVm = new masterDomFile.MasterDom.MasterDomVm();
        public Index: number;
        public RoleList: data.UserManager.SimpleRoleData[] = [];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;



    }
    export class RowStates extends domCore.DomStates {
    }


    export class RowProps extends domCore.DomProps<RowVm>{
    }



}
