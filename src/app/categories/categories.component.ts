import { Component, OnInit } from '@angular/core';
import { Thread } from '../thread.model';
import { Router } from '@angular/router';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [ThreadService]
})
export class CategoriesComponent implements OnInit {

  threads: Thread[];
  constructor(private router: Router, private threadService: ThreadService){}

  ngOnInit() {
    this.threads= this.threadService.getThreads();
  }
  goToThreadPage(clickedThread: Thread) {
    this.router.navigate(['thread', clickedThread.id]);
  }
}
