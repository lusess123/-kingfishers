import domFile = require("./../../../01core/0Dom");import React = require("react");
  
import iocFile = require("./../../../01core/Ioc");
 
  
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");

import BookMarkFile = require("./../tool/BookMark");
import BookMark = BookMarkFile.BookMark.BookMarkReact;
import BookMarkVm = BookMarkFile.BookMark.BookMarkVm;

import WorkBenchFile = require("./HWorkBenchPage");
import WorkBenchVm = WorkBenchFile.HWorkBenchPage.HWorkBenchPageVm;

import NewCollectFile = require("./../NewCollectpage");
import NewCollectVm = NewCollectFile.NewCollect.NewCollectVm;


export module cxjTest {
    export class cxjTestAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class cxjTestReact extends basewedPageFile.Web.BaseWebPageReact<cxjTestProps, cxjTestStates, cxjTestAction> implements domCore.IReact {

        public state = new cxjTestStates();
        public pSender(): React.ReactElement<any> {
            return <div className="m-t-lg">
                <div className="left acs-Width20">
                    <ul>
                    <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>
                    <a className="btn btn-primary">新增书签</a></li>
                    <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>
                            <a className="btn btn-primary">我的工作台</a></li>
                        </ul>  
                    </div> 
                <div className="right acs-Width80 acsWhiteBg hide">
                    <div className={(this.props.Vm.TabCurrentIndex == 0 ? "" : " hide") }>
                        {this.props.Vm.NewCollectObj.intoDom() }
                        </div>
                     <div className={(this.props.Vm.TabCurrentIndex == 1 ? "" : " hide") }>
                        {this.props.Vm.WorkBenchObj.intoDom() }
                         </div>
                </div>   

                <div className="PagerCenter">
                    <ul className="pagination pagination-sm">
                        <li className="disabled">
                            <a><i className="icon-double-angle-left fa fa-angle-double-left"></i></a>
                        </li>
                        <li className="active">
                            <a>1</a>
                        </li>
                        <li>
                            <a>2</a>
                        </li>
                        <li>
                            <a>3</a>
                        </li>
                        <li>
                            <a>4</a>
                        </li>
                        <li>
                            <a>5</a>
                        </li>
                        <li>
                            <a><i className="icon-double-angle-right fa fa-angle-double-right"></i></a>
                            </li>
                        <span>共有5条记录</span>
                        <span><input className="acs-pagination-input"></input>/2页</span>
                        <a className="GoToPage btn btn-xs btn-primary acs-pagination-surebtn pull-right">确定</a>
                        <div className="Hu-page-size input-group pull-right">
                            <span className="input-group-addon">
                                <i className="icon-th-large fa fa-th-large"></i>
                                </span>
                            <input type="text" className="form-control ACT-PAGE-SIZE" ></input>
                        </div>
                    </ul>                        
                     </div>
              </div>;
        }

        private fun_TabsClick(index) {
            this.props.Vm.TabCurrentIndex = index;
            this.forceUpdate();
        }

    }
    export class cxjTestVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = cxjTestReact;

        public TabCurrentIndex = 0;

        public BookMarkObj: BookMarkFile.BookMark.BookMarkVm = new BookMarkFile.BookMark.BookMarkVm();
        public WorkBenchObj: WorkBenchVm = new WorkBenchVm();
        public NewCollectObj: NewCollectVm = new NewCollectVm();
    }
    export class cxjTestStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class cxjTestProps extends basewedPageFile.Web.BaseWebPageProps<cxjTestVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("CXJTESTPAGE", basewedPageFile.Web.BaseWebPageVm, cxjTestVm);

}