import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TimelineService } from './../../common/services/timeline.service'
import { NgFor } from '@angular/common'

@Component({
  // selector: 'header-bar',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations: [
     trigger('fade',[
       transition('void  => *',[
         style( { backgroundColor:'yellow', opacity:'0'} ),
         animate(2000, style({backgroundColor:'yellow', opacity:'0'

         }))
       ])
     ])
  ]
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
