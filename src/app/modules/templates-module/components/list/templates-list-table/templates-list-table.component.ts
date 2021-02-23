import {Component, Input} from '@angular/core';
import {Template} from '../../../domain/aggregates/Template';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'templates-list-table',
  templateUrl: './templates-list-table.component.html',
  styleUrls: ['./templates-list-table.component.less']
})
export class TemplatesListTableComponent {

  @Input()
  dataSource: ReadonlyArray<Template> = [];
  public readonly displayedColumns = ['name', 'modified'];

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  public onRowSelect(row: Template): void {
    this.router.navigate([`../view/${row.id}`], {relativeTo: this.route});
  }
}
