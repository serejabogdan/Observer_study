import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  counter: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
