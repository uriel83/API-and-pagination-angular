import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-post',
  templateUrl: './print-post.component.html',
  styleUrls: ['./print-post.component.css']
})
export class PrintPostComponent implements OnInit {
@Input() post;
moreInfo=false;
  constructor() { }

  ngOnInit(): void {
  }
  userClick(){
    if(this.moreInfo){
      this.moreInfo = false;
    } 
    else{
      this.moreInfo=true;
    }
  }

}
