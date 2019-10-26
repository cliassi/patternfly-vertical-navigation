import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { Router } from "@angular/router";
import { VerticalNavigationItem } from "patternfly-ng/navigation/vertical-navigation/vertical-navigation-item";

@Component({
  selector: "app-vertical-nav-test",
  templateUrl: "./vertical-nav-test.component.html",
  styleUrls: ["./vertical-nav-test.component.scss"]
})
export class VerticalNavTestComponent implements OnInit {
  navigationItems: VerticalNavigationItem[];
  actionText: string = "";

  constructor(private chRef: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.navigationItems = [
      {
        title: "Dashboard",
        iconStyleClass: "fa fa-dashboard",
        url: "/verticalnavigation/dashboard"
      },
      {
        title: "Dolor",
        iconStyleClass: "fa fa-shield",
        url: "/verticalnavigation/dolor",
        badges: [
          {
            count: 1283,
            tooltip: "Total number of items"
          }
        ]
      },
      {
        title: "Ipsum",
        iconStyleClass: "fa fa-space-shuttle",
        children: [
          {
            title: "Intellegam",
            children: [
              {
                title: "Recteque",
                url: "/verticalnavigation/ipsum/intellegam/recteque",
                badges: [
                  {
                    count: 6,
                    tooltip: "Total number of error items",
                    badgeClass: "example-error-background"
                  }
                ]
              },
              {
                title: "Suavitate",
                url: "/verticalnavigation/ipsum/intellegam/suavitate",
                badges: [
                  {
                    count: 2,
                    tooltip: "Total number of items"
                  }
                ]
              },
              {
                title: "Vituperatoribus",
                url: "/verticalnavigation/ipsum/intellegam/vituperatoribus",
                badges: [
                  {
                    count: 18,
                    tooltip: "Total number of warning items",
                    badgeClass: "example-warning-background"
                  }
                ]
              }
            ]
          },
          {
            title: "Copiosae",
            children: [
              {
                title: "Exerci",
                url: "/verticalnavigation/ipsum/copiosae/exerci",
                badges: [
                  {
                    count: 2,
                    tooltip: "Total number of error items",
                    iconStyleClass: "pficon pficon-error-circle-o"
                  },
                  {
                    count: 6,
                    tooltip: "Total number warning error items",
                    iconStyleClass: "pficon pficon-warning-triangle-o"
                  }
                ]
              },
              {
                title: "Quaeque",
                url: "/verticalnavigation/ipsum/copiosae/quaeque",
                badges: [
                  {
                    count: 0,
                    tooltip: "Total number of error items",
                    iconStyleClass: "pficon pficon-error-circle-o"
                  },
                  {
                    count: 4,
                    tooltip: "Total number warning error items",
                    iconStyleClass: "pficon pficon-warning-triangle-o"
                  }
                ]
              },
              {
                title: "Utroque",
                url: "/verticalnavigation/ipsum/copiosae/utroque",
                badges: [
                  {
                    count: 1,
                    tooltip: "Total number of error items",
                    iconStyleClass: "pficon pficon-error-circle-o"
                  },
                  {
                    count: 2,
                    tooltip: "Total number warning error items",
                    iconStyleClass: "pficon pficon-warning-triangle-o"
                  }
                ]
              }
            ]
          },
          {
            title: "Patrioque",
            children: [
              {
                title: "Novum",
                url: "/verticalnavigation/ipsum/patrioque/novum"
              },
              {
                title: "Pericula",
                url: "/verticalnavigation/ipsum/patrioque/pericula"
              },
              {
                title: "Gubergren",
                url: "/verticalnavigation/ipsum/patrioque/gubergren"
              }
            ]
          },
          {
            title: "Accumsan",
            url: "/verticalnavigation/ipsum/Accumsan",
            badges: [
              {
                count: 2,
                tooltip: "Total number of error items",
                iconStyleClass: "pficon pficon-error-circle-o"
              },
              {
                count: 6,
                tooltip: "Total number warning error items",
                iconStyleClass: "pficon pficon-warning-triangle-o"
              }
            ]
          }
        ]
      },
      {
        title: "Amet",
        iconStyleClass: "fa fa-paper-plane",
        id: "myAmetId",
        children: [
          {
            title: "Detracto",
            children: [
              {
                title: "Delicatissimi",
                url: "/verticalnavigation/amet/detracto/delicatissimi"
              },
              {
                title: "Aliquam",
                url: "/verticalnavigation/amet/detracto/aliquam"
              },
              {
                title: "Principes",
                url: "/verticalnavigation/amet/detracto/principes"
              }
            ]
          },
          {
            title: "Mediocrem",
            children: [
              {
                title: "Convenire",
                url: "/verticalnavigation/amet/mediocrem/convenire"
              },
              {
                title: "Nonumy",
                url: "/verticalnavigation/amet/mediocrem/nonumy"
              },
              {
                title: "Deserunt",
                url: "/verticalnavigation/amet/mediocrem/deserunt"
              }
            ]
          },
          {
            title: "Corrumpit",
            children: [
              {
                title: "Aeque",
                url: "/verticalnavigation/amet/corrumpit/aeque"
              },
              {
                title: "Delenit",
                url: "/verticalnavigation/amet/corrumpit/delenit"
              },
              {
                title: "Qualisque",
                url: "/verticalnavigation/amet/corrumpit/qualisque"
              }
            ]
          },
          {
            title: "urbanitas",
            url: "/verticalnavigation/amet/urbanitas"
          }
        ]
      },
      {
        title: "Adipscing",
        iconStyleClass: "fa fa-graduation-cap",
        url: "/verticalnavigation/adipscing"
      },
      {
        title: "Lorem",
        iconStyleClass: "fa fa-gamepad",
        url: "/verticalnavigation/lorem"
      }
    ];
  }
  onItemClicked($event: VerticalNavigationItem): void {
    this.actionText += "Item Clicked: " + $event.title + "\n";
  }

  onNavigation($event: VerticalNavigationItem): void {
    this.actionText += "Navigation event fired: " + $event.title + "\n";
  }
}
