
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';
import { AdminLayoutComponent } from './share/component/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './share/component/layout/user-layout/user-layout.component';
import { BlankLayoutComponent } from './share/component/layout/blank-layout/blank-layout.component';


const routes: Routes = [
  {
    path: '', component: BlankLayoutComponent, children: [
      {
        path: '',
        loadChildren: () => import('./views/pages/pages.module').then(e => e.PagesModule)
      }
    ] },
  { path: 'view-employee', component: StudentListComponent },
  { path: 'add-employee', component: EmployeeItemComponent },
  {
    path: 'admin', component: AdminLayoutComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/posts.module').then(e => e.PostsModule)
      }
    ]},
  {
    path: 'user', component: UserLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: ()=> import('./views/notes/notes.module').then(e => e.NotesModule)
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
