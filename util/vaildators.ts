module.exports.validateRegisterInput = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  const errors: ErrorsTypes = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password must be matched";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

type ErrorsTypes = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

module.exports.validLoginInput = (username: string, password: string) => {
  const errors: ErrorsTypes = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }

  if (password.trim() === "") {
    errors.username = "password must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
