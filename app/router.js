import express from 'express';
import sections from "./data.js"

const router = express.Router();


//Accueil
router.get('/pages/:id', (req, res) => {
        const idSection = parseInt(req.params.id, 10); // Convertir l'id en nombre
        console.log(idSection);
    
        const sectionToDisplay = sections.find((element) => element.id === idSection);
        console.log(sectionToDisplay);
    
        if (sectionToDisplay) {
            res.render('index', {
                section: sectionToDisplay,
            });
        } else {
            res.status(404).send('<h1>Page non trouvée</h1>');
        }
    });


export default router;