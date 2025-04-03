import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BarChartService {
  // apiUrl = "http://localhost:3000/defaultBar"
  // apiUrl1 = "http://localhost:3000/homeBar"
  // apiUrl2 = "http://localhost:3000/profileBar"
  // apiUrl3 = "http://localhost:3000/contactBar"

  defaultBarData = [
    {
      "label": "Mon",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "3a70"
    },
    {
      "label": "Tue",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "99fe"
    },
    {
      "label": "Wed",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "d4b9"
    },
    {
      "label": "Thu",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "8339"
    },
    {
      "label": "Fri",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "60d1"
    },
    {
      "label": "Sat",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "575d"
    },
    {
      "label": "Sun",
      "dataOne": "199",
      "dataTwo": "222",
      "backgroundColor": "lightgrey",
      "backgroundColor2": "blue",
      "id": "93a2"
    }
  ]


  homeBarData = [
    {
      "label": "Jan 01",
      "homeBarData": "55",
      "homeBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "homeBarData": "22",
      "homeBarbackgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "homeBarData": "25",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "30",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "33",
      "homeBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "homeBarData": "22",
      "homeBarbackgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "homeBarData": "25",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "30",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "32",
      "homeBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "homeBarData": "22",
      "homeBarbackgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "homeBarData": "25",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "30",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "24",
      "homeBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "homeBarData": "22",
      "homeBarbackgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "homeBarData": "25",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "homeBarData": "30",
      "homeBarbackgroundColor": "blue",
      "id": "93a2"
    }
  ]


  profileBarData = [
    {
      "label": "Jan 01",
      "profileBarData": "34",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "32",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "22",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "45",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "22",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "32",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "35",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "34",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "33",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "33",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "32",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "43",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "55",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "34",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "22",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "profileBarData": "43",
      "profileBarbackgroundColor": "blue",
      "id": "3a70"
    }
  ]


  contactBarData = [
    {
      "label": "Jan 01",
      "contactBarData": "55",
      "backgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "contactBarData": "21",
      "backgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "contactBarData": "32",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "34",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "21",
      "backgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "contactBarData": "22",
      "backgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "contactBarData": "33",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "34",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "21",
      "backgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "contactBarData": "22",
      "backgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "contactBarData": "33",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "34",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "21",
      "backgroundColor": "blue",
      "id": "3a70"
    },
    {
      "label": "Jan 01",
      "contactBarData": "22",
      "backgroundColor": "blue",
      "id": "99fe"
    },
    {
      "label": "Jan 01",
      "contactBarData": "33",
      "backgroundColor": "blue",
      "id": "93a2"
    },
    {
      "label": "Jan 01",
      "contactBarData": "34",
      "backgroundColor": "blue",
      "id": "93a2"
    }
  ]

  constructor(private httpClient: HttpClient) {


  }

  getBarData(): Observable<any> {
    return of(this.defaultBarData)
  }


  getHomeBarData(): Observable<any> {
    return of(this.homeBarData)
  }
  getProfileBarData(): Observable<any> {
    return of(this.profileBarData)
  }
  getContactBarData(): Observable<any> {
    return of(this.contactBarData)
  }
}
