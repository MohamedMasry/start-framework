import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {





  portImgs: string[] = ['./assets/images/port-1.png', './assets/images/port-2.png', './assets/images/port-3.png', './assets/images/port-1.png', './assets/images/port-2.png', './assets/images/port-3.png'];


  openModal(eventInfo: any) {
    const modalContainer = document.getElementById("modal-container") as HTMLElement;
    const imgContainer = document.getElementById("modal-img");

    modalContainer.classList.remove("d-none");
    imgContainer?.setAttribute('src',eventInfo.currentTarget.children[0].src)
    console.log(eventInfo.currentTarget.children[0].src)
  }

  closeModal(eventInfo: any) {
    const modalContainer = document.getElementById("modal-container") as HTMLElement;
    if(eventInfo.target.tagName == "DIV")
    modalContainer.classList.add("d-none");

  }

}

