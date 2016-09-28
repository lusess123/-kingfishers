import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");

export module DiseaseCheckBoxDom {
    export class DiseaseCheckBoxDomAction extends domCore.DomAction { }

    export class DiseaseCheckBoxDomReact extends domCore.DomReact<DiseaseCheckBoxDomProps, DiseaseCheckBoxDomStates, DiseaseCheckBoxDomAction> implements domCore.IReact {
        public state = new DiseaseCheckBoxDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-medical-content">
                <div className="YSm-item clearfix">
                    <ul className="nav nav-pills">

                        {this.props.Vm.DataList.map((a) => {


                            return <li className="nav-item">
                                <input type="checkbox"  onChange={(b) => { this.props.Vm.textBoxClick(b, a) } } checked={a.isSelect == "1" ? "checked" : ""} />{a.Name }</li>
                        })
                        }


                    </ul>
                </div>
            </div>;
        }



        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IReactDiseaseCheckBoxDomVm extends domCore.DomVm {
        DataList: Data.Anomaly.IDiseaseData[];
        textBoxClick: Function;
        submit: Function;
        isfamily: string;
    }

    export interface IDiseaseCheckBoxDomConfig {
        Data: Data.Anomaly.IDiseaseData[];
        isfamily?: string;
    }

    export class DiseaseCheckBoxDomVm extends domCore.DomVm implements IReactDiseaseCheckBoxDomVm {
        public ReactType = DiseaseCheckBoxDomReact;
        public DataList: Data.Anomaly.IDiseaseData[] = [];
        public DiseaseList: string[] = [];
        public isfamily: string;
        public constructor(config?: IDiseaseCheckBoxDomConfig) {
            super();
            this.DataList = new Array<Data.Anomaly.IDiseaseData>();
            if (config) {
                this.DataList = config.Data;

                

                //if (config.isfamily == "1") {

                //    //this.DataList.map((a) => {
                //    //    if (a.Isfamilialinheritance == "0") {
                //    //        this.DataList.p
                //    //     }
                //    // })

                //    for (var i = 0; i < this.DataList.length; i++) {
                //        if (this.DataList[i].isGenetic == "0") {
                //            this.DataList.splice(i, 1);
                //        }
                //    }
                //}

                
            }

        }


        public textBoxClick(a: React.FormEvent, b: Data.Anomaly.IDiseaseData) {
            var isselect = a.target["checked"]
            if (isselect == true) {
                b.isSelect = "1";
            } else {
                b.isSelect = "0";
            }

            this.forceUpdate("");
        }

        public submit() {
            this.DiseaseList = [];
            this.DataList.forEach((a) => {
                if (a.isSelect != a.isNativeSelect) {
                    this.DiseaseList.push(a.FID + "," + a.isSelect);
                }
            })

            return this.DiseaseList;
        }
    }

    export class DiseaseCheckBoxDomStates extends domCore.DomStates { }

    export class DiseaseCheckBoxDomProps extends domCore.DomProps<IReactDiseaseCheckBoxDomVm> { }
}