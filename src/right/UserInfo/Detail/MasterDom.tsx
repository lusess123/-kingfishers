import domFile = require("./../../../01core/0Dom");import React = require("react");
import ReactDOM = require("react-dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
import iocFile = require("./../../../01core/Ioc");
import urlFile = require("./../../../01core/Url");

import alinkFile = require("./../../../05tool/ALink");
import ALink = alinkFile.ui.ALinkReact;
export module MasterDom {
    export class MasterDomAction extends domCore.DomAction {
    }

    export class MasterDomReact extends domCore.DomReact<MasterDomProps, MasterDomStates, MasterDomAction> implements domCore.IReact {
        public state = new MasterDomStates();
        ///*{<div className="large-4 small-12 columns acs-dashed-line">
        //                           <div className="columns acs-label">
        //                               <label for="right-label" className="right">职位：</label>
        //                               </div>
        //                           <div className="columns acs-input">
        //                               <label for="right-label" className="left">{this.props.Vm.Data.POSITIONJOBID}</label>
        //                               </div>
        //                           </div>}*/
        public pSender(): React.ReactElement<any> {
            return (<div className="1">
                <div className="tabs-content">
                    <div className="clearfix" >
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">用户名：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.TrueName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">性别：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Gender == "1" ? "女" : "男"}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">登陆名：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.UserName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label" >手机：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Phone}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">Email：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Email}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">出生日期：</label>
                            </div>
                            <div className=" Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Birthday}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label">住址：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Address}</label>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">入职日期：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.EntryDate}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">工号：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.FNumber}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">在职状态：</label>
                            </div>
                            <div className=" Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.FStatusKindName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">学历：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.DegreeKindName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label" >个性签名：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Signatures}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">身份证号：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.IDCard}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">年龄：</label>
                            </div>
                            <div className=" Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Age}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label">民族：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.NationlityKindName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label">政治面貌：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.PoliticsStatusKindName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">户口类型：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.CensusKindName}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">毕业学校：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.GraduateSchool}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label">专业：</label>
                            </div>
                            <div className=" Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Discipline}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">毕业日期：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.GraduateDate}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className="Hu-label">
                                <label for="right-label">联系电话：</label>
                            </div>
                            <div className="Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.Tel}</label>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line">
                            <div className=" Hu-label">
                                <label for="right-label">QQ：</label>
                            </div>
                            <div className=" Hu-input">
                                <label for="right-label" className="form-control-label">{this.props.Vm.Data.QQ}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
        }
        protected pComponentDidMount() {
            super.pComponentDidMount();

        }

        //private fun_TrashDel() {
        //    //-----------------
        //    alert("删除");
        //}
        //private fun_Update() {
        //    //-----------------
        //    alert("删除");
        //}
    }

    export interface IUserDetailData {
        UserID?: string; //用户ID
        TrueName?: string;  //用户姓名
        Gender?: string;//性别
        UserName?: string;// 登陆名
        Phone?: string;//手机
        Email?: string;  //邮箱
        Birthday?: string;  //出生日期
        Address?: string;  //住址
        //FDepartmentID: string;  //所属部门
        POSITIONJOBID?: string;  //职位
        EntryDate?: string;  //入职日期
        FNumber?: string;  //工号
        FStatusKindId?: string;  //在职状态
        FStatusKindName?: string; //在职状态名称
        DegreeKindId?: string; //学历
        DegreeKindName?: string;//学历名称
        Signatures?: string;  //个性签名
        IDCard?: string;  //身份证号 
        Age?: string;  //年龄
        NationalityKindId?: string;  //民族
        NationlityKindName?: string; //民族名称
        PoliticsStatusKindId?: string; //政治面貌
        PoliticsStatusKindName?: string;//政治面貌名称
        CensusKindId?: string;  //户口类型
        CensusKindName?: string;//户口类型名称
        GraduateSchool?: string; //毕业学校
        Discipline?: string;  //专业
        GraduateDate?: string; //毕业时间
        Tel?: string;  //联系电话
        QQ?: string;  

        
    }

    export class MasterDomVm extends domCore.DomVm {
        public ReactType = MasterDomReact;
        public trueName: string;
        public Data: IUserDetailData;
    }
    export class MasterDomStates extends domCore.DomStates {
    }


    export class MasterDomProps extends domCore.DomProps<MasterDomVm>{
    }



}