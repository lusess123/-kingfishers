import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import dllInfoRow = require("./DllInfoRowDom");
import dataFile = require("./Data");

export module DllInfoDom {
    export class DllInfoDomAction extends domCore.DomAction {
    }

    export class DllInfoDomReact extends domCore.DomReact<DllInfoDomProps, DllInfoDomStates, DllInfoDomAction> implements domCore.IReact {

        public state = new DllInfoDomStates();

        public pSender(): React.ReactElement<any> {
            return <div className="Hg-relative">
                {this._initPlugTable()}
            </div>;
        }

        public _initPlugTable(): React.ReactElement<any> {
            return <div className="Hm-plug-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ "width": "20rem" }}>名称</th><th style={{ "width": "10rem" }}>版本号</th><th>检查的类型</th><th style={{ "width": "10rem" }}>错误信息</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.Vm.DllInfoRowList.map((a) => { return a.intoDom(); })
                        }
                    </tbody>
                </table>
            </div>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactDllInfoDomVm extends domCore.DomVm {
        DllInfoRowList: dllInfoRow.DllInfoRowDom.DllInfoRowDomVm[];
    }

    export interface IDllInfoDomConfig {
        DllInfoRowList: dataFile.Pluginlog.DllInfoData[];
    }

    export class DllInfoDomVm extends domCore.DomVm implements IReactDllInfoDomVm {
        public ReactType = DllInfoDomReact;


        public DllInfoRowList: dllInfoRow.DllInfoRowDom.DllInfoRowDomVm[] = [];
        public DllInfoRow: dllInfoRow.DllInfoRowDom.DllInfoRowDomVm;
        public DallInfoData: dataFile.Pluginlog.DllInfoData[];
        

        public constructor(config?: IDllInfoDomConfig) {
            super();
            if (config.DllInfoRowList) {
                this.DallInfoData = config.DllInfoRowList;


                this.DallInfoData.forEach((a) => {
                    var dllInfoConfig: dllInfoRow.DllInfoRowDom.IDllInfoRowDomConfig = { Name: a.Name, ClassInfoList: a.ClassInfoList, DllError: a.Error };

                    this.DllInfoRow = new dllInfoRow.DllInfoRowDom.DllInfoRowDomVm(dllInfoConfig);

                    this.DllInfoRowList.push(this.DllInfoRow);
                })
            }
        }

    }
    export class DllInfoDomStates extends domCore.DomStates {
    }


    export class DllInfoDomProps extends domCore.DomProps<IReactDllInfoDomVm>{
    }



}


