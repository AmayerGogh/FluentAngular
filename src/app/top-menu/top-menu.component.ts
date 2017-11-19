import { Component, OnInit, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  private toggleBtnStatus:boolean=false;
  public showTopMenu:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }

  public onTogglerClick(event):void{
    this.toggleBtnStatus=!this.toggleBtnStatus;
  
  }
}
