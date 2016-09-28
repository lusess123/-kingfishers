
import domFile = require("./../../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../../01core/Util");
import iocFile = require("./../../../../../01core/Ioc");
import urlFile = require("./../../../../../01core/Url");
import textFile = require("./../../../../../02col/01single/Text");

export module MenuNewMaster {
    export class MenuNewMasterAction extends domCore.DomAction {
    }

    export class MenuNewMasterReact extends domCore.DomReact<MenuNewMasterProps, MenuNewMasterStates, MenuNewMasterAction> implements domCore.IReact {

        public state = new MenuNewMasterStates();

        public pSender(): React.ReactElement<any> {
            var _Panel;
            if (this.props.Vm.type == "All") {
                _Panel = <div>
                    <ul className="acs-tabs-title">
                        <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 0 ? " active" : " ") } onClick={() => { this.fun_TabsClick(0) } }>添加子节点</li>
                        <li className={"acsPointer" + (this.props.Vm.TabCurrentIndex == 1 ? " active" : " ") } onClick={() => { this.fun_TabsClick(1) } }>添加按钮</li>
                    </ul>
                    <div className="acs-tabs-content">
                        <div>
                            <div className="acs-form clearfix">
                                <div className="large-6 small-12 columns">
                                    <div className="columns acs-lable"><label className="right required" >{(this.props.Vm.TabCurrentIndex == 0 ? "节点" : "按钮") }名称：</label></div>
                                    <div className="columns acs-input">
                                        {this.inputName() }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            }
            else if (this.props.Vm.type == "Menu") {
                _Panel = 
                    <div>
                    <ul className="acs-tabs-title">
                        <li className="acsPointer active">添加子节点</li>
                    </ul>
                        <div className="acs-tabs-content">
                            <div>
                                <div className="acs-form clearfix">
                                    <div className="large-6 small-12 columns">
                                    <div className="columns acs-lable"><label className="right required" >节点名称：</label></div>
                                        <div className="columns acs-input">
                                            {this.inputName() }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
            }
            else  {
                _Panel =  <div>
                    <div className="acs-tabs-content">
                        <div>
                            <ul className="acs-tabs-title">
                                <li className="acsPointer active">添加按钮</li>
                            </ul>
                            <div className="acs-form clearfix">
                                <div className="large-6 small-12 columns">
                                    <div className="columns acs-lable"><label className="right required" >按钮名称：</label></div>
                                    <div className="columns acs-input">
                                        {this.inputName() }
                                    </div>
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
            if (index == 0)
            {
                this.props.Vm.NameData.RowType ="Menu"
            }
            else
            {
                this.props.Vm.NameData.RowType = "Btn"
            }
            this.props.Vm.TabCurrentIndex = index;
            this.props.Vm.forceUpdate("");
        }
        private getInputVm(val: string, legalKind: string, fun?: Function): textFile.ui.TextVm {
                var _bean = new textFile.ui.TextVm();
                _bean.dataValueSet(val);
                _bean.LegalObj.Kind = legalKind;
                return _bean;
        }
        private inputName(): React.ReactElement<any> {
            var _vm = this.getInputVm(this.props.Vm.NameData.Name, "notNull");
            this.props.Vm.NameTextVm = _vm;
            _vm.onChangeHandle((str) => {
                debugger
                this.props.Vm.NameData.Name = str;
                return true;
            });
            return _vm.intoDom();
        }

    }
    export interface MenuBtnData
    {
        Name?: string;
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
        public TabCurrentIndex = 0;
        public constructor(config?:IMenuNewMasterConfig) {
            super();
            this.NameData = { Name: "", RowType:"Menu"}
            if (config)
            {
                this.type = config.rowType;
            }
        }
        public legal(): boolean {
            var _res = this.NameTextVm.legal();
            var _rr = this.NameTextVm.dataValue();
            this.NameData.Name = String( _rr);
            return _res;
        }

    }
    export class MenuNewMasterStates extends domCore.DomStates {
    }


    export class MenuNewMasterProps extends domCore.DomProps<MenuNewMasterVm>{
    }



}


