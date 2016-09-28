import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import baseColumnGroup = require("./../../03form/Base/BaseColumnGroup");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");

export module ui {
    export class GridColumnGroupAction extends baseColumnGroup.ui.BaseColumnGroupAction {
    }

    export class GridColumnGroupReact extends baseColumnGroup.ui.BaseColumnGroupReact<GridColumnGroupProps, GridColumnGroupStates, GridColumnGroupAction> implements domCore.IReact {

        public state = new GridColumnGroupStates();

        public pSender(): React.ReactElement<any> {
            return null;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class GridColumnGroupVm extends baseColumnGroup.ui.BaseColumnGroupVm{
        public ReactType = GridColumnGroupReact;


    }
    export class GridColumnGroupStates extends baseColumnGroup.ui.BaseColumnGroupStates {
    }


    export class GridColumnGroupProps extends baseColumnGroup.ui.BaseColumnGroupProps<GridColumnGroupVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("GridColumnGroupVm", baseColumnGroup.ui.BaseColumnGroupVm, GridColumnGroupVm);
}


