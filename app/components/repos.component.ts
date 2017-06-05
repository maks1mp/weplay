import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Repositories, Repository } from './../utils/utils';

@Component({
    selector: 'app-repos',
    template: ` <div>
                    <h3 *ngIf="repos.length === 0"> No repositiries </h3>
                    <h3 *ngIf="repos.length > 0"> Repositories list: </h3>
                    <div class="repos" *ngIf="repos">
                        <ul class="repos-list">
                            <li *ngFor="let repo of repos">
                                <span (click)="goToGitReadme(repo)">{{repo.name}}</span>
                                <br>
                                <i>Language: {{repo.language}}</i>        
                                <p class="readme">
                                    <button (click)="goToGitReadme(repo)">Go To Readme</button>
                                    <button (click)="showReadmePreview(repo)">Preview</button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div> `,
    styles: [`
        .repos-list {
            display: inline-block;
        }
        .repos-list li {
            line-height: 1.5;
        }
        .repos-list li span {
            transition: transform .5s ease;
            display:inline-block;
        }
        .repos-list li span:hover {
            cursor: pointer;
            transform: translateX(25px);
        }
    `]
})

export class ReposComponent {
    @Input() repos:[Repositories];
    @Output() onRedirect: EventEmitter<Repository> = new EventEmitter();
    @Output() showReadme: EventEmitter<Repository> = new EventEmitter();

    goToGitReadme(repo: Repository, todo:string){
        this.onRedirect.emit(repo);
    }
    showReadmePreview(repo: Repository, todo:string){
        this.showReadme.emit(repo);
    }
}
