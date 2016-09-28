
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import domFile = require("./../../01core/0Dom");
import gridRowFile = require("./GridRow");
import baseForm = require("./../Base/BaseForm");
import baseRow = require("./../Base/BaseRow");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    gridRowFile.ui;
    export class GridFormAction extends domFile.Core.DomAction {

    }

    interface ILeftStyle {
        left: number;
    }

    export class GridFormReact extends baseForm.ui.BaseFormReact<GridFormProps, GridFormStates, GridFormAction>{

        public state = (() => {

            var gf = new GridFormStates();
            //this.props.Vm.RowObjList
            return gf;
        })();

        private fGetTop(): number {
            var st = $(document).scrollTop();//滚动条距顶部的距离    
            var ch = $(window).height();//屏幕的高度   
            var objT = Number(st) + (Number(ch)) * 0.02;
            return objT;
        }

        private initAddTH(): React.ReactElement<any> {
            //if (this.props.Vm.IsNoAdd || this.props.Vm.IsOnlyTable) {
            //    return null;
            //}
            if (this.props.Vm.IsNoAdd) {
                return null;
            }
            else {
                return <th><i className="icon-plus  fa fa-plus-circle fa-2  Hu-pointer"  onClick={() => { this.fun_NewRow(); } } ></i> </th>;
            }
        }

        private _initTher(): React.ReactElement<any> {
            return <thead className="thead-default"><tr>
                {this._initAllTh() }
                {this.props.Vm.Columns.map((a) => {
                    return <th className={(a.ControlType == "Hidden" ? "hide" : "") }>{a.DisplayName}</th>
                })
                }
                {this.initAddTH() }
            </tr></thead>;
        }

        private fun_allCheck() {
            var _ischeck = this.props.Vm.IsAllCheck = !this.props.Vm.IsAllCheck;
            this.props.Vm.RowObjList.forEach((a, i) => {
                a.IsSelect = _ischeck;
                a.RowHandObj.IsSelect = _ischeck;
                a.IsChange = true;

                //a.RowHandObj.is
            });
            this.forceUpdate(() => {
                if (this.props.Vm.RowObjList.length > 0) {
                    this.props.Vm.RowObjList[0].getEmit().emit("row_click");
                }
            });
        }

        private fun_NewRow() {
            this.props.Vm.getEmit().emit("createRow", this.props.Vm);
            return false;
        }

        private _initAllTh(): React.ReactElement<any> {
            return <th className={"text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : "") + (this.props.Vm.IsNoAllCheck ? "hide " : "") } style={{ left: this.props.Vm.LeftNum }}    > <i className={("icon-check" + (this.props.Vm.IsAllCheck ? "" : "-empty ")) + (" fa fa" + (this.props.Vm.IsAllCheck ? "-check" : "") + "-square-o ") + "Hu-pointer"}
                onClick={() => { this.fun_allCheck(); } }  /> </th>;
        }
        private _initTitle(): React.ReactElement<any> {
            return this.props.Vm.IsSingleRow ? null : (
                <li className="pull-right" onClick={() => { this.fun_itemClick(); } }><span className="btn-sm pull-right"><i className={"icon-2x icon-caret-" + (this.props.Vm.IsItemFormHide ? "right " : "down ") + "fa fa-2x fa-caret-" + (this.props.Vm.IsItemFormHide ? "right" : "down") }></i></span></li>
            );
        }
        private fun_itemClick() {
            this.props.Vm.IsItemFormHide = !this.props.Vm.IsItemFormHide;
            this.forceUpdate();
        }

        private thClass(): string {
            return "text-center " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
        }

        private thStyle(): ILeftStyle {
            return { left: this.props.Vm.LeftNum };
        }

        public pSender(): React.ReactElement<any> {

            var _columnGroupThes = this.props.Vm.ColumnsGroup.map((c) => {
                return c.Columns.map((a) => {
                    // alert(a.DisplayName);
                    return <th className={(a.ControlType == "Hidden" ? "hide" : "") }>{a.DisplayName}</th>
                })
            })

            //如果有分组的话就用这个头进行渲染
            var _head = <thead className="thead-default">
                <tr>
                    <th  className={"text-center " + (this.props.Vm.IsAcsRelative ? "Hf-relative Hf-table-th " : "") } style={{ left: this.props.Vm.LeftNum }}   ></th>
                    {
                        this.props.Vm.ColumnsGroup.map((a) => {
                            var _isHidden: boolean = true;
                            a.Columns.forEach((c) => {
                                if (c.ControlType != "Hidden")
                                    _isHidden = false;
                            });
                            if (!_isHidden) {
                                return <th colSpan={a.Columns.length} className={(a.ControlType == "Hidden" ? "hide" : "") }>{a.DisplayName ? a.DisplayName : "其他"}</th>
                            }
                            else {
                                return null;
                            }
                        })
                    }

                </tr>
                <tr>
                    {this._initAllTh() }
                    {_columnGroupThes}
                    {this.initAddTH() }
                </tr>
            </thead>;




            var _table = <div className="Hm-table table-responsive" onScroll={(e) => { this.fun_Scroll(e); } }><table className="table table-bordered table-hover table-striped">

                {this.props.Vm.ColumnsGroup.length == 0 ? this._initTher() : _head}
                <tbody>
                    {
                        this.props.Vm.RowObjList.map((row, i) => {
                            // return row.intoDom()
                            row.RowHandObj.Index = i + 1;
                            row.RowHandObj.BaseRowObj = row;
                            return [row.intoDom(), <tr className="Hu-tr-none">
                                <td colSpan="10000" className={this.thClass() + " well" } style={this.thStyle() }>{ row.RowHandObj.intoDom() }</td>
                            </tr>]
                        })
                    }
                </tbody>
            </table></div>;

            return this.props.Vm.IsOnlyTable ?
                _table :
                (<form className={"Hm-modals fn-bottom" + (this.state.IsFormExpand ? "acsTableExpand" : "") }>
                    <div className="fieldset" ><div className="legend clearfix">
                        <ul className="nav nav-tabs">
                            <li className="active">
                                <a> {this.props.Vm.FormConfig.Title}</a>
                            </li>
                            {this._initTitle() }
                        </ul>
                    </div>
                        <div className={this.props.Vm.IsItemFormHide ? "hide" : "Hg-width Hg-overflow-auto"}>{_table}</div>
                    </div>
                </form>);

        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.state.ScrollNum = _$obj.scrollLeft();

            this.props.Vm.scrollAuto(this.state.ScrollNum);
            //this.forceUpdate();
        }


    }

    export class GridFormVm extends baseForm.ui.BaseFormVm {
        public ReactType = GridFormReact;
        protected pRegName = "GridForm";
        public IsAllCheck: boolean = false;

        public IsOnlyTable: boolean = false;
        public IsItemFormHide: boolean;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public IsNoAllCheck: boolean = false;

        public scrollAuto(s: number) {
            this.IsAcsRelative = s > 0;
            this.LeftNum = s;

            this.RowObjList.forEach((r) => {
                //--------
                var row: gridRowFile.ui.GridRowVm = utilFile.Core.Util.Cast<gridRowFile.ui.GridRowVm>(r);
                row.IsAcsRelative = s > 0;
                row.LeftNum = s;
                // r.forceUpdate("");
                row.IsChange = true;
            });
            this.IsChange = true;
            this.forceUpdate("");
        }
    }


    export class GridFormProps extends baseForm.ui.BaseFormProps<GridFormVm>{




    }



    export class GridFormStates extends baseForm.ui.BaseFormStates {
        // public ThItemList:  Array< ThItem > = new Array<ThItem>();
        public IsFormExpand: boolean = false;
        public ScrollNum: number;


    }
    iocFile.Core.Ioc.Current().RegisterType("Grid", baseForm.ui.BaseFormVm, GridFormVm);
}