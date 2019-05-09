import { Injectable } from '@angular/core';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class EditPersonService {
  constructor(private dialog: MatDialog) {}

    openEditDialog(prop) {

        const dialogRef = this.dialog.open(EditPersonComponent, { });

        dialogRef.disableClose = true; //Prevents esc and off click. esc has be allowed elsewhere

        const instance = dialogRef.componentInstance;
        instance.person = prop;


        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        });
    }
}
