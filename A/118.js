print(
  "." +
    readline()
      .toLowerCase()
      .replace(/[aeiyou]/gi, "")
      .split("")
      .join(".")
);
