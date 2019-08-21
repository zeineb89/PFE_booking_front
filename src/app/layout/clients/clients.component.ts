import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { pipe } from '@angular/core/src/render3';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  displayedColumns = ['Photo','FirstName', 'LastName', 'Validity','Delete'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service : UsersService,private toastr: ToastrService) {
      // Create 100 users
      const users: User[] = [];
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.getClients();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  onDelete(_id: string) {
   // let apiUrlforDelete = `users/${_id}`;
    if (confirm('Are you sure to delete this record ?') == true) {
      this.service.deleteClient(_id).subscribe((res) => {
        //this.refreshEmployeeList();
        //this.resetForm(form);
        this.toastr.error('Client deleted','Client deleted');
       this.getClients();
        console.log('Default deleted');
      });
  }
  }
  getClients(){ 
    this.service.getAllClients()
    .subscribe(clients => {
      console.log(clients)
      this.dataSource.data = clients as User[];
    })
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }

  onChange(event, id,validity) {

    validity = !validity;

    //this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
    console.log("______________________");
   console.log(event);
   console.log("______________________");

   console.log( id);
   console.log("______________________");

   console.log(event.checked);
   this.service.validateClient(id, event.checked).subscribe(res => {
    console.log(res)
  })

}
}

