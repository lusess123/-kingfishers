var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../01core/Url", "./../../../05tool/EditSpan", "./RightReact/MenuOrgHeadReact", "./RightReact/MenuOrgReact", "./RightReact/MenuOrgTrailReact"], function (require, exports, domFile, React, urlFile, EditSpanFile, MenuOrgHeadReact, MenuOrgReact, MenuOrgTrailReact) {
    "use strict";
    var domCore = domFile.Core;
    var ESpanVm = EditSpanFile.EditSpan.EditSpanVm;
    var MenuOrgPage;
    (function (MenuOrgPage) {
        var MenuOrgPageAction = (function (_super) {
            __extends(MenuOrgPageAction, _super);
            function MenuOrgPageAction() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageAction;
        }(domCore.DomAction));
        MenuOrgPage.MenuOrgPageAction = MenuOrgPageAction;
        var MenuOrgPageReact = (function (_super) {
            __extends(MenuOrgPageReact, _super);
            function MenuOrgPageReact() {
                _super.apply(this, arguments);
                this.state = new MenuOrgPageStates();
            }
            MenuOrgPageReact.prototype.pSender = function () {
                return React.createElement("div", null, "名称为: MenuOrgPage的组件");
            };
            MenuOrgPageReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuOrgPageReact;
        }(domCore.DomReact));
        MenuOrgPage.MenuOrgPageReact = MenuOrgPageReact;
        var MenuOrgPageVm = (function (_super) {
            __extends(MenuOrgPageVm, _super);
            function MenuOrgPageVm(config) {
                _super.call(this);
                this.ReactType = MenuOrgPageReact;
                this.ESpanDict = {};
                this.OrgData = [];
                this.MenuData = [];
                this.MenuOrg = [];
                //提交需要用到的接口类
                this.changeOrgMenu = [];
                this.submitGroup = [];
                this.submitMenu = [];
                this.submitData = [];
                this.ChageFlag = false;
                this.OperateData = [];
                this._arry = [];
                this.Level = 0;
                this.IsMenuRoleBodyHide = false;
                this.updateFlag = true;
                this.newRowFlag = false;
                this.Type = "";
                this.isHide = true;
                if (config) {
                    debugger;
                    this.MenuData = config.MenuData;
                    this.OrgData = config.OrgData;
                    this.MenuOrg = config.Menu_Org;
                    this.UniId = config.Unid;
                }
            }
            MenuOrgPageVm.prototype.getESpan = function (name, config) {
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
            };
            MenuOrgPageVm.prototype.rMenuOrgSender = function () {
                return this.intoDomR(MenuOrgReact.Menu.MenuOrgReact);
            };
            MenuOrgPageVm.prototype.rMenuOrgHeadSender = function () {
                return this.intoDomR(MenuOrgHeadReact.Menu.MenuOrgHeadReact);
            };
            MenuOrgPageVm.prototype.rMenuOrgTrailSender = function () {
                return this.intoDomR(MenuOrgTrailReact.Menu.MenuOrgTrailReact);
            };
            MenuOrgPageVm.prototype.fun_AddMenu = function (a) {
                if (a.isDelete) {
                    alert("该节点已经被删除！");
                }
                else {
                    a.IsHidden = false;
                    //MenuOrgReact.Menu.MenuOrgReact.exportMenu(a);
                    if (a.ActionType != "Add") {
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
                    urlFile.Core.AkUrl.Current().openUrl("$WINMENUNEWPAGE$" + this.Type + "$", true);
                }
            };
            MenuOrgPageVm.prototype.MenuOrgexport = function (a) {
                a.IsHidden = !a.IsHidden;
                this.isHide = a.IsHidden;
                this.IsMulit = true;
                this.IsChange = true;
                this.forceUpdate("");
            };
            MenuOrgPageVm.prototype.fun_delMenu = function (a) {
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
                    var index = this.OperateData.indexOf(operatename);
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
            };
            MenuOrgPageVm.prototype.fun_newRowFlag = function () {
                var _this = this;
                this.MenuData.map(function (a) {
                    return _this.iterateFlag(a);
                });
            };
            MenuOrgPageVm.prototype.iterateFlag = function (a) {
                var _this = this;
                if ((a.isDelete == undefined || a.isDelete == false) && a.FID == "") {
                    this.newRowFlag = true;
                }
                if (a.Children) {
                    a.Children.map(function (b) {
                        return _this.iterateFlag(b);
                    });
                }
            };
            MenuOrgPageVm.prototype.fun_updateBtn = function (a, newMenu) {
                if (a.ActionType == "Del") {
                    alert("该按钮被删除");
                }
                else {
                    if (a.ActionType != "Add") {
                        if (a.ButtonName != newMenu) {
                            a.ActionType = "Update";
                        }
                        else if (newMenu == a.OriginalName) {
                            a.ActionType = "";
                        }
                    }
                    a.ButtonName = newMenu;
                    this.ischange();
                    //this.fun_isSame();
                    this.forceUpdate("");
                }
            };
            MenuOrgPageVm.prototype.fun_updateMenu = function (a, newMenu) {
                if (a.isDelete) {
                    alert("该节点被删除！");
                    this.forceUpdate("");
                }
                else {
                    if (a.ActionType != "Add") {
                        if (newMenu == a.OriginalName) {
                            a.ActionType = "";
                        }
                        else if (a.MenuName != newMenu) {
                            a.ActionType = "Update";
                        }
                    }
                    a.MenuName = newMenu;
                }
                this.ischange();
                this.forceUpdate("");
            };
            MenuOrgPageVm.prototype.ischange = function () {
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
                }
                else {
                    this.ChageFlag = false;
                }
            };
            MenuOrgPageVm.prototype.ischangeActionType = function (a, c) {
                var _this = this;
                a.map(function (e) {
                    if (e.ActionType) {
                        c = true;
                    }
                    if (e.Children) {
                        c = _this.ischangeActionType(e.Children, c);
                    }
                    if (e.ButtonList) {
                        c = _this.ischangeButtonActionType(e.ButtonList, c);
                    }
                });
                return c;
            };
            MenuOrgPageVm.prototype.ischangeButtonActionType = function (a, c) {
                a.map(function (e) {
                    if (e.ActionType) {
                        c = true;
                    }
                });
                return c;
            };
            MenuOrgPageVm.prototype.addMenu = function (name, types, rightValue) {
                var _this = this;
                if (types == "Menu") {
                    if (this.MenuEditData.Children == undefined) {
                        this.MenuEditData.Children = [];
                    }
                    this.MenuEditData.isLeaft = false;
                    this.MenuEditData.isParent = true;
                    //TODO:发送请求到后台  获取fid
                    urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                        if (data) {
                            var newmenu = { FID: data, MenuName: name, ParentId: _this.MenuEditData.FID, isParent: false, isLeaft: true, Org: "", Type: types, ActionType: "Add", RightValue: rightValue };
                            _this.MenuEditData.Children.push(newmenu);
                            _this.MenuEditData = null;
                            //this.fun_isSame();
                            _this.ischange();
                            _this.forceUpdate("");
                        }
                    });
                }
                else {
                    if (this.MenuEditData.ButtonList == undefined) {
                        this.MenuEditData.ButtonList = [];
                    }
                    urlFile.Core.AkPost("/RightCloud/RightConfig/getFid", {}, function (data) {
                        if (data) {
                            var newbtn = { FID: data, ButtonName: name, Org: "", ParentId: _this.MenuEditData.FID, ActionType: "Add", IMenuButton: null, RightValue: _this.MenuEditData.RightValue };
                            _this.MenuEditData.ButtonList.push(newbtn);
                            _this.MenuEditData = null;
                            //this.fun_isSame();
                            _this.ischange();
                            _this.forceUpdate("");
                        }
                    });
                }
            };
            MenuOrgPageVm.prototype.changeBtnState = function (a, Id) {
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
                        a.ActionType = "";
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
                        a.ActionType = "Update";
                    }
                    //this.fun_isSame();
                    this.ischange();
                }
                this.forceUpdate("");
            };
            MenuOrgPageVm.prototype.changeState = function (a, Id) {
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
            };
            MenuOrgPageVm.prototype.fun_isCheck = function (Ids, Id) {
                var ischeck = false;
                this.MenuOrg.map(function (a) {
                    if (a.Org == Id && a.Menu == Ids) {
                        ischeck = true;
                        return false;
                    }
                });
                return ischeck;
            };
            //改变单选框的状态
            MenuOrgPageVm.prototype.fun_changeCheck = function (Org, Menu, button, event) {
                var data = { Key: "", NewKey: "", NewRightIds: [], RightGrantType: "", RightIds: [] };
                //第一步 将原先的关系改变
                if (Menu) {
                    if (this.isContainMenuOrg(Org.FID, Menu.FID)) {
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
                    data.RightIds.push(Org.FID);
                }
                else if (button) {
                    if (this.isContainMenuOrg(Org.FID, button.FID)) {
                        data.RightGrantType = "Delete";
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
                    data.RightIds.push(Org.FID);
                }
                //将改变的数据放到集合中
                //this.changeOrgMen
                this.pushChangeOrgMenu(data);
                this.ischange();
                this.forceUpdate("");
            };
            //判断组织和菜单是否有关系
            MenuOrgPageVm.prototype.isContainMenuOrg = function (OrgId, MenuId) {
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
                    var dd = {
                        Menu: MenuId,
                        Org: OrgId
                    };
                    //添加
                    this.MenuOrg.push(dd);
                    return false;
                }
            };
            //如果先前没有关系 将关系添加到数据中 
            MenuOrgPageVm.prototype.pushChangeOrgMenu = function (data) {
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
            };
            MenuOrgPageVm.prototype.fun_iterateSame = function (b) {
                var _this = this;
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
                    b.ButtonList.map(function (x) {
                        if (x.ActionType != undefined && x.ActionType != "") {
                            _this.updateFlag = true;
                        }
                    });
                }
                if (b.Children) {
                    b.Children.map(function (s) {
                        _this.fun_iterateSame(s);
                    });
                }
            };
            MenuOrgPageVm.prototype.fun_isSame = function () {
                var _this = this;
                this.updateFlag = false;
                this.MenuData.map(function (b) {
                    if (b.ActionType != undefined && b.ActionType != "") {
                        if (b.ActionType == "add") {
                            if (b.isDelete != true) {
                                _this.updateFlag = true;
                            }
                        }
                        else {
                            _this.updateFlag = true;
                        }
                    }
                    if (b.ButtonList) {
                        b.ButtonList.map(function (x) {
                            if (x.ActionType != undefined && x.ActionType != "") {
                                _this.updateFlag = true;
                            }
                        });
                    }
                    if (b.Children) {
                        b.Children.map(function (s) {
                            _this.fun_iterateSame(s);
                        });
                    }
                });
            };
            //保存
            MenuOrgPageVm.prototype.fun_Save = function () {
                var _this = this;
                var data;
                var Data = [];
                this.tranformeData(this.MenuData, Data);
                Data.push(data);
                var submitData = { "GroupRightDataList": Data };
                var menu = JSON.stringify(submitData);
                debugger;
                urlFile.Core.AkPost("/RightCloud/RightConfig/MenuOrgSubmit", { data: menu }, function (data) {
                    if (data) {
                        //刷新  
                        if (data) {
                            //urlFile.Core.AkUrl.Current().openUrl("$RIGHTMAINPAGE$", true);
                            _this.emitAppEvent("MainDom/MenuOrgPage", _this.UniId, data);
                        }
                    }
                });
            };
            //循环调用
            MenuOrgPageVm.prototype.tranformeData = function (data, d) {
                var _this = this;
                if (d === void 0) { d = []; }
                data.map(function (a) {
                    var model = { GroupDataList: [], MenuDataList: [], GrantDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "" } };
                        var Group = { DataID: "", Data: { GroupID: _this.OrgData[0].FID, GroupName: _this.OrgData[0].OrgName } };
                        model.GroupDataList.push(Group);
                        MenuModel.Data.FID = a.FID;
                        MenuModel.Data.MenuName = a.MenuName;
                        MenuModel.Data.ParentId = a.ParentId;
                        MenuModel.Data.RightValue = a.RightValue;
                        MenuModel.Data.MenuType = "Menu";
                        model.MenuDataList.push(MenuModel);
                        model.Operation = a.ActionType;
                    }
                    for (var i = 0; i < _this.changeOrgMenu.length; i++) {
                        var iskey = _this.changeOrgMenu[i].Key == a.FID || _this.changeOrgMenu[i].NewKey == a.FID;
                        var isRight = _this.changeOrgMenu[i].NewRightIds[0] == _this.OrgData[0].FID || _this.changeOrgMenu[i].RightIds[0] == _this.OrgData[0].FID;
                        if (iskey && isRight) {
                            model.GrantDataList = [];
                            _this.changeOrgMenu[i].MenuType = "Menu";
                            model.GrantDataList.push(_this.changeOrgMenu[i]);
                        }
                    }
                    if (model.GrantDataList.length != 0 || model.GroupDataList.length != 0 || model.MenuDataList.length != 0) {
                        d.push(model);
                    }
                    if (a.Children) {
                        _this.tranformeData(a.Children, d);
                    }
                    if (a.ButtonList) {
                        _this.tranformButton(a.ButtonList, d);
                    }
                });
            };
            MenuOrgPageVm.prototype.tranformButton = function (data, d) {
                var _this = this;
                if (d === void 0) { d = []; }
                data.map(function (a) {
                    var model = { GroupDataList: [], MenuDataList: [], GrantDataList: [], Operation: "" };
                    if (a.ActionType) {
                        var MenuModel = { DataID: "", Data: { FID: "", MenuName: "", ParentId: "", RightDesc: "", RightValue: "", MenuType: "" } };
                        var Group = { DataID: "", Data: { GroupID: _this.OrgData[0].FID, GroupName: _this.OrgData[0].OrgName } };
                        model.GroupDataList.push(Group);
                        MenuModel.Data.FID = a.FID;
                        MenuModel.Data.MenuName = a.ButtonName;
                        MenuModel.Data.ParentId = a.ParentId;
                        MenuModel.Data.RightValue = a.RightValue;
                        MenuModel.Data.MenuType = "Button";
                        model.MenuDataList.push(MenuModel);
                        model.Operation = a.ActionType;
                    }
                    for (var i = 0; i < _this.changeOrgMenu.length; i++) {
                        var iskey = _this.changeOrgMenu[i].Key == a.FID || _this.changeOrgMenu[i].NewKey == a.FID;
                        var isRight = _this.changeOrgMenu[i].NewRightIds[0] == _this.OrgData[0].FID || _this.changeOrgMenu[i].RightIds[0] == _this.OrgData[0].FID;
                        if (iskey && isRight) {
                            model.GrantDataList = [];
                            _this.changeOrgMenu[i].MenuType = "Button";
                            model.GrantDataList.push(_this.changeOrgMenu[i]);
                        }
                    }
                    if (model.GrantDataList.length != 0 || model.GroupDataList.length != 0 || model.MenuDataList.length != 0) {
                        d.push(model);
                    }
                });
            };
            return MenuOrgPageVm;
        }(domCore.DomVm));
        MenuOrgPage.MenuOrgPageVm = MenuOrgPageVm;
        var MenuOrgPageStates = (function (_super) {
            __extends(MenuOrgPageStates, _super);
            function MenuOrgPageStates() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageStates;
        }(domCore.DomStates));
        MenuOrgPage.MenuOrgPageStates = MenuOrgPageStates;
        var MenuOrgPageProps = (function (_super) {
            __extends(MenuOrgPageProps, _super);
            function MenuOrgPageProps() {
                _super.apply(this, arguments);
            }
            return MenuOrgPageProps;
        }(domCore.DomProps));
        MenuOrgPage.MenuOrgPageProps = MenuOrgPageProps;
    })(MenuOrgPage = exports.MenuOrgPage || (exports.MenuOrgPage = {}));
});
