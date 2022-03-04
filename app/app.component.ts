import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-config">
      Current value: {{value | json}}
    </div>
    <div class="example-wrapper">
      <p>Favorite sport:</p>
      <kendo-multiselect [data]="listItems" 
      [(ngModel)]="value"
      [textField]="'name'"
      [valueField]="'name'">
      <ng-template kendoMultiSelectTagTemplate let-dataItem>
      <div class="nameTemp">{{ dataItem.name }}</div>
      <div class="mcu-statu-indi">{{ dataItem.status }}</div>
      </ng-template>
      <ng-template kendoMultiSelectItemTemplate let-dataItem>
      <div class="mcu-team-drop-grid">       

        <div class="multiename">{{ dataItem.name }}</div>
      </div>
    </ng-template>
      </kendo-multiselect>
    </div>
    <div class="example-wrapper">
      <p>Dropdown 2:</p>
      <kendo-multiselect [data]="listItems"
      [textField]="'name'"
      [(ngModel)]="value"
      [valueField]="'name'"
      (valueChange)="valueChange($event)">
      <ng-template kendoMultiSelectTagTemplate let-dataItem>
      <div class="nameTemp">{{ dataItem.name }}</div>
      <div class="mcu-statu-indi">{{ dataItem.status }}</div>
      </ng-template>
      <ng-template kendoMultiSelectItemTemplate let-dataItem>
      <div class="mcu-team-drop-grid">
       <div class="multiename">{{ dataItem.name }}</div>
      </div>
     </ng-template>
      </kendo-multiselect>
    </div>
  `,
})
export class AppComponent {
  public listItems: any = [
    { name: 'Baseball' },
    { name: 'Basketball'},
    { name: 'Cricket'},
    { name: 'Field Hockey' },
    { name: 'Football' },
    { name: 'Table Tennis' },
    { name: 'Tennis' },
    { name: 'Volleyball' },
  ];
  public listItems2: any = [
    { name: 'Baseball' },
    { name: 'Basketball'},
    { name: 'Cricket'},
    { name: 'Field Hockey' },
    { name: 'Football' },
    { name: 'Table Tennis' },
    { name: 'Tennis' },
    { name: 'Volleyball' },
  ];

  public status : any = ['Available','Busy','Tentative','Unknown']
  public value: any;

  public value1: any;
  valueChange(data:any[]) {
    // this.value = data['name'];
    console.log('data', data);
    this.value = data
      data.forEach((l)=>{
      let selData = this.listItems.findIndex(
        (e) => e.name == l.name
      );
      this.listItems[selData].status = this.status[Math.floor(Math.random() * this.status.length)]
    })
    console.log('data2',  this.listItems);
  }
}
