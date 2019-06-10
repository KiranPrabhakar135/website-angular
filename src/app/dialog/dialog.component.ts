import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
// @ts-ignore
import {WorkExperience} from '../models/models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  workExperience: WorkExperience = null;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkExperience) {
    console.log(data);
    this.workExperience = data;
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
