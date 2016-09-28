var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../03form/Base/BasePage", "./../01core/Ioc", "./../01core/Url", "./../01core/Util", "react"], function (require, exports, basepage, iocFile, urlFile, utilFile, React) {
    "use strict";
    var ui;
    (function (ui) {
        var InsertPageAction = (function (_super) {
            __extends(InsertPageAction, _super);
            function InsertPageAction() {
                _super.apply(this, arguments);
            }
            return InsertPageAction;
        }(basepage.ui.BasePageAction));
        ui.InsertPageAction = InsertPageAction;
        var InsertPageReact = (function (_super) {
            __extends(InsertPageReact, _super);
            function InsertPageReact() {
                _super.apply(this, arguments);
            }
            InsertPageReact.prototype.pComponentWillMount = function () {
                _super.prototype.pComponentWillMount.call(this);
                // alert("List页面注册变更事件");
            };
            InsertPageReact.prototype.pSender = function () {
                return _super.prototype.pSender.call(this);
            };
            ;
            InsertPageReact.prototype.pSenderBottom = function () {
                //return  React.DOM.div(
                //      {
                //          className: "tiny button",
                //          onClick: () => {
                //             // this.seachClick();
                //              var res = this.getPageSubmitData(this.props.Vm.FormObjList);
                //             // if (res.IsChange) {
                //                  if (res.IsLegalResult) {
                var _this = this;
                //                      if (res.IsChange) {
                //                          this.props.Vm.insertSubmitData(res.Ds);
                //                      }
                //                      else {
                //                      utilFile.Core.Util.Noty("数据没有变更，无法提交");
                //                      }
                //                     // e
                //                  }
                //              }
                //      },
                //      "新增提交");
                return React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary ", onClick: function () {
                    var res = _this.props.Vm.getPageSubmitData(_this.props.Vm.FormObjList);
                    // if (res.IsChange) {
                    if (res.IsLegalResult) {
                        if (res.IsChange) {
                            _this.props.Vm.insertSubmitData(res.Ds);
                        }
                        else {
                            utilFile.Core.Util.Noty("数据没有变更，无法提交");
                        }
                    }
                }}, "新增提交"));
            };
            return InsertPageReact;
        }(basepage.ui.BasePageReact));
        ui.InsertPageReact = InsertPageReact;
        var InsertPageProps = (function (_super) {
            __extends(InsertPageProps, _super);
            function InsertPageProps() {
                _super.apply(this, arguments);
            }
            return InsertPageProps;
        }(basepage.ui.BasePageProps));
        ui.InsertPageProps = InsertPageProps;
        var InsertPageVm = (function (_super) {
            __extends(InsertPageVm, _super);
            function InsertPageVm() {
                _super.apply(this, arguments);
                this.ReactType = InsertPageReact;
                this.pRegName = "InsertPage";
            }
            //public SearchForm: BaseFormVm;
            //public ListForm: BaseFormVm;
            InsertPageVm.prototype.insertSubmitData = function (ds) {
                var _sysPage = this.createSysPage("Insert");
                ds["PAGE_SYS"] = [{ KeyValue: _sysPage.KeyValue, PageStyle: _sysPage.PageStyle }];
                var xml = this.Xml;
                urlFile.Core.AkPost("/module/ModuleMerge", {
                    xml: this.Xml,
                    ds: JSON.stringify(ds),
                    pageStyle: "Insert"
                }, function (res) {
                    if (res.LegalException) {
                        utilFile.Core.Util.Noty(res.Error);
                    }
                    else {
                        urlFile.Core.AkUrl.Current().fEmit.emit("clearPanel");
                        urlFile.Core.AkUrl.Current().openUrl("$$" + xml);
                    }
                });
            };
            // public Pagination: tool.PaginationVm = new tool.PaginationVm();
            InsertPageVm.prototype.create = function (_pageView) {
                //console.log( _pageView.Forms[0]);
                //alert();
                this.PageView = _pageView;
                this.HeaderVail = _pageView.Header;
                if (this.HeaderVail.IsValid) {
                    var _g = null;
                    for (var n in _pageView.Forms) {
                        _g = _pageView.Forms[n];
                        break;
                    }
                    _pageView.Data[_g.Name] = [{}];
                    _super.prototype.create.call(this, _pageView);
                }
            };
            return InsertPageVm;
        }(basepage.ui.BasePageVm));
        ui.InsertPageVm = InsertPageVm;
        var InsertPageStates = (function (_super) {
            __extends(InsertPageStates, _super);
            function InsertPageStates() {
                _super.apply(this, arguments);
            }
            return InsertPageStates;
        }(basepage.ui.BasePageStates));
        ui.InsertPageStates = InsertPageStates;
        iocFile.Core.Ioc.Current().RegisterType("INSERT", basepage.ui.BasePageVm, InsertPageVm);
    })(ui = exports.ui || (exports.ui = {}));
});
