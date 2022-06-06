import { FoodMock } from './implementation-details.model.mock';
import { ImplementationDetailsService } from './implementation-details.service';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { ImplementationDetailsComponent } from './implementation-details.component';
import { of } from 'rxjs';

describe('ImplementationDetailsComponent', () => {
  let component: ImplementationDetailsComponent;
  let fixture: ComponentFixture<ImplementationDetailsComponent>;

  let fetchSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImplementationDetailsComponent],
      imports: [CommonModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationDetailsComponent);
    component = fixture.componentInstance;

    const service = TestBed.inject(ImplementationDetailsService);
    fetchSpy = jest
      .spyOn(service, 'fetchFood')
      .mockReturnValue(of(FoodMock.generateN(25)));

    fixture.detectChanges();
  });

  describe('testing implementation details', () => {
    it('should call fetch$$.next in fetchData', () => {
      const fetchSubjectSpy = jest.spyOn(component.fetch$$, 'next');
      component.fetchData();
      expect(fetchSubjectSpy).toHaveBeenCalledTimes(1);
    });

    it('should call ImplementationDetailsService.fetchFood with pageSize === 25', () => {
      component.fetchData();
      expect(fetchSpy).toHaveBeenCalledTimes(1);
      expect(fetchSpy).toHaveBeenCalledWith(25);
    });
  });

  describe('testing results', () => {
    it('should render list of food after button click', () => {
      const buttonDe = fixture.debugElement.query(By.css('button'));
      buttonDe.nativeElement.click();

      fixture.detectChanges();

      const listElements = fixture.debugElement.queryAll(By.css('li'));
      expect(listElements).toHaveLength(25);
    });
  });

  it('should not pass', () => {
    setTimeout(() => {
      expect(true).toBe(false);
    }, 1);
  });
});

function multiply(a: number, b: number): number {
  return a * b;
}

describe('multiply', () => {
  it.each([
    [4, 2, 8],
    [0, 2, 0],
    [9, 1, 9],
  ])(`given %d and %d should return %d`, (first, second, expected) => {
    const result = multiply(first, second);
    expect(result).toBe(expected);
  });

  it('given 4 and 2 should return 8', () => {
    expect(multiply(4, 2)).toBe(8);
  });
  it('given 0 and 2 should return 0', () => {
    expect(multiply(0, 2)).toBe(0);
  });
  it('given 9 and 1 should return 9', () => {
    expect(multiply(9, 1)).toBe(9);
  });
});
