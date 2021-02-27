import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export interface TemplateJSON {
  readonly id: number;
  readonly name: string;
  readonly template: string;
  readonly modified: number;
}

export enum API {
  templates = 'templates'
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  public static readonly BASE_URL = 'api';

  public createDb(): {} {
    return {
      [API.templates]: this.getTemplates(),
    };
  }

  private getTemplates(): ReadonlyArray<TemplateJSON> {
    return [
      {
        id: 1,
        name: 'One',
        template: `
          <div class='template asd'>
            <div class='editable'>
              One
            </div>
            <div class='container'>
                <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
          </div>`,
        modified: 1516008350380
      },
      {
        id: 2,
        name: 'Two',
        template: `
          <div class='template'>
            <div class='container'>
                <div class='editable'>
                One
              </div>
              <div class='editable'>
                Two
              </div>
              <div class='editable'>
                Three
              </div>
            </div>
            <div class='editable'>
              Four
            </div>
          </div>`,
        modified: 1516008489616
      },
      {
        id: 3,
        name: 'Three',
        template: `
          <div class='template'>
            <div class='editable'>
              one
            </div>
            <div class='editable'>
              two
            </div>
            <div class='editable'>
              three
            </div>
          </div>`,
        modified: 1516008564742
      }
    ];
  }
}
