import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import detailFile = require("./../../02col/01single/Detail");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import PromiseTestFile = require("./../../01core/PromiseTest");

export module Test {
    export class TestAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class TestReact extends basewedPageFile.Web.BaseWebPageReact<TestProps, TestStates, TestAction> implements domCore.IReact {

        public state = new TestStates();

        private fun_click()
        {
            var ff: PromiseTestFile.PromiseTest = new PromiseTestFile.PromiseTest();

            ff.ff();

            //urlFile.Core.AkPost("/core/WebService/Method?resolver=JsonMethod", {json:"class1.json"}, (a) => {
            //    alert(JSON.stringify(a));
            //});
        }

        private fun_Pclick() {
            this.props.Vm.SendPageActor({ToPanelName:""},new Date().toString());
        }

        public pSender(): React.ReactElement<any> {
            return <div>
                <div><button onClick={() => { this.fun_click(); }} ></button></div>
                <div><button onClick={() => { this.fun_Pclick(); } } >页面通信</button></div>
                <div> {this.props.Vm.Is1 ? this.props.Vm.DetailVm1.intoDom() : this.props.Vm.DetailVm2.intoDom() } </div>
                <div><button className="button" onClick={() => {
                    this.props.Vm.Is1 = !this.props.Vm.Is1;
                    this.props.Vm.DetailVm1.IsChange = true;
                    this.props.Vm.DetailVm2.IsChange = true;
                    //$.post("/RightCloud/SysFeed/GetFeed", (d) => {
                    //    alert(JSON.stringify(d));
                    //    this.props.Vm.forceUpdate("");
                    //});

                    this.fun_click();
                   
                } }    >切换</button>
                    <button  onClick={() => { this.props.Vm.testEvent(); } }  >事件处理</button>
                    <button  onClick={() => { this.props.Vm.testBind(); } }  >绑定</button>
                    <button  onClick={() => { this.props.Vm.testUnBind(); } }  >解绑</button>
                </div>
                <ul className="dropdown menu" data-dropdown-menu>
  <li>
    <a href="#">Item 1</a>
    <ul class="menu">
      <li><a href="#">Item 1A</a></li>
      <li><a href="#">Item 2A</a></li>
      <li><a href="#">Item 3A</a></li>
      <li><a href="#">Item 4A</a></li>
        </ul>
      </li>
  <li><a href="#">Item 2</a></li>
  <li><a href="#">Item 3</a></li>
  <li><a href="#">Item 4</a>

                        </li>
                    </ul>

                  </div>;
        }
        
        protected pComponentDidMount() {
        //    alert(123);
            var elem = ReactDOM.findDOMNode(this);
           // var _$th = $(elem);
            super.pComponentDidMount();
            //_$th.foundation();
        }




    }
    export class TestVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = TestReact;
        public DetailVm1: detailFile.ui.DetailVm;
        public DetailVm2: detailFile.ui.DetailVm;
        public Is1: boolean;
        public EventObj: JQuery;
        public constructor() {
            super();
            this.DetailVm1 = new detailFile.ui.DetailVm();
            this.DetailVm1.initDataValue("111");
            this.DetailVm2 = new detailFile.ui.DetailVm();
            this.DetailVm2.initDataValue("222");
            this.EventObj = $({});
           
        }

        public testEvent()
        {
            this.EventObj.trigger("click", ["data123"]);
        }

        public testBind()
        {
            this.EventObj.on("click", (a,b,c) => {
                alert(b);
            });
        }

        public testUnBind()
        {
            this.EventObj.unbind();
        }

    }
    export class TestStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class TestProps extends basewedPageFile.Web.BaseWebPageProps<TestVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("TEST", basewedPageFile.Web.BaseWebPageVm, TestVm);
    iocFile.Core.Ioc.Current().RegisterType("ORG", basewedPageFile.Web.BaseWebPageVm, TestVm);
}
