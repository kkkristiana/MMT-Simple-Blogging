import { Component, OnInit, ViewChild } from '@angular/core';
import BLOGPOSTS from '../blogpost-mock-data'
import { BlogPost, BlogPostStatus } from '../blogpost.model';
import { MatTableDataSource, MatSort, MatSlideToggle, MatCheckbox, MatIcon} from '@angular/material';
import { BehaviorSubject } from 'rxjs/Rx';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  blogPosts = BLOGPOSTS
  selectedBlogPost: BlogPost

  isAddingNewPost = false
  showingLast15 = true
  showingOnlyActive = true

  selectionTitles = ['Last 15 posts', 'All']

  displayedColumns = ['createdAtDate', 'title', 'text', 'status', 'edit', 'delete']
  dataSource: MatTableDataSource<BlogPost>
  constructor() { }

  ngOnInit() {
        this.sortPostsByDate()
        this.dataSource = new MatTableDataSource(this.getLast15ActivePosts())

        // const last15 = new BehaviorSubject<BlogPost[]>(this.getLast15ActivePosts())
  }

  sortPostsByDate() {
    this.blogPosts = this.blogPosts.sort((lhs, rhs) => {
      if (lhs.createdAtDate < rhs.createdAtDate) {
        return 1;
      } else if (lhs.createdAtDate > rhs.createdAtDate) {
        return -1;
      }
      return 0;
    })
  }

  addNewPost() {
    this.isAddingNewPost = true
  }

  editPost(post: BlogPost) {
    if (post) {
      if (this.isAddingNewPost) {
        this.blogPosts.push(post)
        this.sortPostsByDate()
        this.filterPosts()
      } else {
        const index = this.blogPosts.findIndex(prod => post.id === post.id);
        this.blogPosts.splice(index, 1, post);
        this.sortPostsByDate()
        this.filterPosts()
      }
    }
    this.selectedBlogPost = undefined;
    this.isAddingNewPost = false;
  }

  select(blogPost: BlogPost) {
    this.selectedBlogPost = blogPost
  }

  onToggle(event: any) {
    this.filterPosts()
  }

  onCheckChange(event: any) {
    this.filterPosts()
  }

  onDelete(id: number) {
    console.log('deleting')
      if(confirm("Are you sure you want to delete this post?")) {
        const index = this.blogPosts.findIndex(bp => bp.id === id)
        this.blogPosts.splice(index, 1)
        this.dataSource = new MatTableDataSource(this.getAllPosts())
      }
  }

  filterPosts() {
    if (!this.showingLast15 && !this.showingOnlyActive) {
      this.dataSource = new MatTableDataSource(this.getAllPosts())
      return
    }

    if (this.showingLast15 && this.showingOnlyActive) {
      this.dataSource = new MatTableDataSource(this.getLast15ActivePosts())
    } else if (this.showingLast15 && !this.showingOnlyActive) {
      this.dataSource = new MatTableDataSource(this.getLast15Posts())
    } else if (!this.showingLast15 && this.showingOnlyActive) {
      this.dataSource  = new MatTableDataSource(this.getAllActivePosts())
    }
  }

  getLast15Posts(): BlogPost[] {
    console.log('last 15')
    const last15 = this.blogPosts
    if (last15.length > 15 ) {
      last15.splice(0, 15)
    }
    console.log(last15)
    return last15
  }

  getLast15ActivePosts(): BlogPost[] {
    console.log('last 15 active')
    const last15 = this.blogPosts.filter(post => post.status === 'active')
    if (last15.length > 15 ) {
      last15.splice(0, 15)
    }
    return last15
  }

  getAllActivePosts(): BlogPost[] {
    console.log('active')
    const last15 = this.blogPosts.filter(post => post.status === 'active')
    return last15
  }

  getAllPosts(): BlogPost[] {
    console.log('all')
    return this.blogPosts
  }
}
