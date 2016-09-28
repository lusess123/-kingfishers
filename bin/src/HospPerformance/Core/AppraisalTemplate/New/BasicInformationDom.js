var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Ioc", "react", "./../../../../02col/01single/Text", "./../../../../05tool/Button", "./../../../../09Web/dom/ThDom", "./../../../../02col/00core/BaseCol", "./../data"], function (require, exports, domFile, utilFile, iocFile, React, TextFile, buttonFile, thFile, baseColFile, dataFile) {
    "use strict";
    var domCore = domFile.Core;
    var BasicInformationDom;
    (function (BasicInformationDom) {
        var BasicInformationDomAction = (function (_super) {
            __extends(BasicInformationDomAction, _super);
            function BasicInformationDomAction() {
                _super.apply(this, arguments);
            }
            return BasicInformationDomAction;
        }(domCore.DomAction));
        BasicInformationDom.BasicInformationDomAction = BasicInformationDomAction;
        var BasicInformationDomReact = (function (_super) {
            __extends(BasicInformationDomReact, _super);
            function BasicInformationDomReact() {
                _super.apply(this, arguments);
                this.state = new BasicInformationDomStates();
            }
            BasicInformationDomReact.prototype.pSender = function () {
                return React.createElement("div", null, this._initForm());
            };
            BasicInformationDomReact.prototype._initForm = function () {
                return React.createElement("form", null, React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "创建人："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Subject"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "创建时间："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["Type"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "有效期："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["IsValid"].intoDom())), React.createElement("div", {className: "col-lg-3 col-md-3 col-sm-6 col-xs-6 form-group  form-inline clearfix"}, React.createElement("label", {className: "col-md-5 col-sm-3 form-control-label text-right"}, "有效期："), React.createElement("div", {className: "col-md-7 col-sm-9"}, this.props.Vm.ColVmObjList["CreateDateTime"].intoDom())));
            };
            //public _initObjectTable(): React.ReactElement<any> {
            //   var theader = <thead className="thead-default">
            //        {this._initObjectHeader() }
            //    </thead>
            //    var tbody = this._initObjectBody();
            //    //var ObjectTableButton = this._initObjectTableBtn();
            //    var ObjetTable = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            //    return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>
            //        { ObjectTableButton }
            //        { ObjetTable }
            //    </div>;
            //}
            BasicInformationDomReact.prototype._initObjectTableBtn = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("b", null, "考核对象"), React.createElement("div", {className: "btn-group btn-group-sm"}, this.props.Vm.BtnList.map(function (btn) {
                    return _this._tDom(btn);
                })));
            };
            BasicInformationDomReact.prototype._initObjectHeader = function () {
                return React.createElement("tr", null, React.createElement("th", null), React.createElement("th", null, "部门"), React.createElement("th", null, "职位"), React.createElement("th", null, "人员"), React.createElement("th", null, "操作"));
            };
            BasicInformationDomReact.prototype._initObjectBody = function () {
                return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "1")), React.createElement("td", null, "内科"), React.createElement("td", null, "主治医师"), React.createElement("td", null, "黄某某"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "2")), React.createElement("td", null, "内科"), React.createElement("td", null, "主治医师"), React.createElement("td", null, "黄某某"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))), React.createElement("tr", null, React.createElement("td", null, React.createElement("i", {className: "fa fa-square-o"}), React.createElement("span", null, "3")), React.createElement("td", null, "内科"), React.createElement("td", null, "主治医师"), React.createElement("td", null, "黄某某"), React.createElement("td", null, React.createElement("a", {className: "text-primary"}, "编辑"), React.createElement("a", {className: "text-danger"}, "删除"))));
            };
            //public _initAccreditTable(): React.ReactElement<any> {
            //    var theader = <thead className="thead-default">
            //        {this._initAccreditHeader() }
            //    </thead>
            //    var tbody = this._initAccreditBody();
            //    var AccreditTable = <table className="table table-striped table-bordered table-hover">{theader}{tbody}</table>;
            //    return <div className="table-responsive"  onScroll={(e) => { this.fun_Scroll(e); } }>{ AccreditTable }</div>;
            //}
            //public _initAccreditTableBtn(): React.ReactElement<any> {
            //    return <div className="YSm-table-btngroup">
            //        <b>授权范围</b>
            //        <div className="btn-group btn-group-sm">
            //            {this.props.Vm.BtnList1.map((btn) => {
            //                return this._tDom(btn);
            //            }) }
            //        </div>
            //    </div>;
            //}
            //public _initAccreditHeader(): React.ReactElement<any> {
            //    return <tr>
            //        <th></th>
            //        <th>部门</th>
            //        <th>职位</th>
            //        <th>权限设置</th>
            //    </tr>;
            //}
            //public _initAccreditBody(): React.ReactElement<any> {
            //    return <tbody>
            //        <tr>
            //            <td><i className="fa fa-square-o"></i><span>1</span></td>
            //            <td>内科</td>
            //            <td>主治医师</td>
            //            <td>黄某某</td>
            //        </tr>
            //        <tr>
            //            <td><i className="fa fa-square-o"></i><span>2</span></td>
            //            <td>内科</td>
            //            <td>主治医师</td>
            //            <td>黄某某</td>
            //        </tr>
            //        <tr>
            //            <td><i className="fa fa-square-o"></i><span>3</span></td>
            //            <td>内科</td>
            //            <td>主治医师</td>
            //            <td>黄某某</td>
            //        </tr>
            //    </tbody>;
            //}
            BasicInformationDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.props.Vm.ScrollAuto(_$obj.scrollLeft());
            };
            BasicInformationDomReact.prototype.getThDomVM = function (w) {
                var _ther = new thFile.Web.ThDomVm();
                if (w) {
                    _ther.Width = w;
                }
                return _ther;
            };
            BasicInformationDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return BasicInformationDomReact;
        }(domCore.DomReact));
        BasicInformationDom.BasicInformationDomReact = BasicInformationDomReact;
        var BasicInformationDomVm = (function (_super) {
            __extends(BasicInformationDomVm, _super);
            function BasicInformationDomVm(config) {
                _super.call(this);
                this.ReactType = BasicInformationDomReact;
                this.BtnList = new Array();
                this.BtnList1 = new Array();
                this.TextObj = new TextFile.ui.TextVm;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.ColVmObjList = {};
                this.RowData = {};
                this.initBtnList();
                this.initColVm("Subject", "TextVm");
                this.initColVm("Type", "ComboVm", "notNull");
                this.initColVm("IsValid", "SingleCheckBoxVm", "notNull");
                this.initColVm("CreateDateTime", "DateTimeVm", "notNull");
            }
            BasicInformationDomVm.prototype.initColVm = function (colName, colType, legal) {
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
                    _exciteBean.onChangeHandle(function (val) {
                        _this.RowData[colName] = val;
                        return true;
                    });
                }
                if (colName == "Type") {
                    var typeComboVm = utilFile.Core.Util.Cast(_exciteBean);
                    typeComboVm.ItemList = dataFile.Data.AppraiseTypeData;
                }
                this.ColVmObjList[_name] = _exciteBean;
            };
            BasicInformationDomVm.prototype.ScrollAuto = function (left) {
                this.IsAcsRelative = left > 0;
                this.LeftNum = left;
                this.forceUpdate("");
            };
            BasicInformationDomVm.prototype.initBtnList = function () {
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "新增";
                btnVm.IconCss = "plus";
                btnVm.KindCss = "btn-primary";
                btnVm.NoEnable = false;
                this.BtnList.push(btnVm);
                btnVm.ClickFun = function (a) {
                    // this.buttonClickCommond(a);
                };
            };
            BasicInformationDomVm.prototype.initBtnList1 = function () {
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = "选择";
                btnVm.KindCss = "btn-primary";
                btnVm.NoEnable = false;
                this.BtnList.push(btnVm);
                btnVm.ClickFun = function (a) {
                    // this.buttonClickCommond(a);
                };
            };
            return BasicInformationDomVm;
        }(domCore.DomVm));
        BasicInformationDom.BasicInformationDomVm = BasicInformationDomVm;
        var BasicInformationDomStates = (function (_super) {
            __extends(BasicInformationDomStates, _super);
            function BasicInformationDomStates() {
                _super.apply(this, arguments);
            }
            return BasicInformationDomStates;
        }(domCore.DomStates));
        BasicInformationDom.BasicInformationDomStates = BasicInformationDomStates;
        var BasicInformationDomProps = (function (_super) {
            __extends(BasicInformationDomProps, _super);
            function BasicInformationDomProps() {
                _super.apply(this, arguments);
            }
            return BasicInformationDomProps;
        }(domCore.DomProps));
        BasicInformationDom.BasicInformationDomProps = BasicInformationDomProps;
    })(BasicInformationDom = exports.BasicInformationDom || (exports.BasicInformationDom = {}));
});
