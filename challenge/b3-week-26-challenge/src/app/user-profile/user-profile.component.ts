import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  userName = 'Beginner Dev';
  profilePicUrl = 'assets/image.jpg';
  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }

  saveName() {
    alert(`Name saved: ${this.userName}`);
  }

  resetName() {
    this.userName = '';
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
