import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private fb:FormBuilder,private projectService:ProjectService,private route:Router) { }
  infoForm = this.fb.group({
    "name":["",[Validators.required,Validators.maxLength(50)]],
    "status":["1"]
  })
  get f(){
    return this.infoForm.controls
  }
  ngOnInit() {
  }
  onSubmit(){
    this.projectService.create(this.infoForm.value).subscribe((res)=>{
      Swal.fire({
        title: 'Thêm mới thành công',
        width: 600,
        padding: '3em',
        background: '#fff url(https://mpng.subpng.com/20180613/vtq/kisspng-kermit-the-frog-miss-piggy-the-muppets-humour-5b20c08b28f5a7.0778785215288730991678.jpg)',
        backdrop:`
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/origin/fd/fdf70f5f4989f9c08f033da50c38170e_w200.gif")
          right top
          no-repeat
        `
      });
      this.route.navigate(['/list-project'])
    })
    console.log(this.infoForm.value);
  }
}
