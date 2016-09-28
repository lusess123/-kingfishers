import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import dataFile = require("./Data");
import yearFile = require("./Year");
import weekFile = require("./Week");

export module UpdatelogPage {
    export class UpdatelogPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UpdatelogPageReact extends basewedPageFile.Web.BaseWebPageReact<UpdatelogPageProps, UpdatelogPageStates, UpdatelogPageAction> implements domCore.IReact {

        public state = new UpdatelogPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-timeline">
                  <div className="Hu-line-title">
                    <img src="../lib/akCss/images/platform/log-list.png" />
                    <span>平台更新日志</span>
                  </div>    
                  {
                    this.props.Vm.YearDataList.map((a) => { return a.intoDom(); })
                   }                        
            </div>;
        }

    }
    export interface IReactUpdatelogPageVm extends basewedPageFile.Web.BaseWebPageVm {
        YearDataList: yearFile.Year.YearVm[];
    }

    export interface IUpdatelogPageConfig {
    }
    export class UpdatelogPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactUpdatelogPageVm {
        public ReactType = UpdatelogPageReact;
        public Title: string = "平台更新日志";
        public YearDataList: yearFile.Year.YearVm[] = [];

        public constructor(config?: IUpdatelogPageConfig) {
            super()
        }


        private init(config: IUpdatelogPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod",
                { json: "dev/UpdatelogData.json" }, (a) => {

                var _data: dataFile.Updatelog.Updatelog = a;

                _data.YearList.forEach((year) => {

                    var _newYear: yearFile.Year.YearVm = new yearFile.Year.YearVm(year);
                    this.YearDataList.push(_newYear);

                });


                   if (callback) {
                       callback();
                   }
            });

        }

    }
    export class UpdatelogPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UpdatelogPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactUpdatelogPageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("UPDATELOGPAGE", basewedPageFile.Web.BaseWebPageVm, UpdatelogPageVm);

}
