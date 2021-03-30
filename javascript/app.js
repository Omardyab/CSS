userName=prompt("We have many steps in order to check you are real lets start with, what is your Name :) ? ")
var age=prompt('Welcome '+userName+', what is your birth year ?' );
var value=prompt('Now Lets make sure you are not a robot, ' +userName +' what is the value of 4+1 ?')
var passx=prompt('Now, try to guess the password ' + userName );
gvlaue();
gpass();


//list of functions 
function gpass()
{
    while (passx != 'easy')
{ 
    passx = prompt('Password is incorrect, Please try again')
}
}

function gvlaue()
{
    age=2021-age;
    
    if (age >=18 && age < 36 && value == 5)
    { 
        alert('You are doing well so far :). Welcome to my website, ' + userName)
        showimg();
    }
    else if (age <18 || age > 35 || value !=5 )
    { 
        alert('Hello Robot , you can only view our basic content :) you are not a real person :) !! ' + userName) 
    }
    else { alert('have a nice day, ' + userName) }
}

function showimg()
{
    var fav = prompt('Now let us know what your is your favourte game ?' , 'Cyberpunk 2077,League of legends,Dota');
    var h=prompt('how many times you would like to see it before downloading it')
    document.write('<h3>' +fav+'</h3>')
    if (fav === 'Cyberpunk 2077')
    { alert('You have choosen a fantastic game scroll down to see it, ' +userName)
        for (var i=0;i<h;i++)
        {
            document.write('<img src ="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/download2526.jpg">')
        }
    }
    else if (fav === 'League of legends')
    {
        alert('You have choosen a fantastic game scroll down to see it, ' +userName)
        for (var i=0;i<h;i++)
        {  
             document.write('<img src ="https://miro.medium.com/max/3760/1*JzJBaliMfb9R_kEAPQaw5g.png">' )
        } 
    
    }
    else if (fav === 'Dota')
   { 
       alert('You have choosen a fantastic game scroll down to see it, ' +userName)
        for (var i=0;i<h;i++)
        {
            document.write('<img src="http://cdn.dota2.com/apps/dota2/images/blogfiles/mistwoods_blog_dsflkjsdalfkj.jpg">')
        }
   }
}
