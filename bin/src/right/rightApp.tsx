
import menuFile = require("./../right/menu/MenuListPage");
import menuNewFile = require("./../right/menu/New/MenuNewPage");

import userinfoFile = require("./../right/UserInfo/UserInfoPage");
import userinfoDetailFile = require("./../right/UserInfo/Detail/UserDetailPage");
import userNewFile = require("./../right/UserInfo/New/UserNewPage");
import userUpdateFile = require("./../right/UserInfo/Update/UserUpdatePage");
import menuDetailPageFile = require("./../right/menu/Detail/MenuDetailPage");
import roleFile = require("./../right/role/RoleListPage");
import roleNewFile = require("./../right/role/new/RoleNewPage");
import roleDetailFile = require("./../right/role/detail/RoleDetailPage");
import roleGrantFile = require("./../right/role/RoleGrantPage");
import roleUpdateFile = require("./../right/role/Update/RoleUpdatePage");
import roleRightDetailFile = require("./../right/role/RoleRightDetailPage");

import userManagerPage = require("./../right/UserManage/UserManagePage");
import userRightDetailPage = require("./../right/UserManage/UserRightDetailPage");
import userManageDetail = require("./../right/UserManage/Detail/UserManageDetailPage");
import menuUpdatePageFile = require("./../right/menu/Update/MenuUpdatePage");
import userManageupdateFile = require("./../right/UserManage/Update/UserManageUpdatePage");
import userManageBatchRole = require("./../right/UserManage/BatchRole/UserManageBatchRolePage");
import basePageFile = require("./../right/Base/BaseMDPage");
import OrgDetailPageFile = require("./../right/org/Detail/OrgDetailPage"); OrgDetailPageFile;

import groupFile = require("./../right/group/GroupListPage");
import groupgrantFile = require("./../right/group/GroupGrantPage");
import groupDetailFile = require("./../right/group/Detail/GroupDetailPage");
import groupNewFile = require("./../right/group/New/GroupNewPage");
import groupUpdateFile = require("./../right/group/Update/GroupUpdatePage");
import BaseListPageFile = require("./../right/Base/List/BaseListPage"); BaseListPageFile;

menuUpdatePageFile; basePageFile; groupgrantFile;
userinfoFile; userNewFile; userinfoDetailFile; groupFile; userUpdateFile; groupDetailFile; groupNewFile; groupUpdateFile;
menuFile; menuNewFile; menuDetailPageFile; userManagerPage; roleFile; roleDetailFile; roleNewFile; roleUpdateFile; roleRightDetailFile; userManageDetail; userManageupdateFile;
roleGrantFile; userManageBatchRole; userRightDetailPage;



import basewedPageFile = require("./../04page/BaseWebPage");
import _reg = basewedPageFile._reg;

_reg("RIGHTPAGE", "right/H/rightPage");

_reg("WMHTESTPAGE", "right/H/wmh/wmhTestPage");
_reg("RIGHTLINK", "right/rightconfig/RightlinkPage");
_reg("GROUPORG", "right/rightconfig/Group/GroupOrgPage");
_reg("GROUPSAVE", "right/rightconfig/Group/Save/GroupSavePage");
_reg("GROUPORGNEW", "right/rightconfig/Group/NewGroup/GroupNewPage");
_reg("MENUUSERROLEPAGE", "right/rightconfig/MenuOrgPage/MenuOrgPage");

_reg("CUSTOMCOLPAGE", "right/H/CustomColPage");
_reg("NEWROLEPAGE", "right/H/NewRolePage");
_reg("NEWUSERROLEPAGE", "right/H/NewUserRolePage")
_reg("NEWUSERPAGE", "right/H/NewUserPage");
_reg("NEWNODEPAGE", "right/H/NewNodePage");
_reg("NEWBUTTONPAGE", "right/H/NewButtonPage");
_reg("NEWMENUPAGE", "right/H/NEWMENUPAGE");
_reg("NewNodePage", "right/H/NewNodePage");
_reg("MENUORGLINK", "right/rightconfig/MenuOrgLinkPage");
_reg("NEWMENUPAGE", "right/rightconfig/MenuOrgPage/NewMenuPage");
_reg("RIGHTMAINPAGE", "right/rightconfig/RightMainPage");
_reg("ADDMENUORBUTTONPAGE", "right/rightconfig/MenuUserRolePage/Popup/AddMenuorButtonPage")
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

_reg("FrontDevDocPage","06app/SDK/Doc/FrontDevDocPage")
_reg("DbDevDocPage", "06app/SDK/Doc/DbDevDocPage");
_reg("UpdatelogPage", "06app/SDK/Doc/UpdatelogPage");

_reg("ErrorLogPage", "06app/dev/ErrorLogPage");
_reg("CommentPage","right/H/cxj/CommentPage")

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
_reg("ADDNEWMENUPAGE", "right/newrightconfig/NewMenuRolePage/Popup/AddRCMenuPage")
_reg("RCNewRolePage", "right/newrightconfig/NewMenuRolePage/Popup/RCNewRolePage")
//_reg("MENUNEWPAGE", "right/rightconfig/MenuOrgPage/NewMenu/MenuNewPage");


