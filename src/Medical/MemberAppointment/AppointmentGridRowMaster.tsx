import domFile = require("./../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../01core/Util");
import iocFile = require("./../../01core/Ioc");
import urlFile = require("./../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import singleCheckFile = require("./../../02col/02Mulite/SingleCheckBox");
import AppointDataFile = require("./Data");
import AppointFile = require("./AppointmentPage");

export module AppointmentGridRow {
    export class AppointmentGridRowAction extends domCore.DomAction {
    }

    export class AppointmentGridRowReact extends domCore.DomReact<AppointmentGridRowProps, AppointmentGridRowStates, AppointmentGridRowAction> implements domCore.IReact {

        public state = new AppointmentGridRowStates();

        public pSender(): React.ReactElement<any> {
            var gridRow = this.creatRow();
            return gridRow;
        }
        private createSingelCheckBox(): React.ReactElement<any> {
            return this.props.Vm.SingleCheckboxVm.intoDom();
        }

        public creatRow(): React.ReactElement<any> {
            return (
                <tr>
                    <td><i className="fa fa-square-o">{this.createSingelCheckBox() }</i><span>{this.props.Vm.RowNumber}</span></td>
                    <td>{this.props.Vm.RowData.ReservationNumber}</td>
                    <td>{this.props.Vm.RowData.MemberId}</td>
                    <td>{this.props.Vm.RowData.ExamDate}</td>
                    <td>{this.props.Vm.RowData.ExamPackage}</td>
                    <td>{this.props.Vm.RowData.ExamItem}</td>
                </tr>  
                )
        }        
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IAppointmentGridRowConfig {
        
    }

    export class AppointmentGridRowVm extends domCore.DomVm {
        public ReactType = AppointmentGridRowReact;
        public SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public RowData: AppointDataFile.Appointment.IListData = {
            FID: "",
            ReservationNumber: "预约编号",
            MemberId: "个人ID",
            ExamDate: "体检时间",
            ExamPackage: "体检套餐",
            ExamItem: "体检项目"
        };
        public AppointObj: AppointFile.AppointmentPage.AppointmentPageVm;
        public constructor(config?: IAppointmentGridRowConfig) {
            super();
        }

    }
    export class AppointmentGridRowStates extends domCore.DomStates {}
    export class AppointmentGridRowProps extends domCore.DomProps<AppointmentGridRowVm>{}



}