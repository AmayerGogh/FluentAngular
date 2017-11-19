import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'org-mng',
  templateUrl: './org-mng.component.html',
  styleUrls: ['./org-mng.component.scss'],
 
})
export class OrgMngComponent implements OnInit {


    public orgName: string;
    public orgCode: string;
    public disabled: boolean = true;
    public isNew:boolean=false;

	constructor() {

	}

	ngOnInit() {
		
    }

    // public confirmDelete():void {
    //     this.confirmationService.confirm({
    //         message: '确定要删除吗？',
    //         accept: () => {
    //             console.log("删除节点");
    //         }
    //     });
    // }
    
   
}
