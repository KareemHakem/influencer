import * as Yup from "yup";

export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
});

export const validationRegisterSchema = Yup.object().shape({
  firstName: Yup.string().required().min(4).label("First Name"),
  secondName: Yup.string().required().min(4).label("Second Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(20).label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const validationEditProfile = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  phoneNumber: Yup.number().required().min(11).label("Phone Number"),
  city: Yup.string().required().min(4).label("City"),
  bio: Yup.string().required().label("Bio"),
  price: Yup.number().required().label("Price"),
  fbAccount: Yup.string().required().label("Facebook Account"),
  fbFriends: Yup.number().required().label("Facebook Friends"),
  instAccount: Yup.string().required().label("Instagram Account"),
  instFollowers: Yup.number().required().label("Instagram Followers"),
});
