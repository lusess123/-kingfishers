import domFile = require("./../../../01core/0Dom"); import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import pageViewFile = require("./../../../07data/PageView");
import EditSpanFile = require("./../../../05tool/EditSpan");
import Data = require("./Data");

import Data2 = require("./../Data");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import Data3 = require("./../Group/Data");
import MenuOrgHeadReact = require("./RightReact/MenuOrgHeadReact");
import MenuOrgReact = require("./RightReact/MenuOrgReact");
import MenuOrgTrailReact = require("./RightReact/MenuOrgTrailReact");

export module MenuOrgPage {
    export class MenuOrgPageAction extends domCore.DomAction {
    }

    export class MenuOrgPageReact extends domCore.DomReact<MenuOrgPageProps, MenuOrgPageStates, MenuOrgPageAction> implements domCore.IReact {

        public state = new MenuOrgPageStates();

        public pSender(): React.ReactElement<any> {
            return <div>名称为: MenuOrgPage的组件</div>;
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }
    }

    export interface IMenuOrgPageConfig {
        MenuData: Data.Menu.IMenuSimpleData[];
        OrgData: Data.Menu.IGroupSimpleData[];
        Menu_Org: Data2.Relation.IMenuOrg[];
        Unid?: string;
    }

    export class MenuOrgPageVm extends domCore.DomVm {
        public ReactType = MenuOrgPageReact;
        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        public OrgData: Data.Menu.IGroupSimpleData[] = [];
        public MenuData: Data.Menu.IMenuSimpleData[] = [];
        public MenuOrg: Data2.Relation.IMenuOrg[] = [];
        public MenuEditData: Data.Menu.IMenuSimpleData;
        public MenuDelData: Data.Menu.IMenuSimpleData;

        //提交需要用到的接口类
        public changeOrgMenu: Data.Menu.IGrantData[] = [];
        public submitGroup: Data.Menu.ISubmitGroupData[] = [];
        public submitMenu: Data.Menu.ISubmitMenuData[] = [];

        public submitData: Data.Menu.IGroupRightData[] = []
        public OrgName: string;
        public ChageFlag: boolean = false;
        public OperateData: string[] = [];

        public _arry: React.ReactElement<any>[] = [];
        public Level: number = 0;
        public IsMenuRoleBodyHide: Boolean = false;
        public updateFlag: boolean = true;
        public newRowFlag: boolean = false;
        public Type: string = "";
        public isHide: boolean = true;
        public ischage: Boolean = false;
        public getESpan(name: string, config: EditSpanFile.EditSpan.IEditSpanVm) {
            var _espan = this.ESpanDict[name];
            if (_espan) {
                _espan.IsChange = true;
                return _espan;
            }
            else {
                var _es = this.ESpanDict[name] = new ESpanVm(config);
                _es.IsMulit = true;
                return _es;
            }
        }

        public rMenuOrgSender() {
            return this.intoDomR(MenuOrgReact.Menu.MenuOrgReact);
        }

        public rMenuOrgHeadSender() {
            return this.intoDomR(MenuOrgHeadReact.Menu.MenuOrgHeadReact);
        }

        public rMenuOrgTrailSender() {
            return this.intoDomR(MenuOrgTrailReact.Menu.MenuOrgTrailReact);
        }

        public fun_AddMenu(a: Data.Menu.IMenuSimpleData) {
            if (a.isDelete) {
                alert("该节点已经被删除！");
            }
            else {

                a.IsHidden = false;               
                if (a.ActionType== "Add") {
                    this.MenuOrgexport(a);
                }
                this.MenuEditData = a;
                this.Type = "";
                if (a.ButtonList && a.ButtonList) {
                    this.Type = "Btn";
                }
                else if (a.Children && a.Children.length > 0) {
                    this.Type = "Menu";
                    for (var index = 0; index < a.Children.length; index++) {
                        if (a.Children[index].isDelete != true) {
                            this.Type = "Menu";
                        }
                    }
                }
                else {
                    this.Type = "All";
                }
                urlFile.Core.AkUrl.Current().openUrl("$WINNWEMENUNEWPAGE$" + this.Type + "$", true);

            }

        }

