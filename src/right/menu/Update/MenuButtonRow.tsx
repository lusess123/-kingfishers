
import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import dataFile = require("./../Data");
import menuRowFile = require("./MenuUpdateRow");

import textFile = require("./../../../02col/01single/Text");
import DetailFile = require("./../../../02col/01single/Detail");

import eventFile = require("./../../../01core/Event");

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

        //删除每一行的数据
        private fun_delButtonRow() {  
            this.props.Vm.delButtonRow();
        }

        private initDetailTextData(colName: string, legal?: string): React.ReactElement<any> {
            var _bean = new DetailFile.ui.DetailVm();
            _bean.Tag = colName;

            //var PerValue = parseInt(this.props.Vm.PreviousButton.FValue);
            //var value = PerValue * 2;
            var value = 1;
            for (var i = 0; i < this.props.Vm.RowNumber + 1; i++) {
                value = value * 2;
            }
            //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
            _bean.vmDataValueSet(value.toString());
            this.props.Vm.ButtonData[colName] = value.toString();


            return _bean.intoDom();
        }


        private initFValueDetail(): React.ReactElement<any>
        {
            var _detail = this.props.Vm.getFValueDetailVm();
            return _detail.intoDom();
           // if(this.props)
        }

        private initTextBindData(colName: string, legal?: string): React.ReactElement<any> {
            var _name = colName.toString()
            var isexcite = false;
           
            for (var vn in this.props.Vm.TextVmObjList)
            {
                var _obj = this.props.Vm.TextVmObjList[_name];
                if (_obj)
                {
                    isexcite = true;
                    _exciteBean = _obj;
                }
            }
            if (!isexcite) {
                var _exciteBean: textFile.ui.TextVm = new textFile.ui.TextVm;
                _exciteBean.Tag = colName;
                if (colName == "OrderId" && !this.props.Vm.ButtonData[colName]) {
                    this.props.Vm.ButtonData.OrderId = "0";
                }
                _exciteBean.vmDataValueSet(this.props.Vm.ButtonData[colName]);
                _exciteBean.setOriValue(this.props.Vm.ButtonData[colName]);
                _exciteBean.LegalObj.Kind = legal ? legal : "notNull";
                _exciteBean.onChangeHandle((val) => {
                    this.props.Vm.ButtonData[colName] = val;
                    return true;
                });
                this.props.Vm.TextVmObjList[_name] = _exciteBean;
            }

           
            return this.props.Vm.TextVmObjList[_name].intoDom();
        }


        public pSender(): React.ReactElement<any> {


            return <tr>
                <td>{this.props.Vm.RowNumber + 1}</td>
                <td className="hide">{this.initTextBindData("FID", " ") }</td>
                <td className="hide">{this.initTextBindData("ParentRightValue", " ") }</td>
                <td>{this.initTextBindData("FName") }</td>
                <td>{this.initTextBindData("FKey") }</td>
                <td>{this.initFValueDetail()}</td>
                <td>{this.initTextBindData("OrderId", "nonnegativeInteger") }</td>
                <td><i className="fa fa-minus-circle Hu-pointer red" onClick={(e) => { this.fun_delButtonRow() } }></i></td>
            </tr>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }




    }

    export interface ITextVmDic {
        [name: string]: textFile.ui.TextVm;
    }

    export interface IMenuButtonRowConfig
    {
        ButtonData: dataFile.Menu.IMenuButtonData;
        IsNew?: boolean;
        UniId?: string;
       // MenuRow: menuRowFile.MenuUpdateRow.MenuUpdateRowVm;
    }

    export class MenuButtonRowVm extends domCore.DomVm {
        public ReactType = MenuButtonRowReact;
        public ButtonData: dataFile.Menu.IMenuButtonData;

        public PreviousButton: dataFile.Menu.IMenuButtonData;

        public RowNumber: number;
        public MenuRow: menuRowFile.MenuUpdateRow.MenuUpdateRowVm;
        public TextVmObjList: ITextVmDic = {};
        public TextName: string[];
        public FValueDetail: DetailFile.ui.DetailVm;
        public IsNew: boolean = false;
        public UniId: string;


        public constructor(config?: IMenuButtonRowConfig) {
            super();
            if (config) {
                this.ButtonData = config.ButtonData;
                if (config.IsNew) {
                    this.IsNew = config.IsNew;
                }
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
            }
            this.listenAppEvent("modifyParentKeyValue", this.UniId, (val:string) => {
                this.modifyParentKeyValue(val);
            })


        }

        private modifyParentKeyValue(val:string)
        {
            this.TextVmObjList["ParentRightValue"].dataValueSet(val);
        }

        public legal(): boolean {
            var _res: boolean = true;
            for (var vn in this.TextVmObjList) {
                var _obj = this.TextVmObjList[vn];
                _res = _obj.legal() && _res;
            }

            _res = this.FValueDetail.legal() && _res;

            return _res;
        }

        public delButtonRow()
        {
            this.emitAppEvent("right/menu/update/MenuButtonRow", this.UniId,this.RowNumber);        
        }


        public getFValueDetailVm():DetailFile.ui.DetailVm
        {
            if (!this.FValueDetail)
            {
                this.FValueDetail = new DetailFile.ui.DetailVm();
                this.FValueDetail.vmDataValueSet(this.ButtonData.FValue);
                this.FValueDetail.setOriValue(this.ButtonData.FValue);
                this.FValueDetail.onChangeHandle((val) => {
                    this.ButtonData.FValue = val;
                    return true;
                });
            }
            return this.FValueDetail;
        }


        public getData(): dataFile.Menu.IMenuButtonData {
            var _data: dataFile.Menu.IMenuButtonData = {};
            var _Change: boolean = false;
            var fid: string = null;
            if (this.IsNew) {
                _Change = true;
            }
            for (var vn in this.TextVmObjList) {
                var txtObj = this.TextVmObjList[vn];
                //var _isChange: boolean = (txtObj.vmDataValueGet() != txtObj.getOriValue());
                //if (_isChange) {
                //    _Change = true;
                //    _data[txtObj.Tag] = txtObj.vmDataValueGet();
                //}

                txtObj.getChangeValFun((isChange, val, col) => {
                    if (isChange || this.IsNew) {
                        _Change = true;
                        _data[txtObj.Tag] = txtObj.vmDataValueGet();
                    }
                });
                if (txtObj.Tag == "FID") {
                    fid = txtObj.vmDataValueGet();
                }
            }
           

            this.FValueDetail.getChangeValFun((isChange, val, col) => {
                if (isChange || this.IsNew) {
                    _data.FValue = val;
                    _Change = true;
                }
            });

            if (_Change) {
                _data.FID = fid;
            }

            

            return _data;
        }

        public toChange()
        {
            this.IsChange = true;
            for (var n in this.TextVmObjList)
            {
                this.TextVmObjList[n].IsChange = true;
            }
            this.FValueDetail.IsChange = true;
        }
    }
    export class MenuButtonRowStates extends domCore.DomStates {
    }


    export class MenuButtonRowProps extends domCore.DomProps<MenuButtonRowVm>{
    }


}


