import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TemplatesRepository} from './domain/repository/templates-repository';
import {TemplateListComponent} from './containers/list/template-list/template-list.component';
import {TemplatesFactory} from './domain/factory/templates-factory';
import {TemplatesRoutingModule} from './templates-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../../in-memory-data.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {TemplateListTableComponent} from './components/list/template-list-table/template-list-table.component';
import {TemplateViewComponent} from './containers/view/template-view/template-view.component';
import {TemplateConstructorComponent} from './components/view/template-constructor/template-constructor.component';
import {ConstructorElementComponent} from './components/view/template-constructor/constructor-element/constructor-element.component';

const IMPORTS = [
  HttpClientModule,
  CommonModule,
  HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService)
];

const VENDORS = [
  MatTableModule
];

const DECLARATIONS = [
  TemplateListComponent,
  TemplateListTableComponent,
  TemplateViewComponent,
  TemplateConstructorComponent,
  ConstructorElementComponent
];

const PROVIDERS = [
  TemplatesRepository,
  TemplatesFactory
];

@NgModule({
  imports: [
    ...IMPORTS,
    ...VENDORS,
    TemplatesRoutingModule,
    MatSortModule
  ],
  declarations: DECLARATIONS,
  providers: PROVIDERS
})
export class TemplatesModule {
}
