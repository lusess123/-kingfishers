import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import PaginationFile = require("./../../../../05tool/Pagination");

import tableFile = require("./table");
import table = tableFile.table.tableReact;
import tableVm = tableFile.table.tableVm;

import shortcutFile = require("./shortCut");
import shortcut = shortcutFile.shortcut.shortcutReact;
import shortcutVm = shortcutFile.shortcut.shortcutVm;

export module mainTable {
    export class mainTableAction extends domCore.DomAction {
    }

    export class mainTableReact extends domCore.DomReact<mainTableProps, mainTableStates, mainTableAction> implements domCore.IReact {

        public state = new mainTableStates();

        public pSender(): React.ReactElement<any> {
            return <div >
                <div className="makeup"><a className="button e-default"><i className="fa fa-plus"></i>新增</a></div>
                {this.props.Vm.TableObj.intoDom() }
            </div>;
        }

        private _initPager(): React.ReactElement<any> {
            return this.props.Vm.PagerObj.intoDom();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ImainTableConfig {


    }

    export class mainTableVm extends domCore.DomVm {
        public ReactType = mainTableReact;

        public TableObj: tableVm = new tableVm();
        public ShortCutObj: shortcutVm = new shortcutVm();
        public PagerObj: PaginationFile.tool.PaginationVm;

        public IsMainTableShow: boolean = false;
        public UniId: string;

        public constructor(config?: ImainTableConfig) {
            super();
            //this.ShortCutObj.UniId = this.UniId;

            //this.listenAppEvent("_shortcut", this.UniId, (rowIndex: number) => {
            //    this.IsMainTableShow = !this.IsMainTableShow;
            //    this.forceUpdate("");
            //});

            var pagerVm = this.PagerObj = new PaginationFile.tool.PaginationVm();
            pagerVm.PageNo = 0;
            pagerVm.PageSize = 20;
            pagerVm.TotalCount = 80;

            pagerVm.PageClickEvent = (pageIndex) => {
                //this.props.Vm.loadPageData(pageIndex);
                pagerVm.PageNo = pageIndex;
                pagerVm.IsChange = true;
                pagerVm.forceUpdate("");
            }

        }

    }
    export class mainTableStates extends domCore.DomStates {
    }


    export class mainTableProps extends domCore.DomProps<mainTableVm>{
    }



}
