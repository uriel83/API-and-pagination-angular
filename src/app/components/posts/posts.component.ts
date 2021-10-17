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
  posts: post;

  constructor(private servicPost:PostService, private router: Router ) { }

  ngOnInit(): void {
    this.postGet();
  }
  postGet() : void{
    
    this.servicPost.getAllPosts().subscribe((data:post) =>{
     
      this.posts= data;
      
      


    
   })
   
   
   
 }

}
