import { Component } from '@angular/core';
import { Tweet } from './share/model/tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';

  public tweets : Tweet[] = [];

  constructor(){
    let t1 = new Tweet();
    t1.author = 'Antonio';
    t1.message = 'Hello world!';
    this.tweets.push(t1);

    let t2 = new Tweet();
    t2.author = 'Antonio';
    t2.message = 'Second Tweet!';
    this.tweets.push(t2);

    let t3 = new Tweet();
    t3.author = 'Antonio';
    t3.message = 'Third Tweet!';
    this.tweets.push(t3);

    let t4 = new Tweet();
    t4.author = 'Antonio';
    t4.message = 'Fourth Tweet!';
    this.tweets.push(t4);

  }
}
