//Data
var dataModule = ( function() 
{
    // name, email, age validation
    var nameValid = function (name) {
        if(name === null || !isNaN(name) || name.length < 3 )
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    var emailValid = function (email) {
        var regex = /(\w+)\@(\w+)\.[a-zA-Z]/g; 
        if(email === null || !regex.test(email))
        {
            return false;
        }  
        else
        {
            return true;
        }
    }

    var ageValid = function (age) {
        if(age === null || isNaN(age) || !(age > 18 && age < 23))
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    return{
        validField: function (obj) 
        {
            return{
                nameV : nameValid(obj.name),
                emailV: emailValid(obj.email),
                ageV: ageValid(obj.age)
            }
        }
    }
})();

//UI
var uiModule = ( function(data) 
{
    //input variables
    var domStrings = {
        nameField: '.form__name',
        emailField: '.form__email',
        ageField: '.form__age',
        genderField: '.radio__btn',
        genderName: 'gender',
        nameError: '.name__error',
        ageError: '.age__error',
        emailError: '.email__error',
        formBtn: '.btn--form'
    }
    
    //gender type either male or female
    var genderType = function () {
        var genders = document.getElementsByName(domStrings.genderName);
        for(var i = 0; i< genders.length; i++)
        {
            if(genders[i].checked)
            {  
                return genders[i].value;             
            }
        }
    }
    
    return{  
        //get input data from user      
        getFields: function (datamdl) {     
            return{      
                name: document.querySelector(domStrings.nameField).value,
                email: document.querySelector(domStrings.emailField).value,
                age: document.querySelector(domStrings.ageField).value,
                gender: genderType()
            };
        },
        //reset input data
        setForm: function (name, email, age, percentage) {
            console.log('set form')
            document.querySelector(domStrings.nameField).textContent = ' ';
            document.querySelector(domStrings.emailField).textContent = ' ';
            document.querySelector(domStrings.ageField).textContent = ' ';
        },

        dom: domStrings,

        //check if there's an error in input to show it for user
        addErrorField: function (obj) {
            if(obj.nameV === false)
            {
                console.log(obj.nameV)
                document.querySelector(domStrings.nameError).style.display = 'block';
            }
            else
            {
                document.querySelector(domStrings.nameError).style.display = 'none';
            }
            if(obj.emailV === false)
            {
                document.querySelector(domStrings.emailError).style.display = 'block';
            }
            else
            {
                document.querySelector(domStrings.emailError).style.display = 'none';
            }
            if(obj.ageV === false)
            {
                document.querySelector(domStrings.ageError).style.display = 'block';
            }
            else
            {
                document.querySelector(domStrings.ageError).style.display = 'none';
            }
        }
    }
})(dataModule);


//Controller
var controllerModule =( function(datamdl, uimdl) 
{
    var onFormbtn = function(e){
        
        //1. get data from fields
        var inputData = uimdl.getFields();
        console.log(inputData);
  
        //2. On click check validation 
        var isValid = datamdl.validField(inputData);
        console.log(isValid)

        //3. if is not valid show error msg
        uimdl.addErrorField(isValid)
        
        //4. if valid save and go to second page  
        if(isValid.nameV === true && isValid.emailV === true && isValid.ageV === true)
        {
            console.log('Valid')
            var queryString = "?name=" + inputData.name + "&email=" + inputData.email + "&age=" + inputData.age + "&gender=" + inputData.gender;
            window.location.href = "exam.html" + queryString;
        }
    }
   
    var setupEventListeners = function () {
        document.querySelector(uimdl.dom.formBtn).addEventListener('click', onFormbtn);

    }

    return {
        init: function () {
            console.log('Application has started.');
            uimdl.setForm();
            setupEventListeners();
        }
    }

})(dataModule, uiModule);


controllerModule.init();




