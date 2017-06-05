import { Component, Input } from '@angular/core';
import { User } from './../utils/utils';

@Component({
    selector: 'app-title',
    template: `<div class="header">
                <div class="header-content" *ngIf="userData" >
                    <div class="header-img-wrapper">
                        <img class="header-img" [src]="userData.img" alt="">
                    </div>
                    <div class="header-txt">
                        <h1 class="header-login">Login: {{userData.login}}</h1>
                        <p class="header-user-name">Name: {{userData.name}}</p>
                    </div>
                </div>
              </div>`,
    styles: [`
        .header-img-wrapper {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            overflow: hidden;
        }
        .header-img {
            max-width: 100%;
            height: auto;
        }
        .header-img-wrapper {
            float: left;
        }
        .header-txt {
            float: right;
            width: calc(100% - 100px);
        }
        .header-content:after {
            content: '';
            display: table;
            clear: both;
        }
        .header-login {
            margin: 5px 0;
        }
        .header-content {
            margin: 20px 0;
        }
    `]
})

export class UserComponent {
    @Input() userData:[User];
}