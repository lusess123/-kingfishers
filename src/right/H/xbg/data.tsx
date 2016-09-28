// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import dataFile = require("./../../../07data/data");
export namespace Role {
    export interface IRoleData {
        RoleID?: string; //角色Id
        RoleSign?: string; //角色标识
        RoleName?: string;  //角色名字
        FControlUnitName?: string; //组织机构
        Description?: string;  //描述
        FControlUnitID?: string;//组织机构Id
        Date: string;
    }
    export interface ISearchData {
        RoleSign: string;
        RoleName: string;
    }
    export interface RolePagerListData extends dataFile.Right.PagerListData<IRoleData> {
    }
}
