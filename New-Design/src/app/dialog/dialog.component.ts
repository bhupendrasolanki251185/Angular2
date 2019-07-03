import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog } from "@angular/material";
import { MdGridListModule}  from '@angular/material';
import { DetailService } from "app/detail.service";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectedDetail: any;
  dialogView:any;
  doctorDetails: Array<Object>=[];
  constructor(public dialogRef: MdDialogRef<DialogComponent>,private patientService: DetailService) { }
// this.doctorDetails = [
//     {
//         "Doctor": "Dr Ramesh Kumar"
//     },
//     {
//         "Doctor": "Dr Veena Kumari"
//     },
//     {
//         "Doctor": "Dr Rajesh Kumar"
//     },
//     {
//         "Doctor": "Dr Purohit Kumar"
//     },
//     {
//         "Doctor": "Dr shubham Kumar"
//     }
// ];
  ngOnInit() {
       this.patientService.getDoctorDetails().subscribe(result => {
        console.log('patient', result);
        this.doctorDetails = result;
        });
    
  }
  onClose() {
        this.dialogRef.close();
    }

    onAuthorize() {
        this.dialogRef.close();
    }

}
