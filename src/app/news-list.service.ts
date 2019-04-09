import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsItem } from './news-list/news-list.component';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

  constructor(private client: HttpClient) { }

  public getNewsItems() {
    return this.client.get<NewsItem[]>('http://localhost:3000/news');
  }

  public getNewsItemById(id: string) {
    return this.client.get<NewsItem>('http://localhost:3000/news/' + id);
  }

  public patchNewsItemById(id: string, body: any) {
    return this.client.patch('http://localhost:3000/news/' + id, body);
  }
}
