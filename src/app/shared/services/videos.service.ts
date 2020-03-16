import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class VideosService {
  getVideosFromServer(): Object[] {
    return [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 }
    ];
  }

  getVisibleVideos(): Object[][] {
    const videosFromServer = this.getVideosFromServer();
    const arr: Object[][] = [];
    for (let i: number = 0; i <= videosFromServer.length; i += 4) {
      arr.push(videosFromServer.slice(i, i + 4));
    }
    return arr;
  }

  getButtons(): Object[] {
    return this.getVisibleVideos().map((item, index: number) =>
      index === 0
        ? {
            index: index,
            active: true
          }
        : {
            index: index,
            active: false
          }
    );
  }
}
