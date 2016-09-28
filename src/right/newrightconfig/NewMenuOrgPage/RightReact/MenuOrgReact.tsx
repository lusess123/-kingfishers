import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import MenuOrgTable = require("./../MenuOrgTable");
import MenuOrgTableProps = MenuOrgTable.MenuOrgPage.MenuOrgPageProps;
import MenuOrgTableStates = MenuOrgTable.MenuOrgPage.MenuOrgPageStates;
import MenuOrgRoleTableAction = MenuOrgTable.MenuOrgPage.MenuOrgPageAction;
import Data = require("./../Data");

import EditSpanFile = require("./../../../../05tool/EditSpan");
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
            //this.exportMenu(a);
            this.props.Vm.MenuOrgexport(a);
        }
        
        public exportMenu(a: Data.Menu.IMenuSimpleData) {
            a.IsHidden = !a.IsHidden;
            this.forceUpdate();
        }

        public isCheck(Org: string, Fid: string) {            
            return this.props.Vm.fun_isCheck(Org, Fid);
        }

        public delMenu(a: Data.Menu.IMenuSimpleData) {
            var flag = false;
            urlFile.Core.AkPost("/RightCloud/RightConfig/CheckHasChild", { MenuID: a.FID }, (b) => {
                if (b) {
                    alert("先删除子节点")
                } else {
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
                    }
                    //else if (a.ButtonList) {
                    //    alert("先删除子节点");
                    //}
                    else {
                        this.props.Vm.fun_delMenu(a);
                    }
                }
            })

        }

        public iterateBtn(a: Data.Menu.IMenuButton, isDelete: boolean, _arry: React.ReactElement<any>[], Level: number): React.ReactElement<any>[] {
            _arry.push(<tr className={a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide"  }><td className={ "Hu-item-" + (Level + 1) + (isDelete ? " Hs-delete" : "") + (a.ActionType == "Add" ? " Hs-new-row " : (a.ActionType == "Update" ? " Hs-update " : " ")) }>
                <i className="fa fa-square Hu-pointer"> </i>
                <ESpan   Vm={ this.Em(a.ButtonName, (c, b) => {
                    this.props.Vm.fun_updateBtn(a, c.Content);
                }) } children={null} />
            </td>{this.props.Vm.OrgData.map((b) => {
                    return <td className={this.isCheck(a.FID, b.FID) ? "Hs-td-checked" : (isDelete ? "Hs-delete" : (a.ActionType == "Update" ? "Hs-update" : (a.ActionType == "Add" ? "Hs-new-row" : ""))) }>
                    <input type="checkbox" value={b.FID}  checked ={this.isCheck(a.FID, b.FID) }  onChange = {(c) => this.changeCheck(b, null, a, c) }/>
                </td>
            }) }</tr>);
            return _arry;
        }

        public iterate(a: Data.Menu.IMenuSimpleData, _arry: React.ReactElement<any>[], Level: number): React.ReactElement<any>[] {
            _arry.push(
                <tr className={a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide" }>
                    <td className={ "Hu-item-" + (Level + 1) + (a.isDelete ? " Hs-delete" : (a.ActionType == "Add" ? " Hs-new-row " : (a.ActionType == "Update" ? " Hs-update " : " "))) }>

                        <i className={a.isLeaft ? "fa fa-file-o Hu-pointer" : ("Hu-pointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square")) } onClick={() => { this.isHideChildern(a) } }> </i>

                        <ESpan   Vm={this.Em(a.MenuName, (c, b) => {
                            this.props.Vm.fun_updateMenu(a, c.Content);
                        }) } children={null} />

                        <i className="fa fa-plus-circle Hu-pointer"  onClick={() => { this.props.Vm.fun_AddMenu(a) } }></i>


                        <i className="fa fa-times Hu-pointer" onClick={() => { this.delMenu(a) } }></i>


                    </td>{this.props.Vm.OrgData.map((b) => {
                        return <td className={this.isCheck(a.FID, b.FID)?"Hs-td-checked" :(a.isDelete?"Hs-delete": (a.ActionType == "Add"?" Hs-new-row ": (a.ActionType == "Update"?" Hs-update ": " "))) }>

                            <input type="checkbox" value={b.FID} checked ={this.isCheck(a.FID, b.FID) } onChange = {(c) => this.changeCheck(b, a, null, c) } />

                        </td>
                    }) }</tr>);

            Level++;

            if (a.Children) {
                a.Children.map((b) => {
                    b.ParentVm = a;
                    this.iterate(b, _arry, Level);
                })
            }
            if (a.ButtonList) {
                a.ButtonList.map((x) => {
                    x.ParentVm = a;
                    this.iterateBtn(x, a.isDelete, _arry, Level);
                })
            }


            return _arry
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
            return this.props.Vm.getESpan("orgname" + this.EspanVMIndex, config);
        }

        public changeCheck(Org: Data.Menu.IGroupSimpleData, Menu: Data.Menu.IMenuSimpleData, button: Data.Menu.IMenuButton, event: React.FormEvent) {
            if (Menu != null && Menu.ActionType == "Del") {
                alert("该节点已被删除");
            } else {
                this.props.Vm.fun_changeCheck(Org, Menu, button, event);
                //this.forceUpdate();
            }
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }
    }
}