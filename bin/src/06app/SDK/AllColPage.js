var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../02col/00core/baseCol", "react", "./../../05tool/TestForm", "./../../05tool/AkTest"], function (require, exports, iocFile, basewedPageFile, basecolFile, React, test, akTest) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var AllColPage;
    (function (AllColPage) {
        var AllColPageAction = (function (_super) {
            __extends(AllColPageAction, _super);
            function AllColPageAction() {
                _super.apply(this, arguments);
            }
            return AllColPageAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        AllColPage.AllColPageAction = AllColPageAction;
        var AllColPageReact = (function (_super) {
            __extends(AllColPageReact, _super);
            function AllColPageReact() {
                _super.apply(this, arguments);
                this.state = new AllColPageStates();
            }
            AllColPageReact.prototype.pSender = function () {
                return React.createElement("div", {className: "Hg-relative Hg-margin-tl"}, this.props.Vm.TestFormObj.intoDom());
            };
            return AllColPageReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        AllColPage.AllColPageReact = AllColPageReact;
        var AllColPageVm = (function (_super) {
            __extends(AllColPageVm, _super);
            function AllColPageVm() {
                _super.call(this);
                this.ReactType = AllColPageReact;
                var _list = iocFile.Core.Ioc.Current().GetTypeList(BaseColVm);
                var vm = new test.test.TestFormVm();
                _list.forEach(function (a) {
                    var _f = a.InstanceType;
                    if (_f["Test"]) {
                        var _col = _f["Test"]();
                        var _test = new akTest.test.TestVm(_col);
                        _test.VmName = a.RegName;
                        vm.TestList.push(_test);
                    }
                });
                this.TestFormObj = vm;
            }
            return AllColPageVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        AllColPage.AllColPageVm = AllColPageVm;
        var AllColPageStates = (function (_super) {
            __extends(AllColPageStates, _super);
            function AllColPageStates() {
                _super.apply(this, arguments);
            }
            return AllColPageStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        AllColPage.AllColPageStates = AllColPageStates;
        var AllColPageProps = (function (_super) {
            __extends(AllColPageProps, _super);
            function AllColPageProps() {
                _super.apply(this, arguments);
            }
            return AllColPageProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        AllColPage.AllColPageProps = AllColPageProps;
        iocFile.Core.Ioc.Current().RegisterType("ALLCOLPAGE", basewedPageFile.Web.BaseWebPageVm, AllColPageVm);
    })(AllColPage = exports.AllColPage || (exports.AllColPage = {}));
});
