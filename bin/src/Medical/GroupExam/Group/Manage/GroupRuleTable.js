var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../../01core/0Dom", "./../../../../01core/Util", "./../../../../01core/Url", "react", "./../../../../05tool/Button", "./../../../../02col/02Mulite/SingleCheckBox", "./GroupRuleRow"], function (require, exports, domFile, utilFile, urlFile, React, buttonFile, singleCheckFile, GroupRuleRow) {
    "use strict";
    var domCore = domFile.Core;
    var GroupRuleTable;
    (function (GroupRuleTable) {
        var GroupRuleTableAction = (function (_super) {
            __extends(GroupRuleTableAction, _super);
            function GroupRuleTableAction() {
                _super.apply(this, arguments);
            }
            return GroupRuleTableAction;
        }(domCore.DomAction));
        GroupRuleTable.GroupRuleTableAction = GroupRuleTableAction;
        var GroupRuleTableReact = (function (_super) {
            __extends(GroupRuleTableReact, _super);
            function GroupRuleTableReact() {
                _super.apply(this, arguments);
                this.state = new GroupRuleTableStates();
            }
            GroupRuleTableReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table"}, this._initBtnGroup(), React.createElement("div", {className: "table-responsive"}, this._initTable()), React.createElement("div", {className: "text-center"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.SaveData(); }}, "保存")));
            };
            GroupRuleTableReact.prototype._initBtnGroup = function () {
                var _this = this;
                return React.createElement("div", {className: "YSm-table-btngroup"}, React.createElement("a", {className: "btn btn-sm btn-primary", onClick: function () { _this.props.Vm.newRow(); }}, React.createElement("i", {className: "fa fa-plus"}), "添加分组"), React.createElement("div", {className: "btn-group btn-group-sm"}, this.props.Vm.createButton("全部删除")));
            };
            GroupRuleTableReact.prototype._initTable = function () {
                return React.createElement("table", {className: "table table-striped table-bordered table-hover"}, React.createElement("thead", {className: "thead-default"}, React.createElement("tr", null, React.createElement("th", {className: "thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : ""), style: { left: this.props.Vm.LeftNum }}, this.props.Vm.AllCheck.intoDom()), React.createElement("th", null, "分组名称"), React.createElement("th", null, "年龄下限"), React.createElement("th", null, "年龄上限"), React.createElement("th", null, "性别"), React.createElement("th", null, "婚姻状况"), React.createElement("th", null, "职务条件"), React.createElement("th", null, "其他条件"), React.createElement("th", null, "套餐"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, this.props.Vm.RowList.map(function (row, index) {
                    return row.intoDom();
                })));
            };
            GroupRuleTableReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return GroupRuleTableReact;
        }(domCore.DomReact));
        GroupRuleTable.GroupRuleTableReact = GroupRuleTableReact;
        var GroupRuleTableVm = (function (_super) {
            __extends(GroupRuleTableVm, _super);
            function GroupRuleTableVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = GroupRuleTableReact;
                this.IsAcsRelative = false;
                this.LeftNum = 0;
                this.SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
                this.DataBtnList = new Array();
                this.RowList = new Array();
                if (config.Data) {
                    this.RowList = [];
                    this.FormData = [];
                    this.FormData = config.Data;
                    this.BatchId = config.BatchId;
                    this.UniId = config.UniId;
                    this.BatchId = config.BatchId;
                    this.FormData.forEach(function (rowData, index) {
                        var rowNumber = index;
                        var flag = _this.UniId + index;
                        var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber, UniId: _this.UniId, BatchId: _this.BatchId, UniIdSelect: flag };
                        var rowVm = new GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm(rowConfig);
                        _this.RowList.push(rowVm);
                    });
                    this.RowList.forEach(function (row) {
                        row.SingleCheckVm.ChangeEventFun = function (val, col) {
                            _this.checkCheckBox(val, col);
                            return true;
                        };
                    });
                    this.listenAppEvent("Manage/GroupRuleRow", this.UniId, function (unId, val) {
                        _this.delOpt(val);
                    });
                }
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
            }
            //public refreshData(RowNumber: number, selectName: string, selectId: string, selectType: string)
            //{
            //    this.RowList = [];
            //    this.FormData[RowNumber].selectId = selectId;
            //    this.FormData[RowNumber].selectName = selectName;
            //    this.FormData[RowNumber].selectType = selectType;
            //    this.FormData.forEach((rowData, index) => {
            //        var rowNumber = index;
            //        var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, UniId: this.UniId +"GroupRuleTableVm"+ index, BatchId: this.BatchId };
            //        var rowVm = new GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm(rowConfig);
            //        this.RowList.push(rowVm);
            //    });
            //    this.RowList.forEach((row) => {
            //        row.SingleCheckVm.ChangeEventFun = (val, col) => {
            //            this.checkCheckBox(val, col);
            //            return true;
            //        };
            //    });
            //    this.forceUpdate("");    
            //}
            GroupRuleTableVm.prototype.legal = function () {
                var _isRes = true;
                this.RowList.forEach(function (row) {
                    if (!row.legal()) {
                        _isRes = false;
                    }
                });
                return _isRes;
            };
            GroupRuleTableVm.prototype.SaveData = function () {
                var _this = this;
                var postData = [];
                this.RowList.forEach(function (row) {
                    var _o = row.RowData;
                    if (!utilFile.Core.Util.IsPure(_o)) {
                        postData.push(_o);
                    }
                });
                var jsonData = JSON.stringify(postData);
                var isSuccess = this.legal();
                if (isSuccess) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddGroup", { group: jsonData, batch: this.BatchId }, function (a) {
                        if (a.Content == "ok") {
                            _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "GroupRule");
                            utilFile.Core.Util.Noty("操作成功！");
                        }
                    });
                }
            };
            GroupRuleTableVm.prototype.newRow = function () {
                var _this = this;
                this.RowList = [];
                var GroupData1 = { Name: "" };
                this.FormData.push(GroupData1);
                this.FormData.forEach(function (rowData, index) {
                    var rowNumber = index;
                    var flag = _this.UniId + index;
                    var rowConfig = { RowData: rowData, IsAcsRelative: _this.IsAcsRelative, LeftNum: _this.LeftNum, RowNumber: rowNumber, UniId: _this.UniId, BatchId: _this.BatchId, UniIdSelect: flag };
                    var rowVm = new GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm(rowConfig);
                    _this.RowList.push(rowVm);
                });
                this.RowList.forEach(function (row) {
                    row.SingleCheckVm.ChangeEventFun = function (val, col) {
                        _this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
                this.AllCheck.ChangeEventFun = function (val, col) {
                    _this.allCheckChecked(val, col);
                    return true;
                };
                this.forceUpdate("");
            };
            GroupRuleTableVm.prototype.MemberInfoImportFun = function (mobj) {
                //$.ajaxSetup({
                //    async: false
                //});
                //mobj.asynJs(
                //    [
                //        "/AtawStatic/lib/03Extend/flashupload/jquery.uploadify.js",
                //        "/AtawStatic/lib/03Extend/flashupload/swfobject.js",
                //        "/AtawStatic/lib/03Extend/flashupload/css/uploadify.css"
                //    ]);
                ////var _this = mobj;
                //var _$content = $(".EPP_win");
                //if (_$content.length == 0) {
                //    _$content = $("<div class='EPP_win'>" +
                //        " <label>选择文件：</label><input type=\"file\"  id=\"MemberupLoad\" />" +
                //        "<div>Excel表格按照以下的表头格式导入：</div>" +
                //        "<table class='table table-bordered'><tr><td>商品编号(货位编码)</td><td>商品名称(辅料名称)</td><td>供应商名称</td><td>型号</td><td>数量</td><td>单位</td><td>单价</td><td>金额</td><td>价格类型</td><td>产品类别</td></tr></table>" +
                //        "<a class=\"easyui-linkbutton\"  href=\"javascript:void(0)\" onclick=\"$.AKjs.SubUploadFun();\">确定上传</a></div>");
                //    _$content.AtawWindow({
                //        Title: "入库明细数据导入",
                //        Width: "80%",
                //        WindowOpenFun: function (obj) {
                //            //InitMemberUploadFun(mobj, obj, _$content);
                //        }
                //    });
                //}
                //var obj = _$content.AtawControl();
                //obj.open();
            };
            ;
            GroupRuleTableVm.prototype.PrintTableToExcel = function (objTab) {
                try {
                    var xls = new ActiveXObject("Excel.Application");
                }
                catch (e) {
                    alert(e);
                    return false;
                }
                xls.visible = true;
                var xlBook = xls.Workbooks.Add;
                var xlsheet = xlBook.Worksheets(1);
                var x = 1;
                var y = 1;
                for (var i = 0; i < objTab.rows.length; i++) {
                    y = 1;
                    for (var j = 0; j < objTab.rows[i].cells.length; j++) {
                        xlsheet.Cells(x, y).Value = objTab.rows[i].cells[j].innerHTML;
                        xlsheet.Cells(x, y).Borders.LineStyle = 1;
                        y++;
                    }
                    x++;
                }
                xlsheet.Columns.AutoFit; //自动适应大小
                return;
            };
            GroupRuleTableVm.prototype.createButton = function (displayName) {
                var _this = this;
                var btnVm = new buttonFile.ui.ButtonVm();
                btnVm.DisplayName = displayName;
                btnVm.NoEnable = false;
                btnVm.KindCss = " btn-primary-outline ";
                this.DataBtnList.push(btnVm);
                btnVm.ClickFun = function (a) {
                    _this.buttonClickCommond(a);
                };
                return btnVm.intoDom();
            };
            GroupRuleTableVm.prototype.checkCheckBox = function (val, checkDom) {
                var rowList = this.RowList;
                window["isHand"] = true;
                var isCheck = false;
                var isAllCheck = true;
                var checkedCount = 0;
                if (val == "true") {
                    isCheck = true;
                }
                rowList.forEach(function (row) {
                    var chk = row.SingleCheckVm;
                    var _val = chk.dataValue();
                    if (_val == "true" && checkDom != chk) {
                        isCheck = true;
                        checkedCount++;
                    }
                    if (checkDom == chk) {
                        if (val == "true") {
                            checkedCount++;
                        }
                    }
                });
                isAllCheck = rowList.length == checkedCount ? true : false;
                //this.DataBtnList.forEach((btn) => {
                //    btn.NoEnable = isCheck ? false : true;
                //    btn.forceUpdate("");
                //});
                this.AllCheck.vmDataValueSet(isAllCheck ? "true" : "false");
                this.AllCheck.forceUpdate("", function () {
                    window["isHand"] = false;
                });
            };
            GroupRuleTableVm.prototype.allCheckChecked = function (val, checkDom) {
                if (!window["isHand"]) {
                    //this.CheckBoxList.forEach((chk) => {
                    //    chk.reactDataValueSet(val);
                    //});
                    this.RowList.forEach(function (row) {
                        var chk = row.SingleCheckVm;
                        chk.reactDataValueSet(val);
                    });
                }
            };
            GroupRuleTableVm.prototype.delOpt = function (val) {
                var _this = this;
                if (val != "" && val != null) {
                    if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                        urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveBatchGroup", { fids: val }, function (data) {
                            var _data = data.Content;
                            if (_data == "ok") {
                                _this.emitAppEvent("Manage/GroupRuleTable/loadPageData", _this.UniId, "GroupRule");
                            }
                        });
                    }
                }
                else {
                    var index = 0;
                    var findex = 0;
                    this.RowList.forEach(function (r) {
                        var ck = r.SingleCheckVm;
                        if (ck.vmDataValueGet() == "true") {
                            findex = index;
                        }
                        index++;
                    });
                    this.RowList.splice(findex, 1);
                    this.FormData.splice(findex, 1);
                    this.RowList.forEach(function (r, i) {
                        if (i >= findex) {
                            r.toChange();
                        }
                    });
                    this.forceUpdate("");
                }
            };
            GroupRuleTableVm.prototype.getSelectValues = function () {
                var _list = [];
                this.RowList.forEach(function (r) {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        _list.push(r.RowData);
                    }
                });
                console.log(_list);
                return _list;
            };
            GroupRuleTableVm.prototype.buttonClickCommond = function (obj) {
                switch (obj.DisplayName) {
                    //case "复制":
                    //    var _list = this.getSelectValues();
                    //    var _ids = _list.map((n) => n.FID).join(",");
                    //    this.ManageOpt(_ids);
                    //    break;
                    case "全部删除":
                        var _ids = this.FormData.map(function (n) { return n.FID; }).join(",");
                        this.delOpt(_ids);
                        break;
                    default:
                        break;
                }
            };
            return GroupRuleTableVm;
        }(domCore.DomVm));
        GroupRuleTable.GroupRuleTableVm = GroupRuleTableVm;
        var GroupRuleTableStates = (function (_super) {
            __extends(GroupRuleTableStates, _super);
            function GroupRuleTableStates() {
                _super.apply(this, arguments);
            }
            return GroupRuleTableStates;
        }(domCore.DomStates));
        GroupRuleTable.GroupRuleTableStates = GroupRuleTableStates;
        var GroupRuleTableProps = (function (_super) {
            __extends(GroupRuleTableProps, _super);
            function GroupRuleTableProps() {
                _super.apply(this, arguments);
            }
            return GroupRuleTableProps;
        }(domCore.DomProps));
        GroupRuleTable.GroupRuleTableProps = GroupRuleTableProps;
    })(GroupRuleTable = exports.GroupRuleTable || (exports.GroupRuleTable = {}));
});
