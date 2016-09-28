// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import treeSingleNaviFile = require("./TreeSingleNavi");
import iocFile = require("./../../01core/Ioc");
import basecolFile = require("./../00core/baseCol");
import BaseColReact = basecolFile.Core.BaseColReact;
import BaseColVm = basecolFile.Core.BaseColVm;
import BaseColProps = basecolFile.Core.BaseColProps;
import BaseColStates = basecolFile.Core.BaseColStates;
import BaseColAction = basecolFile.Core.BaseColAction;

export class TreeSingleNaviVm extends treeSingleNaviFile.TreeSingleNavi.TreeSingleNaviVm  {
  
    protected pIsMultiSelect: boolean = true ;
   
   
}

iocFile.Core.Ioc.Current().RegisterType("TreeMultiNaviVm", BaseColVm, TreeSingleNaviVm);