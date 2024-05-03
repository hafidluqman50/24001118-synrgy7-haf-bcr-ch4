class Car extends Component {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }
  
  formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', { minimumFractionDigits:0 }).format(number)
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    super({
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    })
  }
}
