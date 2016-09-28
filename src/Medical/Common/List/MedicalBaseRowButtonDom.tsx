import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import gridRowFile = require("./MedicalBaseGridRowDom");
import buttonFile = require("./../../../05tool/Button");


export module MedicalBaseRowButtonDom {
    export class MedicalBaseRowButtonDomAction extends domCore.DomAction {
    }


    export class MedicalBaseRowButtonDomReact<P extends MedicalBaseRowButtonDomProps<MedicalBaseRowButtonDomVm>, S extends MedicalBaseRowButtonDomStates, A extends MedicalBaseRowButtonDomAction> extends domCore.DomReact<P, S, A> {


        public pSender(): React.ReactElement<any> {
            return <tr className={this.props.Vm.Row.RowButtonExpand.IsExpand ? "" : "hide"}>
                <td colSpan="1000" className="ACT-ROW-BUTTON well ButtonBar">
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


    export interface IMedicalBaseRowButtonDomConfig {

        Row: gridRowFile.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm;
        UniId: string;
    }

    export class MedicalBaseRowButtonDomVm extends domCore.DomVm {
        public ReactType = MedicalBaseRowButtonDomReact;
        public Row: gridRowFile.MedicalBaseGridRowDom.MedicalBaseGridRowDomVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public UniId: string = "";

        public constructor(config?: IMedicalBaseRowButtonDomConfig) {
            super();
            if (config) {
                this.Row = config.Row;
                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
                this.UniId = config.UniId;
            }
            this.initBtnList();
        }

        protected initBtnList()
        {
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
            this.BtnList.forEach(a => {
                a.ClickFun = () => {
                    this.btnFunCommond(a.Name);
                };
            });
        }

        protected btnFunCommond(name: string) {
        }

    }
    export class MedicalBaseRowButtonDomStates extends domCore.DomStates {
    }


    export class MedicalBaseRowButtonDomProps<V extends MedicalBaseRowButtonDomVm > extends domCore.DomProps<V>{
    }


}


