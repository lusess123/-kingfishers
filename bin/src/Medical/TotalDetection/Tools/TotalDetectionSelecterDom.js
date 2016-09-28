var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./AdviceConclusion/AdviceConclusionTableDom", "./../../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, Table, pager) {
    "use strict";
    var domCore = domFile.Core;
    var TotalDetectionSelecterDom;
    (function (TotalDetectionSelecterDom) {
        var TotalDetectionSelecterDomAction = (function (_super) {
            __extends(TotalDetectionSelecterDomAction, _super);
            function TotalDetectionSelecterDomAction() {
                _super.apply(this, arguments);
            }
            return TotalDetectionSelecterDomAction;
        }(domCore.DomAction));
        TotalDetectionSelecterDom.TotalDetectionSelecterDomAction = TotalDetectionSelecterDomAction;
        var TotalDetectionSelecterDomReact = (function (_super) {
            __extends(TotalDetectionSelecterDomReact, _super);
            function TotalDetectionSelecterDomReact() {
                _super.apply(this, arguments);
                this.state = new TotalDetectionSelecterDomStates();
            }
            TotalDetectionSelecterDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-modal-left"}, React.createElement("div", {className: "Hm-table table-responsive"}, this._tDom(this.props.Vm.table)), this._tDom(this.props.Vm.pagertion)));
            };
            TotalDetectionSelecterDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return TotalDetectionSelecterDomReact;
        }(domCore.DomReact));
        TotalDetectionSelecterDom.TotalDetectionSelecterDomReact = TotalDetectionSelecterDomReact;
        var TotalDetectionSelecterDomVm = (function (_super) {
            __extends(TotalDetectionSelecterDomVm, _super);
            function TotalDetectionSelecterDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TotalDetectionSelecterDomReact;
                this.dataList = new Array();
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.UniId = config.Unid;
                    if (config.advicetemple) {
                        this.init(config);
                    }
                }
                this.listenAppEvent("medical/TotalDetection/Tool/AdviceConclusion", this.UniId, function (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetExamItem", {
                        FID: fid
                    }, function (a) {
                        var list = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach(function (b) {
                                var model = { FID: b.FID, Name: b.Name, Summary: b.Summary, Advice: b.Advice };
                                list.push(model);
                            });
                        }
                        //自动小结
                        //  var table1config: Table1.DoctorConclusionTableDom.IDoctorConclusionTableDomConfig = { Unid: this.UniId, ListData: list }
                        // this.table1 = new Table1.DoctorConclusionTableDom.DoctorConclusionTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        _this.forceUpdate("");
                    });
                });
            }
            TotalDetectionSelecterDomVm.prototype.init = function (config) {
                var _this = this;
                var TableConfig = {
                    Unid: this.UniId,
                    ListData: config.advicetemple.ListData
                };
                this.pagertion = new pager.tool.PaginationVm();
                this.pagertion.PageNo = config.advicetemple.Pager.PageNo;
                this.pagertion.PageSize = config.advicetemple.Pager.PageSize;
                this.pagertion.TotalCount = config.advicetemple.Pager.TotalCount;
                this.pagertion.isPartHidden = true;
                this.pagertion.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                //config.derpartData.Pager
                this.table = new Table.AdviceConclusionTableDom.AdviceConclusionTableDomVm(TableConfig);
                // var Table1Config: Table1.DoctorConclusionTableDom.IDoctorConclusionTableDomConfig = {
                // Unid: this.UniId,
                //ListData: config.derpartData.ListData
                //}
                //this.table1 = new Table1.DoctorConclusionTableDom.DoctorConclusionTableDomVm(Table1Config);
            };
            TotalDetectionSelecterDomVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                //this.GridFormVm.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/TotalDetection/GetAdviceList", {
                    pager: JSON.stringify(_page)
                }, function (a) {
                    //this.DataList = { Data: [] }
                    //this.DataList.Data = a.Data.ListData;
                    //this.table = new Form.PersonPaymentGridFormDom.PersonPaymentGridFormDomVm(this.DataList);
                    //this.table.IsChange = true;
                    //this.table.forceUpdate("");
                    var TableConfig = {
                        Unid: _this.UniId,
                        ListData: a.Data.ListData
                    };
                    _this.table = new Table.AdviceConclusionTableDom.AdviceConclusionTableDomVm(TableConfig);
                    _this.table.IsChange = true;
                    _this.table.RowList.forEach(function (a) { return a.IsChange = true; });
                    _this.pagertion.PageNo = a.Data.Pager.PageNo;
                    _this.pagertion.PageSize = a.Data.Pager.PageSize;
                    _this.pagertion.TotalCount = a.Data.Pager.TotalCount;
                    //this.pagertion.isPartHidden = true;
                    _this.pagertion.IsChange = true;
                    _this.forceUpdate("");
                });
            };
            TotalDetectionSelecterDomVm.prototype.init1 = function (config) {
            };
            return TotalDetectionSelecterDomVm;
        }(domCore.DomVm));
        TotalDetectionSelecterDom.TotalDetectionSelecterDomVm = TotalDetectionSelecterDomVm;
        var TotalDetectionSelecterDomStates = (function (_super) {
            __extends(TotalDetectionSelecterDomStates, _super);
            function TotalDetectionSelecterDomStates() {
                _super.apply(this, arguments);
            }
            return TotalDetectionSelecterDomStates;
        }(domCore.DomStates));
        TotalDetectionSelecterDom.TotalDetectionSelecterDomStates = TotalDetectionSelecterDomStates;
        var TotalDetectionSelecterDomProps = (function (_super) {
            __extends(TotalDetectionSelecterDomProps, _super);
            function TotalDetectionSelecterDomProps() {
                _super.apply(this, arguments);
            }
            return TotalDetectionSelecterDomProps;
        }(domCore.DomProps));
        TotalDetectionSelecterDom.TotalDetectionSelecterDomProps = TotalDetectionSelecterDomProps;
    })(TotalDetectionSelecterDom = exports.TotalDetectionSelecterDom || (exports.TotalDetectionSelecterDom = {}));
});
