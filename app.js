/// Quiz Night (Who Wants to be A Millionaire Version)



(function(){


    // Variable declarations
    let n;
    let correctCount = 0;

    // randomly select quiz
    ranGenerator = () => {
        return n = Math.floor(Math.random() * allQuizzes.length);
     };

    // erase HTML text with this re-usable function.
    function eraseHTML(element, element2, element3){
        element.innerHTML = "";
        element2.innerHTML = "";
        element3.innerHTML = "";
    } 

    // check length of quizes to continue quiz
    function quizLength(){
        if(allQuizzes.length > 0){
            allQuizzes[n].initQuestion();
        } else {
            displayAnswer.innerHTML = "No More Questions Remaining. Refresh your browser to play again.";
            console.log("Array is empty");
        }
    };

    function Quiz(question, options, answer){
        
        this.question = question;
        this.options = options;
        this.answer = answer;
    };

    // let displayQuestion = document.getElementById('question_text');
    // displayQuestion.innerHTML = "test";

    
    // HTML Selectors declarations 
    let headingQuestion, ul, displayAnswer, quizForm, nextQuiz;

    headingQuestion = document.getElementById('question');
    ul = document.getElementById('question_text');
    displayAnswer = document.getElementById('display_answer');
    quizForm = document.getElementById('quizForm');
    nextQuiz = document.getElementById('nextQuiz');
    
    Quiz.prototype.initQuestion = function() {

        headingQuestion.innerHTML = this.question;

        for (let i = 0; i < this.options.length; i++){
            ul.innerHTML += `<li>${i}: ${this.options[i]}</li>`;
        };
        
        quizForm.addEventListener("submit", (e) =>{

            e.preventDefault();
            
            let textAnswer = document.getElementById('textAnswer').value;

            let userAnswer = parseInt(textAnswer);
            

            
            if(userAnswer === this.answer){
                displayAnswer.classList.remove("alert-danger");
                displayAnswer.classList.add("alert-success");
                displayAnswer.innerHTML = `\n${this.options[userAnswer]}, is the correct Answer`;
                correctCount++;
                console.log(correctCount);
            } else {
                displayAnswer.classList.remove("alert-success");
                displayAnswer.classList.add("alert-danger");
                displayAnswer.innerHTML = `\nIncorrect!`;
            };
            
            
            
            nextQuiz.addEventListener("click", (e) =>{
                document.getElementById('textAnswer').value = "";
                
                displayAnswer.classList.remove("alert-success");
                displayAnswer.classList.remove("alert-danger");

                                
                eraseHTML(headingQuestion, displayAnswer, ul);

                ranGenerator();
                
                quizLength();
                
                
            
            });
        
        });
  
    };
  

    // Store quiz questions in a array or data table. 
    
    let q1 = new Quiz("Which is the largest desert in the world?", ['Sahara Desert','Sonoran Desert','Namib Desert', 'Antarctic Desert'], 3);
    let q2 = new Quiz("Which US state is known as the Grand Canyon State?", ['Arkansas','Arizona','Colorado', 'Massachusetts'], 1);
    let q3 = new Quiz("Which country is the smallest in the world?", ['Monaco','Singapore','Vatican', 'Fiji'], 2);
    let q4 = new Quiz("Choose the world's deepest river?", ['Amazon River','Yangtze River','Nile River', 'Congo River'], 3);
    let q5 = new Quiz("What is the name for the Jewish New Year?", ['Hanukkah','Yom Kippur','Kwanza', 'Rosh Hashanah'], 3);
    let q6 = new Quiz("Who was the only U.S. President to resign?", ['Herbert Hoover','Richard Nixon','George W. Bush', 'Barack Obama'], 1);

    let allQuizzes = [
        q1,
        q2,
        q3,
        q4,
        q5,
        q6
    ];


    ranGenerator();

    allQuizzes[n].initQuestion();

    allQuizzes.splice(allQuizzes.indexOf(this), 1);

})();

