var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Url", "react", "./../../../../09Web/dom/ThDom", "./../ItemSelector/AppraisalItemPickListDom", "./../../../../05tool/Picker/PickDom"], function (require, exports, domFile, urlFile, React, thFile, pickLeftDomFile, PickDomFile) {
    "use strict";
    var domCore = domFile.Core;
    var AppraisalItemDom;
    (function (AppraisalItemDom) {
        var AppraisalItemDomAction = (function (_super) {
            __extends(AppraisalItemDomAction, _super);
            function AppraisalItemDomAction() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDomAction;
        }(domCore.DomAction));
        AppraisalItemDom.AppraisalItemDomAction = AppraisalItemDomAction;
        var AppraisalItemDomReact = (function (_super) {
            __extends(AppraisalItemDomReact, _super);
            function AppraisalItemDomReact() {
                _super.apply(this, arguments);
                this.state = new AppraisalItemDomStates();
            }
            AppraisalItemDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("p", null, "已选项目：", React.createElement("a", {className: "btn btn-sm btn-primary pull-right", onClick: function () { _this.selectItems(); }}, "添加")), this._initTable(), React.createElement("div", {className: "Hf-overflow", style: { height: 1, width: 1 }}, this.props.Vm.PickDomObj.intoDom()));
            };
            AppraisalItemDomReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            AppraisalItemDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            AppraisalItemDomReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "项目分类"), React.createElement("th", null, "项目名称"), React.createElement("th", null, "分值"), React.createElement("th", null, "最大分值"), React.createElement("th", null, "操作"));
            };
            ;
            AppraisalItemDomReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.RowList.map(function (row) {
                    return React.createElement("tr", null, React.createElement("td", null, row.CategoryName), React.createElement("td", null, row.Name), React.createElement("td", null, row.ObjectValue), React.createElement("td", null, row.MaxValue), React.createElement("td", null, React.createElement("a", {className: "text-danger", onClick: function () { _this.deleteItem(row.FID); }}, "删除")));
                }));
            };
            ;
            AppraisalItemDomReact.prototype.deleteItem = function (id) {
                this.props.Vm.RowList = this.props.Vm.RowList.filter(function (row) {
                    return row.FID != id;
                });
                this.props.Vm.CalculateTotalScore();
                this.forceUpdate();
            };
            AppraisalItemDomReact.prototype.selectItems = function () {
                this.props.Vm.selectItems();
            };
            AppraisalItemDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            AppraisalItemDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return AppraisalItemDomReact;
        }(domCore.DomReact));
        AppraisalItemDom.AppraisalItemDomReact = AppraisalItemDomReact;
        var AppraisalItemDomVm = (function (_super) {
            __extends(AppraisalItemDomVm, _super);
            function AppraisalItemDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = AppraisalItemDomReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.RowList = [];
                this.TotalScore = "0";
                if (config) {
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                    if (config.RowList) {
                        this.RowList = config.RowList;
                        this.CalculateTotalScore();
                    }
                }
                var _itemList = [];
                var _LeftDomVmObj = new pickLeftDomFile.AppraisalItemPickListDom.AppraisalItemPickListDomVm({ UniId: this.UniId });
                this.PickDomObj = new PickDomFile.PickDom.PickDomVm({
                    UniId: this.UniId,
                    PickItemList: _itemList,
                    PickerContainer: {
                        UniId: this.UniId,
                        IsSingle: false,
                        LeftDomVmObj: _LeftDomVmObj,
                        IsPickSelectHide: false,
                        SetSureCustomerObjFun: function (items) {
                            return _LeftDomVmObj.getObjByItems(items);
                        }
                    }
                });
                this.PickDomObj.modalObj.Width = "65%";
                this.listenAppEvent("picker-sure", this.UniId, function (items) {
                    var _list = [];
                    items.forEach(function (a) {
                        _list.push(a.Key);
                    });
                    urlFile.Core.AkPost("/HospPerformance/AppraisalItem/FetchAppraisalItems", { itemIds: _list.join(",") }, function (data) {
                        var _data = data.Data;
                        if (_data) {
                            _this.RowList = _data;
                            _this.CalculateTotalScore();
                            _this.forceUpdate("");
                        }
                    });
                });
            }
            AppraisalItemDomVm.prototype.CalculateTotalScore = function () {
                var totalScore = 0;
                this.RowList.forEach(function (a) {
                    totalScore += parseFloat(a.MaxValue);
                });
                this.TotalScore = totalScore.toString();
            };
            AppraisalItemDomVm.prototype.selectItems = function () {
                var pickItemList = [];
                this.RowList.forEach(function (row) {
                    pickItemList.push({ Key: row.FID, Text: row.Name });
                });
                this.PickDomObj.PortalNode.PickItemList = pickItemList;
                // this.emitAppEvent("FetchAppraisalItemsByResultType", this.UniId, this.ResultType);
                this.PickDomObj.modalObj.open();
            };
            AppraisalItemDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            AppraisalItemDomVm.prototype.getData = function () {
                var idList = [];
                this.RowList.forEach(function (a) {
                    idList.push(a.FID);
                });
                return idList;
            };
            return AppraisalItemDomVm;
        }(domCore.DomVm));
        AppraisalItemDom.AppraisalItemDomVm = AppraisalItemDomVm;
        var AppraisalItemDomStates = (function (_super) {
            __extends(AppraisalItemDomStates, _super);
            function AppraisalItemDomStates() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDomStates;
        }(domCore.DomStates));
        AppraisalItemDom.AppraisalItemDomStates = AppraisalItemDomStates;
        var AppraisalItemDomProps = (function (_super) {
            __extends(AppraisalItemDomProps, _super);
            function AppraisalItemDomProps() {
                _super.apply(this, arguments);
            }
            return AppraisalItemDomProps;
        }(domCore.DomProps));
        AppraisalItemDom.AppraisalItemDomProps = AppraisalItemDomProps;
    })(AppraisalItemDom = exports.AppraisalItemDom || (exports.AppraisalItemDom = {}));
});
