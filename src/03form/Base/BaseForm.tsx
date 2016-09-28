import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import PageView = require("./../07data/PageView");
import baseRow = require("./BaseRow");
import baseColumn = require("./BaseColumn");
import baseColumnGroup = require("./BaseColumnGroup");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class BaseFormAction extends domFile.Core.DomAction {

    }
    export class BaseFormReact<P extends BaseFormProps<BaseFormVm>, S extends BaseFormStates, A extends BaseFormAction> extends domFile.Core.DomReact<P, S, A> implements domFile.Core.IReact {

        private createBtn_fun(): boolean {
            this.props.Vm.getEmit().emit("createRow", this.props.Vm);
            return false;
        }

        private delBtn_fun(row: baseRow.ui.BaseRowVm): boolean {
            row.getEmit().emit("row_del", row);
            // alert("删除了");
            return false;
        }

        private initNewRowBtn(): React.ReactElement<any>
        {
            if (!this.props.Vm.IsNoAdd) {
                return <span className="btn btn-xs pull-right"><i className=" icon-2x icon-plus fa fa-2x fa-plus-circle Hs-blue Hu-pointer" onClick={() => { this.createBtn_fun(); } }></i></span>;
            } else {
                return null;
            }
        }

        private initDelRowBtn(row: baseRow.ui.BaseRowVm): React.ReactElement<any>
        {
            return this.props.Vm.IsNoDel ? null : (<i className="icon-minus fa fa-minus-circle  Hs-red Hu-pointer" onClick={() => { this.delBtn_fun(row); } } />);
        }

        private fun_itemTitleClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        private initTitle(): React.ReactElement<any> {
            return <li className="pull-right" onClick={() => { this.fun_itemTitleClick(); } }>
                <span className="btn-sm pull-right Hu-pointer">
                    <i className={"icon-2x icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-2x fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i>
                </span>
            </li>;
           // );
        }
        public pSender(): React.ReactElement<any> {
           

            return <form className="Hm-modals fn-bottom" key={this.props.Vm.key}>
            

                <div className={this.props.Vm.HasNoBorder?"":"fieldset"}>
                    <div className="legend clearfix">
                        <ul className="nav nav-tabs">
                            <li className="active"><a> {this.props.Vm.FormConfig.Title}</a></li>
                            {this.initTitle() }
                            </ul>
                            <ul className="nav nav-tabs pull-right">
                            <li>{this.initNewRowBtn() }</li>
                        </ul>
                    </div>  
                    <div className={this.props.Vm.IsItemFormHide ? "hide" : "p-a-md"}>
                        {
                            this.props.Vm.RowObjList.length >= 0 ? (this.props.Vm.RowObjList.map((row, i) => {
                                row.key = i;
                                return (< div > { row.intoDom() }</div>)
                            })) : (<div className="Hs-blue"><i className="fa fa-ban m-x"></i>该项无记录！</div>) }
                        {
                        this.props.children
                        }
                    </div>
                </div>
                </form>
        }



    }

    export class BaseFormVm extends domFile.Core.DomVm {

        public DelKeyList: Array<string> = [];
        public FormConfig: PageView.data.IForm;
        public FormData: Array<PageView.data.IDataRow>;

        protected pRegName = " BaseForm";
        //  ReactType = NormalRowReact;
        public Name: string;
        public TableName: string;
        public RowObjList: Array<baseRow.ui.BaseRowVm> = new Array<baseRow.ui.BaseRowVm>();
        public Columns: Array<baseColumnGroup.ui.ColumnConfig> = new Array < baseColumnGroup.ui.ColumnConfig>();
        public ColumnsGroup: Array<baseColumnGroup.ui.ColumnGroupConfig> = new Array<baseColumnGroup.ui.ColumnGroupConfig>();

        public IsNoDel: boolean = false;
        public IsNoAdd: boolean = false;
        public IsSingleRow: boolean = false;

        public IsItemFormHide: boolean;
        public HasNoBorder: boolean;

        public create(_pageView: PageView.data.IPageView) {

        }

        public link() {


            this.RowObjList.forEach((row, i) => {
              //  row.Index = i;
                row.link();
            });
        }
    }

    

    export class BaseFormProps<V extends BaseFormVm> extends domFile.Core.DomProps<V>{


    }

    export class BaseFormStates extends domFile.Core.DomStates {
        public TableHeader: Array<string>;

    }

}