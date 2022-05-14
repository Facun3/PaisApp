import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css']
})
export class AppInputComponent implements OnInit {

  @Output('busqueda') emisor: EventEmitter<string> = new EventEmitter<string>();

  @Output('onDebounce') delay: EventEmitter<string> = new EventEmitter<string>();

  @Input('placeholder') pista!: string;

  public termino: string = '';

  public placeholder: string = '';

  public debouncer: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.placeholder = this.pista;
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( 
      (result) => {
        this.delay.emit( result);
      }
    );
  }

  public ingresarBusqueda(): void{
    if(this.termino != '' && this.termino != null){
      this.emisor.emit( this.termino );
      this.termino = '';
    }
  }
  public teclaPresionada(): void {
    this.debouncer.next( this.termino);
  }

}
