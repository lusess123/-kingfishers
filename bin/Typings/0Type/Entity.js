define(["require", "exports"], function (require, exports) {
    "use strict";
    var entity;
    (function (entity) {
        var SelectorItem = (function () {
            function SelectorItem() {
            }
            return SelectorItem;
        }());
        entity.SelectorItem = SelectorItem;
        var SelectorModel = (function () {
            function SelectorModel() {
            }
            return SelectorModel;
        }());
        entity.SelectorModel = SelectorModel;
        //票号和金额
        var NumMoney = (function () {
            function NumMoney() {
                this.isCheck = true;
            }
            return NumMoney;
        }());
        entity.NumMoney = NumMoney;
    })(entity = exports.entity || (exports.entity = {}));
});
