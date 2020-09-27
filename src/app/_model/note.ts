export class Note {
  constructor(
    public id: number = null,
    public name: string = null,
    public createDate: string = null,
    public description: string = null,
    public isPriority: boolean = null,
    public executionDate: string = null,
  ) {
  }
}
