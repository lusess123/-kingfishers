import domFile = require("./../../01core/0Dom"); import basecolFile = require("./../00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class LinkAction extends BaseColAction {

    }

    export class LinkProps<V extends LinkVm> extends BaseColProps<V>{

    }

    export class LinkVm extends BaseColVm {

        public ReactType: any = LinkReact;
        public pRegName = "链接控件"
        public Href = "";
        public Text = "链接";
        public Target = "_bank";

        public dataValueGet(): string {
            return this.pDataValue;
        }
         
        public static Test():LinkVm
        {
            var bean: LinkVm = new LinkVm();
            bean.initDataValue("链接,www.baidu.com");
            return bean;
        }

    }

    export class LinkState extends BaseColStates {

    }

    export class LinkReact<P extends LinkProps<LinkVm>,S extends LinkState,A extends LinkAction> extends BaseColReact<P, S, A> implements domFile.Core.IReact{
        public pSender(): React.ReactElement<any>
        {
            var _val = this.props.Vm.dataValueGet().split(",");
            this.props.Vm.Text = _val[0];
            this.props.Vm.Href = _val[1];
            return <a href={this.props.Vm.Href} target={this.props.Vm.Target}>{this.props.Vm.Text}</a>
        }
    }

    iocFile.Core.Ioc.Current().RegisterType("LinkVm", BaseColVm, LinkVm);

}