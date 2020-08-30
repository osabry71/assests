import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})

export class GetUsersComponent implements OnInit {
msg=""
users=[]
  constructor(private us:UsersService) {

                                              this.us.allusers()
                                              .then(result=>{ this.users=result
                                              console.log("get-users.component");
                                              })
                                              .catch(err=>{ this.msg="error when loading users data \n "+ err
                                              console.log("get-users.component error");
                                              })
                                         }

  ngOnInit(): void {
  }

}
