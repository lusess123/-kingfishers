var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../02col/00core/baseCol", "./../01core/Ioc", "react"], function (require, exports, basecolFile, iocFile, React) {
    "use strict";
    var BaseColReact = basecolFile.Core.BaseColReact;
    var BaseColVm = basecolFile.Core.BaseColVm;
    var BaseColProps = basecolFile.Core.BaseColProps;
    var BaseColStates = basecolFile.Core.BaseColStates;
    var BaseColAction = basecolFile.Core.BaseColAction;
    var tool;
    (function (tool) {
        var PaginationReact = (function (_super) {
            __extends(PaginationReact, _super);
            function PaginationReact() {
                _super.apply(this, arguments);
                this.state = this.getInitialState1();
            }
            PaginationReact.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
                //  alert();
                return true;
            };
            PaginationReact.prototype.gotoClickFun = function () {
                if (this.props.Vm.PageClickEvent != null) {
                    this.props.Vm.PageClickEvent(this.props.Vm.PageGotoNo - 1);
                }
            };
            PaginationReact.prototype.gotoTxtChangeFun = function (e) {
                var _val = e.target["value"];
                var _reg = /^[0-9]*[1-9][0-9]*$/gi;
                if (_val && _val != "") {
                    if (_reg["test"](_val)) {
                        if (parseInt(_val) <= Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize)) {
                            this.props.Vm.PageGotoNo = parseInt(_val);
                        }
                    }
                }
                else {
                    this.props.Vm.PageGotoNo = _val;
                }
                this.forceUpdate();
            };
            PaginationReact.prototype.fBidaHtml = function () {
                var _this = this;
                var pagintionView = this.fsetPage();
                var rootUl = React.createElement("ul", {className: "pagination pagination-sm bd-pagination", role: "menubar", "aria-label": "Pagination"}, React.createElement("li", {className: pagintionView.IsAbleBeforeLink ? "arrow" : "arrow disabled", "aria-disabled": "false"}, React.createElement("a", {onClick: function (e) { pagintionView.IsAbleBeforeLink ? _this.PageClick(e) : ""; return false; }, "data-key": this.props.Vm.PageNo - 1, className: pagintionView.IsAbleBeforeLink ? "Hu-pointer" : ""}, React.createElement("i", {className: "icon-double-angle-left", "data-key": this.props.Vm.PageNo - 1}))), pagintionView.BeforList.map(function (a, i) {
                    return React.createElement("li", {key: i, className: a == _this.props.Vm.PageNo ? "active" : null}, React.createElement("a", {className: "Hu-pointer", onClick: function (e) { _this.PageClick(e); return false; }, "data-key": a}, a + 1));
                }), pagintionView.IsBefoe ? React.createElement("li", null, "...") : "", pagintionView.AfterList ? pagintionView.AfterList.map(function (a, i) {
                    return React.createElement("li", {key: i, className: a == _this.props.Vm.PageNo ? "active" : null}, React.createElement("a", {className: "Hu-pointer", onClick: function (e) { _this.PageClick(e); return false; }, "data-key": a}, a + 1));
                }) : "", pagintionView.IsAfter ? React.createElement("li", null, "...") : "", pagintionView.IsLastNumber ?
                    React.createElement("li", null, React.createElement("a", {onClick: function (e) { _this.PageClick(e); return false; }, className: "Hu-pointer", "data-key": pagintionView.LastNumber}, pagintionView.LastNumber + 1)) : "", React.createElement("li", {className: pagintionView.IsAbleAfterList ? "arrow" : "arrow disabled"}, React.createElement("a", {onClick: function (e) {
                    if (pagintionView.IsAbleAfterList) {
                        _this.PageClick(e);
                        return false;
                    }
                    ;
                }, "data-key": this.props.Vm.PageNo + 1, className: pagintionView.IsAbleAfterList ? "Hu-pointer" : ""}, React.createElement("i", {className: "icon-double-angle-right", "data-key": this.props.Vm.PageNo + 1}))), React.createElement("span", {className: "Hu-skip"}, "跳", React.createElement("input", {type: "text", value: this.props.Vm.PageGotoNo, onChange: function (e) { _this.gotoTxtChangeFun(e); }}), "/", Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize), "页", React.createElement("a", {className: "GoToPage btn btn-primary acs-pagination-surebtn", onClick: function () { _this.gotoClickFun(); }}, "跳转")), React.createElement("li", null, "总共有" + this.props.Vm.TotalCount + "条记录"));
                return rootUl;
            };
            PaginationReact.prototype.fHtml = function () {
                var _this = this;
                var pagintionView = this.fsetPage();
                var rootUl = React.createElement("div", {className: "Hc-pagination clearfix"}, React.createElement("ul", {className: "pagination pagination-sm pull-left", role: "menubar", "aria-label": "Pagination"}, React.createElement("li", {className: pagintionView.IsAbleBeforeLink ? "arrow" : "arrow disabled", "aria-disabled": "false"}, React.createElement("a", {onClick: function (e) { pagintionView.IsAbleBeforeLink ? _this.PageClick(e) : ""; return false; }, "data-key": this.props.Vm.PageNo - 1, className: pagintionView.IsAbleBeforeLink ? "Hu-pointer" : ""}, React.createElement("i", {className: "icon-double-angle-left fa fa-angle-double-left", "data-key": this.props.Vm.PageNo - 1}))), pagintionView.BeforList.map(function (a, i) {
                    return React.createElement("li", {key: i, className: a == _this.props.Vm.PageNo ? "active" : null}, React.createElement("a", {className: "Hu-pointer", onClick: function (e) { _this.PageClick(e); return false; }, "data-key": a}, a + 1));
                }), pagintionView.IsBefoe ? React.createElement("li", null, "...") : "", pagintionView.AfterList ? pagintionView.AfterList.map(function (a, i) {
                    return React.createElement("li", {key: i, className: a == _this.props.Vm.PageNo ? "active" : null}, React.createElement("a", {className: "Hu-pointer", onClick: function (e) { _this.PageClick(e); return false; }, "data-key": a}, a + 1));
                }) : "", pagintionView.IsAfter ? React.createElement("li", null, "...") : "", pagintionView.IsLastNumber ? React.createElement("li", null, React.createElement("a", {onClick: function (e) { _this.PageClick(e); return false; }, className: "Hu-pointer", "data-key": pagintionView.LastNumber}, pagintionView.LastNumber + 1)) : "", React.createElement("li", {className: pagintionView.IsAbleAfterList ? "arrow" : "arrow disabled"}, React.createElement("a", {onClick: function (e) {
                    if (pagintionView.IsAbleAfterList) {
                        _this.PageClick(e);
                        return false;
                    }
                    ;
                }, "data-key": this.props.Vm.PageNo + 1, className: pagintionView.IsAbleAfterList ? "Hu-pointer" : ""}, React.createElement("i", {className: "icon-double-angle-right fa fa-angle-double-right", "data-key": this.props.Vm.PageNo + 1}))), React.createElement("span", null, "总共有" + this.props.Vm.TotalCount + "条记录")), React.createElement("div", {className: "Hc-pagination-makeup clearfix"}, React.createElement("button", {className: "GoToPage btn btn-xs pull-right", onClick: function () { _this.gotoClickFun(); }}, "确定"), this.props.Vm.IsPageSizeHidden ? null : this.PageSize(), this.props.Vm.isPartHidden ? null : this.partPagination()));
                return rootUl;
            };
            PaginationReact.prototype.partPagination = function () {
                var _this = this;
                return React.createElement("div", {className: "Hu-skip pull-right"}, React.createElement("input", {type: "text", value: this.props.Vm.PageGotoNo, onChange: function (e) { _this.gotoTxtChangeFun(e); }}), React.createElement("span", null, "/", Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize), "页"));
            };
            PaginationReact.prototype.PageSize = function () {
                return React.createElement("div", {className: "Hu-page-size pull-right"}, React.createElement("a", {className: "btn btn-xs btn-primary"}, React.createElement("i", {className: "icon-list-alt fa fa-list-alt"})), React.createElement("input", {type: "text", value: "20"}));
            };
            PaginationReact.prototype.pSender = function () {
                if (this.props.Vm.TotalCount > this.props.Vm.PageSize)
                    // if (true)
                    return this.props.Vm.IsBidaStyle ? this.fBidaHtml() : this.fHtml();
                else
                    return React.createElement("div", {className: "Hc-pagination-makeup m-b"}, React.createElement("span", null, "总共有" + this.props.Vm.TotalCount + "条记录"));
            };
            PaginationReact.prototype.PageClick = function (e) {
                if (this.props.Vm.PageClickEvent != null) {
                    var _$li = $(e.target);
                    // alert(_$li.html());
                    //this.props.Vm.is
                    //alert(_$li.attr("data-key"));
                    this.props.Vm.PageClickEvent(parseInt(_$li.attr("data-key")));
                    this.props.Vm.PageGotoNo = parseInt(_$li.attr("data-key")) + 1;
                    this.props.Vm.IsChange = true;
                }
            };
            PaginationReact.prototype.fsetPage = function () {
                var myState = new PaginationStates();
                //给最后一页赋值
                myState.LastNumber = Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 1;
                //当前页面
                var activePage = this.props.Vm.PageNo;
                var PageCount;
                if (Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) <= 7) {
                    for (var i = 0; i < Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize); i++) {
                        //var j = i;
                        myState.BeforList[i] = i; //j + 1;
                    }
                    myState.IsAfter = false;
                    myState.IsBefoe = false;
                    myState.IsLastNumber = false;
                    if (this.props.Vm.PageNo == Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 1) {
                        myState.IsAbleAfterList = false;
                    }
                    if (this.props.Vm.PageNo == 0) {
                        myState.IsAbleBeforeLink = false;
                    }
                }
                else if (Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) == 8 && this.props.Vm.PageNo == 4) {
                    for (var i = 0; i < 6; i++) {
                        //var j = i;
                        myState.BeforList[i] = i; //j + 1;
                    }
                    myState.IsBefoe = false;
                    myState.IsAfter = true;
                    myState.IsLastNumber = true;
                }
                else if (activePage < 5) {
                    //当前页为第一页时
                    if (activePage == 0) {
                        myState.IsAbleBeforeLink = false;
                    }
                    //当前页面和总页面相等时
                    if (activePage == Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 1) {
                        myState.IsAbleAfterList = false;
                    }
                    //当前页面小于或等于6页时
                    if (Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) <= 7) {
                        PageCount = Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize);
                        myState.IsAfter = false;
                        myState.LastNumber = null;
                        myState.IsLastNumber = false;
                    }
                    else {
                        PageCount = 6;
                        myState.IsAfter = true;
                        myState.IsLastNumber = true;
                    }
                    for (var i = 0; i < PageCount; i++) {
                        //var j = i;
                        myState.BeforList[i] = i; //j + 1;
                    }
                    //把第二个集合给清空
                    myState.AfterList.length = 0;
                    //第一个不显示，第二个显示
                    myState.IsBefoe = false;
                }
                else if (activePage >= 5 && activePage <= Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 3) {
                    myState.BeforList.length = 0;
                    myState.BeforList[0] = 0;
                    myState.BeforList[1] = 1;
                    //都应该显示
                    myState.IsBefoe = true;
                    if (Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - activePage == 3) {
                        myState.IsAfter = false;
                    }
                    else {
                        myState.IsAfter = true;
                    }
                    myState.IsLastNumber = true;
                    var j = 0;
                    for (var i = activePage - 1; i <= activePage + 2; i++) {
                        myState.AfterList[j] = i - 1;
                        j = j + 1;
                    }
                }
                else {
                    if (activePage == Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 1) {
                        myState.IsAbleAfterList = false;
                    }
                    myState.BeforList.length = 0;
                    myState.BeforList[0] = 0;
                    myState.BeforList[1] = 1;
                    //第一个显示，第二个不显示
                    myState.IsBefoe = true;
                    myState.IsAfter = false;
                    var j = 0;
                    for (var i = Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize) - 3; i <= Math.ceil(this.props.Vm.TotalCount / this.props.Vm.PageSize); i++) {
                        myState.AfterList[j] = i - 1;
                        j = j + 1;
                    }
                    myState.LastNumber = null;
                    myState.IsLastNumber = false;
                }
                return myState;
            };
            PaginationReact.prototype.getInitialState1 = function () {
                //alert("这是初始话的时候");
                return this.fsetPage();
            };
            return PaginationReact;
        }(BaseColReact));
        tool.PaginationReact = PaginationReact;
        var PaginationProps = (function (_super) {
            __extends(PaginationProps, _super);
            function PaginationProps() {
                _super.apply(this, arguments);
                this.Vm = new PaginationVm();
            }
            return PaginationProps;
        }(BaseColProps));
        tool.PaginationProps = PaginationProps;
        var PaginationVm = (function (_super) {
            __extends(PaginationVm, _super);
            function PaginationVm(config) {
                _super.call(this);
                this.PageNo = 4;
                this.PageSize = 5;
                this.TotalCount = 40;
                this.PageClickEvent = null;
                this.ReactType = PaginationReact;
                this.IsBidaStyle = false;
                this.pRegName = "分页控件（控件接口待完善）";
                this.isPartHidden = false;
                this.PageGotoNo = 1;
                this.IsPageSizeHidden = false;
                if (config) {
                    this.IsBidaStyle = config.IsBidaStyle;
                    if (config.isPartHidden) {
                        this.isPartHidden = config.isPartHidden;
                    }
                    if (config.IsPageSizeHidden) {
                        this.IsPageSizeHidden = config.IsPageSizeHidden;
                    }
                }
            }
            PaginationVm.Test = function () {
                var _bean = new PaginationVm();
                return _bean;
            };
            return PaginationVm;
        }(BaseColVm));
        tool.PaginationVm = PaginationVm;
        var PaginationStates = (function (_super) {
            __extends(PaginationStates, _super);
            function PaginationStates() {
                _super.apply(this, arguments);
                //前页数
                this.BeforList = new Array();
                //后页数
                this.AfterList = new Array();
                //下一页是否是灰键
                this.IsAbleAfterList = true;
                //上一页是否是灰键
                this.IsAbleBeforeLink = true;
            }
            return PaginationStates;
        }(BaseColStates));
        tool.PaginationStates = PaginationStates;
        var PaginationAction = (function (_super) {
            __extends(PaginationAction, _super);
            function PaginationAction() {
                _super.apply(this, arguments);
            }
            return PaginationAction;
        }(BaseColAction));
        tool.PaginationAction = PaginationAction;
        iocFile.Core.Ioc.Current().RegisterType("PaginationVm", BaseColVm, PaginationVm);
    })(tool = exports.tool || (exports.tool = {}));
});
