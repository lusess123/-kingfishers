import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import urlFile = require("./../../01core/Url");
import dataFile = require("./Data");
import alinkFile = require("./../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;
export module HosWorkRowDomDom {
    export class HosWorkRowDomDomAction extends domCore.DomAction {
    }

    export class HosWorkRowDomDomReact extends domCore.DomReact<HosWorkRowDomDomProps, HosWorkRowDomDomStates, HosWorkRowDomDomAction> implements domCore.IReact {

        public state = new HosWorkRowDomDomStates();

        public pSender(): React.ReactElement<any> {
            return (<li className="nav-item" onClick = {() => { this.props.Vm.openXml(this.props.Vm.RowData.FID) } }>
                <ALink  Vm={new alinkFile.ui.ALinkVm(false, { ClassName: "clearfix" }) } href="" children={null}>
                    <span title="">{this.props.Vm.RowData.Title} </span>
                    <small>{this.props.Vm.RowData.outDate}</small>
                </ALink>
            </li>);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IHosWorkRowDomDomConfig {
        RowData: dataFile.Data.INoticeData;

    }

    export class HosWorkRowDomDomVm extends domCore.DomVm {
        public ReactType = HosWorkRowDomDomReact;
        public RowData: dataFile.Data.INoticeData;


        public constructor(config?: IHosWorkRowDomDomConfig) {
            super();
            if (config) {
                this.RowData = config.RowData;
            }

        }
        public openXml(val: string)
        {
            var url ="$winDefault$module/HospPerformance/Core/performance_system_announcement$Detail$"+val
            urlFile.Core.AkUrl.Current().openUrl(url, true);
        }
    }
    export class HosWorkRowDomDomStates extends domCore.DomStates {
    }


    export class HosWorkRowDomDomProps extends domCore.DomProps<HosWorkRowDomDomVm>{
    }



}


