

import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import css from "classnames";


export module ColFiterIDomItem {
    export class ColFiterIDomItemAction extends domCore.DomAction {
    }

    export class ColFiterIDomItemReact extends domCore.DomReact<ColFiterIDomItemProps, ColFiterIDomItemStates, ColFiterIDomItemAction> implements domCore.IReact {

        public state = new ColFiterIDomItemStates();

        private fLiClickFun()
        {
            this.props.Vm.checkLi();
            this.forceUpdate();
        }

        public pSender(): React.ReactElement<any> {
            return <li
                key={this.props.Vm.key}
                onClick={() => { this.fLiClickFun(); } }
                className={css("nav-item Hu-pointer ", (!this.props.Vm.IsNoCheck ? "Hz-checked" : "selected-del")) }>
                { this.props.Vm.Text }
                    </li >;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactColFiterIDomItemVm extends domCore.DomVm {
         Text: string;
         Name: string;
         IsNoCheck: boolean;
         checkLi();
    }

    export interface IColFiterIDomItemConfig {
        Text: string;
        Name: string;
        IsNoCheck?: boolean;
        UniId: string;
    }

    export class ColFiterIDomItemVm extends domCore.DomVm implements IReactColFiterIDomItemVm {
        public ReactType = ColFiterIDomItemReact;
        public Text: string;
        public Name: string;
        public IsNoCheck: boolean;


        public constructor(config?: IColFiterIDomItemConfig) {
            super();
            if (config) {
                this.Text = config.Text;
                this.Name = config.Name;
                this.IsNoCheck = config.IsNoCheck;
                this.UniId = config.UniId;
            }
        }

        public checkLi()
        {
            this.IsNoCheck = !this.IsNoCheck;
            this.emitAppEvent("clickLi-check", this.UniId, this.Name, this.IsNoCheck);
        }

    }
    export class ColFiterIDomItemStates extends domCore.DomStates {
    }


    export class ColFiterIDomItemProps extends domCore.DomProps<IReactColFiterIDomItemVm>{
    }



}


