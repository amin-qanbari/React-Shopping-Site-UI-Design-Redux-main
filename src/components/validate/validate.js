export const validate = (data, type) => {
  const errors = {};


  //username
  if (!data.username) {
    errors.username = "لطفا نام کاربری خود را وارد کنید";
  } else {
    delete errors.username;
  }

  //password
  if (!data.password) {
    errors.password = "لطفا رمز عبور خود را وارد کنید";
  } else if (data.password.length < 6) {
    errors.password = "رمز عبور باید بیشتر از 6 کاراکتر باشد";
  } else {
    delete errors.password;
  }



  if (type === "signin") {

    //name
    if(!data.name) {
        errors.name = "لطفا نام خود را وارد کنید" ;
    } else {
        delete errors.name
    }

    //lastName
    if(!data.lastName) {
        errors.lastName = "لطفا نام خانوادگی خود را وارد کنید" ;
    } else {
        delete errors.lastName
    }

  //email
  if (!data.email) {
    errors.email = "لطفا ایمیل خود را وارد کنید";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "آدرس ایمیل معتبر نیست";
  } else {
    delete errors.email;
  }
    //confirmPassword
    if (!data.confirmPassword) {
      errors.confirmPassword = "تکرار رمز عبور الزامی است";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "عدم تطابق رمز عبور";
    } else {
      delete errors.confirmPassword;
    }
  }

  return errors;
};
