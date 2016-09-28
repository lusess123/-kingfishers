
import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

import dataFile = require("./Data");
export namespace Sns {
    export class NewAction extends domCore.DomAction {
    }

    export class NewReact extends domCore.DomReact<NewProps, NewStates, NewAction> implements domCore.IReact {

        public state = new NewStates();

        public pSender(): React.ReactElement<any> {

         return   <div className="clearfix">
                    <div className="col-lg-1 col-md-1 col-sm-2 col-xs-2"><img src="http://placehold.it/80x80&amp;text=[img]"/></div>
                    <div className="col-lg-11 col-md-11 col-sm-10 col-xs-10">
                        <p><strong>Some Person said: </strong> Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.Aute in reprehenderit, dolore aliqua non est magna in labore pig pork biltong.</p>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a className="nav-link" href="">Reply</a></li>
                            <li className="nav-item"><a className="nav-link" href="">Share</a></li>
                         </ul>
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

    }
    export class NewStates extends domCore.DomStates {
    }


    export class NewProps extends domCore.DomProps<NewVm>{
    }



}


