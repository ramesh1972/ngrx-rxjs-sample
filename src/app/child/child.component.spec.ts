import { TestBed, async } from '@angular/core/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildComponent
      ],
    }).compileComponents();
  }));
});
