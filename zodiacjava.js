//Define all your text using constants

//Capricorn Dec 22 - Jan 19
const Capricorn = 'Capricorn';
const CapricornText = 'December 22nd - January 19th <br> Ruling Planet: Saturn <br> Element: Earth <br> Traits: Ambitious, Independent, & Traditional';

//Aquarius Jan 20 - Feb 18
const Aquarius = 'Aquarius';
const AquariusText = 'January 20th - February 18th <br> Ruling Planet: Saturn <br> Element: Air <br> Traits: Unique, Trendy, & Progressive';

//Pisces Feb 19 - March 20
const Pisces = 'Pisces';
const PiscesText = 'February 19th - March 20th <br> Ruling Planet: Jupiter <br> Element: Water <br> Traits: Artistic, Harmonic, & Edgy';

//Aries March 21 - April 19
const Aries = 'Aries';
const AriesText = 'March 21st - April 19th <br> Ruling Planet: Mars <br> Element: fire <br> Traits: Bold, Dynamic, & Abstract';

//Taurus April 20 - May 20
const Taurus = 'Taurus';
const TaurusText = 'April 20th - May 20th <br> Ruling Planet: Venus <br> Element: Earth <br> Traits: Bold, Confident, &  Determined';

//Gemini May 21 - June 20
const Gemini = 'Gemini';
const GeminiText = 'May 21st - June 20th <br> Ruling Planet: Mercury <br> Element: Air <br> Traits: Dynamic, Original, & Trendy';

//Cancer June 21 - July 22
const Cancer = 'Cancer';
const CancerText = 'June 21st - July 22nd <br> Ruling Planet: Moon <br> Element: Water <br> Traits: Artistic, Confident, & Classic';

//Leo July 23 - August 22
const Leo = 'Leo';
const LeoText = 'July 23rd - August 22nd <br> Ruling Planet: Sun <br> Element: Fire <br> Traits: Adventurous, Dramatic, & Humorous';

//Virgo August 23 - September 22
const Virgo = 'Virgo';
const VirgoText = 'August 23rd - September 22nd <br> Ruling Planet: Mercury <br> Element: Earth <br> Traits: Analytical, Determined, &  Simple';

//Libra September 23 - October 22
const Libra = 'Libra';
const LibraText = 'September 23rd - October 22nd <br> Ruling Planet: Venus <br> Element: Air <br> Traits: Harmonic, Refined, & Edgy';

//Scorpio October 23 - November 21
const Scorpio = 'Scorpio';
const ScorpioText = 'October 23rd - November 21st <br> Ruling Planet: Mars <br> Element: Water <br> Traits: Mysterious, Objective, & Edgy';

//Sagittaurus November 22 - December 21
const Sagittaurus = 'Sagittaurus';
const SagittaurusText = 'November 22nd - December 21st <br> Ruling Planet: Jupiter <br> Element: Fire <br> Traits: Ambitious, Objective, & Idealistic';

