import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import EditSpanFile = require("./../../../05tool/EditSpan");
import ESpan = EditSpanFile.EditSpan.EditSpanReact;
import ESpanVm = EditSpanFile.EditSpan.EditSpanVm;

import basewedPageFile = require("./../../../04page/BaseWebPage");
import pageViewFile = require("./../../../07data/PageView");
import PaginationFile = require("./../../../05tool/Pagination");

export module UserMenuRole {
    export class UserMenuRoleAction extends domCore.DomAction {
    }

    interface ILeftStyle
    {
        left: number;
    }

    export class UserMenuRoleReact extends domCore.DomReact<UserMenuRoleProps, UserMenuRoleStates, UserMenuRoleAction> implements domCore.IReact {

        public state = new UserMenuRoleStates();

        public pSender(): React.ReactElement<any> {
         
            return <div className="table-responsive" onScroll={(e) => { this.fun_Scroll(e); } }>
                <div>{this._initTable() }</div>
                
            </div>;
        }

        private _initPager(): React.ReactElement<any> {
            return this.props.Vm.PagerObj.intoDom();
        }

        private _initTable(): React.ReactElement<any> {
            return <table className="table table-hover table-bordered table-striped  Hm-table-tree">
                    {this._initRole() }
                    {this._initMenuRole() }
                    {this._initRole1() }
                    {this._initUserRole() }
                </table>;
        }

        private thClass():string
        {
            return "acsTextC " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th " : "");
        }

        private thStyle(): ILeftStyle
        {
              return { left: (this.props.Vm.LeftNum - 12.8)};
        }

