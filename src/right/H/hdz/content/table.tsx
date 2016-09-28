import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import singleCheckBoxFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import singleCheckBox = singleCheckBoxFile.ui.SingleCheckBoxReact;
import singleCheckBoxVm = singleCheckBoxFile.ui.SingleCheckBoxVm;

export module table {
    export class tableAction extends domCore.DomAction {
    }

    interface ILeftStyle {
        left: number;
    }

    export class tableReact extends domCore.DomReact<tableProps, tableStates, tableAction> implements domCore.IReact {

        public state = new tableStates();

        private thClass(): string {
            return "acsTextC " + (this.props.Vm.IsAcsRelative ? " acsRelative acsTableTh " : "");
        }

        private thStyle(): ILeftStyle {
            return { left: (this.props.Vm.LeftNum ) };
        }

        public pSender(): React.ReactElement<any> {
            return <div className="acs-table" onScroll={(e) => { this.fun_Scroll(e); } }>
                <div className="acsRelative">{this._initTable() }</div>
            </div>;
        }

        private _initTable(): React.ReactElement<any> {
            return <table className="acs-table acs-new-table acs-table-tree">
                {this._initTableTh() }
                {this._initTableBody() }
                {this._initTableThBtn()}
            </table>
        }

        private _initTableThBtn(): React.ReactElement<any> {
            return <div className={"button-group" + (this.props.Vm.IsTableThShow ? " " : " hide") }>
                <b>{this.props.Vm.SingleCheckBox.intoDom()}已选中2个文件/文件夹</b>
                <a className="button e-default secondary" disabled>启动流程</a>
                <a className="button e-default">删除</a>
                <a className="button e-default">详情</a>
                <a className="button e-default">编辑</a>
            </div>;
        }

        private _initTableTh(): React.ReactElement<any> {
            return <thead>
                <tr className={(this.props.Vm.IsTableThShow ?" hidden":" ")}>
                    <th className={this.thClass() } style={this.thStyle() }>{this.props.Vm.SingleCheckBox.intoDom()}</th>
                    <th>菜单</th>
                    <th>权值</th>
                    <th>权限类别</th>
                    <th>图标</th>
                    <th>权值</th>
                    <th>权限类别</th>
                    <th>图标</th>
                    <th>权值</th>
                    <th>权限类别</th>
                    <th>图标</th>
                </tr>

            </thead>;
        }

