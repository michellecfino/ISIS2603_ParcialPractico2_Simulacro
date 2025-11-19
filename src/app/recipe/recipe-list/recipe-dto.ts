export class RecipeDto {
  constructor(
    public id: number,
    public nombre: string,
    public tiempo: number,
    public tipo: string,
    public imagen: string,
    public porciones: number,
    public etiquetas: string[]
  ) { }
}
