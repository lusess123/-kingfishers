import domFile = require("./../../../../01core/0Dom");
import domCore = domFile.Core;
import utilFile = require("./../../../../01core/Util");
import iocFile = require("./../../../../01core/Ioc");
import urlFile = require("./../../../../01core/Url");
import React = require("react");
import ReactDOM = require("react-dom");
import buttonFile = require("./../../../../05tool/Button");

import pagination = require("./../../../../05tool/Pagination");
import singleCheckFile = require("./../../../../02col/02Mulite/SingleCheckBox");
import baseColFile = require("./../../../../02col/00core/BaseCol");
import DataFile = require("./../Data");
import comboFile = require("./../../../../02col/02Mulite/Combo");
import constantData = require("./../../../Common/Data");
import GroupRuleRow = require("./GroupRuleRow");
import eventFile = require("./../../../../01core/Event");

export module GroupRuleTable {
    export class GroupRuleTableAction extends domCore.DomAction {
    }

    export class GroupRuleTableReact extends domCore.DomReact<GroupRuleTableProps, GroupRuleTableStates, GroupRuleTableAction> implements domCore.IReact {

        public state = new GroupRuleTableStates();

        public pSender(): React.ReactElement<any> {
            return <div className="YSm-table">
                {this._initBtnGroup() }

                <div className="table-responsive">{this._initTable() }</div>

                <div className="text-center"><a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.SaveData(); } }>保存</a></div>
            </div>;
        }


        public _initBtnGroup(): React.ReactElement<any> {
            return <div className="YSm-table-btngroup">
                <a className="btn btn-sm btn-primary" onClick={() => { this.props.Vm.newRow(); } }><i className="fa fa-plus"></i>添加分组</a>
                <div className="btn-group btn-group-sm">
                    {this.props.Vm.createButton("全部删除") }
                </div>
            </div>;
        }


        public _initTable(): React.ReactElement<any> {
            return <table className="table table-striped table-bordered table-hover">
                <thead className="thead-default">
                    <tr>
                        <th className={"thCheckAll text-center acsWidth3-5 " + (this.props.Vm.IsAcsRelative ? " Hf-relative Hf-table-th  " : "") } style={{ left: this.props.Vm.LeftNum }}   >{this.props.Vm.AllCheck.intoDom() }</th>
                        <th>分组名称</th>
                        <th>年龄下限</th>
                        <th>年龄上限</th>
                        <th>性别</th>
                        <th>婚姻状况</th>
                        <th>职务条件</th>
                        <th>其他条件</th>
                        <th>套餐</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.Vm.RowList.map((row, index) => {
                        return row.intoDom()
                    }) }
                </tbody>
            </table>;
        }

        protected pComponentDidMount() {
            super.pComponentDidMount();

        }


    }

    export interface IReactGroupRuleTableVm extends domCore.DomVm {

    }

    export interface IGroupRuleTableConfig {
        Data: DataFile.Group.IGroupData[];
        UniId: string;
        BatchId: string

    }
    export class GroupRuleTableVm extends domCore.DomVm implements IReactGroupRuleTableVm {
        public ReactType = GroupRuleTableReact;
        public IsAcsRelative: boolean = false;
        public LeftNum: number = 0;
        public AllCheck: singleCheckFile.ui.SingleCheckBoxVm;
        public SingleCheckVm = new singleCheckFile.ui.SingleCheckBoxVm();
        public RowNumber: string;
        public DataBtnList = new Array<buttonFile.ui.ButtonVm>();
        public RowList: GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm[];
        public FormData: Array<DataFile.Group.IGroupBathData>;
        public BatchId: string;

        public constructor(config?: IGroupRuleTableConfig) {
            super();
            this.RowList = new Array<GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm>();
            if (config.Data) {
                this.RowList = [];
                this.FormData = [];
                this.FormData = config.Data;
                this.BatchId = config.BatchId;
                this.UniId = config.UniId
                this.BatchId = config.BatchId
                this.FormData.forEach((rowData, index) => {
                    var rowNumber = index;
                    var flag = this.UniId + index;
                    var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, UniId: this.UniId, BatchId: this.BatchId, UniIdSelect:flag};
                    var rowVm = new GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm(rowConfig);
                    this.RowList.push(rowVm);
                });
                this.RowList.forEach((row) => {
                    row.SingleCheckVm.ChangeEventFun = (val, col) => {
                        this.checkCheckBox(val, col);
                        return true;
                    };
                });
                this.listenAppEvent("Manage/GroupRuleRow", this.UniId, (unId: number, val: string) => {             
                    this.delOpt(val);
                });
                //this.listenAppEvent("Manage/GroupRuleRow/sendData", this.UniId, (RowNumber: number, selectName: string, selectId: string, selectType: string) => {
                //    this.refreshData(RowNumber, selectName, selectId, selectType)
                //});
            }

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
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
        public legal(): boolean {
            var _isRes: boolean = true;
            this.RowList.forEach((row) => {
                if (!row.legal()) {
                    _isRes = false;
                }
            });
            return _isRes;

        }
        public SaveData()
        {
            var postData = [];
            this.RowList.forEach((row) => {
            var _o = row.RowData;
            if (!utilFile.Core.Util.IsPure(_o)) {
                postData.push(_o);
            }});
            var jsonData = JSON.stringify(postData);
            var isSuccess = this.legal();
            if (isSuccess) {
                urlFile.Core.AkPost("/MedicalCenter/NewGroup/AddGroup", { group: jsonData, batch:this.BatchId  }, (a) => {
                    if (a.Content == "ok") {
                        this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId, "GroupRule");
                        utilFile.Core.Util.Noty("操作成功！");
                    }
                });

            }

        }
        public newRow() {
            this.RowList = [];
             var GroupData1: DataFile.Group.IGroupBathData = { Name: "" }
            this.FormData.push(GroupData1);
            this.FormData.forEach((rowData, index) => {
                var rowNumber = index;
                var flag = this.UniId +index
                var rowConfig = { RowData: rowData, IsAcsRelative: this.IsAcsRelative, LeftNum: this.LeftNum, RowNumber: rowNumber, UniId: this.UniId, BatchId: this.BatchId, UniIdSelect: flag};
                var rowVm = new GroupRuleRow.GroupRuleRowDom.GroupRuleRowDomVm(rowConfig);
                this.RowList.push(rowVm);
            });
            this.RowList.forEach((row) => {
                row.SingleCheckVm.ChangeEventFun = (val, col) => {
                    this.checkCheckBox(val, col);
                    return true;
                };
            });

            this.AllCheck = new singleCheckFile.ui.SingleCheckBoxVm();
            this.AllCheck.ChangeEventFun = (val, col) => {
                this.allCheckChecked(val, col);
                return true;
            };
            this.forceUpdate("");
        }
        public  MemberInfoImportFun(mobj) {
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
        public PrintTableToExcel(objTab) {
        try {
            var xls = new ActiveXObject("Excel.Application");
        }
        catch (e) {
            alert(e)
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
    }
    public createButton(displayName: string): React.ReactElement<any> {
            var btnVm = new buttonFile.ui.ButtonVm();
            btnVm.DisplayName = displayName;
            btnVm.NoEnable = false;
            btnVm.KindCss = " btn-primary-outline ";
            this.DataBtnList.push(btnVm);
            btnVm.ClickFun = (a) => {
                this.buttonClickCommond(a);
            };
            return btnVm.intoDom();
        }
        public checkCheckBox(val: string, checkDom: domFile.Core.DomVm): void {
            var rowList = this.RowList;
            window["isHand"] = true;
            var isCheck = false;
            var isAllCheck = true;
            var checkedCount = 0;
            if (val == "true") {
                isCheck = true;
            }

            rowList.forEach((row) => {
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

            this.AllCheck.forceUpdate("", () => {
                window["isHand"] = false;
            });

        }

        public allCheckChecked(val: string, checkDom: domFile.Core.DomVm): void {

            if (!window["isHand"]) {

                //this.CheckBoxList.forEach((chk) => {
                //    chk.reactDataValueSet(val);
                //});

                this.RowList.forEach((row) => {
                    var chk = row.SingleCheckVm
                    chk.reactDataValueSet(val);
                });
            }
        }
        public delOpt(val: string): void {
            if (val != "" && val != null) {
                if (confirm("你确定要删除 所选中的数据吗 ？？")) {
                    urlFile.Core.AkPost("/MedicalCenter/NewGroup/RemoveBatchGroup", { fids: val }, (data) => {
                        var _data = data.Content;
                        if (_data == "ok") {
                            this.emitAppEvent("Manage/GroupRuleTable/loadPageData", this.UniId,"GroupRule");
                        }
                    });

                }
            }
            else
            {
                var index = 0;
                var findex = 0
                this.RowList.forEach((r) => {
                    var ck = r.SingleCheckVm;
                    if (ck.vmDataValueGet() == "true") {
                        findex = index
                    }
                    index++;

                });
                this.RowList.splice(findex, 1)
                this.FormData.splice(findex, 1);
                this.RowList.forEach((r, i) => {
                    if (i >= findex) {
                        r.toChange();
                    }
                });
                this.forceUpdate("");
            }

        }

        private getSelectValues() {
            var _list: DataFile.Group.IGroupBathData[] = [];

            this.RowList.forEach((r) => {
                var ck = r.SingleCheckVm;
                if (ck.vmDataValueGet() == "true") {
                    _list.push(r.RowData);
                }
            });

            console.log(_list);
            return _list;
        }
        public buttonClickCommond(obj: buttonFile.ui.ButtonVm) {
            switch (obj.DisplayName) {
                //case "复制":
                //    var _list = this.getSelectValues();
                //    var _ids = _list.map((n) => n.FID).join(",");
                //    this.ManageOpt(_ids);
                //    break;
                case "全部删除":
                    var _ids = this.FormData.map((n) => n.FID).join(",");
                    this.delOpt(_ids);
                    break;
                default:
                    break;
            }
        }

    }
    export class GroupRuleTableStates extends domCore.DomStates {
    }


    export class GroupRuleTableProps extends domCore.DomProps<GroupRuleTableVm>{
    }



}


