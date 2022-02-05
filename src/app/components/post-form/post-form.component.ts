import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post>;
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(
    private postService: PostService
  ) { 
    this.currentPost = {} as Post;
    this.newPost = new EventEmitter();
    this.isEdit = false;
  }

  ngOnInit(): void {
  }

  addPost(title: string, body: string) {
    if(!title || !body) {
      alert('please add post')
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPost.emit(post);
      })
    }    
  }

  updatePost() {
    console.log('update post')
  }
}
