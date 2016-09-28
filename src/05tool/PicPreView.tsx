import utilFile = require("./../01core/Util");
export class PicPreView
{
    private static RanNumber: number = 0;

    private static GetRanNumber() {
        PicPreView.RanNumber++;
        return PicPreView.RanNumber;
    }
    public static showImageByDom(_$this:JQuery,src:string)
    {
        if ($("#append_parent").length == 0) {
            $("body").append($('<div id="append_parent"></div>'));
        }


        if (!window["_ACT_imgupload"]) {
            window["_ACT_imgupload"] = function (dom) {
                var _$dom = $(dom);
                var _$pic = _$dom.parent().parent().parent().find("#imgzoom_zoom");
                if (_$pic.length > 0) {
                    window.open(src);
                }
            }
        }
        if (!window["_ACT_imgroate"]) {
            window["_ACT_imgroate"] = function (dom) {
                var _$dom = $(dom);
                var _$pic = _$dom.parent().parent().parent().find("#imgzoom_zoom");
                if (_$pic.length > 0) {
                    utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/rotate/jquery.rotate.js"], function () {
                        var _raa: any = (_$pic.data("raval"));
                        var _ra: number = _raa;
                        if (!_ra) _ra = 0;
                        if (_$pic.attr("isleft") != "0") {
                            _$pic.css('rotate', _ra + 90);
                            _$pic.data("raval", _ra + 90);
                        }
                        else {
                            _$pic.css('rotate', _ra - 90);
                            _$pic.data("raval", _ra - 90);
                        }
                        return false;
                    });
                }
            }
        }


       // var _$this = $(e.target);
        var n = PicPreView.GetRanNumber().toString();
        utilFile.Core.Util.AsyncJs(["/AtawStatic/lib/03Extend/imgdiscuz/js/common.js",
            "/AtawStatic/lib/03Extend/imgdiscuz/js/forum_viewthread.js",
            "/AtawStatic/lib/03Extend/imgdiscuz/js/common_extra.js",
            "/AtawStatic/lib/03Extend/imgdiscuz/img/style_1_forum_viewthread.css"], () => {
            //window["zoomstatus"] = parseInt("1");
            //window["imagemaxwidth"] = '500';
                window["IMGDIR"] = 'AtawStatic/lib/03Extend/imgdiscuz/img/',
                    window["VERHASH"] = 'zfhf', window["JSPATH"] = 'AtawStatic/lib/03Extend/imgdiscuz/js/';

            _$this.attr("zoomfile", src);
            _$this.attr("file", src);
            _$this.attr("aid", n);

            window["aimgcount"] = new Array();
            window["aimgcount"][1000] = [n];
            window["attachimggroup"](1000);
            window["attachimgshow"](1000);
            var aimgfid = 0;

            window["zoom"](_$this[0], src, 0, 0, 0);
        });
    }
}