const fs=require('fs');

const fileRead=(address)=>
{
    return new Promise((resolve)=>
    {
        const resp=fs.readFile(address,'utf-8',(err,data)=>
        {
            if (err)resolve("error in reading file");
            else resolve(data);
        });
    })
}
const writeFile=(content,address)=>
{
    return new Promise((resolve)=>
    {
        fs.writeFile(address,content,(err)=>
        {
            if (err)resolve("error in writing file");
            else resolve("file is written");
        })
    })
}

const fileIoOperation=async()=>
{
    const resp1=await fileRead('file.txt');
    const data=resp1.split(' ').filter((word)=>word.length>0).join(' ');
    const resp2=await writeFile(data,'file.txt');
    return resp2;
}

const fileIoFeedBack=fileIoOperation();