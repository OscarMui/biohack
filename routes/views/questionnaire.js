const questions = [
    {
        id: "gender",
        prompt: "I am a",
        type: "radio",
        options: ["Man","Woman","Prefer not to say"],
        
    },
    {
        id: "age",
        prompt: "Let us know your age",
        type: "radio",
        options: ["17 or below","18-25","26-30","31-40","41-50","51-60","60 or above","Prefer not to say"]
    },
    {
        id: "ethnicity",
        prompt: "What is your ethnicity?",
        type: "radio",
        options: ["Asian or Asian British","Black, Black British, Caribbean or African","Mixed or multiple ethnic groups","White","Other ethnic group","Prefer not to say"],
        long: true,
    },
    {   
        id: "morningCondition",
        prompt: "In the morning, my facial skin feels...",
        type: "radio",
        options: ["Shiny with big pores","Dry, tight, or flaky","Normal","Prefer not to say"],
        long: true,
    },
    {
        id: "laterCondition",
        prompt: "Later in the day I observe...",
        type: "radio",
        options: ["an oily forehead, chin, and nose","dryness with a tight feeling","overall oiliness","nothing worth mentioning","Prefer not to say"],
        long: true,
    },
    {
        id: "laterCondition",
        prompt: "Later in the day I observe...",
        type: "radio",
        options: ["an oily forehead, chin, and nose","dryness with a tight feeling","overall oiliness","nothing worth mentioning","Prefer not to say"],
        long: true,
    },
    {
        id: "skinNeeds",
        prompt: "What are your skin needs?",
        type: "checkbox",
        options: ["Hydration","Anti-aging","Glow & radiance","Pore refining","Even skin tone","Blemish control","Sun protection","Dark Circle Treatment","Oil Control","Acne Treatment","Blackhead Treatment","Brightening","Illuminating","Lifting","Firmness & Elasticity","Long Stay/Wear","Hyperpigmentation Treatment","Puffiness Relief","Redness Relief","Revitalise / Refresh","T-Zone Mattening","Hair growth (Lashes, Brows, or Beard)","Brightening","Prefer not to say"],
        long: true,
    },
    {
        id: "allergiesBool",
        prompt: "Do you have allergies?",
        type: "radio",
        options: ["Yes", "No"],
    },
    {
        id: "allergies",
        prompt: "If yes, what are you allergic to?",
        type: "checkbox",
        options: ["Fragrances","Alcohols","Nuts","Pigments","Dyes","Oils","Silicones","I don't know","I know the specific INCI ingredient I'm allergic to"],
        long: true,
    },
    {
        id: "productValue",
        prompt: "Do you value any of the below in a product?",
        type: "checkbox",
        options: ["Cruelty Free","Non-comedogenic","100% Natural","Paraben-free","Alcohol-free","Micro-plastic-free","Vegan","None of the above","Prefer not to say"]
    }
]

exports = module.exports = function (req, res) {
    console.log("QUESTIONNAIRE",req.method);
    // console.log(req.body);

    // console.log(questions)
    if(req.method=="GET"){
        res.render("questionnaire", {
            questions: questions,
            method: req.method
        });
    }else{
        console.log(req.body)
        res.render("questionnaire",{
            method: req.method,
            body: req.body,
        })
    }

};

