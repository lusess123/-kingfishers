var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react"], function (require, exports, domFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var MasterDom;
    (function (MasterDom) {
        var MasterDomAction = (function (_super) {
            __extends(MasterDomAction, _super);
            function MasterDomAction() {
                _super.apply(this, arguments);
            }
            return MasterDomAction;
        }(domCore.DomAction));
        MasterDom.MasterDomAction = MasterDomAction;
        var MasterDomReact = (function (_super) {
            __extends(MasterDomReact, _super);
            function MasterDomReact() {
                _super.apply(this, arguments);
                this.state = new MasterDomStates();
            }
            ///*{<div className="large-4 small-12 columns acs-dashed-line">
            //                           <div className="columns acs-label">
            //                               <label for="right-label" className="right">职位：</label>
            //                               </div>
            //                           <div className="columns acs-input">
            //                               <label for="right-label" className="left">{this.props.Vm.Data.POSITIONJOBID}</label>
            //                               </div>
            //                           </div>}*/
            MasterDomReact.prototype.pSender = function () {
                return (React.createElement("div", {className: "1"}, React.createElement("div", {className: "tabs-content"}, React.createElement("div", {className: "clearfix"}, React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "用户名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.TrueName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "性别：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Gender == "1" ? "女" : "男"))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "登陆名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.UserName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "手机：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Phone))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "Email：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Email))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "出生日期：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Birthday))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "住址：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Address))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "入职日期：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.EntryDate))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "工号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.FNumber))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "在职状态：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.FStatusKindName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "学历：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.DegreeKindName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "个性签名：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Signatures))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "身份证号：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.IDCard))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "年龄：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Age))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "民族：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.NationlityKindName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "政治面貌：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.PoliticsStatusKindName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "户口类型：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.CensusKindName))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "毕业学校：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.GraduateSchool))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "专业：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Discipline))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "毕业日期：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.GraduateDate))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: "Hu-label"}, React.createElement("label", {for: "right-label"}, "联系电话：")), React.createElement("div", {className: "Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.Tel))), React.createElement("div", {className: "col-lg-4 col-sm-12 col-xs-12 Hu-dashed-line"}, React.createElement("div", {className: " Hu-label"}, React.createElement("label", {for: "right-label"}, "QQ：")), React.createElement("div", {className: " Hu-input"}, React.createElement("label", {for: "right-label", className: "form-control-label"}, this.props.Vm.Data.QQ)))))));
            };
            MasterDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MasterDomReact;
        }(domCore.DomReact));
        MasterDom.MasterDomReact = MasterDomReact;
        var MasterDomVm = (function (_super) {
            __extends(MasterDomVm, _super);
            function MasterDomVm() {
                _super.apply(this, arguments);
                this.ReactType = MasterDomReact;
            }
            return MasterDomVm;
        }(domCore.DomVm));
        MasterDom.MasterDomVm = MasterDomVm;
        var MasterDomStates = (function (_super) {
            __extends(MasterDomStates, _super);
            function MasterDomStates() {
                _super.apply(this, arguments);
            }
            return MasterDomStates;
        }(domCore.DomStates));
        MasterDom.MasterDomStates = MasterDomStates;
        var MasterDomProps = (function (_super) {
            __extends(MasterDomProps, _super);
            function MasterDomProps() {
                _super.apply(this, arguments);
            }
            return MasterDomProps;
        }(domCore.DomProps));
        MasterDom.MasterDomProps = MasterDomProps;
    })(MasterDom = exports.MasterDom || (exports.MasterDom = {}));
});
