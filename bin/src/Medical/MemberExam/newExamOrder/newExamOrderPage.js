var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/Ioc", "./../../../01core/Url", "./../../../04page/BaseWebPage", "react", "./ExamPackageSelectorDom"], function (require, exports, iocFile, urlFile, basewedPageFile, React, selectorDomFile) {
    "use strict";
    var NewExamOrderPage;
    (function (NewExamOrderPage) {
        var NewExamOrderPageAction = (function (_super) {
            __extends(NewExamOrderPageAction, _super);
            function NewExamOrderPageAction() {
                _super.apply(this, arguments);
            }
            return NewExamOrderPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewExamOrderPage.NewExamOrderPageAction = NewExamOrderPageAction;
        var NewExamOrderPageReact = (function (_super) {
            __extends(NewExamOrderPageReact, _super);
            function NewExamOrderPageReact() {
                _super.apply(this, arguments);
                this.state = new NewExamOrderPageStates();
            }
            NewExamOrderPageReact.prototype.pSender = function () {
                return (React.createElement("div", null, this.createTable()));
            };
            NewExamOrderPageReact.prototype.createTable = function () {
                // return this.props.Vm.ExamOrderDom.intoDom();
                return this.props.Vm.SelectorDom.intoDom();
            };
            return NewExamOrderPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewExamOrderPage.NewExamOrderPageReact = NewExamOrderPageReact;
        var NewExamOrderPageVm = (function (_super) {
            __extends(NewExamOrderPageVm, _super);
            function NewExamOrderPageVm(config) {
                _super.call(this);
                this.ReactType = NewExamOrderPageReact;
            }
            NewExamOrderPageVm.prototype.init = function (config) {
            };
            NewExamOrderPageVm.prototype.loadPageData = function (pageIndex) {
                var _page = { PageNo: pageIndex };
            };
            NewExamOrderPageVm.prototype.loadPage = function (callback) {
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
                var _this = this;
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
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageSelectorData", {}, function (a) {
                    if (a && a.Data) {
                        var pageConfig = {
                            PackagePagerListData: a.Data.PackagePagerListData,
                            ItemPagerListData: a.Data.ItemPagerListData,
                            UniId: _this.UniId
                        };
                        _this.SelectorDom = new selectorDomFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm();
                        _this.SelectorDom.init(pageConfig);
                        if (callback)
                            callback();
                    }
                });
            };
            return NewExamOrderPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewExamOrderPage.NewExamOrderPageVm = NewExamOrderPageVm;
        var NewExamOrderPageStates = (function (_super) {
            __extends(NewExamOrderPageStates, _super);
            function NewExamOrderPageStates() {
                _super.apply(this, arguments);
            }
            return NewExamOrderPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewExamOrderPage.NewExamOrderPageStates = NewExamOrderPageStates;
        var NewExamOrderPageProps = (function (_super) {
            __extends(NewExamOrderPageProps, _super);
            function NewExamOrderPageProps() {
                _super.apply(this, arguments);
            }
            return NewExamOrderPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewExamOrderPage.NewExamOrderPageProps = NewExamOrderPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NewExamOrderPage", basewedPageFile.Web.BaseWebPageVm, NewExamOrderPageVm);
    })(NewExamOrderPage = exports.NewExamOrderPage || (exports.NewExamOrderPage = {}));
});
