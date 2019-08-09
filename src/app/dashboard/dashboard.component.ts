import { Component, OnInit, ViewChild } from "@angular/core";
import { UIChart } from "primeng/components/chart/chart";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  @ViewChild("lineChart", { static: false }) lineChart: UIChart;
  @ViewChild("pieChart", { static: false }) pieChart: UIChart;
  @ViewChild("barChart", { static: false }) barChart: UIChart;
  @ViewChild("doughnutChart", { static: false }) doughnutChart: UIChart;
  public user;
  public showChart: boolean = false;
  public showLoader: boolean = false
  data: any = {
    chart1: {},
    chart2: {},
    barChart: {},
    doughnutChart: {}
  };
  options: any;
  constructor(private sharedService: SharedService) {
    this.options = {
      chart1:{
        title: {
          display: true,
          text: "Velocity Predictability",
          fontSize: 16
        },
        barWidth: 10
      },
      chart2:{
        title: {
          display: true,
          text: "Accepted/Commited",
          fontSize: 16
        },
        barWidth: 10
      },
      chart3:{
        title: {
          display: true,
          text: "Scope Change",
          fontSize: 16
        },
        barWidth: 10
      },
      chart4:{
        title: {
          display: true,
          text: "Priority",
          fontSize: 16
        },
        barWidth: 10
      }
      
  }
}

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem("user"));
    this.showLoader = true;
    this.sharedService.httpGet("getCharts").subscribe(res => {
      this.showLoader = false;
      if (res.content) {
        // this.data = {
        //   chart1:{
        //     labels:["MAT Sprint 1","MAT Sprint 2","MAT Sprint 3","MAT Sprint 4"],
        //     datasets:[
        //           {
        //               label: 'Velocity-Velocity Predictability',
        //               backgroundColor: '#ff8302',
        //               borderColor: '#ff8302',
        //               width:10,
        //               data: [7, 8, 23,20]
        //           },
        //           {
        //             label: '',
        //             backgroundColor: '#ccc0',
        //             borderColor: '#ccc0',
        //             data: [0,0, 0, 0]
        //         }
               
              
        //     ]
        //   },
        //   chart2:{
        //     labels:["MAT Sprint 1","MAT Sprint 2","MAT Sprint 3","MAT Sprint 4"],
        //     datasets:[
        //           {
        //               label: 'Accepted/Commited',
        //               backgroundColor: '#ff8302',
        //               borderColor: '#ff8302',
        //               data: [100, 133, 100,100]
        //           },
        //           {
        //             label: '',
        //             backgroundColor: '#ccc0',
        //             borderColor: '#ccc0',
        //             data: [0,0, 0, 0]
        //         }
               
              
        //     ]
        //   },
        //   chart3:{
        //     labels:["MAT Sprint 1","MAT Sprint 2","MAT Sprint 3","MAT Sprint 4"],
        //     datasets:[
        //           {
        //               label: 'Added Scope',
        //               backgroundColor: '#f3098b',
        //               borderColor: '#f3098b',
        //               data: [0, 17, 0, 0]
        //           },
        //           {
        //             label: 'Commited Work',
        //             backgroundColor: '#ff8302',
        //             borderColor: '#ff8302',
        //             data: [12, 14, 23, 20]
        //         },
        //         {
        //           label: 'Removed Scope',
        //           backgroundColor: '#2487e1',
        //           borderColor: '#ff8302',
        //           data: [0, 0, 0, 0]
        //       },
        //       {
        //         label: '',
        //         backgroundColor: '#ccc0',
        //         borderColor: '#ccc0',
        //         data: [0,0, 0, 0]
        //     }
               
              
        //     ]
        //   },
        //   chart4:{
        //     labels:["MAT Sprint 1","MAT Sprint 2","MAT Sprint 3","MAT Sprint 4"],
        //     datasets:[
        //           {
        //               label: 'Lowest',
        //               backgroundColor: '#5a0621',
        //               borderColor: '#5a0621',
        //               data: [1, 0, 0, 0]
        //           },
        //           {
        //             label: 'Heigh',
        //             backgroundColor: '#ff8302',
        //             borderColor: '#ff8302',
        //             data: [2, 1, 2, 5]
        //         },
        //         {
        //           label: 'Low',
        //           backgroundColor: '#06c',
        //           borderColor: '#06c',
        //           data: [3, 0, 3, 0]
        //       },
        //       {
        //         label: 'Heighest',
        //         backgroundColor: '#8dcdff',
        //         borderColor: '#8dcdff',
        //         data: [5, 2, 4, 0]
        //     },
        //     {
        //       label: 'Medium',
        //       backgroundColor: '#f32a09',
        //       borderColor: '#f32a09',
        //       data: [0, 3, 5, 5]
        //   }
               
              
        //     ]
        //   }
          
        // };
        this.data = res.content
        this.showChart = true;
        setTimeout(() => {
          this.barChart.reinit();
          this.pieChart.reinit();
          this.lineChart.reinit();
          this.doughnutChart.reinit();
        });
      }
    });
  }
}

