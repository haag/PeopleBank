import {Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

//Gathering Data from DB
import { PersonService } from '../create-person/person.service';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  from: string;
  work: string;
  school: string;
  myRelationship: string;
  relationshipDepth: string;
  weMet: string;
  birthdate: string;
  siblings: string;
  familyPosition: string;
  children: string;
  phone: string;
  email: string;
  contact: string;

}

const PEOPLE: any[] = [
  { id: 1, name: "Tom", progress: 50, color: "Green" },
  { id: 2, name: "Tom1", progress: 40, color: "blue" },
  { id: 3, name: "Tom2", progress: 30, color: "Green" },
  { id: 4, name: "Tom3", progress: 20, color: "orange" },
  { id: 5, name: "Tom4", progress: 10, color: "Green", tree: "YES" }
]

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
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent implements OnInit {
  constructor(private personService: PersonService) {  }
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['id', 'firstName', 'progress', 'color', "tree"];
  dataSource: MatTableDataSource<Person>;

  // people: any = [];
  
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

