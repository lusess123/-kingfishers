var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "./../../../01core/Util", "./../../../03form/Grid/GridForm", "./../../../03form/Grid/GridRow", "./../../../03form/Grid/GridColumn", "./../../../03form/Base/BaseColumnGroup", "./../../../02col/01single/Detail", "./../../../05tool/Button", "react"], function (require, exports, domFile, utilFile, GridFormFile, GridRowFile, GridColumnFile, baseColumnGroupFile, DetailFile, buttonFile, React) {
    "use strict";
    var domCore = domFile.Core;
    var TableDom;
    (function (TableDom) {
        var TableDomAction = (function (_super) {
            __extends(TableDomAction, _super);
            function TableDomAction() {
                _super.apply(this, arguments);
            }
            return TableDomAction;
        }(domCore.DomAction));
        TableDom.TableDomAction = TableDomAction;
        var TableDomReact = (function (_super) {
            __extends(TableDomReact, _super);
            function TableDomReact() {
                _super.apply(this, arguments);
                this.state = new TableDomStates();
            }
            TableDomReact.prototype.initBody = function () {
                return null;
            };
            TableDomReact.prototype.initHeader = function () {
                return null;
            };
            TableDomReact.prototype.initTable = function () {
                return this.props.Vm.GridObj ? this.props.Vm.GridObj.intoDom() :
                    (React.createElement("table", null, React.createElement("thead", null, this.initHeader()), this.initBody()));
            };
            TableDomReact.prototype.fun_Scroll = function (e) {
                var _$obj = $(e.target);
                this.state.ScrollNum = _$obj.scrollLeft();
                this.props.Vm.scrollAuto(this.state.ScrollNum);
                //this.forceUpdate();
            };
            TableDomReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", null, React.createElement("div", {className: "Hm-table", onScroll: function (e) { _this.fun_Scroll(e); }}, this.initTable()));
            };
            TableDomReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return TableDomReact;
        }(domCore.DomReact));
        TableDom.TableDomReact = TableDomReact;
        var TableDomVm = (function (_super) {
            __extends(TableDomVm, _super);
            function TableDomVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = TableDomReact;
                this.ParentListPage = config.ParentListPage;
                this.GridObj = new GridFormFile.ui.GridFormVm();
                this.GridObj.FormConfig = { TableName: "222" };
                this.GridObj.IsOnlyTable = true;
                this.GridObj.IsNoAdd = true;
                this.GridObj.IsNoDel = true;
                for (var i = 0; i < 60; i++) {
                    var _columnObj = new baseColumnGroupFile.ui.ColumnConfig();
                    _columnObj.DisplayName = "字段" + i.toString();
                    _columnObj.Name = "字段" + i.toString();
                    _columnObj.ControlType = "Detail";
                    this.GridObj.Columns.push(_columnObj);
                }
                for (var i = 0; i < 25; i++) {
                    var _row = new GridRowFile.ui.GridRowVm();
                    _row.ButtonRightSign = "Detail|Del";
                    this.ParentListPage.DataBtnList.forEach(function (btn) {
                        var _names = _row.ButtonRightSign.split("|");
                        _names.forEach(function (n) {
                            if (n == btn.Name) {
                                var bt = new buttonFile.ui.ButtonVm();
                                bt.Name = n;
                                bt.DisplayName = btn.DisplayName;
                                _row.RowHandObj.ButtonList.push(bt);
                            }
                        });
                    });
                    _row.getEmit().addListener("row_click", function () {
                        //------------                   
                        _this.ParentListPage.ShowDataBtn(_this.checkButton());
                    });
                    for (var j = 0; j < 60; j++) {
                        var obj = new GridColumnFile.ui.GridColumnVm();
                        obj.ColumnConfig = { Name: "字段" + j.toString(), DisplayName: "字段" + j.toString() };
                        obj.ControlObj = new DetailFile.ui.DetailVm();
                        obj.ControlObj.LegalObj.Kind = "notNull";
                        obj.ControlObj.vmdataValue(i.toString() + j.toString());
                        _row.ColumnObjList.push(obj);
                    }
                    _row.FormVm = this.GridObj;
                    this.GridObj.RowObjList.push(_row);
                }
                //this.GridObj.getEmit().addListener("RowHandCheck", (isExpand:boolean) => {
                //    alert(isExpand);
                //});
            }
            TableDomVm.prototype.scrollAuto = function (s) {
                this.GridObj.IsAcsRelative = s > 0;
                this.GridObj.LeftNum = s;
                this.GridObj.RowObjList.forEach(function (r) {
                    //--------
                    var row = utilFile.Core.Util.Cast(r);
                    row.IsAcsRelative = s > 0;
                    row.LeftNum = s;
                    // r.forceUpdate("");
                    row.IsChange = true;
                });
                this.GridObj.IsChange = true;
                this.forceUpdate("");
            };
            TableDomVm.prototype.checkButton = function () {
                var _num = 0;
                var _temp = null;
                this.GridObj.RowObjList.forEach(function (r) {
                    //----------
                    if (r.IsSelect) {
                        if (_temp == null) {
                            _temp = r.ButtonRightSign.split("|");
                        }
                        else {
                            _temp = utilFile.Core.Util.intersection(_temp, r.ButtonRightSign.split("|"));
                        }
                    }
                });
                return _temp;
                //alert(_num);
            };
            return TableDomVm;
        }(domCore.DomVm));
        TableDom.TableDomVm = TableDomVm;
        var TableDomStates = (function (_super) {
            __extends(TableDomStates, _super);
            function TableDomStates() {
                _super.apply(this, arguments);
            }
            return TableDomStates;
        }(domCore.DomStates));
        TableDom.TableDomStates = TableDomStates;
        var TableDomProps = (function (_super) {
            __extends(TableDomProps, _super);
            function TableDomProps() {
                _super.apply(this, arguments);
            }
            return TableDomProps;
        }(domCore.DomProps));
        TableDom.TableDomProps = TableDomProps;
    })(TableDom = exports.TableDom || (exports.TableDom = {}));
});
