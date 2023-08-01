import { Component, OnInit } from '@angular/core';
import { LiveUserService } from '../services/live-user.service';

@Component({
  selector: 'app-live-user-filter',
  templateUrl: './live-user-filter.component.html',
  styleUrls: ['./live-user-filter.component.scss']
})
export class LiveUserFilterComponent implements OnInit {
  users: any = []
  filtered: any = []
  filtering = false;
  constructor(private liveUserService: LiveUserService) { }
  ngOnInit(): void {
    this.liveUserService.getUsers().then(resp => {
      this.users = resp.results
    })
  }
  filter = (e: any) => {
    this.filtering = e.target.value.length > 0 ? true : false
    this.filtered = this.users.filter((user: any) =>
      user.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.name.last.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.location.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
      user.location.country.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }
}
