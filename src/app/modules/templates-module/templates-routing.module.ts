import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplateListComponent} from './containers/list/template-list/template-list.component';
import {TemplateViewComponent} from './containers/view/template-view/template-view.component';
import {VIEW_ID_TOKEN} from './index';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: TemplateListComponent
  },
  {
    path: `view/:${VIEW_ID_TOKEN}`,
    component: TemplateViewComponent
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
