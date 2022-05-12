import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/accouts/login/login.component';
import { PasswordRetrievalComponent } from './pages/accouts/password-retrieval/password-retrieval.component';
import { RegisterComponent } from './pages/accouts/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProjectComponent } from './pages/Project/add-project/add-project.component';
import { EditProjectComponent } from './pages/Project/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/Project/list-project/list-project.component';
import { AddWorkComponent } from './pages/Work/add-work/add-work.component';
import { DetailWorkComponent } from './pages/Work/detail-work/detail-work.component';
import { EditWorkComponent } from './pages/Work/edit-work/edit-work.component';
import { ListWorkComponent } from './pages/Work/list-work/list-work.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[
      {path:'',component:DashboardComponent},
      {path:'add-project',component:AddProjectComponent},
      {path:'edit-project',component:EditProjectComponent},
      {path:'list-project',component:ListProjectComponent},
      {path:'add-work',component:AddWorkComponent},
      {path:'edit-work',component:EditWorkComponent},
      {path:'list-work',component:ListWorkComponent},
      {path:'detail-work',component:DetailWorkComponent}
  ]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"retrieval",component:PasswordRetrievalComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
