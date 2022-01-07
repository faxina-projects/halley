class ViaCepAddressDTO {
  public readonly cep!: string;
  public readonly logradouro!: string;
  public readonly complemento!: string;
  public readonly bairro!: string;
  public readonly localidade!: string;
  public readonly uf!: string;
  public readonly ibge!: string;
  public readonly gia!: string;
  public readonly ddd!: string;
  public readonly siafi!: string;
  public readonly erro!: boolean;
}

export { ViaCepAddressDTO };
