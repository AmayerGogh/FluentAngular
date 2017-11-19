import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { EventBusService } from '../../common/services/event-bus.service';
import { CommonModule } from '@angular/common';
import { Menu,MenuDetail } from '../../models/menu';

@Component({
    selector: 'app-side-menu',
    templateUrl: './app-side-menu.component.html',
    styleUrls: ['./app-side-menu.component.scss']
})
export class AppSideMenuComponent implements OnInit {


    public menus:Menu[]=[
        {
            id: 1,
            name: "权限管理",
            isOpen: false,
            icon:'fa-home',
            children: [
                { name: "组织架构",icon:'fa-male',route:'org/orgmng'},
                { name: "用户管理",icon:'fa-bug',route:'user/usertable/page/1' },
                { name: "角色管理",icon:'fa-bus',route:'role/roletable/page/1' },
                { name: "权限管理",icon:'fa-send',route:'permission/permissiontable/page/1' }
            ]
        },
        {
            id: 2,
            name: "内容管理",
            isOpen: false,
            icon:'fa-magic',
            children: [
                { name: "文章管理",icon:'fa-mobile',route:'post/posttable/page/1' },
                { name: "评论管理",icon:'fa-minus',route:'comment/commenttable/page/1' }
            ]
        },
        {
            id: 3,
            name: "系统监控",
            isOpen: false,
            icon:'fa-wrench',
            children: [
                { name: "系统状态",icon:'fa-line-chart',route:'sys/sysmonitor' },
                { name: "高德地图",icon:'fa-map-marker',route:'map/map' }
            ]
        }
    ]





  

    public isCollapse: boolean = false;

    constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {
    }

    ngOnInit() {
        this.eventBusService.topToggleBtn.subscribe(value => {
            this.toggleMenuAll(value);
        });
      
    }

    private toggleMenuAll(isCollapse: boolean): void {
        this.isCollapse = isCollapse;
        this.menus.forEach(item => {
            item.isOpen = false;
        })
    }

    public toggleMenuItem(event, menu): void {
        menu.isOpen = !menu.isOpen; 
        //折叠状态下只能打开一个二级菜单层
        if (this.isCollapse) {
            let tempId = menu.id;
            this.menus.forEach(item => {
                if (item.id !== tempId) {
                    item.isOpen = false;
                }
            });
        }
    }

    @HostListener('body:click', ['$event'])
    public onBodyClick(event): void {
        if (this.isCollapse && (event.clientX > 75)) {
            this.menus.forEach(item => {
                item.isOpen = false;
            });
        }
    }
}