import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplatesListComponent} from './containers/list/templates-list/templates-list.component';
import {TemplatesViewComponent} from './containers/view/templates-view/templates-view.component';
import {VIEW_ID_TOKEN} from './index';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: TemplatesListComponent
  },
  {
    path: `view/:${VIEW_ID_TOKEN}`,
    component: TemplatesViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class TemplatesRoutingModule {
}
