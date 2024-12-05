export class Student {
  constructor(
    public id: number,
    public name?: string,
    public family?: string,
    public address?: string,
    public tel?: string,
    public status?: boolean,
    public avg?: number,
    public Leavingdate?:Date
  ) { }
}