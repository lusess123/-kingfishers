import cFile = require("./TodoCer");
import mFile = require("./TodoMer");
import rFile = require("./TodoRer");
import mrcFile = require("./../BasePageMRC");
import iocFile = require("./../../../01core/Ioc");
import iPageFile = require("./../../core/IPage");

export class TodoMRC extends mrcFile.BasePageMRC<cFile.TodoCer, mFile.TodoMer, rFile.TodoRer>
{
    public constructor() {
        var cer: cFile.TodoCer = new cFile.TodoCer();
        var mer: mFile.TodoMer = new mFile.TodoMer();
        var rer: rFile.TodoRer = new rFile.TodoRer();
        super(cer, mer, rer);
    }
}
iocFile.Core.Ioc.Current().RegisterType("Todo", iPageFile.PageFace, TodoMRC);