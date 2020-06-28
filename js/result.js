var dataModule = ( function(){
    return{
        getParams: function (url) {
            var params = {};
            var parser = document.createElement('a');
            parser.href = url;
            var query = parser.search.substring(1);
            var vars = query.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                params[pair[0]] = decodeURIComponent(pair[1]);
                console.log(params)
            }
            return params;
        }
    }
})();

var uiModule = ( function(){
    
    var domStrings = {
        nameField: '.container__name',
        emailField: '.container__email',
        ageField: '.container__age',
        genderField: '.container__gender',
        scoreField: '.container__score'
    }

    return{
        showStudentData: function (data) {
            document.querySelector(domStrings.nameField).textContent += data.name; 
            document.querySelector(domStrings.emailField).textContent += data.email;   
            document.querySelector(domStrings.ageField).textContent += data.age;   
            document.querySelector(domStrings.genderField).textContent += data.gender;   
            document.querySelector(domStrings.scoreField).textContent += data.score + '%';   
        },
        
        dom : domStrings
    }
})();

var controllerModule = ( function(datamdl, uimdl){
    var queryString = (window.location.href);
      
    studentData = datamdl.getParams(queryString);
    
    uimdl.showStudentData(studentData);
    

})(dataModule,uiModule);