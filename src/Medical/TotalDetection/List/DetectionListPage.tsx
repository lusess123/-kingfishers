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
import eventFile = require("./../../../01core/Event");
import buttonFile = require("./../../../05tool/Button");
import singleCheckFile = require("./../../../02col/02Mulite/SingleCheckBox");
import searchFormFile = require("./DetectionSearchFormDom");
import gridFormFile = require("./DetectionGridDom");
import Data = require("./../data");

export module DetectionListPage {
    export class DetectionListPageAction extends basewedPageFile.Web.BaseWebPageStates {
        public DataValue: string;
        public Id: string;
        public Vm: any;
    }
    export class DetectionListPageReact extends basewedPageFile.Web.BaseWebPageReact<DetectionListPageProps, DetectionListPageStates, DetectionListPageAction> implements domCore.IReact {
        public state = new DetectionListPageStates();
        public pSender(): React.ReactElement<any> {
            var ff = <div className="container-fluid ui-dpt-insert">
                <div className="row-fluid">
                    <div className="YSm-handle ui-dpt-search">
                        {this._tDom(this.props.Vm.SearchFormVm, { nullNode: <span>没有搜索区</span> }) }

                    </div>
                    <div className="ui-dpt-insertlist">
                        <div>
                            {this.createButtons() }
                            {this.props.Vm.GridFormVm.intoDom() }
                            <div className="bottomPager ui-pager">{this.props.Vm.PaginationVm.intoDom() }</div>
                        </div>
                    </div>
                </div>
            </div>;
            return ff;

        }
        public fun_Print() {
            this.props.Vm.btnPrint();
        }
        private createButtons(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                {this.props.Vm.PageBtnList.map((btn) => {
                    return this._tDom(btn);
                }) }
                {this.props.Vm.DataBtnList.map((btn) => {
                    return this._tDom(btn);
                }) }
                <a className="YSu-link" onClick={() => { this.fun_Print() } }>打印体检报告</a>
            </div>

        }
    }
    export interface DetectionListConfig {
        PagerListdata: Data.DetectionData.PagerListData;
    }