        public MenuOrgexport(a: Data.Menu.IMenuSimpleData) {
            a.IsHidden = !a.IsHidden;
            this.isHide = a.IsHidden;
            this.IsMulit = true;
            this.IsChange = true;
            this.forceUpdate("");
            
        }

        public fun_delMenu(a: Data.Menu.IMenuSimpleData) {
            //检查是否有子节点

            if (a.ActionType == "Add") {
                for (var i = 0; i <= a.ParentVm.Children.length; i++) {
                    if (a.ParentVm.Children[i].MenuName == a.MenuName) {
                        a.ParentVm.Children.splice(i, 1);
                    }
                }
            }
            else {
                var operatename = "Del" + a.MenuName;
                var index = this.OperateData.indexOf(operatename)
                if (index > -1) {
                    this.OperateData.splice(index, 1);
                }
                else {
                    this.OperateData.push(operatename);
                }
                if (a.isDelete == undefined) {
                    a.isDelete = true;
                }
                else {
                    a.isDelete = !a.isDelete;
                }
                if (a.isDelete) {
                    a.ActionType = "Del";
                }
                else {
                    a.ActionType = "";
                }
            }
            this.ischange();
            //this.fun_isSame();
            this.forceUpdate("");
        }

        public fun_newRowFlag() {
            this.MenuData.map((a) => {
                return this.iterateFlag(a);
            })

        }

        public iterateFlag(a: Data.Menu.IMenuSimpleData) {
            if ((a.isDelete == undefined || a.isDelete == false) && a.FID == "") {
                this.newRowFlag = true;
            }
            if (a.Children) {
                a.Children.map((b) => {
                    return this.iterateFlag(b)
                });
            }
        }

        public fun_updateBtn(a: Data.Menu.IMenuButton, newMenu: string) {
            if (a.ActionType == "Del")
            { alert("该按钮被删除") }
            else {
                if (a.ActionType != "Add") {
                    if (a.ButtonName != newMenu) {
                        a.ActionType = "Update"
                    } else if (newMenu == a.OriginalName) {
                        a.ActionType = "";
                    }
                }
                a.ButtonName = newMenu;
                this.ischange();
                //this.fun_isSame();
                this.forceUpdate("");
            }
        }

        public fun_updateMenu(a: Data.Menu.IMenuSimpleData, newMenu: string) {
            if (a.isDelete) {
                alert("该节点被删除！");
                this.forceUpdate("");
            }
            else {
                if (a.ActionType != "Add") {
                    if (newMenu == a.OriginalName) {
                        a.ActionType = "";
                    } else if (a.MenuName != newMenu) {
                        a.ActionType = "Update"
                    }
                }
                a.MenuName = newMenu;
            }
            this.ischange();
            this.forceUpdate("");
        }

        public ischange() {
            var c = false;
            var b = false;
            var d = false;
            c = this.ischangeActionType(this.MenuData, d);
            if (this.changeOrgMenu && this.changeOrgMenu.length > 0) {
                //this.ChageFlag = true;
                b = true;
            }

            if (c || b) {
                this.ChageFlag = true;
                this.ischage = true;
            } else {
                this.ChageFlag = false;
                this.ischage = true;
            }
        }

        public ischangeActionType(a: Data.Menu.IMenuSimpleData[], c: boolean) {

            a.map((e) => {
                if (e.ActionType) {
                    c = true;
                }
                if (e.Children) {
                    c = this.ischangeActionType(e.Children, c)
                }
                if (e.ButtonList) {
                    c = this.ischangeButtonActionType(e.ButtonList, c);
                }

            })

            return c;
        }

        public ischangeButtonActionType(a: Data.Menu.IMenuButton[], c: boolean) {
            a.map((e) => {
                if (e.ActionType) {
                    c = true;
                }
            })


            return c
        }

