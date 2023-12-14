const fs = require("fs");
function fileWrite() {
  return new Promise((resolve) => {
    const resp = fs.writeFile("file.txt", "Hello World", (err) => {
      if (err) resolve(err);
      else resolve("file is created");
    });
  });
}

const fileWriteHelper=async()=>{
    const resp=await fileWrite();
    console.log(resp);
}

fileWriteHelper();