    export class DetectionListPageVm extends basewedPageFile.Web.BaseWebPageVm {
        public ReactType = DetectionListPageReact;
        public SearchFormVm: searchFormFile.DetectionSearchFormDom.DetectionSearchFormDomVm;
        public GridFormVm: gridFormFile.DetectionGridFormDom.DetectionGridFormDomVm;
        public PaginationVm: pagination.tool.PaginationVm;
        public CheckBoxList = new Array<singleCheckFile.ui.SingleCheckBoxVm>();
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public PageBtnList = new Array<buttonFile.ui.ButtonVm>();
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public UniId: string = "";
        public PagerListData: Data.DetectionData.PagerListData;
        public constructor(config?: DetectionListConfig) {
            super();
            this.UniId = eventFile.App.getUniId().toString();
            this.initBtnList();
            var searchConfig = { UniId: this.UniId };
            this.SearchFormVm = new searchFormFile.DetectionSearchFormDom.DetectionSearchFormDomVm(searchConfig);
            if (config) {
                this.init(config);
            }

            this.listenAppEvent("medical/base/anomaly/list/loadpagedata", this.UniId, (pageIndex: number, name: string) => {
                this.loadPageData(pageIndex, name);
            });
            this.listenAppEvent("medical/base/anomaly/rowbtnclick", this.UniId, (btnName: string, fid: string) => {
                this[btnName + "Opt"](fid);
            });
        }
        private initBtnList() {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = "总检";
            btnVm.NoEnable = false;
            btnVm.KindCss = "btn-sm btn-primary";
            this.PageBtnList.push(btnVm);



            var btnVm1 = new buttonFile.ui.ButtonVm();
            btnVm1.DisplayName = "强制总检";
            btnVm1.NoEnable = true;
            btnVm1.KindCss = "btn-sm btn-danger";
            this.DataBtnList.push(btnVm1);

            var btnVm2 = new buttonFile.ui.ButtonVm();
            btnVm2.DisplayName = "审核";
            btnVm2.NoEnable = false;
            btnVm2.KindCss = "btn-sm btn-primary";
            this.PageBtnList.push(btnVm2);


            var btnVm3 = new buttonFile.ui.ButtonVm();
            btnVm3.DisplayName = "详情";
            btnVm3.NoEnable = false;
            btnVm3.KindCss = "btn-sm btn-primary";
            this.PageBtnList.push(btnVm3);


            this.PageBtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.buttonClickCommond(a);
                };
            });
            this.DataBtnList.forEach((btn) => {
                btn.ClickFun = (a) => {
                    this.buttonClickCommond(a);
                };
            });

        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                case "总检":
                    var _list = this.getSelectValues();
                    var isEnd = false;
                    if (_list.length != 1) {
                        alert("请选中一条数据");
                        return;
                    }
                    //_list.forEach((a) => {
                    //    if (a.Status == "6") {
                    //        isEnd = true;
                    //    }
                    //})
                    //if (!isEnd) {
                    //var _ids = _list.map((n) => n.FID).join(",");
                    this.totalOpt(_list[0].FID, _list[0].Status);
                    //} else {
                    //    alert("项目中有已经完成了，请重新选中")
                    //}
                    break;
                case "强制总检":
                    var _list = this.getSelectValues();
                    //var _ids = _list.map((n) => n.FID).join(",");
                    this.coerceOpt(_list[0].FID, _list[0].Status);
                    break;

                case "审核":
                    var _list = this.getSelectValues();
                    if (_list.length != 1) {
                        alert("请选中一条数据");
                        return;
                    }
                    this.Checked(_list[0].FID, _list[0].Status);
                    break;
                case "详情":
                    var _list = this.getSelectValues();
                    if (_list.length != 1) {
                        alert("请选中一条数据");
                        return;
                    }
                    this.Detail(_list[0].FID, _list[0].Status);
                    break;
                default:
                    break;
            }
        }
        public btnPrint() {

            var _list = this.getSelectValues();
            for (var i = 0; i < _list.length; i++) {
                if (_list[i].Status != "8") {
                    alert("未审查，不打印");
                    return;
                }
            }
            var _ids = _list.map((n) => n.ExamNumber).join(",");

            if (_list.length > 0) {
                window.open("/MedicalCenter/PrintInsheet/TotalInsPrint?ids=" + _ids);
            } else {
                alert("打印按钮不可用");
            }
        }
        private getSelectValues() {
            //var _list: dataFile.Anomaly.IAnomalyData[] = [];
            var _list: Data.DetectionData.DetectionData[] = [];

            this.GridFormVm.RowList.forEach((r) => {
                var ck = r.SingleCheckboxVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }
        public totalOpt(vals?: string, status?: string) {
            if (vals) {
                if (status == "7") {
                    alert("已退款,不能进行总检");
                } else if (status == "6") {
                    alert("已总检")
                } else if (status == "8") {
                    alert("已审查,不能进行总检")
                } else if (status == "5") {
                    urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$dd$", false);
                } else {
                    alert("该记录没有体检完成");
                }

            } else {
                alert("请选中一条数据！");
            }
            //alert("总检")
        }

        public Checked(vals?: string, Status?: string) {
            //逻辑
            if (Status == "7") {
                alert("已退款,不能进行审核！")
            } else if (Status == "5"){
                alert("未总检,不能进行审核！")
            } else if (Status == "8"){
                alert("已审核")
            } else if (Status == "6"){
                var isChecked = true;
                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$check$", false);
            } else {
                alert("该记录没有体检完成");
            }

        }


        public Detail(vals?: string, Status?: string) {
            var isChecked = true;
            urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$true$", false);
        }

        public coerceOpt(vals?: string, status?: string) {
            if (status == "7") {
                alert("已退款");
            } else if (status == "6") {
                alert("已总检")
            } else if (status == "8") {
                alert("已审查")
            } else if (confirm("你确定要强制总检吗？")) {

                urlFile.Core.AkUrl.Current().openUrl("$DetectionListPage$#$DetectionInsertPage$" + vals + "$dd$", false);

                //urlFile.Core.AkPost("./MedicalCenter/ResultGeneral/ForceGenenral", { fids: vals }, (data) => {

                //    var _data = data.Content;
                //    if (_data == "ok") {
                //        this.loadPageData(0);
                //    }
                //});
            }

            //alert("强制总检")
        }
        private init(config: DetectionListConfig) {
            var searchConfig = { UniId: this.UniId };
            //this.SearchFormVm = new searchFormFile.DetectionSearchFormDom.DetectionSearchFormDomVm(searchConfig);

            this.PagerListData = config.PagerListdata;
            this.PaginationVm = new pagination.tool.PaginationVm();
            var pager = this.PagerListData.Pager;
            this.PaginationVm.PageNo = pager.PageNo;
            this.PaginationVm.PageSize = pager.PageSize;
            this.PaginationVm.TotalCount = pager.TotalCount;
            this.PaginationVm.isPartHidden = true;
            this.PaginationVm.PageClickEvent = (pageIndex) => {
                this.loadPageData(pageIndex);
            }

            var gridFormConfig = { Data: this.PagerListData.ListData, UniId: this.UniId };
            this.GridFormVm = new gridFormFile.DetectionGridFormDom.DetectionGridFormDomVm(gridFormConfig);
            this.GridFormVm.RowList.forEach((row) => {
                this.CheckBoxList.push(row.SingleCheckboxVm);
                row.SingleCheckboxVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });
            this.AllCheck = this.GridFormVm.AllCheck;
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };

        }

        protected loadPage(callback?: () => any) {
            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/List", {}, (a) => {
                var pageConfig: DetectionListConfig = { PagerListdata: a.Data };
                this.init(pageConfig);
                if (callback) {
                    callback();
                }
            });

        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.GridFormVm.RowList;
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }

            rowList.forEach((row) => {
                var chk = row.SingleCheckboxVm;
                var _val = chk.dataValue();
                if (_val == "true" && checkDom != chk) {
                    isCheck = true;
                    checkedCount++;
                }
                if (checkDom == chk) {
                    if (val == "true") {
                        checkedCount++;
                    }
                }
            });


            isAllCheck = rowList.length == checkedCount ? true : false;
            this.DataBtnList.forEach((btn) => {
                btn.NoEnable = isCheck ? false : true;
                btn.forceUpdate("");
            });

            this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");

            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            });

        }

        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                this.GridFormVm.RowList.forEach((row) => {
                    var chk = row.SingleCheckboxVm;
                    chk.reactDataValueSet(val);
                });
            }
        }

        public loadPageData(pageIndex: number, Code?: string) {
            this.GridFormVm.RowList = [];
            this.AllCheck.vmDataValueSet("false");
            this.AllCheck.forceUpdate("");
            var _page = { PageNo: pageIndex };
            urlFile.Core.AkPost("/MedicalCenter/TotalDetection/List",
                {
                    page: JSON.stringify(_page),
                    unit: this.SearchFormVm.SearchName,
                    Code: Code
                },
                (a) => {
                    var pageConfig: DetectionListConfig = { PagerListdata: a.Data };

                    this.init(pageConfig);

                    //this.PaginationVm.PageNo = a.Data.Pager.PageNo;
                    //this.PaginationVm.PageSize = a.Data.Pager.PageSize;
                    //this.PaginationVm.TotalCount = a.Data.Pager.TotalCount;
                    this.PaginationVm.isPartHidden = true;
                    this.PaginationVm.IsChange = true;
                    this.IsChange = true;
                    this.forceUpdate("");

                });
        }
    }
    export class DetectionListPageStates extends basewedPageFile.Web.BaseWebPageStates {
    }


    export class DetectionListPageProps extends basewedPageFile.Web.BaseWebPageProps<DetectionListPageVm>{
    }


    iocFile.Core.Ioc.Current().RegisterType("DetectionListPage", basewedPageFile.Web.BaseWebPageVm, DetectionListPageVm);
}