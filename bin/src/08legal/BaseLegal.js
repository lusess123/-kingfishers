define(["require", "exports"], function (require, exports) {
    "use strict";
    var Core;
    (function (Core) {
        var BaseLegal = (function () {
            function BaseLegal() {
            }
            BaseLegal.prototype.initOpts = function (kind, errmsg, fun, reg, expression) {
                this.Kind = kind;
                this.ErrMsg = errmsg;
                this.CustomLegalFunName = fun;
                this.LegalReg = reg;
                this.LegalExpression = expression;
            };
            BaseLegal.prototype.legal = function () {
                if (this.Kind && this.Kind != "" && this[this.Kind]) {
                    this[this.Kind]();
                }
                else
                    this.LegalResult = true;
            };
            BaseLegal.prototype.poshytip = function (msg) {
                this.ErrMsg = msg;
                //this.ControlObj.legal();
            };
            BaseLegal.prototype.custom = function () {
                if (this.CustomLegalFun) {
                    var error = this.CustomLegalFun(this.ControlObj);
                    if (error == null || error == "") {
                        this.LegalResult = true;
                    }
                    else {
                        this.LegalResult = false;
                        this.poshytip(error);
                    }
                }
                else {
                    this.poshytip("自定义验证 未指定自定义函数");
                    this.LegalResult = false;
                }
            };
            //非空校验
            BaseLegal.prototype.notNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val == "" || _val == null) {
                        this.LegalResult = false;
                        this.poshytip("不能为空");
                    }
                }
            };
            BaseLegal.prototype.reg = function (str) {
                if (str != null) {
                    return str["test"](this.ControlObj.TempDataValue);
                }
                else {
                    return false;
                }
            };
            //必选校验
            BaseLegal.prototype.SelectionNotNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val == "" || _val == null) {
                        this.LegalResult = false;
                        this.poshytip("请选择");
                    }
                    else if (_val == "--") {
                        this.LegalResult = false;
                        this.poshytip("请选择");
                    }
                }
            };
            BaseLegal.prototype.RadioNotNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val == "" || _val == null) {
                        this.LegalResult = false;
                        this.poshytip("请选择");
                    }
                }
            };
            BaseLegal.prototype.UserNameLegal = function () {
                var _reg = /^[0-9a-zA-Z]\w{5,17}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("用户名长度在6-18位之间，只能包含字符、数字、下划线");
                    }
                }
            };
            BaseLegal.prototype.PassWordLegal = function () {
                var _reg = /^[0-9a-zA-Z]\w{5,17}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("密码长度在6-18位之间，只能包含字符、数字、下划线");
                    }
                }
            };
            BaseLegal.prototype.MobilePhoneLegal = function () {
                var _reg = /(^1[3578]\d{9}$)|(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须是座机号或手机号，座机号格式为(0(2或者3位)-(7或者8位)");
                    }
                }
            };
            BaseLegal.prototype.FaxLegal = function () {
                var _reg = /^(\d{3,4}-)?\d{7,8}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("输入传真格式不准确");
                    }
                }
            };
            BaseLegal.prototype.EmailLegal = function () {
                var _reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("电子邮箱格式不正确");
                    }
                }
            };
            BaseLegal.prototype.IDCardLegal = function () {
                var _reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("身份证号码格式不正确");
                    }
                }
            };
            BaseLegal.prototype.PostCodeLegal = function () {
                var _reg = /^\d{6}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("邮政编码为6为整数");
                    }
                }
            };
            BaseLegal.prototype.VehicleLimitLegal = function () {
                var _reg = /^\d+(\.\d{1,2})?$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须是整数或小数点后1-2位的小数");
                    }
                }
            };
            BaseLegal.prototype.PriceLegal = function () {
                var _reg = /^\d+(\.\d{1,2})?$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须是整数或小数点后1-2位的小数");
                    }
                }
            };
            BaseLegal.prototype.SeatLegal = function () {
                var _reg = /^[0-9]*[1-9][0-9]*$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须是大于0的整数");
                    }
                }
            };
            BaseLegal.prototype.ContextLegal = function () {
                var _reg = /^.{1,200}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        this.LegalResult = false;
                        this.poshytip("备注不能为空");
                    }
                    else if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("备注介绍不得大于200字");
                    }
                }
            };
            BaseLegal.prototype.TitleLegal = function () {
                var _reg = /^.{1,15}$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val == null || _val == "") {
                        this.LegalResult = false;
                        this.poshytip("输入内容不能为空");
                    }
                    else if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("输入内容不得大于15字");
                    }
                }
            };
            BaseLegal.prototype.EmailLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("电子邮箱格式不正确");
                    }
                }
            };
            BaseLegal.prototype.FaxLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^(\d{3,4}-)?\d{7,8}$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("输入传真格式不准确");
                    }
                }
            };
            BaseLegal.prototype.IDCardLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("身份证号码格式不正确");
                    }
                }
            };
            BaseLegal.prototype.PostCodeLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^\d{6}$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("邮政编码为6为整数");
                    }
                }
            };
            BaseLegal.prototype.MobilePhoneLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /(^1[3578]\d{9}$)|(^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须是座机号或手机号，座机号格式为(0(2或者3位)-(7或者8位)");
                    }
                }
            };
            BaseLegal.prototype.VehicleLimitLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^\d+(\.\d{1,2})?$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须是整数或小数点后1-2位的小数");
                    }
                }
            };
            BaseLegal.prototype.PriceLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^\d+(\.\d{1,2})?$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须是整数或小数点后1-2位的小数");
                    }
                }
            };
            BaseLegal.prototype.SeatLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^[0-9]*[1-9][0-9]*$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须是大于0的整数");
                    }
                }
            };
            BaseLegal.prototype.ContextLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^.{1,200}$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("备注介绍不得大于200字");
                    }
                }
            };
            BaseLegal.prototype.TitleLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^.{1,15}$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("标题不得大于15字");
                    }
                }
            };
            BaseLegal.prototype.nonnegativeIntegerNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^([1-9]\d{0,}|0)$/gi;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须为非负整数");
                    }
                }
            };
            BaseLegal.prototype.nonnegativeInteger = function () {
                var _reg = /^([1-9]\d{0,}|0)$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须为非负整数");
                    }
                }
            };
            BaseLegal.prototype.MorethanZeroLegal = function () {
                var _reg = /^\d+(\.\d{2})?$/;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.poshytip("必须为非负数且大于0");
                    }
                }
            };
            BaseLegal.prototype.MorethanZeroLegalNull = function () {
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (_val != null || _val != "") {
                        var _reg = /^\d+(\.\d{2})?$/;
                        this.LegalResult = this.reg(_reg);
                    }
                    else {
                        this.LegalResult = true;
                    }
                    if (!this.LegalResult) {
                        this.poshytip("必须为非负数且大于0");
                    }
                }
            };
            return BaseLegal;
        }());
        Core.BaseLegal = BaseLegal;
    })(Core = exports.Core || (exports.Core = {}));
});
