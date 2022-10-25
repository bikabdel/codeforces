a=readline().slice(1,-1).replace(/\s/g, "");
if(a.length===0) print("0")
else 
   print(new Set(a.split(",")).size)
