import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Ask an ADL', url: '/home/AskAdl', icon: 'mail' },
    {
      title: 'Service Request',
      url: '/home/ServiceRequest',
      icon: 'paper-plane',
    },
    { title: 'Dorm Guide', url: '/home/Guide', icon: 'book' },
    { title: 'Email Us', url: '/home/EmailUs', icon: 'archive' },
    { title: 'Call Dorm Office', url: '/home/CallDomOffice', icon: 'call' },
    { title: 'Face Book', url: '/home/FaceBook', icon: 'warning' },
    { title: 'Home', url: '/', icon: 'home' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
