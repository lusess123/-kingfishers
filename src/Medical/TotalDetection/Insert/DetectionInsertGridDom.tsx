import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import dataFile = require("./../data");
import pageFile = require("./DetectionInsertPage");
import gridBodyDomFile = require("./detactionInsertGridBodyDom");
export module DetectionInsertGridDom {
    export class DetectionInsertGridDomAction extends domCore.DomAction { }
    export class DetectionInsertGridDomReact extends domCore.DomReact<DetectionInsertGridDomProps, DetectionInsertGridDomStates, DetectionInsertGridDomAction> implements domCore.IReact {
        public state = new DetectionInsertGridDomStates();
        public pSender(): React.ReactElement<any> {
            var header = this.initHeader();
           // var body = this.initBody();
            return (
                <table className="ui-table">
                    {header}
                    {this._tDom(this.props.Vm.gridBodyDomObj, { nullNode : <span>正在载入...</span>})}
                </table>
                )
        }
        public initHeader(): React.ReactElement<any> {
            return (
                <thead>
                    <tr>
                        <th>项目</th>
                        <th>子项</th>
                        <th>结果</th>
                        <th>单位</th>
                        <th>阳性</th>
                        <th>指示</th>
                        <th>上限</th>
                        <th>下限</th>
                        <th>附件</th>
                    </tr>
                </thead>
                )
        }
       
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
          
    }
    export interface IDetectionGridConfig {
        data: dataFile.DetectionData.IExamineResult[];
    }
    export class DetectionInsertGridDomVm extends domCore.DomVm {
        public ReactType = DetectionInsertGridDomReact;
        public tableData: IDetectionGridConfig;
        public gridDomObj: pageFile.DetectionInsertPage.DetectionInsertPageVm;
        public gridBodyDomObj: gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm;

        public ListData: dataFile.DetectionData.IExamineResult[] = [];

        public RowList: Array<gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm>;
        public constructor(config?: IDetectionGridConfig) {
            super();
            if (config) {
                this.gridBodyDomObj = new gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm(config);
                this.RowList = new Array<gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm>();
                this.ListData = config.data;
                this.ListData.forEach((rowdata, index) => {
                    var rowVm = new gridBodyDomFile.DetectionInsertGridBodyDom.DetectionInsertGridBodyDomVm(config);
                    this.RowList.push(rowVm);
                });
            }
        }
    }
    export class DetectionInsertGridDomStates extends domCore.DomStates { }
    export class DetectionInsertGridDomProps extends domCore.DomProps<DetectionInsertGridDomVm>{ }
}