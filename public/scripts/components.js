class Component {
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
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card" style="min-height: 38em !important;margin-bottom: 5%;">
            <img
                class="card-img-top"
                src="${this.image}" alt="${this.manufacture}"
                style="width:100%px; height:250px"
            />
            <div class="card-body">
                <p class="card-text">${this.manufacture} ${this.model} / ${this.type}</p>
                <p class="card-text">
                    <b>Rp. ${this.formatRupiah(this.rentPerDay)} / Hari</b>
                </p>
                <p class="card-text">
                    ${this.description}
                </p>
                <p class="card-text">
                    <i class="fa-solid fa-users"></i> ${this.capacity}
                    Orang
                </p>
                <p class="card-text">
                    <i class="fa-solid fa-gear"></i> ${this.transmission}
                </p>
                <p class="card-text">
                    <i class="fa-regular fa-calendar"></i>
                    Tahun ${this.year}
                </p>
                <p>
                    <button
                        href="#"
                        class="btn bg--lime-green-04 rounded-0 font--white w-100"
                    >
                        Pilih Mobil
                    </button>
                </p>
            </div>
        </div>
    `;
  }
}