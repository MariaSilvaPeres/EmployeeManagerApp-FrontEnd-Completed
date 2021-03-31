import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { environment } from 'src/environments/environment';

@Injectable ({
  providedIn: 'root'
})

export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor( private http: HttpClient ) { }

  // View all employees
  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
  }

  // Add Employees
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee)
  }

    // Update Employees
    public updateEmployee(employee: Employee): Observable<Employee> {
      return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee)
    }

    // Delete Employees
    // return void because the responde will be a status and not a employee
    public deleteEmployee(employeeId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}
