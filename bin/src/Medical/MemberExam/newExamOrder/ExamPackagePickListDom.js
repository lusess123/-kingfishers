var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Url", "react", "./../../../05tool/Picker/PickListBaseDom", "./ExamPackageSelectorDom"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, selectorFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPackagePickListDom;
    (function (ExamPackagePickListDom) {
        var ExamPackagePickListDomAction = (function (_super) {
            __extends(ExamPackagePickListDomAction, _super);
            function ExamPackagePickListDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPackagePickListDomAction;
        }(domCore.DomAction));
        ExamPackagePickListDom.ExamPackagePickListDomAction = ExamPackagePickListDomAction;
        var ExamPackagePickListDomReact = (function (_super) {
            __extends(ExamPackagePickListDomReact, _super);
            function ExamPackagePickListDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPackagePickListDomStates();
            }
            ExamPackagePickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.ItemSelectorDomObj));
            };
            ExamPackagePickListDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPackagePickListDomReact;
        }(domCore.DomReact));
        ExamPackagePickListDom.ExamPackagePickListDomReact = ExamPackagePickListDomReact;
        var ExamPackagePickListDomVm = (function (_super) {
            __extends(ExamPackagePickListDomVm, _super);
            function ExamPackagePickListDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPackagePickListDomReact;
                this.IsPackageChecked = true;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                //this.ItemMultiSelectPageObj =
                //    new ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm({ UniId: this.UniId });
                //   var pager={
                //     TableName:"", 
                //     PageNo: 0,
                //     PageSize: 15,
                //     TotalCount: 0};
                //var itemPagerListData={Pager:pager,ListData:[]};
                //var packagePagerListData={Pager:pager,ListData:[]};
                this.ItemSelectorDomObj = new selectorFile.ExamPackageSelectorDomDom.ExamPackageSelectorDomVm({ UniId: this.UniId });
            }
            ExamPackagePickListDomVm.prototype.getObjByItems = function (items) {
                return {};
            };
            ExamPackagePickListDomVm.prototype.pRegAppEvent = function () {
                var _this = this;
                //super.pRegAppEvent();
                this.listenAppEvent("PackageorItemChecked", this.UniId, function (isPackageChecked) {
                    _this.ItemSelectorDomObj.isRadioSel = isPackageChecked;
                    _this.ItemSelectorDomObj.forceUpdate("");
                });
            };
            ExamPackagePickListDomVm.prototype.loadDom = function (items, callback) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/PackageSelector/FetchPackageSelectorData", {}, function (a) {
                    if (a && a.Data) {
                        var pageConfig = {
                            PackagePagerListData: a.Data.PackagePagerListData,
                            ItemPagerListData: a.Data.ItemPagerListData
                        };
                        _this.ItemSelectorDomObj.init(pageConfig);
                        _this.ItemSelectorDomObj.ItemFormVm.RowList.forEach(function (r) {
                            var _selItems = items.filter(function (item) { return item.Key == r.RowData.ItemId; });
                            if (_selItems.length > 0) {
                                r.RowData.IsSelect = true;
                                r.SingleCheckboxVm.dataValueSet("true");
                            }
                        });
                        _this.ItemSelectorDomObj.forceUpdate("");
                        callback();
                    }
                });
            };
            return ExamPackagePickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        ExamPackagePickListDom.ExamPackagePickListDomVm = ExamPackagePickListDomVm;
        var ExamPackagePickListDomStates = (function (_super) {
            __extends(ExamPackagePickListDomStates, _super);
            function ExamPackagePickListDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPackagePickListDomStates;
        }(domCore.DomStates));
        ExamPackagePickListDom.ExamPackagePickListDomStates = ExamPackagePickListDomStates;
        var ExamPackagePickListDomProps = (function (_super) {
            __extends(ExamPackagePickListDomProps, _super);
            function ExamPackagePickListDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPackagePickListDomProps;
        }(domCore.DomProps));
        ExamPackagePickListDom.ExamPackagePickListDomProps = ExamPackagePickListDomProps;
    })(ExamPackagePickListDom = exports.ExamPackagePickListDom || (exports.ExamPackagePickListDom = {}));
});
