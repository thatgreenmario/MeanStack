import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageAccountsService {
  private emplist = [];
  constructor() { }

  public registerEmp(emp)
  {
    this.emplist.push(emp);
  }

  public getList()
  {
    return this.emplist;
  }

  public validate(email:string, pass:string)
  {
    let flg = false;
    this.emplist.forEach(ele=>{
      console.log(ele);
      if(ele.email === email && ele.pass ===pass)
      {
        console.log("sddad")
        flg = true;
      }
    })
    return flg;
  }

}
