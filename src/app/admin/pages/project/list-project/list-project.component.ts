import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  data : Project [ ] = [];
  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService(){
    this.projectService.getAll().subscribe((res)=>{
      this.data = res;
      console.log(res);
    })
  }
  delete(id:any){
    if(confirm("ban co chac chan xoa khong ?" + id)) {
    this.projectService.delete(id).subscribe((res)=>{
      this.getDataFromService();

    })
    Swal.fire({
      icon: 'error',
      text: 'Dlete Success!',
    })
    }
  }

}
