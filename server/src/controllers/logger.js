
const log =  async (req,res)  =>{
    return res.status(201).json({message : "OK", date : new Date()})
}

export default log