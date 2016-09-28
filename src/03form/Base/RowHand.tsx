

import domFile = require("./../../01core/0Dom");
import baseRowFile = require("./BaseRow");
import buttonFile = require("./../../05tool/Button");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {


    //export interface IButtonData {
    //    DisplayName: string;
    //    Name?: string;
    //    ClickFun?: Function;
    //}

    export class RowHandAction extends domFile.Core.DomAction {

    }
    export class RowHandReact extends domFile.Core.DomReact<RowHandProps, RowHandStates, RowHandAction>{

        public pSender(): React.ReactElement<any> {
            return <div className={ "isExpend ButtonBar " + ((this.props.Vm.IsExpand && (this.props.Vm.ButtonList.length > 0 || this.props.Vm.Content)) ? "" : "hide") + "  text-left "}>{this.props.Vm.Content}<div>{
                this.props.Vm.ButtonList.map((a) => {
                    return a.intoDom()
                }) }
                <i className="  icon-double-angle-up fa fa-angle-double-up Hu-pointer acsMarginL0-2"
                    onClick = {
                        () => {
                            // alert("这又是在什么时候执行的呢？");
                            this.fun_checkboxClick();
                        }
                    }
                    ></i>
            </div></div>;
        };
        //  public ff = "RowHandReact";

        protected pComponentDidMount() {
            super.pComponentDidMount();
            //alert(this.props.Vm.isSingleSelector)
        }
        private fun_checkboxClick() {
            //if (!this.props.Vm.IsExpand) {
            this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
            // this.props.Vm.BaseRowObj.
            //this.props.Vm.getEmit().emit("RowHandExpand");
            this.props.Vm.forceUpdate("");


            // }
        }

    }

    export class RowHandSelectorReact extends domFile.Core.DomReact<RowHandProps, RowHandStates, RowHandAction>{

        public ff = "RowHandSelectorReact";



        private fun_checkboxClick() {
            //if (!this.props.Vm.IsExpand) {
            this.props.Vm.IsExpand = !this.props.Vm.IsExpand;
            // this.props.Vm.BaseRowObj.
            //this.props.Vm.getEmit().emit("RowHandExpand");
            this.props.Vm.forceUpdate("");


            // }
        }

        private _classNameI(): string {

            var _Mulitcheck = this.props.Vm.IsSelect ? "check-" : "";
            var _SingleCheck = this.props.Vm.IsSelect ? "" : "-o";
            return ((this.props.Vm.isSelector && this.props.Vm.isSingleSelector ? "acsWidth1 icon-circle fa fa-circle" + _SingleCheck + "  Hu-pointer   " : "acsWidth1 fa fa-" + _Mulitcheck + "square-o Hu-pointer   ") + ((this.props.Vm.IsHide && !this.props.Vm.IsSelect) ? "hidden" : ""));
        }

        private _expandI(): string {
            var _plus = !this.props.Vm.IsExpand ? "plus" : "minus";
            return ("fa fa-" + _plus + "-square Hu-pointer " + (((!this.props.Vm.IsHide || this.props.Vm.IsExpand) && ((this.props.Vm.ButtonList.length > 0) || (this.props.Vm.Content))) ? "" : "hidden"));
        }

        private initIndexNum(): string {
            if (this.props.Vm.Index < 10) {

                return "0" + this.props.Vm.Index;

            }
            else {
                return this.props.Vm.Index + "";
            }
        }

        public pSender(): React.ReactElement<any> {    
            return <div >           
                <i className={this._classNameI() } ></i>
                <span className="acsWidth1">{this.initIndexNum() }</span>
                <i className={this._expandI() } onClick={(e) => { this.fun_checkboxClick(); e.stopPropagation(); return false; } } > </i>
            </div>;
        }



    }

    export class RowHandNormalReact extends domFile.Core.DomReact<RowHandProps, RowHandStates, RowHandAction>
    {
        private _classNameI(): string {

            var _Mulitcheck = this.props.Vm.IsSelect ? "check-" : "";
            var _SingleCheck = this.props.Vm.IsSelect ? "" : "-o";
            return ((this.props.Vm.isSelector && this.props.Vm.isSingleSelector ? "acsWidth1 icon-circle fa fa-circle" + _SingleCheck + "  Hu-pointer   " : "acsWidth1 fa fa-" + _Mulitcheck + "square-o Hu-pointer   ") + ((this.props.Vm.IsHide && !this.props.Vm.IsSelect) ? "hidden" : ""));
        }
        public pSender(): React.ReactElement<any> {
            return <div className="col-lg-11 pull-left">
                <i className={this._classNameI() } ></i>
                {
                    this.props.Vm.ButtonList.map((a) => {
                        return a.intoDom();
                    })
                }
            </div>;
        };
        
    }

    export class RowHandVm extends domFile.Core.DomVm {

        public rHandSelectorSender() {
            return this.intoDomR(RowHandSelectorReact);
        }
        public rHandNormalSender() {
            return this.intoDomR(RowHandNormalReact);
        }
        public IsHide: boolean = true;
        public IsMulit: boolean = true;
        public IsExpand: boolean = false;
        public IsSelect: boolean = false;
        public Index: number = 0;
        public ReactType = RowHandReact;
        protected pRegName = "RowHandVm";

        public Load: boolean;
        public Content: React.ReactElement<any>;

        public ButtonList: Array<buttonFile.ui.ButtonVm> = [];
        public BaseRowObj: baseRowFile.ui.BaseRowVm;



        //是不是单选 默认为false
        public isSingleSelector: boolean = false;
        //是不是
        public isSelector: boolean = false;
        //public selectTriggleFun: Function;

    }


    export class RowHandProps extends domFile.Core.DomProps<RowHandVm>{




    }
    export class RowHandStates extends domFile.Core.DomStates {




    }


    //normalRowFile.ui;

}