var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../../01core/0Dom", "react", "./../../../02col/01single/Text", "./../../../02col/01single/Detail"], function (require, exports, domFile, React, textFile, DetailFile) {
    "use strict";
    var domCore = domFile.Core;
    var MenuButtonRow;
    (function (MenuButtonRow) {
        var MenuButtonRowAction = (function (_super) {
            __extends(MenuButtonRowAction, _super);
            function MenuButtonRowAction() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowAction;
        }(domCore.DomAction));
        MenuButtonRow.MenuButtonRowAction = MenuButtonRowAction;
        var MenuButtonRowReact = (function (_super) {
            __extends(MenuButtonRowReact, _super);
            function MenuButtonRowReact() {
                _super.apply(this, arguments);
                this.state = new MenuButtonRowStates();
            }
            MenuButtonRowReact.prototype.fun_OnChange = function (e, fName) {
                var _val = e.target["value"];
                this.props.Vm.ButtonData[fName] = _val;
                this.forceUpdate();
            };
            //删除每一行的数据
            MenuButtonRowReact.prototype.fun_delButtonRow = function () {
                this.props.Vm.delButtonRow();
            };
            MenuButtonRowReact.prototype.initDetailTextData = function (colName, legal) {
                var _bean = new DetailFile.ui.DetailVm();
                _bean.Tag = colName;
                //var PerValue = parseInt(this.props.Vm.PreviousButton.FValue);
                //var value = PerValue * 2;
                var value = 1;
                for (var i = 0; i < this.props.Vm.RowNumber + 1; i++) {
                    value = value * 2;
                }
                //var dd = ((this.props.Vm.RowNumber + 1) * 2).toString();
                _bean.vmDataValueSet(value.toString());
                this.props.Vm.ButtonData[colName] = value.toString();
                return _bean.intoDom();
            };
            MenuButtonRowReact.prototype.initFValueDetail = function () {
                var _detail = this.props.Vm.getFValueDetailVm();
                return _detail.intoDom();
                // if(this.props)
            };
            MenuButtonRowReact.prototype.initTextBindData = function (colName, legal) {
                var _this = this;
                var _name = colName.toString();
                var isexcite = false;
                for (var vn in this.props.Vm.TextVmObjList) {
                    var _obj = this.props.Vm.TextVmObjList[_name];
                    if (_obj) {
                        isexcite = true;
                        _exciteBean = _obj;
                    }
                }
                if (!isexcite) {
                    var _exciteBean = new textFile.ui.TextVm;
                    _exciteBean.Tag = colName;
                    if (colName == "OrderId" && !this.props.Vm.ButtonData[colName]) {
                        this.props.Vm.ButtonData.OrderId = "0";
                    }
                    _exciteBean.vmDataValueSet(this.props.Vm.ButtonData[colName]);
                    _exciteBean.setOriValue(this.props.Vm.ButtonData[colName]);
                    _exciteBean.LegalObj.Kind = legal ? legal : "notNull";
                    _exciteBean.onChangeHandle(function (val) {
                        _this.props.Vm.ButtonData[colName] = val;
                        return true;
                    });
                    this.props.Vm.TextVmObjList[_name] = _exciteBean;
                }
                return this.props.Vm.TextVmObjList[_name].intoDom();
            };
            MenuButtonRowReact.prototype.pSender = function () {
                var _this = this;
                return React.createElement("tr", null, React.createElement("td", null, this.props.Vm.RowNumber + 1), React.createElement("td", {className: "hide"}, this.initTextBindData("FID", " ")), React.createElement("td", {className: "hide"}, this.initTextBindData("ParentRightValue", " ")), React.createElement("td", null, this.initTextBindData("FName")), React.createElement("td", null, this.initTextBindData("FKey")), React.createElement("td", null, this.initFValueDetail()), React.createElement("td", null, this.initTextBindData("OrderId", "nonnegativeInteger")), React.createElement("td", null, React.createElement("i", {className: "fa fa-minus-circle Hu-pointer red", onClick: function (e) { _this.fun_delButtonRow(); }})));
            };
            MenuButtonRowReact.prototype.pComponentDidMount = function () {
                _super.prototype.pComponentDidMount.call(this);
            };
            return MenuButtonRowReact;
        }(domCore.DomReact));
        MenuButtonRow.MenuButtonRowReact = MenuButtonRowReact;
        var MenuButtonRowVm = (function (_super) {
            __extends(MenuButtonRowVm, _super);
            function MenuButtonRowVm(config) {
                var _this = this;
                _super.call(this);
                this.ReactType = MenuButtonRowReact;
                this.TextVmObjList = {};
                this.IsNew = false;
                if (config) {
                    this.ButtonData = config.ButtonData;
                    if (config.IsNew) {
                        this.IsNew = config.IsNew;
                    }
                    if (config.UniId) {
                        this.UniId = config.UniId;
                    }
                }
                this.listenAppEvent("modifyParentKeyValue", this.UniId, function (val) {
                    _this.modifyParentKeyValue(val);
                });
            }
            MenuButtonRowVm.prototype.modifyParentKeyValue = function (val) {
                this.TextVmObjList["ParentRightValue"].dataValueSet(val);
            };
            MenuButtonRowVm.prototype.legal = function () {
                var _res = true;
                for (var vn in this.TextVmObjList) {
                    var _obj = this.TextVmObjList[vn];
                    _res = _obj.legal() && _res;
                }
                _res = this.FValueDetail.legal() && _res;
                return _res;
            };
            MenuButtonRowVm.prototype.delButtonRow = function () {
                this.emitAppEvent("right/menu/update/MenuButtonRow", this.UniId, this.RowNumber);
            };
            MenuButtonRowVm.prototype.getFValueDetailVm = function () {
                var _this = this;
                if (!this.FValueDetail) {
                    this.FValueDetail = new DetailFile.ui.DetailVm();
                    this.FValueDetail.vmDataValueSet(this.ButtonData.FValue);
                    this.FValueDetail.setOriValue(this.ButtonData.FValue);
                    this.FValueDetail.onChangeHandle(function (val) {
                        _this.ButtonData.FValue = val;
                        return true;
                    });
                }
                return this.FValueDetail;
            };
            MenuButtonRowVm.prototype.getData = function () {
                var _this = this;
                var _data = {};
                var _Change = false;
                var fid = null;
                if (this.IsNew) {
                    _Change = true;
                }
                for (var vn in this.TextVmObjList) {
                    var txtObj = this.TextVmObjList[vn];
                    //var _isChange: boolean = (txtObj.vmDataValueGet() != txtObj.getOriValue());
                    //if (_isChange) {
                    //    _Change = true;
                    //    _data[txtObj.Tag] = txtObj.vmDataValueGet();
                    //}
                    txtObj.getChangeValFun(function (isChange, val, col) {
                        if (isChange || _this.IsNew) {
                            _Change = true;
                            _data[txtObj.Tag] = txtObj.vmDataValueGet();
                        }
                    });
                    if (txtObj.Tag == "FID") {
                        fid = txtObj.vmDataValueGet();
                    }
                }
                this.FValueDetail.getChangeValFun(function (isChange, val, col) {
                    if (isChange || _this.IsNew) {
                        _data.FValue = val;
                        _Change = true;
                    }
                });
                if (_Change) {
                    _data.FID = fid;
                }
                return _data;
            };
            MenuButtonRowVm.prototype.toChange = function () {
                this.IsChange = true;
                for (var n in this.TextVmObjList) {
                    this.TextVmObjList[n].IsChange = true;
                }
                this.FValueDetail.IsChange = true;
            };
            return MenuButtonRowVm;
        }(domCore.DomVm));
        MenuButtonRow.MenuButtonRowVm = MenuButtonRowVm;
        var MenuButtonRowStates = (function (_super) {
            __extends(MenuButtonRowStates, _super);
            function MenuButtonRowStates() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowStates;
        }(domCore.DomStates));
        MenuButtonRow.MenuButtonRowStates = MenuButtonRowStates;
        var MenuButtonRowProps = (function (_super) {
            __extends(MenuButtonRowProps, _super);
            function MenuButtonRowProps() {
                _super.apply(this, arguments);
            }
            return MenuButtonRowProps;
        }(domCore.DomProps));
        MenuButtonRow.MenuButtonRowProps = MenuButtonRowProps;
    })(MenuButtonRow = exports.MenuButtonRow || (exports.MenuButtonRow = {}));
});
