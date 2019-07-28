import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialog, MatTable, MatSnackBar } from '@angular/material';
import { PhoneInterface, SupportTypeInterface } from '../../api.models';
import { SupportTypeService } from '../../services/support-type.service';
import { SharedModule } from '../../shared/shared.module';

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
export class SupportTypeComponent implements OnInit {

  displayedColumns: string[] = ['order', 'code', 'charged', 'mature', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: false}) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    private service: SupportTypeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getData();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getData() {
    this.service.load().subscribe(supports => {
      this.dataSource = supports;

      this.refresh();
    });
  }

  refresh() {
    this.table.renderRows();
  }

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
    this.service.add(row_obj).subscribe((data) => {
      this.dataSource = <SupportTypeInterface>data;
      this.openSnackBar('Added', '');
      this.getData();
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('request complete');
    });

    this.table.renderRows();
  }

  updateRowData(row_obj) {
    this.service.update(row_obj).subscribe((data) => {
      this.dataSource = <SupportTypeInterface>data;
      console.log(data);
      this.openSnackBar('Updated', '');
      this.getData();
    });
  }

  deleteRowData(row_obj) {
    this.service.delete(row_obj.id).subscribe((data) => {
      this.dataSource = <SupportTypeInterface>data;
      this.openSnackBar('Deleted', '');
    });
  }

}
