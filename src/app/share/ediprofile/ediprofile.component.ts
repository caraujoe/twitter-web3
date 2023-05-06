import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UserService } from '../tweetservice/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
declare let window: any;

@Component({
  selector: 'app-ediprofile',
  templateUrl: './ediprofile.component.html',
  styleUrls: ['./ediprofile.component.scss']
})
export class EdiprofileComponent {
    user$ = this.userService.userInSessionChanged$;
    public form: FormGroup;
    avatar = null;
    @Output() close = new EventEmitter();
    @ViewChild('fileInput') fileInput!: ElementRef;
    @Input() u: User|null;
  
    constructor(
      private userService: UserService,
      private formBuilder: FormBuilder
    ) {
      this.u = new User('example', 'example', 'example');

      this.form = this.formBuilder.group({
        name: [null, [
          Validators.max(140)]],
        bio: [null, [
          Validators.max(140)]],
        location:[null, [
            Validators.max(140)]],
        avatar: [null, [
            Validators.max(140)
        ]]
  
      });
  
      this.user$.subscribe((user: any) => {
        this.form.setValue({
          name: user.name,
          bio: user.bio,
          location: user.address,
          avatar: user.avatar
        })
      });

    }
  
    ngOnInit(){
        if(this.u){
            this.form.setValue({
                name: this.u.name,
                bio: this.u.bio,
                location: this.u.address,
                avatar: this.u.avatar
              })
        }
      }

    public submit() {
      if (this.form.valid) {
        let user = this.userService.getUserInSession();
        user.name = this.form.get('name')?.value;
        user.bio = this.form.get('bio')?.value;
        user.address = this.form.get('location')?.value;
        console.log({user});
        
        if (this.avatar != null) {
          const reader = new window.FileReader();
          reader.readAsArrayBuffer(this.avatar);
          reader.onloadend = () => {
            window.Buffer = require('buffer/').Buffer;
            user.avatar = new window.Buffer(reader.result);
            this.userService.updateUser(user);
            this.close.emit();
          }
        } else {
          this.userService.updateUser(user);
          this.close.emit();
        }
      }
    }
  
    public onFileSelected(event: any) {
      this.avatar = event.target.files[0];
    }
  
    public closeModal() {
      this.close.emit();
    }  
}
