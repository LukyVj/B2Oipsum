function _select(a){var b=document,c;a="undefined"===typeof a[0]?a:a[0];try{a.select();try{"undefined"===typeof a.dataset.mouseup&&(a.dataset.mouseup="true",a.addEventListener("mouseup",function(a){a.preventDefault()},!1))}catch(d){}}catch(e){window.getSelection?(c=window.getSelection(),b=b.createRange(),b.selectNodeContents(a),c.removeAllRanges(),c.addRange(b)):b.body.createTextRange&&(b=b.body.createTextRange(),b.moveToElementText(a),b.select())}};

var sentences = [
  [
  'Venu extraire Excalibur de son enclume',
  ' , en 6.45 j’suis l’bitume avec une plume,',
  ' tout commence dans la cour de récréation,',
  ' Malabar Choco BN sale noir ma génération.',
  ' Enfant seul sans problème sauf à la maison,',
  ' j’ai pris la vie par derrière sans m’poser d’questions.',
  ' J’aime une femme, elle m’a donné le sein, ',
  ' m’a appris à m’tenir à différencier l’homme et le chien.',
  ' On m’a dit tu as la rage dégage ou je te pique,',
  ' femelle en chaleur reste pas dans les parages ',
  ' ou je te nique.',
  ' J’ai grandi suis mort en silence,',
  ' crucifié sur une caravelle sous l’œil éternel d’une étoile filante.',
  ' Dans ce capharnaüm derniers seront les vainqueurs.',
  ' mes rimes te touchent au cœur ou en plein sternum. ',
  ' La vie d’un homme la mort d’un enfant,',
  ' du sang royal dans les veines 1er en sport et en chant !',
  ' Bras levé, tête haute, j’ai rêvé qu’j’mourrai au combat,',
  ' j’veux pas mourir sur scène.',
  ' Le ciel sait que l’on saigne sous nos cagoules.',
  ' Comment ne pas être un pitbull quand la vie est une chienne.',
  ' Bras levé, tête haute, j’ai rêvé qu’j’mourrai au combat,',
  ' j’veux pas mourir sur scène.',
  ' Le ciel sait que l’on saigne sous nos cagoules.',
  ' Comment ne pas être un pitbull quand la vie est une chienne.',
  ' Mon premier spliff, ma première bouteille,',
  ' la richesse est dans nos cœurs mon cul,',
  ' moi j’veux de l’oseille, pour en obtenir, des fois c’est l’hécatombe,',
  ' peu importe si la daronne veut faire le tour du monde.',
  ' Petit, la race humaine est méchante,',
  ' je suis venu j’ai vu j’ai vaincu ces chiens la queue entre les jambes.',
  ' Et j’ai toujours la larme à l’œil, le cœur engourdi,',
  ' dis-leur j’suis noir et blanc 100% Bounty Killer.',
  ' Talentueux mais tu s’ras jamais dans ma poule,',
  ' sur le plus haut trône du monde on est jamais assis que sur son boule.',
  ' Des fois j’me dope comme un coureur cycliste,',
  ' quand se réveillent mes cicatrices,',
  ' j’me sens si seul et si triste.',
  ' Lyricist agréé, pour ça qu’dieu m’a créé ',
  ' Si si ambiance pendu, ambiance Mississipi.',
  ' J’me déchaîne au microphone, c’est l’Amazonie,',
  ' des indigènes dans les chromosomes.',
  ' Les cités d’or, ma terre promise.',
  ' Bras levé, tête haute, j’ai rêvé qu’j’mourrai au combat,',
  ' j’veux pas mourir sur scène.',
  ' Le ciel sait que l’on saigne sous nos cagoules.',
  ' Bras levé, tête haute, j’ai rêvé qu’j’mourrai au combat,',
  ' j’veux pas mourir sur scène.',
  ' Le ciel sait que l’on saigne sous nos cagoules.',
  ' Comment ne pas être un pitbull quand la vie est une chienne.',
  ' Et j’en suis, où j’en suis, malgré tellement d’erreurs,',
  ' j’suis trop en avance pour leur demander l’heure.',
  ' Pas à pas de pied ferme, sans savoir ou j’vais j’ai souvent cherché la merde,',
  ' je l’ai toujours trouvée.',
  ' Devant les profs j’faisais des grimaces en tirant sur mon oinj,',
  ' car on m’a dit en classe que l’homme venait du singe.'
  ],
  [
    ' Que des n°10 dans ma team négro',
    ' J’attends pas qu’ça tombe du ciel',
    ' si t’es pas n°10 à Paname, t’es la banane du siècle',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team',
    ' moins sage que nos pères j’me sers et j’observe',
    ' imprime nos rimes sur le ring au bulldozer',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team.',

    ' Beaucoup de mal à obéir aux hommes',
    ' même si mes paroles ont les menottes, sont plaquées au sol',
    ' t’en bats pas les couilles d’avoir d’bonnes notes',
    ' peu d’élus dans mon milieu',
    ' qu’des attaquants, peu d’ailiers dans ma banlieue',
    ' mes lyrics sont d’humeur maussade j’tenais à t’dire,',
    ' j’m’en fous d’y passer, s’y m’reste quelques millions d’euros à t’nir',
    ' mon drapeau blanc est toujours au sale, brelic bien au chaud',
    ' avant d’affronter l’équipe, trempe tes couilles dans l’eau chaude',
    ' des fois j’veux la fermer mais y’a c’putain d’rap à la con',
    ' alors j’carbure à la ke-skon et mon skeud part à la fonte',
    ' j’rêve peu, j’préfère agir mais j’ai un temps de vie minimal',
    ' donc forcément l’infini ça finit mal',
    ' si j’atteinds l’argent ou l’bronze, c’est que l’or m’aura échappé',
    ' alors j’serai d’ceux qui faut remettre en zonz',
    ' renoi, tu t’demanderas après qu’ma clique te kill,',
    ' mais comment font-ils pour avoir ce style ?',
    ' fusils à pompe dans les mains, carafes d’eau dans les pupilles',
    ' petit que des numéros 10 dans ma team.',

    ' J’attends pas qu’ça tombe du ciel',
    ' si t’es pas n°10 à Paname, t’es la banane du siècle',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team',
    ' moins sage que nos pères j’me sers et j’observe',
    ' imprime nos rimes sur le ring au bulldozer',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team.',

    ' Dans l’rap j’écris et produis, j’suis chauffeur-livreur',

    ' beaucoup d’fleurs à mon enterrement entouré d’chiffreurs négro',
    ' on plaisante pas avec le biff au QG, kho, c’est les euros,',
    ' rentrons dans le vif du sujet',
    ' banlieusard je mords à l’hameçon juste pour faire la teuf',
    ' c’matin un lapin a fumé un keuf',
    ' blanche marron et bingo, on nous parle cul et argent',
    ' dehors on d’vient dingue gringo, département du lingot',
    ' MC en occident par accident dur à assumer',
    ' mais courageux on s’suicide pas on s’fait fumer',
    ' i trop de-spee, nos réputations craignent',
    ' étalon noir kiffe les chiennes en string talons',
    ' son sans repère, crapuleux,',
    ' dansant, moi et mes compères on fout l’feu',
    ' nique sa mère et son père',
    ' on a le son qui déclasse,',
    ' beaucoup sont dans le moule mais ont le boul qui dépasse',
    ' se croient dans le mouv’, font du rap sans calories ni fibres',
    ' trop cheum, innovent en pompant, y s’ont pas vu la taille du chibre',
    ' B.2.O.B.A. numéro dix rien à craindre',
    ' j’suis destiné à briller ou à m’éteindre.',

    ' J’attends pas qu’ça tombe du ciel',
    ' si t’es pas n°10 à Paname, t’es la banane du siècle',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team',
    ' moins sage que nos pères j’me sers et j’observe',
    ' imprime nos rimes sur le ring au bulldozer',
    ' là où j’opère, nombreuses seront les victimes',
    ' que des n°10 dans ma team.',

    ' Tu rêves d’être N°10 comme nous',
    ' que la rue t’applaudisse, très peu rugissent comme nous',
    ' ballon d’or grâce à mes tacles à la gorge, mes crochets, OK',
    ' j’fais mes dièses, roi du mont de Tallac, j’te baise',
    ' fuck la loi, son arbitrage, ses cartons, dis leur ici c’est nous les patrons',
    ' sucez nous pendant qu’on bicrave',
    ' souvent la came est trop douce, trop guèze, trop lège, pas dans le 92',
    ' alors des fois je fume, je plane et je perds',
    ' au lieu de prendre des thunes, de gagner du pèze',
    ' là ou j’opère nombreuses seront les victimes',
    ' que des N°10 dans ma team.'
  ],

  [
    ' J’lui ai dit qu’j’suis dans le textile,', 
    ' elle me regarde de haut en bas', 
    ' elle me dit arrête de m’prendre pour une imbécile, j’dois r’joindre mes copines on s’en va, j’lui dis attends un peu laisse moi ton code pin, on s’revoit', 
    ' elle me répond que de toutes façons, négros comme moi ne l’intéressent pas,',
    ' qu’un gars comme moi l’utilisera lui fera la misère et la délaissera,',
    ' je - je ne comprends pas, wesh, pourquoi elle me dit ca', 
    ' j’vais pas lui faire à la DSK, j’ai même pas la gueule de l’emploi,', 
    ' laisse moi te prouver le contraire, donne moi l’heure et l’endroit,', 
    ' comment j’vais faire, pour qu’elle oublie tous mes travers, bijoux, tatouages et mon univers.',
    ' Si le monde est a moi, le monde est a nous',
    ' Scarface, les autres en face sont jaloux',
    ' pas d’fraiche',
    ' t’es pas bonne si t’as pas d’fesses t’as wallouh',
    ' mon petit coeur tombe en panne sèche c’est relou',
    ' mais en dehors ca',
    ' au d’là du fait que tu es bonne je veux le coffre fort de ton coeur je veux tous les codes entrer dans ton cerveau',
    ' sans effraction, te faire aimer mauvais garçon',
    ' Donc je l’ai revue, quel bluff', 
    ' j’vais lui sortir la meuf est encore plus fraiche en plein jour', 
    ' j’arrête pas d’ mater son cul, j’y plongerai 25 fois par jour jusqu’a c’que la go appelle au secours,', 
    ' jusqu’a c’qu’elle n’en peuve plus,', 
    ' puis je la sauverai, la réanimerai, pour qu’elle ne me quitte plus', 

    ' mais elle ne veut rien savoir, me dit qu’elle me veut juste en ami', 
    ' que j’ai plus de vice que deux flics à Miami oh,', 
    ' pourtant je suis sérieux, mon statut me fait passer pour un mytho, pour un mec mystérieux, dois-je abandonner, dois-je abandonner', 
    ' j’n’ai plus grand chose à dire, mais je crois que c’est plié',

    ' Si le monde est a moi, le monde est a nous, scarface',
    ' les autres en face sont jaloux, pas d’fraiche, t’es pas bonne si t’as pas d’fesses t’as wallouh',
    '  mon petit coeur tombe en panne sèche c’est relou',
    ' mais en dehors ca, au d’là du fait que tu es bonne je veux le coffre fort de ton coeur',
    ' je veux tous les codes entrer dans ton cerveau, sans effraction, te faire aimer mauvais garçon',
    ' Il réussit car il le devait, devait, de l’argent comme s’il en pleuvait, pleuvait,', 
    ' parle d’amour comme s’il en rêvait, rêvait,', 
    ' vit sa vie comme s’il en crevait, crevait.',
    ' je vais l’oublier, je vais l’oublier', 
    ' t’es fraiche t’es bonne et tout mais j’vais r’touner à mes billets,', 
    ' thug de la tête au pied, elle n’pensera jamais le contraire', 
    ' verbal king flow Keyzer Söze', 
    ' que de la frappe comme à Nanterre,',
    ' laisse passer les experts, caillera cherche meuf en tailleur, Louis Vuitton, Dior, Louboutin', 
    ' marre de défourailler des putains d’ailleurs je comptais sur toi, pour me changer la vie, t’impressionner te faire rire ne te fera pas changer d’avis, ohhh'
  ]
]

