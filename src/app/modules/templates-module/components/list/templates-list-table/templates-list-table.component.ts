import {Component, Input} from '@angular/core';
import {ListTemplate} from '../../../domain/aggregates/Template';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'templates-list-table',
  templateUrl: './templates-list-table.component.html',
  styleUrls: ['./templates-list-table.component.less']
})
export class TemplatesListTableComponent {

  @Input()
  dataSource: ReadonlyArray<ListTemplate> = [];
  public readonly displayedColumns = ['name', 'modified'];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  public onRowSelect(row: ListTemplate): void {
    this.router.navigate([`../view/${row.id}`], {relativeTo: this.route});
  }
}
