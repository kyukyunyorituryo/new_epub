templete = '<li class="media mb-3 alert-warning ">\n<div class="card mb-3" style="max-width: 800px;">\n	<div class="row g-0">\n		<div class="col-md-4">\n			<img src="<%= image_url %>" class="mr-3 lazyload" alt="<%= title %>" loading="lazy" />\n\n		</div>\n		<div class="col-md-8 alert-warning">\n			<div class="card-body alert-warning">\n				<h5 class="card-title">\n					<%= title %>\n				</h5>\n				<p class="card-text">\n					価格：<%= price %>円、ポイント：<%= point %>\n				</p>\n				<p class="card-text">\n					<%= contributor %>\n				</p>	\n				<p class="card-text">\n					出版社：<%= publisher %>、ASIN：<%= asin %>\n				</p>\n					<p class="card-text">\n						カテゴリー：<%= category %>\n					</p>\n				<a class="btn btn-warning" href="<%= url %>" role="button"  rel="noreferrer" target="_blank">Amazonで詳細を見る\n				</a>\n			</div>\n		</div>\n	</div>\n</div>\n</li>'

nav=[];
function templeterender(items){
for (let i = 0; i < items.length; i++) {
    nav[i] = ejs.render(templete, {
        title: items[i].Title,
        image_url: items[i].ImageURL,
        price:items[i].Price,
        point:items[i].Points,
        url: items[i].URL,
        contributor:items[i].Contributor,
        publisher:items[i].Publisher,
        category:items[i].Category,
        asin:items[i].Asin
    })
    }}

function getJSON(json_data) {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200){
			var data = JSON.parse(req.responseText);
			items = data	;
		}
	};
	req.open("GET",json_data, false);
	req.send(null);
	templeterender(items)
}