        private _initRole(): React.ReactElement<any> {
            
            return <thead className="thead-default">
                <tr>
                    <th className={this.thClass() } style={this.thStyle()}>
                        <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle ? "up" : "down") } onClick={() => { this.fun_TreeTableToggle(); } }></i>
                        <span>菜单 / 角色 </span>
                        <span><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_OpenUrlRole() } }></i><strong>添加角色</strong></span>
                        <span><i className="fa fa-th-large Hu-pointer"></i><strong>导入角色</strong></span>
                        
                        
                    </th>
                    {this._initNewThList() }
                   
                    <th>
                        <ESpan  children={null} Vm={this.Em("报修人员角色") }   />
                        <span className="Hc-edit-spanV">EREUserRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan children={null} Vm={this.Em("维修人员角色") } />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th className={(this.props.Vm.IsDel ? "acs-delete" : "") }>
                        <ESpan children={null} Vm={this.Em("科长") } />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className={"fa Hu-pointer" + (this.props.Vm.IsDel ? " fa-reply " :" fa-times")} onClick={() => { this.fun_delClick() } }></i>                       
                    </th>
                    <th>
                        <ESpan children={null} Vm={this.Em("总服务台人员角色") } />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("维修人员角色") }   />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("科长") }   />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("总服务台人员角色") }  />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("维修人员角色") }  />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("科长") }   />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("总服务台人员角色") }   />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("报修人员角色") }  />
                        <span className="Hc-edit-spanV">EREUserRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>                    
                    
                </tr>
            </thead>;
        }
        private _initRole1(): React.ReactElement<any> {
            return <thead className="thead-default">
                <tr>
                    <th className={this.thClass() } style={this.thStyle() }>
                        <i className={"Hu-pointer fa fa-caret-" + (this.props.Vm.IsTreeTableToggle1 ? "up" : "down") } onClick={() => { this.fun_TreeTableToggle1(); } }></i>
                        <span>用户 / 角色</span>
                        <span><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_OpenUrlRole() } }></i><strong>添加角色</strong></span>
                        <span><i className="fa fa-th-large Hu-pointer"></i><strong>导入角色</strong></span>
                    </th>
                    {this._initNewThList() }
                    <th>
                        <ESpan  children={null} Vm={this.Em("报修人员角色") }   />
                        <span className="Hc-edit-spanV">EREUserRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("维修人员角色") }  />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th className={(this.props.Vm.IsDel ? "acs-delete" : "")}>
                        <ESpan children={null} Vm={this.Em("科长") } />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className={"fa Hu-pointer" + (this.props.Vm.IsDel ? " fa-reply " : " fa-times") } onClick={() => { this.fun_delClick() } }></i>
                    </th>
                    <th>
                        <ESpan children={null} Vm={this.Em("总服务台人员角色") } />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("维修人员角色") }  />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th >
                        <ESpan  children={null} Vm={this.Em("科长") }  />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("总服务台人员角色") }   />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th >
                        <ESpan  children={null} Vm={this.Em("维修人员角色") }   />
                        <span className="Hc-edit-spanV">EREServicemanRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("科长") }  />
                        <span className="Hc-edit-spanV">ERESectionChiefRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("总服务台人员角色") }  />
                        <span className="Hc-edit-spanV">EREFrontDesk StaffRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>
                    <th>
                        <ESpan  children={null} Vm={this.Em("报修人员角色") }  />
                        <span className="Hc-edit-spanV">EREUserRole</span>
                        <i className="fa fa-times Hu-pointer"></i>
                    </th>                                      
                    
                </tr>
            </thead>;
        }

        private _initMenuRole(): React.ReactElement<any> {
            return <tbody className={(this.props.Vm.IsTreeTableToggle ? "hide" : "") }>
                <tr>                    
                    <td className={"Hu-item-1 " + (this.thClass()) } style={this.thStyle()}>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "报修管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_OpenUrlNode()}}></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td className={this.props.Vm.IsChecked ? "acs-td-checked" : " "}><input type="checkbox"  onClick={() => { this.fun_IsChagneCheck() } }/></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                   
                </tr>

                <tr className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>                   
                    <td className={"Hu-item-2 " + (this.thClass()) } style={this.thStyle()}>
                        <i className={"Hu-pointer fa fa-" + (this.props.Vm.IsTreeTableShow1 ? "plus-square" : "minus-square") } onClick={() => this.fun_TreeTableClick1() }></i>
                        <ESpan   Vm={new ESpanVm({ Content: "基础信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                   
                </tr>

                <tr  className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className={"Hu-item-3 " + (this.thClass()) } style={this.thStyle()}><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "使用单位" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_OpenUrlButton() } }></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className={"Hu-item-4 " + (this.thClass()) } style={(this.thStyle())}><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("新增") } />
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className={"Hu-item-4 " + (this.thClass()) } style={(this.thStyle())}><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("详情") } />
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                </tr>
                <tr index="4" className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") + (this.props.Vm.IsTreeNodeShow ? " hide" : "") }>
                    <td className={"Hu-item-4 " + (this.thClass()) } style={(this.thStyle())}><i className="fa fa-square Hu-pointer"></i>
                        <ESpan children={null} Vm={this.Em("编辑") } />
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                </tr>

                <tr  className={(this.props.Vm.IsTreeTableShow ? "hide " : "") + (this.props.Vm.IsTreeTableShow1 ? "hide" : "") }>
                    <td className={"Hu-item-3 " + (this.thClass()) } style={this.thStyle()}><i className="fa fa-file-o Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "用户管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>

                <tr className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className={"Hu-item-2 " + (this.thClass()) } style={this.thStyle()} ><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "维修信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>

                <tr className={(this.props.Vm.IsTreeTableShow ? "hide" : "") }>
                    <td className={"Hu-item-2 " + (this.thClass()) } style={this.thStyle()}><i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "设备信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>

                <tr >
                    <td className={"Hu-item-1 " + (this.thClass()) } style={this.thStyle()}>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "弘正采购" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                   
                </tr>

                <tr>
                    <td className={"Hu-item-1 " + (this.thClass()) } style={this.thStyle()}>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "会员信息" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>

                <tr>
                    <td className={"Hu-item-1 " + (this.thClass()) } style={this.thStyle()}>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新基础信息平台" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>

                <tr>
                    <td className={"Hu-item-1 " + (this.thClass()) } style={this.thStyle()}>
                        <i className="fa fa-plus-square Hu-pointer"></i>
                        <ESpan   Vm={new ESpanVm({ Content: "新权限管理" }) } children={null}     />
                        <i className="fa fa-plus-circle Hu-pointer"></i>
                        <i className="fa fa-times Hu-pointer"></i>
                    </td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>
            </tbody>;
        }

        private _initUserRole(): React.ReactElement<any> {
         
            var addTr = <tr>
                <td className={this.thClass() } style={this.thStyle()}><i className="fa fa-plus-circle Hu-pointer" onClick={() => this.fun_OpenUrlUser() }></i></td>
            </tr>;
            return <tbody className={(this.props.Vm.IsTreeTableToggle1 ? "hide" : "") }>
                <tr>
                    <td className={(this.thClass()) + (this.props.Vm.IsDelUser ? " acs-delete" : "") } style={this.thStyle()}>
                        <ESpan  children={null} Vm={this.Em("我的秘书") }   />
                        <span className="Hc-edit-spanV">mysecret</span>
                        <i className={"fa Hu-pointer" + (this.props.Vm.IsDelUser ? " fa-reply " : " fa-times") } onClick={() => { this.fun_delUserClick() } }></i>  
                    </td>
                    {this.initNewTD() }
                    <td className={this.props.Vm.IsDelUser ? "acs-delete":""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={(this.props.Vm.IsDel ? "acs-delete" : "") + (this.props.Vm.IsDelUser?" acs-delete":"") }><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                    <td className={this.props.Vm.IsDelUser ? "acs-delete" : ""}><input type="checkbox" /></td>
                   
                </tr>
                <tr>
                    <td className={this.thClass()} style={this.thStyle()}><ESpan  children={null} Vm={this.Em("测试号100")}   /><span className="Hc-edit-spanV">测试号100</span></td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                   
                </tr>
                <tr>
                    <td className={(this.thClass()) + (this.props.Vm.IsTdChange ? " acs-edit-check" : "") } style={this.thStyle()}><ESpan  children={null} Vm={this.Em("小猫", (vm, ischange) => { this.fun_ESpanChange(ischange); }) }   /><span className="Hc-edit-spanV">xiaomao</span></td>
                    {this.initNewTD() }
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>
                <tr>
                    <td className={this.thClass()} style={this.thStyle()}><ESpan  children={null} Vm={this.Em("默认管理员") }   /><span className="Hc-edit-spanV">admin</span></td>
                    {this.initNewTD() }
                    <td><input type="checkbox"/></td>
                    <td><input type="checkbox"/></td>
                    <td><input type="checkbox" /></td>
                    <td className={(this.props.Vm.IsDel ? "acs-delete" : "") }><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td><td><input type="checkbox" /></td>
                    
                </tr>
                {this._initNewTrTDList() }
                <tr>
                    <td className={this.thClass() } style={this.thStyle()}>
                        <span className="acsRelative"><i className="fa fa-plus-circle Hu-pointer" onClick={() => { this.fun_OpenUrlUser() } }></i><strong>添加用户</strong></span>
                        <span className="acsRelative"><i className="fa fa-th-large Hu-pointer" ></i><strong>导入用户</strong></span>
                    </td>                    
                </tr>
                
            </tbody>;
        }

        public fun_IsChagneCheck()
        {
            this.props.Vm.IsChecked = !this.props.Vm.IsChecked;
            this.forceUpdate();
        }

        private fun_Scroll(e: React.UIEvent) {
            var _$obj = $(e.target);
            this.props.Vm.LeftNum = _$obj.scrollLeft();

            this.props.Vm.scrollAuto();
        }   

        private fun_OpenUrlRole() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewRolePage$", true);
        }

        private fun_OpenUrlUser() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewUserPage$", true);
        } 

        private fun_OpenUrlNode() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewNodePage$", true);
        }


        private fun_ModalClick() {
            this.props.Vm.IsModalShow = !this.props.Vm.IsModalShow;
            this.forceUpdate();
        }

        public fun_delClick() {
            this.props.Vm.IsDel = !this.props.Vm.IsDel;
            this.forceUpdate();
        }

        public fun_delUserClick() {
            this.props.Vm.IsDelUser = !this.props.Vm.IsDelUser;
            this.forceUpdate();
        }


        private fun_OpenUrlButton() {
            urlFile.Core.AkUrl.Current().openUrl("$winNewButtonPage$",true);
        }

        private fun_ESpanChange(ischange: boolean) {
            this.props.Vm.IsTdChange = ischange;
            this.props.Vm.forceUpdate("");
        }

        

        private EspanVMIndex: number = 0;
        private Em(content: string, changeEvent?: EditSpanFile.EditSpan.IChangeEvent, config?: EditSpanFile.EditSpan.IEditSpanVm): ESpanVm {
            this.EspanVMIndex++;
            if (config) {
                config.Content = content;
                if (changeEvent) {
                    config.ChangeEvent = changeEvent;
                }
            }
            else {
                config = { Content: content, ChangeEvent: changeEvent };
            }
            return this.props.Vm.getESpan("name" + this.EspanVMIndex, config);
        }


        private fun_TreeTableToggle() {
            this.props.Vm.IsTreeTableToggle = !this.props.Vm.IsTreeTableToggle;
            this.forceUpdate();
        }
        private fun_TreeTableToggle1() {
            this.props.Vm.IsTreeTableToggle1 = !this.props.Vm.IsTreeTableToggle1;
            this.forceUpdate();
        }

        private fun_TreeTableClick() {
            this.props.Vm.IsTreeTableShow = !this.props.Vm.IsTreeTableShow;
            this.forceUpdate();
        }
        private fun_TreeTableClick1() {
            this.props.Vm.IsTreeTableShow1 = !this.props.Vm.IsTreeTableShow1;
            this.forceUpdate();
        }




        protected pComponentDidMount() {
            super.pComponentDidMount();


        }

        //private fun_AddTr() {
        //    //this.props.Vm.NewTrIndex++;
        //    this.props.Vm.IsNewUserShow = !this.props.Vm.IsNewUserShow;
        //    this.forceUpdate();
        //}

        private _initNewThList(): React.ReactElement<any>[] {
           var _res = [];
            {
                this.props.Vm.RoleList.map((a) => {
                    _res.unshift(<th className="acs-new-col"><ESpan  children={null} Vm={new ESpanVm({ Content: a.RoleName }) }   /><span className="Hc-edit-spanV">{a.RoleSign}</span><i className="fa fa-times Hu-pointer"></i></th>);
                });
           }
             return _res;
        }

        //private _initNewTrList(): React.ReactElement<any>[] {
        //    var _arry = [];
        //    for (var i: number = 0; i < this.props.Vm.NewTrIndex; i++) {

        //        _arry.push(<tr className="acs-new-col ">{this._initNewTrTDList() }</tr>);

        //    }

        //    return _arry;
        //}

        private _initNewTrTDList(): React.ReactElement<any>[] {
            var _arry = [];
            var _arryCheck = [];

            for (var i: number = 0; i < this.props.Vm.NewThIndex + 11; i++) {
                _arryCheck.push(<td className="acs-new-row"><input type="checkbox"/></td>);
            }

            {
                this.props.Vm.UserList.map((a) => {
                    _arry.push(<tr><td className={"acs-new-row " + (this.thClass()) } style={this.thStyle()}><ESpan  children={null} Vm={new ESpanVm({ Content: a.UserName }) }   /><span className="Hc-edit-spanV">{a.LoginName}</span></td>{_arryCheck}</tr>);
                });
            }          
            return _arry;
        }

        public initNewTD(): React.ReactElement<any>[] {

            var _arry = [];
            for (var i: number = 0; i < this.props.Vm.NewThIndex; i++) {
                _arry.push(<td className="acs-new-row"><input type="checkbox"/></td>);
            }
            return _arry;
        };

        //private fun_AddTh() {
        //    this.props.Vm.NewThIndex++;
        //    this.props.Vm.IsNewRoleShow = !this.props.Vm.IsNewRoleShow;
        //    this.forceUpdate();
        //}

        //private setScroll() {
        //    var _$dom = $(ReactDOM.findDOMNode(this));
        //    if (_$dom) {
        //        var  _$tabel = _$dom.find(".ACT-USERMENUROLE");
        //        if (_$dom.length > 0 && _$tabel.length > 0) {
        //            var _w = _$tabel.width() - _$dom.width();
        //            if (_w > 0) {
        //                _$dom.scrollLeft(_w + 150);
        //            }
        //        }

        //    }
        //}

        //protected pInstall(): void {
        //    super.pInstall();
        //    this.props.Vm.getEmit("React").addListener("setScroll", () => {
        //        this.setScroll();
        //    });
        //}


    }

    export interface RoleActorData {
        RoleName: string;
        RoleSign: string;
    }
    export interface UserActorData {
        UserName: string;
        LoginName: string;
    }
    export class UserMenuRoleVm extends domCore.DomVm {
        public ReactType = UserMenuRoleReact;
       // public GridObj: GridFormFile.ui.GridFormVm;

        public IsModalShow: boolean = false;
        public IsTabShow: boolean = false;
        public IsTreeNodeShow: boolean = false;
        public IsTreeTableToggle: boolean = false;
        public IsTreeTableToggle1: boolean = false;

        public IsNewRoleShow: boolean = false;
        public IsNewUserShow: boolean = false;

        public IsTreeTableShow: boolean = false;
        public IsTreeTableShow1: boolean = false;

        public NewThIndex: number = 0;
        public NewTrIndex: number = 0;
        public ModalCurrentIndex: number = 0;

        public IsTdChange: boolean = false;
        public IsThChange: boolean = false;

        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
       // public ScrollNum: number;

        public IsDel: boolean = false;
        public IsDelUser: boolean = false;
        public RoleList: RoleActorData[];
        public UserList: UserActorData[];

        public IsChecked: boolean = false;

        public RoleName: string;
        public RoleSign: string;
        public UserName: string;
        public LoginName: string;

        public PagerObj: PaginationFile.tool.PaginationVm = new PaginationFile.tool.PaginationVm;

        private ESpanDict: pageViewFile.data.IDict<ESpanVm> = {};

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

        public addRole(obj:RoleActorData)
        {
            this.NewThIndex++;
            this.getEmit("React").emit("setScroll");
            this.RoleName = obj.RoleName;
            this.RoleSign = obj.RoleSign;
            this.RoleList.push({RoleName:obj.RoleName,RoleSign:obj.RoleSign});
            this.forceUpdate("");
        }
        public addUser(obj:UserActorData)
        {
            this.NewTrIndex++;
            this.UserName = obj.UserName;
            this.LoginName = obj.LoginName;
            this.UserList.push({ UserName: obj.UserName, LoginName: obj.LoginName });
            this.forceUpdate("");
        }

        public scrollAuto() {

            this.IsAcsRelative = this.LeftNum > 0;
            this.forceUpdate("");
        }


        public constructor()
        {
            super();
            this.MetaShowData = {
                Name: "菜单 / 角色 / 用户 关系",
                Content: "可以添加用户，为用户添加角色，以及给角色分配不同的菜单权限",
                List:["邵祺","周欢明"]
            }
            this.RoleList = [];
            this.UserList = [];
        }
    }
    export class UserMenuRoleStates extends domCore.DomStates {

        
    }


    export class UserMenuRoleProps extends domCore.DomProps<UserMenuRoleVm>{
    }



}