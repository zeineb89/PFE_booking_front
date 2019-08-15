import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    currentUser :any;
    constructor(private authService : AuthService) {
        this.authService.currentUser.subscribe(x => this.currentUser =x);

    }

    ngOnInit() {
        this.showMenu = '';
    }

    get isAdmin(){
        // console.log("this.currentUser.role")
        // console.log(this.currentUser.data.user.role)
        return this.currentUser.data.user.role === 'admin';
      }
    

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
