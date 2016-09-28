// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import domFile = require("./../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import RowFile = require("./xbgGridRow");
import buttonFile = require("./../../../05tool/Button");



export module xbgGridButtonRow {
    export class xbgGridButtonRowAction extends domCore.DomAction {
    }
    export class xbgGridButtonRowReact extends domCore.DomReact<xbgGridButtonRowProps, xbgGridButtonRowStates, xbgGridButtonRowAction> implements domCore.IReact {
        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}>
                <td colSpan="1000" className="ACT-ROW-BUTTON well ButtonBar ta1">
                    {this.createButton("删除","del","trash") }
                    {this.createButton("详情","detail","table") }
                    {this.createButton("编辑","update","edit") }
                </td>
            </tr>
        }

        private createButton(displayName: string, name: string, icon?: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.IsNoBg = true;
            btnVm.IconCss = icon;

            
            btnVm.ClickFun = () => {
                this.props.Vm.btnFunCommond(name);
            };
            return btnVm.intoDom();
        }

        protected pInstall(): void {
            super.pInstall();
            this.props.Vm.Row.RowButtonExpand.ExpandCustomFun = this.rowUpdate();
        };

        private rowUpdate() {
            var _this = this;
            return () => {
                _this.props.Vm.forceUpdate("");
            };
        }
    }
    export class xbgGridButtonRowVm extends domCore.DomVm {
        public ReactType = xbgGridButtonRowReact;
        public Row: RowFile.RoleGridRow.RoleGridRowVm;

        public btnFunCommond(name: string) {
            this.Row.RoleObj[name + "Opt"](this.Row.RowData.FID);
        }
    }
    export class xbgGridButtonRowStates extends domCore.DomStates {
    }
    export class xbgGridButtonRowProps extends domCore.DomProps<xbgGridButtonRowVm> {
    }
}