var punchPhrases = ['Un générateur de lorem ipsum un peu plus thug', 'réveille le thug qui est en toi', 'Toujours un peu plus thug', 'Donne du SWAG à tes mockups', 'Une touche de D.U.C dans ta facezère'];
var isSafari = /constructor/i.test(window.HTMLElement);

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

/// Punch generator && lorem ipsum goodness

// Small function to pick randomly a sentence if no param where passed
function pickOnePunch(){
   var x = sentences.length;
   var randomx = Math.floor(Math.random() * x);
   var y = sentences[randomx].length
   var randomy = Math.floor(Math.random() * y);
   document.querySelector('#ipsum').innerHTML = '<p class="bounce center">'+sentences[randomx][randomy].capitalizeFirstLetter()+'</p>'
}

// If the punchline button is picked
function pickRealPunch(){
   var x = sentences.length;
   var randomx = Math.floor(Math.random() * x);
   var y = sentences[randomx].length
   var randomy = Math.floor(Math.random() * y);
   var randomz = randomy + 1;
   document.querySelector('#ipsum').innerHTML = '<p class="bounce">'+sentences[randomx][randomy].capitalizeFirstLetter()+sentences[randomx][randomz]+'</p>'
}


// Will be used by the pickPara function, to return some punchlines
function pickAPunch(){
  var x = sentences.length;
  var randomx = Math.floor(Math.random() * x);
  var y = sentences[randomx].length
  var randomy = Math.floor(Math.random() * y);

  return sentences[randomx][randomy].capitalizeFirstLetter();
}


