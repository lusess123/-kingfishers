import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");

import TextFile = require("./../../../../02col/01single/Text");
import Text = TextFile.ui.TextReact;
import TextVm = TextFile.ui.TextVm;
import dataFile = require("./../data");


export module GradeDesignDetailDom {
    export class GradeDesignDetailDomAction extends domCore.DomAction {
    }

    export class GradeDesignDetailDomReact extends domCore.DomReact<GradeDesignDetailDomProps, GradeDesignDetailDomStates, GradeDesignDetailDomAction> implements domCore.IReact {

        public state = new GradeDesignDetailDomStates();

        public pSender(): React.ReactElement<any> {
            return <div>
                <p>总分：{this.props.Vm.TemplateGradeData.TotalScore}</p>
                {this._initTable()}
            </div>;
        }

        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover YSm-table-range">
                <thead className="thead-default">
                    <tr>
                        <th>名称</th><th>分数范围</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.Vm.TemplateGradeData.GradeList.map((row, i) => {
                        return <tr>
                            <td>{row.Name}</td>
                            <td>
                                <div> <label className="pull-left">{row.LowerScore}</label> &lt; 分数 &lt; =  <label className="pull-right">{row.UpperScore}</label> </div>
                            </td>
                        </tr>
                    })
                    }
                </tbody>
            </table>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGradeDesignDetailDomVm extends domCore.DomVm {
     
        TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData;


    }

    export interface IGradeDesignDetailDomConfig {
        TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData;

    }

    export class GradeDesignDetailDomVm extends domCore.DomVm implements IReactGradeDesignDetailDomVm {
        public ReactType = GradeDesignDetailDomReact;
        public TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData = { TotalScore: "0", GradeList: [] };
        public IsFetchedData: boolean = false;

        public constructor(config?: IGradeDesignDetailDomConfig) {
            super();
            if (config)
                this.init(config);
        }

        public init(config?: IGradeDesignDetailDomConfig)
        {
            if (config && config.TemplateGradeData) {
                this.TemplateGradeData = config.TemplateGradeData;
                };
            
        }

    }
    export class GradeDesignDetailDomStates extends domCore.DomStates {
    }


    export class GradeDesignDetailDomProps extends domCore.DomProps<IReactGradeDesignDetailDomVm>{
    }



}


