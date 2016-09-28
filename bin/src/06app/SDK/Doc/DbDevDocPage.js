var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../04page/BaseWebPage", "react"], function (require, exports, iocFile, basewedPageFile, React) {
    "use strict";
    var DbDevDocPage;
    (function (DbDevDocPage) {
        var DbDevDocPageAction = (function (_super) {
            __extends(DbDevDocPageAction, _super);
            function DbDevDocPageAction() {
                _super.apply(this, arguments);
            }
            return DbDevDocPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        DbDevDocPage.DbDevDocPageAction = DbDevDocPageAction;
        var DbDevDocPageReact = (function (_super) {
            __extends(DbDevDocPageReact, _super);
            function DbDevDocPageReact() {
                _super.apply(this, arguments);
                this.state = new DbDevDocPageStates();
            }
            DbDevDocPageReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("form", {className: "m-a clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b Hs-fw "}, "1、业务表规范"), React.createElement("table", {className: "table  table-hover"}, this._initBusinessThead(), this._initBusinessTbody())), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b Hs-fw "}, "2、工作流支持字段（XXX是前缀）（表名以_flow[大小写不区分]结尾）"), React.createElement("table", {className: "table  table-hover"}, this._initFlowThead(), this._initFlowTbody())), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b Hs-fw "}, "3、树形支持（表名以_tree[大小写不区分]结尾）"), React.createElement("table", {className: "table  table-hover"}, this._initTreeThead(), this._initTreeTbody())), React.createElement("div", {className: "col-lg-12 col-md-12 Hu-dashed-line p-a"}, React.createElement("p", {className: "m-b Hs-fw "}, "4、关于数据库业务字段命名规则"), React.createElement("p", null, "大小写不限制"), React.createElement("p", null, "表名：产品_模块对象名（eg: AMALL_USER）"), React.createElement("p", null, "业务字段：比如会员表的会员昵称AU_NICKNAME\""), React.createElement("p", null, "长单词简写以 _ 隔开"), React.createElement("p", null, "关联表：AMALL_GOODS_PRO  (商品促销 关联表), AGP_XXX"), React.createElement("p", {className: "m-b Hs-fw "}, "5、金额类型的数据   numeric(18, 4) "), React.createElement("p", {className: "m-b Hs-fw "}, "6、冗余字段命名：关联字段__关联表内的字段名"))));
            };
            DbDevDocPageReact.prototype._initBusinessThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "字段名"), React.createElement("th", null, "数据类型"), React.createElement("th", null, "是否为空"), React.createElement("th", null, "释义规范")));
            };
            DbDevDocPageReact.prototype._initBusinessTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "FID"), React.createElement("td", null, "char(50)"), React.createElement("td", null, "not null"), React.createElement("td", null, "主键、非聚集索引、17位时间数(1998,01,11,21,16,12,123)、+‘-’、+32位guid、总共50位")), React.createElement("tr", null, React.createElement("td", null, "CREATE_ID"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "创建人")), React.createElement("tr", null, React.createElement("td", null, "CREATE_TIME"), React.createElement("td", null, "datetime"), React.createElement("td", null, "null"), React.createElement("td", null, "创建时间")), React.createElement("tr", null, React.createElement("td", null, "UPDATE_ID"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "编辑人")), React.createElement("tr", null, React.createElement("td", null, "UPDATE_TIME"), React.createElement("td", null, "datetime"), React.createElement("td", null, "null"), React.createElement("td", null, "编辑时间")), React.createElement("tr", null, React.createElement("td", null, "ISDELETE"), React.createElement("td", null, "bit"), React.createElement("td", null, "null（默认为0）"), React.createElement("td", null, "是否已经删除")), React.createElement("tr", null, React.createElement("td", null, "FControlUnitID"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "组织机构")), React.createElement("tr", null, React.createElement("td", null, "TIMESSTAMP"), React.createElement("td", null, "datetime"), React.createElement("td", null, "null"), React.createElement("td", null, "时间戳")), React.createElement("tr", null, React.createElement("td", null, "UDVARCHAR1"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "备用字段1")), React.createElement("tr", null, React.createElement("td", null, "UDVARCHAR2"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "备用字段2")), React.createElement("tr", null, React.createElement("td", null, "UDINT1"), React.createElement("td", null, "int"), React.createElement("td", null, "null"), React.createElement("td", null, "备用字段3")), React.createElement("tr", null, React.createElement("td", null, "UDDATETIME1"), React.createElement("td", null, "datetime"), React.createElement("td", null, "null"), React.createElement("td", null, "备用字段4")));
            };
            DbDevDocPageReact.prototype._initFlowThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "字段名"), React.createElement("th", null, "数据类型"), React.createElement("th", null, "是否为空"), React.createElement("th", null, "释义规范")));
            };
            DbDevDocPageReact.prototype._initFlowTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "XXX_WF_ID"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "流程编号")), React.createElement("tr", null, React.createElement("td", null, "XXX_IS_APPLY_WF"), React.createElement("td", null, "bit"), React.createElement("td", null, "null"), React.createElement("td", null, "是否运用流程")), React.createElement("tr", null, React.createElement("td", null, "XXX_WF_STATUS"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "流程状态")), React.createElement("tr", null, React.createElement("td", null, "XXX_STEP_NAME"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "流程步骤名")), React.createElement("tr", null, React.createElement("td", null, "XXX_WF_IS_END"), React.createElement("td", null, "bit"), React.createElement("td", null, "null"), React.createElement("td", null, "流程是否结束")), React.createElement("tr", null, React.createElement("td", null, "XXX_WF_TIME"), React.createElement("td", null, "datetime"), React.createElement("td", null, "null"), React.createElement("td", null, "表示工作流引擎改变主表的时候都会更新这个字段")));
            };
            DbDevDocPageReact.prototype._initTreeThead = function () {
                return React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "字段名"), React.createElement("th", null, "数据类型"), React.createElement("th", null, "是否为空"), React.createElement("th", null, "释义规范")));
            };
            DbDevDocPageReact.prototype._initTreeTbody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "IS_PARENT"), React.createElement("td", null, "bit"), React.createElement("td", null, "null"), React.createElement("td", null, "是否为父节点")), React.createElement("tr", null, React.createElement("td", null, "PID"), React.createElement("td", null, "nvarchar(50)"), React.createElement("td", null, "null"), React.createElement("td", null, "父节点编号")), React.createElement("tr", null, React.createElement("td", null, "ARRANGE"), React.createElement("td", null, "nvarchar(2000)"), React.createElement("td", null, "null"), React.createElement("td", null, "树状支持符号")), React.createElement("tr", null, React.createElement("td", null, "ISLEAF"), React.createElement("td", null, "bit"), React.createElement("td", null, "null"), React.createElement("td", null, "是否为叶节点")), React.createElement("tr", null, React.createElement("td", null, "TREEORDER"), React.createElement("td", null, "int"), React.createElement("td", null, "null"), React.createElement("td", null, "树节点排序")));
            };
            return DbDevDocPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        DbDevDocPage.DbDevDocPageReact = DbDevDocPageReact;
        var DbDevDocPageVm = (function (_super) {
            __extends(DbDevDocPageVm, _super);
            function DbDevDocPageVm(config) {
                _super.call(this);
                this.ReactType = DbDevDocPageReact;
                this.Title = "DbDevDocPage页面;";
            }
            DbDevDocPageVm.prototype.init = function (config) {
            };
            DbDevDocPageVm.prototype.loadPage = function (callback) {
                if (callback) {
                    callback();
                }
            };
            return DbDevDocPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        DbDevDocPage.DbDevDocPageVm = DbDevDocPageVm;
        var DbDevDocPageStates = (function (_super) {
            __extends(DbDevDocPageStates, _super);
            function DbDevDocPageStates() {
                _super.apply(this, arguments);
            }
            return DbDevDocPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        DbDevDocPage.DbDevDocPageStates = DbDevDocPageStates;
        var DbDevDocPageProps = (function (_super) {
            __extends(DbDevDocPageProps, _super);
            function DbDevDocPageProps() {
                _super.apply(this, arguments);
            }
            return DbDevDocPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        DbDevDocPage.DbDevDocPageProps = DbDevDocPageProps;
        iocFile.Core.Ioc.Current().RegisterType("DBDEVDOCPAGE", basewedPageFile.Web.BaseWebPageVm, DbDevDocPageVm);
    })(DbDevDocPage = exports.DbDevDocPage || (exports.DbDevDocPage = {}));
});
