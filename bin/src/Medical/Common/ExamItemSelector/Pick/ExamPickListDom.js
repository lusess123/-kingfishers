var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../05tool/Picker/PickListBaseDom", "./../../../base/ExamItem/Selector/ExamItemSelectorListPage"], function (require, exports, domFile, urlFile, React, PickListBaseDomFile, ItemSelectorPageFile) {
    "use strict";
    var domCore = domFile.Core;
    var ExamPickListDom;
    (function (ExamPickListDom) {
        var ExamPickListDomAction = (function (_super) {
            __extends(ExamPickListDomAction, _super);
            function ExamPickListDomAction() {
                _super.apply(this, arguments);
            }
            return ExamPickListDomAction;
        }(domCore.DomAction));
        ExamPickListDom.ExamPickListDomAction = ExamPickListDomAction;
        var ExamPickListDomReact = (function (_super) {
            __extends(ExamPickListDomReact, _super);
            function ExamPickListDomReact() {
                _super.apply(this, arguments);
                this.state = new ExamPickListDomStates();
            }
            ExamPickListDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._tDom(this.props.Vm.ItemSelectorPageObj));
            };
            ExamPickListDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return ExamPickListDomReact;
        }(domCore.DomReact));
        ExamPickListDom.ExamPickListDomReact = ExamPickListDomReact;
        var ExamPickListDomVm = (function (_super) {
            __extends(ExamPickListDomVm, _super);
            function ExamPickListDomVm(config) {
                _super.call(this);
                this.ReactType = ExamPickListDomReact;
                if (config.UniId) {
                    this.UniId = config.UniId;
                }
                //this.ItemMultiSelectPageObj =
                //    new ItemMultiSelectPageFile.ItemMultiSelectPage.ItemMultiSelectPageVm({ UniId: this.UniId });
                this.ItemSelectorPageObj = new ItemSelectorPageFile.ExamItemSelectorListPage.ExamItemSelectorListPageVm();
            }
            ExamPickListDomVm.prototype.loadDom = function (items) {
                var _this = this;
                urlFile.Core.AkPost("/MedicalCenter/ExamItem/SearchExamItem", {}, function (a) {
                    var pageConfig = {
                        PagerListData: a.Data,
                        UniId: _this.UniId
                    };
                    _this.ItemSelectorPageObj.init(pageConfig);
                    _this.ItemSelectorPageObj.GridFormVm.RowList.forEach(function (r) {
                        var _len = items.filter(function (item) { return item.Key == r.RowData.FID; });
                        if (_len.length > 0) {
                            r.RowData.IsSelect = true;
                        }
                    });
                    _this.ItemSelectorPageObj.forceUpdate("");
                });
            };
            return ExamPickListDomVm;
        }(PickListBaseDomFile.PickListBaseDom.PickListBaseDomVm));
        ExamPickListDom.ExamPickListDomVm = ExamPickListDomVm;
        var ExamPickListDomStates = (function (_super) {
            __extends(ExamPickListDomStates, _super);
            function ExamPickListDomStates() {
                _super.apply(this, arguments);
            }
            return ExamPickListDomStates;
        }(domCore.DomStates));
        ExamPickListDom.ExamPickListDomStates = ExamPickListDomStates;
        var ExamPickListDomProps = (function (_super) {
            __extends(ExamPickListDomProps, _super);
            function ExamPickListDomProps() {
                _super.apply(this, arguments);
            }
            return ExamPickListDomProps;
        }(domCore.DomProps));
        ExamPickListDom.ExamPickListDomProps = ExamPickListDomProps;
    })(ExamPickListDom = exports.ExamPickListDom || (exports.ExamPickListDom = {}));
});
