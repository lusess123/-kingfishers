import pageCerFile = require("./../BasePageCer");
import mFile = require("./TestMer");
import rFile = require("./TestRer");
import utilFile = require("./../../../01core/Util");
export class TestCer extends pageCerFile.BasePageCer {
 public AkName = "testcer";
  public getSeaName() {
    return this.getMrcName(this.getM().SeaName);
 };
 public getM(): mFile.TestMer {
     return utilFile.Core.Util.Cast<mFile.TestMer>(this.M);
 };
public init () {
    this.R.initR();
};

public getMrcName(name) {
    var _name = name.toLowerCase();
    var _l = _name.length;
    if (_l > 3 && _name.substr(_l - 3) == "mrc") {

    }
    else {
        _name = _name + "mrc";
    }
    return _name;
};

  public setModel(p1, p2, p3) {

      this.getM().SeaName = p1;
};


public clearPage() {
    $.AKjs.AppGet().hideNavi();
    $.AKjs.AppGet().clearWindow();
};

}