import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class DataService {
  subject = new BehaviorSubject(1);

  getSubject() {
      return this.subject;
  }
  setSubject(value) {
      console.log(value);
      this.subject.next(value);
  }
}
