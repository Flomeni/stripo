import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ListTemplate} from '../../../domain/aggregates/Template';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'template-list-table',
  templateUrl: './template-list-table.component.html',
  styleUrls: ['./template-list-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateListTableComponent {

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
