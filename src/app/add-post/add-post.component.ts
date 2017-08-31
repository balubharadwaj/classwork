import { Component, OnInit } from '@angular/core';
import { CleanBlogService } from '../service/clean-blog.service';
// import { FormGroup, FormControl, Validators, FormBuilder,NgForm }  from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postData:any = {};
  constructor(public CleanBlogService:CleanBlogService) { 

  }

  addPostData(){
    // console.log(this.postData);
    this.CleanBlogService.addPost(this.postData)
    .then(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
