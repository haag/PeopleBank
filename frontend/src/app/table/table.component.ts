import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';

//Gathering Data from DB
import { PersonService } from '../create-person/person.service';
import { Person } from '../create-person/person';


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('150ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent implements OnInit {
  x = ""
  
  constructor(private personService: PersonService) {  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['id', `firstName`, 'lastName', 'color', "tree"];
  dataSource: MatTableDataSource<Person>;
  ngOnInit() {
    //Makes a call to retrieve the ppl data
    this.personService.getPeople().subscribe(people => { 
      //Sets Datasource with the retrieved data
      this.dataSource = new MatTableDataSource(people);
  
      // Assign the data to the data source for the table to render
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  

  createPersonSummary(data) {
    const summary = `Summary: 
      ${data.firstName} ${data.lastName ? data.lastName : ''} 
      ${data.nickname ? `goes by ${data.nickname},` : ''}
      ${data.from ? `comes from ${data.from},`: ''}
      ${data.lives ? `lives in ${data.lives},` : ''}
      ${data.work ? `works at ${data.work},` : ''}
      ${data.school ? `attended ${data.school},` : ''}
      ${data.weMet ? `we met at/on ${data.weMet},` : ''}
      ${data.myRelationship ? `we are ${data.myRelationshp},` : ''}
      ${data.relationshipDepth ? `with a depth of ${data.relationshipDepth},` : ''}
      ${data.birthdate ? `born on ${data.birthdate},` : ''}
      ${data.siblings ? `${data.siblings} siblings,` : ''}
      ${data.familyPosition ? `and is the ${data.familyPosition} child,` : ''}
      ${data.children ? `has ${data.children} children,` : ''}
      ${data.phone ? `PHONE` : ''}
      ${data.email ? `EMAIL` : ''}
      ${data.contact ? `CONTACT` : ''}
      ${data.mission ? `served in ${data.mission},` : ''}
      ${data.description ? `DESC` : ''}
    `
    this.x = summary
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

