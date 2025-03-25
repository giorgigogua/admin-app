import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class RecentActivityService {

  private recentActivityData = [
    {
      "name": "You",
      "date": "1hr ago",
      "activity": "Liked a post by @john_doe",
      "icon": "bi bi-hand-thumbs-up-fill",
      "id": "dfa4"
    },
    {
      "name": "Jessica Miller",
      "date": "3hr ago",
      "activity": "Commented on a photo",
      "icon": "bi bi-chat-left-fill",
      "id": "22e5"
    },
    {
      "name": "Emily Thompson",
      "date": "3hr ago",
      "activity": "Shared an article: 'Top 10 Travel Destinations'",
      "icon": "bi bi-share-fill",
      "id": "eb1c"
    },
    {
      "name": "You",
      "date": "1 day ago",
      "activity": "Started following @jane_smith",
      "icon": "bi bi-person-fill-add",
      "id": "c899"
    },
    {
      "name": "Olivia Davis",
      "date": "2 days ago",
      "activity": "Updated profile picture",
      "icon": "bi bi-person-circle",
      "id": "c899"
    }
  ]

  apiUrl = "http://localhost:3000/recentActivity"

  constructor(private httpClient: HttpClient) { }

  getCryptoList(): Observable<any> {
    return of(this.recentActivityData);
  }
}
