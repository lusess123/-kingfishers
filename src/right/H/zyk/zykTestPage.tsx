import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import xscrollFile = require("./../../../05tool/XScroll");

export module zykTestPage {
    export class zykTestPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class zykTestPageReact extends basewedPageFile.Web.BaseWebPageReact<zykTestPageProps, zykTestPageStates, zykTestPageAction> implements domCore.IReact {

        public state = new zykTestPageStates();

        private fGetItem(): React.ReactElement<any> {
            return <div className="large-4 small-6 columns">
                <img src="http://placehold.it/1000x1000&amp;text=Thumbnail"/>
                <div className="panel">
                    <h5>
                        Item Name
                    </h5>
                    <h6 className="subheader">
                        $000.00
                    </h6>
                </div>
            </div>;
        }

        public pSender(): React.ReactElement<any> {
             
            return <div>{this.props.Vm.XScrollObj.intoDom()}</div>;
        }






    }
    export class zykTestPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = zykTestPageReact;
        public XScrollObj: xscrollFile.XScroll.XScrollVm;


        constructor() {
            super();
            this.XScrollObj = new xscrollFile.XScroll.XScrollVm({
                FunSetInnerContent: () => {

                    return this.setInner();
                }
            });

        }

        private setInner(): React.ReactElement<any>[]
        {
            var _list = [];
            for (var i = 0; i < 300; i++) {
                _list.push(i);
            }
            return [
                <ul className="acsWhiteSpace secondary button-group ">
                    {

                        _list.map((h, i) => {
                            return <li className="acsPointer  button" ><a >{"菜单"+i.toString()} </a></li>;
                        })
                    }



                </ul>];  
        }

    }
    export class zykTestPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class zykTestPageProps extends basewedPageFile.Web.BaseWebPageProps<zykTestPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ZYKTESTPAGE", basewedPageFile.Web.BaseWebPageVm, zykTestPageVm);

}
