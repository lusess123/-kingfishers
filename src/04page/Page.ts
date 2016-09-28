import domFile = require("./../01core/0Dom"); import basecolFile = require("./../02col/00core/baseCol"); import BaseColReact = basecolFile.Core.BaseColReact; import BaseColVm = basecolFile.Core.BaseColVm; import BaseColProps = basecolFile.Core.BaseColProps; import BaseColStates = basecolFile.Core.BaseColStates; import BaseColAction = basecolFile.Core.BaseColAction;

/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {

    export class PageAction extends BaseColAction {

    }
   
    export class PageReact extends BaseColReact<PageProps, PageStates, PageAction> {
    }

    export class PageProps extends BaseColProps<PageVm>{

    }

    export class PageVm extends BaseColVm {
        public  ReactType = PageReact;
        public pRegName = "Page";   
        
       
    }
    export class PageStates extends BaseColStates {




    }
}