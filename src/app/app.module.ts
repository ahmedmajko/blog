import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, AppRoutingModule,
    FormsModule,ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
