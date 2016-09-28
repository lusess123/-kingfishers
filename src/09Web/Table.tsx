import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import iocFile = require("./../01core/Ioc");
import utilFile = require("./../01core/Util");
import thdomFile = require("./../09Web/dom/ThDom");

import singleCheckBoxFile = require("./../02col/02Mulite/SingleCheckBox");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
//import tableFile = require("./Table");
export module Web {
    export class TableAction extends domCore.DomAction {
        // LogList: Array<string>;
    }

    export class TableReact extends domCore.DomReact<TableProps, TableStates, TableAction> implements domCore.IReact {

       

        public pSender(): React.ReactElement<any> {

            var _content = <div>大家好，我叫黄小菜</div>;

            var _btn = (<div>
                        <button className={"hollow button"}><i className={"fa fa-"}></i></button>

                </div>);

          


            var _table = (<div className={"table-overflow"}>
                <table className={this.props.Vm.WidthCss} >
                    <tr>
                    

                        {this.props.Vm.Thers.map((th,i) => {
                            return th.intoDom();
                        }) }
                    
                        </tr>


                    <tr>

                          {this.props.Vm.Thers.map((th) => {
                              return <td  ></td>;
                          }) }
                    </tr>
                      <tr>
                          {this.props.Vm.Thers.map((th) => {
                              return <td  ></td>;
                          }) }
                          </tr>  <tr>
                          {this.props.Vm.Thers.map((th) => {
                              return <td  />;
                          })}
                              </tr>  <tr>
                          {this.props.Vm.Thers.map((th) => {
                              return <td></td>;
                          }) }
                                  </tr>
                     <tr>
                          {this.props.Vm.Thers.map((th) => {
                              return <td  ></td>;
                          }) }
                                      </tr>

                  


                    </table>

                 <div className={"acsModalBg " + (this.props.Vm.IsModalShow ? "show" : "hide") }>{ _content}</div>
                </div>);
            return _table;
            //<div className={"acsModalBg " + (this.state.IsModalShow ? "show" : "hide") }
            //    style={{ top: this.state.ModalTop.toString() + "px" }}>
            //    {_content}
            //    <a className="Hu-close"
            //        onClick={() => {
            //            this.setState((s, p) => {
            //                this.props.Vm.IsChange = true;
            //                s.IsModalShow = false;
            //                return s;
            //            })
            //        } }>
            //                        <i className="fa fa-close Hu-pointer "></i>
            //        </a>
            //</div>
            // </div>

        }

        protected initModalContent(content: React.ReactElement<any>): React.ReactElement<any> {
            return React.DOM.div(
                {
                    className: "row"
                },
                React.DOM.h4(null, "大家好，我是黄小菜 :"), content);
        };

       

        private onButtonClick() {

            var __this = this;
            this.props.Vm.IsModalShow = true;
            this.forceUpdate();

            //this.setState((s, p) => {
            //    this.props.Vm.IsChange = true;
            //    s.IsModalShow = true;
            //    var st = $(document).scrollTop();//滚动条距顶部的距离    
            //    var ch = $(window).height();//屏幕的高度   
            //    var objT = Number(st);
            //    s.ModalTop = (Number(ch)) * 0.05;
            //    return s;
            //});
        }


    }
    export class TableVm extends domCore.DomVm {
        public ReactType = TableReact;
        public singleCheckBoxVm0: singleCheckBoxFile.ui.SingleCheckBoxVm = null;
        public singleCheckBoxVm1: singleCheckBoxFile.ui.SingleCheckBoxVm = null;
        public singleCheckBoxVm2: singleCheckBoxFile.ui.SingleCheckBoxVm = null;
        public singleCheckBoxVm3: singleCheckBoxFile.ui.SingleCheckBoxVm = null;
        public IsModalShow: boolean = false;
        public ModalTop: number = 0;

        public w1: number = 0;
        public WidthCss:string = "";

        public Thers: Array<thdomFile.Web.ThDomVm> = new Array<thdomFile.Web.ThDomVm>();


        public init() {
            this.singleCheckBoxVm0 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
            this.singleCheckBoxVm1 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
            this.singleCheckBoxVm2 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
            this.singleCheckBoxVm3 = singleCheckBoxFile.ui.SingleCheckBoxVm.Test();
            //var _ints = [0..4];
            [0,1,2,3,4].forEach((i) => {
                var _th = new thdomFile.Web.ThDomVm();
                _th.Text = "我是一个列头" + i.toString();
                _th.Width = 0;
                this.Thers =  this.Thers.concat(_th);
            });
            this.Thers.forEach((ther, i) => {

                //ther.getEmit().addListener("table_width", () => {


                //    this.WidthCss = "w110";
                //    this.forceUpdate("");
                //});
                this.Thers.forEach((ther0, i0) => {
                    if (i != i0) {
                        ther.getEmit().addListener("width_fix", function () {
                            ther0.fixWidth();
                            ther0.forceUpdate("");
                        });
                    }
                })
            });

        }

    }

   
    export class TableStates extends domCore.DomStates {

    }


    export class TableProps extends domCore.DomProps<TableVm>{
    }
}