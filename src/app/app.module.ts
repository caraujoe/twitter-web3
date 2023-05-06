import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TweetComponent} from "./share/tweetcomponent/tweet.componet";
import { MainFeedComponent } from './main-feed/main-feed.component';
import { ProfileComponent } from './profile/profile.component';
import {TweetService} from "./share/tweetservice/tweet.service";
import {NewTweetComponent} from "./share/newtweet/newtweet.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./share/tweetservice/user.service";
import {Web3Service} from "./share/web3service/web3.service";
import { EdiprofileComponent } from './share/ediprofile/ediprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    MainFeedComponent,
    ProfileComponent,
    NewTweetComponent,
    EdiprofileComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TweetService,
    UserService,
    Web3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
