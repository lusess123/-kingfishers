import basepage = require("./../03form/Base/BasePage");
import iocFile = require("./../01core/Ioc");
import urlFile = require("./../01core/Url");
import postFile = require("./../01core/post");
import PageView = require("./../07data/PageView");
//import listPage = require("./ListPage");
import utilFile = require("./../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class UpdatePageAction extends basepage.ui.BasePageAction {

    }

    export class UpdatePageReact extends basepage.ui.BasePageReact<UpdatePageProps, UpdatePageStates, UpdatePageAction> {

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
            // alert("List页面注册变更事件");
        }
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        };
        protected pSenderBottom(): React.ReactElement<any> {
            //return React.DOM.div(
            //    {
            //        className: "tiny button",
            //        onClick: (e) => {
            //            // this.seachClick();
            //            var res = this.getPageSubmitData(this.props.Vm.FormObjList);
            //            // if (res.IsChange) {
            //            if (res.IsLegalResult) {

            //                if (res.IsChange) {
            //                    $(e.target).hide();
            //                    this.props.Vm.updateSubmitData(res.Ds);
            //                }
            //                else {
            //                    utilFile.Core.Util.Noty("数据没有变更，无法保存");
            //                }
            //                // e
            //            }
            //        }


            //    },
            //    "保存");

            return <div className="text-center">
                <a className="btn btn-sm btn-primary" 
                        onClick={(e) => {
                    var res = this.props.Vm.getPageSubmitData(this.props.Vm.FormObjList);
                    // if (res.IsChange) {
                    if (res.IsLegalResult) {

                        if (res.IsChange) {
                            $(e.target).hide();
                            this.props.Vm.updateSubmitData(res.Ds);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据没有变更，无法保存");
                        }
                        // e
                    }   } }>
                保存
            </a>
                    </div>


        }
    }

    export class UpdatePageProps extends basepage.ui.BasePageProps<UpdatePageVm>{


    }

    export class UpdatePageVm extends basepage.ui.BasePageVm {
        public ReactType = UpdatePageReact;
        public pRegName = "UpdatePage";

        public updateSubmitData(ds: postFile.Post.IDataSet) {
            var _sysPage = this.createSysPage("Update");
            ds["PAGE_SYS"] = [{ KeyValue: _sysPage.KeyValue, PageStyle: _sysPage.PageStyle }];
            var xml = this.Xml;
            urlFile.Core.AkPost("/module/ModuleMerge",
                {
                    xml: this.Xml,
                    ds: JSON.stringify(ds),
                    pageStyle: "Update"
                },
                function (res) {
                    if (res.LegalException) {
                        utilFile.Core.Util.Noty(res.Error);
                    } else {
                        utilFile.Core.Util.Noty("编辑保存成功");
                        urlFile.Core.AkUrl.Current().fEmit.emit("clearPanel");
                        urlFile.Core.AkUrl.Current().openUrl("$$" + xml);
                    }

                })
        }
    }

    export class UpdatePageStates extends basepage.ui.BasePageStates {
       
        // public 

    }
    iocFile.Core.Ioc.Current().RegisterType("UPDATE", basepage.ui.BasePageVm, UpdatePageVm);
}