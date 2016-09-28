import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import PageView = require("./../07data/PageView");
import baseColumn = require("./BaseColumn");
import baseForm = require("./BaseForm");
import baseColumnGroup = require("./BaseColumnGroup");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import rowHandFile = require("./RowHand");
export module ui {
    export class BaseRowAction extends domFile.Core.DomAction {

    }
    export class BaseRowReact<P extends BaseRowProps<BaseRowVm>, S extends BaseRowStates, A extends BaseRowAction> extends domFile.Core.DomReact<P, S, A> implements domFile.Core.IReact {


        private initFormBody(): JSX.Element[]
        {
            return this.props.Vm.ColumnObjGruop.length != 0 ?
                this.props.Vm.ColumnObjGruop.map((columnGroup, i) => {
                return columnGroup.intoDom()
            }) :
                this.props.Vm.ColumnObjList.map((colum, i) => {
                return colum.intoDom();
            });
        }

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        private initIndexTitle(): string{
            return this.props.Vm.FormVm.IsSingleRow ? "" : (this.props.Vm.Index + 1).toString();
        }

        private titleSelect_Fun(): boolean
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

        private initTitle():React.ReactElement<any>{
            return this.props.Vm.FormVm.IsSingleRow ? null : (
                <div className="m-b Hu-baserow Hu-pointer" >
                    <span className="pull-left">{this.initIndexTitle() }</span>
                    {this.props.Vm.RowHandObj.rHandNormalSender() }
                    <span  className="btn btn-xs btn-default" onClick={() => { return this.titleSelect_Fun(); } }>选择</span>
                    <i onClick={() => { this.fun_itemTitleClick(); } } className={"icon-lg icon-double-angle-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-lg fa-angle-double-" + (this.props.Vm.IsItemFormHide ? "right" : "down") + (this.props.Vm.IsItemFormHide ? " active" : "") }></i></div>
                );
        }
        
        public pSender(): React.ReactElement<any> {

            return <div key={this.props.Vm.key}>
                {this.initTitle() }
                <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hm-toggle-item white-bg"}>                   
                    <div className="tabs-content">
                        <div className=" active " >
                            <div className="Hm-form clearfix" >
                                {this.initFormBody() }
                                </div>
                        </div>
                      
                        </div>
                    </div>
                   </div>
        }

        

    }

    export interface ISingleSaveEvent
    {
        (): void;
    } 

    export interface IGetKey {
        (row: BaseRowVm): string;
    }

    export class BaseRowVm extends domFile.Core.DomVm {

        public RowData: PageView.data.IDataRow;
        public RowConfig: PageView.data.IForm;
        public ButtonRightSign: string="";

        protected pRegName = "BaseRow";
        public IsSelect: boolean;
        //ReactType = NormalRowReact;
        public RowHandObj: rowHandFile.ui.RowHandVm = new rowHandFile.ui.RowHandVm();

        public FormVm: baseForm.ui.BaseFormVm;
        public ColumnObjList: Array<baseColumn.ui.BaseColumnVm> = new Array<baseColumn.ui.BaseColumnVm>();
        public ColumnObjGruop: Array<baseColumnGroup.ui.BaseColumnGroupVm> = new Array<baseColumnGroup.ui.BaseColumnGroupVm>();
        public KeyColumnObj: baseColumn.ui.BaseColumnVm;

        public IsItemFormHide: boolean;

        //--------sq加的事件和属性
        public IsSelector: boolean = false;
        public IsSingleSelect: boolean = false;
        public SingleSaveEvent: ISingleSaveEvent = null;
        public IDSign: string = null;
        public TextSign: string;
        //public IsExpland: boolean;
        public Index: number;

        public GetKeyEvent: IGetKey;
        public getKey():string
        {
            if (this.GetKeyEvent) {
                return this.GetKeyEvent(this);
            } else {
                if (this.KeyColumnObj) {
                    return this.KeyColumnObj.ControlObj.vmDataValueGet();
                }
                else
                    return "";
            }
        }

        private emitChange(column:baseColumn.ui.BaseColumnVm)
        {
           // (column) => {
                if (!column.IsKey) {
                    column.getEmit().addListener("BaseColumnVm_change", () => {
                        if (this.KeyColumnObj && !this.KeyColumnObj.IsDataValueChange) {
                            this.KeyColumnObj.IsDataValueChange = true;
                            this.KeyColumnObj.ControlObj.IsDataValueChange = true;
                        }
                        this.getEmit().emit("BaseRowVm_change",this);
                    });
                }
                else {
                    this.KeyColumnObj = column;
                }
                column.link();
           // }
        }

        public link() {

            //this.getEmit().addListener("RowHandExpand", () => {
            //   // this.IsExpland = !this.IsExpland;
            //   // alert(this.IsExpland);
            //});
            if (this.ColumnObjGruop && this.ColumnObjGruop.length > 0) {
                this.ColumnObjGruop.forEach((columnGroup) => {
                    columnGroup.ColumnObjList.forEach((column) => {
                        this.emitChange(column);
                    });
                })
            }
            else {
                if (this.ColumnObjList && this.ColumnObjList.length > 0) {
                    this.ColumnObjList.forEach((col) => {
                        this.emitChange(col);
                    });
                }
            }


          
        }
        
    }

    export class BaseRowProps<V extends BaseRowVm> extends domFile.Core.DomProps<V>{
    }
    export class BaseRowStates extends domFile.Core.DomStates {
    }
}