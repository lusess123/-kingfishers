var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "react", "./../../../../01core/Url", "./../../../../05tool/EditSpan", "./RightReact/MenuOrgHeadReact", "./RightReact/MenuOrgReact", "./RightReact/MenuOrgTrailReact"], function (require, exports, domFile, React, urlFile, EditSpanFile, MenuOrgHeadReact, MenuOrgReact, MenuOrgTrailReact) {
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
                this.OrignData = [];
                this.MenuData = [];
                this.OperateData = [];
                this._arry = [];
                this.Level = 0;
                this.IsMenuRoleBodyHide = false;
                this.updateFlag = false;
                this.newRowFlag = false;
                this.Type = "";
                if (config) {
                    this.MenuData = config.MenuData;
                    this.OrgData = config.OrgData;
                    this.OrignData = config.OrgData;
                }
                //可以添加监听
            }
            MenuOrgPageVm.prototype.getESpan = function (name, config) {
                var _espan = this.ESpanDict[name];
                if (_espan) {
                    return _espan;
                }
                else {
                    var _es = this.ESpanDict[name] = new ESpanVm(config);
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
            };
            MenuOrgPageVm.prototype.fun_delMenu = function (a) {
                if (a.ActionType == "add") {
                    for (var i = 0; i <= a.ParentVm.Children.length; i++) {
                        if (a.ParentVm.Children[i].MenuName == a.MenuName) {
                            a.ParentVm.Children.splice(i, 1);
                        }
                    }
                }
                else {
                    var operatename = "del" + a.MenuName;
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
                        a.ActionType = "del";
                    }
                    else {
                        a.ActionType = "";
                    }
                }
                this.fun_isSame();
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
                if ((a.isDelete == undefined || a.isDelete == false) && a.MenuName == "") {
                    this.newRowFlag = true;
                }
                if (a.Children) {
                    a.Children.map(function (b) {
                        return _this.iterateFlag(b);
                    });
                }
            };
            MenuOrgPageVm.prototype.fun_updateBtn = function (a, newMenu) {
                if (a.ButtonName != newMenu) {
                    a.ActionType = "update";
                }
                a.ButtonName = newMenu;
                this.fun_isSame();
                this.forceUpdate("");
            };
            MenuOrgPageVm.prototype.fun_updateMenu = function (a, newMenu) {
                if (a.isDelete) {
                    alert("该节点被删除！");
                    this.forceUpdate("");
                }
                else {
                    if (a.MenuName != newMenu) {
                        a.ActionType = "update";
                    }
                    a.MenuName = newMenu;
                }
                this.fun_isSame();
                this.forceUpdate("");
            };
            MenuOrgPageVm.prototype.addMenu = function (name, types) {
                if (types == "Menu") {
                    if (this.MenuEditData.Children == undefined) {
                        this.MenuEditData.Children = [];
                    }
                    this.MenuEditData.isLeaft = false;
                    this.MenuEditData.isParent = true;
                    var newmenu = { FID: "", MenuName: name, ParentId: this.MenuEditData.FID, isParent: false, isLeaft: true, Org: "", Type: types, ActionType: "add" };
                    this.MenuEditData.Children.push(newmenu);
                }
                else {
                    if (this.MenuEditData.ButtonList == undefined) {
                        this.MenuEditData.ButtonList = [];
                    }
                    var newbtn = { Fid: "", ButtonName: name, Org: "", ParentId: this.MenuEditData.FID, ActionType: "add" };
                    this.MenuEditData.ButtonList.push(newbtn);
                }
                this.MenuEditData = null;
                this.fun_isSame();
                this.forceUpdate("");
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
                    var operatename = "ck" + a.Fid;
                    var index = this.OperateData.indexOf(operatename);
                    if (index > -1) {
                        this.OperateData.splice(index, 1);
                        a.ActionType = "";
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
                        a.ActionType = "update";
                    }
                    this.fun_isSame();
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
            };
            MenuOrgPageVm.prototype.fun_isCheck = function (Ids, Id) {
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
            MenuOrgPageVm.prototype.fun_iterateSame = function (b) {
                var _this = this;
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
                        b.ButtonList.map(function (x) {
                            if (x.Org == "" || x.Org == undefined) {
                                b.Org = "";
                            }
                        });
                    }
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
            MenuOrgPageVm.prototype.fun_Save = function () {
                var menu = JSON.stringify(this.MenuData);
                urlFile.Core.AkPost("/RightCloud/Menu/TestSaveMenu", { menus: menu }, function (data) {
                    debugger;
                    if (data) {
                        alert(data);
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
