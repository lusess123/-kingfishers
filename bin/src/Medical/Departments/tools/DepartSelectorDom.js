var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./DeptConclusion/DeptConclusionTableDom", "./DeptConclusionExamItem/DeptConExamTableDom", "./../../../05tool/Pagination"], function (require, exports, domFile, urlFile, React, Table, Table1, pager) {
    "use strict";
    var domCore = domFile.Core;
    var DepartSelectorDom;
    (function (DepartSelectorDom) {
        var DepartSelectorDomAction = (function (_super) {
            __extends(DepartSelectorDomAction, _super);
            function DepartSelectorDomAction() {
                _super.apply(this, arguments);
            }
            return DepartSelectorDomAction;
        }(domCore.DomAction));
        DepartSelectorDom.DepartSelectorDomAction = DepartSelectorDomAction;
        var DepartSelectorDomReact = (function (_super) {
            __extends(DepartSelectorDomReact, _super);
            function DepartSelectorDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartSelectorDomStates();
            }
            DepartSelectorDomReact.prototype.pSender = function () {
                return React.createElement("div", null, React.createElement("div", {className: "col-lg-8 col-md-8 YSm-modal-left"}, React.createElement("div", {className: "Hm-table table-responsive"}, this._tDom(this.props.Vm.table)), this._tDom(this.props.Vm.pagertion)), React.createElement("div", {className: "col-lg-4 col-md-4 YSm-modal-right"}, React.createElement("div", {className: "Hm-table table-responsive"}, this._tDom(this.props.Vm.table1))));
            };
            DepartSelectorDomReact.prototype.pComponentDidMount = function () { _super.prototype.pComponentDidMount.call(this); };
            return DepartSelectorDomReact;
        }(domCore.DomReact));
        DepartSelectorDom.DepartSelectorDomReact = DepartSelectorDomReact;
        var DepartSelectorDomVm = (function (_super) {
            __extends(DepartSelectorDomVm, _super);
            function DepartSelectorDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartSelectorDomReact;
                this.dataList = new Array();
                if (config) {
                    //this.dataList = config.derpartData.List;
                    this.UniId = config.Unid;
                    if (config.derpartData) {
                        this.init(config);
                    }
                }
                this.listenAppEvent("medical/Departments/tool/DeptConclusion", this.UniId, function (fid) {
                    urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetExamItem", {
                        FID: fid
                    }, function (a) {
                        var list = [];
                        if (a.Data && a.Data.length > 0) {
                            a.Data.forEach(function (b) {
                                var model = { FID: b.FID, ItemName: b.ItemName, GreaterThan: b.condetion.GreaterThan, LessThan: b.condetion.LessThan, KeyWord: b.condetion.KeyWord, IsPositive: b.condetion.IsPositive };
                                list.push(model);
                            });
                        }
                        var table1config = { Unid: _this.UniId, ListData: list };
                        _this.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(table1config);
                        //this.table1.IsChange = true;
                        //this.table1.RowList.forEach((a) => {
                        //    a.IsChange = true;
                        //})
                        _this.forceUpdate("");
                    });
                });
            }
            DepartSelectorDomVm.prototype.init = function (config) {
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
                this.table = new Table.DeptConclusionTableDom.DeptConclusionTableDomVm(TableConfig);
                var Table1Config = {
                    Unid: this.UniId
                };
                this.table1 = new Table1.DeptConExamTableDom.DeptConExamTableDomVm(Table1Config);
            };
            DepartSelectorDomVm.prototype.loadPageData = function (pageIndex) {
                var _this = this;
                //this.GridFormVm.RowList = [];
                //this.AllCheck.vmDataValueSet("false");
                //this.AllCheck.forceUpdate("");
                var _page = { PageNo: pageIndex };
                urlFile.Core.AkPost("/MedicalCenter/DeptConclusion/GetDepartConclusionList", {
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
                    _this.table = new Table.DeptConclusionTableDom.DeptConclusionTableDomVm(TableConfig);
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
            DepartSelectorDomVm.prototype.init1 = function (config) {
            };
            return DepartSelectorDomVm;
        }(domCore.DomVm));
        DepartSelectorDom.DepartSelectorDomVm = DepartSelectorDomVm;
        var DepartSelectorDomStates = (function (_super) {
            __extends(DepartSelectorDomStates, _super);
            function DepartSelectorDomStates() {
                _super.apply(this, arguments);
            }
            return DepartSelectorDomStates;
        }(domCore.DomStates));
        DepartSelectorDom.DepartSelectorDomStates = DepartSelectorDomStates;
        var DepartSelectorDomProps = (function (_super) {
            __extends(DepartSelectorDomProps, _super);
            function DepartSelectorDomProps() {
                _super.apply(this, arguments);
            }
            return DepartSelectorDomProps;
        }(domCore.DomProps));
        DepartSelectorDom.DepartSelectorDomProps = DepartSelectorDomProps;
    })(DepartSelectorDom = exports.DepartSelectorDom || (exports.DepartSelectorDom = {}));
});
