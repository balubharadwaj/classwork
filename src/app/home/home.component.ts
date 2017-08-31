import { Component, OnInit } from '@angular/core';
import { CleanBlogService } from '../service/clean-blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts;
  constructor(public clean:CleanBlogService) {
    this.getAllPost();
  }

  ngOnInit() {
  }

  getAllPost(){
    this.clean.getPosts()
    .then(data => {
      this.posts = data;
    })
  }

}
