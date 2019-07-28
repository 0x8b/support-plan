import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PhoneInterface, SupportTypeInterface } from '../../../api.models';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  action: string;
  local_data: any;
  tmp_phone: PhoneInterface;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.local_data = {
      id: data.id != null ? data.id : null,
      isUsed: data.isUsed || null,
      code: data.code || '',
      charged: data.charged || false,
      mature: data.mature || false,
      order: data.order || 0,
      phones: JSON.parse(JSON.stringify(data.phones || []))
    };
    this.action = data.action;
    this.tmp_phone = {
      id: null,
      label: '',
      phone: ''
    };
  }

  doAction() {
    console.log(this.local_data);
    this.dialogRef.close({
      event: this.action,
      data: this.local_data
    });
  }

  closeDialog() {
    this.dialogRef.close({
      event: 'cancel'
    });
  }

  addPhone() {
    console.log(this.local_data);
    this.local_data.phones.unshift({
      label: this.tmp_phone.label,
      phone: this.tmp_phone.phone
    });
    this.tmp_phone.label="";
    this.tmp_phone.phone="";
  }

  removePhone(a) {
    const index = this.local_data.phones.indexOf(a);
    if (index > -1) {
      this.local_data.phones.splice(index, 1);
    }
  }
}
