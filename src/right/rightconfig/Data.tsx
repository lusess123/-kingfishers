import dataFile = require("./../07data/data");
export namespace Relation {

    export interface IMenuOrg {
        Menu: string;
        Org: string;
    }

    export interface IRoleMenu {
        Role: string;
        Menu: string;
    }

    export interface IRoleUser {
        Role: string;
        User: string;
    }
    export interface IGroup {
        GroupID: string;
        GroupName: string;
    }
}