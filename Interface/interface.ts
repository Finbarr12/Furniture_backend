export interface Iadmin {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  passwordResetPin: number | undefined;
}

export interface Iproducts {
  name: string;
  Image: string;
}

export interface Ireset {
  userId: string;
  pin: number;
  createdAt: string;
}