function playAudio(AudioFile) {

  var oAudio = document.getElementById("playMusic");

  oAudio.src = AudioFile;
  oAudio.play();
 
}



  function ValidateDOB(Birthday) { 
 
          // Get a reference to the myModel Div element
          var modal = document.getElementById("myModal");

          //Make the myModel div element visible
          modal.style.display = "block";
  
          //Get a reference to the button that calls this function
          var btn = document.getElementById("btnValidate");
  
          //Get a referance to the <span> element that closes the modal dialog
          var span = document.getElementsByClassName("close")[0];
  
          //When the user clicks on <span> (x), close the modal dialog by setting its 
          //display property to 'none'
          span.onclick = function() {
             modal.style.display = "none";
          }
  
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
          if (event.target == modal) {
          modal.style.display = "none";
          }
          }

    //Turn the input date into a date datatype 
    var BirthdateVar = new Date(Birthday);
    
    BirthdateVar.setDate(BirthdateVar.getDate() + 1);

    //Extract the month
    var CurrentMonth = BirthdateVar.getMonth() + 1;
    //(CurrentMonth);
    
    //Extract the day
    var CurrentDay = BirthdateVar.getDate();
    //(CurrentDay);

    //Check to determine which zodiac the user qualifies for
 
    switch (true){
    
      //Capricorn Dec 22 - Jan 19
      case ( (CurrentMonth == 12 && CurrentDay >= 22) || (CurrentMonth == 1 && CurrentDay >= 1 && CurrentDay <= 19)):
      document.getElementById("ZodiacImage").src = 'images/capricorn.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Capricorn; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = CapricornText; //description
      playAudio('sounds/capricornsound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DFF7FE"; //bg is blue
      break;

      //Aquarius Jan 20 - Feb 18
      case( (CurrentMonth == 1 && CurrentDay >= 20) || (CurrentMonth == 2 && CurrentDay <= 18)):
      document.getElementById("ZodiacImage").src = 'images/aquarius.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Aquarius; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = AquariusText; //description
      playAudio('sounds/aquariussound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DCFFD2"; //bg is green
      break;

      //Pisces Feb 19 - March 20
      case( (CurrentMonth == 2 && CurrentDay >= 19) || (CurrentMonth == 3 && CurrentDay <= 20)):
      document.getElementById("ZodiacImage").src = 'images/pisces.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Pisces; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = PiscesText; //description
      playAudio('sounds/piscessound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#F9D0DD"; //bg is pink 
      break;

      //Aries March 21 - April 19
      case( (CurrentMonth == 3 && CurrentDay >= 21) || (CurrentMonth == 4 && CurrentDay <= 19)):
      document.getElementById("ZodiacImage").src = 'images/aries.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Aries; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = AriesText; //description
      playAudio('sounds/ariessound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#F9D0DD"; //bg is pink
      break;

      //Taurus April 20 - May 20
      case( (CurrentMonth == 4 && CurrentDay >= 20) || (CurrentMonth == 5 && CurrentDay <= 20)):
      document.getElementById("ZodiacImage").src = 'images/taurus.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Taurus; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = TaurusText; //description
      playAudio('sounds/taurussound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DCFFD2"; //bg is green
      break;

      //Gemini May 21 - June 20
      case( (CurrentMonth == 5 && CurrentDay >= 21) || (CurrentMonth == 6 && CurrentDay <= 20)):
      document.getElementById("ZodiacImage").src = 'images/gemini.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Gemini; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = GeminiText; //description
      playAudio('sounds/geminisound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#FFFDC9"; //bg is yellow  
      break;

      //Cancer June 21 - July 22
      case( (CurrentMonth == 6 && CurrentDay >= 21) || (CurrentMonth == 7 && CurrentDay <= 22)):
      document.getElementById("ZodiacImage").src = 'images/cancer.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Cancer; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = CancerText; //description
      playAudio('sounds/cancersound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#F9D0DD"; //bg is pink
      break;

      //Leo July 23 - August 22
      case( (CurrentMonth == 7 && CurrentDay >= 23) || (CurrentMonth == 8 && CurrentDay <= 22)):
      document.getElementById("ZodiacImage").src = 'images/leo.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Leo; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = LeoText; //description
      playAudio('sounds/leosound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#FFFDC9"; //bg is yellow 
      break;

      //Virgo August 23 - September 22
      case( (CurrentMonth == 8 && CurrentDay >= 23) || (CurrentMonth == 9 && CurrentDay <= 22)):
      document.getElementById("ZodiacImage").src = 'images/virgo.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Virgo; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = VirgoText; //description
      playAudio('sounds/virgosound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DFF7FE"; //bg is blue  
      break;

      //Libra September 23 - October 22
      case( (CurrentMonth == 9 && CurrentDay >= 23) || (CurrentMonth == 10 && CurrentDay <= 22)):
      document.getElementById("ZodiacImage").src = 'images/libra.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Libra; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = LibraText; //description
      playAudio('sounds/librasound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DCFFD2"; //bg is green
      break;

      //Scorpio October 23 - November 21
      case( (CurrentMonth == 10 && CurrentDay >= 23) || (CurrentMonth == 11 && CurrentDay <= 21)):
      document.getElementById("ZodiacImage").src = 'images/scorpio.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Scorpio; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = ScorpioText; //description
      playAudio('sounds/scorpiosound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#FFFDC9"; //bg is yellow 
      break;

      //Sagittaurus November 22 - December 21
      case( (CurrentMonth == 11 && CurrentDay >= 22) || (CurrentMonth == 12 && CurrentDay <= 21)):
      document.getElementById("ZodiacImage").src = 'images/sagittarius.png'; //image
      document.getElementById("HoroscopeText").innerHTML = Sagittaurus; //zodiac sign
      document.getElementById("HoroscopeDesc").innerHTML = SagittaurusText; //description
      playAudio('sounds/sagittaurussound.mp3'); //sound
      document.getElementById("myModelContent").style.background = "#DFF7FE"; //bg is blue  
      break;

      default:
      ("Not Handled");

    }

}
 
 
 