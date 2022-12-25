export class Post {
  public id;
  public username;
  public name;
  public title;
  public description;
  public detalle;
  public date;
  public status;
  public estado;
  public picture;
  set(data: any){
    this.id = data.id;
    this.username = data.username;
    this.name = data.title;
    this.description = data.detalle;
    this.date = data.date;
    this.status = data.estado;
    this.picture = 'https://picsum.photos/400/200';
  }
}
