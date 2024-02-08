import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  inputChange(e:any) {
    if (e.target.value.length > 0)
      e.target.previousElementSibling?.classList.add("top-0");
    else
      e.target.previousElementSibling?.classList.remove("top-0");
  }

  ngOnInit(): void {
    //To run anything when page is loaded
  }

}
