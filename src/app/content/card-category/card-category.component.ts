import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.css']
})
export class CardCategoryComponent implements OnInit {
  @Input() key:String;
  obj: Object;
  constructor() {
      this.obj={
        "news":{title:'Noticias',img:'http://localhost:4200/assets/img/noticias.png',description:'Descripción para noticias'},
        "videos":{title:'Videos',img:'http://localhost:4200/assets/img/videos.png',description:'Descripción para videos'},
        "others":{title:'Otros',img:'http://localhost:4200/assets/img/others.png',description:'Descripción para otros'}
      }
   }

  ngOnInit() {
  }

}
