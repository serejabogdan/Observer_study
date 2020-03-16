import { Component, OnInit } from "@angular/core";
import { DataService } from "../../../../../shared/services/data.service";
import { VideosService } from "../../../../../shared/services/videos.service";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"]
})
export class PaginatorComponent implements OnInit {
  buttons: Object[] = [];
  constructor(
    private dataService: DataService,
    private videosService: VideosService
  ) {}


  ngOnInit(): void {
    this.buttons = this.videosService.getButtons();
    console.log(this.videosService.getButtons());
  }

  getIndexBtn(value: number) {
    this.dataService.setSubject(value);
  }
}
