import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./DeskCer");
import utilFile = require("./../../../01core/Util");

import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class DeskRer extends baseRerFile.AkBaseRenderer {
    public AkName = "DeskRer";
    public $body = null;
    public $row = null;

    public getC(): cFile.DeskCer {
        return utilFile.Core.Util.Cast<cFile.DeskCer>(this.C);
    }

    public init() {
        this.$body = $('<div class="panel-body" style="margin-top:20px"></div>');
        this.$JObj.append(this.$body);


    }

    public loadOnePanel(count, rowcount) {
        var rowIndex = ".row-" + rowcount.toString();
        var $row = $("<div class='col-md-12 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
            "<div class='panel-heading clear' s><h3 class='panel-title'></h3></div>" +
            "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
        this.$body.find(rowIndex).append($row);
    }
    public loadThreePanel(count, rowcount) {
        var rowIndex = ".row-" + rowcount.toString();
        var $row = $("<div class='col-md-3 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
            "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
            "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
        this.$body.find(rowIndex).append($row);
    }
    public loadSixPanel(count, rowcount) {
        var rowIndex = ".row-" + rowcount.toString();
        var $row = $("<div class='col-md-6 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
            "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
            "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
        this.$body.find(rowIndex).append($row);
    }
    public loadNinePanel(count, rowcount) {
        var rowIndex = ".row-" + rowcount.toString();
        var $row = $("<div class='col-md-9 ACT-COL-" + count.toString() + "' style='padding:1em'><div class='panel' style='margin-top:-18px'>" +
            "<div class='panel-heading clear' ><h3 class='panel-title'></h3></div>" +
            "<div class='panel-body ' id='panel-body-data' ></div></div></div>");
        this.$body.find(rowIndex).append($row);
    }
    public loadRow(count) {
        var rowIndex = "row-" + count.toString();
        var $row = $("<div class='row " + rowIndex + "'></div>");
        this.$body.append($row);
    }

    public _classNames = ["panel-primary", "panel-warning", "panel-success", "panel-info", "panel-danger", "panel-default"];
    public getData(res) {
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

                iocFile.Core.Ioc.Current().FetchAsyInstance<iPageFile.IPage>(
                    mrcname, iPageFile.PageFace, (a) => {
                        $dom.clear(true);
                        a.init($dom);

                    }, () => {
                        alert("异常");
                    }
                );
               
            }
            $.AKjs.AppGet().bindPageEvent($row);
        }

        this.$JObj.find(".ACT-PANEL-SHRINK").unbind("click").bind("click", function () {
            var _$this = $(this);
            if (_$this.hasClass("icon-angle-up")) {
                _$this.removeClass("icon-angle-up");
                _$this.addClass("icon-angle-down");
                _$this.parents().next("#panel-body-data").removeClass("ask-desk-panel");
            } else if (_$this.hasClass("icon-angle-down")) {
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
            } else {
                var mrcname = _$this.attr("mrc");

                iocFile.Core.Ioc.Current().FetchAsyInstance<iPageFile.IPage>(
                    mrcname, iPageFile.PageFace, (a) => {
                        $body.clear(true);
                        a.init($body);

                    }, () => {
                        alert("异常");
                    }
                );
            }
        });


    };

    public fillBodyData($dom, res) {
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

    public refreshBodyData($dom, res) {
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
}

