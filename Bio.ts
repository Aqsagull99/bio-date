//Defined  Bio Data of myself//

type data={ name:string,fatherName:string,motherName:string,myAge:number,isStudent:boolean,gender:string,
maritalStatus:string,isMarried:boolean,Qualification:string,nameExamination:string,nameBoard:string,
passingYear:number,percentage:string,nationality:string,contactNo:number,EmailAddress:string,dob:number,
Area:string,address:{city:string,country:string,region:string}
// experience:string,schoolName:string,teachingDuration:string,

}
const persons:data={
    name:"AQSA",
    fatherName:"xxx",
    motherName:"xxx",
    myAge:18,
    isStudent:true,
    gender:"femail",
    maritalStatus:"xxx",
    isMarried:false,
    Qualification:"B.com",
    nameExamination:"B.com",
    nameBoard:"karachi Board",
    passingYear: 2015,
    percentage:"85%",
    dob:137684793,
    nationality:"pakistan",
    contactNo:2464289380,
    EmailAddress:"xxxxxx@gmail.com",
    Area:"xxx",
    address:{
        city:"karachi",
        country:"pakistan",
        region:"islam",

    }
}


//  Professional & personal Experience list

interface Experience {
    experience:string,
    schoolName:string,
    teachingDuration:string,
   domesticWork2:string, 
   domesticWork:string,
  diyProjects:string,
  getting:string
     }
const experience:Experience= {
              // Professional Experience list
    experience:"teaching",
    schoolName: "city piolot grammer school",
    teachingDuration:"1 year",
              //  Persnal Experience list
    domesticWork2:"Cooking",
    domesticWork: "steaching",
    diyProjects:"flower making",
    getting:"Getting respect"
}                              // This can be a string or Date range


//  defined favourite colors & hobbies list 

interface fav_Hobby{
    hobbies1:string,
    hobbies2:string,
    hobbies3:string,
    hobbies4:string,
    hobbies5:string,
    hobbies6:string,
    favColour:{color1:string,
    color2:string,
    color3:string,
    color4:string,
    color5:string,
    color6:string,
    color7:string,
    color8:string,
    color9:string,
    color10:string,
    color11:string,
    color12:string,
    color13:string,
    color14:string,
    color15:string,
    color16:string,
    color17:string}
    
}

const favHobby:fav_Hobby={
    //  defined favourite  hobbies list 
hobbies1:"cricket",
hobbies2:"cooking",
hobbies3:"study",
hobbies4:"jumping",
hobbies5:"walking",
hobbies6:"outing",
favColour:{
    // /  defined favourite colours list
    color1:"black",
    color2:"yellow",
    color3:"purple",
    color4:"pink",
    color5:"gray",
    color6:"green",
    color7:"funky",
    color8:"mustard",
    color9:"marron",
    color10:"orange",
    color11:"red",
    color12:"rust color",
    color13:"chocolate brown",
    color14:"aqua blue",
    color15:"nevy blue",
    color16:"raddish",
    color17:"sea green",
}

}
//  defined favourite food & fast food list

interface fav_foods{
    food1:string,
    food2:string,
    food3:string,
    food4:string,
    food5:string,
    food6:string,
    food7:string,
    fastFood:{
        food1:string,
    food2:string,
    food3:string,
    food4:string,
    food5:string,
    food6:string,
    food7:string,
    food8:string,
    food9:string,
    food10:string,
    food11:string,
    food12:string,} 
     }


//  defined favourite food  list
const fav2:fav_foods={
   food1:"biryani",
   food2:"kofty",
   food3:"kabab",
   food4:"fish",
   food5:"mater rice",
   food6:"fish fry",
   food7:"beef fry",
   fastFood:{
    //  defined favourite  fast food list
    food1:"pizza",
    food2:"lazania",
    food3:"cheese pasta",
    food4:"macroni",
    food5:"pizza fries",
    food6:"matka pizza",
    food7:"zinger berger",
    food8:"zinger roll",
    food9:"club sandwich",
    food10:"chowming",
    food11:"beef berger",
    food12:"fries",
    }
}

//  defined favourite  BBQ list
interface fav_bbq{
    food1:string,
    food2:string,
    food3:string,
    food4:string,
    food5:string,
    food6:string,
    food7:string,
    food8:string,
    food9:string,
    food10:string,
    food11:string,
    food12:string,
    food13:string,
}

//  defined favourite  BBQ list
const BBQ:fav_bbq={
    food1:"chicken tikka",
    food2:"malai boti",
    food3:"tikka boti",
    food4:"sajji",
    food5:"chicken boti",
    food6:"reshmi kabab",
    food7:"behari kabab",
    food8:"chicken sekh kabab ",
    food9:"achari boti ",
    food10:"beef sekh kabab",
    food11:"chicken behari boti",
    food12:"green tikka",
    food13:"gola kabab",
}

//  defined  favourite pakistan picnic place &  Out of country place list

interface fav_Place{
    place1:string,
    place2:string,
    place3:string,
    place4:string,
    place5:string,
    place6:string,
    place7:string,
    place8:string,
    place9:string,
    place10:string,
    place11:string,
    place12:string,
    place13:string,
    place14:string,
    place15:string,
    place16:string,
    place17:string,
    place18:string,
    place19:string,
    outOfcountry:{
    place1:string,
    place2:string,
    place3:string,
    place4:string,
    place5:string,
    place6:string,
    place7:string,
    place8:string,
    place9:string,
    place10:string,
    place11:string,
    place12:string,
    }
}

//  defined pakistan favourite  picnic place list
const fav3:fav_Place={
    place1:"sea view",
    place2:"adventure land",
    place3:"paradies",
    place4:"areena",
    place5:"fiesta",
    place6:"sunway laggon",
    place7:"chunki munki",
    place8:"garden",
    place9:"zoo",
    place10:"lucky one",
    place11:"hyper star",
    place12:"National stadium",
    place13:"PAF musium",
    place14:"Maritime musium ",
    place15:"potgrand",
    place16:"china pot",
    place17:"tomb of quaid-azam",
    place18:"tomb of Abdullah-shah-ghazi",
    place19:"tomb of gareeb-nawaz",
    outOfcountry:{
        //  defined Out of country  favourite   place list
    place1:"England",
    place2:"America", 
    place3:"Newzealand",
    place4:"Saudia Arbia",
    place5:"london",
    place6:"dubai",
    place7:"france",
    place8:"Afganistan",
    place9:"thailand",
    place10:"china",
    place11:"malaisha",
    place12:"yourub",
    }
    
}


console.log(persons,experience,favHobby,fav2,fav3,BBQ)



















