const {getQuestions} = require("../api/get");
const {submitQuestionnaire, userCallback} = require("../api/post");

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
        options: ["17 or below","18-25","26-30","31-40","41-50","51-60","60 or above"]
    },
    {
        id: "ethnicity",
        prompt: "What is your ethnicity?",
        type: "radio",
        options: ["Man","Woman","Prefer not to say"] //TODO
    },
    {   
        id: "morningCondition",
        prompt: "In the morning, my facial skin feels...",
        type: "radio",
        options: ["Shiny with big pores","Dry, tight, or flaky","Normal"],
        long: true,
    },
    {
        id: "laterCondition",
        prompt: "Later in the day I observe...",
        type: "radio",
        options: ["an oily forehead, chin, and nose","dryness with a tight feeling","overall oiliness","nothing worth mentioning"],
        long: true,
    },
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

