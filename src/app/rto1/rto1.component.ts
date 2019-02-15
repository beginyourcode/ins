import { Component, OnInit, ViewChild } from '@angular/core';
import { RtoService } from '../service/rto.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-rto1',
  templateUrl: './rto1.component.html',
  styleUrls: ['./rto1.component.css']
})
export class Rto1Component implements OnInit {

  constructor(private service: RtoService,
    ) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['regNo','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  
  ngOnInit() {
    this.service.selectAll().subscribe(
      list => {
        let array = list.map(item => {
          return item;

        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
