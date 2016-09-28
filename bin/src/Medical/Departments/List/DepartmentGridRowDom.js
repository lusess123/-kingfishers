var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Ioc", "./../../../01core/Url", "react", "./../../../02col/02Mulite/SingleCheckBox", "./../../../02col/03selector/selector", "./../../../02col/00core/BaseCol"], function (require, exports, domFile, iocFile, urlFile, React, singleCheckFile, SelectorFile, baseColFile) {
    "use strict";
    //import domFile = require("./../01core/0Dom");
    var domCore = domFile.Core;
    var DepartmentGridRowDom;
    (function (DepartmentGridRowDom) {
        var DepartmentGridRowDomAction = (function (_super) {
            __extends(DepartmentGridRowDomAction, _super);
            function DepartmentGridRowDomAction() {
                _super.apply(this, arguments);
            }
            return DepartmentGridRowDomAction;
        }(domCore.DomAction));
        DepartmentGridRowDom.DepartmentGridRowDomAction = DepartmentGridRowDomAction;
        var DepartmentGridRowDomReact = (function (_super) {
            __extends(DepartmentGridRowDomReact, _super);
            function DepartmentGridRowDomReact() {
                _super.apply(this, arguments);
                this.state = new DepartmentGridRowDomStates();
            }
            DepartmentGridRowDomReact.prototype.pSender = function () {
                var _this = this;
                return (React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Itemdata.Name), React.createElement("td", null, this.props.Vm.ColVmObjList["IsPositive"].intoDom()), React.createElement("td", null, this.props.Vm.SelectResult.intoDom()), React.createElement("td", null, this.props.Vm.Itemdata.Unit), React.createElement("td", null, React.createElement("i", {className: this.fun_Isoverproof(), "aria-hidden": "true"})), React.createElement("td", null, this.props.Vm.Itemdata.UpperLimit), React.createElement("td", null, this.props.Vm.Itemdata.LowerLimit), React.createElement("td", null, this.props.Vm.ColVmObjList["IsGivenUp"].intoDom()), React.createElement("td", null, React.createElement("a", {onClick: function () { _this.props.Vm.onUplodeImage(); }}, this.Send(this.props.Vm.Itemdata.PictureCount)))));
            };
            DepartmentGridRowDomReact.prototype.Send = function (count) {
                if (!count) {
                    return "上传图片";
                }
                else {
                    return "已上传" + count + "张图片";
                }
            };
            //public createSingleCheckBox(): React.ReactElement<any> {
            //    return this.props.Vm.SingleCheckboxVm.intoDom();
            //}
            ////是否阴性 
            //public fun_positive(e) {
            //    var _val = e.target["value"];
            //    if (_val == "1") {
            //        this.props.Vm.IsPositive = true;
            //    } else {
            //        this.props.Vm.IsPositive = false;
            //    }
            //    this.forceUpdate();
            //}
            ////是否弃检
            //public fun_waiver(e) {
            //    var _val = e.target["value"];
            //    if (_val == "1") {
            //        this.props.Vm.IsWaiver = true;
            //    } else {
            //        this.props.Vm.IsWaiver = false;
            //    }
            //    this.forceUpdate();
            //}
            //超标图标
            DepartmentGridRowDomReact.prototype.fun_Isoverproof = function () {
                var _val = this.props.Vm.IsOverproof;
                if (_val == "2") {
                    this.props.Vm.Itemdata.IsOverHint = 2;
                    this.props.Vm.IsOverproof = "fa fa-long-arrow-up";
                }
                else if (_val == "1") {
                    this.props.Vm.Itemdata.IsOverHint = 1;
                    this.props.Vm.IsOverproof = "fa fa-long-arrow-down";
                }
                else {
                    this.props.Vm.Itemdata.IsOverHint = 0;
                    this.props.Vm.IsOverproof = "";
                }
                return this.props.Vm.IsOverproof;
            };
            //public fun_result(e) {
            //    var _val = e.target["value"];
            //    this.props.Vm.ResultData.Result = _val;
            //    this.forceUpdate();
            //}
            DepartmentGridRowDomReact.prototype.createRow = function () {
                return (React.createElement("tr", null, React.createElement("td", null, this.props.Vm.Itemdata.Name), React.createElement("td", null, this.props.Vm.IsPositiveCheckBox.intoDom()), React.createElement("td", null, this.props.Vm.result), React.createElement("td", null, this.props.Vm.Itemdata.Unit), React.createElement("td", null, React.createElement("i", {className: this.fun_Isoverproof(), "aria-hidden": "true"})), React.createElement("td", null, this.props.Vm.Itemdata.UpperLimit), React.createElement("td", null, this.props.Vm.Itemdata.LowerLimit), React.createElement("td", null, this.props.Vm.IsGivenupCheckBox.intoDom()), React.createElement("td", null, this.props.Vm.IsExamedCheckBox.intoDom()), React.createElement("td", null, React.createElement("a", {onClick: this.props.Vm.onUplodeImage()}, this.props.Vm.Affix))));
            };
            DepartmentGridRowDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return DepartmentGridRowDomReact;
        }(domCore.DomReact));
        DepartmentGridRowDom.DepartmentGridRowDomReact = DepartmentGridRowDomReact;
        var DepartmentGridRowDomVm = (function (_super) {
            __extends(DepartmentGridRowDomVm, _super);
            function DepartmentGridRowDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = DepartmentGridRowDomReact;
                this.SingleCheckboxVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsPositiveCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsExamedCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();
                this.IsGivenupCheckBox = new singleCheckFile.ui.SingleCheckBoxVm();
                this.ResultData = {};
                this.Affix = "上传图片"; //附件
                this.ColVmObjList = {};
                this.TextVmObjList = {};
                this.result = "";
                var data = { IsTextArea: true, NoAutoSuggest: true, OpenLinkTxt: "常见结果", RegName: "BaseResultCommonCodeTable", HasCanEdit: true };
                this.SelectResult = new SelectorFile.ui.SelectorVm(data);
                this.initColVm("Result", "TextVm");
                this.initColVm("IsPositive", "SingleCheckBoxVm");
                this.initColVm("IsGivenUp", "SingleCheckBoxVm");
                if (config) {
                    this.Itemdata = config.ExamItemData;
                    var itemid = this.Itemdata.ItemId;
                    var Upper = this.Itemdata.UpperLimit;
                    var Lower = this.Itemdata.LowerLimit;
                    if (this.Itemdata.IsOverHint) {
                        this.IsOverproof = this.Itemdata.IsOverHint.toString();
                    }
                    if (this.Itemdata.Picture) {
                        var imageobj = JSON.parse(this.Itemdata.Picture);
                        this.Itemdata.PictureCount = imageobj["ResourceInfoList"].length;
                    }
                    this.SelectResult.OnPostDataSetFun = function (ds) {
                        var _rows = ds["ItemId"] = [];
                        var _row = { ItemId: itemid };
                        _rows.push(_row);
                        return ds;
                    };
                    this.SelectResult.onBlurFun = function (a) {
                        if (Upper && Lower) {
                            var num = parseFloat(a);
                            if (num > Upper) {
                                _this.IsOverproof = "2";
                            }
                            else if (num < Lower) {
                                _this.IsOverproof = "1";
                            }
                            else {
                                _this.IsOverproof = "0";
                            }
                            _this.forceUpdate("");
                        }
                    };
                    if (this.Itemdata.IsGivenUp != null && this.Itemdata.IsGivenUp == 1) {
                        this.ColVmObjList["IsGivenUp"].dataValueSet("true");
                    }
                    if (this.Itemdata.IsPositive != null && this.Itemdata.IsPositive == 1) {
                        this.ColVmObjList["IsPositive"].dataValueSet("true");
                    }
                    if (this.Itemdata.Result) {
                        this.SelectResult.Text = this.Itemdata.Result;
                    }
                }
            }
            DepartmentGridRowDomVm.prototype.initColVm = function (colName, colType, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = iocFile.Core.Ioc.Current().FetchInstance(colType, baseColFile.Core.BaseColVm);
                    _exciteBean.Tag = colName;
                    _exciteBean.LegalObj.Kind = legal ? legal : "";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.ResultData[colName] = val;
                        return true;
                    });
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            DepartmentGridRowDomVm.prototype.getData = function () {
                var data = this.ResultData;
                data.Result = this.SelectResult.Text;
                data.FID = this.Itemdata.MemberExamItemId;
                data.Picture = this.Itemdata.Picture;
                data.IsOverHint = this.Itemdata.IsOverHint;
                return data;
            };
            DepartmentGridRowDomVm.prototype.onUplodeImage = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winDEPARTMENTIMAGEPAGE$" + JSON.stringify(this.Itemdata) + "$", true);
            };
            return DepartmentGridRowDomVm;
        }(domCore.DomVm));
        DepartmentGridRowDom.DepartmentGridRowDomVm = DepartmentGridRowDomVm;
        var DepartmentGridRowDomStates = (function (_super) {
            __extends(DepartmentGridRowDomStates, _super);
            function DepartmentGridRowDomStates() {
                _super.apply(this, arguments);
            }
            return DepartmentGridRowDomStates;
        }(domCore.DomStates));
        DepartmentGridRowDom.DepartmentGridRowDomStates = DepartmentGridRowDomStates;
        var DepartmentGridRowDomProps = (function (_super) {
            __extends(DepartmentGridRowDomProps, _super);
            function DepartmentGridRowDomProps() {
                _super.apply(this, arguments);
            }
            return DepartmentGridRowDomProps;
        }(domCore.DomProps));
        DepartmentGridRowDom.DepartmentGridRowDomProps = DepartmentGridRowDomProps;
    })(DepartmentGridRowDom = exports.DepartmentGridRowDom || (exports.DepartmentGridRowDom = {}));
});
