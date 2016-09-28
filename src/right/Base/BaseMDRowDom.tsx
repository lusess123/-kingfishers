import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import baseMDMasterDomFile = require("./BaseMDMasterDom");
import BaseMDDetailRowDomFile = require("./BaseMDDetailRowDom");
export module BaseMDRowDom {
    export class BaseMDRowDomAction extends domCore.DomAction {
    }

    export class BaseMDRowDomReact extends domCore.DomReact<BaseMDRowDomProps, BaseMDRowDomStates, BaseMDRowDomAction> implements domCore.IReact {

        public state = new BaseMDRowDomStates();

        private fun_detailTitleClick() {
            this.props.Vm.BaseMDRowShell.IsDetailHide = !this.props.Vm.BaseMDRowShell.IsDetailHide;
            this.forceUpdate();
        }
        private fun_rowTitleClick() {
            this.props.Vm.BaseMDRowShell.IsRowHide = !this.props.Vm.BaseMDRowShell.IsRowHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.BaseMDRowShell.IsMasterHide = !this.props.Vm.BaseMDRowShell.IsMasterHide;
            this.forceUpdate();
        }
        private fun_addNewButtonRow() {
            this.props.Vm.newRow();
        }

        private react_getDetail(): React.ReactElement<any>
        {
            return <div className="2">
                <ul className="tabs" >
                    <li className="tab-title active"><a  onClick={() => { this.fun_detailTitleClick(); } }>{this.props.Vm.DetailTitle}<i className={"fa fa-angle-" + (this.props.Vm.BaseMDRowShell.IsDetailHide ? "up" : "down") }></i></a></li>
                </ul>
                <div className="tabs-content">
                    <div className={"Hm-table active " + (this.props.Vm.BaseMDRowShell.IsDetailHide ? "hide" : "") }>
                        <table className="table">
                            <thead className="thead-default">
                                <tr className="ACT-HEADER MEMBER">
                                    <th className="thCheckAll acsTextC" style={{ width: "1em" }}></th>
                                    <th className="hide"><span>主键</span></th>
                                    {this.props.Vm.BaseMDRowReactHook.ThReactList}
                                    <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_addNewButtonRow() } }></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.Vm.DetailRowList.map((row) => {
                                        return row.intoDom();
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>;
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_rowTitleClick(); } }>
                    {this.props.Vm.BaseMDRowShell.Index + 1}
                    <i className={"fa fa-angle-double-" + (this.props.Vm.BaseMDRowShell.IsRowHide ? "up" : "down") }></i>
                </div>
                <div className={this.props.Vm.BaseMDRowShell.IsRowHide ? "hide" : ""}>

                    <div className="1">
                        <ul className="tabs">
                            <li className="tab-title active"><a onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.MasterTitle}<i className={"fa fa-angle-" + (this.props.Vm.BaseMDRowShell.IsMasterHide ? "up" : "down") }></i></a></li>
                        </ul>
                        <div className="tabs-content">
                            <div className={"content active " + (this.props.Vm.BaseMDRowShell.IsMasterHide ? "hide" : "") } >
                                {this.props.Vm.MasterObj.intoDom()}
                            </div>
                        </div>
                    </div>

                    {this.props.Vm.HasNoDetail?null:this.react_getDetail()}

                  

                </div>
            </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class BaseMDRowDomVm extends domCore.DomVm {
        public ReactType = BaseMDRowDomReact;

        public BaseMDRowShell: IBaseMDRowShell;
        public BaseMDRowReactHook: IBaseMDRowReact;
        public MasterObj: baseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomVm;
        public DetailRowList: BaseMDDetailRowDomFile.BaseMDDetailRowDom.BaseMDDetailRowDomVm[] = [];

        public IsFormHide :boolean;

        public MasterTitle: string = "主表";
        public DetailTitle: string = "从表";

        public HasNoDetail: boolean = false;
        public constructor() {
            super();
            this.BaseMDRowShell = { Index: 0 };
            this.BaseMDRowReactHook =
                {
                  ThReactList: [
                    <th><span>按钮名称</span></th>,
                    <th><span>按钮值</span></th>,
                    <th><span>编码</span></th>,
                    <th><span>排序编号</span></th>
                  ],
                 
                
                };
            this.DetailRowList = [new BaseMDDetailRowDomFile.BaseMDDetailRowDom.BaseMDDetailRowDomVm()];
            this.MasterObj = new baseMDMasterDomFile.BaseMDMasterDom.BaseMDMasterDomVm();
        }

        public reactNewRow()
        {
            this.newRow();
        }

        public newRow()
        {
        }

    }

    export interface IBaseMDRowShell
    {
         Index: number ;
         IsRowHide?: boolean;
         IsDetailHide?: boolean;
         IsMasterHide?: boolean;
    }

    export interface IBaseMDRowReact
    {
        ThReactList?: React.ReactElement<any>[];

    }

    export class BaseMDRowDomStates extends domCore.DomStates {
    }


    export class BaseMDRowDomProps extends domCore.DomProps<BaseMDRowDomVm>{
    }



}


