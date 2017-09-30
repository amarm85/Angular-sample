import { GithubFollowerService } from './services/github-follower/github-follower.service';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post/post.service';
import { SummaryPipe } from './summary.pipe';
import { EmailService } from './services/email/email.service';
import { CourseService } from './course/course.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './star/star.component';
import { CasefromatPipe } from './casefromat.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikesComponent } from './likes/likes.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostComponent } from './post/post.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    StarComponent,
    CasefromatPipe,
    FavoriteComponent,
    LikesComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponentComponent,
    ChangePasswordFormComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'followers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [CourseService,
    EmailService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GithubFollowerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
