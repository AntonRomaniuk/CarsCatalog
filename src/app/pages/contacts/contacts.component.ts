import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts = [
    {
      contact: 'Phone:',
      value: '+380973208335'
    },
    {
      contact: 'Email:',
      value: 'antonromaniuk357@gmail.com'
    },
    {
      contact: 'Skype:',
      value: 'antonromaniuk'
    }
  ];

  skills = [

    {
      title: 'Work Experience',
      value: 'Advert Mobile; Java/Front-End Developer 2016-...'
    },
    {
      title: 'LANGUAGES/ TECHNOLOGIES',
      value: ' Java, Rest, JDBC, Angular 5, WebSockets, JSF,Typescript, Redux, jQuery, Javascript, HTML, SCSS, CSS'
    },
    {
      title: 'Database',
      value: ' MySQL'
    },
    {
      title: 'Development tools',
      value: 'NetBeans 8.2 , IntelliJ IDEA, WebStorm'
    },
    {
      title: 'OS',
      value: 'Windows, Linux'
    },
    {
      title: 'Other skills',
      value: 'JIRA, MAVEN, Git, npm, Tomcat'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
