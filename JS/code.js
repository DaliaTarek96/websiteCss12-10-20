var upperHeaderHeight;
window.addEventListener('load', start);
// to make fixes navbar
window.onresize = () => {
    upperHeaderHeight = $('#upperHeader').height();
    UserSlider();
};
let scrollValue = $(window).scrollTop();
window.onscroll = () => {
    scrollValue = $(window).scrollTop();
    if (scrollValue >= upperHeaderHeight) {
        $('#mainNav').css({
            'z-index': 10, position: 'fixed', 'background-color': 'white',
            'box-shadow': ' 0 4px 2px -2px gray', top: 0, 'padding-bottom': '8px'
        });
    } else {
        $('#mainNav').css({ position: 'static', 'box-shadow': 'none', 'padding-bottom': '0' });
    }
    backToTop();
};

function start() {
    backToTop();
    $('.back-to-top').click(()=>{
        $('html,body').animate({scrollTop:0},700);
    });
    mainNavBar();// add items to main nav bar
    ImagesInBrand(); 
    $('.third').remove(); 
    UserSlider();
    services();
    TeamPart();
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    upperHeaderHeight = $('#upperHeader').height();
}


function backToTop(){
    console.log(scrollValue)
     // back to top 
     if(scrollValue >300){
        $('.back-to-top').fadeIn('slow');
    }else{
        $('.back-to-top').fadeOut('slow');
    }
}

function UserSlider(){
    let width = window.innerWidth;
    let users=[{img:'1',name:'Martine Cloud'},{img:'2',name:'Sem Rubick'}]
    if(width >767){
        $('.third').remove();
    } else{
        if($('.third').length==0){
           users.forEach(user=>{
            $('.carousel-inner').append(' <div class="carousel-item  third"  ><div >\
            <img src="./Images/users/'+user.img+'.jpg" alt="user'+user.img+'">\
            <p>Where does one find a real photographer nowadays? Can deliver a top \
                photographer for your party or wedding and our photo studio is always at your pictures.</p>\
            <h5>'+user.name+'</h5> <span>Investor</span> </div></div>');
           })
        }
    }
}

function mainNavBar() {
    let navItems = [{name:'Home',to:'#intro'}, {name:'About',to:'#about'}, {name:'Services',to:'#services'},
     {name:'Teams',to:'#team'}, {name:'Pricing',to:'#plan'}, {name:'ContactUs',to:'#contactus'}];
    navItems.forEach((item) => {
        $('.navbar-nav').append('<li class="menu-item"><a class="nav-link"  href="'+item.to+'">' + item.name + '</a></li>');
        $('.footerNav').append('<li><a  href="'+item.to+'">' + item.name + '</a></li>');
    });
    $('.navbar-nav').append('<span class="menu_item_line" "></span>');
}

function services(){
    let services = [{img:'08',header:'Strategy Development',sentense:'Quisque malesuada sed nibh nec facilisis isa. Aliquam at tincidunt odio.'},{img:'07',header:'Business Plan',sentense:'Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci.'},
    {img:'05',header:'Marketing Plan',sentense:'Ut nulla turpis, pretium eget lorem a,ultricies dui. Interdum et malesuada ante.'},{img:'06',header:'Market Research',sentense:'Praesent vestilum mo lestie lacun nonummy hendrerit maris hasellus porta.'}
,{img:'10',header:'Stimulate Innovation',sentense:'Maecenas non condimentum lacus, a can be condimentum urna maecenas.'},{img:'09',header:'Support Customer',sentense:'Mauris at lorem faucibus scelerisque iaculis nisi. Nunc sed congue enim euismod.'}];

for (let i = 0; i < services.length; i++) {
    $('.services').append("<div class='col-12 col-md-4 mt-3 mb-3'><img src='./Images/services/icon-"+services[i].img+".png' alt='icon"+services[i].img+"'>\
    <h5>"+services[i].header+"</h5><p>"+services[i].sentense+"</p></div>")
    
}
}

function TeamPart(){
    let teams =[{img:'1',name:'Peter Abrams',job:'Co-Founder'},{img:'2',name:'Anna Miller',job:'Partner'},
    {img:'3',name:'Michel Wolf',job:'Manager'},{img:'4',name:'Samanta Fox',job:'Lawyer'}];
    teams.forEach((team)=>{
        $('.team').append('<div class="col-12 col-md-6 col-lg-3 p-3">\
        <img src="./Images/Team/team'+team.img+'.jpg" alt="team'+team.img+'"> <h5 class="mb-0">'+team.name+'</h5><p>'+team.job+'</p>\
        <a id="facebook" target="_blank" href="https://www.facebook.com/dalia.akl.3"><i class="fa fa-facebook"></i></a>\
        <a id="linkedin" target="_blank" href="https://www.linkedin.com/in/dalia-tarek-317013126/"><i class="fa fa-linkedin"></i></a>\
        <a id="twitter"  target="_blank" href="#"><i class="fa fa-twitter"></i></a>\
    </div>')
    })
}

function ImagesInBrand() {
    let imgs = [{ name: 'partners_01', width: '198' }, { name: 'partners_02', width: '93.5' },
    { name: 'partners_03', width: '146' }, { name: 'partners_04', width: '191' }];
    imgs.forEach((img) => {
        $('#Images').append('<div class="col-12 col-md-6 col-lg-3"><img src="./Images/Partners/' + img.name + '.png" alt=' + img.name + ' width=' + img.width + '> </div>');
    });
}

