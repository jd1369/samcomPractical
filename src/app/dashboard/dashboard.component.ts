import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableData:any;
  pageSize=5;
  currentPage=1;
  selectedRow:any;
  totalPages:any
  nameSearch: any;
  
  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.search()
  }

  search():void{
    this.dashboardService.getTable(this.currentPage,5,this.nameSearch).subscribe(
      response=>{
        this.tableData=response
      },
      error=>{
        console.log(error)
      }

    )
  }
  getPaginationData(){
    const startIndex=(this.currentPage-1)*this.pageSize;
    return this.tableData.slice(startIndex,startIndex+this.pageSize)
  }

  selectRow(row:any){
    this.selectedRow = row
  }

  nextPage(){
    const totalPages=Math.ceil(this.tableData.length/this.pageSize);
    if(this.currentPage<totalPages){
      this.currentPage++
    }
    this.search()
  }

    previouspage(){
      if(this.currentPage>1){
        this.currentPage--;
      }
      this.search()
    }

    setPage(pageNumber:number){
      const totalPages = Math.ceil(this.tableData.length/this.pageSize)
      if(pageNumber>0 &&pageNumber<=totalPages){
        this.currentPage =pageNumber
      }
      this.search()
    }



  }



