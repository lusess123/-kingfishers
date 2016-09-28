import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import baseColumn = require("./BaseColumn");
import PageView = require("./../07data/PageView");
/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />
import React = require("react");
import ReactDOM = require("react-dom");
export module ui {
    export class BaseColumnGroupAction extends domCore.DomAction {
    }

    export class BaseColumnGroupReact<P extends BaseColumnGroupProps<BaseColumnGroupVm>, S extends BaseColumnGroupStates,A extends BaseColumnGroupAction> extends domCore.DomReact<P,S,A> implements domCore.IReact {


        public pSender(): React.ReactElement<any> {
            return null;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }
    export class BaseColumnGroupVm extends domCore.DomVm {
        public ReactType = BaseColumnGroupReact;
        public ColumnObjList: Array<baseColumn.ui.BaseColumnVm> = new Array<baseColumn.ui.BaseColumnVm>();
        //在这里要将这里面所有的Group里面的
        public DisplayName: string = "";
        //行的配置
        public ColumGroupCofing: PageView.data.IColumnGroup;

        public Columns: Array<ColumnConfig> = new Array<ColumnConfig>();


        //是否要加个ColumnGroup的属性
        public ColumnGroup: Array<ColumnGroupConfig> = new Array<ColumnGroupConfig>();
    }
    export class BaseColumnGroupStates extends domCore.DomStates {
    }


    export class BaseColumnGroupProps<V extends BaseColumnGroupVm> extends domCore.DomProps<V>{
    }

    export class ColumnConfig {
        public DisplayName: string;
        public Name: string;
        public ControlType: string;
    }

    export class ColumnGroupConfig {
        public DisplayName: string;
        public Name: string;
        public ControlType: string;
        public ColumnLength: number;
        public Columns: Array<ColumnConfig> = Array<ColumnConfig>();
    }


}


