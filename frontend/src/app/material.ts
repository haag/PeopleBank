import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
@NgModule({
  imports: [ MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],
  exports: [ MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],

})
export class MaterialModule { }