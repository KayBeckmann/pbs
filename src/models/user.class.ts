export class User {
  userName: string;
  email: string;
  password: string;
  id: number;

  /**
   *
   * @param user JSON for the new user
   */
  constructor(user?: any) {
    this.userName = user ? user.userName : "";
    this.email = user ? user.email : "";
    this.password = user ? user.password : "";
    this.id = user ? user.id : "";
  }

  /*
  public toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zip: this.zip,
      city: this.city
    };
  }
  */
}
