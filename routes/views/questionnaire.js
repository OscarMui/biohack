const {getQuestions} = require("../api/get");
const {submitQuestionnaire, userCallback} = require("../api/post");

const questions = [
    {
        name: "I am a",
        type: "radio",
        options: ["Man","Woman","Prefer not to say"]
    },
    {
        name: "Let us know your age",
        type: "list",
        range: [0,100],
    },
    {
        name: "What is your ethnicity?",
        type: "radio",
        options: ["Man","Woman","Prefer not to say"] //TODO
    },
    {
        name: "In the morning, my facial skin feels...",
        type: "radio",
        options: ["Shiny with big pores","Dry, tight, or flaky","Normal"],
        long: true,
    },
    {
        name: "Later in the day I observe...",
        type: "radio",
        options: ["an oily forehead, chin, and nose","dryness with a tight feeling","overall oiliness","nothing worth mentioning"],
        long: true,
    },
]

exports = module.exports = function (req, res) {
    console.log("QUESTIONNAIRE",req.method);
    // console.log(req.body);

    console.log(questions)
    if(req.method=="GET"){
        res.render("questionnaire", {
            questions: questions,
            method: req.method
        });
    }else{
        res.render("questionnaire",{
            method: req.method
        })
    }

};

