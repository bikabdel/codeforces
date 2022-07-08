s = readline();
if (s.match(/^[^a-z]*$/)) print(s.toLowerCase());
else
  s.charAt(0).match(/[a-z]/) && s.slice(1).match(/^[^a-z]*$/)
    ? print(s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    : print(s);
