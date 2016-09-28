import domFile = require("./../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import menuRowFile = require("./MenuGridRow");
import buttonFile = require("./../../05tool/Button");

export module MenuGridButtonRow {
    export class MenuGridButtonRowAction extends domCore.DomAction {
    }

    export class MenuGridButtonRowReact extends domCore.DomReact<MenuGridButtonRowProps, MenuGridButtonRowStates, MenuGridButtonRowAction> implements domCore.IReact {


        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}>
                <td colSpan="1000" className="ACT-ROW-BUTTON well">
                    <div className=" ButtonBar text-left">
                    {this.createButton("删除", "del", "trash","trash") }
                    {this.createButton("详情", "detail", "table","table") }
                    {this.createButton("编辑", "update", "edit", "edit") }
                        </div>
                </td>
            </tr>
        }

        private createButton(displayName: string, name: string, icon?: string, fa?: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.IsNoBg = true;
            btnVm.IconCss = icon;
            btnVm.FaCss = fa;
            btnVm.KindCss = "btn btn-secondary btn-xs";

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
    export class MenuGridButtonRowVm extends domCore.DomVm {
        public ReactType = MenuGridButtonRowReact;
        public Row: menuRowFile.MenuGridRow.MenuGridRowVm;

        public btnFunCommond(name:string) {
            this.Row.MenuObj[name + "Opt"](this.Row.RowData.FID);
        }


    }

    export class MenuGridButtonRowStates extends domCore.DomStates {
    }


    export class MenuGridButtonRowProps extends domCore.DomProps<MenuGridButtonRowVm>{
    }



}


