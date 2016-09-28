import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import updateRowFile = require("./DeptConclusionTplUpdateRowDom");
import dataFile = require("./../Data");

export module DeptConclusionTplUpdatePage {
    export class DeptConclusionTplUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DeptConclusionTplUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<DeptConclusionTplUpdatePageProps, DeptConclusionTplUpdatePageStates, DeptConclusionTplUpdatePageAction> implements domCore.IReact {

        public state = new DeptConclusionTplUpdatePageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hm-modals"><h4>{this.props.Vm.Title}</h4>
                <div className="Hc-modals-list">
                    {this.props.Vm.RowList.map((row, i) => {
                        row.Index = i;
                        return row.intoDom();
                    }) }
                </div>
                <div className="text-center"><span className="btn btn-xs btn-primary" onClick={() => { this.fun_submitBtn(); } } >提交</span></div>
            </div>;
        }


        private fun_submitBtn() {
            this.props.Vm.submit();
        }



    }
    export interface IDeptConclusionTplUpdatePageConfig {
        RowConfigList: updateRowFile.DeptConclusionTplUpdateRowDom.IDeptConclusionTplUpdateRowDomConfig[];
    }

    export class DeptConclusionTplUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DeptConclusionTplUpdatePageReact;
        public RowList: updateRowFile.DeptConclusionTplUpdateRowDom.DeptConclusionTplUpdateRowDomVm[] = [];


        public constructor(config?: IDeptConclusionTplUpdatePageConfig) {
            super();
            this.Title = "编辑模板";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IDeptConclusionTplUpdatePageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new updateRowFile.DeptConclusionTplUpdateRowDom.DeptConclusionTplUpdateRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);

            });
        }

        protected loadPage(callback?: () => any) {

            urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/FetchTemplateDetailList", { fids: this.Param1 }, (a) => {
                if (a && a.Data) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.DeptConclusionTpl.IDeptConclusionTplData = data;
                        var masterConfig = { RowData: masterData };
                        var detailConfigList = [];
                        var detailListData: dataFile.DeptConclusionTpl.IDeptConclusionTplItemData[] = data.ItemList;
                        detailListData.map((detail, index) => {
                            var detailConfig = { RowData: detail };
                            detailConfigList.push(detailConfig);
                        });
                        rowConfigList.push({ MasterConfig: masterConfig, DetailRowConfigList: detailConfigList })
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
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusionTpl/ModifyTemplates", { templates: str }, (a) => {
                        if (a.Content == "ok") {
                            var _list: string[] = a.Data;
                            if (_list.length > 0) {
                                var _strs: string = _list.join(",");
                                utilFile.Core.Util.Noty("数据编辑成功");
                                urlFile.Core.AkUrl.Current().openUrl(
                                    "$DeptConclusionTpllistpage$" + _strs + "$",
                                    false,
                                    () => {
                                        urlFile.Core.AkUrl.Current().openUrl("$panelDeptConclusionTpldetailpage$" + _strs + "$", true);
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
    export class DeptConclusionTplUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DeptConclusionTplUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<DeptConclusionTplUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DEPTCONCLUSIONTPLUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, DeptConclusionTplUpdatePageVm);

}
