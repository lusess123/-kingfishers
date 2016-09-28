import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import EditSpanFile = require("./../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import pageViewFile = require("./../../../07data/PageView");

export module OrgMenu {
    export class OrgMenuAction extends domCore.DomAction {
    }

    export class OrgMenuReact extends domCore.DomReact<OrgMenuProps, OrgMenuStates, OrgMenuAction> implements domCore.IReact {

        public state = new OrgMenuStates();

        public pSender(): React.ReactElement<any> {

            var menuOrg_theader = <thead className="thead-default"><tr>
                <th className="acsWidth16"><span>菜单 / 组织机构</span></th>
                <th><span>浙江省立同德医院</span></th>
            </tr></thead>;

            var NewNodePanel = <div className={"Hm-modals-bg Hg-width Hg-max-width Hg-overflow-auto" + (this.props.Vm.IsModalShow ? " " : " hide") }>
                <div className="Hm-modals Hm-modals-shape Hg-relative ">
                    <a className="Hu-close Hu-pointer" onClick={() => this.fun_ModalClick() }><i className="fa fa-close"></i></a>
                    <div>
                        <h4>新增树节点</h4>
                        <div className="Hm-form clearfix">
                            <div className="col-lg-6 col-sm-12 col-xs-12">
                                <div className=" Hu-label"><label className="required">节点名称：</label></div>
                                <div className=" Hu-input"><input type="text" placeholder="请输入..."/></div>
                            </div>
                        </div>
                        <div className="text-center"><a className="btn btn-xs btn-primary">确定</a></div>
                    </div>
                </div>
            </div>;

            return <table className="table table-hover table-bordered table-striped Hm-table-tree">
                {menuOrg_theader}
                {this._initMenuOrgPanel() }
                {NewNodePanel}
            </table>;
        }

        public _initMenuOrgPanel(): React.ReactElement<any> {
            return <tbody>
                <tr index="1" className>
                    <td className={"Hu-item-1" + (this.props.Vm.IsTdChange ? "acs-edit-check" : "") }>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick() }></i>
                        <ESpan children={null} Vm={this.Em("报修管理") } />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_ModalClick() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td className={this.props.Vm.IsChecked ? "acs-td-checked" : " "}><input type="checkbox"  onClick={() => { this.fun_IsChagneCheck() } }/></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="Hu-item-2">
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick1() }></i>
                        <ESpan children={null} Vm={this.Em("基础信息") } />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="Hu-item-3"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("使用单位") } />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="Hu-item-4"><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("新增") } />
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="Hu-item-4"><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("详情") } />
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className="Hu-item-4"><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("编辑") } />
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="3" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") }>
                    <td className="Hu-item-3"><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("用户管理") } />
                        <i className="fa fa-plus-circle Hu-pointer" ></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="Hu-item-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("维修信息") } />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="2" className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className="Hu-item-2"><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("设备信息") } />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td className="Hu-item-1">
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("弘正采购") } />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td className="Hu-item-1">
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "会员信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td className="Hu-item-1">
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新基础信息平台" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>

                <tr index="1" >
                    <td className="Hu-item-1">
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新权限管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    <td><input type="checkbox" /></td>
                </tr>
            </tbody>;
        }
        public fun_IsChagneCheck() {
            this.props.Vm.IsChecked = !this.props.Vm.IsChecked;
            this.forceUpdate();
        }

        private fun_ModalClick() {
            this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
            this.forceUpdate();
        }

        private fun_TreeTableClick() {
            this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
            this.forceUpdate();
        }
        private fun_TreeTableClick1() {
            this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
            this.forceUpdate();
        }

        private fun_ESpanChange(ischange: boolean) {
            this.props.Vm.IsTdChange = ischange;
            this.props.Vm.forceUpdate("");
        }


        private EspanVMIndex: number = 0;
        private Em(content: string, changeEvent?: EditSpanFile.EditSpan.IChangeEvent, config?: EditSpanFile.EditSpan.IEditSpanVm): ESpanVm {
            this.EspanVMIndex++;
            if (config) {
                config.Content = content;
                if (changeEvent) {
                    config.ChangeEvent = changeEvent;
                }
            }
            else {
                config = { Content: content, ChangeEvent: changeEvent };
            }
            return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export class OrgMenuVm extends domCore.DomVm {
        public ReactType = OrgMenuReact;

        public IsTreeTableShow: boolean = false;
        public IsTreeTableShow1: boolean = false;
        public IsModalShow: boolean = false;
        public IsTreeNodeShow: boolean = false;

        public IsTdChange: boolean = false;

        public IsChecked: boolean = false;

        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        public getESpan(name: string, config: EditSpanFile.EditSpan.IEditSpanVm) {
            var _espan = this.ESpanDict[name];
            if (_espan) {
                return _espan;
            }
            else {
                var _es = this.ESpanDict[name] = new ESpanVm(config);
                return _es;
            }
        }

        public constructor()
        {
            super();
            this.MetaShowData = {
                Name: "分配菜单",
                Content: " 为组织机构分配菜单 ",
                List: ["张奇", "沈明明"]
            };
        }
    }

    export class OrgMenuStates extends domCore.DomStates {
    }


    export class OrgMenuProps extends domCore.DomProps<OrgMenuVm>{
    }

 

}
