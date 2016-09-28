define(["require", "exports", "./../right/menu/MenuListPage", "./../right/menu/New/MenuNewPage", "./../right/UserInfo/UserInfoPage", "./../right/UserInfo/Detail/UserDetailPage", "./../right/UserInfo/New/UserNewPage", "./../right/UserInfo/Update/UserUpdatePage", "./../right/menu/Detail/MenuDetailPage", "./../right/role/RoleListPage", "./../right/role/new/RoleNewPage", "./../right/role/detail/RoleDetailPage", "./../right/role/RoleGrantPage", "./../right/role/Update/RoleUpdatePage", "./../right/role/RoleRightDetailPage", "./../right/UserManage/UserManagePage", "./../right/UserManage/UserRightDetailPage", "./../right/UserManage/Detail/UserManageDetailPage", "./../right/menu/Update/MenuUpdatePage", "./../right/UserManage/Update/UserManageUpdatePage", "./../right/UserManage/BatchRole/UserManageBatchRolePage", "./../right/Base/BaseMDPage", "./../right/org/Detail/OrgDetailPage", "./../right/group/GroupListPage", "./../right/group/GroupGrantPage", "./../right/group/Detail/GroupDetailPage", "./../right/group/New/GroupNewPage", "./../right/group/Update/GroupUpdatePage", "./../right/Base/List/BaseListPage", "./../04page/BaseWebPage"], function (require, exports, menuFile, menuNewFile, userinfoFile, userinfoDetailFile, userNewFile, userUpdateFile, menuDetailPageFile, roleFile, roleNewFile, roleDetailFile, roleGrantFile, roleUpdateFile, roleRightDetailFile, userManagerPage, userRightDetailPage, userManageDetail, menuUpdatePageFile, userManageupdateFile, userManageBatchRole, basePageFile, OrgDetailPageFile, groupFile, groupgrantFile, groupDetailFile, groupNewFile, groupUpdateFile, BaseListPageFile, basewedPageFile) {
    "use strict";
    OrgDetailPageFile;
    BaseListPageFile;
    menuUpdatePageFile;
    basePageFile;
    groupgrantFile;
    userinfoFile;
    userNewFile;
    userinfoDetailFile;
    groupFile;
    userUpdateFile;
    groupDetailFile;
    groupNewFile;
    groupUpdateFile;
    menuFile;
    menuNewFile;
    menuDetailPageFile;
    userManagerPage;
    roleFile;
    roleDetailFile;
    roleNewFile;
    roleUpdateFile;
    roleRightDetailFile;
    userManageDetail;
    userManageupdateFile;
    roleGrantFile;
    userManageBatchRole;
    userRightDetailPage;
    var _reg = basewedPageFile._reg;
    _reg("RIGHTPAGE", "right/H/rightPage");
    _reg("WMHTESTPAGE", "right/H/wmh/wmhTestPage");
    _reg("RIGHTLINK", "right/rightconfig/RightlinkPage");
    _reg("GROUPORG", "right/rightconfig/Group/GroupOrgPage");
    _reg("GROUPSAVE", "right/rightconfig/Group/Save/GroupSavePage");
    _reg("GROUPORGNEW", "right/rightconfig/Group/NewGroup/GroupNewPage");
    _reg("MENUUSERROLEPAGE", "right/rightconfig/MenuOrgPage/MenuOrgPage");
    _reg("CUSTOMCOLPAGE", "right/H/CustomColPage");
    _reg("NEWROLEPAGE", "right/H/NewRolePage");
    _reg("NEWUSERROLEPAGE", "right/H/NewUserRolePage");
    _reg("NEWUSERPAGE", "right/H/NewUserPage");
    _reg("NEWNODEPAGE", "right/H/NewNodePage");
    _reg("NEWBUTTONPAGE", "right/H/NewButtonPage");
    _reg("NEWMENUPAGE", "right/H/NEWMENUPAGE");
    _reg("NewNodePage", "right/H/NewNodePage");
    _reg("MENUORGLINK", "right/rightconfig/MenuOrgLinkPage");
    _reg("NEWMENUPAGE", "right/rightconfig/MenuOrgPage/NewMenuPage");
    _reg("RIGHTMAINPAGE", "right/rightconfig/RightMainPage");
    _reg("ADDMENUORBUTTONPAGE", "right/rightconfig/MenuUserRolePage/Popup/AddMenuorButtonPage");
    _reg("MENUNEWPAGE", "right/rightconfig/MenuOrgPage/NewMenu/MenuNewPage");
    _reg("ORGLISTPAGE", "right/org/list/rightPage");
    _reg("NEWCOLLECTPAGE", "right/H/NewCollectPage");
    _reg("ATAWPLATFORMPAGE", "right/H/hdz/atawPlatformPage");
    _reg("NEWORGPAGES", "right/H/NewOrgPageS");
    _reg("CXJTESTPAGE", "right/H/cxj/CXJTESTPAGE");
    _reg("HWORKBENCHPAGE", "right/H/cxj/HWorkBenchPage");
    _reg("zykTestPage", "right/H/zyk/zykTestPage");
    _reg("hdzTestPage", "right/H/hdz/hdzTestPage");
    _reg("HXsdPage", "right/H/hdz/HXsdPage");
    _reg("PluginLogPage", "right/H/hdz/PluginLog/PluginLogPage");
    _reg("zhmTestPage", "right/H/zhm/zhmTestPage");
    _reg("SQTESTPAGE", "right/H/sq/sqTestPage");
    _reg("smmTestPage", "right/H/smm/smmTestPage");
    _reg("xbgTestPage", "right/H/xbg/xbgTestPage");
    _reg("xbgAddPage", "right/H/xbg/New/xbgAddPage");
    _reg("xbgDetailPage", "right/H/xbg/Detail/xbgDetailPage");
    _reg("xbgUpdatePage", "right/H/xbg/Update/xbgUpdatePage");
    _reg("SmmMENUNEWPAGE", "right/H/smm/MenuOrgPage/NewMenu/MenuNewPage");
    _reg("XsdPage", "06app/SDK/Doc/xsd/XsdPage");
    //XML
    _reg("_ApplicationPage", "right/H/hdz/XML/ApplicationPage");
    _reg("ApplicationPage", "right/H/zjj/ApplicationPage/ApplicationPage");
    _reg("DBPage", "right/H/hdz/XML/DBPage");
    _reg("XMLPanelPage", "right/H/hdz/XML/XMLPanelPage");
    _reg("MvcConfigPage", "right/H/hdz/XML/MvcConfigPage");
    _reg("FileMConfigPage", "right/H/hdz/XML/FileMConfigPage");
    _reg("FrontDevDocPage", "06app/SDK/Doc/FrontDevDocPage");
    _reg("DbDevDocPage", "06app/SDK/Doc/DbDevDocPage");
    _reg("UpdatelogPage", "06app/SDK/Doc/UpdatelogPage");
    _reg("ErrorLogPage", "06app/dev/ErrorLogPage");
    _reg("CommentPage", "right/H/cxj/CommentPage");
    //BD_PAYINFOPAGE
    _reg("BD_PAYINFOPAGE", "right/bd_PayInfoPage");
    //新权限配置页面
    _reg("NewGroupOrgPage", "right/newrightconfig/NewGroup/NewGroupOrgPage");
    _reg("NewGroupNewPage", "right/newrightconfig/NewGroup/NewGroup/NewGroupNewPage");
    _reg("NewGroupSavePage", "right/newrightconfig/NewGroup/Save/NewGroupSavePage");
    _reg("SQAPPLICATIONPAGE", "06app/SDK/Config/Application/ApplicationPage");
    _reg("FileManageConfigPage", "06app/SDK/Config/FileManage/FileMConfigPage");
    //DB配置页面
    _reg("ZHMDBPAGE", "06app/SDK/Config/DB/DBPage");
    _reg("NWEMENUNEWPAGE", "right/newrightconfig/NewMenuOrgPage/NewMenu/MenuNewPage");
    _reg("NewRightMainPage", "right/newrightconfig/NewRightMainPage");
    _reg("ADDNEWMENUPAGE", "right/newrightconfig/NewMenuRolePage/Popup/AddRCMenuPage");
    _reg("RCNewRolePage", "right/newrightconfig/NewMenuRolePage/Popup/RCNewRolePage");
});
//_reg("MENUNEWPAGE", "right/rightconfig/MenuOrgPage/NewMenu/MenuNewPage");