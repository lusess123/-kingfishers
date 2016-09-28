import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import buttonFile = require("./../../../../05tool/Button");
import gridRowFile = require("./CombinationExamItemGridRowDow");
import listFile = require("./CombinationExamItemListPage");

import React = require("react");
import ReactDOM = require("react-dom");

export module CombinationExamItemRowButtonDow {
    export class CombinationExamItemRowButtonDowAction extends domCore.DomAction {
    }

    export class CombinationExamItemRowButtonDowReact extends domCore.DomReact<CombinationExamItemRowButtonDowProps, CombinationExamItemRowButtonDowStates, CombinationExamItemRowButtonDowAction> implements domCore.IReact {

        public state = new CombinationExamItemRowButtonDowStates();

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

    export interface ICombinationExamItemRowButtonDowConfig {
        Row: gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm;
    }

    export class CombinationExamItemRowButtonDowVm extends domCore.DomVm {
        public ReactType = CombinationExamItemRowButtonDowReact;
        public Row: gridRowFile.CombinationExamItemGridRowDow.CombinationExamItemGridRowDowVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public ListObj: listFile.CombinationExamItemListPage.CombinationExamItemListPageVm; 

        public constructor(config?: ICombinationExamItemRowButtonDowConfig) {
            super();
            this.ListObj  =new  listFile.CombinationExamItemListPage.CombinationExamItemListPageVm(); 

            this.BtnList = new Array<buttonFile.ui.ButtonVm>();
            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "删除";
            btnVm1.IsNoBg = true;
            btnVm1.IconCss = "trash";
            var btnVm2 = new buttonFile.ui.ButtonVm();
            btnVm2.DisplayName = "详情";
            btnVm2.IsNoBg = true;
            btnVm2.IconCss = "table";
            var btnVm3 = new buttonFile.ui.ButtonVm();
            btnVm3.DisplayName = "编辑";
            btnVm3.IsNoBg = true;
            btnVm3.IconCss = "edit";
            this.BtnList.push(btnVm1);
            this.BtnList.push(btnVm2);
            this.BtnList.push(btnVm3);
            if (config) {
                this.Row = config.Row;
                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
            }
            this.BtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    var option = "";
                    if (btn.DisplayName == "删除") {
                        option = "delOpt";
                    }
                    else if (btn.DisplayName == "编辑") {
                        option = "updateOpt";
                    }
                    else {
                        option = "viewOpt";
                    }
                    this.buttonClickFun(option);
                };
            });

        }
        public buttonClickFun(name: string) {
            this.ListObj[name](this.Row.RowData.FID);
        }
    }
    export class CombinationExamItemRowButtonDowStates extends domCore.DomStates {
    }


    export class CombinationExamItemRowButtonDowProps extends domCore.DomProps<CombinationExamItemRowButtonDowVm>{
    }



}


