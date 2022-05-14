import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FixedComponent } from './layouts/fixed/fixed.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/accounts/login/login.component';
import { RegesterComponent } from './pages/accounts/regester/regester.component';
import { RetrieveComponent } from './pages/accounts/retrieve/retrieve.component';
import { AddProjectComponent } from './pages/project/add-project/add-project.component';
import { ListProjectComponent } from './pages/project/list-project/list-project.component';
import { EditProjectComponent } from './pages/project/edit-project/edit-project.component';
import { AddWorkComponent } from './pages/works/add-work/add-work.component';
import { EditWorkComponent } from './pages/works/edit-work/edit-work.component';
import { ListWorkComponent } from './pages/works/list-work/list-work.component';
import { DetaiWorkComponent } from './pages/works/detai-work/detai-work.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, FooterComponent, FixedComponent, DashboardComponent, LoginComponent, RegesterComponent, RetrieveComponent, AddProjectComponent, ListProjectComponent, EditProjectComponent, AddWorkComponent, EditWorkComponent, ListWorkComponent, AsideComponent,DetaiWorkComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
