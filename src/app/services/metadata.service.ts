import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MetaInfoModel } from './../models/metadata.model';

const metainfo: MetaInfoModel[] = [
  {
    Name: 'String',
    Children: [
      {
        Name: 'Equal',
        Description: 'is string equal',
        Children: [],
        Type: 'bool',
        InputParameters: { otherString: 'string' }
      }
    ],
    Description: '',
    Type: 'string'
  },
  {
    Name: 'WebApi',
    Description: 'container for web api methods',
    Children: [
      {
        Name: 'GetRoleById',
        Description: 'Get role information by unique identifier',
        Type: 'Role',
        Children: [],
        InputParameters: { roleId: 'int' }
      },
      {
        Name: 'GetEmployeeById',
        Description: 'get employee information by unique identifier',
        Type: 'Employee',
        Children: [],
        InputParameters: { employeeId: 'int' }
      },
      {
        Name: 'AssignRoleToEmployee',
        Description: 'assign role for employee',
        Type: 'void',
        Children: [],
        InputParameters: { roleId: 'int', employeeId: 'int' }
      }
    ],
    Type: 'class'
  }
];

@Injectable()
export class MetadataService {
  constructor() {}

  getMetadata(): Observable<MetaInfoModel[]> {
    return of(metainfo);
  }
}
