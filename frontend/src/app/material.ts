import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [ MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],
  exports: [ MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],

})
export class MaterialModule { }