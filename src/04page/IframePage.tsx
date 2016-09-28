import basewedPage = require("./BaseWebPage");
import iocFile = require("./../01core/Ioc");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module Page {

    export class IframePageReact extends basewedPage.Web.BaseWebPageReact<IframePageProps, IframePageStates, IframePageAction>{
        public pSender(): React.ReactElement<any> {

            return <iframe src={this.props.Vm.Url} 
                className="Hz-scroll  Hg-overflow-auto Hg-width Hu-border-none"
                    style={{ "height": $(window).height(), "overflow-y": "auto"}}
                    >

                    </iframe>
        }

        private _resizeFun: any;
        protected pComponentDidMount() {
            this._resizeFun = () => {
                this.forceUpdate();
            };
            $(window).bind("resize", this._resizeFun)
            //$(window).bind("resize", (a) => {
            //    alert(a);
            //})
        }

        protected  pComponentWillUnmount(): void {
            super.pComponentWillUnmount();
            if (this._resizeFun) {
                $(window).unbind("resize", this._resizeFun)
            }

        }

    }

   

    export class IframePageStates extends basewedPage.Web.BaseWebPageStates
    {
    }

    export class IframePageAction extends basewedPage.Web.BaseWebPageAction {
    }

    export class IframePageVm extends basewedPage.Web.BaseWebPageVm {
        public ReactType = IframePageReact;
        public Url:string;

        public Reset(p1?: string, p2?: string, p3?: string) {
            super.Reset(p1, p2, p3);
            this.Url = p1;
        }
    }


    export class IframePageProps extends basewedPage.Web.BaseWebPageProps<IframePageVm>{



    }

    iocFile.Core.Ioc.Current().RegisterType("IFRAME", basewedPage.Web.BaseWebPageVm, IframePageVm);

} 