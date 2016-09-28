export interface IPage {
    RootElement: IRootElement;
}

export interface IRootElement {
    GroupName?: string;
}

export enum ControlType {

    None = 0,
    String = 1,
    Date = 2,
    Combo = 3

}

export interface BaseElement {
    Id: string;
    Name: string;
    DisplayName: string;

}

export interface BaseElementUI extends BaseElement {
    ControlType: ControlType;
}

export interface SimpleElementUI extends IRootElement, BaseElementUI {
    AttributeElementUIList?: AttributeElementUI[];
}
export interface AttributeElementUI extends BaseElementUI {
}


export interface CompositeElementUI extends IRootElement, BaseElement {
    AttributeElementUIList?: AttributeElementUI[];
    CompositeElementUIList?: CompositeElementUI[];
    SimpleElementUIList?: SimpleElementUI[];
    GroupInfoDict?: GroupInfoDict;
}

export interface GroupInfoDict
{
     [name:string]:GroupInfo;
}

export class GroupInfo
{
    Name: string;
    Ids: string[];

}