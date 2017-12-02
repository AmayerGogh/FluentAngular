import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
@Component({
	selector: 'workspace',
	templateUrl: './workspace.component.html',
	styleUrls: [
		'./workspace.component.scss',
		
	],
	
})
export class WorkspaceComponent implements OnInit {
	public isCollapsed:boolean=false;
	constructor() {
	}

	ngOnInit() {
		
	}

	private toggleMenuStatus(isCollapse: boolean): void {
		this.isCollapsed=isCollapse;
	}
}
