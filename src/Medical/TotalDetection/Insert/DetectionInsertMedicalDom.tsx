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
import RowDom = require("./MedicalRowDom")

export module DetectionInsertMedicalDom {
    export class DetectionInsertMedicalDomAction extends domCore.DomAction { }
    export class DetectionInsertMedicalDomReact extends domCore.DomReact<DetectionInsertMedicalDomProps, DetectionInsertMedicalDomStates, DetectionInsertMedicalDomAction> implements domCore.IReact {
        public state = new DetectionInsertMedicalDomStates();
        public pSender(): React.ReactElement<any> {
            var header = this.initHeader();
            var boby = this.initBody()

            return (
                <div className="YSm-table">
                    <div className="table-responsive">
                        <table  className="table table-striped table-bordered table-hover">
                            {header}
                            {boby}
                        </table>
                    </div>
                </div>
            )
        }
        public initBody(): React.ReactElement<any> {

            return (
                <tbody>
                    {
                        this.props.Vm.MedicalRowDom.map((row, index) => {
                            return row.intoDom()
                        })
                    }
                </tbody>
            )
        }
        public initHeader(): React.ReactElement<any> {
            return (
                <thead className="thead-default">
                    <tr>
                        <th>序号</th>
                        <th>异常名称</th>
                        <th>操作</th>
                    </tr>
                </thead>
            )
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }
    export interface IAonmalyData {
        FID?: string; //主键
        SimpleCode?: string; //简码
        Name?: string;  //名称
        OrderNumber?: number; //序号
        Remark?: string;//备注
    }
    export interface IDetectionInsertMedicalConfig {
        data: dataFile.DetectionData.AnomalyTemplate[];
        Unit: string;
        isedit?: boolean;
    }
    export class DetectionInsertMedicalDomVm extends domCore.DomVm {
        public ReactType = DetectionInsertMedicalDomReact;
        public RowData: dataFile.DetectionData.AnomalyTemplate[];

        public OrgRowData: dataFile.DetectionData.AnomalyTemplate[];
        public MedicalRowDom: RowDom.MedicalRowDom.MedicalRowDomVm[];

        public isedit: boolean;

        public constructor(config?: IDetectionInsertMedicalConfig) {
            super();
            this.MedicalRowDom = new Array<RowDom.MedicalRowDom.MedicalRowDomVm>()
            this.RowData = [];
            this.OrgRowData = [];
            //if (config) {
            //    this.RowData = config.data
            //    this.RowData.forEach((rowData, index) => {
            //        var config1 = { RowData: rowData, rowNumber: index, Unit: config.Unit }
            //        var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(config1);
            //        this.MedicalRowDom.push(rowVm);

            //    });
            //}

            if (config) {
                if (config.data) {
                    config.data.forEach((a) => {
                        this.OrgRowData.push(a);
                    });

                    this.isedit = config.isedit;
                }
            }
            this.initData(config);
        }

        public initData(config: any) {
            this.MedicalRowDom.length = 0;
            this.RowData = config.data;
            if (this.RowData) {
                this.RowData.forEach((rowData, index) => {
                    var config1 = { RowData: rowData, rowNumber: index, Unit: config.Unit, isedit: this.isedit }
                    var rowVm = new RowDom.MedicalRowDom.MedicalRowDomVm(config1);
                    this.MedicalRowDom.push(rowVm);
                });
                this.forceUpdate("");
            }
        }

        public getAnomalyData() {
            var s = [];
            this.RowData.forEach((a) => {
                var isDelete = true;
                this.OrgRowData.forEach((b) => {
                    if (b.FID == a.FID) isDelete = false;
                })
                if (isDelete) {
                    s.push({ FID: a.FID, Action: "Add" });
                }
            })

            this.OrgRowData.forEach((a) => {
                var isAdd = true;
                this.RowData.forEach((b) => {
                    if (b.FID == a.FID) isAdd = false;
                })
                if (isAdd) {
                    s.push({ FID: a.FID, Action: "Delete" });
                }
            })

            return s;
        }
    }
    export class DetectionInsertMedicalDomStates extends domCore.DomStates { }
    export class DetectionInsertMedicalDomProps extends domCore.DomProps<DetectionInsertMedicalDomVm>{ }
}