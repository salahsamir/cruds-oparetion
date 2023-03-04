import bcrypt from 'bcryptjs'
 export const hash=({text,saltround=parseInt(process.env.HASHNUMBER)}={})=>{
    const hashresult=bcrypt.hashSync(text,saltround)
    return hashresult
 }
 export const compare=({text1,text2}={})=>{
    const compare=bcrypt.compareSync(text1,text2)
    return compare
 }