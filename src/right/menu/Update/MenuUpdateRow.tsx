import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import treeSelectorFile = require("./../../../02col/03selector/TreeSelector");
import comboFile = require("./../../../02col/02Mulite/Combo");
import dataFile = require("./../Data");
import menuButtonRowFile = require("./MenuButtonRow");

import textFile = require("./../../../02col/01single/Text");
import menuInsertRowFile = require("./MenuUpdateMaster");
import eventFile = require("./../../../01core/Event");


export module MenuUpdateRow {
    export class MenuUpdateRowAction extends domCore.DomAction {
    }

    export class MenuUpdateRowReact extends domCore.DomReact<MenuUpdateRowProps, MenuUpdateRowStates, MenuUpdateRowAction> implements domCore.IReact {

        public state = new MenuUpdateRowStates();

        private fun_detailTitleClick() {
            this.props.Vm.IsDetailHide = !this.props.Vm.IsDetailHide;
            this.forceUpdate();
        }
        private fun_masterTitleClick() {
            this.props.Vm.IsMasterHide = !this.props.Vm.IsMasterHide;
            this.forceUpdate();
        }
        private fun_addNewButtonRow() {
           // this.props.Vm.MenuButtonRowList = [];
            this.props.Vm.addButtonRow();

            //this.props.Vm.MenuButtonRowList.pi
            //this.props.Vm.MenuMasterObj.MenuData.MenuButtonList.push({ FID: "", FName: "", FKey: "", FValue: "", OrderId: "" });
            //this.forceUpdate();
        }

        private createMenuButtonRow(data: any, index: number): React.ReactElement<any> {
            var _this = this;
            var buttonRow = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm();
            buttonRow.ButtonData = data;
            buttonRow.RowNumber = index;
            buttonRow.MenuRow = _this.props.Vm;
            
            if (index>0)
            {
                buttonRow.PreviousButton = this.props.Vm.MenuButtonRowList[index - 1].ButtonData;
            }
            this.props.Vm.MenuButtonRowList.push(buttonRow);
           // buttonRow.MenuRow = this.props.Vm;
            return buttonRow.intoDom();
        };

        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="Hu-row-title Hu-pointer" onClick={() => { this.fun_masterTitleClick(); } }>{this.props.Vm.Index + 1}<i className={"fa fa-angle-double-" + (this.props.Vm.IsMasterHide ? "right" : "down") }></i></div>
                <div className={this.props.Vm.IsMasterHide ? "hide" : ""}>
                {this.props.Vm.MenuMasterObj.intoDom() }
                <div className="2">

                    <div className="panel">
                        <div className="panel-heading">
                            <h4 className="panel-title">
                                <a  onClick={() => { this.fun_detailTitleClick(); } }>菜单按钮<i className={"fa fa-angle-" + (this.props.Vm.IsDetailHide?"up":"down")}></i></a> 
                            </h4>
                        </div>  
                        <div className={"panel-collapse" + (this.props.Vm.IsDetailHide ? " hide" : "")}>
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
                                                    this.props.Vm.MenuButtonRowList.map((row, i) => {
                                                        row.RowNumber = i;
                                                        return  row.intoDom();
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                    </div>
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

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IMenuUpdateRowConfig
    {
        MenuButtonRowConfigList: menuButtonRowFile.MenuButtonRow.IMenuButtonRowConfig[];
        MenuMasterConfig: menuInsertRowFile.Right.IMenuUpdateMasterConfig;
    }


    export class MenuUpdateRowVm extends domCore.DomVm {
        public ReactType = MenuUpdateRowReact;
        
        //public ParentSelector: treeSelectorFile.ui.TreeSingleSelectorVm;
        //public MenuTypeCombo: comboFile.ui.ComboVm;

       
        public MenuButtonRowList : menuButtonRowFile.MenuButtonRow.MenuButtonRowVm[] = [];
        public MenuMasterObj: menuInsertRowFile.Right.MenuUpdateMasterVm = new menuInsertRowFile.Right.MenuUpdateMasterVm();

        //public MenuData: dataFile.Menu.IMenuDetailData;
        public IsMasterHide: boolean;
        public IsDetailHide: boolean;

        public DelFidList: string[] = [];

        public Index: number;
             
        public UniId: string = "";

        private delMenuButtonRowByIndex(rowIndex: number)
        {
           // alert(rowIndex);
            var _id = this.MenuButtonRowList[rowIndex].ButtonData.FID;
            if (_id)
            {
                this.DelFidList.push(_id);
            }
            this.MenuButtonRowList.splice(rowIndex, 1);
            this.MenuButtonRowList.forEach((r, i) => {
                if (i >= rowIndex) {
                    r.toChange();
                }
            });
            this.forceUpdate("");
        }

        public constructor(config?: IMenuUpdateRowConfig) {
            super();

            this.UniId = eventFile.App.getUniId().toString();

            if (config) {
                config.MenuMasterConfig.UniId = this.UniId;
                this.MenuMasterObj = new menuInsertRowFile.Right.MenuUpdateMasterVm(config.MenuMasterConfig);
                config.MenuButtonRowConfigList.forEach((btRow, i) => {
                    btRow.UniId = this.UniId;
                    var _btnr = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm(btRow);
                    _btnr.RowNumber = i;
                    this.MenuButtonRowList.push(_btnr );
                });
            }

            this.listenAppEvent("right/menu/update/MenuButtonRow", this.UniId, (rowIndex: number) => {
                this.delMenuButtonRowByIndex(rowIndex);
            });
   

        }
        public legal(): boolean {
            var _isres: boolean = this.MenuMasterObj.legal();
            this.MenuButtonRowList.forEach((r) => {
                _isres = _isres && r.legal();
            });
            return _isres;     
        }
        public getData(): dataFile.Menu.IMenuDetailData{
            var _list = [];
            this.MenuButtonRowList.forEach((r) => {
                var _obj = r.getData();
                if (!utilFile.Core.Util.IsPure(_obj)) {
                    _list.push(_obj);
                }
            });
          
            
          //  _data.MenuButtonList =
            var _data = this.MenuMasterObj.getData(_list.length > 0 || this.DelFidList.length > 0);
            if (this.DelFidList.length > 0) {
                _data.DeleteButtonList = this.DelFidList;
            }
           
            if (_list.length > 0) {
                _data.MenuButtonList = _list;
            }
            return _data;
        }

        public addButtonRow()
        {
            var _val: number = 1;
            if (this.MenuButtonRowList.length > 0) {
                var _lastrow = this.MenuButtonRowList[this.MenuButtonRowList.length - 1];
                _val = this.getNextValue(  parseInt( _lastrow.ButtonData.FValue));
            }

            var _data = { FID: null, FName: "", FKey: "", FValue: _val.toString(), OrderId: "0", ParentRightValue:this.MenuMasterObj.MenuData.Key};
            var _btRow: menuButtonRowFile.MenuButtonRow.MenuButtonRowVm = new menuButtonRowFile.MenuButtonRow.MenuButtonRowVm({ButtonData:_data ,IsNew:true,UniId:this.UniId});
            this.MenuButtonRowList.push(_btRow);
            this.forceUpdate("");
        }


        private getNextValue(lastNumber: number):number {
            var _n = (Math.log(lastNumber) / Math.log(2));
            return Math.pow(2,_n +1);
        }

       

    }
    export class MenuUpdateRowStates extends domCore.DomStates {
    }


    export class MenuUpdateRowProps extends domCore.DomProps<MenuUpdateRowVm>{
    }



}


