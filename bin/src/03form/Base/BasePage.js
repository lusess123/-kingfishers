var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../01core/0Dom", "./../../02col/00core/baseCol", "./../../01core/Ioc", "./../../01core/Util", "./../../01core/Url", "./BaseColumn", "./BaseForm", "./BaseRow", "./../../04page/Page", "./../../01core/post", "./../../05tool/Button", "./col/BaseColMaker", "./col/RadioMaker", "./col/ComboMaker", "./col/CheckBoxMaker", "./col/SingleImageUploadMaker", "./col/SingleFileUploadMaker", "./col/MultiImageUploadMaker", "./col/MultiFileUploadMaker", "./col/SelectMaker", "./col/MulselectorMaker", "./col/MomeryControlMaker", "./col/TreeSelectorMaker", "./col/ListBoxMaker", "./col/DetailMaker", "./col/StarScoreMaker", "./BaseColumnGroup", "./../../03form/Norml/NormalColumnGroup", "react", "./../../01core/Event"], function (require, exports, domFile, basecolFile, iocFile, utilFile, urlFile, BaseColumn, BaseForm, baseRow, page, post, buttonFile, baseColMakerFile, radio, comBo, checkBox, singleImageUpload, singleFileUpload, multiImageUpload, multiFileUpload, selector, mulselectorMaker, momeryControlMaker, treeSelectorMaker, listMaker, detailMaker, startScore, BaseColumnGroup, normalColumnGroup, React, EventFile) {
    "use strict";
    var BaseColVm = basecolFile.Core.BaseColVm;
    var ui;
    (function (ui) {
        baseColMakerFile.ui;
        radio.ui;
        comBo.ui;
        checkBox.ui;
        singleFileUpload.ui;
        singleImageUpload.ui;
        multiFileUpload.ui;
        multiImageUpload.ui;
        selector.ui;
        mulselectorMaker.ui;
        momeryControlMaker.ui;
        treeSelectorMaker.ui;
        detailMaker.ui;
        listMaker.ui;
        startScore.ui;
        normalColumnGroup.ui;
        var BasePageAction = (function (_super) {
            __extends(BasePageAction, _super);
            function BasePageAction() {
                _super.apply(this, arguments);
            }
            return BasePageAction;
        }(domFile.Core.DomAction));
        ui.BasePageAction = BasePageAction;
        var GolbSign = (function () {
            function GolbSign() {
            }
            GolbSign.IsAnimate = false;
            return GolbSign;
        }());
        var BasePageReact = (function (_super) {
            __extends(BasePageReact, _super);
            function BasePageReact() {
                _super.apply(this, arguments);
            }
            BasePageReact.prototype.senderEachForm = function (form) {
                return form.intoDom();
            };
            ;
            BasePageReact.prototype.senderMain = function () {
                var _this = this;
                return this.props.Vm.FormObjList.map(function (form, i) {
                    form.key = i;
                    return _this.senderEachForm(form);
                });
            };
            BasePageReact.prototype.pSenderBottom = function () {
                return null;
            };
            BasePageReact.prototype.pSendError = function () {
                var _error = this.props.Vm.HeaderVail.IsValid ? null :
                    React.createElement("div", {className: "text-center panel"}, React.createElement("i", {className: "icon-question-sign fa fa-frown-o  "}), $(this.props.Vm.HeaderVail.Message).text());
                return _error;
            };
            BasePageReact.prototype.pSender = function () {
                var _animate = !GolbSign.IsAnimate ? " Ha-right-left" : " Ha-right-left2";
                return React.createElement("div", {className: " AK-PAGE    Hg-overflow-auto Hz-scroll ", key: this.props.Vm.key}, [this.pSenderBottom(),
                    (this.props.Vm.HeaderVail.IsValid ?
                        this.senderMain() : this.pSendError()),
                    this.pSenderBottom()
                ]);
            };
            return BasePageReact;
        }(domFile.Core.DomReact));
        ui.BasePageReact = BasePageReact;
        var BasePageProps = (function (_super) {
            __extends(BasePageProps, _super);
            function BasePageProps() {
                _super.apply(this, arguments);
            }
            return BasePageProps;
        }(domFile.Core.DomProps));
        ui.BasePageProps = BasePageProps;
        var BasePageVm = (function (_super) {
            __extends(BasePageVm, _super);
            function BasePageVm() {
                _super.apply(this, arguments);
                this.ReactType = page.ui.PageReact;
                this.FormObjList = new Array();
                this.pRegName = "BasePage";
                this.ButtonObjList = [];
                //选择器
                //是否是选择器
                this.isSelecor = false;
                //是否是多选
                this.isSingleCheck = false;
            }
            BasePageVm.prototype.getButtonVm = function () {
                return getButton(this.PageView.PageButtons, this.PageView.DataButtons);
            };
            BasePageVm.prototype.checkBtns = function () {
            };
            BasePageVm.prototype.deleteFun = function (keys) {
            };
            BasePageVm.prototype.updateFun = function (keys) {
                var _keys = keys;
                if (_keys.length > 0) {
                    var _strs = _keys.join(",");
                    // if(_strs == )
                    urlFile.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Update$" + _strs, true);
                }
                else {
                    utilFile.Core.Util.Noty("请选择要编辑的记录");
                }
            };
            BasePageVm.prototype.detailFun = function (keys) {
                var _keys = keys;
                if (_keys.length > 0) {
                    var _strs = _keys.join(",");
                    urlFile.Core.AkUrl.Current().openUrl("$WINDEFAULT$" + this.Xml + "$Detail$" + _strs, true);
                }
                else {
                    utilFile.Core.Util.Noty("请选择要查看的记录");
                }
            };
            BasePageVm.prototype.buttonCommd = function (name, keys) {
                //if (!keys) {
                //    keys = this.getSelectKeysByListForm();
                //}
                //alert(name + "  /r/n " + $.toJSON(key));
                this.emitAppEvent("pPageButton", this.HookId, { right: name, keys: keys });
                // this.emitAppEvent("buttonCommd", this.UniId, { name: name, key: key });
            };
            BasePageVm.prototype.singleButtonClick = function (right, key) {
                switch (right) {
                    case "Update":
                        this.updateFun(key);
                        break;
                    case "Delete":
                        this.deleteFun(key);
                        break;
                    case "Detail":
                        this.detailFun(key);
                        break;
                    default:
                        this.buttonCommd(right, key);
                        break;
                }
            };
            BasePageVm.prototype.pDispose = function () {
                if (this.HookId) {
                    this.emitAppEvent("dispose", this.HookId);
                }
                _super.prototype.pDispose.call(this);
            };
            BasePageVm.prototype.getPageSubmitData = function (forms) {
                var isRes = true;
                var isChange = false;
                var sdList = new Array();
                forms.forEach(function (form) {
                    if (form.RowObjList) {
                        form.RowObjList.forEach(function (row) {
                            row.ColumnObjList.forEach(function (col) {
                                // colGroup.ColumnObjList.forEach((col) => {
                                if (col.ControlObj) {
                                    var vl = col.ControlObj.vmDataValueGet();
                                    if (!isChange && !col.ControlObj.IsKey && col.ControlObj.IsDataValueChange)
                                        isChange = true;
                                    //  col.ControlObj.
                                    var _res = col.ControlObj.legal();
                                    if (isRes && !_res) {
                                        isRes = false;
                                    }
                                    if (col.ControlObj.getRegName() != "" && col.ControlObj.IsDataValueChange) {
                                        sdList.push({
                                            SubmitSign: col.SubmitSign,
                                            DataValue: vl
                                        });
                                    }
                                }
                                // })
                            });
                        });
                    }
                });
                // this.props.Vm.SearchForm
                var _ds = {};
                forms.forEach(function (form) {
                    if (form.DelKeyList) {
                        var _tblName = form.TableName + "_OPERATION";
                        _ds[_tblName] = [];
                        form.DelKeyList.forEach(function (dk) {
                            if (!isRes) {
                                isRes = true;
                            }
                            if (!isChange) {
                                isChange = true;
                            }
                            //-----------
                            _ds[_tblName].push({ OperationName: "Delete", KeyValue: dk, Data: null });
                            //_row.OperationName = "Delete";
                            //_row.KeyValue = val;
                        });
                    }
                });
                if (isRes) {
                    var ds = post.Post.Util.createDataSet(sdList);
                    ds = $.extend(ds, _ds);
                    //console.log(ds);
                    // alert(JSON.stringify(ds));
                    return { IsLegalResult: isRes, Ds: ds, IsChange: isChange };
                }
                else {
                    return { IsLegalResult: isRes, Ds: {}, IsChange: isChange };
                }
            };
            BasePageVm.prototype.createSysPage = function (pageStyle) {
                return { KeyValue: this.KeyValue, PageStyle: pageStyle };
            };
            BasePageVm.prototype.createRow = function (dataRow, index, 
                // formType: string,
                // dataButtons: PageView.data.IDataButtons,
                // formConfig: PageView.data.IForm,
                form, pageView) {
                var _this = this;
                //---------------创建一个空的row
                var _row;
                _row = iocFile.Core.Ioc.Current().FetchInstance(form.FormConfig.FormType, baseRow.ui.BaseRowVm);
                _row.Index = index;
                _row.UniId = this.UniId;
                _row.getEmit().addListener("row_click", function () {
                    // alert(1);
                    _this.checkBtns();
                });
                //  alert("创建");
                _row.getEmit().addListener("row_del", function (row) {
                    var _index = -1;
                    // alert();
                    form.RowObjList.forEach(function (r, index) {
                        if (r == row) {
                            _index = index;
                            if (row.KeyColumnObj && row.KeyColumnObj.ControlObj) {
                                var _val = row.KeyColumnObj.ControlObj.vmDataValueGet();
                                if (!post.Post.Util.IsEmpty(_val)) {
                                    form.DelKeyList.push(_val);
                                }
                            }
                            return;
                        }
                    });
                    //form.RowObjList.forEach((rr) => {
                    //    rr.getEmit().on("row_click", () => {
                    //        //alert(2);
                    //        this.checkBtns();
                    //    });
                    //});
                    // alert(_index);
                    if (_index >= 0) {
                        form.RowObjList[_index].dispose();
                        form.RowObjList.splice(_index, 1);
                        form.IsChange = true;
                        form.RowObjList.forEach(function (r) {
                            r.IsChange = true;
                            r.ColumnObjGruop.forEach(function (colGroup) {
                                colGroup.ColumnObjList.forEach((function (col) {
                                    col.IsChange = true;
                                    if (col.ControlObj) {
                                        col.ControlObj.IsChange = true;
                                    }
                                }));
                            });
                        });
                        form.forceUpdate("");
                        _this.checkBtns();
                    }
                });
                //处理权限
                var _btRight = dataRow["BUTTON_RIGHT"];
                if (_btRight) {
                    var _bts = _btRight.toString().split("|");
                    _row.RowHandObj.ButtonList = getDataButton(_bts, pageView.DataButtons);
                    //_row.RowHandObj.getEmit().addListener("singleButtonClick", (name:string,keys:string[]) => {
                    //    this.singleButtonClick(name,keys);
                    //})
                    _row.RowHandObj.ButtonList.forEach(function (bt) {
                        bt.ClickFun = function () {
                            //alert(bt.Right + "  " +  _row.KeyColumnObj.ControlObj.vmDataValueGet() );
                            _this.singleButtonClick(bt.Right, [_row.KeyColumnObj.ControlObj.vmDataValueGet()]);
                        };
                    });
                }
                //----------------------sq添加的两个属性难带还是添加事件--------------------------------
                _row.RowHandObj.isSelector = this.isSelecor;
                _row.RowHandObj.isSingleSelector = this.isSingleCheck;
                _row.IsSelector = this.isSelecor;
                _row.IsSingleSelect = this.isSingleCheck;
                _row.IDSign = this.IDSign;
                _row.TextSign = this.TextSign;
                _row.SingleSaveEvent = this.SingleSelectEvent;
                //_row.SaveEvent=
                _row.IsChange = true;
                //-----------------------初始化row
                _row.RowData = dataRow;
                _row.RowConfig = form.FormConfig;
                form.RowObjList.push(_row);
                _row.FormVm = form;
                //-----------填充每一个组 在每一个组里面填充没一个字段
                var _colGroups = form.FormConfig.ColumnGroups;
                if (_colGroups && _colGroups.length != 0) {
                    _colGroups.forEach(function (g, i) {
                        var _columnGroup;
                        //获取行的group的实例
                        _columnGroup = iocFile.Core.Ioc.Current().FetchInstance(form.FormConfig.FormType + "ColumnGroupVm", BaseColumnGroup.ui.BaseColumnGroupVm);
                        if (_columnGroup) {
                            _columnGroup.ColumGroupCofing = g;
                            //-------------------------------填充每一个字段---------
                            var _cols = g.Columns;
                            if (_cols) {
                                _cols.forEach(function (c, i) {
                                    var _column;
                                    _column = iocFile.Core.Ioc.Current().FetchInstance(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
                                    _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
                                    _column.UniId = _this.UniId;
                                    if (c.Options) {
                                        _column.IsKey = c.Options.IsKey;
                                    }
                                    else {
                                    }
                                    _column.ColumnConfig = c;
                                    _row.ColumnObjList.push(_column);
                                    var _val = dataRow[c.Name];
                                    _columnGroup.ColumnObjList.push(_column);
                                    //每个控件单独处理
                                    _this.InitMaker(c, _column, _val, pageView);
                                });
                                _row.ColumnObjGruop.push(_columnGroup);
                            }
                        } //说明是GridColumGroupVm的类型 然后就不用管他了
                    });
                }
                else {
                    //-------------------------------填充每一个字段---------
                    var _cols = form.FormConfig.Columns;
                    _cols.forEach(function (c, i) {
                        var _column;
                        _column = iocFile.Core.Ioc.Current().FetchInstance(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
                        _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
                        if (c.Options) {
                            _column.IsKey = c.Options.IsKey;
                        }
                        else {
                        }
                        _column.ColumnConfig = c;
                        _row.ColumnObjList.push(_column);
                        var _val = dataRow[c.Name];
                        //每个控件单独处理
                        _this.InitMaker(c, _column, _val, pageView);
                    });
                }
                ////-------------------------------填充每一个字段---------
                //var _cols = form.FormConfig.Columns;
                //_cols.forEach((c, i) => {
                //    var _column: BaseColumn.ui.BaseColumnVm;
                //    _column = iocFile.Core.Ioc.Current().FetchInstance<BaseColumn.ui.BaseColumnVm>(form.FormConfig.FormType, BaseColumn.ui.BaseColumnVm);
                //    _column.SubmitSign = form.TableName + "." + index.toString() + "." + c.Name;
                //    if (c.Options) {
                //        _column.IsKey = c.Options.IsKey;
                //    }
                //    else {
                //        // debugger;
                //    }
                //    _column.ColumnConfig = c;
                //    _row.ColumnObjList.push(_column);
                //    var _val = dataRow[c.Name];
                //    //-----------------------------------------每个控件单独处理------------------
                //    // _column.d
                //    var tv: domFile.Core.BaseColVm = iocFile.Core.Ioc.Current().FetchInstance<domFile.Core.BaseColVm>(c.ControlType + "Vm", domFile.Core.BaseColVm);
                //    if (tv != null) {
                //        //------------------baseCol---------------
                //        //--ioc--
                //        var baseColMaker: baseColMakerFile.ui.IColMaker = iocFile.Core.Ioc.Current().FetchInstance<baseColMakerFile.ui.IColMaker>(c.ControlType, "IColMaker");
                //        if (baseColMaker == null) {
                //            baseColMaker = new baseColMakerFile.ui.DefaultBaseColMaker();    
                //        }
                //        if (baseColMaker != null) {
                //            baseColMaker.BaseColVm = tv;
                //            baseColMaker.ColumnVm = _column;
                //            baseColMaker.ColumnConfig = c;
                //            baseColMaker.Val = _val;
                //            baseColMaker.PageView = pageView;
                //            baseColMaker.maker();
                //        }
                //    }
                //});
            };
            //每个控件初始化Maker
            BasePageVm.prototype.InitMaker = function (c, _column, _val, pageView) {
                //-----------------------------------------每个控件单独处理------------------
                // _column.d
                var tv = iocFile.Core.Ioc.Current().FetchInstance(c.ControlType + "Vm", BaseColVm);
                if (tv != null) {
                    //------------------baseCol---------------
                    //--ioc--
                    var baseColMaker = iocFile.Core.Ioc.Current().FetchInstance(c.ControlType, "IColMaker");
                    if (baseColMaker == null) {
                        baseColMaker = new baseColMakerFile.ui.DefaultBaseColMaker();
                    }
                    if (baseColMaker != null) {
                        baseColMaker.BaseColVm = tv;
                        baseColMaker.ColumnVm = _column;
                        baseColMaker.ColumnConfig = c;
                        baseColMaker.Val = _val;
                        baseColMaker.PageView = pageView;
                        baseColMaker.maker();
                    }
                }
            };
            BasePageVm.prototype.pSetForeachForm = function (form) {
            };
            BasePageVm.prototype.pSetFormConfig = function (formConfig) {
                // return 
            };
            BasePageVm.prototype.create = function (_pageView) {
                //----------
                var _this = this;
                this.PageView = _pageView;
                this.ButtonObjList = this.getButtonVm();
                this.KeyValue = _pageView.KeyValue;
                //var _page = this;
                this.FormObjList = new Array();
                this.HeaderVail = _pageView.Header;
                if (this.HeaderVail) {
                    this.IsChange = true;
                    this.Xml = _pageView.RegName;
                    for (var formName in _pageView.Forms) {
                        var _name = formName;
                        if (_name.lastIndexOf("_INSERT") >= 0)
                            continue;
                        var _formConfig = _pageView.Forms[formName];
                        if (_formConfig) {
                            this.pSetFormConfig(_formConfig);
                            var _formNameStr = formName;
                            var _form;
                            if (_formConfig.FormType == "Album")
                                _formConfig.FormType = "Grid";
                            _form = iocFile.Core.Ioc.Current().FetchInstance(_formConfig.FormType, BaseForm.ui.BaseFormVm);
                            if (!_form) {
                                throw "找不到名称为 " + _formConfig.FormType + "的表单类型";
                            }
                            _form.Id = "form" + EventFile.App.getUniId();
                            _form.UniId = this.UniId;
                            this.pSetForeachForm(_form);
                            _form.getEmit().addListener("createRow", function (formVm) {
                                _this.createRow({}, formVm.RowObjList.length, formVm, _pageView);
                                formVm.IsChange = true;
                                //alert();
                                _this.forceUpdate("");
                            });
                            _form.FormConfig = _formConfig;
                            // if()
                            _form.IsChange = true;
                            _form.Name = _formConfig.Name;
                            _form.TableName = _formConfig.TableName;
                            this.FormObjList.push(_form);
                            //var _cols = _formConfig.Columns;
                            //_cols.forEach((col) => {
                            //    var _colconfig: BaseForm.ui.ColumnConfig = new BaseForm.ui.ColumnConfig();
                            //    _colconfig.DisplayName = col.DisplayName;
                            //    _colconfig.Name = col.Name;
                            //    _colconfig.ControlType = col.ControlType;
                            //    _form.Columns.push(_colconfig);
                            //});
                            //----------------------------
                            //------------------给每个组中的每个值附上数据
                            var _colGroups = _formConfig.ColumnGroups;
                            if (_colGroups && _colGroups.length != 0) {
                                _colGroups.forEach(function (g) {
                                    var _colGroupconfig = new BaseColumnGroup.ui.ColumnGroupConfig();
                                    _colGroupconfig.DisplayName = g.DisplayName;
                                    _colGroupconfig.ColumnLength = _colGroups.length;
                                    g.Columns.forEach(function (col) {
                                        var _colconfig = new BaseColumnGroup.ui.ColumnConfig();
                                        _colconfig.DisplayName = col.DisplayName;
                                        _colconfig.Name = col.Name;
                                        _colconfig.ControlType = col.ControlType;
                                        _form.Columns.push(_colconfig);
                                        _colGroupconfig.Columns.push(_colconfig);
                                    });
                                    _form.ColumnsGroup.push(_colGroupconfig);
                                });
                            }
                            else {
                                //要将数据填充进去
                                var _cols = _formConfig.Columns;
                                _cols.forEach(function (col) {
                                    var _colconfig = new BaseColumnGroup.ui.ColumnConfig();
                                    _colconfig.DisplayName = col.DisplayName;
                                    _colconfig.Name = col.Name;
                                    _colconfig.ControlType = col.ControlType;
                                    _form.Columns.push(_colconfig);
                                });
                            }
                            var _dt = _pageView.Data[_formConfig.TableName];
                            if (_dt) {
                                _form.FormData = _dt;
                                //alert(_dt.length);
                                _dt.forEach(function (r, index) {
                                    //  var _row: baseRow.ui.BaseRowVm;
                                    _this.createRow(r, index, _form, _pageView);
                                });
                            }
                        }
                    }
                    this.FormObjList.sort(function (a, b) {
                        //a.
                        if (a.Name.indexOf("_SEARCH") > 0) {
                            return -1;
                        }
                        if (b.Name.indexOf("_SEARCH") > 0) {
                            return 1;
                        }
                        return 0;
                    });
                    this.IsChange = true;
                }
                //  return _page;
                this.link();
            };
            BasePageVm.prototype.link = function () {
                this.FormObjList.forEach(function (form) {
                    form.link();
                });
            };
            BasePageVm.prototype.pRefresh = function () {
            };
            BasePageVm.prototype.deleteRows = function (tableName, keys) {
                var _this = this;
                var ds = this.setDeleteRowsDs(tableName, keys);
                urlFile.Core.AkPost("/module/ModuleMerge", {
                    xml: this.Xml,
                    // form: formName,
                    //pageStyle: "List",
                    ds: JSON.stringify(ds)
                }, function (data) {
                    if (data.LegalException) {
                        utilFile.Core.Util.Noty(data.Error);
                    }
                    else {
                        if (data.res > 0) {
                            utilFile.Core.Util.Noty("删除操作成功", "success");
                            _this.pRefresh();
                        }
                        else {
                            // Ataw.msgbox.show("操作失败,请核实！", 5, 2000);
                            utilFile.Core.Util.Noty("操作失败,请核实！", "error");
                        }
                    }
                });
            };
            BasePageVm.prototype.setDeleteRowsDs = function (tableName, keys) {
                var _ds = {};
                var _tblName = tableName + "_OPERATION";
                var _tb = _ds[_tblName] = [];
                keys.forEach(function (k) {
                    _tb.push({ OperationName: "Delete", KeyValue: k, Data: null });
                });
                return _ds;
                //= [{ OperationName: "", KeyValue: key, Data: null }];
            };
            return BasePageVm;
        }(domFile.Core.DomVm));
        ui.BasePageVm = BasePageVm;
        var BasePageStates = (function (_super) {
            __extends(BasePageStates, _super);
            function BasePageStates() {
                _super.apply(this, arguments);
            }
            return BasePageStates;
        }(domFile.Core.DomStates));
        ui.BasePageStates = BasePageStates;
        function getDataButton(rights, dataButtons) {
            var _res = new Array();
            rights.forEach(function (r) {
                var _bt = dataButtons[r];
                if (r != "" && _bt) {
                    var _IconCss = "";
                    var _faCss = "";
                    var _KindCss = "btn-secondary btn-xs";
                    switch (_bt.Name) {
                        case "Detail":
                            _IconCss = "table";
                            _faCss = "table";
                            break;
                        case "Delete":
                            _IconCss = "trash";
                            _faCss = "trash";
                            break;
                        case "Update":
                            _IconCss = "edit";
                            _faCss = "edit";
                            break;
                        default:
                            break;
                    }
                    //----------
                    var bt = new buttonFile.ui.ButtonVm({
                        FaCss: _faCss,
                        IconCss: _IconCss,
                        KindCss: _KindCss
                    });
                    bt.DisplayName = _bt.Text;
                    bt.Name = _bt.Name;
                    bt.NoEnable = false;
                    bt.Right = _bt.Name;
                    _res.push(bt);
                }
            });
            return _res;
        }
        function getButton(pageButtons, dataButtons) {
            var _res = new Array();
            for (var n in pageButtons) {
                var _bt = pageButtons[n];
                var bt = new buttonFile.ui.ButtonVm();
                bt.DisplayName = _bt.Text;
                bt.Name = _bt.Name;
                bt.NoEnable = false;
                bt.Right = _bt.Name;
                // bt.Tag = "page";
                _res.push(bt);
            }
            for (var n in dataButtons) {
                var _bt = dataButtons[n];
                var bt = new buttonFile.ui.ButtonVm();
                bt.DisplayName = _bt.Text;
                bt.Name = _bt.Name;
                bt.NoEnable = true;
                bt.Right = _bt.Name;
                bt.IsData = true;
                _res.push(bt);
            }
            return _res;
        }
    })(ui = exports.ui || (exports.ui = {}));
});
