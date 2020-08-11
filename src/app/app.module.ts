import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{httpInterceptorProviders}from './share/interceptor'
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    HttpClientModule, AppRoutingModule,ReactiveFormsModule,
    FormsModule,ShareModule, FontAwesomeModule, NgbModule, ToastrModule.forRoot()
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent,NgbModule]
})
export class AppModule { }
