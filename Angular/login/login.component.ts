import { Component, OnInit } from '@angular/core';
import { ManageAccountsService } from '../manage-accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private name:string;
  private pass:string;
  private message:string;

  constructor(private msg:ManageAccountsService) { }

  ngOnInit() {
  }

public validate()
{
  var flg = this.msg.validate(this.name, this.pass);

  console.log(flg);
  if(flg=== true)
  {
    this.message = "login successful";
  }
  else
  {
    this.message ="login failed";
  }
}

}
