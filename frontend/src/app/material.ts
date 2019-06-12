import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [ MatToolbarModule, MatSidenavModule, MatSortModule, MatPaginatorModule, MatTableModule, MatListModule, MatSelectModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],
  exports: [ MatToolbarModule, MatSidenavModule, MatSortModule, MatPaginatorModule, MatTableModule, MatListModule,  MatSelectModule, MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule],

})
export class MaterialModule { }