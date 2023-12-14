/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function sleep(milliseconds) 
{
    let a=1;
    for(let i=1;i<=milliseconds*1000000;i++)
    {
        //do nothing
        a=a*i;
        a=a/i;
    }
    return new Promise((resolve) => {
        resolve();
    });
}

module.exports = sleep;
