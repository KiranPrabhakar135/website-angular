import { Injectable } from '@angular/core';
import data from '../stubs/workExperienceStub.json';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor() { }

  public getWorkExperience(): Array<WorkExperience> {
    // @ts-ignore
    return data;
  }
  public getSpecificExperience(cmpyName): WorkExperience {
    // @ts-ignore
    return data.find(item => item.companyName === cmpyName);
  }
}
