import { Commentmodel } from '../../../DB/models/Comment.model.js'
import { Usermodel } from '../../../DB/models/User.model.js'

export const getalluser = async (req, res, next) => {
  try {
    const user = await Usermodel.find({})
    return res.json({ message: 'done', user })
  } catch (error) {
    return res.json({ message: 'error' })
  }
}

export const getuserbyid = async (req, res, next) => {
  try {
    const { _id } = req.params
    // console.log(_id);
    const user = await Usermodel.findById(_id)
    return user
      ? res.json({ message: 'done', user })
      : res.json({ message: 'in-valid id' })
  } catch (error) {
    return res.json({ message: 'error' })
  }
}
export const search_name_age=async(req,res,next)=>{
try {
  const {name,age1}=req.query
  //opation "i" is an option flag that can be used with regular expressions (regex) to perform case-insensitive matching.
  const result=await Usermodel.find({ "Name": { $regex: `^${name}`, $options: 'i' }, "age": { $lt: age1 } })
  return result.length? res.json({message:"done", result}):res.json({message:"not exist"})
} catch (error) {
  return res.json({message:"error"})
}
}
export const search_end = async (req, res, next) => {
  try {
    const { Name } = req.query
    const finduser = await Usermodel.find({
      // Name: new RegExp('.*' + Name + '$'),
      Name:{$regex:`${Name}$`,$options: 'i'}
    })
    return finduser.length
      ? res.json({ message: 'done', finduser })
      : res.json({ message: 'not exist' })
  } catch (error) {
    return res.json({ message: 'fail' })
  }
}
export const search_contains = async (req, res, next) => {
  try {
    const { Name } = req.query
    const finduser = await Usermodel.find({
      // Name: new RegExp('.*' + Name + '.*'),
      Name:{$regex:`${Name}`,$options: 'i'}
    })
    return finduser.length
      ? res.json({ message: 'done', finduser })
      : res.json({ message: 'not exist' })
  } catch (error) {
    return res.json({ message: 'fail' })
  }
}
export const search_name = async (req, res, next) => {
  try {
    const { Name } = req.body
    const finduser = await Usermodel.find({ Name })
    return finduser.length
      ? res.json({ message: 'done', finduser })
      : res.json({ message: 'not exist' })
  } catch (error) {
    return res.json({ message: 'fail' })
  }
}
export const search_age = async (req, res, next) => {
  try {
    const { age1, age2 } = req.query
    const finduser = await Usermodel.find({
      age: {
        $gte: age1,
        $lt: age2,
      },
    })
    return finduser.length
      ? res.json({ message: 'done', finduser })
      : res.json({ message: 'not exist' })
  } catch (error) {
    return res.json({ message: 'fail' })
  }
}
export const updateuser = async (req, res, next) => {
  try {
    const { _id } = req.params
    const { Name } = req.body
    const user = await Usermodel.updateOne({ _id }, { Name })
    return user.modifiedCount
      ? res.json({ message: 'done' })
      : res.json({ message: 'invalid id' })
  } catch (error) {
    return res.json({ message: 'error' })
  }
}
export const updateusers = async (req, res, next) => {
  try {
    const { _id } = req.params
    const { Name, age } = req.body
    const user = await Usermodel.findByIdAndUpdate(
      _id,
      { Name, age },
      { new: true },
    )
    return user
      ? res.json({ message: 'done', user })
      : res.json({ message: 'invalid id' })
  } catch (error) {
    return res.json({ message: 'error' })
  }
}
export const userupdate = async (req, res, next) => {
  try {
    const { _id } = req.query
    const { Name, age } = req.body
    const user = await Usermodel.findOneAndUpdate(
      { _id },
      { Name, age },
      { new: true },
    )
    return user
      ? res.json({ message: 'done', user })
      : res.json({ message: 'invalid_id', user })
  } catch (error) {
    return res.json({ message: 'error' })
  }
}
// export const deleteuser=async(req,res,next)=>{
//         try {
//           const {_id}=req.params;
//           const user=await Usermodel.deleteOne({_id})
//           return user.deletedCount? res.json({message:"done"}):res.json({message:"invalid id"})
//         } catch (error) {
//           return res.json({message:"error"})

//         }

//         }
 export const deleteuser=async(req,res,next)=>{

          try {
            const {_id}=req.params;
            const user=await Usermodel.findByIdAndDelete({_id})
            return user? res.json({message:"done"}):res.json({message:"invalid id"})
          } catch (error) {
            return res.json({message:"error"})

          }

          }
// export const deleteuser = async (req, res, next) => {
//   try {
//     const { _id } = req.params
//     const user = await Usermodel.findOneAndDelete({ _id })
//     return user
//       ? res.json({ message: 'done' })
//       : res.json({ message: 'invalid id' })
//   } catch (error) {
//     return res.json({ message: 'error' })
//   }
// }
