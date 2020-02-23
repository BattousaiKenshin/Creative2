function type(e) {
  let t = document.getElementById('type');
  let type = t.options[t.selectedIndex].value;
  let url = "https://pokeapi.co/api/v2/type/" + type;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
     // debugger;
      let damage = "<h2>Other type's affects on " + upperCase(type) + " Pok&eacute;mon:</h2><div class='list'>";
      damage += "<div class='effective'><h3>Super Effective:</h3>";
      for (let i=0; i < json.damage_relations.double_damage_from.length; i++) {
      damage += "<p>" + upperCase(json.damage_relations.double_damage_from[i].name) + "</p>";
      }
      damage += "</div><div class='effective'><h3>Not Effective:</h3>";
      for(let i=0; i < json.damage_relations.half_damage_from.length; i++) {
        damage += "<p>" + upperCase(json.damage_relations.half_damage_from[i].name) + "</p>";
      }
      damage += "</div><div class='effective'><h3>No Effect:</h3>";
      for (let i=0; i < json.damage_relations.no_damage_from.length; i++) {
        damage += "<p>" + upperCase(json.damage_relations.no_damage_from[i].name) + "</p>";
      }
      damage += "</div></div>";
      document.getElementById('weaknesses').innerHTML = damage;
      damage = "<h2>" + upperCase(type) + " Pok&eacute;mon affects on other types:</h2><div class='list'>";
      damage += "<div class='effective'><h3>Super Effective:</h3>";
      for(let i = 0; i < json.damage_relations.double_damage_to.length; i++) {
      damage += "<p>" + upperCase(json.damage_relations.double_damage_to[i].name) + "</p>";
      }
      damage += "</div><div class='effective'><h3>Not Effective:</h3>";
      for(let i = 0; i < json.damage_relations.half_damage_to.length; i++) {
      damage += "<p>" + upperCase(json.damage_relations.half_damage_to[i].name) + "</p>";
      }
      damage += "</div><div class='effective'><h3>No Effect:</h3>";
      for(let i = 0; i < json.damage_relations.no_damage_to.length; i++) {
      damage += "<p>" + upperCase(json.damage_relations.no_damage_to[i].name) + "</p>";
      }
      damage += "</div></div>";
      document.getElementById('strengths').innerHTML = damage;
      let script = "<h2>List of " + upperCase(type) + " Pok&eacute;mon:</h2><div class='list'>";
      for (let i = 0; i < json.pokemon.length; i++) {
          script += "<p>" + upperCase(json.pokemon[i].pokemon.name) + "</p>";
      }
      script += "</div>";
      document.getElementById('pokemon').innerHTML = script;
    });
}
function upperCase(str) {
	return str[0].toUpperCase() + str.slice(1);
}
document.getElementById('type-button').addEventListener('click', type);
