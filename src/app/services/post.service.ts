import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseurl ='https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  
  getAllPosts():Observable<any>{
    return this.httpClient.get( this.baseurl)

}

  
}
