
import pageCerFile = require("./../BasePageCer");
import mFile = require("./TodoMer");
import rFile = require("./TodoRer");
import utilFile = require("./../../../01core/Util");
export class TodoCer extends pageCerFile.BasePageCer {
   public AkName = "todocer";
   public Data = null;
   public LayOutName = "VTV";
   public getR(): rFile.TodoRer {
       return utilFile.Core.Util.Cast<rFile.TodoRer>(this.R);
   };
   public getM(): mFile.TodoMer {
       return utilFile.Core.Util.Cast<mFile.TodoMer>(this.M);
   };
public initC = function () {
    this.R.initR();
};

public loadToDoData () {
    var _this = this;
    _this.getM().getToDoData(function (res) {
        _this.getR().initToDoWork(res);
    });
};

public loadTopMyWork($dom) {
    var _this = this;
    _this.getM().getTopMyWork(function (res) {
        var _dt = res.Data["TopMyWork"];
        if (_dt.length > 0) {
            _this.getR().setTopMyWork(_dt[0]["SACT_SUBCONTENT"]);
        }
    });
};
public setModel (p1, p2, p3) {
};

public loadMenu () {
};

  public clearPage() {
    $.AKjs.AppGet().hideNavi();
};

}