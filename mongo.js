conn=new Mongo()

//db=connect('localhost:27017/tendorsDb');
if((db.getMongo().getDBNames().indexOf('tendorsDb'))!=-1){
print("Flag  value:",db.getMongo().getDBNames().indexOf('tendorsDb'));
db=connect('localhost:27017/tendorsDb');
}else{
print("Flag  value come in else :",db.getMongo().getDBNames().indexOf('tendorsDb'));
db=db.getSiblingDB('tendorsDb')
printjson(db.createCollection('tendors'));
printjson(db.tendors.insert(
[{
	"id" : 19,
	"city" : "Kudus",
	"start_date" : "10/10/2015",
	"end_date" : "3/28/2014",
	"price" : "17.00",
	"status" : "Yearly",
	"color" : "#0db3e8"
},


{

	"id" : 20,
	"city" : "Baclayon",
	"start_date" : "3/2/2014",
	"end_date" : "7/2/2015",
	"price" : "48.55",
	"status" : "Daily",
	"color" : "#b41b2e"
},

{

	"id" : 18,
	"city" : "Jaciara",
	"start_date" : "10/4/2012",
	"end_date" : "9/14/2015",
	"price" : "40.33",
	"status" : "Weekly",
	"color" : "#ff4624"
},
{
	"id" : 17,
	"city" : "Tangxi",
	"start_date" : "8/21/2012",
	"end_date" : "5/2/2013",
	"price" : "95.27",
	"status" : "Seldom",
	"color" : "#7ed096"
}
]
));

}

cursor = db.tendors.find();
while ( cursor.hasNext() ) {
   printjson( cursor.next() );
}



