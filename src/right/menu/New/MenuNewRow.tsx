
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

//import menuDetailFile = require("./MenuDetail");
import menuInsertRowFile = require("./MenuNewMaster");
import menuButtonRowFile = require("./MenuButtonRow");
import dataFile = require("./../Data");

import textFile = require("./../../../02col/01single/Text");

export module MenuNewRow {
    export class MenuNewRowAction extends domCore.DomAction {
    }

    export class MenuNewRowReact extends domCore.DomReact<MenuNewRowProps, MenuNewRowStates, MenuNewRowAction> implements domCore.IReact {

        public state = new MenuNewRowStates();

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }

        private fun_addNewButtonRow() {
            this.props.Vm.MenuMasterObj.MenuButtonRowList = [];
            this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.push({ FID: "", FName: "", FKey: "", FValue: "", OrderId: "" });
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                {this.props.Vm.MenuMasterObj.intoDom() }
                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a  onClick={() => { this.fun_detailTitleClick(); } }>菜单按钮<i className={"fa fa-angle-" + (this.props.Vm.IsDetailHide?"up":"down")}></i></a> 
                            </h4>
                        </div>  
                        <div className={"panel-collapse" + (this.props.Vm.IsDetailHide ? " hide" : "") }>
                            <div className="content active">
                                <div className="table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead className="thead-default">
                                            <tr className="ACT-HEADER MEMBER">
                                                <th className="thCheckAll acsTextC" style={{ width: "1em" }}></th>
                                                <th className="hide"><span>主键</span></th>
                                                <th><span>按钮名称</span></th>
                                                <th><span>按钮值</span></th>
                                                <th><span>编码</span></th>
                                                <th><span>排序编号</span></th>
                                                <th><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_addNewButtonRow() } }></i></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.map((data, index) => {
                                                    return this.createMenuButtonRow(data, index)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    </div>
                        </div>
                        </div> 

                    

                </div>

            </div>;
        }

        private createMenuButtonRow(data: any, index: number): React.ReactElement<any> {
            var buttonRow = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm();
            buttonRow.ButtonData = data;
            buttonRow.RowNumber = index;
            this.props.Vm.MenuMasterObj.MenuButtonRowList.push(buttonRow);
            buttonRow.MenuRow = this.props.Vm;
            return buttonRow.intoDom();
        };

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class MenuNewRowVm extends domCore.DomVm {
        public ReactType = MenuNewRowReact;
        public IsDetailHide: boolean;

        public MenuMasterObj: menuInsertRowFile.Right.MenuNewMasterVm;

        public constructor() {
            super();
            this.MenuMasterObj = new menuInsertRowFile.Right.MenuNewMasterVm();
        }

        public initData(data:dataFile.Menu.IParentsMenuData)
        {
            this.MenuMasterObj.initData(data);
        }
        


    }
    export class MenuNewRowStates extends domCore.DomStates {
    }


    export class MenuNewRowProps extends domCore.DomProps<MenuNewRowVm>{
    }



}
