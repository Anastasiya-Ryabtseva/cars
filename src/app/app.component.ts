import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  priceForm = this.fb.group(controlsConfig: {
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  });

  carsData = [
    {
      image: "1.png",
      name: "Lamborgini Huracan Spyder",
      transmission: "автомат",
      engine: 5.2,
      year: 2019
    },
    {
      image: "2.png",
      name: "Chevrolet Corvette",
      transmission: "автомат",
      engine: 6.2,
      year: 2017
    },
    {
      image: "3.png",
      name: "Ferrari California",
      transmission: "автомат",
      engine: 3.9,
      year: 2010
    },
    {
      image: "4.png",
      name: "Lamborghini Urus",
      transmission: "автомат",
      engine: 4.0,
      year: 2019
    },
    {
      image: "5.png",
      name: "Audi R8",
      transmission: "автомат",
      engine: 5.2,
      year: 2018
    },
    {
      image: "6.png",
      name: "Chevrolet Camaro",
      transmission: "автомат",
      engine: 4.0,
      year: 2019
    },
    {
      image: "7.png",
      name: "Maserati Quattroporte",
      transmission: "автомат",
      engine: 3.0,
      year: 2018
    },
    {
      image: "8.png",
      name: "Dodge Challenger",
      transmission: "автомат",
      engine: 6.4,
      year: 2019
    },
    {
      image: "9.png",
      name: "Nissan GT-R",
      transmission: "автомат",
      engine: 3.8,
      year: 2019
    },
  ];
  constructor(private fb: FormBuilder) {
  }

goScroll(target: HTMLElement, car?: any) {
  target.scrollIntoView({behavior: "smooth"});
  if (car) {
    this.priceForm.patchValue({car: car.name});
  }
}
  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку. Мы свяжемся с вами в ближайшее время!");
      this.priceForm.reset();
    }
  }
}
