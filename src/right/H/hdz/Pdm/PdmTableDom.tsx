import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import baseWedPage = require("./../../../../04page/BaseWebPage");

export module PdmTableDom {
    export class PdmTableDomAction extends domCore.DomAction {
    }

    export class PdmTableDomReact extends domCore.DomReact<PdmTableDomProps, PdmTableDomStates, PdmTableDomAction> implements domCore.IReact {

        public state = new PdmTableDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="m-t">
                <table className="table">
                    { this._initPdmThead() }
                    {this._initPdmTbody()}
                </table>
            </div>;
        }

        public _initPdmThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>Name</th><th>Code</th><th>Data Type</th><th>Length</th><th>Precision</th><th>Primary</th><th>Foreign Key</th><th>Mandatory</th>
                </tr>
                </thead>;
        }

        public _initPdmTbody():React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>编号</td><td>FID</td><td>varchar(50) </td><td>50</td><td></td><td>√</td><td></td><td>√</td>
                </tr>
                <tr>
                    <td>资源编号</td><td>SnsC_ResouceID</td><td>varchar(50) </td><td>50</td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td>资源类型</td><td>SnsC_ResouceType</td><td>varchar(50) </td><td>50</td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td>内容</td><td>SnsC_Content</td><td>varchar(50) </td><td>50</td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td>评论发表人</td><td>SnsC_User</td><td>varchar(50) </td><td>50</td><td></td><td></td><td></td><td></td>
                </tr>
                <tr>
                    <td>回复数量</td><td>SnsC_Num</td><td>int</td><td>50</td><td></td><td></td><td></td><td></td>
                </tr>
            </tbody>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactPdmTableDomVm extends domCore.DomVm {
        WinPageObj: baseWedPage.Web.BaseWebPageVm;
        closeWinEmit();
    }

    export interface IPdmTableDomConfig {


    }

    export class PdmTableDomVm extends domCore.DomVm implements IReactPdmTableDomVm {
        public ReactType = PdmTableDomReact;

        public WinPageObj: baseWedPage.Web.BaseWebPageVm;

        public constructor(config?: IPdmTableDomConfig) {
            super();

        }

        public closeWinEmit() {
            this.emitAppEvent("win-close-btn", this.WinPageObj.UniId);
        }

    }
    export class PdmTableDomStates extends domCore.DomStates {
    }


    export class PdmTableDomProps extends domCore.DomProps<IReactPdmTableDomVm>{
    }



}


