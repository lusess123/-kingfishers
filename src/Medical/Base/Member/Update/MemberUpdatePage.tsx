import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import iocFile = require("./../../../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import urlFile = require("./../../../../01core/Url");
import basewedPageFile = require("./../../../../04page/BaseWebPage");
import updateRowFile = require("./MemberUpdateRowDom");
import dataFile = require("./../Data");

export module MemberUpdatePage {
    export class MemberUpdatePageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class MemberUpdatePageReact extends basewedPageFile.Web.BaseWebPageReact<MemberUpdatePageProps, MemberUpdatePageStates, MemberUpdatePageAction> implements domCore.IReact {

        public state = new MemberUpdatePageStates();
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
    export interface IMemberUpdatePageConfig {
        RowConfigList: updateRowFile.MemberUpdateRowDom.IMemberUpdateRowDomConfig[];
    }

    export class MemberUpdatePageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = MemberUpdatePageReact;
        public RowList: updateRowFile.MemberUpdateRowDom.MemberUpdateRowDomVm[] = [];
        public BatchId: string;

        public constructor(config?: IMemberUpdatePageConfig) {
            super();
            this.Title = "编辑会员信息";
            if (config) {
                this.init(config);
            }

        }

        private init(config: IMemberUpdatePageConfig) {
            config.RowConfigList.forEach((row, index) => {
                var _row = new updateRowFile.MemberUpdateRowDom.MemberUpdateRowDomVm(row);
                _row.Index = index;
                this.RowList.push(_row);

            });
        }

        protected loadPage(callback?: () => any) {

            var str = this.Param1.split(",")
            var Fid = str[0];
            this.BatchId = str[1]
            urlFile.Core.AkPost("/MedicalCenter/Member/FetchMembersList", { fids: Fid }, (a) => {
                if (a) {
                    var rowConfigList = [];
                    a.Data.map((data, index) => {
                        var masterData: dataFile.Member.IMemberData = data;
                        var masterConfig = { RowData: masterData };
                        rowConfigList.push({ MasterConfig: masterConfig })
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
                    urlFile.Core.AkPost("/MedicalCenter/Member/ModifyMembers", { Members: str }, (a) => {
                        if (a.Content == "ok") {
                                utilFile.Core.Util.Noty("数据编辑成功！");
                                this.SendPageActor({ ToPanelName: "", ToModuleName: "GroupManagePage" }, { Select: "PersonalManage" });
                                this.closePage();
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
    export class MemberUpdatePageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class MemberUpdatePageProps extends basewedPageFile.Web.BaseWebPageProps<MemberUpdatePageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("MemberUPDATEPAGE", basewedPageFile.Web.BaseWebPageVm, MemberUpdatePageVm);

}
