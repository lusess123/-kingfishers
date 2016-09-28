import React = require("react");
import ReactDOM = require("react-dom");
import domFile = require("./../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import gridRowFile = require("./DetectionGridRowDom");
import buttonFile = require("./../../../05tool/Button");

export module DetectionListRowButtonDom {
    export class DetectionListRowButtonDomAction extends domCore.DomAction {
    }

    export class DetectionListRowButtonDomReact extends domCore.DomReact<DetectionListRowButtonDomProps, DetectionListRowButtonDomStates, DetectionListRowButtonDomAction> implements domCore.IReact {

        public state = new DetectionListRowButtonDomStates();

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

    export interface IDetectionListRowButtonDomConfig {
        Row: gridRowFile.DetectionRowDom.DetectionRowDomVm;
        UniId: string;
    }

    export class DetectionListRowButtonDomVm extends domCore.DomVm {
        public ReactType = DetectionListRowButtonDomReact;
        public Row: gridRowFile.DetectionRowDom.DetectionRowDomVm;
        public BtnList: buttonFile.ui.ButtonVm[];
        public UniId: string = "";

        public constructor(config?: IDetectionListRowButtonDomConfig) {
            super();
            if (config) {
                this.Row = config.Row;
                this.Row.RowButtonExpand.ExpandCustomFun = ((vm) => { this.forceUpdate("") });
                this.UniId = config.UniId;
            }
            this.BtnList = new Array<buttonFile.ui.ButtonVm>();
            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "总检";
            btnVm1.IsNoBg = true;
            btnVm1.IconCss = "trash";
            btnVm1.Name = "del";

            var btnVm2 = new buttonFile.ui.ButtonVm();
            btnVm2.DisplayName = "强制总检";
            btnVm2.IsNoBg = true;
            btnVm2.IconCss = "table";
            btnVm2.Name = "view";


            this.BtnList.push(btnVm1);
            this.BtnList.push(btnVm2);
            this.BtnList.forEach(a => {
                a.ClickFun = () => {
                    this.emitAppEvent("medical/base/anomaly/rowbtnclick", this.UniId, a.Name, this.Row.RowData.FID);
                };
            });


        }

    }
    export class DetectionListRowButtonDomStates extends domCore.DomStates {
    }


    export class DetectionListRowButtonDomProps extends domCore.DomProps<DetectionListRowButtonDomVm>{
    }



}


