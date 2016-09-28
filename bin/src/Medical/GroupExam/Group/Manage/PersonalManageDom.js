var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Url", "react", "./PersonalTable", "./../../../../02col/04upload/SingleFileUpload"], function (require, exports, domFile, utilFile, urlFile, React, PersonalTableFile, SingleFileUpload) {
    "use strict";
    var domCore = domFile.Core;
    var PersonalTableVm = PersonalTableFile.PersonalTable.PersonalTableVm;
    var PersonalManageDom;
    (function (PersonalManageDom) {
        var PersonalManageDomAction = (function (_super) {
            __extends(PersonalManageDomAction, _super);
            function PersonalManageDomAction() {
                _super.apply(this, arguments);
            }
            return PersonalManageDomAction;
        }(domCore.DomAction));
        PersonalManageDom.PersonalManageDomAction = PersonalManageDomAction;
        var PersonalManageDomReact = (function (_super) {
            __extends(PersonalManageDomReact, _super);
            function PersonalManageDomReact() {
                _super.apply(this, arguments);
                this.state = new PersonalManageDomStates();
            }
            PersonalManageDomReact.prototype.pSender = function () {
                return React.createElement("div", {className: "YSm-personal-manage"}, this._initHandle(), this._tDom(this.props.Vm.PersonalTableObj));
            };
            PersonalManageDomReact.prototype._initHandle = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-handle"}, React.createElement("div", {className: "col-lg-6 col-md-6 YSm-search"}, React.createElement("input", {className: "col-lg-11 col-md-10 YSu-border-blue", type: "text", placeholder: "输入身份证、姓名查询", value: this.props.Vm.SearchName, onChange: function (e) { _this.fun_linkName(e); }}), React.createElement("a", {className: "col-lg-1 col-md-2 btn btn-primary", onClick: function () { _this.props.Vm.Sarch(); }}, "查询")), React.createElement("a", {className: "btn btn-primary", onClick: function () { _this.props.Vm.New(); }}, React.createElement("i", {className: "fa fa-plus"}), "新增"), React.createElement("a", {className: "btn btn-sm p-a-0"}, "  ", this.props.Vm.SingleFileUpload.intoDom()), React.createElement("a", {className: "btn", onClick: function () { _this.props.Vm.ExportExcel(); }}, React.createElement("i", {className: "fa fa-cloud-download Hs-red"}), "导出模板"));
            };
            PersonalManageDomReact.prototype.fun_linkName = function (e) {
                var _val = e.target["value"];
                this.props.Vm.SearchName = _val;
                this.forceUpdate();
            };
            PersonalManageDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return PersonalManageDomReact;
        }(domCore.DomReact));
        PersonalManageDom.PersonalManageDomReact = PersonalManageDomReact;
        var PersonalManageDomVm = (function (_super) {
            __extends(PersonalManageDomVm, _super);
            function PersonalManageDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = PersonalManageDomReact;
                this.SingleFileUpload = new SingleFileUpload.ui.SingleFileUploadVm();
                this.SingleFileUpload.LabelText = "导入人员";
                this.SingleFileUpload.StorageName = "ExcelStorage";
                this.SingleFileUpload.UploadName = "ExcelUpload";
                this.SingleFileUpload.isLoadIcon = true;
                this.SingleFileUpload.LoadIconName = "fa fa-cloud-upload Hs-red";
                this.SingleFileUpload.onChangeHandle(function (val) {
                    _this.ImportExcel(val);
                    return true;
                });
                if (config.Data) {
                    this.SearchName = "";
                    this.BatchId = config.BatchId;
                    this.selectId = config.selectId;
                    this.UniId = config.UniId;
                    var confi1 = { Data: config.Data, Unild: config.UniId, BatchId: config.BatchId, selectId: config.selectId, Key: config.key };
                    this.PersonalTableObj = new PersonalTableVm(confi1);
                }
            }
            PersonalManageDomVm.prototype.ImportExcel = function (val) {
                var _this = this;
                var File = JSON.parse(val);
                var PathId = File.ResourceInfoList[0].PathID;
                var FileId = File.ResourceInfoList[0].FileId;
                var ExtName = File.ResourceInfoList[0].ExtName;
                var fileStorageName = this.SingleFileUpload.StorageName;
                var FileNameTitle = File.ResourceInfoList[0].FileNameTitle;
                urlFile.Core.AkPost("/MedicalCenter/ExcelMemberImport/ImportExcelInfo", { fileStorageName: fileStorageName, PathID: PathId, FileId: FileId, ExtName: ExtName, Unit: this.selectId, BatchId: this.BatchId, FileNameTitle: FileNameTitle }, function (a) {
                    var Data = a;
                    if (Data == "success") {
                        utilFile.Core.Util.Noty("导入成功！");
                        _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "PersonalManage");
                    }
                    else {
                        utilFile.Core.Util.Noty("导入数据有一条或多条错误！");
                        _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "PersonalManage");
                    }
                });
            };
            PersonalManageDomVm.prototype.ExportExcel = function () {
                window.open("/MedicalCenter/ExcelMemberImport/CreateTemplates", 'fullscreen=yes, scrollbars=auto');
            };
            PersonalManageDomVm.prototype.New = function () {
                urlFile.Core.AkUrl.Current().openUrl("$winNewMemberPage$" + this.selectId + "," + this.BatchId + "$", true);
            };
            PersonalManageDomVm.prototype.Sarch = function () {
                this.emitAppEvent("Manage/PersonalTable/loadPageData", this.UniId, "PersonalManage", "0", this.SearchName);
                this.SearchName = "";
            };
            return PersonalManageDomVm;
        }(domCore.DomVm));
        PersonalManageDom.PersonalManageDomVm = PersonalManageDomVm;
        var PersonalManageDomStates = (function (_super) {
            __extends(PersonalManageDomStates, _super);
            function PersonalManageDomStates() {
                _super.apply(this, arguments);
            }
            return PersonalManageDomStates;
        }(domCore.DomStates));
        PersonalManageDom.PersonalManageDomStates = PersonalManageDomStates;
        var PersonalManageDomProps = (function (_super) {
            __extends(PersonalManageDomProps, _super);
            function PersonalManageDomProps() {
                _super.apply(this, arguments);
            }
            return PersonalManageDomProps;
        }(domCore.DomProps));
        PersonalManageDom.PersonalManageDomProps = PersonalManageDomProps;
    })(PersonalManageDom = exports.PersonalManageDom || (exports.PersonalManageDom = {}));
});
