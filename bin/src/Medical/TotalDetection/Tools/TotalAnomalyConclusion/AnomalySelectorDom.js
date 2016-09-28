var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./AnomalyConclusionTableDom", "./AnomalyConExamTableDom", "./../../../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, Table, Table1, pager) {
    "use strict";
    var domCore = domFile.Core;
    var AnomalySelectorDom;
    (function (AnomalySelectorDom) {
        var AnomalySelectorDomAction = (function (_super) {
            __extends(AnomalySelectorDomAction, _super);
            function AnomalySelectorDomAction() {
                _super.apply(this, arguments);
            }
            return AnomalySelectorDomAction;
        }(domCore.DomAction));
        AnomalySelectorDom.AnomalySelectorDomAction = AnomalySelectorDomAction;
        var AnomalySelectorDomReact = (function (_super) {
            __extends(AnomalySelectorDomReact, _super);
            function AnomalySelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new AnomalySelectorDomStates();
            }
            AnomalySelectorDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-modal-left"}, React.createElement("div", {className: "Hm-table table-responsive"}, this._tDom(this.props.Vm.table)), this._tDom(this.props.Vm.pagertion)), React.createElement("div", {className: "col-lg-4 col-md-4 YSm-modal-right"}, React.createElement("div", {className: "Hm-table table-responsive"}, this._tDom(this.props.Vm.table1))));
            };
            AnomalySelectorDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return AnomalySelectorDomReact;
        }(domCore.DomReact));
        AnomalySelectorDom.AnomalySelectorDomReact = AnomalySelectorDomReact;
        var AnomalySelectorDomVm = (function (_super) {
            __extends(AnomalySelectorDomVm, _super);
            function AnomalySelectorDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AnomalySelectorDomReact;
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.UniId = config.Unid;
                    if (config.derpartData) {
                        this.init(config);
                    }
                }
                this.listenAppEvent("medical/Anomaly/tools/TotalAnomalyConclusion", this.UniId, function (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetExamItem", {
                        FID: fid
                    }, function (a) {
                        var list = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach(function (b) {
                                var model = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.GreaterThan, LessThan: b.LessThan, KeyWord: b.KeyWord, IsPositive: b.IsPositive };
                                list.push(model);
                            });
                        }
                        var table1config = { Unid: _this.UniId, ListData: list };
                        _this.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(table1config);
                        _this.table1.IsChange = true;
                        _this.table1.RowList.forEach(function (a) {
                            a.IsChange = true;
                        });
                        _this.forceUpdate("");
                    });
                });
            }
            AnomalySelectorDomVm.prototype.init = function (config) {
                var _this = this;
                var TableConfig = {
                    Unid: this.UniId,
                    ListData: config.derpartData.ListData
                };
                this.pagertion = new pager.tool.PaginationVm();
                this.pagertion.PageNo = config.derpartData.Pager.PageNo;
                this.pagertion.PageSize = config.derpartData.Pager.PageSize;
                this.pagertion.TotalCount = config.derpartData.Pager.TotalCount;
                this.pagertion.isPartHidden = true;
                this.pagertion.PageClickEvent = function (pageIndex) {
                    _this.loadPageData(pageIndex);
                };
                //config.derpartData.Pager
                this.table = new Table.AnomalyConclusionTableDom.AnomalyConclusionTableDomVm(TableConfig);
                var Table1Config = {
                    Unid: this.UniId
                };
                this.table1 = new Table1.AnomalyConExamTableDom.AnomalyConExamTableDomVm(Table1Config);
            };
            AnomalySelectorDomVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                //this.GridFormVm.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/AnomalyConclusion/GetAnomalyConclusionList", {
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
                    _this.table = new Table.AnomalyConclusionTableDom.AnomalyConclusionTableDomVm(TableConfig);
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
            AnomalySelectorDomVm.prototype.init1 = function (config) {
            };
            return AnomalySelectorDomVm;
        }(domCore.DomVm));
        AnomalySelectorDom.AnomalySelectorDomVm = AnomalySelectorDomVm;
        var AnomalySelectorDomStates = (function (_super) {
            __extends(AnomalySelectorDomStates, _super);
            function AnomalySelectorDomStates() {
                _super.apply(this, arguments);
            }
            return AnomalySelectorDomStates;
        }(domCore.DomStates));
        AnomalySelectorDom.AnomalySelectorDomStates = AnomalySelectorDomStates;
        var AnomalySelectorDomProps = (function (_super) {
            __extends(AnomalySelectorDomProps, _super);
            function AnomalySelectorDomProps() {
                _super.apply(this, arguments);
            }
            return AnomalySelectorDomProps;
        }(domCore.DomProps));
        AnomalySelectorDom.AnomalySelectorDomProps = AnomalySelectorDomProps;
    })(AnomalySelectorDom = exports.AnomalySelectorDom || (exports.AnomalySelectorDom = {}));
});
