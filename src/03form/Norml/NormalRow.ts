import baseRow = require("./../Base/BaseRow");
import iocFile = require("./../../01core/Ioc");
import domFile = require("./../../01core/0Dom");
import normalColumnFile = require("./NormalColumn");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    normalColumnFile.ui;
    export class NormalRowAction extends domFile.Core.DomAction {

    }
    export class NormalRowReact extends baseRow.ui.BaseRowReact<NormalRowProps, NormalRowStates, NormalRowAction> {


     

    }

    export class NormalRowVm extends baseRow.ui.BaseRowVm {
       public ReactType = NormalRowReact;
       protected pRegName = "NormalRow";
    }

    export class NormalRowProps extends baseRow.ui.BaseRowProps<NormalRowVm>{
        

    }
    export class NormalRowStates extends baseRow.ui.BaseRowStates {




    }
    iocFile.Core.Ioc.Current().RegisterType("Normal", baseRow.ui.BaseRowVm, NormalRowVm);
}