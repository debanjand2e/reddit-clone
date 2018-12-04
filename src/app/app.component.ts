import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 'This application is made using Angular 7', 10),
      new Article('Google', 'https://google.com', 'Your Link should contain a http:// prefix', 5),
      new Article('Facebook', 'https://facebook.com', 'Feel free to play around!', 2)
    ];
  }


  addArticle(title: HTMLInputElement, link: HTMLInputElement, desc: HTMLInputElement): boolean {
    // console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    // return false;

    this.articles.push(new Article(title.value, link.value, desc.value, 0));
    title.value = '';
    link.value = '';
    desc.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

}
