import domFile = require("./../../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");

import MenuRoleTable = require("./../MenuRoleTable");
import MenuRoleTableProps = MenuRoleTable.MenuRoleTable.MenuRoleTableProps;
import MenuRoleTableStates = MenuRoleTable.MenuRoleTable.MenuRoleTableStates;
import MenuRoleTableAction = MenuRoleTable.MenuRoleTable.MenuRoleTableAction;

import EditSpanFile = require("./../../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;



import Data = require("./../Data");

export module Menu {
    export class MenuRoleReact extends domCore.DomReact<MenuRoleTableProps, MenuRoleTableStates, MenuRoleTableAction>
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


        public iterate(a: Data.Menu.IMenuSimpleData, _arry: React.ReactElement<any>[], Level: number): React.ReactElement<any>[] {

            var espanvm = new ESpanVm(
                {
                    Content: a.MenuName, ChangeEvent: (vm, ischage) => {
                        this.props.Vm.UpdateMenu(a, vm.Content)
                    }
                });

            var _arr = <tr className={a.ParentVm == undefined || a.ParentVm.IsHidden == false ? "" : "hide"}>
                <td className={this.tdclass(Level, a) } style={this.props.Vm.thstyle}>
                    <i className={this.iclass(a) } onClick={() => { this.isHideChildern(a) } }> </i>
                    <ESpan Vm={this.Em(a.MenuName, (c, b) => {
                        this.props.Vm.UpdateMenu(a, c.Content);
                    }) } children={null}/>
                    <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.props.Vm.addMenuPage(a) } }></i>
                    <i className="fa fa-times Hu-pointer" onClick={() => { this.props.Vm.deleteMenu(a) } }></i>
                </td>
                {this.props.Vm.RoleData.map((b) => {

                    return <td className= { this.isCheck(a.FID, b.FID) ? "Hs-td-checked":( b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : "")))  }>
                        <input type="checkbox" checked ={this.isCheck(a.FID, b.FID) }
                            onChange = {(c) => this.changeCheck(b, a, null, c) }
                            />
                    </td>
                }) }
            </tr>;

            _arry.push(_arr);

            Level++;


            if (a.Children) {
                a.Children.forEach((b) => {
                    b.ParentVm = a;
                    this.iterate(b, _arry, Level);
                })
            }
            if (a.ButtonList) {
                a.ButtonList.forEach((c) => {
                    c.ParentVm = a;
                    this.AddButton(c, _arry, Level);
                })
            }

            return _arry
        }


        public AddButton(BS: Data.Menu.IMenuButton, _arry: React.ReactElement<any>[], Level: number) {
            _arry.push(
                <tr className={ BS.ParentVm == undefined || BS.ParentVm.IsHidden == false ? "" : "hide"  } index={Level}>
                    <td className={"item-" + (Level + 1) + (BS.ActionType == "Add" ? " Hs-new-col" : (BS.ActionType == "Update" ? " Hs-update" : "")) }><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em(BS.ButtonName, (c, b) => {
                            this.props.Vm.UpdateMenuButton(BS, c.Content);
                        }) } />
                    </td>
                    {this.props.Vm.RoleData.map((b) => {

                        return <td className={this.isCheck(BS.FID, b.FID) ? "Hs-td-checked" : (b.ActionType == "Del" ? "hs-delete" : (BS.ActionType == "Add" ? "Hs-new-col" : (BS.ActionType == "Update" ? "Hs-update" : ""))) }>
                            <input type="checkbox"  checked ={this.isCheck(BS.FID, b.FID) } onChange = {(c) => this.changeCheck(b, null, BS, c) } /></td>
                    }) }
                </tr>)
        }



        public tdclass(Level: number, a: Data.Menu.IMenuSimpleData) {
            var classname = "Hu-item-" + (Level + 1) + (a.ActionType == "Del" ? " Hs-delete " : (a.ActionType == "Add" ? " Hs-new-col" : (a.ActionType == "Update" ? " Hs-update" : ""))) + this.props.Vm.thclass;
            return classname;
        }

        public iclass(a: Data.Menu.IMenuSimpleData) {
            var classname = a.isLeaft ? "fa fa-file-o Hu-pointer" : ("Hu-pointer fa fa-" + (a.IsHidden ? "plus-square" : "minus-square"));
            return classname;
        }

        public otherclass(b: Data.Menu.IRoleSimpleData, a: Data.Menu.IMenuSimpleData) {
            var classname = b.ActionType == "Del" || a.ActionType == "Del" ? "Hs-delete" : (a.ActionType == "Add" || b.ActionType == "Add" ? "Hs-new-col" : (a.ActionType == "Update" || b.ActionType == "Update" ? "Hs-update" : ""))
            return
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();
        }


        public isCheck(Menu: string, Role: string) {
            return this.props.Vm.fun_isCheckMenu(Menu, Role);
        }

        public isHideChildern(a: Data.Menu.IMenuSimpleData) {
            a.IsHidden = !a.IsHidden;
            this.forceUpdate();
        }



        public EditSpanEvent(vm: ESpanVm, isChange: boolean, a: Data.Menu.IMenuSimpleData) {
            if (isChange) {
                a.MenuName = vm.Content;
            }
        }


        public changeCheck(Role: Data.Menu.IRoleSimpleData, Menu: Data.Menu.IMenuSimpleData, button: Data.Menu.IMenuButton, event: React.FormEvent) {
            if (Menu != null && (Role.ActionType == "Del" || Menu.ActionType == "Del")) {

                alert("该节点已被删除!");
            } else {
                this.props.Vm.fun_changeCheck(Role, Menu, button, event);
            }
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

        //这要进行判断  看节点下面是不是 子节点 还是按钮
        //public addMenu(a: Data.Menu.IMenuSimpleData) {

        //    if (a.ActionType == "Del") {
        //        alert("该节点已被删除");
        //    } else {
        //        this.props.Vm.MenuEditData = a;
        //        //首先将菜单节点展开
        //        urlFile.Core.AkPost("/RightCloud/RightConfig/RoleexportMenu", { Menu: a.FID }, (b) => {
        //            a.Children = b.MenuUserTable.MenuData.Children;
        //            a.ButtonList = b.MenuUserTable.MenuData.ButtonList;

        //            this.forceUpdate();

        //            if (a.Children && a.Children.length > 0) {
        //                //有子节点  
        //                urlFile.Core.AkUrl.Current().openUrl("$winADDNEWMENUPAGE$" + 1 + "$", true);
        //            } else if (a.ButtonList && a.ButtonList.length > 0) {
        //                //有按钮
        //                urlFile.Core.AkUrl.Current().openUrl("$winADDNEWMENUPAGE$" + 2 + "$", true);
        //            } else {
        //                //两种情况
        //                urlFile.Core.AkUrl.Current().openUrl("$winADDNEWMENUPAGE$" + 3 + "$", true);
        //            }

        //        })
        //    }


        //    //urlFile.Core.AkUrl.Current().openUrl("$winNewNodePage$", true);
        //}
    }
}