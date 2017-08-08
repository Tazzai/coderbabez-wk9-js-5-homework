function getAdventure(step){
  var gameData = [
    {
      story:"It's a normal day in the office... or so you think. Nikki comes up to you at the door and asks if you'd like to try some of the brand new cold brew.",
      prompt:'Do you drink the cold brew?',
      option1:'yes',
      option2:'no'
    },{
      story:"Nikki smiles and passes you a glass full of cold brew. As she hands it to you, you see Frank barrelling towards the door.",
      prompt:'Good thing you have cold brew energy! What do you do?',
      option1:'jump',
      option2:'duck'
    },{
      story:'Great! Have some Rose instead. As Nikki hands you the Rose, you see Frank barrelling towards the door.',
      prompt:'Oh no! The Rose has destroyed your reflexes. What do you do?',
      option1:'play dead',
      option2:'shriek loudly'
    },{
      story:'Slick moves! You have successfully survived the Frank steamroller',
      prompt:"What's your next move?",
      option1:'victory lap',
      option2:'work from home'
    },{
      story:"Seriously. Frank can't jump. Ducking doesn't help. Frank fells you with one mighty fart.",
      prompt:"What's your next move?",
      option1:'cry quietly',
      option2:'slow clap yourself out'
    },{
      story:'Playing dead put you more in the path of Frank. Frank knocks you out with one mighty fart.',
      prompt:"What's your next move?",
      option1:'cry quietly',
      option2:'slow clap yourself out'
    },{
      story:'Slick moves! You shrieked so loudly it stopped Frank in his tracks! The office begins to slow clap.',
      prompt:"What's your next move?",
      option1:'victory lap',
      option2:'work from home'
    }
  ]
  return gameData[step];
}
