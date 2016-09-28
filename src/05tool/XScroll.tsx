import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");

import alinkFile = require("./../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module XScroll {
    export class XScrollAction extends domCore.DomAction {
    }

    export class XScrollReact extends domCore.DomReact<XScrollProps, XScrollStates, XScrollAction> implements domCore.IReact {

        public state = new XScrollStates();

        private fun_left_click()
        {
            this.props.Vm.left();
        }

        private fun_right_click() {
            this.props.Vm.right();
        }

       

        private setWidth():void
        {
            var elem = ReactDOM.findDOMNode(this);
            var _$div = $(elem);
            _$div = _$div.parent();
            var _$contain = _$div.find(".Hf-menu-scroll");
            var _$inner = _$div.find(".inner");

            var _w1 = _$contain.width();
            var _w0 = _$inner.width() + this.props.Vm.ScrollNum;
            this.props.Vm.Width = _w0 - _w1;
            

        }

        private fun_mouseDown(e: React.FormEvent)
        {
            this.props.Vm.IsFirstMove = true;
            this.props.Vm.IsMove = true;
            //if (this.props.Vm.X0 == 0) {
                this.props.Vm.X0 = e["screenX"];
            //}
           // else {
           //     this.props.Vm.X0 = 0;
           // }

        }
        private fun_mouseUp() {
            this.props.Vm.IsMove = false;
            this.props.Vm.X0 = 0;
        }
        private fun_touch_begin(e: React.TouchEvent) {
            this.props.Vm.IsMove = true;
            this.props.Vm.X0 = e.touches[0].screenX;
            this.props.Vm.IsFirstMove = true;
        }
        private fun_touch_end(e: React.TouchEvent) {
            this.props.Vm.IsMove = false;
            this.props.Vm.X0 = 0;
        }
        private fun_touch_move(e: React.TouchEvent) {
            this.move(e.touches[0].screenX);
        }

        private move(clientX: number) {

            //if (this.props.Vm.Width == 0) {
            //    this.setWidth();
            //}
            var x1: number = clientX;
           

            if (this.props.Vm.IsFirstMove) {
                this.props.Vm.X0 = x1;
            }

            if ( !this.props.Vm.IsFirstMove && this.props.Vm.X0 > 0 && this.props.Vm.IsMove && this.props.Vm.Width > 0  ) {

                if ((((-1) * this.props.Vm.Width) <= this.props.Vm.ScrollNum) && (this.props.Vm.ScrollNum <= 0)) {
                    var x: number = x1 - this.props.Vm.X0;
                    console.info(" x1 : " + x1 + " -  " + " x0: " + this.props.Vm.X0 + " =" + x + "  ScrollNum: " + this.props.Vm.ScrollNum );
                    this.props.Vm.ScrollNum = this.props.Vm.ScrollNum + x;
                    if (this.props.Vm.ScrollNum <= ((-1) * this.props.Vm.Width)) this.props.Vm.ScrollNum = ((-1) * this.props.Vm.Width);
                    if (this.props.Vm.ScrollNum > 0) this.props.Vm.ScrollNum = 0;
                    this.forceUpdate(() => {

                    });
                }
                this.props.Vm.X0 = clientX;

            }
            this.props.Vm.IsFirstMove = false;
        }

        private fun_mouseMove(e: React.FormEvent) {
            this.move(e["clientX"]);
        }

        private NumIndex: Array<Number> = new Array<Number>(200);

       

        public pSender(): React.ReactElement<any> {
            return <div className="Hf-menu-scroll">
                    <div className="inner "
                    style={{ marginLeft: this.props.Vm.ScrollNum}}
                            onMouseDown={(e) => { this.fun_mouseDown(e); } }
                            onMouseUp={() => { this.fun_mouseUp(); } }
                            onMouseMove={(e) => { this.fun_mouseMove(e); } }
                            onMouseEnter = {(e) => { this.fun_mouseDown(e); } }
                            onMouseLeave = {(e) => { this.fun_mouseUp(); }}
                            onTouchMove = {(e) => { this.fun_touch_move(e); } }
                            onTouchStart = {(e) => { this.fun_touch_begin(e); } }
                            onTouchEnd = {(e) => { this.fun_touch_end(e); } }
                            onTouchCancel =  {(e) => { this.fun_touch_end(e); } }>
                        {this.props.Vm.FunSetInnerContent ? this.props.Vm.FunSetInnerContent():"无内容"}
                        </div>
                    </div>;
        }

        protected pInstall(): void {
            super.pInstall();

            this._resizeFun = () => {
                this.props.Vm.ScrollNum = 0;
                this.forceUpdate(() => {
                    this.setWidth();
                });
            };
            $(window).bind("resize", this._resizeFun)
           
            if (this.IsFirst) {
                this.setWidth();
            }
        }


        protected pComponentDidMount()
        {
            super.pComponentDidMount();
            this.setWidth();
        }

        private _resizeFun: any;
       

        protected pUnInstall(): void {
            super.pUnInstall();
            if (this._resizeFun) {
                $(window).unbind("resize", this._resizeFun)
            }

        }


    }

    export interface IXScrollConfig {
       
        Size?: number;
        FunSetInnerContent?: IReactContent;
    }

   

    export interface IReactContent {
        (): React.ReactElement<any>[];
    }

    export class XScrollVm extends domCore.DomVm {
        public ReactType = XScrollReact;
        public Size: number = 10;

        public ScrollNum: number = 0;
        public ScrollStep: number = 15;
        public IsMove: boolean = false;
        public X0: number;
        public Width: number;
        public IsFirstMove: boolean = false ;

        public Index: number = 200;
        public List: number[] = [];
        public FunSetInnerContent: IReactContent;

        public constructor(config?: IXScrollConfig) {
            super();
            //for (var i = 0; i < this.Index; i++) {
            //    this.List.push(i);
            //}
            if (config) {
                
                if (config.Size) {
                    this.Size = config.Size;
                 }
                if (config.FunSetInnerContent) {
                    this.FunSetInnerContent = config.FunSetInnerContent;
                }
            }
        }

        public reStart()
        {
            this.ScrollNum = 0;
            this.X0 = 0;
            this.IsMove = false;
            this.Width = 0;
        }

        public left() {
            this.ScrollNum = this.ScrollNum + this.ScrollStep;
            this.forceUpdate("");
        }

        public right() {
            this.ScrollNum = this.ScrollNum - this.ScrollStep;
            this.forceUpdate("");
        }


    }
    export class XScrollStates extends domCore.DomStates {
    }


    export class XScrollProps extends domCore.DomProps<XScrollVm>{
    }



}


