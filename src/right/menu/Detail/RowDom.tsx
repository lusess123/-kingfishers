
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import masterDomFile = require("./MasterDom");
import thFile = require("./../../../09Web/dom/ThDom");
import ThDom = thFile.Web.ThDomReact;

export module Row {
    export class RowAction extends domCore.DomAction {
    }

    export class RowReact extends domCore.DomReact<RowProps, RowStates, RowAction> implements domCore.IReact {

        public state = new RowStates();

        private fun_submitBtn() {

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
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_itemTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></div>
                    <div className={this.props.Vm.IsItemFormHide?"hide":"Hm-toggle-item"}>
                    {this.props.Vm.MasterDomObj.intoDom() }
              

                        <div className="panel">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a onClick = {() => {this.fun_rowTitleClick();}}>菜单按钮<i className={"fa fa-angle-" + (this.props.Vm.IsRowFormHide?"up":"down")}></i></a></h4>
                            </div>    
                            <div className={"panel-collapse" + (this.props.Vm.IsRowFormHide?" hide": "") }>
                                <div className="content active">
                                    <div className="table-responsive">
                                         <table className="table table-bordered table-striped">
                                            <thead className="thead-default">
                                                <tr className="ACT-HEADER MEMBER">
                                                    <th className="thCheckAll" style={{ width: "1em" }}></th>
                                                    <th className="hide"><span>主键</span></th>
                                                    <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>按钮名称</span></ThDom>
                                                    <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>按钮值</span></ThDom>
                                                    <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>编码</span></ThDom>
                                                    <ThDom children={null} Vm={new thFile.Web.ThDomVm() }><span>排序编号</span></ThDom>
                                           
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.Vm.MenuButtonList.map((btn,index) => {
                                                   return (<tr>
                                                       <td>{(index + 1).toString()}</td>
                                                            <td className="hide">{btn.FID}</td>
                                                            <td>{btn.FName}</td>
                                                            <td>{btn.FKey}</td>
                                                            <td>{btn.FValue}</td>
                                                            <td>{btn.OrderId}</td>
                                                  
                                                    </tr>);
                                                })
                                            }
                                      
                                            </tbody>
                                        </table>
                                    </div> 
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
    export interface IMenuButtonData {
        FID?: string;
        FName?: string;
        FKey?: string;
        FValue?: string;
        OrderId?: string;

    }
    export class RowVm extends domCore.DomVm {
        public ReactType = RowReact;
        public MasterDomObj: masterDomFile.MasterDom.MasterDomVm = new masterDomFile.MasterDom.MasterDomVm();
        public Index: number;
        public MenuButtonList: IMenuButtonData[] = [];
        public IsRowFormHide: boolean;
        public IsItemFormHide: boolean;

      

    }
    export class RowStates extends domCore.DomStates {
    }


    export class RowProps extends domCore.DomProps<RowVm>{
    }



}
