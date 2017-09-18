import { SummaryPipe } from './summary.pipe';
import { EmailService } from './services/email/email.service';
import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './star/star.component';
import { CasefromatPipe } from './casefromat.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    StarComponent,
    CasefromatPipe,
    FavoriteComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
