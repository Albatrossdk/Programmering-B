//model - lokal kopi af databasen
let model = {}
//view - den visning vi nu har valgt at lave af data? Vores app, vores design, det slutbrugeren ser
let htmlWords
//other html elements 

function setup(){
    //opret reference til html view
    //opret reference til andre html elementer 
    //Vi vil ikke have noget p5 canvas
    noCanvas()
    //controller
    db.collection('COLLECTION-NAME').doc('DOC-NAME')
        .onSnapshot( doc => {
            //opdater model
            //opdater view
            //når der kommer input fra slutbrugeren opdateres MODELLEN (ikke controlleren).
        })
    //update database with model
    
}

function draw(){
    //console.log(htmlWords.elt.scrollTop, htmlWords.elt.scrollHeight)
}