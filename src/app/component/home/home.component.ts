import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    // toggleBookmark(event: MouseEvent): void {
    //   const target = event.target as HTMLElement;
    //   const bookmarkIcon = target.parentElement?.querySelector('.bookmark') as HTMLElement;

    //   if (bookmarkIcon?.classList.contains("fa-heart-o")) {
    //     bookmarkIcon.classList.remove("fa-heart-o");
    //     bookmarkIcon.classList.add("fa-heart");
    //     bookmarkIcon.innerText = "Job saved";
    //   } else {
    //     bookmarkIcon.classList.remove("fa-heart");
    //     bookmarkIcon.classList.add("fa-heart-o");
    //     bookmarkIcon.innerText = "Save Job";
    //   }
    // }
  }