// Will be used if the user want only some sentences
function pickPhrase(num){
  var punches = []
  for (var i = parseInt(num); i--; i <= 0) {
    punches.push( pickAPunch() )
  }
  return '<p class="bounce">' + punches.join(' ') +  '</p>';
}

// Will be used if the user want some paragraphs
function pickPara(num){
  var punches = []
  for (var i = parseInt(num); i--; i <= 0) {
    punches.push( '<p class="bounce">' + pickAPunch() + pickAPunch() + pickAPunch() + pickAPunch() + pickAPunch() +  '</p>')
  }
  return  punches.join(' ') ;
}

window.addEventListener('DOMContentLoaded', function(){
  var x = punchPhrases.length;
  var randomx = Math.floor(Math.random() * x);
  document.querySelector('#punchphrase').innerHTML = punchPhrases[randomx]
})

// Select how many words
var nbPara = document.querySelectorAll('input[type=radio][id*="phrase_"]');
for(var i = 0; i <  nbPara.length; i++) {
  nbPara[i].addEventListener('click', function(){
    var v = this.getAttribute('id');
    v = v.split('phrase_')[1];
    document.getElementById('go').setAttribute('data-phrase', v);
    document.getElementById('go').setAttribute('data-paragraph', 'null');
    // document.getElementById('go').classList.add('ready')
  })
}
// Select how many paragraphs
var nbPara = document.querySelectorAll('input[type=radio][id*="para_"]');
for(var i = 0; i <  nbPara.length; i++) {
  nbPara[i].addEventListener('click', function(){
    var v = this.getAttribute('id');
    v = v.split('para_')[1];
    document.getElementById('go').setAttribute('data-paragraph', v);
    document.getElementById('go').setAttribute('data-phrase', 'null');
    // document.getElementById('go').classList.add('ready')
  })
}

