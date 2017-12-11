import { Component } from '@angular/core'
import { TimelineService } from './../../common/services/timeline.service'
import { NgFor } from '@angular/common'

@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  posts
  constructor(private timelinedata: TimelineService){
    // this.posts = timelinedata.getPosts()
    console.log("component START");
    this.posts = timelinedata.getNewPosts()
    console.log("component DONE", this.posts);
  }
}
