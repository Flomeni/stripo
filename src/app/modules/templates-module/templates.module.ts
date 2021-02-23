import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TemplatesRepository} from './domain/repository/templates-repository';
import {TemplatesListComponent} from './containers/list/templates-list/templates-list.component';
import {TemplatesFactory} from './domain/factory/templates-factory';
import {TemplatesRoutingModule} from './templates-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../../in-memory-data.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {TemplatesListTableComponent} from './components/list/templates-list-table/templates-list-table.component';
import {TemplatesViewComponent} from './containers/view/templates-view/templates-view.component';
import {TemplatesViewConstructorComponent} from './components/view/templates-view/templates-view-constructor/templates-view-constructor.component';

const IMPORTS = [
  HttpClientModule,
  CommonModule,
  HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService)
];

const VENDORS = [
  MatTableModule
];

const DECLARATIONS = [
  TemplatesListComponent,
  TemplatesListTableComponent,
  TemplatesViewComponent,
  TemplatesViewConstructorComponent
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
