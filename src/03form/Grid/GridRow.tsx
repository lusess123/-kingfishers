import baseRow = require("./../Base/BaseRow");
import iocFile = require("./../../01core/Ioc");
import gridColumnFile = require("./GridColumn");
import gridColimnGroupFile = require("./GridColumnGroup");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import BaseColumnFile = require("./../Base/BaseColumn");
import PageView = require("./../07data/PageView");

export module ui {
    gridColumnFile.ui;
    gridColimnGroupFile.ui;
    export class GridRowAction extends baseRow.ui.BaseRowAction {

    }

    export interface IDataGroup
    {
        ColumnName: string;
        GroupNum: number;
        GroupKey: string; 
    }

    export class GridRowReact extends baseRow.ui.BaseRowReact<GridRowProps, GridRowStates, GridRowAction> {

        private fun_delBtn()
        {
           
            this.props.Vm.getEmit().emit("row_del", this.props.Vm);
        }

        private initDelTd(): React.ReactElement<any> {
            if (this.props.Vm.FormVm.IsNoDel) {
                return null;
            } else {
                return <td><i   className="icon-minus fa fa-minus-circle fa-2 Hs-red Hu-pointer" onClick={(e) => { e.stopPropagation(); this.fun_delBtn(); } } ></i></td>;
            }
        }

        private fGetRowSpans(name: string): string
        {
            if (this.props.Vm.RowData["_"+name + "_group_max_"]) {
                //-------
                var _i: any;
                _i = this.props.Vm.RowData["_" + name + "_group_max_"];
                this.props.Vm.HasDataGroup = true;
                return (parseInt(_i) * 2).toString();
               // return _i;
            }
            return "2";
        }

        private fIsGroupHide(name: string): boolean
        {
            if (this.props.Vm.RowData["_" + name + "_group_"]) {
                var _i: any;
                _i = this.props.Vm.RowData["_" + name + "_group_"];
                if (_i != "1" ) {
                    return true;
                }

            }
            return false;
        }


        private fTrMouseEnter_Fun(): boolean
        {
            this.props.Vm.RowHandObj.IsHide = false;

            this.props.Vm.forceUpdate("");
            return false;
        }

        private fTrClick_Fun(): boolean
        {
            this.props.Vm.IsSelect = this.props.Vm.RowHandObj.IsSelect = !this.props.Vm.IsSelect;

            //如果为单选的话 就触发事件
            if (this.props.Vm.IsSelector && this.props.Vm.IsSingleSelect) {
                alert(this.props.Vm.RowData[this.props.Vm.IDSign]);
                if (this.props.Vm.SingleSaveEvent != null) {
                    this.props.Vm.SingleSaveEvent();
                }
            }

            this.props.Vm.getEmit().emit("row_click");
          

            this.forceUpdate();

            return false;
        }

        private fTrLeave_Fun(): boolean
        {
            this.props.Vm.RowHandObj.IsHide = true;
            this.props.Vm.forceUpdate("");
            return false;
        }

        private fTdClick(dataGroup:string)
        {
            if (this.props.Vm.HasDataGroup) {
                this.props.Vm.dataTdGroupClick(dataGroup);
                return false;
            }
            return true;
        }

        private fNoGroupContent(): React.ReactNode[] {
          return this.props.Vm.ColumnObjGruop.map((colgroup) => {
                return colgroup.ColumnObjList.map((col, k) => {
                    var _name = this.props.Vm.FormVm.Columns[k].Name;
                    return <td rowSpan={this.fGetRowSpans(_name) } onClick={() => { this.fTdClick(_name); } }
                        className={((col.ColumnConfig.ControlType == "Hidden" || this.fIsGroupHide(_name)) ? "hide" : "") }
                        data-lable = {this.props.Vm.FormVm.Columns[k].DisplayName}>
                        {col.ControlObj ? col.ControlObj.intoDom() : (
                            <i  className="icon-exclamation-sign fa fa-exclamation-triangle Hs-red" title="该控件对象不存在"   />)
                        }
                    </td>;
                })
            });
        }


        private fGroupContent(): React.ReactNode[] {
            return this.props.Vm.ColumnObjList.map((col, k) => {
                return <td  rowSpan={this.fGetRowSpans(col.ColumnConfig.Name) } onClick={() => { return this.fTdClick(this.props.Vm.FormVm.Columns[k].Name); } }
                    className={((col.ColumnConfig.ControlType == "Hidden" || this.fIsGroupHide(this.props.Vm.FormVm.Columns[k].Name)) ? "hide" : "") }
                    data-lable = {this.props.Vm.FormVm.Columns[k].DisplayName}>
                    {col.ControlObj ?
                        col.ControlObj.intoDom() : (
                            <i
                                className="icon-exclamation-sign fa fa-exclamation-triangle Hs-red"
                                title="该控件对象不存在"   />)
                    }
                </td>;
            }) 
        }

        public pSender(): React.ReactElement<any> {

           

          


            return <tr className={"Hu-tr-bottom-none " + (this.props.Vm.IsSelect ? "Hs-check-bg" : "") }   key={this.props.Vm.key}
                onMouseEnter = {() => { return  this.fTrMouseEnter_Fun(); } }
                onClick ={() => { return this.fTrClick_Fun(); } }
                onMouseLeave = {() => { return this.fTrLeave_Fun(); } }>
                <td className={"acsPadding0 " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : "") + (this.props.Vm.IsNoRowHandObj ? "hide " : "") } style={{ left: this.props.Vm.LeftNum }}>
                { this.props.Vm.RowHandObj.rHandSelectorSender() }
                </td>
                {this.props.Vm.ColumnObjGruop.length == 0 ? this.fGroupContent() : this.fNoGroupContent()}
                {this.initDelTd()}
                </tr>;
        };
    }

    export interface IDicGroupInfo
    {
        [name: string]: IDataGroup
    }

    export class GridRowVm extends baseRow.ui.BaseRowVm {
        public ReactType = GridRowReact;
        protected pRegName = "GridRow";
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;

        public HasDataGroup: boolean;
        public DataGroupNameList: string[] = [];
        public IsDataGroupHide: boolean;
        public DicGroupInfo: IDicGroupInfo;
        public IsNoRowHandObj: boolean = false;


        public setGroupInfo(col: PageView.data.IColumn)
        {
            var name = col.Name;
            var _num  = 1;
            if (this.RowData["_" + name + "_group_max_"]) {
                var _i: any;
                _i = this.RowData["_" + name + "_group_max_"];
                _num = parseInt(_i);
            }


            this.DicGroupInfo[name] = {
                    ColumnName: name,
                    GroupKey: this.RowData["_" + name + "_group_key_"].toString(),
                    GroupNum: _num 
                };
                // return _i;
          
           
        }

        public dataGroupClick()
        {
            if (this.HasDataGroup) {
                 
            }

        }

        public dataTdGroupClick(dataGroup: string)
        {
        }

        public bingDataGroupHide(fid: string , colName: string)
        {
            var _sign = colName + "-" + fid + "-" + this.FormVm.Id;
            this.RegistAppEvent({
                Name: _sign,
                Fun: () => {
                    this.IsDataGroupHide = !this.IsDataGroupHide;
                    alert("行显示或者隐藏" + this.IsDataGroupHide + " " + _sign);
                    this.forceUpdate("");
                }
            });

        }
       

    }

    export class GridRowProps extends baseRow.ui.BaseRowProps<GridRowVm>{


    }
    export class GridRowStates extends baseRow.ui.BaseRowStates {
      


    }
    iocFile.Core.Ioc.Current().RegisterType("Grid", baseRow.ui.BaseRowVm, GridRowVm);
}