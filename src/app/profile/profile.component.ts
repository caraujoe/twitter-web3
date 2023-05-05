import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
import { TweetService } from '../share/tweetservice/tweet.service';
import { UserService } from '../share/tweetservice/user.service'
import { User } from '../share/model/user';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    public tweets: Tweet[] = [];
    public user: User|null = null;
    public constructor(public tweetService: TweetService, public userService: UserService){

    }

    ngOnInit(){
        this.user = this.userService.getUserInSession();
        
        this.tweetService.getTweetsByAuthor(this.user?.name).then((tweets: Tweet[]) => {
            this.tweets = tweets;
        })
    }

    openModalEditProfile(){
        let u: User = new User(
            'Carlos Araujo',
            'Estudiante de informática al que le encanta la música, la fiesta y vivir nuevas experiencias',
            'https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/300376783_390927979844843_1192710647286639738_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-b5XhvdPlWIAX-saDwm&_nc_ht=scontent-mad1-1.xx&oh=00_AfCw_4WmCBongQzEPU6LpIrVBD3O3JI9vkj4_RvhGZthXQ&oe=645A742E'
        );
        u.address = 'Guadalupe (Murcia), España';
        console.log(u)

        this.userService.updateUser(u);
    }
}
