


import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import ListBoxFile = require("./../../../../02col/02Mulite/Listbox");
import textFile = require("./../../../../02col/01single/Text");
import ListBox = ListBoxFile.ui.ListBoxReact;
import ListBoxVm = ListBoxFile.ui.ListboxVm;
import treeFile = require("./../../../../05tool/Tree");
import baseTreeFile = require("./../../../../02col/03selector/BaseTree");
import dataFile = require("./../data");
import selectorFile = require("./AppraisalTemplateUserSelectorDom");


export module AppraisalTemplateAuthUserSelectorDom {
    export class AppraisalTemplateAuthUserSelectorDomAction extends domCore.DomAction {
    }

    export class AppraisalTemplateAuthUserSelectorDomReact extends selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomReact {

        public state = new AppraisalTemplateAuthUserSelectorDomStates();

        public pSender(): React.ReactElement<any> {
            return super.pSender();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactAppraisalTemplateAuthUserSelectorDomVm extends selectorFile.AppraisalTemplateUserSelectorDom.IReactAppraisalTemplateUserSelectorDomVm { }


    export interface IAppraisalTemplateAuthUserSelectorDomConfig extends selectorFile.AppraisalTemplateUserSelectorDom.IAppraisalTemplateUserSelectorDomConfig {

    }

    export class AppraisalTemplateAuthUserSelectorDomVm extends selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomVm implements IReactAppraisalTemplateAuthUserSelectorDomVm {
        public ReactType = AppraisalTemplateAuthUserSelectorDomReact;
     

        public constructor(config?: IAppraisalTemplateAuthUserSelectorDomConfig) {
            super(config);
        }

        public save()
        {
            this.emitAppEvent("AppraisalTemplateAuthUserSelectorSave", this.UniId);

        }

    }
    export class AppraisalTemplateAuthUserSelectorDomStates extends domCore.DomStates {
    }


    export class AppraisalTemplateAuthUserSelectorDomProps extends selectorFile.AppraisalTemplateUserSelectorDom.AppraisalTemplateUserSelectorDomProps{
    }



}


