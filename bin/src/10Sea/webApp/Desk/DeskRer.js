var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "./../../core/mcrv/AkBaseRenderer", "./../../../01core/Util", "./../../../01core/Ioc", "./../../core/IPage"], function (require, exports, baseRerFile, utilFile, iocFile, iPageFile) {
    "use strict";
    var DeskRer = (function (_super) {
        __extends(DeskRer, _super);
        function DeskRer() {
            _super.apply(this, arguments);
            this.AkName = "DeskRer";
            this.$body = null;
            this.$row = null;
            this._classNames = ["panel-primary", "panel-warning", "panel-success", "panel-info", "panel-danger", "panel-default"];
        }
        DeskRer.prototype.getC = function () {
            return utilFile.Core.Util.Cast(this.C);
        };
        DeskRer.prototype.init = function () {
            this.$body = $('<div class="panel-body" style="margin-top:20px"></div>');
            this.$JObj.append(this.$body);
        };
        DeskRer.prototype.loadOnePanel = function (count, rowcount) {
            var rowIndex = ".row-" + rowcount.toString();
            var $row = $("<div class='col-md-12 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
                "<div class='panel-heading clear' s><h3 class='panel-title'></h3></div>" +
                "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
            this.$body.find(rowIndex).append($row);
        };
        DeskRer.prototype.loadThreePanel = function (count, rowcount) {
            var rowIndex = ".row-" + rowcount.toString();
            var $row = $("<div class='col-md-3 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
                "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
                "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
            this.$body.find(rowIndex).append($row);
        };
        DeskRer.prototype.loadSixPanel = function (count, rowcount) {
            var rowIndex = ".row-" + rowcount.toString();
            var $row = $("<div class='col-md-6 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
                "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
                "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
            this.$body.find(rowIndex).append($row);
        };
        DeskRer.prototype.loadNinePanel = function (count, rowcount) {
            var rowIndex = ".row-" + rowcount.toString();
            var $row = $("<div class='col-md-9 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
                "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
                "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
            this.$body.find(rowIndex).append($row);
        };
        DeskRer.prototype.loadRow = function (count) {
            var rowIndex = "row-" + count.toString();
            var $row = $("<div class='row " + rowIndex + "'></div>");
            this.$body.append($row);
        };
        DeskRer.prototype.getData = function (res) {
            var _this = this;
            this.getC().loadPanelBoards(res);
            for (var i = 0; i < res.length; i++) {
                var classname = ".ACT-COL-" + i;
                var $row = this.$JObj.find(classname);
                var title = res[i].Title;
                $row.find(".panel").addClass(this._classNames[i % 6]);
                $row.find(".panel-title").attr("paneltitle", res[i].DisplayName);
                $row.find(".panel-title").html(title + "<span class='pull-right'><i class='icon-angle-up ACT-PANEL-SHRINK'>&nbsp;&nbsp;&nbsp;</i><i class='icon-refresh ACT-PANEL-REFRESH'>&nbsp;&nbsp;</i></span>");
                if (res[i].Type == "MvcForm") {
                    var url = res[i].Url;
                    $row.find(".ACT-PANEL-REFRESH").attr("url", url);
                    this.getC().getpanelbody($row, url);
                }
                if (res[i].Type == "SeaForm") {
                    var mrcname = res[i].Url;
                    $row.find(".ACT-PANEL-REFRESH").attr("mrc", mrcname);
                    var $dom = $row.find(".panel-body");
                    $dom.html("<span style='color:red;'>正在载入数据....</span>");
                    iocFile.Core.Ioc.Current().FetchAsyInstance(mrcname, iPageFile.PageFace, function (a) {
                        $dom.clear(true);
                        a.init($dom);
                    }, function () {
                        alert("异常");
                    });
                }
                $.AKjs.AppGet().bindPageEvent($row);
            }
            this.$JObj.find(".ACT-PANEL-SHRINK").unbind("click").bind("click", function () {
                var _$this = $(this);
                if (_$this.hasClass("icon-angle-up")) {
                    _$this.removeClass("icon-angle-up");
                    _$this.addClass("icon-angle-down");
                    _$this.parents().next("#panel-body-data").removeClass("ask-desk-panel");
                }
                else if (_$this.hasClass("icon-angle-down")) {
                    _$this.removeClass("icon-angle-down");
                    _$this.addClass("icon-angle-up");
                    _$this.parents().next("#panel-body-data").addClass("ask-desk-panel");
                }
            });
            this.$JObj.find(".ACT-PANEL-REFRESH").unbind("click").bind("click", function () {
                var _$this = $(this);
                var $body = _$this.parents().next("#panel-body-data");
                $body.empty();
                var href = _$this.attr("url");
                if (href != null) {
                    _this.getC().refreshpanelbody($body, href);
                }
                else {
                    var mrcname = _$this.attr("mrc");
                    iocFile.Core.Ioc.Current().FetchAsyInstance(mrcname, iPageFile.PageFace, function (a) {
                        $body.clear(true);
                        a.init($body);
                    }, function () {
                        alert("异常");
                    });
                }
            });
        };
        ;
        DeskRer.prototype.fillBodyData = function ($dom, res) {
            $dom.find(".panel-body").append(res);
            $dom.find(".panel-body").click(function () {
                var _$btn = $(this).parent().find(".ACT-PANEL-SHRINK");
                // alert(_$btn.length);
                if (_$btn.hasClass("icon-angle-up")) {
                    _$btn.removeClass("icon-angle-up");
                    _$btn.addClass("icon-angle-down");
                    $(this).removeClass("ask-desk-panel");
                }
            });
        };
        ;
        DeskRer.prototype.refreshBodyData = function ($dom, res) {
            $dom.append(res);
            $dom.click(function () {
                var _$btn = $(this).parent().find(".ACT-PANEL-SHRINK");
                // alert(_$btn.length);
                if (_$btn.hasClass("icon-angle-up")) {
                    _$btn.removeClass("icon-angle-up");
                    _$btn.addClass("icon-angle-down");
                    $(this).removeClass("ask-desk-panel");
                }
            });
        };
        ;
        return DeskRer;
    }(baseRerFile.AkBaseRenderer));
    exports.DeskRer = DeskRer;
});
