import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SlideComponent } from './layout/slide/slide.component';
import { FixedComponent } from './layout/fixed/fixed.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddProjectComponent } from './pages/Project/add-project/add-project.component';
import { ListProjectComponent } from './pages/Project/list-project/list-project.component';
import { EditProjectComponent } from './pages/Project/edit-project/edit-project.component';
import { AddWorkComponent } from './pages/Work/add-work/add-work.component';
import { ListWorkComponent } from './pages/Work/list-work/list-work.component';
import { EditWorkComponent } from './pages/Work/edit-work/edit-work.component';
import { LoginComponent } from './pages/accouts/login/login.component';
import { RegisterComponent } from './pages/accouts/register/register.component';
import { PasswordRetrievalComponent } from './pages/accouts/password-retrieval/password-retrieval.component';
import { DetailWorkComponent } from './pages/Work/detail-work/detail-work.component';

@NgModule({
  declarations: [IndexComponent, HeaderComponent, FooterComponent, SlideComponent, FixedComponent, DashboardComponent, AddProjectComponent, ListProjectComponent, EditProjectComponent, AddWorkComponent, ListWorkComponent, EditWorkComponent, LoginComponent, RegisterComponent, PasswordRetrievalComponent, DetailWorkComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
