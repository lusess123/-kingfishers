import domFile = require("./../../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../../01core/Util");
import iocFile = require("./../../../../../01core/Ioc");
import urlFile = require("./../../../../../01core/Url");

import MenuOrgTable = require("./../MenuOrgTable");
import MenuOrgTableProps = MenuOrgTable.MenuOrgPage.MenuOrgPageProps;
import MenuOrgTableStates = MenuOrgTable.MenuOrgPage.MenuOrgPageStates;
import MenuOrgRoleTableAction = MenuOrgTable.MenuOrgPage.MenuOrgPageAction;
import Data = require("./../Data");

import EditSpanFile = require("./../../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
export module Menu {
    export class MenuOrgReact extends domCore.DomReact<MenuOrgTableProps, MenuOrgTableStates, MenuOrgRoleTableAction>
    {
        public pSender(): React.ReactElement<any> {
            return <tbody className={(this.props.Vm.IsMenuRoleBodyHide ? "hide" : "") }>
                {this.props.Vm.MenuData.map((a) => {
                    this.props.Vm._arry = [];
                    this.props.Vm.Level = 0;
                    return this.iterate(a, this.props.Vm._arry, this.props.Vm.Level);
                }) }
            </tbody>;
        }
        public isHideChildern(a: Data.Menu.IMenuSimpleData) {
            a.IsHidden = !a.IsHidden;
            this.forceUpdate();
        }
        public isCheck(Org: string, Fid: string) {
            return this.props.Vm.fun_isCheck(Org, Fid);
        }
        public delMenu(a: Data.Menu.IMenuSimpleData) {
            var flag = false;
            if (a.Children) {
                for (var num = 0; num < a.Children.length; num++) {
                    if (a.Children[num].isDelete != true) {
                        flag = true;
                        break;
                    }
                }
                if (flag) {
                    alert("先删除子节点");
                }
                else {
                    this.props.Vm.fun_delMenu(a);
                }
            } else if (a.ButtonList) {
                alert("先删除子节点");
            }
            else {
                this.props.Vm.fun_delMenu(a);
            }
        }
        public iterateBtn(a: Data.Menu.IMenuButton, isDelete:boolean, _arry: React.ReactElement<any>[], Level: number): React.ReactElement<any>[]
        {
            _arry.push(<tr><td className={ "item-" + (Level + 1) + (isDelete ? " acs-delete" :"") }>
                <i className="fa fa-square acsPointer"> </i>
                <ESpan   Vm={ new ESpanVm({ Content: a.ButtonName, ChangeEvent: (vm, ischange) => { this.props.Vm.fun_updateBtn(a, vm.Content); } }) } children={null} />
            </td>{this.props.Vm.OrgData.map((b) => {
                    return <td className={isDelete ? "acs-delete" : ""}>
                    <input type="checkbox" value={b.FID}  checked ={this.isCheck(a.Org, b.FID) }  onClick = {() => this.props.Vm.changeBtnState(a, b.FID) }/>
                </td>
            }) }</tr>);
            return _arry;
        }
        public iterate(a: Data.Menu.IMenuSimpleData, _arry: React.ReactElement<any>[], Level: number): React.ReactElement<any>[] {
               _arry.push(<tr><td className={ "item-" + (Level + 1) + (a.isDelete ? " acs-delete" : (a.FID ? "" : " acs-new-col")) }>
                    <i className={a.isLeaft ? "fa fa-file-o acsPointer" : ("acsPointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square")) } onClick={() => { this.isHideChildern(a) } }> </i>
                    <ESpan   Vm={ new ESpanVm({ Content: a.MenuName, ChangeEvent: (vm, ischange) => { this.props.Vm.fun_updateMenu(a, vm.Content); } }) } children={null} />
                    <i className="fa fa-plus-circle acsPointer"  onClick={() => { this.props.Vm.fun_AddMenu(a) } }></i>
                    <i className="fa fa-times acsPointer" onClick={() => { this.delMenu(a) } }></i>
                </td>{this.props.Vm.OrgData.map((b) => {
                    return <td className={a.isDelete ? "acs-delete" : (b.FID && a.FID ? "" : "acs-new-row") }>
                        <input type="checkbox" value={b.FID} checked ={this.isCheck(a.Org, b.FID) } onClick = {() => this.props.Vm.changeState(a, b.FID) } />
                    </td>
                }) }</tr>);
            Level++;
            if (a.IsHidden)
            { } else {
                if (a.Children) {
                    a.Children.map((b) => {
                        b.ParentVm = a;
                        this.iterate(b, _arry, Level);
                    })
                }
                if (a.ButtonList)
                {
                    a.ButtonList.map((x) => {
                        this.iterateBtn(x,a.isDelete, _arry, Level);
                    })
                }

            }
            return _arry
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
}