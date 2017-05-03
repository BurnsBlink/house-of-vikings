const names = {
  boyNames: [
  "Arne",
  "Axel",
  "Bjorn",
  "Eirik",
  "Fenric",
  "Fricco",
  "Geir",
  "Gisle",
  "Gunnar",
  "Gunner",
  "Harald",
  "Hakon",
  "Inge",
  "Ivar",
  "Knut",
  "Leif",
  "Magnus",
  "Nicor",
  "Olav",
  "Ragnar",
  "Rolf",
  "Rollo",
  "Sigurd",
  "Snorri",
  "Steinar",
  "Sweyne",
  "Torstein",
  "Trygve",
  "Ulf",
  "Uppsala",
  "Valdemar",
  "Vidar",
  "Yngve"
],
girlNames: [
  "Amma",
  "Aslaug",
  "Astrid",
  "Audumbla",
  "Brynhild",
  "Cara",
  "Cari",
  "Corina",
  "Edda",
  "Ella",
  "Emma",
  "Freja",
  "Freydis",
  "Geirskokul",
  "Gudrun",
  "Gunnhild",
  "Gunnvor",
  "Helga",
  "Hilde",
  "Hlock",
  "Hyrokkin",
  "Ingrid",
  "Jarnsaxa",
  "Kara",
  "Lagertha",
  "Liva",
  "Mist",
  "Porunn",
  "Ragnhild",
  "Ranveig",
  "Siggy",
  "Signe",
  "Sigrid",
  "Sigrunn",
  "Siv",
  "Solveig",
  "Svanhild",
  "Torhild",
  "Torunn",
  "Torvi",
  "Torwig",
  "Turid",
  "Vigwis",
  "Yngvild"
],
lastNames: [
  "Bekkr",
  "Berg",
  "Bergman",
  "Bödvarsson",
  "Eriksdottir",
  "Eriksen",
  "Fairhair",
  "Forkbeard",
  "Godwinson",
  "Hamundarson",
  "Hardrada",
  "Ironside",
  "Larsen",
  "Lingdberg",
  "Lodbrok",
  "Ragnarsson",
  "Rolvsson",
  "Ronning",
  "Skallagrimsson",
  "Sprakling",
  "Thorburn",
  "Wolff"
]}

export default names;
// 
// let boyNames = names.boyNames.join('|').toLowerCase().split('|');
// let girlNames = names.girlNames.join('|').toLowerCase().split('|');
// let norseName = "k";
//
// let firstLetter = norseName[0].toLowerCase();
//
// let selectedNames = [];
// for (let i = 0; i < boyNames.length; i++) {
//   if (boyNames[i].toLowerCase().indexOf(firstLetter) != -1) {
//     selectedNames.push(boyNames[i]);
//   }
// }
// let firstName = selectedNames[Math.floor(Math.random()*selectedNames.length)];
//
// function jsUcfirst(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// let finalFirstName = jsUcfirst(firstName);
//
// let lastNames = names.lastNames;
// let randomIndex = Math.floor(Math.random() * lastNames.length);
// let finalLastName = lastNames[randomIndex];
// // finalFirstName + ' ' + finalLastName;
//
// let selectedGirlNames = [];
// for (let i = 0; i < girlNames.length; i++) {
//   if (girlNames[i].toLowerCase().indexOf(firstLetter) != -1) {
//     selectedGirlNames.push(girlNames[i]);
//   }
// }
// let firstGirlName = selectedGirlNames[Math.floor(Math.random()*selectedGirlNames.length)];
//
// let finalFirstGirlName = jsUcfirst(firstGirlName);
// finalFirstGirlName + ' ' + finalLastName + ', ' + finalFirstName + ' ' + finalLastName;
