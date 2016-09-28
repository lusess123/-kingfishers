


import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module ErrorLogPage {
    export class ErrorLogPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ErrorLogPageReact extends basewedPageFile.Web.BaseWebPageReact<ErrorLogPageProps, ErrorLogPageStates, ErrorLogPageAction> implements domCore.IReact {

        public state = new ErrorLogPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="well">
                    <h6 className="Hu-title Hs-fw ">错误日志</h6>
                </div>
                <div className="col-lg-12 col-md-12 Hu-dashed-line">
                    <label className="Hs-fw">生成时间: </label>
                    <span className="m-l">2016-09-11 11: 49: 48: 5866</span>
                </div>
                <div className="col-lg-12 col-md-12 Hu-dashed-line m-t">
                    <label className="Hs-fw">程序出现异常,异常信息是: </label>
                    <p>这些列当前不具有唯一值。</p>                    
                    <div>
                        <label className="Hs-fw">堆栈信息是: </label>
                        <p>在 System.Data.ConstraintCollection.AddUniqueConstraint(UniqueConstraint constraint) </p>
                        <p>在 System.Data.ConstraintCollection.Add(Constraint constraint, Boolean addUniqueWhenAddingForeign)</p>
                        <p>在 System.Data.DataTable.set_PrimaryKey(DataColumn[]value)</p>
                        <p>在 Ataw.Framework.Core.ListDataTable.AppendTo(DataSet ds) 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Core\Data\ListDataTable.cs: 行号 92</p>
                        <p>在 Ataw.Framework.Core.PlugInfoSource.AppendTo(DataSet ds) 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Core\Instance\Plug\PlugInfoSource.cs: 行号 130</p>
                        <p>在 Ataw.Framework.Core.AtawBasePageViewCreator.FillDataSet(FormConfig fc) 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Core\Config\ViewCreator\PageViewCreator\AtawBasePageViewCreator.cs: 行号 787</p>
                        <p>在 System.Collections.Generic.List`1.ForEach(Action`1 action)</p>
                        <p>在 Ataw.Framework.Core.AtawBasePageViewCreator.Create() 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Core\Config\ViewCreator\PageViewCreator\AtawBasePageViewCreator.cs: 行号 307</p>
                        <p>在 Ataw.Framework.Core.AtawListPageViewCreator.Create() 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Core\Config\ViewCreator\PageViewCreator\AtawListPageViewCreator.cs: 行号 21</p>
                        <p>在 Ataw.Framework.Web.AtawBaseController.Module(String ds, String xml, String pageStyle, String keyValue) 位置 d: \AtawSources\Ataw.Platform\src\framework\Ataw.Framework.Web\Web\AtawBaseController.cs: 行号 290</p >
                </div>
                </div>
            </div>;
        }






    }

    export interface IReactErrorLogPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IErrorLogPageConfig {


    }
    export class ErrorLogPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactErrorLogPageVm {
        public ReactType = ErrorLogPageReact;
        public Title: string = "ErrorLogPage页面;";
        public constructor(config?: IErrorLogPageConfig) {
            super();

        }

        private init(config: IErrorLogPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class ErrorLogPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ErrorLogPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactErrorLogPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ERRORLOGPAGE", basewedPageFile.Web.BaseWebPageVm, ErrorLogPageVm);

}

