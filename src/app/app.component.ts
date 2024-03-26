import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts : Post[] = [];

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{name : string}>('https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
    // The post request is sent only when you subscribe
    .subscribe(responseData => console.log(responseData))
    ;
  }
  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts(){
    this.http.get<{[key : string] : Post}>('https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .pipe(map((responseData
      //  : {[key : string] : Post} 
       ) => {
      const postsArray : Post[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push(
            {...responseData[key], id:key}  
          )
        }
      }
      return postsArray;
    }))
    .subscribe(
      (posts) => this.loadedPosts = posts
    );
  }
}
