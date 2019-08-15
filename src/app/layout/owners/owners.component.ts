import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  displayedColumns = ['_id', 'firstName', 'lastName'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ownerService : UsersService) {}
  
  getOwners(){ 
    this.ownerService.getAllOwners()
    .subscribe(owners => {
      this.dataSource.data = owners as User[];
    })
  }

  ngOnInit() {
    this.getOwners()
  }

}
