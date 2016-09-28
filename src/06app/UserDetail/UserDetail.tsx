


import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../01core/Url");
import basewedPageFile = require("./../../04page/BaseWebPage");
import timerFile = require("./../../05tool/Timer");
import dateFile = require("./../../02col/01single/Date");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module UserDetail {
    export class UserDetailAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class UserDetailReact extends basewedPageFile.Web.BaseWebPageReact<UserDetailProps, UserDetailStates, UserDetailAction> implements domCore.IReact {

        public state = new UserDetailStates();
        public pSender(): React.ReactElement<any> {
            return <div className="acsTextC">
                <i className="fa fa-coffee fa-5x acsFontLarge">{this.props.Vm.TimerObj.intoDom()}</i>
                <div>{this.props.Vm.DateObj.intoDom()}</div>
                   </div>;
        }






    }
    export class UserDetailVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = UserDetailReact;
        public TimerObj: timerFile.Timer.TimerVm;
        public DateObj: dateFile.ui.DateVm;
        constructor() {
            super();
            this.TimerObj = new timerFile.Timer.TimerVm();
            this.TimerObj.ClassName = "acsFontLarge";
            this.DateObj = new dateFile.ui.DateVm();
        }

    }
    export class UserDetailStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class UserDetailProps extends basewedPageFile.Web.BaseWebPageProps<UserDetailVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("test1", basewedPageFile.Web.BaseWebPageVm, UserDetailVm);
    //
   // iocFile.Core.Ioc.Current().RegisterType("workflow", basewedPageFile.Web.BaseWebPageVm, UserDetailVm);
}

