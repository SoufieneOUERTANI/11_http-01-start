import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http : HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post('https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/posts.json', postData)
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
    this.http.get('https://ng-complete-guide-e9292-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .subscribe(responseData => console.log(responseData));
  }
}
