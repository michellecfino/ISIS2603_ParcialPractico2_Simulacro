export class RecipeDetailDto {
  constructor(
    public id: number,
    public nombre: string,
    public porciones: number,
    public tiempo: number,
    public dificultad: string,
    public tipo: string,
    public imagen: string,
    public etiquetas: string[],
    public ingredientes: string[],
    public pasos: string[]
  ) {}
}
