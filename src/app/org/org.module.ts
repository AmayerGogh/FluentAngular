import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { orgRoutes } from './org.routes';
import { OrgMngComponent } from './org-mng/org-mng.component';
import { OrgComponent } from './org.component';

@NgModule({
  imports: [
    CommonModule,  
    RouterModule.forChild(orgRoutes)
  ],
  declarations: [
    OrgComponent,
    OrgMngComponent
  ],
  providers: [
    
  ]
})
export class OrgModule { }
