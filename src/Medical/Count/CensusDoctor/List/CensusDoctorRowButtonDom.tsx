﻿import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import gridRowFile = require("./CensusDoctorGridRowDom");
import buttonFile = require("./../../../../05tool/Button");

export module CensusDoctorRowButtonDom {
    export class CensusDoctorRowButtonDomAction extends domCore.DomAction {
    }

    export class CensusDoctorRowButtonDomReact extends domCore.DomReact<CensusDoctorRowButtonDomProps, CensusDoctorRowButtonDomStates, CensusDoctorRowButtonDomAction> implements domCore.IReact {

        public state = new CensusDoctorRowButtonDomStates();

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

    export interface ICensusDoctorRowButtonDomConfig {
        Row: gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm;
        UniId: string;
    }

    export class CensusDoctorRowButtonDomVm extends domCore.DomVm {
        public ReactType = CensusDoctorRowButtonDomReact;
        public Row: gridRowFile.CensusDoctorGridRowDom.CensusDoctorGridRowDomVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public UniId: string="";

        public constructor(config?: ICensusDoctorRowButtonDomConfig) {
            super();
            if (config) {
                this.Row = config.Row;
                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
                this.UniId = config.UniId;
            }
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
                    this.emitAppEvent("medical/base/CensusDoctor/rowbtnclick", this.UniId, a.Name, this.Row.RowData.FID);
                };
            });
         

        }

    }
    export class CensusDoctorRowButtonDomStates extends domCore.DomStates {
    }


    export class CensusDoctorRowButtonDomProps extends domCore.DomProps<CensusDoctorRowButtonDomVm>{
    }



}


