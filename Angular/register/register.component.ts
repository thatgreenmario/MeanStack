import { Component, OnInit,NgModule } from '@angular/core';
import { ManageAccountsService } from '../manage-accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
private name:string;
private pass:string;
private emplist = [];
  constructor(private mgs: ManageAccountsService ) { }

  ngOnInit() {
  }

public register()
{
  let emp = {
    "email":this.name,
    "pass":this.pass
  }
  this.mgs.registerEmp(emp);
  this.emplist = this.mgs.getList();
}

}