// Select songs
var nbSong = document.querySelectorAll('input[type=radio][id*="song_"]');
for(var i = 0; i <  nbSong.length; i++) {
  nbSong[i].addEventListener('click', function(){
    var v = this.getAttribute('id');
    v = v.split('song_')[1];
    document.getElementById('go').setAttribute('data-song', v);
  })
}

// update the value of the data-clipboard thingy
function updateClipboard(){
document.querySelector('#ipsum').setAttribute('data-clipboard-text', document.querySelector('#ipsum').textContent)
}


// Display x paragraphs on click
document.querySelector('#go').addEventListener('click', function(){
  var paraNum = this.getAttribute('data-paragraph');
  var phraseNum = this.getAttribute('data-phrase');
  var selectedSong = this.getAttribute('data-song') || '4';

 document.querySelector('#ipsum').setAttribute('style','')

  if(paraNum==null && phraseNum==null || !paraNum && !phraseNum) {
    pickOnePunch();
    updateClipboard();
  }
  if(paraNum=='null'){
      document.querySelector('#ipsum').innerHTML = pickPhrase(phraseNum, selectedSong).replaceAll('undefined','');;
      updateClipboard();
  }
  if(phraseNum=='null'){
    document.querySelector('#ipsum').innerHTML = pickPara(paraNum, selectedSong).replaceAll('undefined','');;
    updateClipboard();
  }
})

var clipboard = new Clipboard('#ipsum');
clipboard.on('success', function(e) {
   
    e.clearSelection();
    document.getElementById('copied').classList.add('display', 'slideUp')

    setTimeout(function(){
          document.getElementById('copied').classList.remove('display', 'slideUp')

    }, 2000)
});

clipboard.on('error', function(e) {
  document.getElementById('ipsum').classList.add('hint--top');
  document.getElementById('ipsum').setAttribute('data-hint', 'Appuez sur ⌘-C pour copier le texte ');

  if(isSafari){
   _select(document.querySelector('#ipsum'));
 }
  
  
});


document.querySelector('#about').addEventListener('click', function(){
  this.classList.toggle('active')
  document.querySelector('#about--panel').classList.toggle('display');
});
document.querySelector('#punch').addEventListener('click', function(){
   pickRealPunch();
   updateClipboard();
});

