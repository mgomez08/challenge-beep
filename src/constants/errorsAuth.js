const errorsAuthObject = {
  "auth/email-already-exists":
    "Otro usuario ya está utilizando el correo electrónico proporcionado. ",
  "auth/invalid-email": "El correo electrónico no es válido.",
  "auth/email-already-in-use": "El correo electrónico ya está en uso.",
  "auth/internal-error": "Error interno, intente de nuevo más tarde.",
  "auth/invalid-display-name": "El nombre de usuario no es válido.",
  "auth/invalid-password": "La contraseña no es válida.",
  "auth/user-not-found": "El usuario no existe.",
  "auth/uid-already-exists": "El usuario ya existe.",
  "auth/weak-password": "La contraseña es muy débil.",
  "auth/wrong-password": "La contraseña es incorrecta.",
  "auth/too-many-requests":
    "Demasiados intentos fallidos, intente de nuevo más tarde.",
};

export const setErrorText = (errorCode) => {
  if (errorsAuthObject[errorCode]) {
    return errorsAuthObject[errorCode];
  } else {
    return errorCode;
  }
};
