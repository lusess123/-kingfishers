var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url", "./../../../05tool/EditSpan", "./RightReact/MenuUserReact", "./RightReact/MenuUserHeadReact", "./RightReact/MenuRoleReact", "./RightReact/MenuRoleHeadReact", "./RightReact/MenuRoleButton"], function (require, exports, domFile, React, urlFile, EditSpanFile, MenuUserReact, MenuUserHeadReact, MenuRoleReact, MenuRoleHeadReact, MenuRoleButtonReact) {
    "use strict";
    var domCore = domFile.Core;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var MenuUserRoleTable;
    (function (MenuUserRoleTable) {
        var MenuUserRoleTableAction = (function (_super) {
            __extends(MenuUserRoleTableAction, _super);
            function MenuUserRoleTableAction() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleTableAction;
        }(domCore.DomAction));
        MenuUserRoleTable.MenuUserRoleTableAction = MenuUserRoleTableAction;
        var MenuUserRoleTableReact = (function (_super) {
            __extends(MenuUserRoleTableReact, _super);
            function MenuUserRoleTableReact() {
                _super.apply(this, arguments);
                this.state = new MenuUserRoleTableStates();
            }
            MenuUserRoleTableReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: MenuUserRoleTable的组件");
            };
            MenuUserRoleTableReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return MenuUserRoleTableReact;
        }(domCore.DomReact));
        MenuUserRoleTable.MenuUserRoleTableReact = MenuUserRoleTableReact;
        var MenuUserRoleTableVm = (function (_super) {
            __extends(MenuUserRoleTableVm, _super);
            function MenuUserRoleTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MenuUserRoleTableReact;
                this.MenuRoleName = "";
                this.Unid = "";
                this.thclass = "";
                this.OperateData = [];
                this.ESpanDict = {};
                this.RoleData = [];
                this.MenuData = [];
                this.UserData = [];
                this.UserRoleData = [];
                this.RoleMenu = [];
                this.RoleUser = [];
                this.changeData = [];
                this.updateFlag = false;
                this._arry = [];
                this.Level = 0;
                this.IsMenuRoleBodyHide = false;
                this.IsMenuUserBodyHide = false;
                this.ischage = false;
                if (config) {
                    this.RoleData = config.RoleData;
                    this.MenuData = config.MenuData;
                    this.GroupData = config.Menu_Group;
                    if (config.UserData.length > 0) {
                        this.UserEspeList = new Array();
                        config.UserData.map(function (a) {
                            debugger;
                            var data = new EditSpanFile.EditSpan.EditSpanVm({
                                Content: a.UserName,
                                ChangeEvent: function (vm, d) { _this.UpdateUser(a, vm.Content); }
                            });
                            _this.UserEspeList.push(data);
                            if (a.UserSign.length > 10) {
                                a.UserSign = a.UserSign.substr(0, 10) + "..";
                            }
                        });
                    }
                    this.UserData = config.UserData;
                    this.UserRoleData = config.UserRoleData;
                    this.RoleMenu = config.Role_Menu;
                    this.RoleUser = config.Role_User;
                    this.Unid = config.Unid;
                }
            }
            MenuUserRoleTableVm.prototype.rMenuUserSender = function () {
                return this.intoDomR(MenuUserReact.Menu.MenuUserReact);
            };
            MenuUserRoleTableVm.prototype.rMenuUserHeadSender = function () {
                return this.intoDomR(MenuUserHeadReact.Menu.MenuUserHeadReact);
            };
            MenuUserRoleTableVm.prototype.rMenuRoleSender = function () {
                return this.intoDomR(MenuRoleReact.Menu.MenuRoleReact);
            };
            MenuUserRoleTableVm.prototype.rMenuRolebuttonSender = function () {
                return this.intoDomR(MenuRoleButtonReact.Menu.MenuRoleButtonReact);
            };
            MenuUserRoleTableVm.prototype.forceUpdateMenuUser = function (val, callback) {
                this.IsChange = true;
                this.pGetEmit("React").emit("forceUpdate_MenuUser", val, callback);
            };
            //更新按钮
            MenuUserRoleTableVm.prototype.forceUpdateMEnuRoleButton = function (val, callback) {
                this.IsChange = true;
                this.pGetEmit("React").emit("forceUpdate_MenuRoleButton", val, callback);
            };
            MenuUserRoleTableVm.prototype.forceUpdateRoleData = function (val, callback) {
                this.IsChange = true;
                this.pGetEmit("React").emit("forceUpdate_RoleData", val, callback);
            };
            MenuUserRoleTableVm.prototype.rMenuRoleheadSender = function () {
                return this.intoDomR(MenuRoleHeadReact.Menu.MenuRoleHeadReact);
            };
            //--------------方法------------------------------------
            MenuUserRoleTableVm.prototype.addRole = function (obj) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                    if (data) {
                        _this.RoleData.unshift({ FID: data, RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "Add" });
                        _this.IsChange = true;
                        _this.fun_isChange();
                        _this.forceUpdate("");
                    }
                });
            };
            MenuUserRoleTableVm.prototype._addRole = function (obj) {
                this.UserRoleData.unshift({ FID: "", RoleName: obj.RoleName, RoleSign: obj.RoleSign, ActionType: "Add" });
                this.changeEm();
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.addUser = function (obj) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                    if (data) {
                        //this.UserData.unshift({ FID: data, UserName: obj.UserName, UserSign: obj.UserName, ActionType: "Add" });
                        var userdata = { FID: data, UserName: obj.UserName, UserSign: obj.UserSign, ActionType: "Add" };
                        _this.UserData.unshift(userdata);
                        var data1 = new EditSpanFile.EditSpan.EditSpanVm({
                            Content: userdata.UserName,
                            ChangeEvent: function (vm, d) { _this.UpdateUser(userdata, vm.Content); }
                        });
                        _this.UserEspeList.unshift(data1);
                        _this.UserEspeList.forEach(function (a) {
                            a.IsChange = true;
                        });
                        _this.fun_isChange();
                        _this.forceUpdate("");
                    }
                });
            };
            MenuUserRoleTableVm.prototype.addMenu = function (name) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                    if (data) {
                        var newmenu = { FID: data, ParentId: _this.MenuEditData.FID, MenuName: name.MenuName, isParent: false, isLeaft: true, ActionType: "Add", RightValue: name.MenuValue };
                        _this.MenuEditData.isLeaft = false;
                        _this.MenuEditData.IsHidden = false;
                        _this.MenuEditData.isParent = true;
                        if (_this.MenuEditData.Children == undefined) {
                            _this.MenuEditData.Children = [];
                        }
                        _this.MenuEditData.Children.unshift(newmenu);
                        _this.ischage = true;
                        _this.fun_isChange();
                        _this.forceUpdate("");
                    }
                });
            };
            MenuUserRoleTableVm.prototype.addButton = function (name) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                    if (data) {
                        var button = { FID: data, ParentId: _this.MenuEditData.RightValue, ButtonName: name, ActionType: "Add" };
                        _this.MenuEditData.isLeaft = false;
                        _this.MenuEditData.IsHidden = false;
                        _this.MenuEditData.isParent = true;
                        if (_this.MenuEditData.ButtonList == undefined) {
                            _this.MenuEditData.ButtonList = [];
                        }
                        _this.MenuEditData.ButtonList.unshift(button);
                        _this.fun_isChange();
                        _this.forceUpdate("");
                    }
                });
            };
            MenuUserRoleTableVm.prototype.addMenuPage = function (a) {
                //TODO:点击增加按钮的时候 不能将节点张开
                if (a.ActionType == "Del") {
                    alert("该节点已经被删除！");
                }
                else {
                    this.exportMenu(a);
                    this.MenuEditData = a;
                    this.forceUpdate("");
                    if (a.Children && a.Children.length > 0) {
                        //有子节点  
                        urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 1 + "$", true);
                    }
                    else if (a.ButtonList && a.ButtonList.length > 0) {
                        //有按钮
                        urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 2 + "$", true);
                    }
                    else {
                        //两种情况
                        urlFile.Core.AkUrl.Current().openUrl("$winADDMENUORBUTTONPAGE$" + 3 + "$", true);
                    }
                }
            };
            MenuUserRoleTableVm.prototype.fun_isCheckMenu = function (Menu, Role) {
                var ischeck = false;
                this.RoleMenu.map(function (a) {
                    if (a.Menu == Menu && a.Role == Role) {
                        ischeck = true;
                        return false;
                    }
                });
                this.fun_isChange();
                return ischeck;
            };
            MenuUserRoleTableVm.prototype.fun_isCheckUser = function (Role, User) {
                var ischeck = false;
                this.RoleUser.map(function (a) {
                    if (a.Role == Role && a.User == User) {
                        ischeck = true;
                        return false;
                    }
                });
                this.fun_isChange();
                return ischeck;
            };
            MenuUserRoleTableVm.prototype.fun_isCheck = function (Ids, Id) {
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
            };
            MenuUserRoleTableVm.prototype.changeState = function (a, Id) {
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
            };
            MenuUserRoleTableVm.prototype.iterationdelete = function (b, p) {
                if (!p) {
                    p = { FID: "", MenuName: "", isParent: true, Children: [] };
                    p.Children = this.MenuData;
                }
                for (var i = 0; i < p.Children.length; i++) {
                    if (p.Children[i].MenuName == b.MenuName) {
                        if (p.Children[i].ActionType == "Add") {
                            p.Children.splice(i, 1);
                        }
                        else if (p.Children[i].ActionType == "Del") {
                            p.Children[i].ActionType = "";
                        }
                        else {
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
            };
            MenuUserRoleTableVm.prototype.delRole = function (a) {
                for (var i = 0; i < this.RoleData.length; i++) {
                    if (a.RoleSign == this.RoleData[i].RoleSign) {
                        this.RoleData.splice(i, 1);
                        break;
                    }
                }
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.fun_delRole = function (a) {
                // this.props.Vm.delRole(a);
                //if (a.isDelete == undefined) {
                //    a.isDelete = true;
                //} else {
                //    a.isDelete = !a.isDelete;
                //}
                if (!a.ActionType || a.ActionType == "Update") {
                    a.ActionType = "Del";
                }
                else if (a.ActionType == "Add") {
                    for (var i = 0; i < this.RoleData.length; i++) {
                        if (this.RoleData[i].RoleName == a.RoleName) {
                            this.RoleData.splice(i, 1);
                            break;
                        }
                    }
                }
                else if (a.ActionType == "Del") {
                    a.ActionType = "";
                }
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.deleteMenu = function (a) {
                var _this = this;
                urlFile.Core.AkPost("/RightCloud/RightConfig/CheckHasChild", { MenuID: a.FID }, function (b) {
                    if (b) {
                        alert("先删除子节点");
                        return false;
                    }
                    else {
                        //如果是增加的话 那就删除
                        if (a.ActionType == "Add") {
                            for (var i = 0; i <= a.ParentVm.Children.length; i++) {
                                if (a.ParentVm.Children[i].MenuName == a.MenuName) {
                                    a.ParentVm.Children.splice(i, 1);
                                }
                            }
                        }
                        else if (a.ActionType == "Del") {
                            a.ActionType = "";
                        }
                        else if (!a.ActionType || a.ActionType == "") {
                            a.ActionType = "Del";
                        }
                        _this.fun_isChange();
                        _this.ischage = true;
                        //this.IsChange = true;
                        _this.forceUpdate("");
                    }
                });
            };
            //------更新------------------------
            MenuUserRoleTableVm.prototype.UpdateRole = function (a, b) {
                if (a.ActionType == "Del") {
                    alert("该节点已经被删除！");
                }
                else {
                    if (a.ActionType != "Add") {
                        if (a.OriginalName == b) {
                            a.ActionType = "";
                        }
                        else if (b != a.OriginalName) {
                            a.ActionType = "Update";
                        }
                    }
                    a.RoleName = b;
                    this.IsMulit = true;
                }
                this.fun_isChange();
                this.forceUpdate("");
                this.forceUpdateRoleData("");
            };
            MenuUserRoleTableVm.prototype.UpdateMenu = function (a, b) {
                if (a.ActionType == "Del") {
                    alert("该节点已经被删除！");
                }
                else {
                    debugger;
                    if (a.ActionType != "Add") {
                        if (a.OriginalName == b) {
                            a.ActionType = "";
                        }
                        else if (b != a.OriginalName) {
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
            };
            MenuUserRoleTableVm.prototype.UpdateMenuButton = function (a, b) {
                if (a.ActionType == "Del") {
                    alert("该按钮已经被删除！");
                }
                else {
                    if (a.ActionType != "Add") {
                        if (b == a.OriginalName) {
                            a.ActionType = "";
                        }
                        else if (b != a.OriginalName) {
                            a.ActionType = "Update";
                        }
                    }
                    a.ButtonName = b;
                }
                this.IsChange = true;
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.UpdateUser = function (a, b) {
                if (a.ActionType == "Del") {
                    alert("该节点已经被删除！");
                }
                else {
                    if (a.ActionType != "Add") {
                        //
                        if (a.OriginalName == b) {
                            a.ActionType = "";
                        }
                        else if (a.OriginalName != b) {
                            a.ActionType = "Update";
                        }
                    }
                    a.UserSign = b;
                }
                this.fun_isChange();
                this.forceUpdate("");
            };
            //展开节点
            MenuUserRoleTableVm.prototype.exportMenu = function (a) {
                //urlFile.Core.AkPost("/RightCloud/RightConfig/RoleexportMenu", { Menu: a.FID }, (b) => {
                //    if (b.MenuUserTable.MenuData.Children) {
                //        a.Children = b.MenuUserTable.MenuData.Children;
                //    }
                //    if (b.MenuUserTable.MenuData.ButtonList) {
                //        a.ButtonList = b.MenuUserTable.MenuData.ButtonList;
                //    }
                //    this.forceUpdate("");
                //})
            };
            //选中checkbox的时候发生的事件
            MenuUserRoleTableVm.prototype.fun_changeCheck = function (Role, Menu, button, event) {
                var data = { Key: "", NewKey: "", NewRightIds: [], RightGrantType: "", RightIds: [] };
                if (Menu) {
                    if (this.isContainMenuRole(Role.FID, Menu.FID)) {
                        data.RightGrantType = "Del";
                    }
                    else {
                        data.RightGrantType = "Add";
                    }
                    if (Menu.ActionType == "Add") {
                        data.NewKey = Menu.FID;
                    }
                    else {
                        data.Key = Menu.FID;
                    }
                    if (Role.ActionType == "Add") {
                        data.NewRightIds.push(Role.FID);
                    }
                    else {
                        data.RightIds.push(Role.FID);
                    }
                }
                else if (button) {
                    if (this.isContainMenuRole(Role.FID, button.FID)) {
                        data.RightGrantType = "Del";
                    }
                    else {
                        data.RightGrantType = "Add";
                    }
                    if (button.ActionType == "Add") {
                        data.NewKey = button.FID;
                    }
                    else {
                        data.Key = button.FID;
                    }
                    if (Role.ActionType == "Add") {
                        data.NewRightIds.push(Role.FID);
                    }
                    else {
                        data.RightIds.push(Role.FID);
                    }
                }
                this.pushChangeRoleMenu(data);
                //this.ischange();
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.isContainMenuRole = function (RoleId, MenuId) {
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
                    var dd = {
                        Menu: MenuId, Role: RoleId
                    };
                    //添加
                    this.RoleMenu.push(dd);
                    return false;
                }
            };
            MenuUserRoleTableVm.prototype.pushChangeRoleMenu = function (data) {
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
            };
            MenuUserRoleTableVm.prototype.fun_changeRoleUserCheck = function (Role, User, event) {
                var data = { Key: "", NewKey: "", NewRightIds: [], RightGrantType: "", RightIds: [] };
                if (Role.ActionType == "Del" || User.ActionType == "Del") {
                    alert("节点已被删除,不能修改！");
                    return true;
                }
                if (this.isContainUserRole(Role.FID, User.FID)) {
                    data.RightGrantType = "Del";
                }
                else {
                    data.RightGrantType = "Add";
                }
                if (User.ActionType == "Add") {
                    data.NewKey = User.FID;
                }
                else {
                    data.Key = User.FID;
                }
                if (Role.ActionType == "Add") {
                    data.NewRightIds.push(Role.FID);
                }
                else {
                    data.RightIds.push(Role.FID);
                }
                this.pushChangeRoleMenu(data);
                this.fun_isChange();
                this.forceUpdate("");
            };
            MenuUserRoleTableVm.prototype.isContainUserRole = function (RoleId, UserId) {
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
                    var dd = {
                        User: UserId, Role: RoleId
                    };
                    //添加
                    this.RoleUser.push(dd);
                    return false;
                }
            };
            //好吧  我承认这个提交方法是比较复杂
            MenuUserRoleTableVm.prototype.submit = function () {
                var _this = this;
                //将结果循环起来
                var submitData = { MenuUserRoleDataList: [], GroupData: { Data: { GroupID: "", GroupName: "" }, DataID: "" } };
                var data;
                //第一次 转换
                this.tranformeData(this.MenuData, submitData);
                this.tranformRole(submitData);
                //第二次 进行转换
                this.cycleUserData(submitData);
                this.changeData.map(function (a) {
                    _this.cycleMenuData(_this.MenuData, submitData, a);
                });
                this.cycleRoleData(submitData);
                this.cycleGroupData(submitData);
                //alert(JSON.stringify(submitData))
                //console.log(JSON.stringify(submitData))
                urlFile.Core.AkPost("/RightCloud/RightConfig/RoleMenuUserSubmit", { data: JSON.stringify(submitData) }, function (data) {
                    if (data) {
                        //刷新  
                        if (data) {
                            //urlFile.Core.AkUrl.Current().openUrl("$RIGHTMAINPAGE$", true);
                            //要调用MainDom里面的方法
                            _this.emitAppEvent("MainDom/MenuUSerRolePage", _this.Unid, data);
                        }
                    }
                });
            };
            MenuUserRoleTableVm.prototype.tranformeData = function (Data, data) {
                var _this = this;
                Data.map(function (a) {
                    var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "", Operation: "" } }; //菜单的
                        var User = { DataID: "", Data: { UserID: "", Operation: "", UserName: "" } }; //角色的
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
                            for (var i = 0; i < _this.changeData.length; i++) {
                                var iskey = _this.changeData[i].Key == a.FID || _this.changeData[i].NewKey == a.FID;
                                //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                                if (iskey) {
                                    //说明这个菜单的权限发生了变化
                                    //model.GrantDataList = [];
                                    _this.changeData[i].MenuType = "Menu";
                                    var ChangeData = null;
                                    ChangeData = _this.changeData[i];
                                    model.GrantDataList.push(ChangeData);
                                    //然后将Role数据装到实体中
                                    if (!_this.changeData[i].NewRightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].RightIds[0]));
                                    }
                                    else if (!_this.changeData[i].RightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].NewRightIds[0]));
                                    }
                                }
                            }
                        }
                    }
                    if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                        data.MenuUserRoleDataList.push(model);
                    }
                    if (a.Children) {
                        _this.tranformeData(a.Children, data);
                    }
                    if (a.ButtonList) {
                        _this.tranformButton(a.ButtonList, data);
                    }
                });
            };
            MenuUserRoleTableVm.prototype.tranformRole = function (data) {
                var _this = this;
                this.UserData.map(function (a) {
                    var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var Userdata = {
                            DataID: "", Data: { UserID: "", Operation: "", UserName: "" }
                        };
                        Userdata.Data.UserID = a.FID;
                        Userdata.Data.UserName = a.UserName;
                        Userdata.Data.Operation = a.ActionType;
                        model.UserDataList.push(Userdata);
                        if (a.ActionType != "Del") {
                            for (var i = 0; i < _this.changeData.length; i++) {
                                var iskey = _this.changeData[i].Key == a.FID || _this.changeData[i].NewKey == a.FID;
                                //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                                if (iskey) {
                                    //说明这个菜单的权限发生了变化
                                    //model.GrantDataList = [];
                                    _this.changeData[i].MenuType = "User";
                                    model.GrantDataList.push(_this.changeData[i]);
                                    //然后将Role数据装到实体中
                                    if (!_this.changeData[i].NewRightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].RightIds[0]));
                                    }
                                    else if (!_this.changeData[i].RightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].NewRightIds[0]));
                                    }
                                }
                            }
                        }
                        if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                            data.MenuUserRoleDataList.push(model);
                        }
                    }
                });
            };
            //循环
            MenuUserRoleTableVm.prototype.cycleUserData = function (submitdata) {
                var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                for (var i = 0; i < this.changeData.length; i++) {
                    for (var j = 0; j < this.UserData.length; j++) {
                        if (this.changeData[i].Key == this.UserData[j].FID || this.changeData[i].NewKey == this.UserData[j].FID) {
                            if (!this.UserData[j].ActionType) {
                                this.changeData[i].MenuType = "User";
                                model.GrantDataList.push(this.changeData[i]);
                                if (!this.changeData[i].NewRightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].RightIds[0]));
                                }
                                else if (!this.changeData[i].RightIds[0]) {
                                    model.RoleDataList.push(this.findRoleData(this.changeData[i].NewRightIds[0]));
                                }
                            }
                        }
                    }
                }
                if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                    submitdata.MenuUserRoleDataList.push(model);
                }
            };
            MenuUserRoleTableVm.prototype.cycleRoleData = function (submitdata) {
                var _this = this;
                this.RoleData.map(function (a) {
                    var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var dd = true;
                        for (var i = 0; i < _this.changeData.length; i++) {
                            if (a.FID == _this.changeData[i].Key || a.FID == _this.changeData[i].NewKey) {
                                dd = false;
                            }
                        }
                        for (var j = 0; j < submitdata.MenuUserRoleDataList.length; j++) {
                            for (var k = 0; k < submitdata.MenuUserRoleDataList[j].RoleDataList.length; k++) {
                                var b = submitdata.MenuUserRoleDataList[j].RoleDataList[k];
                                if (b) {
                                    if (b.Data.RoleID == a.FID) {
                                        dd = false;
                                    }
                                }
                            }
                        }
                        if (dd) {
                            var Roledata = {
                                DataID: "", Data: { Operation: "", RoleID: "", RoleName: "" }
                            };
                            Roledata.Data.RoleID = a.FID;
                            Roledata.Data.RoleName = a.RoleName;
                            Roledata.Data.Operation = a.ActionType;
                            model.RoleDataList.push(Roledata);
                            submitdata.MenuUserRoleDataList.push(model);
                        }
                    }
                });
            };
            MenuUserRoleTableVm.prototype.cycleMenuData = function (MenuData, data, a) {
                var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                for (var i = 0; i < MenuData.length; i++) {
                    if (a.Key == MenuData[i].FID || a.NewKey == MenuData[i].FID) {
                        if (!MenuData[i].ActionType) {
                            a.MenuType = "Menu";
                            model.GrantDataList.push(a);
                            if (!a.NewRightIds[0]) {
                                model.RoleDataList.push(this.findRoleData(a.RightIds[0]));
                            }
                            else if (!a.RightIds[0]) {
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
            };
            MenuUserRoleTableVm.prototype.cycleMenuButtonData = function (MenuData, data, a) {
                var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                for (var i = 0; i < MenuData.length; i++) {
                    if (a.Key == MenuData[i].FID || a.NewKey == MenuData[i].FID) {
                        if (!MenuData[i].ActionType) {
                            a.MenuType = "Menu";
                            model.GrantDataList.push(a);
                            if (!a.NewRightIds) {
                                var MenuButtondata = this.findRoleData(a.RightIds[0]);
                                model.RoleDataList.push(MenuButtondata);
                            }
                            else if (!a.RightIds) {
                                var MenuButtondata = this.findRoleData(a.NewRightIds[0]);
                                model.RoleDataList.push(MenuButtondata);
                            }
                            if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                                data.MenuUserRoleDataList.push(model);
                            }
                        }
                    }
                }
            };
            MenuUserRoleTableVm.prototype.tranformButton = function (Data, data) {
                var _this = this;
                Data.map(function (a) {
                    var model = { UserDataList: [], MenuDataList: [], GrantDataList: [], RoleDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "", Operation: "" } }; //菜单的
                        var User = { DataID: "", Data: { UserID: "", Operation: "", UserName: "" } }; //角色的
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
                            for (var i = 0; i < _this.changeData.length; i++) {
                                var iskey = _this.changeData[i].Key == a.FID || _this.changeData[i].NewKey == a.FID;
                                //var isRight = this.changeData[i].NewRightIds[0] == this.OrgData[0].FID || this.changeData[i].RightIds[0] == this.OrgData[0].FID;
                                if (iskey) {
                                    //说明这个菜单的权限发生了变化
                                    //model.GrantDataList = [];
                                    _this.changeData[i].MenuType = "Button";
                                    model.GrantDataList.push(_this.changeData[i]);
                                    //然后将Role数据装到实体中
                                    if (!_this.changeData[i].NewRightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].RightIds[0]));
                                    }
                                    else if (!_this.changeData[i].RightIds[0]) {
                                        model.RoleDataList.push(_this.findRoleData(_this.changeData[i].NewRightIds[0]));
                                    }
                                }
                            }
                        }
                    }
                    if (model.GrantDataList.length != 0 || model.UserDataList.length != 0 || model.MenuDataList.length != 0 || model.RoleDataList.length != 0) {
                        data.MenuUserRoleDataList.push(model);
                    }
                });
            };
            MenuUserRoleTableVm.prototype.cycleGroupData = function (submitdata) {
                var model = { Data: { GroupID: "", GroupName: "" }, DataID: "" };
                model.Data.GroupID = this.GroupData.FID;
                model.Data.GroupName = this.GroupData.OrgName;
                submitdata.GroupData = model;
            };
            MenuUserRoleTableVm.prototype.findRoleData = function (RoleFID) {
                for (var i = 0; i < this.RoleData.length; i++) {
                    if (this.RoleData[i].FID == RoleFID) {
                        if (this.RoleData[i].ActionType) {
                            var model = { DataID: "", Data: { RoleID: "", Operation: "", RoleName: "" } };
                            model.Data.RoleID = this.RoleData[i].FID;
                            model.Data.Operation = this.RoleData[i].ActionType;
                            model.Data.RoleName = this.RoleData[i].RoleName;
                            return model;
                        }
                    }
                }
            };
            MenuUserRoleTableVm.prototype.fun_isChange = function () {
                var b = false;
                var c = false;
                if (this.changeData && this.changeData.length > 0) {
                    b = true;
                }
                c = this.cycleMenuAction(this.MenuData);
                this.RoleData.map(function (a) {
                    if (a.ActionType) {
                        b = true;
                    }
                });
                this.UserData.map(function (a) {
                    if (a.ActionType) {
                        b = true;
                    }
                });
                if (c || b) {
                    this.ischage = true;
                }
                else {
                    this.ischage = false;
                }
            };
            MenuUserRoleTableVm.prototype.cycleMenuAction = function (Data) {
                var _this = this;
                var c = false;
                var d = false;
                var e = false;
                Data.map(function (a) {
                    if (a.ActionType) {
                        c = true;
                    }
                    if (a.Children && a.Children.length > 0) {
                        d = _this.cycleMenuAction(a.Children);
                    }
                    if (a.ButtonList && a.ButtonList.length > 0) {
                        e = _this.cycleMenuButtonAction(a.ButtonList);
                    }
                });
                return c || d || e;
            };
            MenuUserRoleTableVm.prototype.cycleMenuButtonAction = function (Data) {
                var c = false;
                Data.map(function (a) {
                    if (a.ActionType) {
                        c = true;
                    }
                });
                return c;
            };
            MenuUserRoleTableVm.prototype.getESpan = function (name, config) {
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
            };
            MenuUserRoleTableVm.prototype.changeEm = function () {
                for (var n in this.ESpanDict) {
                    var em = this.ESpanDict[n];
                    em.IsChange = true;
                }
            };
            return MenuUserRoleTableVm;
        }(domCore.DomVm));
        MenuUserRoleTable.MenuUserRoleTableVm = MenuUserRoleTableVm;
        var MenuUserRoleTableStates = (function (_super) {
            __extends(MenuUserRoleTableStates, _super);
            function MenuUserRoleTableStates() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleTableStates;
        }(domCore.DomStates));
        MenuUserRoleTable.MenuUserRoleTableStates = MenuUserRoleTableStates;
        var MenuUserRoleTableProps = (function (_super) {
            __extends(MenuUserRoleTableProps, _super);
            function MenuUserRoleTableProps() {
                _super.apply(this, arguments);
            }
            return MenuUserRoleTableProps;
        }(domCore.DomProps));
        MenuUserRoleTable.MenuUserRoleTableProps = MenuUserRoleTableProps;
    })(MenuUserRoleTable = exports.MenuUserRoleTable || (exports.MenuUserRoleTable = {}));
});
