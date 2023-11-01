
const log = (req,res)  =>{
    res.status(201).json({message : "OK", date : new Date()})
}

export default log