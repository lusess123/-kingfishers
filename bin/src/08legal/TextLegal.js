var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./BaseLegal"], function (require, exports, baselegal) {
    "use strict";
    var Code;
    (function (Code) {
        var TextLegal = (function (_super) {
            __extends(TextLegal, _super);
            function TextLegal() {
                _super.apply(this, arguments);
            }
            //邮箱验证
            TextLegal.prototype.email = function () {
                var Expression = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.(?:com|cn)$/gi;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(Expression)) {
                        this.LegalResult = false;
                        this.ErrMsg = "邮箱格式不对，格式如admin@163.com";
                    }
                }
            };
            //手机验证
            TextLegal.prototype.mobile = function () {
                var _reg = /^1[358]\d{9}$/;
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.ErrMsg = "手机格式不对,必须以13、15、18开头并且为11位";
                    }
                }
            };
            //座机验证
            TextLegal.prototype.tel = function () {
                var _reg = '/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/';
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.ErrMsg = "座机号码格式不对,必须为(0(2或者3位)-(7或者8位),如0571-8888888";
                    }
                }
            };
            //密码验证
            TextLegal.prototype.pwd = function () {
                var _reg = '/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/';
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.ErrMsg = "只能输入5-20个以字母开头、可带数字、“_”、“.”的字符串!";
                    }
                }
            };
            //用户名验证
            TextLegal.prototype.username = function () {
                var _reg = '/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/';
                if (this.ControlObj) {
                    var _val = this.ControlObj.TempDataValue;
                    this.LegalResult = true;
                    if (!this.reg(_reg)) {
                        this.LegalResult = false;
                        this.ErrMsg = "只能输入5-20个以字母开头、可带数字、“_”、“.”的字串!";
                    }
                }
            };
            return TextLegal;
        }(baselegal.Core.BaseLegal));
        Code.TextLegal = TextLegal;
    })(Code = exports.Code || (exports.Code = {}));
});
