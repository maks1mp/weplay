import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Readme } from './../utils/utils';

@Component({
    selector: 'app-readme',
    template: `<div class="modal">
                   <div class="content">
                       <textarea name="" id="" readonly>{{ readmeContent }}</textarea>
                   </div>
                   <div class="overlay" (click)="onClose()"></div>
                </div>`,
    styles: [`
        .modal, .overlay {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        .modal {
            position: fixed;
            
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
        }
       .overlay {
           position: absolute;
           z-index: 1;
           background-color: rgba(0,0,0,.8);
       }
       .content {
           position: relative;
           z-index: 3;
           border-radius: 6px;
           width: 60%;
           min-width: 320px;
           height: 500px;
           overflow: hidden;
           box-shadow: 0 0 25px 0 rgba(0,0,0,.8);
           background-color: #fff;
           padding: 15px;
       }
       .content textarea {
           width: 100%;
           height: 100%;
           resize: none;
           outline: none;
           border: none;
       }
    `]
})

export class ReadmeComponent {
  @Input() readmeContent:string;
  @Output() close: EventEmitter<any> = new EventEmitter();

  onClose():void{
      this.close.emit();
  }
}
