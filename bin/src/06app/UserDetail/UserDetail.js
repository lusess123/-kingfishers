var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/Ioc", "./../../04page/BaseWebPage", "./../../05tool/Timer", "./../../02col/01single/Date", "react"], function (require, exports, iocFile, basewedPageFile, timerFile, dateFile, React) {
    "use strict";
    var UserDetail;
    (function (UserDetail) {
        var UserDetailAction = (function (_super) {
            __extends(UserDetailAction, _super);
            function UserDetailAction() {
                _super.apply(this, arguments);
            }
            return UserDetailAction;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserDetail.UserDetailAction = UserDetailAction;
        var UserDetailReact = (function (_super) {
            __extends(UserDetailReact, _super);
            function UserDetailReact() {
                _super.apply(this, arguments);
                this.state = new UserDetailStates();
            }
            UserDetailReact.prototype.pSender = function () {
                return React.createElement("div", {className: "acsTextC"}, React.createElement("i", {className: "fa fa-coffee fa-5x acsFontLarge"}, this.props.Vm.TimerObj.intoDom()), React.createElement("div", null, this.props.Vm.DateObj.intoDom()));
            };
            return UserDetailReact;
        }(basewedPageFile.Web.BaseWebPageReact));
        UserDetail.UserDetailReact = UserDetailReact;
        var UserDetailVm = (function (_super) {
            __extends(UserDetailVm, _super);
            function UserDetailVm() {
                _super.call(this);
                this.ReactType = UserDetailReact;
                this.TimerObj = new timerFile.Timer.TimerVm();
                this.TimerObj.ClassName = "acsFontLarge";
                this.DateObj = new dateFile.ui.DateVm();
            }
            return UserDetailVm;
        }(basewedPageFile.Web.BaseWebPageVm));
        UserDetail.UserDetailVm = UserDetailVm;
        var UserDetailStates = (function (_super) {
            __extends(UserDetailStates, _super);
            function UserDetailStates() {
                _super.apply(this, arguments);
            }
            return UserDetailStates;
        }(basewedPageFile.Web.BaseWebPageStates));
        UserDetail.UserDetailStates = UserDetailStates;
        var UserDetailProps = (function (_super) {
            __extends(UserDetailProps, _super);
            function UserDetailProps() {
                _super.apply(this, arguments);
            }
            return UserDetailProps;
        }(basewedPageFile.Web.BaseWebPageProps));
        UserDetail.UserDetailProps = UserDetailProps;
        iocFile.Core.Ioc.Current().RegisterType("test1", basewedPageFile.Web.BaseWebPageVm, UserDetailVm);
    })(UserDetail = exports.UserDetail || (exports.UserDetail = {}));
});
