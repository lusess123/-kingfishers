import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import updateRowFile = require("./ResultCommonUpdateRowDom");
import dataFile = require("./../Data");

export module ResultCommonUpdatePage {
    export class ResultCommonUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class ResultCommonUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<ResultCommonUpdatePageProps, ResultCommonUpdatePageStates, ResultCommonUpdatePageAction> implements domCore.IReact {

        public state = new ResultCommonUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div className="acsModalList">
                    {this.props.Vm.RowList.map((row, i) => {
                        row.Index = i;
                        return row.intoDom();
                    }) }
                </div>
                <div className="text-center"><span className="btn btn-xs btn-primary"onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }


        private fun_submitBtn() {
            this.props.Vm.submit();
        }



    }
    export interface IResultCommonUpdatePageConfig {
        RowConfigList: updateRowFile.ResultCommonUpdateRowDom.IResultCommonUpdateRowDomConfig[];
    }

    export class ResultCommonUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = ResultCommonUpdatePageReact;
        public RowList: updateRowFile.ResultCommonUpdateRowDom.ResultCommonUpdateRowDomVm[] = [];


        public constructor(config?: IResultCommonUpdatePageConfig) {
            super();
            this.Title = "编辑常规体检结果";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IResultCommonUpdatePageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new updateRowFile.ResultCommonUpdateRowDom.ResultCommonUpdateRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);

            });
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/ResultCommon/FetchResultCommonsList", { fids: this.Param1 }, (a) => {
                if (a)
                {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.ResultCommon.IResultCommonData = data;
                        var masterConfig = { RowData: masterData };
                        rowConfigList.push({ MasterConfig: masterConfig})
                    });
                    var pageConfig = {
                        RowConfigList: rowConfigList
                    }
                    this.init(pageConfig);

                }
                if (callback) {
                    callback();
                }
            })
          
        }
        public legal(): boolean {
            var _isRes: boolean = true;
            this.RowList.forEach((row) => {
                if (!row.legal()) {
                    _isRes = false;
                }
            });
            return _isRes;

        }

        public getData(): any {
            var _ds = [];
            this.RowList.forEach((row) => {
                var _o = row.getData();
                if (!utilFile.Core.Util.IsPure(_o)) {
                    _ds.push(_o);
                }
            });
            if (_ds.length == 0) {
                return null;
            }
            return _ds;
        }
        public submit() {
            if (this.legal()) {
                var dt = this.getData();
                if (dt) {
                    var str = JSON.stringify(dt);
                    urlFile.Core.AkPost("/MedicalCenter/ResultCommon/ModifyResultCommons", { resultcommons: str }, (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            if (_list.length > 0) {
                                var _strs: string = _list.join(",");
                                utilFile.Core.Util.Noty("数据编辑成功");
                                urlFile.Core.AkUrl.Current().openUrl(
                                    "$CommonResultListPage$" + _strs + "$",
                                    false,
                                    () => {
                                        urlFile.Core.AkUrl.Current().openUrl("$CommonResultdetailpage$" + _strs + "$", true);
                                    }
                                );

                            }
                            else {
                                utilFile.Core.Util.Noty("数据未更新");
                            }
                        }
                        else {
                            utilFile.Core.Util.Noty("数据编辑失败");
                        }
                    });
                }
                else {
                    utilFile.Core.Util.Noty("没有可提交的数据");
                }
            }               
        }

    }
    export class ResultCommonUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class ResultCommonUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<ResultCommonUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CommonResultUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, ResultCommonUpdatePageVm);

}
