import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {
  private id = this.activateRoue.snapshot.params.id
  private clientfind: User
  constructor(private activateRoue : ActivatedRoute, private service : UsersService) { 
    console.log(this.activateRoue.snapshot.params.id)
  }

  ngOnInit() {
    this.getOneClient()
  }

  getOneClient(){
    this.service.getOneClient(this.id).subscribe(client =>{
      this.clientfind = client as User
      console.log(this.clientfind)

    })
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
 //   this.dataSource.data = clients as User[];
  })

}

}
