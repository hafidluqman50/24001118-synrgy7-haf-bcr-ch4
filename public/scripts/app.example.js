class App {
  constructor() {
    this.typeDriver = document.getElementById('type-driver')
    this.dateCar = document.getElementById('date-car')
    this.availableAt = document.getElementById('available-at')
    this.rowSeat = document.getElementById('row-seat')
    this.searchCar = document.getElementById('search-car')
    this.carContainerElement = document.getElementById("row-cars");
  }

  async init() {
    
    let self = this
    
    this.searchCar.addEventListener('click', async function() {
      await self.load()
      self.clear()
      self.run()
    });
    
    this.typeDriver.onchange = (event) => {
      if(event.target.value != '' && self.dateCar.value != '' && self.availableAt.value != '') {
        self.searchCar.removeAttribute('disabled')
      }
    }
      
    this.dateCar.onchange = (event) => {
      if(self.typeDriver.value != '' && event.target.value != '' && self.availableAt.value != '') {
        self.searchCar.removeAttribute('disabled')
      }
    }
    
    this.availableAt.onchange = (event) => {
      if(self.typeDriver.value != '' && self.dateCar.value != '' && event.target.value != '') {
        self.searchCar.removeAttribute('disabled')
      }
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add('col-md-4')
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    
    const getCars = await Binar.listCars()
    
    console.log(getCars)
    
    const newCars = getCars.map((car) => {
      const listTypeDriver = ['dengan-sopir','tanpa-sopir']
      
      return {
        ...car,
        typeDriver:listTypeDriver[(Math.floor(Math.random() * listTypeDriver.length))]
      }
    })
    
    const cars = newCars.filter((car) => {
      if(this.dateCar.value != '' && this.availableAt.value != '' && this.typeDriver.value != '') {
        let date1 = new Date(`${this.dateCar.value} ${this.availableAt.value}`)
        let date2 = new Date(car.availableAt)
        
        if(this.rowSeat.value != '') {
          if(date2.getTime() >= date1.getTime() && this.typeDriver.value == car.typeDriver && car.capacity >= this.rowSeat.value) {
            return true
          }
        } else {
          if(date2.getTime() >= date1.getTime() && this.typeDriver.value == car.typeDriver) {
            return true
          }
        }
      }
    })
    
    // const cars = await Binar.listCars((car) => {
    //   if(this.dateCar.value != '' && this.availableAt.value != '') {
    //     let date1 = new Date(`${this.dateCar.value} ${this.availableAt.value}`)
    //     let date2 = new Date(car.availableAt)
        
    //     if(this.rowSeat.value != '') {
    //       if(date2.getTime() > date1.getTime() && this.rowSeat.value == car.capacity) {
    //         return true
    //       }
    //     } else {
    //       if(date2.getTime() > date1.getTime()) {
    //         return true
    //       }
    //     }
    //   }
    // });
    
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
