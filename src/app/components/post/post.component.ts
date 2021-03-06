import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from './../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
  ) {
    this.post = {} as Post;
  }

  ngOnInit(): void {
    // let id? = +this.route.snapshot.paramMap.get('id');
    const { id } = this.route.snapshot.params;

    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    })
  }

}
