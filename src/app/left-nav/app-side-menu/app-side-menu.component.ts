import { Component, OnInit, ElementRef, HostListener, Input } from '@angular/core';
import { EventBusService } from '../../common/services/event-bus.service';
import { CommonModule } from '@angular/common';
import { Menu,MenuDetail } from '../../models/menu';
import { NgForOf } from '@angular/common';
@Component({
    selector: 'app-side-menu',
    templateUrl: './app-side-menu.component.html',
    styleUrls: ['./app-side-menu.component.scss']
})
export class AppSideMenuComponent implements OnInit {
    public menus = [
        {
            id: "1",
            name: "首页",
            isOpen: false,
            icon:'fa-home',         
        },
        {
            id: "2",
            name: "Styles",
            isOpen: false,
            icon:'fa-home',
            children: [
                { name: "Colors",icon:'fa-male',route:'org/orgmng'},
                { name: "Icons",icon:'fa-bug',route:'user/usertable/page/1' },
                { name: "Animation",icon:'fa-bus',route:'role/roletable/page/1' },
                { name: "Acrylic",icon:'fa-send',route:'permission/permissiontable/page/1' },
                { name: "Typography",icon:'fa-send',route:'permission/permissiontable/page/1' },
                { name: "Fonts",icon:'fa-send',route:'permission/permissiontable/page/1' },
                { name: "Styling Components",icon:'fa-send',route:'permission/permissiontable/page/1' },
                { name: "Custom Theme",icon:'fa-send',route:'permission/permissiontable/page/1' },
            ]
        },
        {
            id: "3",
            name: "Components",
            isOpen: false,
            icon:'fa-magic',
            children: [
                { name: "Animate",icon:'fa-mobile',route:'post/posttable/page/1' },
                { name: "AppBarButton",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "AutoSuggestBox",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "Button",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "CheckBox",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "ColorPicker",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "CommandBar",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "ContentDialog",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "DatePickers",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "DropDownMenu",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "FlipView",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "Flyout",icon:'fa-minus',route:'comment/commenttable/page/1' },
                { name: "Button",icon:'fa-minus',route:'comment/commenttable/page/1' },

            ]
        },
        {
            id: "4",
            name: "系统监控",
            isOpen: false,
            icon:'fa-wrench',
            children: [
                { name: "系统状态",icon:'fa-line-chart',route:'sys/sysmonitor' },
                { name: "高德地图",icon:'fa-map-marker',route:'map/map' }
            ]
        }
    ];

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