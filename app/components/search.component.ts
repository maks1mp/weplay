import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
            <div class="search">
                <form name="search" (submit)="makeRequest(query)">
                    <label>
                        <input type="text" 
                            name="search-value" 
                            [(ngModel)]="query" 
                            placeholder="Type user login here"
                        />
                        <button> FIND </button>
                    </label>
                </form>
            </div>
    `,
    styles: [`
    .search { 
        font-weight: normal;
    }
    input {
        width: calc(100% - 125px);
        height: 40px;
        text-indent: 15px;
        font-size: 25px;
    }
    button {
        padding: 8px 20px;
        font-size: 25px;
        border:none;
    }
    `]
})

export class SearchComponent {
    @Input() query: string;
    @Output() request: EventEmitter<string> = new EventEmitter();
    
    makeRequest(q:string) {
        this.request.emit(q);
    }
}
