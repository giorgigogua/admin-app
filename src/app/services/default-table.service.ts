import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DefaultTableInterface } from '../interfaces/default-table';
import { map } from 'rxjs/operators';

@Injectable()
export class DefaultTableService {

  private defaultTableData = [
    {
      "title": "Filters AI",
      "author": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-2.jpg",
      "authorName": "Michael Johnson",
      "description": "Updated on Apr 10, 2024",
      "status": "Ready to ship",
      "updated": "Title",
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-1.png",
      "team": [
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-2.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-3.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-4.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-5.jpg"
        }
      ],
      "id": "ca5c"
    },
    {
      "title": "Design landing page",
      "author": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-1.jpg",
      "authorName": "Emily Thompson",
      "description": "Created on Mar 05, 2024",
      "status": "Cancelled",
      "updated": "Title",
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png",
      "team": [
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-4.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-5.jpg"
        }
      ],
      "id": "ca5c"
    },
    {
      "title": "Update documentation",
      "author": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-2.jpg",
      "authorName": "Michael Johnson",
      "status": "In Testing",
      "updated": "Title",
      "description": "Created on Jan 22, 2024",
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png",
      "team": [
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-1.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-3.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-6.jpg"
        }
      ],
      "id": "ca5c"
    },
    {
      "title": "Update Touche",
      "author": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-5.jpg",
      "authorName": "Jessica Miller",
      "status": "Ready to ship",
      "description": "Updated on Apr 14, 2024",
      "updated": "Title",
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-3.png",
      "team": [
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-3.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-4.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-5.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-6.jpg"
        }
      ],
      "id": "ca5c"
    },
    {
      "title": "Add Transactions",
      "author": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-4.jpg",
      "authorName": "Olivia Davis",
      "status": "Backlog",
      "description": "Created on Apr 25, 2024",
      "updated": "Title",
      "img": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/projects/project-2.png",
      "team": [
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-3.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-6.jpg"
        },
        {
          "image": "https://yevgenysim-turkey.github.io/dashbrd/assets/img/photos/photo-1.jpg"
        }
      ],
      "id": "ca5c"
    }
  ]

  apiUrl = "http://localhost:3000/defaultTableList"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return of(this.defaultTableData);
  }

  // postTableList(data: DefaultTableInterface) {
  //   return this.httpClient.post(this.apiUrl, data)
  // }



  // get data with filter


  getFilteredData(searchByTitle: string = ''): Observable<any[]> {
    let params = new HttpParams();

    if (searchByTitle) {

      params = params.set('title', searchByTitle)
    }

    return this.httpClient.get<DefaultTableInterface[]>(this.apiUrl).pipe(
      map((data: any[]) => this.filterData(data, searchByTitle))
    );
  }

  private filterData(data: any[], searchByTitle: string): any[] {
    let filteredProducts = data;

    if (searchByTitle) {
      filteredProducts = filteredProducts.filter(data =>
        data.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }


    return filteredProducts;
  }

  //get data with filter end

  getData(status: string): Observable<any[]> {

    return of(this.defaultTableData).pipe(
      map(items => {
        if (status === 'All') {
          return this.defaultTableData;
        }
        return items.filter(item => item.status === status);
      })
    );
  }

  getStatuses(): Observable<string[]> {
    const statuses = Array.from(new Set(this.defaultTableData.map(item => item.status)));
    return of(['All', ...statuses]);
  }


}
