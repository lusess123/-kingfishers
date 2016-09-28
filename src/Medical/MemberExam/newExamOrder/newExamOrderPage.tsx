import domFile = require("./../../../01core/0Dom");
import iocFile = require("./../../../01core/Ioc");
//import domFile = require("./../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../01core/Util");
//import iocFile = require("./../01core/Ioc");
import urlFile = require("./../../../01core/Url");
import basewedPageFile = require("./../../../04page/BaseWebPage");
import pagination = require("./../../../05tool/Pagination");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import Data = require("./../data");
import newExamOrderDomFile = require("./newExamOrderDom");
import selectorDomFile = require("./ExamPackageSelectorDom");

export module NewExamOrderPage {
    export class NewExamOrderPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class NewExamOrderPageReact extends basewedPageFile.Web.BaseWebPageReact<NewExamOrderPageProps, NewExamOrderPageStates, NewExamOrderPageAction> implements domCore.IReact {
        public state = new NewExamOrderPageStates();
        public pSender(): React.ReactElement<any> {
          
            return (
                <div>
                    {this.createTable()}
                </div>
            )
        }
        public createTable(): React.ReactElement<any>{
           // return this.props.Vm.ExamOrderDom.intoDom();
           return this.props.Vm.SelectorDom.intoDom();

        }
        
        
    }
    export interface IExamOrderData {
        FID: string;
        ExamCode: string;//体检 编号
        FileNumber: string; //档案编号
        Name: string;//姓名
        Gender: string;//性别
        BirthDate: string;//出生日期
        Age: string; //年龄
        MaritalStatus: string;//婚姻状况
        Nation: string; //民族
        NativePlace: string;//籍贯
        IDCard: string;//身份证号
        WorkUnit: string;//工作单位
        Job: string;//职务
        Phone: string;//联系电话
        ExamType: string;// 体检类型
        ExamDate: string;  // 体检时间
        Exampkg: string;// 体检套餐
    }
    export interface IExamListData {
        FID: string;
        mealID: string; //  预约套餐ID 
        ItemCode: string;  //预约项目
        DepartmentId: string; //检查科室
        Remark: string; //说明
        Price: string;// 体检价格
        Discount: string;//折扣
        ReservationAmount: string;//最终价格
    }
    export interface IExamPagerData {
        Pager: pagination.tool.Pagination;
        List: Array<IExamListData>;
    }
    export interface IExamOrderPageConfig {
        data1: Data.ExamOrder.IMealTypeListData;
        data2: Data.ExamOrder.IProjItemListData;

    }
    export class NewExamOrderPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = NewExamOrderPageReact;
        public ExamOrderDom:newExamOrderDomFile.ExamNewDom.ExamNewDomVm;
       public SelectorDom:selectorDomFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm;

        public constructor(config?: IExamOrderPageConfig) {
            super();

        }
        
       
        private init(config: IExamOrderPageConfig) {
        }
        public loadPageData(pageIndex: number) {
            var _page = { PageNo: pageIndex };
        }
        
        protected loadPage(callback?: () => any) {
            //var config: newExamOrderDomFile.ExamNewDom.IExamNewDomConfig = {
            //    data1: {
            //        mealID: "套餐ID",
            //        ItemCode: "体检项目",
            //        Price: "100.00"
            //    },
            //    data2: {
            //        ItemCode: "心电图",
            //        DepartmentId: "影像科",
            //        Price:"30.00"

            //    }
            //}
            //this.ExamOrderDom = new newExamOrderDomFile.ExamNewDom.ExamNewDomVm(config);
            //urlFile.Core.AkPost("", {}, (a) => {
            //    //var _data: Data.Appointment.AppointmentPagerListData = a.data;
            //    //this.getData(_data);
            //    if (callback) {
            //        callback();
            //    }
            //})

            urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageSelectorData", {}, (a) => {
                if (a && a.Data) {

                    var pageConfig: selectorDomFile.ExamPackageSelectorDomDom.IExamPackageSelectorDomConfig =
                        {
                            PackagePagerListData: a.Data.PackagePagerListData,
                            ItemPagerListData: a.Data.ItemPagerListData,
                            UniId: this.UniId
                        };
                    this.SelectorDom = new selectorDomFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm();
                    this.SelectorDom.init(pageConfig);
                    if (callback)
                        callback();
                }

            });
        }
       
    }
    export class NewExamOrderPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }
    export class NewExamOrderPageProps extends basewedPageFile.Web.BaseWebPageProps<NewExamOrderPageVm>{
    }
    iocFile.Core.Ioc.Current().RegisterType("NewExamOrderPage", basewedPageFile.Web.BaseWebPageVm, NewExamOrderPageVm);
}