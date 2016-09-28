import domFile = require( "./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export namespace Web {
    export class ThDomAction extends domCore.DomAction {
    }

    export class ThDomReact extends domCore.DomReact<ThDomProps, ThDomStates, ThDomAction> implements domCore.IReact {

        public state = new ThDomStates();

        public pSender(): React.ReactElement<any> {
            return (<th style={{ "width": this.props.Vm.Width }}>{this.props.children}
                <div className="handle"
                    draggable={true}
                    onDragStart={(t) => {

                    this.x0 = t["screenX"];
                    this.props.Vm.getEmit().emit("table_width");

                    } }
                    onDrag={(t) => {
                    this.onThDrag(t);
                    } }
                    >
                    </div>
                </th>);
        }

        protected pInstall(): void {
            super.pInstall();
            this.props.Vm.getEmit().addListener("fixWidth", () => {
                this.pFixWidth();
            });
        };
        protected pComponentDidMount() {
            super.pComponentDidMount();


        }
        private x0: number;
        private x1: number;

        private onDrag(e) {
            //debugger;
        }

        private onThDrag(t) {
            this.x1 = t["screenX"];

            var _x: number = this.x0 - this.x1;
            this.pFixWidth();
            this.x0 = this.x0 - _x;
            this.props.Vm.Width = this.props.Vm.Width - _x;
            console.log(this.x0 + "-" + this.x1 + "=" + (this.x0 - this.x1).toString());
            this.props.Vm.forceUpdate("");
            this.props.Vm.getEmit().emit("width_fix");

        }

        private getWidth():number 
        {
            var elem = ReactDOM.findDOMNode(this);
            var _$th = $(elem);
            return _$th.innerWidth() + 2;
        }
       
        private pFixWidth()
        {
            if (this.props.Vm.Width <= 0) {
                this.props.Vm.Width = this.getWidth();
            }
        }
        public fixWidth() {
            this.pFixWidth();
        }


    }
    export class ThDomVm extends domCore.DomVm {
        public ReactType = ThDomReact;
        public Text: string;
        public Width: number = 0 ;

        
        public fixWidth() {
            //this.pFixWidth();
            this.getEmit().emit("fixWidth");
        }

    }
    export class ThDomStates extends domCore.DomStates {
    }


    export class ThDomProps extends domCore.DomProps<ThDomVm>{
    }



}


