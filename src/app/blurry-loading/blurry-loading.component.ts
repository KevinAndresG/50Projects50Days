import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-blurry-loading',
  templateUrl: './blurry-loading.component.html',
  styleUrls: ['./blurry-loading.component.scss']
})
export class BlurryLoadingComponent implements OnInit, OnDestroy {
  contador: number = 0;
  subscription: Subscription | any;

  ngOnInit(): void {
    this.subscription = interval(33).subscribe(() => {
      this.contador++;
      if (this.contador === 100) {
        this.subscription.unsubscribe();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
