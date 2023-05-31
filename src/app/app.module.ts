import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassCreateComponent } from './components/class-create/class-create.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
  { path: '', redirectTo: 'classes', pathMatch: 'full' },
  { path: 'classes', component: ClassListComponent },
  { path: 'classes/:id', component: ClassDetailsComponent },
  { path: 'create', component: ClassCreateComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'add', component: StudentCreateComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ClassCreateComponent,
    ClassDetailsComponent,
    ClassListComponent,
    StudentCreateComponent,
    StudentDetailsComponent,
    StudentListComponent,
    SidebarComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),    
    MatSlideToggleModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    [MatToolbarModule, MatButtonModule, MatIconModule]
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
