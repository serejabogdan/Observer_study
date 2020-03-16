import { Component, OnInit, Input } from "@angular/core";
import { VideosService } from "../../../../shared/services/videos.service";
import { DataService } from "../../../../shared/services/data.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  visibleVideos: Object[] = [];

  constructor(
    private videosService: VideosService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.getSubject().subscribe(btnNumber => this.visibleVideos = this.setVisibleVideos(btnNumber));
  }

  setVisibleVideos(btnNumber: number): Object[] {
    return this.videosService.getVisibleVideos()[btnNumber];
  }
}
