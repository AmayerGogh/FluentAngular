import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';

import { EventBusService } from '../common/services/event-bus.service';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { AppSideMenuComponent } from '../left-nav/app-side-menu/app-side-menu.component';
@NgModule({
    imports: [
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        TopMenuComponent,
        WorkspaceComponent,
        TopMenuComponent,
        //FooterInfoComponent,
        AppSideMenuComponent
    ],
    providers: []
})
export class WorkspaceModule { }
