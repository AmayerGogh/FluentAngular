import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/user';
import  {Menu} from '../models/menu'
@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: User = new User();

	public menus2:Menu[]=[
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
	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {

	}

	ngOnInit() {

	}

	login() {
		this.router.navigateByUrl("workspace");
	}
	forgetPwd() {
		
	}
}
