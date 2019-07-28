import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() xd: string;

  labels: any = [];

  constructor(private service: FilterService) {

  }

  click(index) {
    this.labels[index].selected = !this.labels[index].selected;
    this.service.save(this.labels);
  }

  ngOnInit() {
    this.labels = [
      {
        id: 0,
        label: 'aaaaaa',
        selected: false,
      },
      {
        id: 1,
        label: 'bbbbbb',
        selected: true,
      },
      {
        id: 2,
        label: 'cccccc',
        selected: false,
      },
      {
        id: 3,
        label: 'dddddd',
        selected: true,
      }
    ];

    const ids = new Set(this.service.read());

    this.labels.forEach(label => {
      label.selected = ids.has(label.id);
    });
  }

}
