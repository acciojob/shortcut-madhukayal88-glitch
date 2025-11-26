function shortcut(str1, str2) {
  // If either string is empty, return an empty string
  if (str1.length === 0 || str2.length === 0) {
    return "";
  }

  // Return the first character of each string
  return str1[0] + str2[0];
}