        private _initTableBody(): React.ReactElement<any>{
            return <tbody>
                <tr>
                    <td className={this.thClass() } style={this.thStyle() } onClick={() => { this.fun_TClick()}}>{this.props.Vm.SingleCheckBoxList[0].intoDom()}<span>1</span></td>
                    <td className="item-1">
                        <i className="acsPointer fa fa-caret-right"></i><i className="fa fa-plus-circle"></i><span>事务</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr>
                    <td className={this.thClass() } style={this.thStyle() } onClick={() => { this.fun_TClick()}}>{this.props.Vm.SingleCheckBoxList[1].intoDom() }<span>2</span></td>
                    <td className="item-1">
                        <i className={"acsPointer fa fa-caret-down" + (this.props.Vm.IsTreeMenuFirShow ? "" : " fa-rotate-270") } onClick={() => { this.fun_TreeFirClick() } }></i><i className={"acsPointer fa fa-" + (this.props.Vm.IsTreeMenuFirShow?"minus":"plus") + "-circle"} onClick={() => { this.fun_TreeFirClick()}}></i><span>新基础信息平台</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr className={(this.props.Vm.IsTreeMenuFirShow?"":"hide")}>
                    <td className={this.thClass() } style={this.thStyle() }>{this.props.Vm.SingleCheckBoxList[2].intoDom() }</td>
                    <td className="item-2">
                        <i className={"acsPointer fa fa-caret-down" + (this.props.Vm.IsTreeMenuSecShow ? "" : " fa-rotate-270") } onClick={() => { this.fun_TreeSecClick() } }></i><i className={"acsPointer fa fa-" + (this.props.Vm.IsTreeMenuSecShow ? "minus" : "plus") + "-circle"} onClick={() => { this.fun_TreeSecClick()}}></i><span>菜单信息</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr className={(this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow ? "" : " hide")}>
                    <td className={this.thClass() } style={this.thStyle() }>{this.props.Vm.SingleCheckBoxList[3].intoDom() }</td>
                    <td className="item-3">
                        <i className="acsPointer fa fa-file-text-o"></i><span>员工信息</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr className={(this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow?"":" hide")}>
                    <td className={this.thClass() } style={this.thStyle() }>{this.props.Vm.SingleCheckBoxList[4].intoDom() }</td>
                    <td className="item-3">
                        <i className="acsPointer fa fa-file-text-o"></i><span>部门信息</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr className={(this.props.Vm.IsTreeMenuSecShow ? "" : " hide") + (this.props.Vm.IsTreeMenuFirShow ? "" : " hide")}>
                    <td className={this.thClass() } style={this.thStyle() }>{this.props.Vm.SingleCheckBoxList[5].intoDom() }</td>
                    <td className="item-3">
                        <i className="acsPointer fa fa-file-text-o"></i><span>职位信息</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr>
                    <td className={this.thClass() } style={this.thStyle() } onClick={() => { this.fun_TClick() } }>{this.props.Vm.SingleCheckBoxList[6].intoDom() }<span>3</span></td>
                    <td className="item-1">
                        <i className="acsPointer fa fa-caret-right"></i><i className="acsPointer fa fa-plus-circle"></i><span>新权限管理</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
                <tr>
                    <td className={this.thClass() } style={this.thStyle() } onClick={() => { this.fun_TClick() } }>{this.props.Vm.SingleCheckBoxList[7].intoDom() }<span>4</span></td>
                    <td className="item-1">
                        <i className="acsPointer fa fa-caret-right"></i><i className="fa fa-plus-circle"></i><span>SNS</span>
                        <a className="right"><i className="acsPointer fa fa-bars"></i><i className="acsPointer fa fa-edit"></i><i className="acsPointer fa fa-close"></i></a>
                    </td>
                    <td>$$module/T9e ng/T9_Repair</td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                    <td></td>
                    <td>业务模块</td>
                    <td>图标</td>
                </tr>
            </tbody>;
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.LeftNum = _$obj.scrollLeft();

            this.props.Vm.scrollAuto();
        }  

        private fun_TClick() {
            this.props.Vm.IsTableThShow = !this.props.Vm.IsTableThShow;
            this.forceUpdate();
        }

        private fun_TreeFirClick() {
            this.props.Vm.IsTreeMenuFirShow = !this.props.Vm.IsTreeMenuFirShow;
            this.forceUpdate();
        }

        private fun_TreeSecClick() {
            this.props.Vm.IsTreeMenuSecShow = !this.props.Vm.IsTreeMenuSecShow;
            this.forceUpdate();
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface ItableConfig {


    }

    export class tableVm extends domCore.DomVm {
        public ReactType = tableReact;

        public SingleCheckBoxList: singleCheckBoxVm[];
        public SingleCheckBox: singleCheckBoxVm=new singleCheckBoxVm();

        public LeftNum: number = 0;
        public IsAcsRelative: boolean = false;
        public IsTableThShow: boolean = false;
        public IsTreeMenuSecShow: boolean = false;
        public IsTreeMenuFirShow: boolean = false;

        public scrollAuto() {

            this.IsAcsRelative = this.LeftNum > 0;
            this.forceUpdate("");
        }


        public constructor(config?: ItableConfig) {
            super();
            this.SingleCheckBoxList = new Array<singleCheckBoxVm>();
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
            this.SingleCheckBoxList.push(new singleCheckBoxVm());
        }

    }
    export class tableStates extends domCore.DomStates {
    }


    export class tableProps extends domCore.DomProps<tableVm>{
    }



}
