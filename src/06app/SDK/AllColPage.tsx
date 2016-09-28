import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");

import basecolFile = require("./../../02col/00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
import test = require("./../../05tool/TestForm");
import akTest = require("./../../05tool/AkTest");

export module AllColPage {
    export class AllColPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class AllColPageReact extends basewedPageFile.Web.BaseWebPageReact<AllColPageProps, AllColPageStates, AllColPageAction> implements domCore.IReact {

        public state = new AllColPageStates();
        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative Hg-margin-tl">{this.props.Vm.TestFormObj.intoDom()}</div>;
        }
    }
    export class AllColPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = AllColPageReact;
        public TestFormObj: test.test.TestFormVm;

        public constructor()
        {
            super();
            var _list = iocFile.Core.Ioc.Current().GetTypeList(BaseColVm);
            var vm: test.test.TestFormVm = new test.test.TestFormVm();
            _list.forEach((a) => {
                var _f = a.InstanceType;
                if (_f["Test"]) {
                    var _col: BaseColVm = _f["Test"]();
                    var _test: akTest.test.TestVm = new akTest.test.TestVm(_col);
                    _test.VmName = a.RegName;
                    vm.TestList.push(_test);
                }
            });
            this.TestFormObj = vm;
        }

    }
    export class AllColPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class AllColPageProps extends basewedPageFile.Web.BaseWebPageProps<AllColPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("ALLCOLPAGE", basewedPageFile.Web.BaseWebPageVm, AllColPageVm);

}

