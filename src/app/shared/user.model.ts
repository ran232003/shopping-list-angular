export class User {
  constructor(
    public email: string,
    public name: string,
    public password: string,
    public id: string,
    private token: string
  ) {}

  getToken() {
    return this.token;
  }
}
