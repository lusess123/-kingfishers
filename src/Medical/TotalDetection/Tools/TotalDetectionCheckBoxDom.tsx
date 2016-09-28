import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import urlFile = require("./../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import Data = require("./../../Base/Anomaly/Data");
export module TotalDetectionCheckBoxDom {
    export class TotalDetectionCheckBoxDomAction extends domCore.DomAction { }

    export class TotalDetectionCheckBoxDomReact extends domCore.DomReact<TotalDetectionCheckBoxDomProps, TotalDetectionCheckBoxDomStates, TotalDetectionCheckBoxDomAction> implements domCore.IReact {
        public state = new TotalDetectionCheckBoxDomStates();
        public pSender(): React.ReactElement<any> {
            return <div className="YSm-medical-content">
                <div className="YSm-item clearfix">
                    <ul className="nav nav-pills">

                        {this.props.Vm.DataList.map((a) => {
                            return <li className="nav-item">
                                <input type="checkbox"  onChange={(b) => { this.props.Vm.textBoxClick(b, a) } }/>{a.Name }</li>
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

export class TotalDetectionCheckBoxDomVm extends domCore.DomVm implements IReactDiseaseCheckBoxDomVm {
    public ReactType = TotalDetectionCheckBoxDomReact;
    public DataList: Data.Anomaly.IDiseaseData[] = [];
    public DiseaseList: string[] = [];
    public isfamily: string;
    public constructor(config?: IDiseaseCheckBoxDomConfig) {
        super();
        this.DataList = new Array<Data.Anomaly.IDiseaseData>();
        if (config) {
            this.DataList = config.Data;
        }

    }


    public textBoxClick(a: React.FormEvent, b: Data.Anomaly.IDiseaseData) {
        var isselect = a.target["checked"]
        if (isselect == true) {
            b.isSelect = "1";
        } else {
            b.isSelect = "0";
        }
    }

    public submit() {
        this.DiseaseList = [];
        this.DataList.forEach((a) => {
            if (a.isSelect == "1") {
                this.DiseaseList.push(a.FID);
            }
        })

        return this.DiseaseList;
    }
}

export class TotalDetectionCheckBoxDomStates extends domCore.DomStates { }

export class TotalDetectionCheckBoxDomProps extends domCore.DomProps<IReactDiseaseCheckBoxDomVm> { }
}