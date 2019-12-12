StreamBuilder(
   stream: slides,
    initialData: [],
     builder: (context, AsyncSnapshot snap) {
       List slideList = snap.data.toList(); 
       return slideList.isNotEmpty 
       ? 
       Swiper( 
         itemBuilder: (BuildContext context, int index) { 
           return Image.network( slideList[index]['image'], fit: BoxFit.fill, ); 
},


StreamBuilder(
stream: slides,
initialData: [],
builder: (context, AsyncSnapshot snap) {
List slideList = snap.data.toList();
if (slideList.isNotEmpty) {
slideList.forEach((f) {
events.add(MonEvent.fromMap(f));
});
}
return Hero(
tag: '123',
child: slideList.isNotEmpty
? Swiper(
itemBuilder: (BuildContext context, int index) {
return Image.network(
slideList[index]['image'],
fit: BoxFit.fill,
);
},
itemCount: slideList.length,
pagination: SwiperPagination(),
control: SwiperControl(),
onTap: (index) {
Navigator.pushNamed(context, '/details',
arguments: events[index]);
},
itemWidth: MediaQuery.of(context).size.width -
MediaQuery.of(context).size.width * 0.1,
itemHeight: MediaQuery.of(context).size.height -
MediaQuery.of(context).size.height * 0.1,
layout: SwiperLayout.TINDER,
loop: true,
outer: true,
autoplay: true,
autoplayDisableOnInteraction: false,
)
: Center(
child: CircularProgressIndicator(),
),
);
})`