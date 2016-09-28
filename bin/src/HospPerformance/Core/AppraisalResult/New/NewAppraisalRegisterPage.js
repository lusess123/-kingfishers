var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/Ioc", "./../../../../01core/Util", "./../../../../01core/Url", "./../../../../04page/BaseWebPage", "react", "./../../../../02col/00core/BaseCol", "./../data", "./../../../../02col/01single/TextArea", "./../../../../02col/01single/Text", "./../../../../09Web/dom/ThDom"], function (require, exports, iocFile, utilFile, urlFile, basewedPageFile, React, baseColFile, dataFile, textAreaFile, textFile, thFile) {
    "use strict";
    var NewAppraisalRegisterPage;
    (function (NewAppraisalRegisterPage) {
        var NewAppraisalRegisterPageAction = (function (_super) {
            __extends(NewAppraisalRegisterPageAction, _super);
            function NewAppraisalRegisterPageAction() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalRegisterPage.NewAppraisalRegisterPageAction = NewAppraisalRegisterPageAction;
        var NewAppraisalRegisterPageReact = (function (_super) {
            __extends(NewAppraisalRegisterPageReact, _super);
            function NewAppraisalRegisterPageReact() {
                _super.apply(this, arguments);
                this.state = new NewAppraisalRegisterPageStates();
            }
            NewAppraisalRegisterPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "p-a-md"}, this._initTimes(), this._initAppraisalObject(), this._initTable(), this._initVluation(), this._initBtns());
            };
            NewAppraisalRegisterPageReact.prototype._initTimes = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix hide"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-3 form-control-label text-right"}, "类型："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 YSm-textarea"})), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-3 form-control-label text-right"}, "启动日期："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 YSm-textarea"}, React.createElement("label", {className: "pull-left form-control-label"}, this.props.Vm.PageData.AppraisalStartDate))), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-3 form-control-label text-right required"}, "开始日期："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 YSm-textarea"}, this.props.Vm.ColVmObjList["AppraisalBeginDate"].intoDom())), React.createElement("div", {className: "col-lg-4 col-md-4 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-3 form-control-label text-right required"}, "结束日期："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 YSm-textarea"}, this.props.Vm.ColVmObjList["AppraisalEndDate"].intoDom())));
            };
            NewAppraisalRegisterPageReact.prototype._initAppraisalObject = function () {
                var _this = this;
                return React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-5 col-md-5 col-sm-8 col-xs-8 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-3 col-md-3 col-sm-3 form-control-label text-right"}, "考核对象："), React.createElement("div", {className: "col-lg-9 col-md-9 col-sm-9 "}, this.props.Vm.ColVmObjList["AppraisalObject"].intoDom())), React.createElement("ul", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 nav nav-pills YSm-list"}, this.props.Vm.DisplayUserList.map(function (user) {
                    return React.createElement("li", {className: user.IsSelect ? "active nav-item" : "nav-item", onClick: function () { _this.selectUser(user.UserId); }}, " ", user.IsAppraised ? user.TrueName + "(已考核)" : user.TrueName, " ");
                })));
            };
            NewAppraisalRegisterPageReact.prototype.selectUser = function (userId) {
                var _this = this;
                this.props.Vm.DisplayUserList.forEach(function (a) {
                    if (a.UserId == userId) {
                        a.IsSelect = true;
                        _this.props.Vm.CurSelectedUser = a;
                    }
                    else
                        a.IsSelect = false;
                });
                this.props.Vm.fetchSelectedUserMarkData();
            };
            NewAppraisalRegisterPageReact.prototype._initTable = function () {
                var _this = this;
                var theader = React.createElement("thead", {className: "thead-default"}, this.initHeader());
                var tbody = this.initBody();
                var table = React.createElement("table", {className: "table table-striped table-bordered table-hover"}, theader, tbody);
                return React.createElement("div", {className: "table-responsive", onScroll: function (e) { _this.fun_Scroll(e); }}, table);
            };
            NewAppraisalRegisterPageReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            NewAppraisalRegisterPageReact.prototype.initHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null, "考核项目"), React.createElement("th", null, "考核内容"), React.createElement("th", null, "考核标准"), React.createElement("th", null, "标准分"), React.createElement("th", null, "最大分"), React.createElement("th", null, "分数"), React.createElement("th", null, "评语"));
            };
            ;
            NewAppraisalRegisterPageReact.prototype.initBody = function () {
                var _this = this;
                return React.createElement("tbody", null, this.props.Vm.CurSelectedUser.ItemList.map(function (item, i) {
                    return React.createElement("tr", null, React.createElement("td", null, item.Name), React.createElement("td", {name: "standard"}, item.Content), React.createElement("td", {name: "standard"}, item.Standard), React.createElement("td", null, item.ObjectValue), React.createElement("td", null, item.MaxValue), React.createElement("td", null, _this.props.Vm.ItemResultTextList[i].intoDom()), React.createElement("td", null, _this.props.Vm.ItemReviewsTextAreaList[i].intoDom()));
                }));
            };
            ;
            NewAppraisalRegisterPageReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            NewAppraisalRegisterPageReact.prototype._initVluation = function () {
                return React.createElement("form", {className: "clearfix"}, React.createElement("div", {className: "col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-lg-1 col-md-2 col-sm-3 form-control-label text-right"}, "总评："), React.createElement("div", {className: "col-lg-11 col-md-10 col-sm-9 YSm-textarea"}, this.props.Vm.ColVmObjList["OverallReviews"].intoDom())));
            };
            NewAppraisalRegisterPageReact.prototype._initBtns = function () {
                var _this = this;
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.save(); }}, "保存"));
            };
            NewAppraisalRegisterPageReact.prototype.save = function () {
                this.props.Vm.save();
            };
            return NewAppraisalRegisterPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        NewAppraisalRegisterPage.NewAppraisalRegisterPageReact = NewAppraisalRegisterPageReact;
        var NewAppraisalRegisterPageVm = (function (_super) {
            __extends(NewAppraisalRegisterPageVm, _super);
            function NewAppraisalRegisterPageVm(config) {
                _super.call(this);
                this.ReactType = NewAppraisalRegisterPageReact;
                this.ColVmObjList = {};
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.ItemReviewsTextAreaList = [];
                this.ItemResultTextList = [];
                this.DisplayUserList = [];
                this.IsLastUser = false;
                this.Title = "考核登记"; //弹出窗标题
                if (config) {
                    this.init(config);
                }
            }
            NewAppraisalRegisterPageVm.prototype.init = function (config) {
                if (config) {
                    this.PageData = config.PageData;
                }
                this.DisplayUserList = this.PageData.UserAppraisalList ? this.PageData.UserAppraisalList : [];
                this.CurSelectedUser = this.PageData.UserAppraisalList ? this.PageData.UserAppraisalList[0] : { ItemList: [] };
                this.CurSelectedUser.IsSelect = true;
                this.initColVm("AppraisalBeginDate", "DateVm", "notNull");
                this.initColVm("AppraisalEndDate", "DateVm", "notNull");
                this.initColVm("AppraisalObject", "RadioVm");
                // this.initColVm("OverallReviews", "TextAreaVm", "notNull");
                this.initItemList();
            };
            NewAppraisalRegisterPageVm.prototype.initItemList = function () {
                var _this = this;
                var newTextAreaVm = new textAreaFile.ui.TextAreaVm();
                this.ColVmObjList["OverallReviews"] = newTextAreaVm;
                newTextAreaVm.dataValueSet(this.CurSelectedUser.OverallReviews);
                newTextAreaVm.onChangeHandle(function (val) {
                    _this.CurSelectedUser.OverallReviews = val;
                    return true;
                });
                this.ItemReviewsTextAreaList = [];
                this.ItemResultTextList = [];
                if (this.CurSelectedUser.ItemList) {
                    this.CurSelectedUser.ItemList.forEach(function (a) {
                        var textAreaVm = new textAreaFile.ui.TextAreaVm();
                        textAreaVm.dataValueSet(a.Reviews);
                        textAreaVm.ChangeEventFun = function (val, col) {
                            a.Reviews = val;
                            return true;
                        };
                        _this.ItemReviewsTextAreaList.push(textAreaVm);
                        var textVm = new textFile.ui.TextVm();
                        textVm.LegalObj.Kind = "notNull";
                        textVm.dataValueSet(a.Result || (a.Result && Number(a.Result)) == 0 ? a.Result.toString() : "");
                        textVm.ChangeEventFun = function (val, col) {
                            a.Result = val;
                            return true;
                        };
                        _this.ItemResultTextList.push(textVm);
                    });
                }
            };
            NewAppraisalRegisterPageVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.IsMulit = true;
                    if (colName == "AppraisalBeginDate" || colName == "AppraisalEndDate") {
                        _exciteBean.dataValueSet(this.PageData[colName]);
                        _exciteBean.onChangeHandle(function (val) {
                            _this.PageData[colName] = val;
                            return true;
                        });
                    }
                    if (colName == "AppraisalObject") {
                        var typeRadioVm = utilFile.Core.Util.Cast(_exciteBean);
                        typeRadioVm.ItemList = dataFile.Data.AppraisalObjectData;
                        typeRadioVm.dataValueSet(typeRadioVm.ItemList[0].Value);
                        typeRadioVm.onChangeHandle(function (val) {
                            if (val == "0") {
                                _this.DisplayUserList = _this.PageData.UserAppraisalList;
                            }
                            else if (val == "1") {
                                _this.DisplayUserList = [];
                                _this.DisplayUserList = _this.PageData.UserAppraisalList.filter(function (a) {
                                    return a.IsAppraised;
                                });
                            }
                            else {
                                _this.DisplayUserList = [];
                                _this.DisplayUserList = _this.PageData.UserAppraisalList.filter(function (a) {
                                    return !a.IsAppraised;
                                });
                            }
                            if (_this.DisplayUserList.length > 0) {
                                _this.CurSelectedUser = _this.DisplayUserList[0];
                                _this.DisplayUserList.forEach(function (a) {
                                    a.IsSelect = false;
                                });
                                _this.CurSelectedUser.IsSelect = true;
                                _this.fetchSelectedUserMarkData();
                            }
                            else {
                                _this.disableLegal();
                                _this.ColVmObjList["OverallReviews"].dataValueSet("");
                                _this.ItemResultTextList.forEach(function (a) {
                                    a.dataValueSet("");
                                });
                                _this.ItemReviewsTextAreaList.forEach(function (a) {
                                    a.dataValueSet("");
                                });
                                _this.forceUpdate("");
                            }
                            return true;
                        });
                    }
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            NewAppraisalRegisterPageVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.ColVmObjList) {
                    var _obj = this.ColVmObjList[vn];
                    if (_obj) {
                        _res = _res && _obj.legal();
                    }
                }
                this.ItemResultTextList.forEach(function (a) {
                    _res = _res && a.legal();
                });
                return _res;
            };
            NewAppraisalRegisterPageVm.prototype.setNextUserSelected = function () {
                this.CurSelectedUser.IsAppraised = true;
                this.CurSelectedUser.IsSelect = false;
                var curIndex = this.DisplayUserList.indexOf(this.CurSelectedUser);
                if (curIndex + 1 < this.PageData.UserAppraisalList.length) {
                    this.CurSelectedUser = this.DisplayUserList[curIndex + 1];
                    this.CurSelectedUser.IsSelect = true;
                }
                else {
                    this.IsLastUser = true;
                }
            };
            NewAppraisalRegisterPageVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            NewAppraisalRegisterPageVm.prototype.disableLegal = function () {
                this.ColVmObjList["OverallReviews"].LegalObj.Kind = null;
                this.ItemResultTextList.forEach(function (a) {
                    a.LegalObj.Kind = null;
                });
            };
            NewAppraisalRegisterPageVm.prototype.enableLegal = function () {
                this.ColVmObjList["OverallReviews"].LegalObj.Kind = "notNull";
                this.ItemResultTextList.forEach(function (a) {
                    a.LegalObj.Kind = "notNull";
                });
            };
            NewAppraisalRegisterPageVm.prototype.fetchSelectedUserMarkData = function () {
                var _this = this;
                this.disableLegal();
                urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchUserMarkData", { appraisalId: this.Param1, userId: this.CurSelectedUser.UserId }, function (a) {
                    if (a.Data) {
                        _this.CurSelectedUser.OverallReviews = a.Data.OverallReviews;
                        var _itemList = a.Data.ItemList;
                        for (var i = 0; i < _itemList.length; i++) {
                            var _item = _this.CurSelectedUser.ItemList[i];
                            _item.Result = _itemList[i].Result;
                            _item.Reviews = _itemList[i].Reviews;
                        }
                        // this.setSelectedUserValue();
                        _this.initItemList();
                        // this.bindTextChange();
                        _this.forceUpdate("");
                    }
                });
            };
            NewAppraisalRegisterPageVm.prototype.loadPage = function (callback) {
                var _this = this;
                urlFile.Core.AkPost("/HospPerformance/AppraisalResult/FetchAppraisalMarkPageData", { appraisalId: this.Param1 }, function (a) {
                    var config = { PageData: a.Data };
                    _this.init(config);
                    if (callback) {
                        callback();
                    }
                });
            };
            NewAppraisalRegisterPageVm.prototype.save = function () {
                var _this = this;
                if (this.DisplayUserList.length == 0) {
                    alert("当前无考核对象");
                    return;
                }
                this.enableLegal();
                var isLegal = this.legal();
                if (!isLegal) {
                    alert("输入的数据有误，请检查！");
                    return;
                }
                if (new Date(this.PageData.AppraisalEndDate.toString()) < new Date(this.PageData.AppraisalBeginDate.toString())) {
                    alert("开始日期不能大于结束日期");
                    return;
                }
                var submitData = {};
                submitData.AppraisalId = this.Param1;
                submitData.AppraisalBeginDate = this.PageData.AppraisalBeginDate;
                submitData.AppraisalEndDate = this.PageData.AppraisalEndDate;
                submitData.AppraisalUser = this.CurSelectedUser;
                urlFile.Core.AkPost("/HospPerformance/AppraisalResult/AddUserAppraisalResult", { appraisalResult: JSON.stringify(submitData) }, function (a) {
                    if (a.Content == "ok") {
                        alert("保存成功");
                        _this.setNextUserSelected();
                        //判断是否全部登记
                        var len = _this.PageData.UserAppraisalList.length;
                        var appraisaledUserList = _this.PageData.UserAppraisalList.filter(function (a) {
                            return a.IsAppraised;
                        });
                        if (len == appraisaledUserList.length) {
                            var url = "$$module/HospPerformance/Core/performance_core_Appraisal";
                            urlFile.Core.AkUrl.Current().openUrl(url, true);
                        }
                        else {
                            if (!_this.IsLastUser) {
                                _this.fetchSelectedUserMarkData();
                            }
                            else {
                                _this.forceUpdate("");
                            }
                        }
                    }
                    else {
                        utilFile.Core.Util.Noty("数据新增失败");
                    }
                });
            };
            return NewAppraisalRegisterPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        NewAppraisalRegisterPage.NewAppraisalRegisterPageVm = NewAppraisalRegisterPageVm;
        var NewAppraisalRegisterPageStates = (function (_super) {
            __extends(NewAppraisalRegisterPageStates, _super);
            function NewAppraisalRegisterPageStates() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        NewAppraisalRegisterPage.NewAppraisalRegisterPageStates = NewAppraisalRegisterPageStates;
        var NewAppraisalRegisterPageProps = (function (_super) {
            __extends(NewAppraisalRegisterPageProps, _super);
            function NewAppraisalRegisterPageProps() {
                _super.apply(this, arguments);
            }
            return NewAppraisalRegisterPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        NewAppraisalRegisterPage.NewAppraisalRegisterPageProps = NewAppraisalRegisterPageProps;
        iocFile.Core.Ioc.Current().RegisterType("NEWAPPRAISALREGISTERPAGE", basewedPageFile.Web.BaseWebPageVm, NewAppraisalRegisterPageVm);
    })(NewAppraisalRegisterPage = exports.NewAppraisalRegisterPage || (exports.NewAppraisalRegisterPage = {}));
});
