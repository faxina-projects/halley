class AddressDTO {
  private constructor(
    public readonly zipCode: string,
    public readonly street: string,
    public readonly address2: string,
    public readonly neighborhood: string,
    public readonly city: string,
    public readonly state: string,
    public readonly ibge: string,
    public readonly gia: string,
    public readonly ddd: string,
    public readonly siafi: string,
  ) {}

  static builder({
    zipCode,
    street,
    address2,
    neighborhood,
    city,
    state,
    ibge,
    gia,
    ddd,
    siafi,
  }: AddressDTO): AddressDTO {
    return new AddressDTO(
      zipCode,
      street,
      address2,
      neighborhood,
      city,
      state,
      ibge,
      gia,
      ddd,
      siafi,
    );
  }
}

export { AddressDTO };
