import { Component, OnInit } from "@angular/core";
import { EmployeeDetailsService } from "./employee-details.service";
import { EmployeeDetails } from "../Models/employee-details";
import { strictEqual } from "assert";
import { query } from "@angular/core/src/render3";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  private getEmployeesUrl: string;
  private queryStringObject: object;
  private employeeDetails: EmployeeDetails[] = new Array();
  private skipCount = 10;
  private displayCount = 6;
  constructor(private employeeDetailsService: EmployeeDetailsService) {}

  ngOnInit() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.getEmployeesUrl = "EmployeeDetails/GetAllEmployees";
    this.queryStringObject = {
      skipCount: this.skipCount,
      displayCount: this.displayCount
    };
    this.employeeDetailsService
      .getEmployeeDetails(this.getEmployeesUrl, this.queryStringObject)
      .subscribe(
        response => {
          this.employeeDetails = response;
          console.log(this.employeeDetails);
        },
        error => {
          console.log(error);
        }
      );
  }
}
