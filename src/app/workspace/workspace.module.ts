import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http} from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TopMenuComponent } from '../top-menu/top-menu.component';
import { WorkspaceComponent } from './workspace.component';
import { workspaceRoutes } from './workspace.routes';

import { EventBusService } from '../common/services/event-bus.service';
import { LeftNavComponent } from '../left-nav/left-nav.component';
import { AppSideMenuComponent } from '../left-nav/app-side-menu/app-side-menu.component';
@NgModule({
    imports: [
       
    
       
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(workspaceRoutes)
    ],
    exports: [],
    declarations: [
        TopMenuComponent,
        WorkspaceComponent,
        TopMenuComponent,
        LeftNavComponent,
      
        AppSideMenuComponent
          //FooterInfoComponent,
    ],
    providers: [EventBusService]
})
export class WorkspaceModule { }
