import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AccordionGroupComponent } from './accordion-group.component';

@Component({
  selector: 'accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent  implements AfterContentInit {
  @ContentChildren(AccordionGroupComponent)
  groups: QueryList<AccordionGroupComponent>;

  ngAfterContentInit() {
    this.groups.toArray().forEach((t) => {
      t.toggle.subscribe(() => {
        this.toggleGroup(t);
      });
    });
  }

  toggleGroup(group: any) {
    group.opened = !group.opened;
  }
}
