/**
 * create a promise thet resolved after some time
 * @param n number of milisecods before promise resolves
 * 
 */

function  timeout(n: number){
    return new Promise((res)=> setTimeout(res, n))
}





/**
 * Add thre  number
 * @param a firest number
 * @param b second number
 */
export async function addNumbers(a: number , b: number){
    await timeout(500)
    return a +b
}

(async()=>{
    console.log(await addNumbers(3, 4))
})



cot 