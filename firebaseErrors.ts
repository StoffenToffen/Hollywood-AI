const mapAuthCodeToMessage = (authCode: string) => {
  switch (authCode) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/invalid-credential":
      return "Invalid email or password.";
    case "auth/weak-password":
      return "Password must be at least 8 characters.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

export { mapAuthCodeToMessage };
