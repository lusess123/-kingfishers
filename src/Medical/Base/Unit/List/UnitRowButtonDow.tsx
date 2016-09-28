import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import buttonFile = require("./../../../../05tool/Button");
import gridRowFile = require("./UnitGridRowDow");
import listFile = require("./UnitListPage");

import React = require("react");
import ReactDOM = require("react-dom");

export module UnitRowButtonDow {
    export class UnitRowButtonDowAction extends domCore.DomAction {
    }

    export class UnitRowButtonDowReact extends domCore.DomReact<UnitRowButtonDowProps, UnitRowButtonDowStates, UnitRowButtonDowAction> implements domCore.IReact {

        public state = new UnitRowButtonDowStates();

        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}>
                <td colSpan="1000" className="ACT-ROW-BUTTON well ButtonBar ta1">
                    {
                        this.props.Vm.BtnList.map((btn) => {
                            return btn.intoDom()
                        })
                    }
                </td>
            </tr>
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IUnitRowButtonDowConfig {
        Row: gridRowFile.UnitGridRowDow.UnitGridRowDowVm;
        UniId: string;
    }

    export class UnitRowButtonDowVm extends domCore.DomVm {
        public ReactType = UnitRowButtonDowReact;
        public Row: gridRowFile.UnitGridRowDow.UnitGridRowDowVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public UniId: string;
        public constructor(config?: IUnitRowButtonDowConfig) {
            super();
            this.BtnList = new Array<buttonFile.ui.ButtonVm>();
            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "删除";
            btnVm1.IsNoBg = true;
            btnVm1.IconCss = "trash";
            btnVm1.Name = "del";

            var btnVm2 = new buttonFile.ui.ButtonVm();
            btnVm2.DisplayName = "详情";
            btnVm2.IsNoBg = true;
            btnVm2.IconCss = "table";
            btnVm2.Name = "view";

            var btnVm3 = new buttonFile.ui.ButtonVm();
            btnVm3.DisplayName = "编辑";
            btnVm3.IsNoBg = true;
            btnVm3.IconCss = "edit";
            btnVm3.Name = "update";

            this.BtnList.push(btnVm1);
            this.BtnList.push(btnVm2);
            this.BtnList.push(btnVm3);
            if (config) {
                this.Row = config.Row;
                this.UniId = config.UniId;

                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
            }
            this.BtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.emitAppEvent("medical/base/unit/rowbtnclick", this.UniId, a.Name, this.Row.RowData.FID);
                };
            });
        }
    }
    export class UnitRowButtonDowStates extends domCore.DomStates {
    }


    export class UnitRowButtonDowProps extends domCore.DomProps<UnitRowButtonDowVm>{
    }



}


