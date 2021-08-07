import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { RequestsList } from './requests-list.component';
import { AboutComponent } from './about.component';
import { DetailComponent } from './detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'requests',
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          title: 'Form'
        }
      },
      {
        path: 'requests',
        component: RequestsList,
        data: {
          title: 'Requests'
        }
      },
      {
        path: 'details/:id',
        component: DetailComponent,
        data: { title: 'Details' }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
