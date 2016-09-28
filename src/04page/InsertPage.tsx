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

    export class InsertPageAction extends basepage.ui.BasePageAction {

    }

    export class InsertPageReact extends basepage.ui.BasePageReact<InsertPageProps, InsertPageStates, InsertPageAction> {

        protected pComponentWillMount(): void {
            super.pComponentWillMount();
            // alert("List页面注册变更事件");
        }
        public pSender(): React.ReactElement<any> {
            return super.pSender();
        };

        protected pSenderBottom(): React.ReactElement<any> {
          //return  React.DOM.div(
          //      {
          //          className: "tiny button",
          //          onClick: () => {
          //             // this.seachClick();
          //              var res = this.getPageSubmitData(this.props.Vm.FormObjList);
          //             // if (res.IsChange) {
          //                  if (res.IsLegalResult) {
                    
          //                      if (res.IsChange) {
          //                          this.props.Vm.insertSubmitData(res.Ds);
          //                      }
          //                      else {
          //                      utilFile.Core.Util.Noty("数据没有变更，无法提交");
          //                      }
          //                     // e
          //                  }
          //              }
                        
                    
          //      },
          //      "新增提交");

          return <div className="text-center">
              <a className="btn btn-sm btn-primary "
                  onClick={() => {
                      var res = this.props.Vm.getPageSubmitData(this.props.Vm.FormObjList);
                      // if (res.IsChange) {
                      if (res.IsLegalResult) {

                          if (res.IsChange) {
                              this.props.Vm.insertSubmitData(res.Ds);
                          }
                          else {
                              utilFile.Core.Util.Noty("数据没有变更，无法提交");
                          }
                          // e
                      }
                  } }>新增提交</a>
                </div>
        }
    }

    export class InsertPageProps extends basepage.ui.BasePageProps<InsertPageVm>{



    }

    export class InsertPageVm extends basepage.ui.BasePageVm {
        public ReactType = InsertPageReact;
        public pRegName = "InsertPage";

        //public SearchForm: BaseFormVm;
        //public ListForm: BaseFormVm;

        public insertSubmitData( ds :postFile.Post.IDataSet)
        {
            var _sysPage = this.createSysPage("Insert");
            ds["PAGE_SYS"] = [{ KeyValue: _sysPage.KeyValue, PageStyle: _sysPage.PageStyle }];
            var xml = this.Xml;
            urlFile.Core.AkPost("/module/ModuleMerge",
                {
                    xml: this.Xml,
                    ds: JSON.stringify(ds),
                    pageStyle:"Insert"
                },
                function (res) {
                    if (res.LegalException) {
                        utilFile.Core.Util.Noty(res.Error);
                    } else {
                        urlFile.Core.AkUrl.Current().fEmit.emit("clearPanel");
                        urlFile.Core.AkUrl.Current().openUrl("$$" + xml);
                    }

            })
        }

        public RowDataBtnList: Array<string>;
       // public Pagination: tool.PaginationVm = new tool.PaginationVm();
        public create(_pageView: PageView.data.IPageView) {
            //console.log( _pageView.Forms[0]);
            //alert();
            this.PageView = _pageView;
            this.HeaderVail = _pageView.Header;
            if (this.HeaderVail.IsValid) {

                var _g: PageView.data.IForm = null;
                for (var n in _pageView.Forms) {
                    _g = _pageView.Forms[n];
                    break;
                }
                _pageView.Data[_g.Name] = [{}];

                super.create(_pageView);
            }
        }


    }
    export class InsertPageStates extends basepage.ui.BasePageStates {
       
        // public 

    }
    iocFile.Core.Ioc.Current().RegisterType("INSERT", basepage.ui.BasePageVm, InsertPageVm);
}