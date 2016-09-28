

import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");
import TreeFile = require("./../../02col/03selector/BaseTree");
import ColFilterDomFile = require("./ColFiterDom");
import eventFile = require("./../../01core/Event");

export module ReportPage {
    export class ReportPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ReportPageReact extends basewedPageFile.Web.BaseWebPageReact<ReportPageProps, ReportPageStates, ReportPageAction> implements domCore.IReact {

        public state = new ReportPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <div className="col-lg-2">{this._tDom(this.props.Vm.ModuleTreeObj) }</div>
                {this.props.Vm.IsLoading?<div>正在载入......</div>:null}
                <div className="col-lg-10">
                    <div>{this._tDom(this.props.Vm.FilterDom) }</div>
                    {this.props.Vm.IsLoading ? (<div className="Hu-loader">
                    </div>) : (null) }
                    <iframe
                        src={this.props.Vm.Url + "&colhidejson=" + this.props.Vm.ColumnHideJson}
                        className="ACT-IFRAME Hg-width"
                        onLoad={() => { this.iframeLoadingFun(); } }
                        >
                    </iframe>
                        </div>
                </div>;
        }

        private iframeLoadingFun()
        {
            this.props.Vm.IsLoading = false;
            this.forceUpdate();
        }

        protected pComponentDidMount(): void {
            //this.props.Vm.offEvent_ChangeEmit(this.fEventFun);
            // var _msd = this.props.Vm.MetaShowData;
            // if (!_msd) _msd = {Name : this.props.Vm.getRegName()};
            //  if (_msd) {
            var _dom = ReactDOM.findDOMNode(this);
            if (_dom) {
                $(_dom).find(".ACT-IFRAME").height($(window).height() - 60 - 30 - 30);
            }
        }




    }

    export interface IReactReportPageVm extends basewedPageFile.Web.BaseWebPageVm {
        ModuleTreeObj: TreeFile.ui.BaseTreeVm;
        Url: string;
        IsLoading: boolean;
        FilterDom: ColFilterDomFile.ColFiterDom.ColFiterDomVm;
        ColumnHideJson: string;
    }

    export interface IReportPageConfig {


    }
    export interface IColumnMethodItem {
        Name: string;
        DisplayName: string;

    }
    export class ReportPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactReportPageVm {
        public ReactType = ReportPageReact;
        public Title: string = "ReportPage页面;";
        public ModuleTreeObj: TreeFile.ui.BaseTreeVm;
        public Url: string;
        public IsLoading: boolean;
        public FilterDom: ColFilterDomFile.ColFiterDom.ColFiterDomVm;
        public ColumnHideJson: string;

        public constructor(config?: IReportPageConfig) {
            super();
            this.UniId = "reportPage" +  eventFile.App.getUniId();
            // this.init(config);
            this.Url = "http://192.168.68.16:6777/html/report?regName=GridTplReportCreator$module/plug";

            this.listenAppEvent("clickLi-check-json", this.UniId, (json: string) => {
                this.ColumnHideJson = json;
               // this.IsLoading = true;
                this.forceUpdate("");
            });
        }

        private init(config: IReportPageConfig) {
            this.ModuleTreeObj = new TreeFile.ui.BaseTreeVm({
                RegName: "ModuleXmlTreeCodeTable",
                IsRootExpand: true
            });
           // this.ModuleTreeObj.Tree.isr
            this.ModuleTreeObj.Tree.IsOnlyLeafCanSelect = true;
            this.ModuleTreeObj.Tree.onReactNodeClick((n) => {
                // alert(n.Value + "  " + n.Text);
                this.Url = "http://192.168.68.16:6777/html/report?regName=GridTplReportCreator$" + n.Value;
                this.IsLoading = true;

                urlFile.Core.AkPost("/core/WebService/MethodList?resolvers=ColumnMethod&xml=" + n.Value, {}, (a) => {
                    var _items: IColumnMethodItem[] = a.ColumnMethod;
                    this.FilterDom = new ColFilterDomFile.ColFiterDom.ColFiterDomVm({
                        Items: _items.map((item) => {
                            return {
                                Name: item.Name,
                                Text: item.DisplayName,
                                IsNoCheck: false
                                
                            };
                        }),
                        UniId: this.UniId
                    });
                        this.forceUpdate("");
                })
                
                return true;
            });
        }

        protected loadPage(callback?: () => any) {
            this.init(null);
            if (callback) {
                callback();
            }
        }

    }
    export class ReportPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ReportPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactReportPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("REPORTPAGE", basewedPageFile.Web.BaseWebPageVm, ReportPageVm);

}

