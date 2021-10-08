export enum FormFields {
  FirstName = 'firstName',
  LastName = 'lastName',
  Username = 'username',
  Email = 'email',
  Password = 'password',
  NewPassword = 'newPassword',
  WantNotifications = 'wantNotifications',
  AcceptTermsAndConditions ='acceptTermsAndConditions',
}

export interface IFormValues {
  [FormFields.FirstName]: string;
  [FormFields.LastName]: string;
  [FormFields.Username]: string;
  [FormFields.Email]: string;
  [FormFields.Password]: string;
  [FormFields.NewPassword]: string;
  [FormFields.WantNotifications]: boolean;
  [FormFields.AcceptTermsAndConditions]: boolean;
}
