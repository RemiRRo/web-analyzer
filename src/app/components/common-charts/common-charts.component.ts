import { Component } from '@angular/core';
import stats from '../../../../dist/web-analyzer/stats.json';
import { IChart } from '../../services';

@Component({
  selector: 'app-common-charts',
  templateUrl: './common-charts.component.html',
  styleUrls: ['./common-charts.component.scss']
})
export class CommonChartsComponent {
  public stats: any[] = this.getStats();
  public typeChart: string = 'standard';

  constructor() {
  }

  public getStats() {
    return stats.chunks.map((i) => {
      return {
        value: i.size,
        name: i.files[0]
      }
    })
  }

  public moreInformation(event: IChart | string) {
    if (typeof event === 'string') {

    }else {

    }
  }


}
