
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");

import dataFile = require("./../../../Sns/Data");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export namespace Sns {
    export class NewAction extends domCore.DomAction {
    }

    export class NewReact extends domCore.DomReact<NewProps, NewStates, NewAction> implements domCore.IReact {

        public state = new NewStates();

        public pSender(): React.ReactElement<any> {

            return <div className="Hu-news-item">                                 
                    <div>
                    <img src="../lib/akCss/images/user.jpg"/>
                    <a href="">{this.props.Vm.FromUserName}</a>
                    <a>{utilFile.Core.Util.DateFormat(new Date(Date.parse(this.props.Vm.CreateDateTime.replace(/\-/g,"/"))), "hh:mm:ss ")}</a>
                    </div>
                <div><span dangerouslySetInnerHTML={{ __html: this.props.Vm.Content }}></span>
                </div>
            </div>

        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
          
        }


    }
    export class NewVm extends domCore.DomVm {
        public ReactType = NewReact;
        public NewView: dataFile.Sns.INew;

        public  DayString: string;
        public CreateDateTime: string;
        public FromUserName: string;
        public  FromUserId: string;
        public Content: string;


    }
    export class NewStates extends domCore.DomStates {
    }


    export class NewProps extends domCore.DomProps<NewVm>{
    }



}


