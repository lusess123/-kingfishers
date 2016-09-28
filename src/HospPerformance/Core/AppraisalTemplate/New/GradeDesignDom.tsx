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


export module GradeDesignDom {
    export class GradeDesignDomAction extends domCore.DomAction {
    }

    export class GradeDesignDomReact extends domCore.DomReact<GradeDesignDomProps, GradeDesignDomStates, GradeDesignDomAction> implements domCore.IReact {

        public state = new GradeDesignDomStates();

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
                                <div>{this.props.Vm.LowerScoreTextObjList[i].intoDom() } &lt; 分数 &lt; = {this.props.Vm.UpperScoreTextObjList[i].intoDom()}</div>
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

    export interface IReactGradeDesignDomVm extends domCore.DomVm {
        TextObj: TextFile.ui.TextVm;
       // UpperScoreTextObj: TextFile.ui.TextVm;
       // LowerScoreTextObj: TextFile.ui.TextVm;
       // RowList: dataFile.Data.IAppraisalGradeData[];
        UpperScoreTextObjList: TextFile.ui.TextVm[];
        LowerScoreTextObjList: TextFile.ui.TextVm[];
       // TotalScore: string;
        TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData;


    }

    export interface IGradeDesignDomConfig {
        // RowList: dataFile.Data.IAppraisalGradeData[];
        TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData;

    }

    export class GradeDesignDomVm extends domCore.DomVm implements IReactGradeDesignDomVm {
        public ReactType = GradeDesignDomReact;
        public TextObj = new TextFile.ui.TextVm;
        //public RowList: dataFile.Data.IAppraisalGradeData[] = [];
        public TemplateGradeData: dataFile.Data.IAppraisalTemplateGradeData = { TotalScore: "0", GradeList:[] };

      //  public UpperScoreTextObj: TextFile.ui.TextVm = new TextFile.ui.TextVm();
      //  public LowerScoreTextObj: TextFile.ui.TextVm = new TextFile.ui.TextVm();
        public UpperScoreTextObjList: TextFile.ui.TextVm[] = [];
        public LowerScoreTextObjList: TextFile.ui.TextVm[] = [];
        public IsFetchedData: boolean=false;
        //public TotalScore: string="0";



        public constructor(config?: IGradeDesignDomConfig) {
            super();
            if (config)
                this.init(config);
        }

        public init(config?: IGradeDesignDomConfig)
        {
            if (config && config.TemplateGradeData) {
                this.IsFetchedData = true;
                this.TemplateGradeData = config.TemplateGradeData;
                this.TemplateGradeData.GradeList.forEach(row => {
                    var upperTextVm = new TextFile.ui.TextVm();
                    upperTextVm.dataValueSet(row.UpperScore);
                    var lowerTextVm = new TextFile.ui.TextVm();
                    lowerTextVm.dataValueSet(row.LowerScore);
                    upperTextVm.onChangeHandle((val) => {
                        row.UpperScore = val;
                        return true;
                    });
                    lowerTextVm.onChangeHandle((val) => {
                        row.LowerScore = val;
                        return true;
                    });
                    this.UpperScoreTextObjList.push(upperTextVm);
                    this.LowerScoreTextObjList.push(lowerTextVm);

                });
            }
        }

        public getData()
        {
            return this.TemplateGradeData.GradeList;
        }

    }
    export class GradeDesignDomStates extends domCore.DomStates {
    }


    export class GradeDesignDomProps extends domCore.DomProps<IReactGradeDesignDomVm>{
    }



}


