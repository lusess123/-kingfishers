import baseRerFile = require("./../../core/mcrv/AkBaseRenderer");
import urlFile = require("./../../../01core/Url");
import cFile = require("./UserDocumentCenterCer");
import utilFile = require("./../../../01core/Util");

export class UserDocumentCenterRer extends baseRerFile.AkBaseRenderer {
    public getCer(): cFile.UserDocumentCenterCer {
        return utilFile.Core.Util.Cast<cFile.UserDocumentCenterCer>(this.C);
    }
    public AkName = "UserDocumentCenterRer";
        public $MainDiv = null;
        public UserId = "";
        public Key = null;
        public PageObj = null;
        public initR (userId) {
            this.UserId = userId;
            this.$MainDiv = $("<div></div>");
            this.$JObj.append(this.$MainDiv);
        };

        public loadModuleXmlMainR (res) {
            var _this = this;
            res.FunAfterInit = function (page) {
                _this.PageObj = page;
                page.FormObj.SetCustomSearchDataFun = _this.SetCusomSearchData();
                page.AfterSearchCustomFun = _this.AfterSearchCustom();
                var $img = _this.$MainDiv.find(".ACT-FOLDER");
                $img.off("dblclick").on("dblclick", function () {
                    _this.Key = $(this).attr("key");
                    page.FormObj.searchDataList(1);
                });
                _this.getCer().getFilePathC({ FID: res.PID, UserId: res.UserId });
            };
            this.$MainDiv.AtawListPage(res);
        }

        public AfterSearchCustom () {
            var _this = this;
            return function () {
                var $img = _this.$MainDiv.find(".ACT-FOLDER");
                $img.off("dblclick").on("dblclick", function () {
                    _this.Key = $(this).attr("key");
                    _this.PageObj.FormObj.searchDataList(1);
                });
            }
        };

        public SetCusomSearchData () {
            var _this = this;
            return function (ds) {
                var _dt = ds["View_SNS_ALLDocuments_Search"] = [];
                var _row = { PID: _this.Key, UserId: _this.UserId };
                _dt.push(_row);
                _this.getCer().getFilePathC({ FID: _this.Key, UserId: _this.UserId });
                return ds;
            }
        }
        //此函数来自于Scripts\sea\sns\documentCenter\documentControl\AKDocumentControlRenderer.js中的createFilePathR，可提取共用，注意请求后台的参数不一样
        public createFilePathR (res) {
            this.$MainDiv.find(".ACT-FILE-PATH").remove();
            var $filePath = $('<ol class="breadcrumb ACT-FILE-PATH"></ol>');
            var $root:any;
            if (res && res.length > 0) {
                var $li;
                var _this = this;
                $root = $('<li><a href="javascript:void(0)">根目录<a></li>');
                $root.find("a").click(function () {
                    _this.Key = "0";
                    _this.PageObj.FormObj.searchDataList(1);
                })
                $filePath.append($root);
                for (var i = 0; i < res.length; i++) {
                    if (i === res.length - 1) {
                        $li = $('<li class="active" >' + res[i].NAME.toString().subByte(10, '...') + '</li>');
                    } else {
                        $li = $('<li><a href="javascript:void(0)">' + res[i].NAME.toString().subByte(10, '...') + '<a></li>');
                        _this.Key = res[i].FID;
                        _this.UserId = res[i].CREATE_ID;
                        // _this.Key和_this.UserId提供给 $li.find("a").click用
                        $li.find("a").click(function () {
                            _this.PageObj.FormObj.searchDataList(1);
                        })
                    }
                    $filePath.append($li);
                }
            } else {
                var $root:any = $('<li class="active">根目录</li>');
                $filePath.append($root);
            }
            $filePath.insertBefore(this.$MainDiv.find(".formTypeBtnBar"));
        }public 
}