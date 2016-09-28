import domFile = require("./../../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import pageViewFile = require("./../../../../07data/PageView");
import EditSpanFile = require("./../../../../05tool/EditSpan");
import Data = require("./Data");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

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
        MenuData:Data.Menu.IMenuSimpleData[];
        OrgData: Data.Menu.IGroupSimpleData[];
    }
    export class MenuOrgPageVm extends domCore.DomVm {
        public ReactType = MenuOrgPageReact;
        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

        public OrgData: Data.Menu.IGroupSimpleData[] = [];
        public OrignData: Data.Menu.IGroupSimpleData[] = [];
        public MenuData: Data.Menu.IMenuSimpleData[] = [];
        public MenuEditData: Data.Menu.IMenuSimpleData;
        public MenuDelData: Data.Menu.IMenuSimpleData;
        public OperateData: string[] = [];

        public _arry: React.ReactElement<any>[] = [];
        public Level: number = 0;
        public IsMenuRoleBodyHide: Boolean = false;
        public updateFlag: boolean = false;
        public newRowFlag: boolean = false;
        public Type: string = "";
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
                this.MenuEditData = a;
                this.Type = "";
                if (a.ButtonList) {
                    this.Type = "Btn";
                }
                else if (a.Children) {
                    this.Type = "All";
                    for (var index = 0; index < a.Children.length; index++) {
                        if (a.Children[index].isDelete != true) {
                            this.Type = "Menu";
                        }
                    }
                }
                else {
                    this.Type = "All";
                }
                urlFile.Core.AkUrl.Current().openUrl("$WINSmmMENUNEWPAGE$" + this.Type + "$", true);

            }
            
        }

        public fun_delMenu(a: Data.Menu.IMenuSimpleData) {
            if (a.ActionType == "add") {
                for (var i = 0; i <= a.ParentVm.Children.length; i++) {
                    if (a.ParentVm.Children[i].MenuName == a.MenuName) {
                        a.ParentVm.Children.splice(i, 1);
                    }
                }
            }
            else
            {     
                var operatename = "del" + a.MenuName;
                var index = this.OperateData.indexOf(operatename)
                if (index >-1)
                {
                    this.OperateData.splice(index,1);
                }
                else
                {
                    this.OperateData.push(operatename);
                }
                if (a.isDelete == undefined) {
                    a.isDelete = true;
                }
                else {
                    a.isDelete = !a.isDelete;
                }
                if (a.isDelete) {
                    a.ActionType = "del";
                }
                else
                {
                    a.ActionType = "";
                }
            }
            this.fun_isSame();
            this.forceUpdate("");
        }

        public fun_newRowFlag() {
            this.MenuData.map((a) => {
                return this.iterateFlag(a);
            })

        }
        public iterateFlag(a: Data.Menu.IMenuSimpleData) {
            if ((a.isDelete == undefined || a.isDelete == false) && a.MenuName == "") {
                this.newRowFlag = true;
            }
            if (a.Children) {
                a.Children.map((b) => {
                    return this.iterateFlag(b)
                });
            }
        }
        public fun_updateBtn(a: Data.Menu.IMenuButton, newMenu: string) {
            if (a.ButtonName != newMenu) {
                a.ActionType = "update"
            }
            a.ButtonName = newMenu;
            this.fun_isSame();
            this.forceUpdate("");
        }
        public fun_updateMenu(a: Data.Menu.IMenuSimpleData, newMenu: string) {
            if (a.isDelete)
            {
                alert("该节点被删除！");
                this.forceUpdate("");
            }
            else
            {
                if (a.MenuName != newMenu) {
                    a.ActionType = "update"
                }
                a.MenuName = newMenu;
            }
            this.fun_isSame();
            this.forceUpdate("");
        }

        public addMenu(name: string, types: string) {
         
            if (types == "Menu") {
                if (this.MenuEditData.Children == undefined) {
                    this.MenuEditData.Children = [];
                }
                this.MenuEditData.isLeaft = false;
                this.MenuEditData.isParent = true;
                var newmenu = { FID: "", MenuName: name, ParentId:this.MenuEditData.FID, isParent: false, isLeaft: true, Org: "", Type: types, ActionType: "add" };
                this.MenuEditData.Children.push(newmenu);
            }
            else
            {
                if (this.MenuEditData.ButtonList == undefined) {
                    this.MenuEditData.ButtonList = [];
                }
                var newbtn = { Fid: "", ButtonName: name, Org: "", ParentId: this.MenuEditData.FID, ActionType: "add" };
                this.MenuEditData.ButtonList.push(newbtn);
            }

            this.MenuEditData = null
            this.fun_isSame();
            this.forceUpdate("");
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
                var operatename = "ck" + a.Fid;
                var index = this.OperateData.indexOf(operatename);
                if (index > -1) {
                    this.OperateData.splice(index, 1);
                    a.ActionType = ""
                }
                else {
                    this.OperateData.push(operatename);
                    operatename = "update" + a.ButtonName;
                    var index = this.OperateData.indexOf(operatename);
                    if (index > -1) {
                        a.ActionType = "update";
                    }
                    else {
                        a.ActionType = "";
                    }
                    a.ActionType = "update"
                }
                this.fun_isSame();
            }
            this.forceUpdate("");
        }
        public changeState(a: Data.Menu.IMenuSimpleData, Id: string) {
            if (a.isDelete)
            {
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
                    operatename = "update" + a.MenuName;
                    var index = this.OperateData.indexOf(operatename);
                    if (index > -1) {
                        a.ActionType = "update";
                    }
                    else {
                        a.ActionType = "";
                    }
                }
                else {
                    this.OperateData.push(operatename);
                    a.ActionType = "update";
                }
            }
            this.fun_isSame();
            this.forceUpdate("");
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
        public fun_iterateSame(b: Data.Menu.IMenuSimpleData)
        {
            debugger;
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
                if (b.Org == undefined || b.Org == "") {
                    b.Org = this.OrgData[0].FID;
                    b.ButtonList.map((x) => {
                        if (x.Org == "" || x.Org == undefined) {
                            b.Org = "";
                        }
                    })

                }
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
        public fun_isSame()
        {
            this.updateFlag = false;
            this.MenuData.map((b) => {
                if (b.ActionType != undefined && b.ActionType !="")
                {
                    if (b.ActionType == "add")
                    {
                        if (b.isDelete != true)
                        {
                            this.updateFlag = true;
                        }
                    }
                    else
                    {
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
                this.OrignData = config.OrgData
            }

            //可以添加监听
        }
        public fun_Save() {
            var menu = JSON.stringify(this.MenuData)
            urlFile.Core.AkPost("/RightCloud/Menu/TestSaveMenu", { menus: menu }, (data) => {
                debugger;
                if (data) {
                    alert(data);
                }
            });
        }
    }
    export class MenuOrgPageStates extends domCore.DomStates {
    }


    export class MenuOrgPageProps extends domCore.DomProps<MenuOrgPageVm>{
    }



}


