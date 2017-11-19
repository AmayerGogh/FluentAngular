export class Menu{
    id: number;
    name: string;
    isOpen: boolean;
    icon:string;
    children:Array<MenuDetail>;
}

export class MenuDetail{
   
    name:string;
    icon:string;
    route:string;
        // { name: "组织架构",icon:'fa-male',route:'org/orgmng'},
        // { name: "用户管理",icon:'fa-bug',route:'user/usertable/page/1' },
        // { name: "角色管理",icon:'fa-bus',route:'role/roletable/page/1' },
        // { name: "权限管理",icon:'fa-send',route:'permission/permissiontable/page/1' }
    
}