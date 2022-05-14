import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './pages/accounts/login/login.component';
import { RegesterComponent } from './pages/accounts/regester/regester.component';
import { RetrieveComponent } from './pages/accounts/retrieve/retrieve.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProjectComponent } from './pages/project/add-project/add-project.component';
import { EditProjectComponent } from './pages/project/edit-project/edit-project.component';
import { ListProjectComponent } from './pages/project/list-project/list-project.component';
import { AddWorkComponent } from './pages/works/add-work/add-work.component';
import { DetaiWorkComponent } from './pages/works/detai-work/detai-work.component';
import { EditWorkComponent } from './pages/works/edit-work/edit-work.component';
import { ListWorkComponent } from './pages/works/list-work/list-work.component';

const routes: Routes = [
  {path:'',component:IndexComponent,children:[
    {path:'',component:DashboardComponent},
    {path:'add-project',component:AddProjectComponent},
    {path:'edit-project/:id',component:EditProjectComponent},
    {path:'list-project',component:ListProjectComponent},
    {path:'add-work',component:AddWorkComponent},
    {path:'edit-work',component:EditWorkComponent},
    {path:'list-work',component:ListWorkComponent},
    {path:'detail-work',component:DetaiWorkComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'regester',component:RegesterComponent},
  {path:'retrievel',component:RetrieveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
