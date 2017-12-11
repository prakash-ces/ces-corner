import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }    from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { TimelineComponent } from './content/timeline/timeline.component'
import { NoticeComponent } from './content/notice/notice.component'

import { AppRoutingModule } from './app-routing.module'

import { NoticeService } from './common/services/notice.service'
import { TimelineService } from './common/services/timeline.service'

import { FilterContainer } from './common/components/filterContainer/filterContainer.component'

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent,
    TimelineComponent,
    HeaderComponent,
    FilterContainer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [NoticeService, TimelineService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { DashboardComponent }   from './dashboard.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroService }          from './hero.service';

// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule
//   ],
//   declarations: [
//     AppComponent,
//     DashboardComponent,
//     HeroDetailComponent,
//     HeroesComponent
//   ],
//   providers: [ HeroService ],
//   bootstrap: [ AppComponent ]
// })
