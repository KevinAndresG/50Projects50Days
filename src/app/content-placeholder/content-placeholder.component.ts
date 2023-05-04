import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.scss']
})
export class ContentPlaceholderComponent implements OnInit {
  loading = true
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 3000);

  }
}
