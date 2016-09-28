import baseColumn = require("./../Base/BaseColumn");
import domFile = require("./../../01core/0Dom");
import iocFile = require("./../../01core/Ioc");
import utilFile = require("./../../01core/Util");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {

    export class GridColumnAction extends  baseColumn.ui.BaseColumnAction {

    }

    export class GridColumnReact extends baseColumn.ui.BaseColumnReact<GridColumnProps, GridColumnStates, GridColumnAction> implements domFile.Core.IReact{
    }

    export class GridColumnVm extends baseColumn.ui.BaseColumnVm {
        public ReactType = GridColumnReact;
       protected  pRegName = "GridColumn";

    }

    export class GridColumnProps extends baseColumn.ui.BaseColumnProps<GridColumnVm>{ 
    }

    export class GridColumnStates extends baseColumn.ui.BaseColumnStates {




    }
    iocFile.Core.Ioc.Current().RegisterType("Grid", baseColumn.ui.BaseColumnVm, GridColumnVm);
}