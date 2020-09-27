(function task(){
    let string1 = '1. Кол-во картинок на странице:'
    let string2 = '2. На столько дивов меньше:'
    let string3 = '3. Высота body:'
    let string4 = '4. Высота sublime-section и awesome-games-section:'
    let string5 = '5. Кол-во картинок на странице:'
    let string6 = '6. Кол-во всех элементов на странице:'
    let string7 = '7. Кол-во элементов на странице кроме div:'
    let string8 = '8. Кол-во картинок на странице:'

//1 done
    var images = document.getElementsByTagName("img").length
    console.log(string1 , images);

//2 done
    var divSublimeSection = document.querySelectorAll('.sublime-section div');
    var divOurTeamSection = document.querySelectorAll('.our-team-section div');
    console.log(string2 , divOurTeamSection.length-divSublimeSection.length);

//3 done
    var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    console.log(string3 + scrollHeight + 'px');

//4 done
    heightSublimeSection = document.getElementById( "sublime-section" );
    heightAwesomeGamesSection = document.getElementById( "awesome-games-section" );
    console.log(string4 , heightSublimeSection.offsetHeight + heightAwesomeGamesSection.offsetHeight + 'px');

//5 done
//.featured-projects-section .featured-section-content .featured-projects-img-list .featured-projects-img:nth-child(4n){}

//6 done
    var allEl = document.querySelectorAll('*').length;
    console.log(string6 , allEl);

//7 done
    var allElDiv = [...document.querySelectorAll('*')].filter(element => element.tagName !== 'DIV').length;
    console.log(string7 , allElDiv);

//8
    var parent = document.getElementById('parent');
    document.querySelectorAll('.parent').childElementCount
    console.log(string8 , parent)
})();
