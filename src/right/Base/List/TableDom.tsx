
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import GridFormFile = require("./../../../03form/Grid/GridForm");
import GridRowFile = require("./../../../03form/Grid/GridRow");
import GridColumnFile = require("./../../../03form/Grid/GridColumn");

import baseColumnGroupFile = require("./../../../03form/Base/BaseColumnGroup");
import DetailFile = require("./../../../02col/01single/Detail");
import buttonFile = require("./../../../05tool/Button");
import BaseListPageFile = require("./BaseListPage");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module TableDom {
    export class TableDomAction extends domCore.DomAction {
    }

    export class TableDomReact extends domCore.DomReact<TableDomProps, TableDomStates, TableDomAction> implements domCore.IReact {

        public state = new TableDomStates();
        private initBody(): React.ReactElement<any> {
            return null;
        }
        private initHeader(): React.ReactElement<any> {
            return null;
        }

        private initTable(): React.ReactElement<any> {
            

            return  this.props.Vm.GridObj ? this.props.Vm.GridObj.intoDom() :
                (<table>
                    <thead>{this.initHeader() }</thead>
                    {this.initBody() }
                   </table>);

        }

        private fun_Scroll(e:React.UIEvent)
        {
            var _$obj = $(e.target);
            this.state.ScrollNum = _$obj.scrollLeft();
            
            this.props.Vm.scrollAuto(this.state.ScrollNum);
            //this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                 
                   <div className="Hm-table" onScroll={(e) => { this.fun_Scroll(e); } }>
                   
                   {this.initTable()}
                   </div>
                   </div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ITableDomVm
    {
        ParentListPage?: BaseListPageFile.BaseListPage.BaseListPageVm;

    }

    export class TableDomVm extends domCore.DomVm {
        public ReactType = TableDomReact;
        public GridObj: GridFormFile.ui.GridFormVm;
        public ParentListPage: BaseListPageFile.BaseListPage.BaseListPageVm;

        public scrollAuto(s:number) {
            this.GridObj.IsAcsRelative = s > 0; 
            this.GridObj.LeftNum = s;

            this.GridObj.RowObjList.forEach((r) => {
                //--------
                var row: GridRowFile.ui.GridRowVm = utilFile.Core.Util.Cast<GridRowFile.ui.GridRowVm>(r);
                row.IsAcsRelative = s > 0;
                row.LeftNum = s;
               // r.forceUpdate("");
                row.IsChange = true;
            });
            this.GridObj.IsChange = true;
            this.forceUpdate("");
        }

        public checkButton():string[]
        {
            let _num: number = 0;
            var _temp: string[] = null;
            this.GridObj.RowObjList.forEach((r) => {
                //----------


                if (r.IsSelect)
                {
                    if (_temp == null) {
                        _temp = r.ButtonRightSign.split("|");
                    }
                    else {
                        _temp = utilFile.Core.Util.intersection(_temp, r.ButtonRightSign.split("|"));
                    }
                    
                }
            });


            return _temp;
            //alert(_num);
        }

        public constructor(config?: ITableDomVm)
        { 
            super();
            this.ParentListPage = config.ParentListPage;
            this.GridObj = new GridFormFile.ui.GridFormVm();
            this.GridObj.FormConfig = { TableName: "222" };
            this.GridObj.IsOnlyTable = true;
            this.GridObj.IsNoAdd = true;
            this.GridObj.IsNoDel = true;

            for (var i: number = 0; i < 60; i++) {
                var _columnObj: baseColumnGroupFile.ui.ColumnConfig = new baseColumnGroupFile.ui.ColumnConfig();
                _columnObj.DisplayName = "字段" + i.toString();
                _columnObj.Name = "字段" + i.toString();
                _columnObj.ControlType = "Detail";
                this.GridObj.Columns.push(_columnObj);
            }

            for (var i: number = 0; i < 25; i++) {
                var _row: GridRowFile.ui.GridRowVm = new GridRowFile.ui.GridRowVm();
                _row.ButtonRightSign = "Detail|Del";
                this.ParentListPage.DataBtnList.forEach((btn) => {
                    var _names = _row.ButtonRightSign.split("|");
                    _names.forEach((n) => {
                        if (n == btn.Name) {
                            let bt: buttonFile.ui.ButtonVm = new buttonFile.ui.ButtonVm();
                            bt.Name = n;
                            bt.DisplayName = btn.DisplayName;
                            _row.RowHandObj.ButtonList.push(bt);

                        }
                    });

                });
                _row.getEmit().addListener("row_click", () => {
                    //------------                   
                    this.ParentListPage.ShowDataBtn(this.checkButton());
                });
                for (var j: number = 0; j < 60; j++) {

                    var obj: GridColumnFile.ui.GridColumnVm = new GridColumnFile.ui.GridColumnVm();
                    obj.ColumnConfig = { Name: "字段" + j.toString(), DisplayName: "字段" + j.toString() };

                    obj.ControlObj = new DetailFile.ui.DetailVm();
                    obj.ControlObj.LegalObj.Kind = "notNull";
                    obj.ControlObj.vmdataValue(i.toString() + j.toString());
                     
                    _row.ColumnObjList.push(obj);

                }
                _row.FormVm = this.GridObj;
                this.GridObj.RowObjList.push(_row);
            }
            //this.GridObj.getEmit().addListener("RowHandCheck", (isExpand:boolean) => {
            //    alert(isExpand);
            //});

           
           
        }

    }
    export class TableDomStates extends domCore.DomStates {
        public ScrollNum: number;
    }


    export class TableDomProps extends domCore.DomProps<TableDomVm>{
    }



}


