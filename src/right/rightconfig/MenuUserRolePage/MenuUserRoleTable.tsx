import domFile = require("./../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import Data = require("./Data");
import Data2 = require("./../Data");

import pageViewFile = require("./../../../07data/PageView");

import EditSpanFile = require("./../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import MenuUserReact = require("./RightReact/MenuUserReact");
import MenuUserHeadReact = require("./RightReact/MenuUserHeadReact");
import MenuRoleReact = require("./RightReact/MenuRoleReact");
import MenuRoleHeadReact = require("./RightReact/MenuRoleHeadReact");
import MenuRoleButtonReact = require("./RightReact/MenuRoleButton");
import MainDom = require("./../MainDom");

export module MenuUserRoleTable {

    export class MenuUserRoleTableAction extends domCore.DomAction { }

    export interface ILeftStyle {
        left: number;
    }

    export class MenuUserRoleTableReact extends domCore.DomReact<MenuUserRoleTableProps, MenuUserRoleTableStates, MenuUserRoleTableAction> implements domCore.IReact {
        public state = new MenuUserRoleTableStates();
        public pSender(): React.ReactElement<any> {
            return <div>名称为: MenuUserRoleTable的组件</div>;
        }

        protected pComponentDidMount() { super.pComponentDidMount(); }
    }

    export interface IMenuUserRoleTableConfig {
        RoleData: Data.Menu.IRoleSimpleData[];
        MenuData: Data.Menu.IMenuSimpleData[];
        UserData: Data.Menu.IUserSimpleData[];
        UserRoleData: Data.Menu.IUserRoleSimpleData[];
        Role_Menu: Data2.Relation.IRoleMenu[];
        Role_User: Data2.Relation.IRoleUser[];
        Menu_Group: MainDom.MainDom.GroupData;
        Unid?: string;
    }

    export class MenuUserRoleTableVm extends domCore.DomVm {
        public ReactType = MenuUserRoleTableReact;
        public MenuRoleName = "";
        public Unid = "";
        public rMenuUserSender() {
            return this.intoDomR(MenuUserReact.Menu.MenuUserReact);
        }
        public rMenuUserHeadSender() {
            return this.intoDomR(MenuUserHeadReact.Menu.MenuUserHeadReact);
        }
        public rMenuRoleSender() {
            return this.intoDomR(MenuRoleReact.Menu.MenuRoleReact);
        }

        public rMenuRolebuttonSender() {
            return this.intoDomR(MenuRoleButtonReact.Menu.MenuRoleButtonReact);
        }

        public forceUpdateMenuUser(val: string, callback?: () => any) {
            this.IsChange = true;
            this.pGetEmit("React").emit("forceUpdate_MenuUser", val, callback);
        }
        //更新按钮
        public forceUpdateMEnuRoleButton(val: string, callback?: () => any) {
            this.IsChange = true;
            this.pGetEmit("React").emit("forceUpdate_MenuRoleButton", val, callback);
        }

        public forceUpdateRoleData(val: string, callback?: () => any) {
            this.IsChange = true;
            this.pGetEmit("React").emit("forceUpdate_RoleData", val, callback);
        }


        public rMenuRoleheadSender() {
            return this.intoDomR(MenuRoleHeadReact.Menu.MenuRoleHeadReact);
        }
        public thclass: string = "";
        public thstyle: ILeftStyle;
        public UserEspeList: EditSpanFile.EditSpan.EditSpanVm[];
        public constructor(config?: IMenuUserRoleTableConfig) {
            super();
            if (config) {
                this.RoleData = config.RoleData;
                this.MenuData = config.MenuData;
                this.GroupData = config.Menu_Group;
                if (config.UserData.length > 0) {
                    this.UserEspeList = new Array<EditSpanFile.EditSpan.EditSpanVm>();
                    config.UserData.map((a) => {
                        debugger
                        var data = new EditSpanFile.EditSpan.EditSpanVm(
                            {
                                Content: a.UserName,
                                ChangeEvent: (vm, d) => { this.UpdateUser(a, vm.Content) }
                            });

                        this.UserEspeList.push(data);
                        if (a.UserSign.length > 10) {
                            a.UserSign = a.UserSign.substr(0, 10) + ".."
                        }
                    })
                }
                this.UserData = config.UserData;
                this.UserRoleData = config.UserRoleData;
                this.RoleMenu = config.Role_Menu;
                this.RoleUser = config.Role_User;

                this.Unid = config.Unid;
            }
        }
        //--------------方法------------------------------------
        public addRole(obj: Data.Menu.RoleActorData) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, (data) => {
                if (data) {
                    this.RoleData.unshift({ FID: data, RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "Add" });
                    this.IsChange = true;
                    this.fun_isChange();
                    this.forceUpdate("");
                }
            });
        }

        public _addRole(obj: Data.Menu.UserRoleActorData) {
            this.UserRoleData.unshift({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "Add" });
            this.changeEm();
            this.fun_isChange();
            this.forceUpdate("");
        }

        public addUser(obj: Data.Menu.UserActorData) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, (data) => {
                if (data) {

                    //this.UserData.unshift({ FID: data, UserName: obj.UserName, UserSign: obj.UserName, ActionType: "Add" });
                    var userdata = { FID: data, UserName: obj.UserName, UserSign: obj.UserSign, ActionType: "Add" };
                    this.UserData.unshift(userdata);
                    var data1 = new EditSpanFile.EditSpan.EditSpanVm(
                        {
                            Content: userdata.UserName,
                            ChangeEvent: (vm, d) => { this.UpdateUser(userdata, vm.Content) }
                        });

                    this.UserEspeList.unshift(data1);
                    this.UserEspeList.forEach((a) => {
                        a.IsChange = true;
                    })
                    this.fun_isChange();
                    this.forceUpdate("");
                }
            })
        }

        public addMenu(name: any) {

            urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, (data) => {
                if (data) {
                    var newmenu = { FID: data, ParentId: this.MenuEditData.FID, MenuName: name.MenuName, isParent: false, isLeaft: true, ActionType: "Add", RightValue: name.MenuValue };

                    this.MenuEditData.isLeaft = false;
                    this.MenuEditData.IsHidden = false;
                    this.MenuEditData.isParent = true;
                    if (this.MenuEditData.Children == undefined) {
                        this.MenuEditData.Children = [];
                    }
                    this.MenuEditData.Children.unshift(newmenu);
                    this.ischage = true;
                    this.fun_isChange();
                    this.forceUpdate("");
                }
            })
        }

        public addButton(name: string) {

            urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, (data) => {
                if (data) {
                    var button = { FID: data, ParentId: this.MenuEditData.RightValue, ButtonName: name, ActionType: "Add" };
                    this.MenuEditData.isLeaft = false;
                    this.MenuEditData.IsHidden = false;
                    this.MenuEditData.isParent = true;
                    if (this.MenuEditData.ButtonList == undefined) {
                        this.MenuEditData.ButtonList = [];
                    }
                    this.MenuEditData.ButtonList.unshift(button);
                    this.fun_isChange();
                    this.forceUpdate("");
                }
            });
        }

        public addMenuPage(a: Data.Menu.IMenuSimpleData) {
            //TODO:点击增加按钮的时候 不能将节点张开
            if (a.ActionType == "Del") {
                alert("该节点已经被删除！")
            } else {
                this.exportMenu(a);

                this.MenuEditData = a;

                this.forceUpdate("");
                if (a.Children && a.Children.length > 0) {
                    //有子节点  
                    urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 1 + "$", true);
                } else if (a.ButtonList && a.ButtonList.length > 0) {
                    //有按钮
                    urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 2 + "$", true);
                } else {
                    //两种情况
                    urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 3 + "$", true);
                }
            }
        }

        public fun_isCheckMenu(Menu: string, Role: string) {
            var ischeck = false;
            this.RoleMenu.map((a) => {
                if (a.Menu == Menu && a.Role == Role) {
                    ischeck = true;
                    return false;
                }
            })
            this.fun_isChange();
            return ischeck;
        }

        public fun_isCheckUser(Role: string, User: string) {
            var ischeck = false;
            this.RoleUser.map((a) => {
                if (a.Role == Role && a.User == User) {
                    ischeck = true;
                    return false;
                }
            })
            this.fun_isChange();
            return ischeck;
        }

        public fun_isCheck(Ids: string, Id: string) {
            if (Ids == null || Ids == undefined) {
                return false;
            }
            else {
                var strs = Ids.split(",");

                for (var i = 0; i < strs.length; i++) {
                    if (strs[i] == Id) {
                        return true;
                    }
                }
                return false;
            }
        }

        public OperateData: string[] = [];

        public changeState(a: Data.Menu.IUserSimpleData, Id: string) {
            var index = a.User.indexOf(Id);
            if (index > -1) {
                if (index == 0) {
                    a.User = a.User.replace(Id, "");
                }
                else {
                    a.User = a.User.replace("," + Id, "");
                }
            }
            else {
                if (a.User == null || a.User == undefined || a.User == "") {
                    a.User = Id;
                }
                else {
                    a.User = a.User + "," + Id;
                }
            }
            var operatename = "ck" + a.UserName;
            var index = this.OperateData.indexOf(operatename);
            if (index > -1) {
                this.OperateData.splice(index, 1);
            }
            else {
                this.OperateData.push(operatename);
            }
            if (this.OperateData.length > 0) {
                this.updateFlag = true;
            }
            else {
                this.updateFlag = false;
            }
            this.fun_isChange();
            this.forceUpdate("");
        }

        public iterationdelete(b: Data.Menu.IMenuSimpleData, p?: Data.Menu.IMenuSimpleData): Data.Menu.IMenuSimpleData {

            if (!p)//删除第一节点的情况下
            {

                p = { FID: "", MenuName: "", isParent: true, Children: [] };
                p.Children = this.MenuData;
            }

            for (var i = 0; i < p.Children.length; i++) {
                if (p.Children[i].MenuName == b.MenuName) {
                    if (p.Children[i].ActionType == "Add") {
                        p.Children.splice(i, 1);
                    } else if (p.Children[i].ActionType == "Del") {
                        p.Children[i].ActionType = "";
                    } else {
                        p.Children[i].ActionType = "Del";
                    }
                }
                //应该 在这里判断是否有按钮
                if (p.Children[i].Children) {
                    return this.iterationdelete(b, p.Children[i]);
                }
            }

            // else {
            //    //暂时 只有字节点  没有判断下面是否有按钮
            //    for (var i = 0; i < p.Children.length; i++) {
            //        if (p.Children[i].CODE_TEXT == b.CODE_TEXT) {
            //            if (p.Children[i].ActionType == "add") {
            //                p.Children.splice(i, 1);
            //                break
            //            } else if (p.Children[i].ActionType == "delete") {
            //                p.Children[i].ActionType = "";
            //            } else {
            //                p.Children[i].ActionType = "delete";
            //            }
            //            break;
            //        } 

            //        if (p.Children[i].Children) {
            //            return this.iterationdelete(b, p.Children[i]);
            //        }
            //    }
            //}




        }

        public delRole(a: Data.Menu.IRoleSimpleData) {
            for (var i = 0; i < this.RoleData.length; i++) {
                if (a.RoleSign == this.RoleData[i].RoleSign) {
                    this.RoleData.splice(i, 1);
                    break;
                }
            }
            this.fun_isChange();
            this.forceUpdate("");
        }

        public fun_delRole(a: Data.Menu.IRoleSimpleData) {
            // this.props.Vm.delRole(a);
            //if (a.isDelete == undefined) {
            //    a.isDelete = true;
            //} else {
            //    a.isDelete = !a.isDelete;
            //}

            if (!a.ActionType || a.ActionType == "Update") {
                a.ActionType = "Del"
            } else if (a.ActionType == "Add") {
                for (var i = 0; i < this.RoleData.length; i++) {
                    if (this.RoleData[i].RoleName == a.RoleName) {
                        this.RoleData.splice(i, 1);
                        break;
                    }
                }
            } else if (a.ActionType == "Del") {
                a.ActionType = "";
            }
            this.fun_isChange();
            this.forceUpdate("");
        }

        public deleteMenu(a: Data.Menu.IMenuSimpleData) {
            urlFile.Core.AkPost("/RightCloud/RightConfig/CheckHasChild", { MenuID: a.FID }, (b) => {

                if (b) {
                    alert("先删除子节点");
                    return false;
                } else {
                    //如果是增加的话 那就删除
                    if (a.ActionType == "Add") {
                        for (var i = 0; i <= a.ParentVm.Children.length; i++) {
                            if (a.ParentVm.Children[i].MenuName == a.MenuName) {
                                a.ParentVm.Children.splice(i, 1);
                            }
                        }
                    } else if (a.ActionType == "Del") {
                        a.ActionType = "";
                    } else if (!a.ActionType || a.ActionType == "") {
                        a.ActionType = "Del";
                    }

                    this.fun_isChange();
                    this.ischage = true;
                    //this.IsChange = true;
                    this.forceUpdate("");
                }

            })
        }

        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        //------更新------------------------
        public UpdateRole(a: Data.Menu.IRoleSimpleData, b: string) {
            if (a.ActionType == "Del") {
                alert("该节点已经被删除！")

            } else {
                if (a.ActionType != "Add") {
                    if (a.OriginalName == b) {
                        a.ActionType = "";
                    } else if (b != a.OriginalName) {
                        a.ActionType = "Update";
                    }
                }
                a.RoleName = b;
                this.IsMulit = true;
            }
            this.fun_isChange();
            this.forceUpdate("");
            this.forceUpdateRoleData("");
        }

        public UpdateMenu(a: Data.Menu.IMenuSimpleData, b: string) {

            if (a.ActionType == "Del") {
                alert("该节点已经被删除！")
            } else {
                debugger
                if (a.ActionType != "Add") {
                    if (a.OriginalName == b) {
                        a.ActionType = "";
                    } else if (b != a.OriginalName) {
                        a.ActionType = "Update";
                    }
                }
                a.MenuName = b;
                this.IsMulit = true;

            }
            this.IsChange = true;
            this.fun_isChange();
            this.forceUpdate("");
            this.forceUpdateMEnuRoleButton("");
        }

        public UpdateMenuButton(a: Data.Menu.IMenuButton, b: string) {

            if (a.ActionType == "Del") {
                alert("该按钮已经被删除！")
            } else {

                if (a.ActionType != "Add") {
                    if (b == a.OriginalName) {
                        a.ActionType = "";
                    } else if (b != a.OriginalName) {
                        a.ActionType = "Update";
                    }
                }
                a.ButtonName = b;
            }
            this.IsChange = true;
            this.fun_isChange();
            this.forceUpdate("");
        }

        public UpdateUser(a: Data.Menu.IUserSimpleData, b: string) {

            if (a.ActionType == "Del") {
                alert("该节点已经被删除！")

            } else {

                if (a.ActionType != "Add") {
                    //
                    if (a.OriginalName == b) {
                        a.ActionType = "";
                    } else if (a.OriginalName != b) {
                        a.ActionType = "Update";
                    }
                }
                a.UserSign = b;
            }
            this.fun_isChange();
            this.forceUpdate("");
        }

        //展开节点
        public exportMenu(a: Data.Menu.IMenuSimpleData) {
            //urlFile.Core.AkPost("/RightCloud/RightConfig/RoleexportMenu", { Menu: a.FID }, (b) => {
            //    if (b.MenuUserTable.MenuData.Children) {
            //        a.Children = b.MenuUserTable.MenuData.Children;
            //    }

            //    if (b.MenuUserTable.MenuData.ButtonList) {
            //        a.ButtonList = b.MenuUserTable.MenuData.ButtonList;
            //    }
            //    this.forceUpdate("");
            //})
        }

        //选中checkbox的时候发生的事件
        public fun_changeCheck(Role: Data.Menu.IRoleSimpleData, Menu: Data.Menu.IMenuSimpleData, button: Data.Menu.IMenuButton, event: React.FormEvent) {
            var data: Data.Menu.IGrantData = { Key: "", NewKey: "", NewRightIds: [] = [], RightGrantType: "", RightIds: [] = [] };

            if (Menu) {
                if (this.isContainMenuRole(Role.FID, Menu.FID)) {
                    data.RightGrantType = "Del";
                } else {
                    data.RightGrantType = "Add";
                }
                if (Menu.ActionType == "Add") {
                    data.NewKey = Menu.FID;
                } else {
                    data.Key = Menu.FID;
                }
                if (Role.ActionType == "Add") {
                    data.NewRightIds.push(Role.FID)
                } else {
                    data.RightIds.push(Role.FID)
                }

            } else if (button) {

                if (this.isContainMenuRole(Role.FID, button.FID)) {
                    data.RightGrantType = "Del";
                } else {
                    data.RightGrantType = "Add";
                }
                if (button.ActionType == "Add") {
                    data.NewKey = button.FID;
                } else {
                    data.Key = button.FID;
                }
                if (Role.ActionType == "Add") {
                    data.NewRightIds.push(Role.FID)
                } else {
                    data.RightIds.push(Role.FID)
                }
            }
            this.pushChangeRoleMenu(data);
            //this.ischange();
            this.fun_isChange();
            this.forceUpdate("");
        }

        public isContainMenuRole(RoleId: string, MenuId: string) {
            var isdelete = true;
            for (var i = 0; i < this.RoleMenu.length; i++) {
                if (this.RoleMenu[i].Role == RoleId && this.RoleMenu[i].Menu == MenuId) {
                    //删除
                    isdelete = false;
                    this.RoleMenu.splice(i, 1);
                    return true;
                }
            }
            if (isdelete) {
                var dd: Data2.Relation.IRoleMenu = {
                    Menu: MenuId, Role: RoleId
                }
                //添加
                this.RoleMenu.push(dd)
                return false;
            }
        }

        public pushChangeRoleMenu(data: Data.Menu.IGrantData) {

            var iscontain = false;
            for (var i = 0; i < this.changeData.length; i++) {
                if ((this.changeData[i].Key == data.Key && this.changeData[i].NewKey == data.NewKey) && (this.changeData[i].NewRightIds[0] == data.NewRightIds[0] && this.changeData[i].RightIds[0] == data.RightIds[0])) {
                    iscontain = true;
                    this.changeData.splice(i, 1);
                }
            }

            if (!iscontain) {
                this.changeData.push(data);
            }
        }

        public fun_changeRoleUserCheck(Role: Data.Menu.IRoleSimpleData, User: Data.Menu.IUserSimpleData, event: React.FormEvent) {

            var data: Data.Menu.IGrantData = { Key: "", NewKey: "", NewRightIds: [] = [], RightGrantType: "", RightIds: [] = [] };


            if (Role.ActionType == "Del" || User.ActionType == "Del") {
                alert("节点已被删除,不能修改！")
                return true;
            }

            if (this.isContainUserRole(Role.FID, User.FID)) {
                data.RightGrantType = "Del";
            } else {
                data.RightGrantType = "Add";
            }
            if (User.ActionType == "Add") {
                data.NewKey = User.FID;
            } else {
                data.Key = User.FID;
            }
            if (Role.ActionType == "Add") {
                data.NewRightIds.push(Role.FID)
            } else {
                data.RightIds.push(Role.FID)
            }

            this.pushChangeRoleMenu(data);
            this.fun_isChange();
            this.forceUpdate("");
        }

        public isContainUserRole(RoleId: string, UserId: string) {
            var isdelete = true;
            for (var i = 0; i < this.RoleUser.length; i++) {
                if (this.RoleUser[i].Role == RoleId && this.RoleUser[i].User == UserId) {
                    //删除
                    isdelete = false;
                    this.RoleUser.splice(i, 1);
                    return true;
                }
            }
            if (isdelete) {
                var dd: Data2.Relation.IRoleUser = {
                    User: UserId, Role: RoleId
                }
                //添加
                this.RoleUser.push(dd)
                return false;
            }
        }
        //好吧  我承认这个提交方法是比较复杂
        public submit() {
            //将结果循环起来
            var submitData: Data.Menu.ISubmitData = { MenuUserRoleDataList: [], GroupData: { Data: { GroupID: "", GroupName: "" }, DataID: "" } };
            var data: Data.Menu.IRoleRightData;
            //第一次 转换
            this.tranformeData(this.MenuData, submitData);
            this.tranformRole(submitData);


            //第二次 进行转换
            this.cycleUserData(submitData);
            this.changeData.map(a => {
                this.cycleMenuData(this.MenuData, submitData, a);
            });

            this.cycleRoleData(submitData);
            this.cycleGroupData(submitData);


            //alert(JSON.stringify(submitData))
            //console.log(JSON.stringify(submitData))
            urlFile.Core.AkPost("/RightCloud/RightConfig/RoleMenuUserSubmit", { data: JSON.stringify(submitData) }, (data) => {
                if (data) {
                    //刷新  
                    if (data) {
                        //urlFile.Core.AkUrl.Current().openUrl("$RIGHTMAINPAGE$", true);
                        //要调用MainDom里面的方法
                        this.emitAppEvent("MainDom/MenuUSerRolePage", this.Unid, data);
                    }
                }
            });

        }

        public tranformeData(Data: Data.Menu.IMenuSimpleData[], data: Data.Menu.ISubmitData) {

            Data.map((a) => {
                var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };

                if (a.ActionType) {
                    var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "", Operation: "" } };//菜单的

                    var User: Data.Menu.ISubmitUserData = { DataID: "", Data: { UserID: "", Operation: "", UserName: "" } }//角色的

                    //菜单数据
                    MenuModel.Data.FID = a.FID;
                    MenuModel.Data.MenuName = a.MenuName;
                    MenuModel.Data.ParentId = a.ParentId;
                    MenuModel.Data.RightValue = a.RightValue;
                    MenuModel.Data.MenuType = "Menu";
                    MenuModel.Data.Operation = a.ActionType;
                    model.MenuDataList.push(MenuModel);

                    //筛选出
                    if (a.ActionType != "Del") {
                        for (var i = 0; i < this.changeData.length; i++) {

                            var iskey = this.changeData[i].Key == a.FID || this.changeData[i].NewKey == a.FID;
                            //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                            if (iskey) {
                                //说明这个菜单的权限发生了变化
                                //model.GrantDataList = [];
                                this.changeData[i].MenuType = "Menu";
                                var ChangeData = null;
                                ChangeData = this.changeData[i];
                                model.GrantDataList.push(ChangeData);

                                //然后将Role数据装到实体中
                                if (!this.changeData[i].NewRightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].RightIds[0]));
                                } else if (!this.changeData[i].RightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].NewRightIds[0]));
                                }
                            }
                        }
                    }
                }

                if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                    data.MenuUserRoleDataList.push(model);
                }

                if (a.Children) {
                    this.tranformeData(a.Children, data);
                }

                if (a.ButtonList) {
                    this.tranformButton(a.ButtonList, data);
                }
            })


        }

        public tranformRole(data: Data.Menu.ISubmitData) {
            this.UserData.map((a) => {
                var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                if (a.ActionType) {
                    var Userdata: Data.Menu.ISubmitUserData = {
                        DataID: "", Data: { UserID: "", Operation: "", UserName: "" }
                    };
                    Userdata.Data.UserID = a.FID;
                    Userdata.Data.UserName = a.UserName;
                    Userdata.Data.Operation = a.ActionType;
                    model.UserDataList.push(Userdata);
                    if (a.ActionType != "Del") {
                        for (var i = 0; i < this.changeData.length; i++) {
                            var iskey = this.changeData[i].Key == a.FID || this.changeData[i].NewKey == a.FID;
                            //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                            if (iskey) {
                                //说明这个菜单的权限发生了变化
                                //model.GrantDataList = [];
                                this.changeData[i].MenuType = "User";
                                model.GrantDataList.push(this.changeData[i]);

                                //然后将Role数据装到实体中
                                if (!this.changeData[i].NewRightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].RightIds[0]));
                                } else if (!this.changeData[i].RightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].NewRightIds[0]));
                                }
                            }
                        }
                    }
                    if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                        data.MenuUserRoleDataList.push(model);
                    }
                }

            })
        }
        //循环
        public cycleUserData(submitdata: Data.Menu.ISubmitData) {
            var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
            for (var i = 0; i < this.changeData.length; i++) {
                for (var j = 0; j < this.UserData.length; j++) {
                    if (this.changeData[i].Key == this.UserData[j].FID || this.changeData[i].NewKey == this.UserData[j].FID) {
                        if (!this.UserData[j].ActionType) {
                            this.changeData[i].MenuType = "User"
                            model.GrantDataList.push(this.changeData[i]);
                            if (!this.changeData[i].NewRightIds[0]) {
                                model.RoleDataList.push(this.findRoleData(this.changeData[i].RightIds[0]));
                            } else if (!this.changeData[i].RightIds[0]) {
                                model.RoleDataList.push(this.findRoleData(this.changeData[i].NewRightIds[0]));
                            }
                        }
                    }
                }
            }

            if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                submitdata.MenuUserRoleDataList.push(model);
            }


        }

        public cycleRoleData(submitdata: Data.Menu.ISubmitData) {

            this.RoleData.map((a) => {
                var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                if (a.ActionType) {
                    var dd = true;
                    for (var i = 0; i < this.changeData.length; i++) {
                        if (a.FID == this.changeData[i].Key || a.FID == this.changeData[i].NewKey) {
                            dd = false;
                        }
                    }


                    for (var j = 0; j < submitdata.MenuUserRoleDataList.length; j++) {
                        for (var k = 0; k < submitdata.MenuUserRoleDataList[j].RoleDataList.length; k++) {
                            var b = submitdata.MenuUserRoleDataList[j].RoleDataList[k]
                            if (b) {
                                if (b.Data.RoleID == a.FID) {
                                    dd = false;
                                }
                            }
                        }
                        //submitdata.GroupRightDataList[i].RoleDataList.map((b) => {
                        //    if (b) {
                        //        if (b.Data.RoleID == a.FID) {
                        //            dd = false;
                        //        }
                        //    }
                        //})

                    }

                    if (dd) {
                        var Roledata: Data.Menu.ISubmitRoleData = {
                            DataID: "", Data: { Operation: "", RoleID: "", RoleName: "" }
                        };
                        Roledata.Data.RoleID = a.FID;
                        Roledata.Data.RoleName = a.RoleName;
                        Roledata.Data.Operation = a.ActionType;
                        model.RoleDataList.push(Roledata);
                        submitdata.MenuUserRoleDataList.push(model);
                    }
                }


            })
        }

        public cycleMenuData(MenuData: Data.Menu.IMenuSimpleData[], data: Data.Menu.ISubmitData, a: Data.Menu.IGrantData) {


            var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
            for (var i = 0; i < MenuData.length; i++) {

                if (a.Key == MenuData[i].FID || a.NewKey == MenuData[i].FID) {
                    if (!MenuData[i].ActionType) {
                        a.MenuType = "Menu";
                        model.GrantDataList.push(a);
                        if (!a.NewRightIds[0]) {
                            model.RoleDataList.push(this.findRoleData(a.RightIds[0]));
                        } else if (!a.RightIds[0]) {
                            model.RoleDataList.push(this.findRoleData(a.NewRightIds[0]));
                        }

                        if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                            data.MenuUserRoleDataList.push(model);
                        }
                    }
                }



                if (MenuData[i].Children) {
                    this.cycleMenuData(MenuData[i].Children, data, a);
                }

                if (MenuData[i].ButtonList) {
                    this.cycleMenuButtonData(MenuData[i].ButtonList, data, a);
                }
            }

        }

        public cycleMenuButtonData(MenuData: Data.Menu.IMenuButton[], data: Data.Menu.ISubmitData, a: Data.Menu.IGrantData) {

            var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
            for (var i = 0; i < MenuData.length; i++) {

                if (a.Key == MenuData[i].FID || a.NewKey == MenuData[i].FID) {
                    if (!MenuData[i].ActionType) {
                        a.MenuType = "Menu";
                        model.GrantDataList.push(a);
                        if (!a.NewRightIds) {
                            var MenuButtondata = this.findRoleData(a.RightIds[0])
                            model.RoleDataList.push(MenuButtondata);
                        } else if (!a.RightIds) {
                            var MenuButtondata = this.findRoleData(a.NewRightIds[0]);
                            model.RoleDataList.push(MenuButtondata);
                        }

                        if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                            data.MenuUserRoleDataList.push(model);
                        }
                    }
                }
            }
        }

        public tranformButton(Data: Data.Menu.IMenuButton[], data: Data.Menu.ISubmitData) {
            Data.map((a) => {
                var model: Data.Menu.IRoleRightData = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };

                if (a.ActionType) {
                    var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "", Operation: "" } };//菜单的

                    var User: Data.Menu.ISubmitUserData = { DataID: "", Data: { UserID: "", Operation: "", UserName: "" } }//角色的

                    //菜单数据
                    MenuModel.Data.FID = a.FID;
                    MenuModel.Data.MenuName = a.ButtonName;
                    MenuModel.Data.ParentId = a.ParentId;
                    //MenuModel.Data.RightValue = a.RightValue;
                    MenuModel.Data.MenuType = "Button";
                    MenuModel.Data.Operation = a.ActionType;
                    model.MenuDataList.push(MenuModel);

                    //筛选出
                    if (a.ActionType != "Del") {
                        for (var i = 0; i < this.changeData.length; i++) {
                            var iskey = this.changeData[i].Key == a.FID || this.changeData[i].NewKey == a.FID;
                            //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                            if (iskey) {
                                //说明这个菜单的权限发生了变化
                                //model.GrantDataList = [];
                                this.changeData[i].MenuType = "Button";
                                model.GrantDataList.push(this.changeData[i]);

                                //然后将Role数据装到实体中
                                if (!this.changeData[i].NewRightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].RightIds[0]));
                                } else if (!this.changeData[i].RightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].NewRightIds[0]));
                                }
                            }
                        }
                    }
                }

                if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                    data.MenuUserRoleDataList.push(model);
                }
            })
        }
        public cycleGroupData(submitdata: Data.Menu.ISubmitData) {
            var model: Data.Menu.ISubmitGroupData = { Data: { GroupID: "", GroupName: "" }, DataID: "" };


            model.Data.GroupID = this.GroupData.FID;
            model.Data.GroupName = this.GroupData.OrgName;
            submitdata.GroupData = model;

        }

        public findRoleData(RoleFID: string) {
            for (var i = 0; i < this.RoleData.length; i++) {
                if (this.RoleData[i].FID == RoleFID) {
                    if (this.RoleData[i].ActionType) {
                        var model: Data.Menu.ISubmitRoleData = { DataID: "", Data: { RoleID: "", Operation: "", RoleName: "" } }
                        model.Data.RoleID = this.RoleData[i].FID;
                        model.Data.Operation = this.RoleData[i].ActionType;
                        model.Data.RoleName = this.RoleData[i].RoleName;
                        return model;
                    }
                }
            }
        }

        public fun_isChange() {
            var b = false;
            var c = false;
            if (this.changeData && this.changeData.length > 0) {
                b = true;
            }

            c = this.cycleMenuAction(this.MenuData);

            this.RoleData.map((a) => {
                if (a.ActionType) {
                    b = true;
                }
            })

            this.UserData.map((a) => {
                if (a.ActionType) {
                    b = true;
                }
            })

            if (c || b) {
                this.ischage = true;
            } else {
                this.ischage = false;
            }
        }

        public cycleMenuAction(Data: Data.Menu.IMenuSimpleData[]) {
            var c = false;
            var d = false;
            var e = false;

            Data.map((a) => {
                if (a.ActionType) {
                    c = true;
                }

                if (a.Children && a.Children.length > 0) {
                    d = this.cycleMenuAction(a.Children);
                }


                if (a.ButtonList && a.ButtonList.length > 0) {
                    e = this.cycleMenuButtonAction(a.ButtonList);
                }


            })
            return c || d || e;
        }

        public cycleMenuButtonAction(Data: Data.Menu.IMenuButton[]) {
            var c = false;
            Data.map((a) => {
                if (a.ActionType)
                { c = true }
            })
            return c;
        }

        public RoleData: Data.Menu.IRoleSimpleData[] = [];
        public MenuData: Data.Menu.IMenuSimpleData[] = [];
        public UserData: Data.Menu.IUserSimpleData[] = [];
        public UserRoleData: Data.Menu.IUserRoleSimpleData[] = [];
        public GroupData: MainDom.MainDom.GroupData;

        public RoleMenu: Data2.Relation.IRoleMenu[] = [];
        public RoleUser: Data2.Relation.IRoleUser[] = [];

        public changeData: Data.Menu.IGrantData[] = [];

        public MenuEditData: Data.Menu.IMenuSimpleData;
        public UserEditData: Data.Menu.IUserSimpleData;
        public updateFlag: boolean = false;
        public _arry: React.ReactElement<any>[] = [];
        public Level: number = 0;
        public IsMenuRoleBodyHide: Boolean = false;
        public IsMenuUserBodyHide: Boolean = false;

        public ischage: Boolean = false;
        public getESpan(name: string, config: EditSpanFile.EditSpan.IEditSpanVm) {
            var _espan = this.ESpanDict[name];
            if (_espan) {
                _espan.IsChange = true;
                return _espan;
            }
            else {
                var _es = this.ESpanDict[name] = new ESpanVm(config);

                //_es.IsChange = true;
                _es.IsMulit = true;
                return _es;
            }
        }

        public changeEm() {
            for (var n in this.ESpanDict) {
                var em = this.ESpanDict[n];
                em.IsChange = true;
            }
        }


    }

    export class MenuUserRoleTableStates extends domCore.DomStates { }

    export class MenuUserRoleTableProps extends domCore.DomProps<MenuUserRoleTableVm> { }
}