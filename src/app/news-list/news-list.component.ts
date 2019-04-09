import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsListService } from '../news-list.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsItems: NewsItem[];
  constructor(private newsListService: NewsListService) { }

  public ngOnInit() {

    this.newsListService.getNewsItems().subscribe((news) => {
      this.newsItems = news;
    },
    error => {
      console.error(error); }
    );
   }
}

export class NewsItem {
  id: string;
  title: string;
  description: string;
  author: Author;
  category: Category;
}

export class Author {
  id: number;
  name: string;
}

export class Category {
  id: number;
  name: string;
}
