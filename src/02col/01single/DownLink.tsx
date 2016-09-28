import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
import link = require("./Link");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    export class DownLinkAction extends link.ui.LinkAction {
    }

    export class DownLinkProps extends link.ui.LinkProps<DownLinkVm> {

    }

    export class DownLinkVm extends link.ui.LinkVm {
         public Text="点击下载"
         public pRegName = "下载控件"
         //下载url的路径
         public href = "";
         public ReactType: any = DownLinkReact;
         public static Test(): DownLinkVm
         {
             var bean: DownLinkVm = new DownLinkVm;
             return bean;
         }
    }

    export class DownLinkState extends link.ui.LinkState {

    }

    export class DownLinkReact extends link.ui.LinkReact<DownLinkProps, DownLinkState, DownLinkAction> implements domFile.Core.IReact {

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount(): void {
            super.pComponentDidMount();
        }

    }

    iocFile.Core.Ioc.Current().RegisterType("DownLinkVm", BaseColVm, DownLinkVm);
}