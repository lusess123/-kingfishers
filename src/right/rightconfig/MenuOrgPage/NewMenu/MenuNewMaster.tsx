
import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import textFile = require("./../../../../02col/01single/Text");

export module MenuNewMaster {
    export class MenuNewMasterAction extends domCore.DomAction {
    }

    export class MenuNewMasterReact extends domCore.DomReact<MenuNewMasterProps, MenuNewMasterStates, MenuNewMasterAction> implements domCore.IReact {

        public state = new MenuNewMasterStates();

        public pSender(): React.ReactElement<any> {
            var _Panel;
            if (this.props.Vm.type == "All") {
                _Panel = <div className="panel-collapse">
                    <div className="Hm-workflow-tab">
                        <ul className="nav nav-tabs">
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>添加子节点</li>
                            <li className={"nav-item Hu-pointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>添加按钮</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className={"Hm-form clearfix" + (this.props.Vm.TabCurrentIndex == 0 ? "" : " hide ") }>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点名称：</label>
                                </div>
                                <div className=" Hu-input">
                                    {this.inputName() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className=" Hu-label">
                                    <label className="required" >节点权值：</label>
                                </div>
                                <div className="Hu-input">
                                    {this.inputRightValue() }
                                </div>
                            </div>
                        </div>


                        <div className={"Hm-form  clearfix" + (this.props.Vm.TabCurrentIndex == 1 ? "" : " hide ") }>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label"><label className="required" >按钮名称：</label></div>
                                <div className="Hu-input">
                                    {this.inputName() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            }
            else if (this.props.Vm.type == "Menu") {
                _Panel = <div className="panel-collapse">
                    <div className="Hm-workflow-tab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item Hu-pointer active">添加子节点</li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="Hm-form clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="Hu-label">
                                    <label className="required" >节点名称：</label>
                                </div>
                                <div className="Hu-input">
                                    {this.inputName() }
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className=" Hu-label">
                                    <label className="required" >节点权值：</label>
                                </div>
                                <div className="Hu-input">
                                    {this.inputRightValue() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            }
            else {
                _Panel =
                    <div className="panel-collapse">
                        <div className="Hm-workflow-tab">
                            <ul className="nav nav-tabs">
                                <li className="nav-item Hu-pointer active">添加按钮</li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div className="Hm-form clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="pull-left Hu-label"><label className="pull-right required" >按钮名称：</label></div>
                                    <div className="pull-left Hu-input">
                                        {this.inputName() }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
            }
            return <div>{_Panel}</div>
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
        private fun_TabsClick(index) {
            if (index == 0) {
                this.props.Vm.NameData.RowType = "Menu"
            }
            else {
                this.props.Vm.NameData.RowType = "Btn"
            }
            this.props.Vm.TabCurrentIndex = index;
            this.props.Vm.forceUpdate("");
        }
        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {
            var _bean = new textFile.ui.TextVm();
            _bean.dataValueSet(val);
            // _bean.LegalObj.Kind = legalKind;
            return _bean;
        }
        private inputName(): React.ReactElement<any> {
            var _vm = new textFile.ui.TextVm();// this.getInputVm(this.props.Vm.NameData.Name, "notNull");
            this.props.Vm.NameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.NameData.Name = str;
                return true;
            });
            return _vm.intoDom();
        }
        private inputRightValue(): React.ReactElement<any> {
            var _vm = new textFile.ui.TextVm();// this.getInputVm(this.props.Vm.NameData.RightValue, "");
            this.props.Vm.RightValueVm = _vm;
            _vm.onChangeHandle((str) => {
                this.props.Vm.NameData.RightValue = str;
                return true;
            });
            return _vm.intoDom();
        }

    }
    export interface MenuBtnData {
        Name?: string;
        RightValue?: string;
        RowType?: string;
    }
    export interface IMenuNewMasterConfig {
        rowType: string;
    }

    export class MenuNewMasterVm extends domCore.DomVm {
        public ReactType = MenuNewMasterReact;
        public type;
        public NameData: MenuBtnData;
        public NameTextVm: textFile.ui.TextVm;  //名称
        public RightValueVm: textFile.ui.TextVm;  //名称
        public TabCurrentIndex = 0;
        public constructor(config?: IMenuNewMasterConfig) {
            super();
            this.NameData = { Name: "", RowType: "Menu" }
            if (config) {
                this.type = config.rowType;
            }
        }
        public legal(): boolean {
            var _res = this.NameTextVm.legal();
            var _rr = this.NameTextVm.dataValue();
            this.NameData.Name = String(_rr);
            return _res;
        }

    }
    export class MenuNewMasterStates extends domCore.DomStates {
    }


    export class MenuNewMasterProps extends domCore.DomProps<MenuNewMasterVm>{
    }



}


