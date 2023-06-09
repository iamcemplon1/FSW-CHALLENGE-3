class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
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
    const rentCost = rupiah(this.rentPerDay);
    return `
          <div class="col">
              <div class="card w-100" style="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);">
                  <img src="${this.image}" class="card-img-top img-fluid" alt="${this.manufacture}" style="height: 195px; border-radius: 3px; object-fit: cover;" />
                  <div class="card-body" style="font-size: 14px">
                      <p class="card-title">${this.manufacture} ${this.model}</p>
                      <p class="fw-bold">${rentCost} / hari</p>
                      <p class="card-text" style="min-height: 90px">${this.description}</p>
                      <div class="my-2">${this.capacity} Orang</div>
                      <div class="my-2">${this.transmission}</div>
                      <div class="my-2">Tahun ${this.year}</div>
                      <a href="#" class="btn btn-success text-white w-100 mt-2 fw-bold mt-4 " style="font-size: 14px">Pilih Mobil</a>
                  </div>
              </div>
          </div>
      `;
  }
}
