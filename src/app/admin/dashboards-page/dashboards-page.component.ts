import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {Post} from '../../shared/interfaces';
import {PostsService} from '../../shared/posts.service';

@Component({
  selector: 'app-dashboards-page',
  templateUrl: './dashboards-page.component.html',
  styleUrls: ['./dashboards-page.component.scss']
})
export class DashboardsPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  remove(id: string) {

  }
}
