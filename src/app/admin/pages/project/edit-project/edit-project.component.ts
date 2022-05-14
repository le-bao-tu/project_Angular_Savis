import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  id = '';
  constructor(private fb:FormBuilder,private projectService:ProjectService,private route:ActivatedRoute,
    private router:Router) { }
  infoForm = this.fb.group({
    "name":["",[Validators.required,Validators.maxLength(5)]],
    "status":["1"]
  })
  get f(){
    return this.infoForm.controls
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.projectService.findId(this.id).subscribe((res)=>{
      console.log(res),
      this.infoForm = this.fb.group({
        "name":[`${res.data.name}`],
        "status":[`${res.data.status}`],
        "id":[`${this.id}`]
      })
    })
  }
  onSubmit(){
    this.projectService.update(this.id,this.infoForm.value).subscribe((res)=>{
      Swal.fire({
        title: ' Update Success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.router.navigate(['list-project']);
    });
  }
}
