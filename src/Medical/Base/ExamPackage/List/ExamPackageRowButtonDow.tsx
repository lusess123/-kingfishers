﻿import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import buttonFile = require("./../../../../05tool/Button");
import gridRowFile = require("./ExamPackageGridRowDow");
import listFile = require("./ExamPackageListPage");
import React = require("react");
import ReactDOM = require("react-dom");

export module ExamPackageRowButtonDow {
    export class ExamPackageRowButtonDowAction extends domCore.DomAction {
    }

    export class ExamPackageRowButtonDowReact extends domCore.DomReact<ExamPackageRowButtonDowProps, ExamPackageRowButtonDowStates, ExamPackageRowButtonDowAction> implements domCore.IReact {

        public state = new ExamPackageRowButtonDowStates();

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

    export interface IExamPackageRowButtonDowConfig {
        Row: gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm;
        UniId: string;
    }

    export class ExamPackageRowButtonDowVm extends domCore.DomVm {
        public ReactType = ExamPackageRowButtonDowReact;
        public Row: gridRowFile.ExamPackageGridRowDow.ExamPackageGridRowDowVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public UniId: string;

        public constructor(config?: IExamPackageRowButtonDowConfig) {
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
            if (config) {
                this.Row = config.Row;
                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
            }
            this.BtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.emitAppEvent("medical/base/exampackage/rowbtnclick", this.UniId, a.Name, this.Row.RowData.FID);
                };
            });
        }
    }
    export class ExamPackageRowButtonDowStates extends domCore.DomStates {
    }


    export class ExamPackageRowButtonDowProps extends domCore.DomProps<ExamPackageRowButtonDowVm>{
    }



}


