import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hidden-search',
  templateUrl: './hidden-search.component.html',
  styleUrls: ['./hidden-search.component.scss']
})
export class HiddenSearchComponent {
  faSearch = faSearch;
  showSearch = false;
}
