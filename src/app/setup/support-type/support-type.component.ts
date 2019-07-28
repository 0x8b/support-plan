import { Component, ViewChild } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialog, MatTable } from '@angular/material';
import { PhoneInterface, SupportTypeInterface } from '../../api.models';

const ELEMENT_DATA: SupportTypeInterface[] = [
  {id: 3, isUsed: false, code: 'A', charged: false, mature: true,  order: 0, phones: [{id: 12, label: 'a', phone: '7654'}, {id: 23, label: 'b', phone: '4321'}]},
  {id: 4, isUsed: false, code: 'B', charged: true,  mature: true,  order: 1, phones: [{id: 34, label: 'c', phone: '7654'}]},
  {id: 5, isUsed: false, code: 'C', charged: false, mature: false, order: 2, phones: []},
  {id: 6, isUsed: true,  code: 'D', charged: false, mature: true,  order: 3, phones: []},
  {id: 7, isUsed: true,  code: 'E', charged: true,  mature: false, order: 4, phones: []},
];

@Component({
  selector: 'support-type',
  templateUrl: './support-type.component.html',
  styleUrls: ['./support-type.component.scss']
})
export class SupportTypeComponent {

  displayedColumns: string[] = ['order', 'code', 'charged', 'mature', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  constructor(public dialog: MatDialog) { }

  openDialog(action, obj) {
    obj.action = action;

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'add') {
        this.addRowData(result.data);
      } else if (result.event == 'update') {
        this.updateRowData(result.data);
      } else if (result.event == 'delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    console.log(JSON.stringify(row_obj.phones || []));
    this.dataSource.push({
      id: null,
      isUsed: null,
      code: row_obj.code,
      charged: row_obj.charged,
      mature: row_obj.mature,
      order: row_obj.order,
      phones: JSON.parse(JSON.stringify(row_obj.phones || []))
    });

    this.table.renderRows();
  }

  updateRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.code = row_obj.code;
        value.charged = row_obj.charged,
        value.mature = row_obj.mature,
        value.order = row_obj.order,
        value.phones = JSON.parse(JSON.stringify(row_obj.phones))
      }

      return true;
    });
  }

  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

}
