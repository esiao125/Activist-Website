/* .js files add interaction to your website */
/*MAKE SURE TO SPELL EVERYTHING RIGHT*/
/* use [] instead of {} for lists and separate with , */
var factList = [
  "Millions of animals die every year in the United States alone due to mistreatment, research testing, and many other kinds of cruelty. While this is a sad issue many know about, finding the compassion and bravery to learn what action to take is the first step to help end it.",
  "What does animal abuse and cruelty look like? While most have a picture, it comes in different forms, some being. Neglect defined by The Humane Society of The United States as “a failure to provide basic needs for an animal,” basic needs including medical care and resources. Physical abuse, the image many have in mind. The instance where a person physically hurts or injures an animal. Evident in animals used for testing as well as pets. Mental abuse, this can be seen as isolation and harassing of an animal, animals used for experimentation and testing also experience this.",
  "Recognizing the signs of abuse and documenting it is the best way to prove that the animal needs to be protected from their abuser. However, it is important to realize that trying to interfere poses a great harm to one’s personal safety, so keeping oneself safe is the top priority. In cases of physical abuse, it's imperative that there is no interference as PETA, the World Animal Net, and The Humane Society of The United States suggest this behavior could then be directed at you. Additionally, there are many different ways to take action to stop animal abuse and cruelty other than stepping directly into a case.",
  "Those actions include: Donating to an animal rescue or fondation like PETA. Calling animal control, 911, PETA, or The Humane Society of The United States to remove the animal, though there will need to be a justification and evidence. Volunteering at shelters, fundations, and organizations. Fostering animals. Educating others on the topic. Teaching younger people about the value of compassion for animals. Sharing an animal’s case or a foundation/organization on social media to garner more support."
];


var fact = document.getElementById("fact");
var more = document.getElementById("more");
var count = 0;

/* if the button doesn't load then neither will the ability to get facts will */
if (more) {
  more.addEventListener("click", text);
}
/* what the program will do when the button is clicked */
function text(){
  fact.innerHTML = factList[count]; /* when the function is run, the fact displayed will correspond to the fact in the list that the number count is */
  count++; /*each time the function is run, the count will add 1 to its value */
  if (count == factList.length){
    count = 0; /*resets the count to 0 when it reaches the end of the list */
  }
}

var sourceList = ["https://www.shelteranimalscount.org/ - Shelter Animals Count", 
                  "https://www.aspca.org/ - American Society for the Prevention of Cruelty to Animals", 
                  "https://animalequality.org/ - animal Equality", 
                  "https://friendsofanimals.org/ - Friends of Animals", 
                  "https://worldanimal.net/ - World Animal Net", 
                  "https://www.humanesociety.org/ - The Humane Society of The United States", 
                  "https://www.peta.org/ - PETA"  
]
var source = document.getElementById("source");
var resource = document.getElementById("resource");
var number = 0

if(resource) {
  resource.addEventListener("click", link);
}

function link(){
  source.innerHTML = sourceList[number];
  number++;
  if (number == sourceList.length){
    number = 0;
  }
}