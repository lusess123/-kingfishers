
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import dataFile = require("./../Data");
import menuRowFile = require("./MenuNewRow");

import textFile = require("./../../../02col/01single/Text");
import DetailFile = require("./../../../02col/01single/Detail");

export module MenuButtonRow {
    export class MenuButtonRowAction extends domCore.DomAction {
    }

    export class MenuButtonRowReact extends domCore.DomReact<MenuButtonRowProps, MenuButtonRowStates, MenuButtonRowAction> implements domCore.IReact {

        public state = new MenuButtonRowStates();

        private fun_OnChange(e, fName: string) {
            var _val = e.target["value"];
            this.props.Vm.ButtonData[fName] = _val;
            this.forceUpdate();
        }

        private fun_delButtonRow() {
            this.props.Vm.MenuRow.MenuMasterObj.MenuButtonRowList = [];
            this.props.Vm.MenuRow.MenuMasterObj.MenuData.MenuButtonList.splice(this.props.Vm.RowNumber > 0 ? this.props.Vm.RowNumber : 0, 1);
            this.props.Vm.MenuRow.forceUpdate("");
        }

        private initDetailTextData(colName: string, legal?: string): React.ReactElement<any> {
            var _bean = new DetailFile.ui.DetailVm();
            _bean.Tag = colName;
            var value = 1;
            for (var i = 0; i < this.props.Vm.RowNumber; i++) {
                value = value * 2;
            }
            //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
            _bean.dataValueSet(value.toString());
            return _bean.intoDom();
        }


        private initTextBindData(colName: string, legal?: string): React.ReactElement<any> {
            var _bean = new textFile.ui.TextVm();
            _bean.Tag = colName;
            var model = this.props.Vm.ButtonData[colName];
            debugger
            if (colName == "FValue") {
                var value = 1;
                for (var i = 0; i < this.props.Vm.RowNumber; i++)
                {
                    value = value * 2;
                }
                //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
                _bean.dataValueSet(value.toString());
            } else {
                _bean.dataValueSet(this.props.Vm.ButtonData[colName]);
            }
           
           
            _bean.LegalObj.Kind = legal ? legal : "notNull";
            _bean.onChangeHandle((val) => {
                this.props.Vm.ButtonData[colName] = val;
                return true;
            });
            this.props.Vm.TextVmObjList.push(_bean);
            return _bean.intoDom();
        }

        public pSender(): React.ReactElement<any> {

            this.props.Vm.TextVmObjList = [];

            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>

                <td>{this.initTextBindData("FName") }</td>
                <td>{this.initTextBindData("FKey") }</td>
                <td>{this.initDetailTextData("FValue", "SeatLegal") }</td>
                <td>{this.initTextBindData("OrderId", "SeatLegal") }</td>
                <td><i className="fa fa-minus-circle Hu-pointer red" onClick={(e) => { this.fun_delButtonRow() } }></i></td>
            </tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }




    }
    export class MenuButtonRowVm extends domCore.DomVm {
        public ReactType = MenuButtonRowReact;
        public ButtonData: dataFile.Menu.IMenuButtonData;
        // public ModifyCols: string[] = [];

        public RowNumber: number;
        public MenuRow: menuRowFile.MenuNewRow.MenuNewRowVm;

        public TextVmObjList: textFile.ui.TextVm[];
        public legal(): boolean {
            var _res: boolean = true;
            this.TextVmObjList.forEach((n) => {

                _res = n.legal() && _res;
            });
            return _res;
        }

        public checkRow() {
            //this.TextVmObjList.forEach((txtObj) => {
            //    alert(txtObj + "  已经修改了 " + (txtObj.vmDataValueGet() != txtObj.getOriValue()));
            //});

        }
    }
    export class MenuButtonRowStates extends domCore.DomStates {
    }


    export class MenuButtonRowProps extends domCore.DomProps<MenuButtonRowVm>{
    }


}


