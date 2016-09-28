
import iocFile = require("./../../01core/Ioc");
import domFile = require("./../../01core/0Dom");
import baseForm = require("./../Base/BaseForm");
import normalRowFile = require("./NormalRow");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
   
    export class NormalFormAction extends domFile.Core.DomAction {

    }

    export class NormalFormReact extends baseForm.ui.BaseFormReact<NormalFormProps, NormalFormStates, NormalFormAction>{


       

    }

    export class NormalFormVm extends baseForm.ui.BaseFormVm {
        public ReactType = NormalFormReact;
        protected  pRegName = "NormalForm";
 
    }


    export class NormalFormProps extends baseForm.ui.BaseFormProps<NormalFormVm>{

        


    }
    export class NormalFormStates extends baseForm.ui.BaseFormStates {




    }

    iocFile.Core.Ioc.Current().RegisterType("Normal", baseForm.ui.BaseFormVm, NormalFormVm);
    normalRowFile.ui;

}