import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import React = require("react");
import ReactDOM = require("react-dom");

import EditSpanFile = require("./../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import RadioFile = require("./../../../02col/01single/Radio");
import Radio = RadioFile.ui.RadioReact;
import RadioVm = RadioFile.ui.RadioVm;

export module DbDevDocPage {
    export class DbDevDocPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }

    export class DbDevDocPageReact extends basewedPageFile.Web.BaseWebPageReact<DbDevDocPageProps, DbDevDocPageStates, DbDevDocPageAction> implements domCore.IReact {

        public state = new DbDevDocPageStates();
        public pSender(): React.ReactElement<any> {
            return <div>
                <form className="m-a clearfix">
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">1、业务表规范</p>
                        <table className="table  table-hover">
                            {this._initBusinessThead() }
                            {this._initBusinessTbody() }
                        </table>
                    </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">2、工作流支持字段（XXX是前缀）（表名以_flow[大小写不区分]结尾）</p>
                        <table className="table  table-hover">
                            {this._initFlowThead() }
                            {this._initFlowTbody() }
                        </table>
                    </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">3、树形支持（表名以_tree[大小写不区分]结尾）</p>
                        <table className="table  table-hover">
                            {this._initTreeThead() }
                            {this._initTreeTbody() }
                        </table>
                    </div>
                    <div className="col-lg-12 col-md-12 Hu-dashed-line p-a">
                        <p className="m-b Hs-fw ">4、关于数据库业务字段命名规则</p>
                        <p>大小写不限制</p>
                        <p>表名：产品_模块对象名（eg: AMALL_USER）</p>
                        <p>业务字段：比如会员表的会员昵称AU_NICKNAME"</p>
                        <p>长单词简写以 _ 隔开</p>
                        <p>关联表：AMALL_GOODS_PRO  (商品促销 关联表), AGP_XXX</p>
                        <p className="m-b Hs-fw ">5、金额类型的数据   numeric(18, 4) </p>
                        <p className="m-b Hs-fw ">6、冗余字段命名：关联字段__关联表内的字段名</p>
                    </div>
                    

                </form>
            </div>;
        }

        private _initBusinessThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>字段名</th>
                    <th>数据类型</th>
                    <th>是否为空</th>
                    <th>释义规范</th>
                </tr>
            </thead>;
        }
        private _initBusinessTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>FID</td>
                    <td>char(50)</td>
                    <td>not null</td>
                    <td>主键、非聚集索引、17位时间数(1998,01,11,21,16,12,123)、+‘-’、+32位guid、总共50位</td>
                </tr>
                <tr>
                    <td>CREATE_ID</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>创建人</td>
                </tr>
                <tr>
                    <td>CREATE_TIME</td>
                    <td>datetime</td>
                    <td>null</td>
                    <td>创建时间</td>
                </tr>
                <tr>
                    <td>UPDATE_ID</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>编辑人</td>
                </tr>
                <tr>
                    <td>UPDATE_TIME</td>
                    <td>datetime</td>
                    <td>null</td>
                    <td>编辑时间</td>
                </tr>
                <tr>
                    <td>ISDELETE</td>
                    <td>bit</td>
                    <td>null（默认为0）</td>
                    <td>是否已经删除</td>
                </tr>
                <tr>
                    <td>FControlUnitID</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>组织机构</td>
                </tr>
                <tr>
                    <td>TIMESSTAMP</td>
                    <td>datetime</td>
                    <td>null</td>
                    <td>时间戳</td>
                </tr>
                <tr>
                    <td>UDVARCHAR1</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>备用字段1</td>
                </tr>
                <tr>
                    <td>UDVARCHAR2</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>备用字段2</td>
                </tr>
                <tr>
                    <td>UDINT1</td>
                    <td>int</td>
                    <td>null</td>
                    <td>备用字段3</td>
                </tr>
                <tr>
                    <td>UDDATETIME1</td>
                    <td>datetime</td>
                    <td>null</td>
                    <td>备用字段4</td>
                </tr>

            </tbody>

        }

        private _initFlowThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>字段名</th>
                    <th>数据类型</th>
                    <th>是否为空</th>
                    <th>释义规范</th>
                </tr>
            </thead>;
        }
        private _initFlowTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>XXX_WF_ID</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>流程编号</td>
                </tr>
                <tr>
                    <td>XXX_IS_APPLY_WF</td>
                    <td>bit</td>
                    <td>null</td>
                    <td>是否运用流程</td>
                </tr>
                <tr>
                    <td>XXX_WF_STATUS</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>流程状态</td>
                </tr>
                <tr>
                    <td>XXX_STEP_NAME</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>流程步骤名</td>
                </tr>
                <tr>
                     <td>XXX_WF_IS_END</td>
                     <td>bit</td>
                     <td>null</td>
                     <td>流程是否结束</td>
                </tr>
                <tr>
                    <td>XXX_WF_TIME</td>
                    <td>datetime</td>
                    <td>null</td>
                    <td>表示工作流引擎改变主表的时候都会更新这个字段</td>
                </tr>
            </tbody>

        }

        private _initTreeThead(): React.ReactElement<any> {
            return <thead>
                <tr>
                    <th>字段名</th>
                    <th>数据类型</th>
                    <th>是否为空</th>
                    <th>释义规范</th>
                </tr>
            </thead>;
        }
        private _initTreeTbody(): React.ReactElement<any> {
            return <tbody>
                <tr>
                    <td>IS_PARENT</td>
                    <td>bit</td>
                    <td>null</td>
                    <td>是否为父节点</td>
                </tr>
                <tr>
                    <td>PID</td>
                    <td>nvarchar(50)</td>
                    <td>null</td>
                    <td>父节点编号</td>
                </tr>
                <tr>
                    <td>ARRANGE</td>
                    <td>nvarchar(2000)</td>
                    <td>null</td>
                    <td>树状支持符号</td>
                </tr>
                <tr>
                    <td>ISLEAF</td>
                    <td>bit</td>
                    <td>null</td>
                    <td>是否为叶节点</td>
                </tr>
                <tr>
                    <td>TREEORDER</td>
                    <td>int</td>
                    <td>null</td>
                    <td>树节点排序</td>
                </tr>
            </tbody>

        }

    }

    export interface IReactDbDevDocPageVm extends basewedPageFile.Web.BaseWebPageVm {

    }

    export interface IDbDevDocPageConfig {


    }
    export class DbDevDocPageVm extends basewedPageFile.Web.BaseWebPageVm implements IReactDbDevDocPageVm {
        public ReactType = DbDevDocPageReact;
        public Title: string = "DbDevDocPage页面;";
        public constructor(config?: IDbDevDocPageConfig) {
            super();

        }

        private init(config: IDbDevDocPageConfig) {
        }

        protected loadPage(callback?: () => any) {
            if (callback) {
                callback();
            }
        }

    }
    export class DbDevDocPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DbDevDocPageProps extends basewedPageFile.Web.BaseWebPageProps<IReactDbDevDocPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DBDEVDOCPAGE", basewedPageFile.Web.BaseWebPageVm, DbDevDocPageVm);

}