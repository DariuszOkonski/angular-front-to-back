import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
  }

  addPost(title: string, body: string) {
    if(!title || !body) {
      alert('please add post')
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        console.log(post);
      })
    }    
  }
}
