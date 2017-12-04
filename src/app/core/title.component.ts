import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: []
})
export class TitleComponent {
  title = 'DemoNgStore';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
