import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import {UserService} from '../user.service'
import { User } from '../User';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { BasicReport } from '../BasicReport';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../app.component.scss']
})
export class UserComponent  {
  success : boolean = false;
  users: User[] =[];
  records: any;
  cmId ="";

 now = new Date();
  constructor(private userService: UserService, private router: Router) { }

 // ngOnInit(): void {
    //this.userService.getUsers().subscribe((data: User[]) => {
 //     console.log(data);
  //    this.users = data;
 //   });
 // } 

 ngOnInit(): void {
  
   
 }
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  public getReport(): void {
    this.userService.getReportByCmId(this.cmId).subscribe(
      (response: BasicReport[]) => {
        this.success=true;
        this.records = response;

      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
  Back()
  {
    this.router.navigateByUrl('/main'); 
  }
}