import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsListService } from '../news-list.service';
import { NewsItem } from '../news-list/news-list.component';

@Component({
  selector: 'app-reactive-news-form',
  templateUrl: './reactive-news-form.component.html',
  styleUrls: ['./reactive-news-form.component.css']
})
export class ReactiveNewsFormComponent implements OnInit {

  editNewsForm: FormGroup;
  newsId: '';
  newsItem: NewsItem;

  constructor(route: ActivatedRoute, private newsListService: NewsListService) {

    this.newsId = route.snapshot.params.id;

    newsListService.getNewsItemById(this.newsId);

    this.editNewsForm = new FormGroup({
      title: new FormControl('ssss'),
      description: new FormControl('ssss')
    });
  }

  submitEditedValues() {

    const currentFormValues = {
      title: this.editNewsForm.value.title,
      description: this.editNewsForm.value.description
    };

    this.newsListService.patchNewsItemById(this.newsId, currentFormValues)
      .subscribe((patchedItem) => {
        console.log(patchedItem);
      },
      error => {
        console.error(error); }
      );
  }

  ngOnInit() {

    this.newsListService.getNewsItemById(this.newsId).subscribe((newsItem) => {
      this.newsItem = newsItem;
      console.log(this.newsItem);
    },
    error => {
      console.error(error); }
    );
   }

}
