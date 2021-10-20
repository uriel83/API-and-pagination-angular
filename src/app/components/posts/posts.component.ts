import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from 'src/app/models/post.mosel';

import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postToPrint_=true;
  posts: post[]=[];
  index=0;
  postsOnPage : number;
  // enterPostsOnPage :number;
  postToPrint:post[]=[];
  next =false;
  backe=false;
  lengthPosts:number;
  
  constructor(private servicPost:PostService, private router: Router ) { }

  ngOnInit(): void {
    this.postGet();
  }
  postGet() : void{
    
    this.servicPost.getAllPosts().subscribe((data:post[]) =>{
      data.forEach(e => {
        this.posts.push(e);
    });
   })
 }

  printPost(){
    this.postToPrint_=false;
    for (let i = 0; i < this.postsOnPage; i++) {
      if (this.posts[this.index]) {    
        this.postToPrint[i]=this.posts[this.index];
        this.index++;
        if (this.index< this.posts.length) {
          this.next=true;
        }else{
          this.next=false;
        }
        if (this.index>this.postsOnPage) {
          
          this.backe=true
        }else{
          this.backe=false;
        }
        
        }
        else{
          this.postToPrint.splice(i,this.postsOnPage);
          this.index++;

        }
      
    }
    
    
  }
  nextPage(){ 
      this.printPost()
      
    }
  backePage(){ 
  
      this.index= this.index-(this.postsOnPage*2);
      this.printPost()
    }
}
