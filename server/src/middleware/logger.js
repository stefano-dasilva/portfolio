import fs from 'fs';


const logger = (req,res,next) =>{
    const log = `${new Date()} - ${req.method} ${req.url}\n`;

    fs.appendFile("access.log", log, (err) => {
      if (err) {
        console.error("Errore nella scrittura del file di log:", err);
      }
    });

    next();
}

export default logger