import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { RestService } from 'src/app/core/services/rest.service';
import { Chart, registerables } from 'chart.js';
import { Task } from 'src/app/core/models';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss'],
})
export class ChartPageComponent implements OnInit {
  taskPerDay: Task.chartDataModel[] = [];

  constructor(private _restService: RestService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    let i = 1;

    this._restService
      .getAllTasks()
      .pipe(
        map((tasks) => {
          tasks.forEach((element) => {
            const object: any = {};
            let day = new Date(element.dueDate)
              .toISOString()
              .split('T')[0];

            if (
              this.taskPerDay.length !== 0 &&
              this.taskPerDay[this.taskPerDay.length - 1].x === day
            ) {
              i++;
              this.taskPerDay[this.taskPerDay.length - 1].y = i;
            } else {
              i = 1;
              Object.assign(object, { x: day, y: 1 });
              this.taskPerDay.push(object);
            }
          });
        })
      )
      .subscribe(() => {
        const labels: string[] = [];

        this.taskPerDay.forEach((el) => {
          labels.push(el.x);
        });

        var myChart = new Chart('chart', {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Number of tasks per day',
                data: this.taskPerDay,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      });
  }
}
