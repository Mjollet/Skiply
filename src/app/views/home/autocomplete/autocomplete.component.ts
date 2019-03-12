import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Campaign 1.0', 'Campaign 1.1', 'Campaign 2.0', 'Campaign 3.0'];

  constructor() { }

  ngOnInit() {
  }

}
