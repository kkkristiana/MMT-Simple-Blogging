import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { BlogPost, BlogPostStatus } from '../blogpost.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-blogpost-add',
  templateUrl: './blogpost-add.component.html',
  styleUrls: ['./blogpost-add.component.css']
})
export class BlogpostAddComponent implements OnInit {
  @Input() post = new BlogPost(undefined, undefined, undefined, undefined, undefined, undefined, undefined)

  @Output() postEdited = new EventEmitter<BlogPost>();

  editedPost: BlogPost

  isActive = true

  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() {
    this.reset();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (!this.post) {
      this.post = new BlogPost(undefined, undefined, undefined, undefined, undefined, undefined, undefined)
      this.reset()
    }
    if (changes['post'].currentValue !== changes['post'].previousValue) {
      this.reset()
    }
  }

  onSubmit() {
    this.postEdited.emit({ ...this.editedPost})
  }

  onToggle(event: any) {
    if (this.editedPost.status === BlogPostStatus.ACTIVE) {
      this.editedPost.status = BlogPostStatus.INACTIVE
    } else if (this.editedPost.status === BlogPostStatus.INACTIVE) {
      this.editedPost.status = BlogPostStatus.ACTIVE
    } else {
      this.editedPost.status = BlogPostStatus.INACTIVE
    }
  }

  reset() {
    this.editedPost = { ...this.post }
    this.form.resetForm(this.editedPost)
  }
}
