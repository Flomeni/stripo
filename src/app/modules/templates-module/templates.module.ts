import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {TemplatesRepository} from './domain/repository/templates-repository';
import {TemplatesListComponent} from './containers/list/templates-list/templates-list.component';
import {TemplatesFactory} from './domain/factory/templates-factory';
import {TemplatesRoutingModule} from './templates-routing.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../../in-memory-data.service';

const IMPORTS = [
  HttpClientModule,
  CommonModule,
  HttpClientInMemoryWebApiModule.forFeature(InMemoryDataService)
];

const DECLARATIONS = [
  TemplatesListComponent
];

const PROVIDERS = [
  TemplatesRepository,
  TemplatesFactory
];

@NgModule({
  imports: [
    ...IMPORTS,
    TemplatesRoutingModule
  ],
  declarations: DECLARATIONS,
  providers: PROVIDERS
})
export class TemplatesModule {
}
