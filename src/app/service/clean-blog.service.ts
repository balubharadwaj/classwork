import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class CleanBlogService {
  data;
  constructor(public Http:Http){

  }

  getPosts(){
    return new Promise(resolve => {
      this.Http.get('http://localhost:8080/post')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

  addPost(data){
    console.log(data);
    return new Promise(resolve => {
      this.Http.post('http://localhost:8080/post', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err =>{
          resolve(err);
        });
    });
  }

}


