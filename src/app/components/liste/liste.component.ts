import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {ListService} from "../../services/list.service"
import { User } from 'src/app/models/user';
export interface PeriodicElement {
  nom: string;
  prenom: string;
 
}

 
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  user: User = new User()
  users: User[] = [
  ];
  ELEMENT_DATA: PeriodicElement[] = [
  ];
  constructor(private listService:ListService) { }
  displayedColumns: string[] = ['id','nom', 'prenom','actions'];
  dataSource = new MatTableDataSource();
  show:Boolean

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {  
    this.getList()
  }
  delete(id){
       this.listService.delete(id);
       this.getList()
  }
  details(id){
    this.listService.details(id).subscribe(result => {
      this.user=result
    })
    this.show=true
}
    
  getList(){
    this.listService.listUser().subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      console.log(this.dataSource)
    });

  
    
  }

}
