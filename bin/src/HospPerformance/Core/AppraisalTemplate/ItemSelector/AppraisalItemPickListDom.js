var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Picker/PickListBaseDom", "./AppraisalItemSelectorListPage"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, selectorFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalItemPickListDom;
    (function (AppraisalItemPickListDom) {
        var AppraisalItemPickListDomAction = (function (_super) {
            __extends(AppraisalItemPickListDomAction, _super);
            function AppraisalItemPickListDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemPickListDomAction;
        }(domCore.DomAction));
        AppraisalItemPickListDom.AppraisalItemPickListDomAction = AppraisalItemPickListDomAction;
        var AppraisalItemPickListDomReact = (function (_super) {
            __extends(AppraisalItemPickListDomReact, _super);
            function AppraisalItemPickListDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemPickListDomStates();
            }
            AppraisalItemPickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.ItemSelectorPageObj));
            };
            AppraisalItemPickListDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalItemPickListDomReact;
        }(domCore.DomReact));
        AppraisalItemPickListDom.AppraisalItemPickListDomReact = AppraisalItemPickListDomReact;
        var AppraisalItemPickListDomVm = (function (_super) {
            __extends(AppraisalItemPickListDomVm, _super);
            function AppraisalItemPickListDomVm(config) {
                _super.call(this);
                this.ReactType = AppraisalItemPickListDomReact;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                this.ItemSelectorPageObj = new selectorFile.AppraisalItemSelectorListPage.AppraisalItemSelectorListPageVm({ UniId: this.UniId });
            }
            AppraisalItemPickListDomVm.prototype.getObjByItems = function (items) {
                return {};
            };
            //protected pRegAppEvent() {
            //    this.listenAppEvent("AppraisalItemSelector/loadpagedata", this.UniId, (pageIndex: number) => {
            //        this.ItemSelectorPageObj.loadPageData(pageIndex);
            //    });
            //}
            AppraisalItemPickListDomVm.prototype.loadDom = function (items, callback) {
                var _this = this;
                this.ResultType = window["ResultType" + this.UniId];
                urlFile.Core.AkPost("/HospPerformance/AppraisalItem/SearchAppraisalItems", { resultType: this.ResultType }, function (a) {
                    if (a && a.Data) {
                        var pageConfig = {
                            PagerListData: a.Data,
                            ResultType: _this.ResultType,
                            IsSearch: false
                        };
                        _this.ItemSelectorPageObj.init(pageConfig);
                        _this.ItemSelectorPageObj.GridFormVm.RowList.forEach(function (r) {
                            var _selItems = items.filter(function (item) { return item.Key == r.RowData.FID; });
                            if (_selItems.length > 0) {
                                r.RowData.IsSelect = true;
                                r.SingleCheckVm.dataValueSet("true");
                            }
                        });
                        _this.ItemSelectorPageObj.forceUpdate("");
                        callback();
                    }
                });
            };
            return AppraisalItemPickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        AppraisalItemPickListDom.AppraisalItemPickListDomVm = AppraisalItemPickListDomVm;
        var AppraisalItemPickListDomStates = (function (_super) {
            __extends(AppraisalItemPickListDomStates, _super);
            function AppraisalItemPickListDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemPickListDomStates;
        }(domCore.DomStates));
        AppraisalItemPickListDom.AppraisalItemPickListDomStates = AppraisalItemPickListDomStates;
        var AppraisalItemPickListDomProps = (function (_super) {
            __extends(AppraisalItemPickListDomProps, _super);
            function AppraisalItemPickListDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemPickListDomProps;
        }(domCore.DomProps));
        AppraisalItemPickListDom.AppraisalItemPickListDomProps = AppraisalItemPickListDomProps;
    })(AppraisalItemPickListDom = exports.AppraisalItemPickListDom || (exports.AppraisalItemPickListDom = {}));
});
