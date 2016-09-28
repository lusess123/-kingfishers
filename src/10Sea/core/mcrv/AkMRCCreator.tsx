import akBaseFile = require("./../AkBase");
import cFile = require("./AkBaseController");
import mFile = require("./AkBaseModel");
import rFile = require("./AkBaseRenderer");
import akFile = require("./../../AkJs");

export class AkMRCCreator<CT extends cFile.AkBaseController, MT extends mFile.AkBaseModel, RT extends rFile.AkBaseRenderer > extends akBaseFile.AkBase {
    public C: CT;
    public M: MT;
    public R: RT;

    public constructor(c: CT, m: MT, r: RT) {
        super();
        this.C = c;
        this.M = m;
        this.R = r;

        this.creatorSelf();
    }

    private creatorSelf() {
        if (this.R)
            this.R.C = this.C;
        if (this.C) {
            this.C.M = this.M;
            this.C.R = this.R;
        }
        if (this.M)
            this.M.C = this.C;
    };

    public dispose() {
        akFile.DisposeObj(this.R);
        akFile.DisposeObj(this.C);
        akFile.DisposeObj(this.M);
    }
   
};

