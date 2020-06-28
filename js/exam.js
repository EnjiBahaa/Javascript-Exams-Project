var dataModule = ( function()
{
    //class for questions structure
    var questions = function name(obj) {
        this.question = obj.qquestion
        this.answers = {
            first: obj.qanswers.first,
            second: obj.qanswers.second,
            third: obj.qanswers.third,
            fourth: obj.qanswers.fourth
        };
        this.correct = obj.qcorrect;
        this.questionNo = obj.qquestionNo;
        this.score = obj.qscore;
        this.value = obj.qvalue;
        this.skippedQuestion = obj.skippedQuestion;
    }

    //10 questions 
    var questionOne ={
        qquestion : "Which keyword is used to refer baseclass constructor to subclass constructor?",
        qquestionNo: 1,
        qanswers : {
            first: 'base',
            second: 'static',
            third: 'This',
            fourth: 'extend'
        },
        qcorrect: 'a',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionTwo ={
        qquestion : "In Inheritance concept, which of the following members of base class are accessible to derived class members?",
        qquestionNo: 2,
        qanswers : {
            first: 'static',
            second: 'protected',
            third: 'private',
            fourth: 'shared'
        },
        qcorrect: 'b',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionThree ={
        qquestion : "Which of the following converts a type to a small floating point number in C#?",
        qquestionNo: 3,
        qanswers : {
            first: 'ToInt64',
            second: 'ToSbyte',
            third: 'ToSingle',
            fourth: 'ToInt32'
        },
        qcorrect: 'c',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionFour ={
        qquestion : "Which of the following is true about C# enumeration?",
        qquestionNo: 4,
        qanswers : {
            first: 'An enumerated type is declared using the enum keyword.',
            second: 'C# enumerations are value data type.',
            third: 'Enumeration contains its own values and cannot inherit or cannot pass inheritance.',
            fourth: 'All of the above.'
        },
        qcorrect: 'd',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionFive ={
        qquestion : "How do you select an element with id 'demo'?",
        qquestionNo: 5,
        qanswers : {
            first: '#demo',
            second: '.demo',
            third: 'demo',
            fourth: '*demo'
        },
        qcorrect: 'a',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionSix ={
        qquestion : "What is the correct CSS syntax for making all the <p> elements bold?",
        qquestionNo: 6,
        qanswers : {
            first: 'p {font-weight:bold;}  ',
            second: 'p {text-size:bold;}',
            third: '<p style="font-size:bold;">',
            fourth: '<p style="text-size:bold;">'
        },
        qcorrect: 'a',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionSeven ={
        qquestion : "Which HTML tag is used to define an internal style sheet?",
        qquestionNo: 7,
        qanswers : {
            first: '<script',
            second: '<style>',
            third: '<css>',
            fourth: '<html>'
        },
        qcorrect: 'b',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionEight ={
        qquestion : "What does CSS stand for?",
        qquestionNo: 8,
        qanswers : {
            first: 'Computer Style Sheets.',
            second: 'Colorful Style Sheets.',
            third: 'Cascading Style Sheets.',
            fourth: 'Creative Style Sheets.'
        },
        qcorrect: 'c',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionNine ={
        qquestion : "Which of the following is true about catch block in C#?",
        qquestionNo: 9,
        qanswers : {
            first: 'A program catches an exception with an exception handler at the place in a program where you want to handle the problem.',
            second: 'The catch keyword indicates the catching of an exception.',
            third: 'Both of the above.',
            fourth: 'None of the above.'
        },
        qcorrect: 'd',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var questionTen ={
        qquestion : "Which of the following preprocessor directive lets you modify the compiler's line number and (optionally) the file name output for errors and warnings in C#?",
        qquestionNo: 10,
        qanswers : {
            first: 'region',
            second: 'endif',
            third: 'elif',
            fourth: 'line'
        },
        qcorrect: 'd',
        qscore: 0,
        qvalue: '',
        qskippedQuestion: 0
    } 

    var question1 = new questions(questionOne);
    var question2 = new questions(questionTwo);
    var question3 = new questions(questionThree);
    var question4 = new questions(questionFour);
    var question5 = new questions(questionFive);
    var question6 = new questions(questionSix);
    var question7 = new questions(questionSeven);
    var question8 = new questions(questionEight);
    var question9 = new questions(questionNine);
    var question10 = new questions(questionTen);

    allQuestions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]   
    //console.log(allQuestions)
    
    return{
        //function to get 5 random question of the 10Ques and not repeat any 
        getQuestion: function () {
            var secondQuestion = []
            var randQuestion = [Math.floor(Math.random()*allQuestions.length)];
            var questionNum = allQuestions[randQuestion];
            //console.log(questionNum) 
            secondQuestion.push(questionNum);
            for(var i = 0; i < allQuestions.length; i++){
                var randQuestionA = [Math.floor(Math.random()*allQuestions.length)];
                var questionNumA = allQuestions[randQuestionA]; 
                //console.log(questionNum)
                if(secondQuestion.length < 5){
                    if(!(secondQuestion.includes(questionNumA))){
                        secondQuestion.push(questionNumA);
                        //console.log(secondQuestion)
                    }
                }
            }
            return{
                fiveQuestions: secondQuestion
            }
        },

        checkCorrectAnswer: function (questions) {
            for(var i =0; i< 5 ; i++)
            {
                if(questions[i].value === questions[i].correct)
                {
                    questions[i].score = 20;
                }
                else
                {
                    questions[i].score = 0;
                }
            }
        },
        
        countScore: function (question) {
            var score = 0;
            console.log(question[1].score + question[2].score)
            for(var i = 0; i < 5; i++){
                score += (question[i].score);
                console.log(score)
            }
            return{
                score
            }
        },

        removeSkippedQuestion: function (question) {
            question.skippedQuestion = 0;  
        },
        
        //save question's value in question
        saveQuestionValue: function (question, value) {
            if(value.length > 0)
            {
                question.value = value;
            }
        },
        
        isAnyQuestionsAnswered: function (question) {
            var unanswerd = 0;
            var answered = 0;
            for(var i = 0; i < question.length; i++){
                if(question[i].value == 0)
                {
                    unanswerd++;
                }
                else
                {
                    answered++;
                }
            } 
            return answered;

        }
    }
})();

var uiModule = ( function(datamdl)
{
    var domStrings = {
        question: '.question',
        answer1: '.answers-1',
        answer2: '.answers-2',
        answer3: '.answers-3',
        answer4: '.answers-4',
        btnNext: '.btn__next',
        btnSkip: '.btn__skip',
        btnSubmit: '.btn__submit',
        btnPrevious: '.btn__previous',
        btnRadio: '.radio__btn',
        btnName: 'answer',
        skippedQuestion: '.skippedquestions'
    }

    var selectedAnswer = function () {
        var answer = document.querySelectorAll(domStrings.btnRadio);
        console.log(answer)
        for(var i = 0; i< answer.length; i++)
        {
            if(answer[i].checked)
            {  
                console.log('true')
                return answer[i].value;             
            }
        }
        return 0;
    }

    return{
        //show question to user
        showQuestion: function (question, qNo) {
            if(qNo < 5)
            {
                var num = qNo + 1;
                document.querySelector(domStrings.question).textContent = 'Q' + num + ':' + question.question;
                document.querySelector(domStrings.answer1).textContent = question.answers.first;
                document.querySelector(domStrings.answer2).textContent = question.answers.second;
                document.querySelector(domStrings.answer3).textContent = question.answers.third;
                document.querySelector(domStrings.answer4).textContent = question.answers.fourth;
                if(question.value.length > 0)
                {
                    console.log(question.value)
                    document.getElementById(question.value).checked = true;
                } 
            }
        }, 

        //clear all radio buttons
        clearRadioBtn: function () {
            var answer = document.getElementsByName(domStrings.btnName);
            for(var i = 0; i< answer.length; i++)
            {
                if(answer[i].checked)
                {  
                    answer[i].checked = false;             
                }
            }
        },
        
        //show skipped question to user
        showSkippedQuestion: function (question, qNo) {
            num = qNo + 1;
            document.querySelector(domStrings.skippedQuestion).innerHTML += '<button class="skip" id="skippedQ-' + qNo + '"> Q:' + num 
            // + ':' + question[qNo].question +'</button>'
        },

        //remove the skipped question when click on them
        removeSkippedQuestion: function (question) {
            question.parentNode.removeChild(question);
        },
        dom: domStrings,

        answer: selectedAnswer
    }

})(dataModule);


var controllerModule = ( function(datamdl, uimdl)
{
    var num = 0
    var answerSelected = 0

    //1. make 10 exam questions then get 5 random not repeated questions
    getQuestion =  datamdl.getQuestion()
    var questions = getQuestion.fiveQuestions;
    console.log(questions)
    
    //2. show first question to user
    uimdl.showQuestion(questions[num], num)


    var btnDisabled = function () {
        if(num === 0)
        {
            document.querySelector(uimdl.dom.btnPrevious).disabled = true;
            document.querySelector(uimdl.dom.btnNext).disabled = false;
        }
        else if( num === 4)
        {
            document.querySelector(uimdl.dom.btnNext).disabled = true;
            document.querySelector(uimdl.dom.btnPrevious).disabled = false;
        }
        else{
            document.querySelector(uimdl.dom.btnNext).disabled = false;
            document.querySelector(uimdl.dom.btnPrevious).disabled = false;
        }
    }

    var onbtnNext = function (e) {
        //check if next is last question then submit if not show next question
        if(num < 4){
            //get answer that is selected
            answerSelected = uimdl.answer()
            //console.log(answerSelected)
            
            datamdl.saveQuestionValue(questions[num], answerSelected)
            
            //check if answer is right then add score to it
            datamdl.checkCorrectAnswer(questions);
            
            //to make sure that no radio btn is checked
            uimdl.clearRadioBtn();
            num++;
            uimdl.showQuestion(questions[num], num)
        }
        btnDisabled();
    }

    var onbtnPrevious = function (e) {
        if(num < 5 && num >= 0)
        {
            answerSelected = uimdl.answer(questions)
            
            datamdl.saveQuestionValue(questions[num], answerSelected)
            
            uimdl.clearRadioBtn();
            datamdl.checkCorrectAnswer(questions);
        }
        if(num > 0) {
            num--;
            uimdl.showQuestion(questions[num], num)
        }
        else{
            num = 0;
            uimdl.showQuestion(questions[num], num)
        }
        btnDisabled();
    }

    var onbtnSkip = function (e) {
        if(num < 5 && num >=0 && questions[num].skippedQuestion != 1)
        {
            answerSelected = uimdl.answer()
            datamdl.saveQuestionValue(questions[num], answerSelected)
            
            questions[num].skippedQuestion = 1;
            uimdl.showSkippedQuestion(questions, num);
            console.log(num)
            onbtnNext(e);
            uimdl.clearRadioBtn();
            uimdl.showQuestion(questions[num], num)
        }
        btnDisabled();
        // console.log(questions)
    }
    
    var onbtnSubmit = function (e) {
        var answered = datamdl.isAnyQuestionsAnswered(questions);

        if(answered === 0)
        {
            function openModel() {
                $('.model').modal({
                    backdrop: 'static', 
                    keyboard: false
                });
            }
        }
        else
        {
            var score = datamdl.countScore(questions);
            console.log(score.score)
            var queryString = (window.location.href).split('html')[1];
            queryString += "&score=" + score.score;
            window.location.href = "result.html" + queryString;
            console.log(queryString);
        }
          
    }

    var onbtnSkippedQuestion = function (e) {
        console.log(event.target)
        if(event.target && event.target.matches('button.skip'))
        {
            //get button clicked on == puppling
            var skippedQNo = parseInt(event.target.id.split('-')[1]);
            console.log(skippedQNo);
            //the tag of the question
            var el = e.target;
            num = skippedQNo;
            //show question we clicked on then remove it from skipped question div
            uimdl.showQuestion(questions[skippedQNo], skippedQNo);
            datamdl.removeSkippedQuestion(questions[skippedQNo]);
            uimdl.removeSkippedQuestion(el);
        }
    }

    var setupEventListeners = function () {
        btnDisabled();
        //3. if user clicked next, go to next question OR if it was the last question then submit
        document.querySelector(uimdl.dom.btnNext).addEventListener('click', onbtnNext);
        //5. if user clickec previous, the previous question will be shown
        document.querySelector(uimdl.dom.btnPrevious).addEventListener('click', onbtnPrevious);
        //4. if user clicked skip, the question will be added in skipped questions div and next question will be shown
        document.querySelector(uimdl.dom.btnSkip).addEventListener('click', onbtnSkip);
        //when user click on skipped question, the skipped question will be shown and removed from the skipped question list
        document.querySelector(uimdl.dom.skippedQuestion).addEventListener('click', onbtnSkippedQuestion);
        //6. if user clicked submit, final page will be shown with the result -- collect score
        document.querySelector(uimdl.dom.btnSubmit).addEventListener('click', onbtnSubmit);
    }
    
    return {
        init: function () {
            console.log('Application has started.');
            uimdl.clearRadioBtn();
            setupEventListeners();
        }
    }

})(dataModule, uiModule);

controllerModule.init();
