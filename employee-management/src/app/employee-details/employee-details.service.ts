import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EmployeeDetails } from "../Models/employee-details";

@Injectable({
  providedIn: "root"
})
export class EmployeeDetailsService {
  constructor(private http: HttpClient) {}

  getEmployeeDetails(
    getEmployeesUrl: string,
    queryParams: object
  ): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(
      environment.baseUrl + getEmployeesUrl,
      {
        params: Object.assign(queryParams)
      }
    );
  }
}