//コミックをクリックすると、コミックだけが表示される。
function comicfn(){
var comic = document.getElementById('comic');
comic.addEventListener('click', function() {
nav=[]
comics = items.filter(word => word.Category.includes('コミック'));
$('#frame').children().remove();
templeterender(comics)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//アダルトをクリックすると、adult本だけが表示される。
function adultfn(){
var adult = document.getElementById('adult');
adult .addEventListener('click', function() {
nav=[]
adults =  items.filter(word => word.Category.includes('アダルト'));
$('#frame').children().remove();
templeterender(adults)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//BL
function blfn(){
var bl = document.getElementById('bl');
bl.addEventListener('click', function() {
nav=[]
bls = items.filter(word => word.Category.includes('ボーイズラブ'));
$('#frame').children().remove();
templeterender(bls)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//ビジネス・経済
function businessfn(){
var business = document.getElementById('business');
business.addEventListener('click', function() {
nav=[]
businesss = items.filter(word => word.Category.includes('ビジネス・経済'));
$('#frame').children().remove();
templeterender(businesss)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//その他
function otherfn(){
var other = document.getElementById('other');
other.addEventListener('click', function() {
nav=[]
others = items.filter(word => word.Category.includes('その他'));
$('#frame').children().remove();
templeterender(others)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//趣味
function hobbyfn(){
var hobby = document.getElementById('hobby');
hobby.addEventListener('click', function() {
nav=[]
hobbys = items.filter(word => word.Category.includes('趣味'));
$('#frame').children().remove();
templeterender(hobbys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//文学
function literaturefn(){
var literature = document.getElementById('literature');
literature.addEventListener('click', function() {
nav=[]
literatures = items.filter(word => word.Category.includes('文学'));
$('#frame').children().remove();
templeterender(literatures)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//絵本
function picturebookfn(){
var picturebook = document.getElementById('picturebook');
picturebook.addEventListener('click', function() {
nav=[]
picturebooks = items.filter(word => word.Category.includes('絵本'));
$('#frame').children().remove();
templeterender(picturebooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//ライトノベル
function lightnovelfn(){
var lightnovel = document.getElementById('lightnovel');
lightnovel.addEventListener('click', function() {
nav=[]
lightnovels = items.filter(word => word.Category.includes('ライトノベル'));
$('#frame').children().remove();
templeterender(lightnovels)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//雑誌
function magazinefn(){
var magazine = document.getElementById('magazine');
magazine.addEventListener('click', function() {
nav=[]
magazines = items.filter(word => (word.Category.includes('雑誌')) ||(word.Title.includes('雑誌')));
$('#frame').children().remove();
templeterender(magazines)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}


//分冊
function fasciclefn(){
var fascicle = document.getElementById('fascicle');
fascicle.addEventListener('click', function() {
nav=[]
fascicles = items.filter(word => (word.Title.includes('分冊')) ||(word.Title.includes('プチキス'))||(word.Title.includes('単話')));
$('#frame').children().remove();
templeterender(fascicles)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//期間限定無料 limited_zero
function limited_zerofn(){
var limited_zero = document.getElementById('limited_zero');
limited_zero.addEventListener('click', function() {
nav=[]
limited_zeros = items.filter(word => (word.Title.includes('期間限定無料')) ||(word.Title.includes('無料お試し版')) ||(word.Title.includes('試し読み')));
$('#frame').children().remove();
templeterender(limited_zeros)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//物理
function physicsfn(){
var physics = document.getElementById('physics');
physics.addEventListener('click', function() {
nav=[]
physicss = items.filter(word => word.Category.includes('物理'));
$('#frame').children().remove();
templeterender(physicss)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//化学
function chemistry(){
var chemistry = document.getElementById('chemistry');
chemistry.addEventListener('click', function() {
nav=[]
chemistrys = items.filter(word => word.Category.includes('化学'));
$('#frame').children().remove();
templeterender(chemistrys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//医学
function medicinefn(){
var medicine = document.getElementById('medicine');
medicine.addEventListener('click', function() {
nav=[]
medicines = items.filter(word => word.Category.includes('医学'));
$('#frame').children().remove();
templeterender(medicines)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//生物
function biology(){
var biology = document.getElementById('biology');
biology.addEventListener('click', function() {
nav=[]
biologys = items.filter(word => word.Category.includes('生物'));
$('#frame').children().remove();
templeterender(biologys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//心理学
function psychologyfn(){
var psychology = document.getElementById('psychology');
psychology.addEventListener('click', function() {
nav=[]
psychologys = items.filter(word => word.Category.includes('心理学'));
$('#frame').children().remove();
templeterender(psychologys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//数学
function mathematicsfn(){
var mathematics = document.getElementById('mathematics');
mathematics.addEventListener('click', function() {
nav=[]
mathematicss = items.filter(word => word.Category.includes('数学'));
$('#frame').children().remove();
templeterender(mathematicss)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//教育
function educationfn(){
var education = document.getElementById('education');
education.addEventListener('click', function() {
nav=[]
educations = items.filter(word => word.Category.includes('教育'));
$('#frame').children().remove();
templeterender(educations)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//工学
function engineeringfn(){
var engineering = document.getElementById('engineering');
engineering.addEventListener('click', function() {
nav=[]
engineerings = items.filter(word => word.Category.includes('工学'));
$('#frame').children().remove();
templeterender(engineerings)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//科学・テクノロジー
function technologyfn(){
var technology = document.getElementById('technology');
technology.addEventListener('click', function() {
nav=[]
technologys = items.filter(word => word.Category.includes('科学・テクノロジー'));
$('#frame').children().remove();
templeterender(technologys)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}
//旅行
function travelfn(){
var travel = document.getElementById('travel');
travel.addEventListener('click', function() {
nav=[]
travels = items.filter(word => word.Category.includes('旅行'));
$('#frame').children().remove();
templeterender(travels)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}, false);
}

//日付を選択して切り替える
function selectdays(day){

nav=[]
var items
json_data= "https://kyukyunyorituryo.github.io/new_epub/json/"+day+"j.json"
getJSON(json_data)
$('#frame').children().remove();
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
document.getElementById('release').textContent=day+'の新刊'
}

function getNextYMD(now){
    now.setDate(now.getDate() + 1);
    var y = now.getFullYear();
    var m = ("00" + (now.getMonth()+1)).slice(-2);
    var d = ("00" + now.getDate()).slice(-2);
    var result = y + m + d;
    return result;
  }
function searchword(){
var searchbook = document.getElementById('search');
searchbook.addEventListener('click', dosearch, false);
}
function dosearch(){
nav=[]
var searchtext = document.getElementById('searchtext').value;
searchbooks = items.filter(word => (word.Title.includes(searchtext)||word.Publisher.includes(searchtext)||word.Contributor.includes(searchtext)||word.Category.includes(searchtext)));
$('#frame').children().remove();
templeterender(searchbooks)
for (let i = 0; i < nav.length; i++) {$('#frame').append(nav[i]);}
}



document.addEventListener("DOMContentLoaded", function(){
//    console.log(nav)
comicfn()
adultfn()
blfn()
businessfn()
otherfn()
hobbyfn()
literaturefn()
picturebookfn()
searchword()
lightnovelfn()
magazinefn()
fasciclefn()
 limited_zerofn()
 physicsfn()
medicinefn()
chemistry()
biology()
psychologyfn()
mathematicsfn()
educationfn()
technologyfn()
engineeringfn()

$('#datetimepicker1').on("dp.change", function(e){

selectdays($(this).val())
});
var items
var now   = new Date();
nextday =getNextYMD(now);

var url = location.href ;

date=url.match(/\d{8}/gi)[0]
json_data= "https://kyukyunyorituryo.github.io/new_epub/json/"+date+"j.json"
getJSON(json_data)
  });