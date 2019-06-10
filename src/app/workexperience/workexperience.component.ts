import { Component, OnInit, Inject } from '@angular/core';
import {WorkExperienceService} from '../services/work-experience.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  rippleColor = 'rgba(0,0,0,.03)';
  unbounded = false;
  centered = true;
  workExperiences: Array<WorkExperience> = new Array<WorkExperience>();
  constructor(private workExperienceService: WorkExperienceService, public dialog: MatDialog) {
    this.workExperiences = workExperienceService.getWorkExperience();
  }
  openDialog(event: any) {
    let id = '';
    if (event.target.id) {
      id = event.target.id;
    } else {
      id = event.target.parentNode.id;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.workExperienceService.getSpecificExperience(id)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnInit() {
  }

}