        public addMenu(name: string, types: string, rightValue: string) {
            if (types == "Menu") {
                if (this.MenuEditData.Children == undefined) {
                    this.MenuEditData.Children = [];
                }
                this.MenuEditData.isLeaft = false;
                this.MenuEditData.isParent = true;

                //TODO:发送请求到后台  获取fid
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/getFid", {}, (data) => {
                    if (data) {
                        var newmenu = { FID: data, MenuName: name, ParentId: this.MenuEditData.FID, isParent: false, isLeaft: true, Org: "", Type: types, ActionType: "Add", RightValue: rightValue };
                        this.MenuEditData.Children.unshift(newmenu);
                        this.MenuEditData = null
                        //this.fun_isSame();
                        this.ischange();
                        this.forceUpdate("");
                    }
                });

            }
            else {
                if (this.MenuEditData.ButtonList == undefined) {
                    this.MenuEditData.ButtonList = [];
                }
                urlFile.Core.AkPost("/RightCloud/NewRightConfig/getFid", {}, (data) => {
                    if (data) {
                        var newbtn = { FID: data, ButtonName: name, Org: "", ParentId: this.MenuEditData.FID, ActionType: "Add", IMenuButton: null, RightValue: rightValue };
                        this.MenuEditData.ButtonList.unshift(newbtn);
                        this.MenuEditData = null
                        //this.fun_isSame();
                        this.ischange();
                        this.forceUpdate("");
                    }
                })

            }
        }

        public changeBtnState(a: Data.Menu.IMenuButton, Id: string) {
            var index = a.Org.indexOf(Id);
            if (index > -1) {
                if (index == 0) {
                    a.Org = a.Org.replace(Id, "");
                }
                else {
                    a.Org = a.Org.replace("," + Id, "");
                }
            }
            else {
                if (a.Org == null || a.Org == undefined || a.Org == "") {
                    a.Org = Id;
                }
                else {
                    a.Org = a.Org + "," + Id;
                }
            }
            if (a.ActionType != "add") {
                var operatename = "ck" + a.FID;
                var index = this.OperateData.indexOf(operatename);
                if (index > -1) {
                    this.OperateData.splice(index, 1);
                    a.ActionType = ""
                }
                else {
                    this.OperateData.push(operatename);
                    operatename = "Update" + a.ButtonName;
                    var index = this.OperateData.indexOf(operatename);
                    if (index > -1) {
                        a.ActionType = "Update";
                    }
                    else {
                        a.ActionType = "";
                    }
                    a.ActionType = "Update"
                }
                //this.fun_isSame();
                this.ischange();
            }
            this.forceUpdate("");
        }

        public changeState(a: Data.Menu.IMenuSimpleData, Id: string) {
            if (a.isDelete) {
                alert("该节点被删除！");
                return;
            }
            var index = a.Org.indexOf(Id);
            if (index > -1) {
                if (index == 0) {
                    a.Org = a.Org.replace(Id, "");
                }
                else {
                    a.Org = a.Org.replace("," + Id, "");
                }
            }
            else {
                if (a.Org == null || a.Org == undefined || a.Org == "") {
                    a.Org = Id;
                }
                else {
                    a.Org = a.Org + "," + Id;
                }
            }
            if (a.ActionType != "add") {
                var operatename = "ck" + a.MenuName;
                var index = this.OperateData.indexOf(operatename);
                if (index > -1) {
                    this.OperateData.splice(index, 1);
                    operatename = "Update" + a.MenuName;
                    var index = this.OperateData.indexOf(operatename);
                    if (index > -1) {
                        a.ActionType = "Update";
                    }
                    else {
                        a.ActionType = "";
                    }
                }
                else {
                    this.OperateData.push(operatename);
                    a.ActionType = "Update";
                }
            }
            //this.fun_isSame();
            this.ischange();
            this.forceUpdate("");
        }

        public fun_isCheck(Ids: string, Id: string) {
            var ischeck = false;
            this.MenuOrg.map((a) => {
                if (a.Org == Id && a.Menu == Ids) {
                    ischeck = true;
                    return false;
                }
            })
            return ischeck;
        }

        //改变单选框的状态
        public fun_changeCheck(Org: Data.Menu.IGroupSimpleData, Menu: Data.Menu.IMenuSimpleData, button: Data.Menu.IMenuButton, event: React.FormEvent) {
            var data: Data.Menu.IGrantData = { Key: "", NewKey: "", NewRightIds: [] = [], RightGrantType: "", RightIds: [] = [] };
            //第一步 将原先的关系改变
            if (Menu) {
                if (this.isContainMenuOrg(Org.FID, Menu.FID)) {
                    data.RightGrantType = "Del";
                } else {
                    data.RightGrantType = "Add";
                }
                if (Menu.ActionType == "Add") {
                    data.NewKey = Menu.FID;
                } else {
                    data.Key = Menu.FID;
                }

                data.RightIds.push(Org.FID);

            } else if (button) {
                if (this.isContainMenuOrg(Org.FID, button.FID)) {
                    data.RightGrantType = "Delete";
                } else {
                    data.RightGrantType = "Add";
                }
                if (button.ActionType == "Add") {
                    data.NewKey = button.FID;
                } else {
                    data.Key = button.FID;
                }
                data.RightIds.push(Org.FID);
            }

            //将改变的数据放到集合中
            //this.changeOrgMen
            this.pushChangeOrgMenu(data);
            this.ischange();

            this.forceUpdate("");
        }
        //判断组织和菜单是否有关系
        public isContainMenuOrg(OrgId: string, MenuId: string) {
            var isdelete = true;
            for (var i = 0; i < this.MenuOrg.length; i++) {
                if (this.MenuOrg[i].Org == OrgId && this.MenuOrg[i].Menu == MenuId) {
                    //删除
                    isdelete = false;
                    this.MenuOrg.splice(i, 1);
                    return true;
                }

            }
            if (isdelete) {
                var dd: Data2.Relation.IMenuOrg = {
                    Menu: MenuId,
                    Org: OrgId
                }
                //添加
                this.MenuOrg.push(dd)
                return false;
            }
        }
        //如果先前没有关系 将关系添加到数据中 
        public pushChangeOrgMenu(data: Data.Menu.IGrantData) {
            var iscontain = false;
            for (var i = 0; i < this.changeOrgMenu.length; i++) {
                if (this.changeOrgMenu[i].Key == data.Key && this.changeOrgMenu[i].NewKey == data.NewKey && this.changeOrgMenu[i].NewRightIds[0] == data.NewRightIds[0] && this.changeOrgMenu[i].RightIds[0] == data.RightIds[0]) {
                    iscontain = true;
                    this.changeOrgMenu.splice(i, 1);
                }
            }

            if (!iscontain) {
                this.changeOrgMenu.push(data);
            }
        }

        public fun_iterateSame(b: Data.Menu.IMenuSimpleData) {
            if (b.ActionType != undefined && b.ActionType != "") {
                if (b.ActionType == "add") {
                    if (b.isDelete != true) {
                        this.updateFlag = true;
                    }
                }
                else {
                    this.updateFlag = true;
                }
            }
            if (b.ButtonList) {
                b.ButtonList.map((x) => {
                    if (x.ActionType != undefined && x.ActionType != "") {
                        this.updateFlag = true;
                    }
                })
            }
            if (b.Children) {
                b.Children.map((s) => {
                    this.fun_iterateSame(s);
                })
            }
        }

        public fun_isSame() {
            this.updateFlag = false;
            this.MenuData.map((b) => {
                if (b.ActionType != undefined && b.ActionType != "") {
                    if (b.ActionType == "add") {
                        if (b.isDelete != true) {
                            this.updateFlag = true;
                        }
                    }
                    else {
                        this.updateFlag = true;
                    }
                }
                if (b.ButtonList) {
                    b.ButtonList.map((x) => {
                        if (x.ActionType != undefined && x.ActionType != "") {
                            this.updateFlag = true;
                        }
                    })
                }
                if (b.Children) {
                    b.Children.map((s) => {
                        this.fun_iterateSame(s);
                    })
                }
            })
        }

        public constructor(config?: IMenuOrgPageConfig) {
            super();
            if (config) {
                this.MenuData = config.MenuData;
                this.OrgData = config.OrgData;
                this.MenuOrg = config.Menu_Org;
                this.UniId = config.Unid
            }
        }

        //保存
        public fun_Save() {

            var data: Data.Menu.IGroupRightData;
            var Data: Data.Menu.IGroupRightData[] = [];
            this.tranformeData(this.MenuData, Data)

            Data.push(data);
            var submitData = { "GroupRightDataList": Data }
            var menu = JSON.stringify(submitData)
            //debugger
            //alert(menu);
            
            urlFile.Core.AkPost("/RightCloud/NewRightConfig/MenuOrgSubmit", { data: menu }, (data) => {
                if (data) {
                    //刷新  
                    if (data) {
                        // urlFile.Core.AkUrl.Current().openUrl("$NEWRIGHTMAINPAGE$", true);
                        utilFile.Core.Util.Noty("数据编辑成功");
                        this.emitAppEvent("NewMainDom/MenuOrgPage", this.UniId, data);
                       // urlFile.Core.AkUrl.Current().refresh();
                    }
                }
            });
        }
        //循环调用
        public tranformeData(data: Data.Menu.IMenuSimpleData[], d: Data.Menu.IGroupRightData[] = []) {
            data.map((a) => {
                var model: Data.Menu.IGroupRightData = { GroupDataList: [], MenuDataList: [], GrantDataList: [], Operation: "" };

                if (a.ActionType) {


                    var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "" } };
                    var Group: Data.Menu.ISubmitGroupData = { DataID: "", Data: { GroupID: this.OrgData[0].FID, GroupName: this.OrgData[0].OrgName } }
                    model.GroupDataList.push(Group);

                    MenuModel.Data.FID = a.FID;
                    MenuModel.Data.MenuName = a.MenuName;
                    MenuModel.Data.ParentId = a.ParentId;
                    MenuModel.Data.RightValue = a.RightValue;
                    MenuModel.Data.MenuType = "Menu";
                    model.MenuDataList.push(MenuModel);
                    model.Operation = a.ActionType;
                }


                for (var i = 0; i < this.changeOrgMenu.length; i++) {
                    var iskey = this.changeOrgMenu[i].Key == a.FID || this.changeOrgMenu[i].NewKey == a.FID;
                    var isRight = this.changeOrgMenu[i].NewRightIds[0] == this.OrgData[0].FID || this.changeOrgMenu[i].RightIds[0] == this.OrgData[0].FID;
                    if (iskey && isRight) {
                        model.GrantDataList = [];
                        this.changeOrgMenu[i].MenuType = "Menu";
                        model.GrantDataList.push(this.changeOrgMenu[i]);
                    }
                }

                if (model.GrantDataList.length != 0 || model.GroupDataList.length != 0 || model.MenuDataList.length != 0) {
                    d.push(model);
                }

                if (a.Children) {
                    this.tranformeData(a.Children, d);
                }

                if (a.ButtonList) {
                    this.tranformButton(a.ButtonList, d);
                }
            })
        }

        public tranformButton(data: Data.Menu.IMenuButton[], d: Data.Menu.IGroupRightData[] = []) {
            data.map((a) => {
                var model: Data.Menu.IGroupRightData = { GroupDataList: [], MenuDataList: [], GrantDataList: [], Operation: "" };
                if (a.ActionType) {
                    var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "" } };
                    var Group: Data.Menu.ISubmitGroupData = { DataID: "", Data: { GroupID: this.OrgData[0].FID, GroupName: this.OrgData[0].OrgName } }
                    model.GroupDataList.push(Group);

                    MenuModel.Data.FID = a.FID;
                    MenuModel.Data.MenuName = a.ButtonName;
                    MenuModel.Data.ParentId = a.ParentId;
                    MenuModel.Data.RightValue = a.RightValue;
                    MenuModel.Data.MenuType = "Button";
                    model.MenuDataList.push(MenuModel);
                    model.Operation = a.ActionType;
                }


                for (var i = 0; i < this.changeOrgMenu.length; i++) {
                    var iskey = this.changeOrgMenu[i].Key == a.FID || this.changeOrgMenu[i].NewKey == a.FID;
                    var isRight = this.changeOrgMenu[i].NewRightIds[0] == this.OrgData[0].FID || this.changeOrgMenu[i].RightIds[0] == this.OrgData[0].FID;
                    if (iskey && isRight) {
                        model.GrantDataList = [];
                        this.changeOrgMenu[i].MenuType = "Button";
                        model.GrantDataList.push(this.changeOrgMenu[i]);
                    }
                }

                if (model.GrantDataList.length != 0 || model.GroupDataList.length != 0 || model.MenuDataList.length != 0) {
                    d.push(model);
                }
            })
        }

    }
    export class MenuOrgPageStates extends domCore.DomStates {
    }


    export class MenuOrgPageProps extends domCore.DomProps<MenuOrgPageVm>{
    }



}
