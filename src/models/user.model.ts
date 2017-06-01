export class Login {
  constructor(
    public username: string,
    public password: string
  ){}
}

export class Register {
   constructor(
      public username: string,
      public firstname: string,
      public lastname: string,
      public email: string,
      public password: string
   ){}
}