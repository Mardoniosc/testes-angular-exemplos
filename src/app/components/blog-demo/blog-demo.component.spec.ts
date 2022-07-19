import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDemoComponent } from './blog-demo.component';

describe('BlogDemoComponent', () => {
  let component: BlogDemoComponent;
  let fixture: ComponentFixture<BlogDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clique() deve alterar #estaLigado', () => {
    const comp = new BlogDemoComponent();
    expect(comp.isOn)
      .withContext('Desligada Primeiro')
      .toBe(false);
    comp.clicked();
    expect(comp.isOn)
      .withContext('Ligada depois do 1° click')
      .toBe(true);
    comp.clicked();
    expect(comp.isOn)
      .withContext('Desligada depois do 2° click')
      .toBe(false);
  });

  it('#clique() deve definia a #mensagem para "está Ligada"', () => {
    const comp = new BlogDemoComponent();
    expect(comp.message)
      .withContext('Inicia desligado')
      .toMatch(/está Desligada/i);
    comp.clicked();
    expect(comp.message)
      .withContext('depois de clicado')
      .toMatch(/está Ligada/i);
  });
});
