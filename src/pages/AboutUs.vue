<template>
  <div id="main">
    <div>
      <b-img src="image/popcorn.gif" fluid alt="Responsive image" width="400px" id="image1"></b-img>
    </div>
    <br><br><br><br>
    <div class="container">
      <div class="text">
        <span style="--i:1">À</span>
        <span style="--i:2"></span>
        <span style="--i:3">p</span>
        <span style="--i:4">r</span>
        <span style="--i:5">o</span>
        <span style="--i:6">p</span>
        <span style="--i:7">o</span>
        <span style="--i:8">s</span>
        <span style="--i:9"></span>
        <span style="--i:10">d</span>
        <span style="--i:11">e</span>
        <span style="--i:12"></span>
        <span style="--i:13">N</span>
        <span style="--i:14">o</span>
        <span style="--i:15">u</span>
        <span style="--i:16">s</span>
      </div>
      <div>
        <b-img src="image/lion.gif" fluid alt="Responsive image"></b-img>
      </div>
    </div>
    <div  id="debout">
      <br><br>
      <h1 class="sous-title">Notre philosophie</h1>
      <br>
      <article class="articles">
        Depuis sa création en 2000, Davide's et Dawit's est une entreprise familiale indépendante engagée envers ses propriétaires, ses collaborateurs, ses clients, ses fournisseurs, l’environnement et la société.
      </article>
      <br>
      <h1 class="sous-title">Histoire</h1>
      <br>
      <article class="articles">
        Les fondateurs inscrivirent la mention « Toujours mieux » sur leurs premiers produits. Tel un fil rouge, ces deux mots suivent l’histoire de plus d’un siècle de Davide's et Dawit's.
      </article>
      <br>
      <h1 class="sous-title">Évolution des affaires</h1>
      <br>
      <article class="articles">
        In the 2020 financial year the company achieved sales of € 4.5 bn. This corresponds to an increase of
        € 276,6 m, or 6.5%. In Germany, turnover was € 1.33 bn.
      </article>
      <br>
      <h1 class="sous-title">Management</h1>
      <br>
      <article class="articles">
        Davide's et Dawit's. D&amp;D est gérée par quatre directeurs égaux en droits : Dr Davide, Dr Dawit, Dr Rodjack et Mr. Augusto.
      </article>
      <br>
      <h1 class="sous-title">Développement durable</h1>
      <br>
      <article class="articles">
        Pour Davide's et Dawit's, agir durablement n’est pas seulement en lien avec les valeurs et les traditions de l’entreprise, mais constitue aussi la base fondamentale du succès de l’entreprise à long terme.
      </article>
      <br>
      <h1 class="sous-title">Distinctions &amp; tests remportés par Davide's et Dawit's</h1>
      <br>
      <article class="articles">Le développement et l’amélioration continus sont à la base de toutes les activités chez Davide's et Dawit's. Les nombreux prix et récompenses obtenus par Miele confirment la réussite de sa stratégie.</article>
      <br>
      <h1 class="sous-title">Sites</h1>
      <br>
      <article class="articles">Davide's et Dawit's est présent dans 5 pays/régions du monde via ses propres sociétés de distribution et dans quelque 5 autres par le biais d’importateurs.</article>
      <br>
      <h1 class="sous-title">Interlocuteurs</h1>
      <br>
      <article class="articles">En cas de questions et de demandes, nos interlocuteurs se feront un plaisir de vous aider.</article>

      <div>
        <b-img src="image/endofpage.png" fluid alt="Responsive image" width="400px"  id="image2"></b-img>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "AboutUs"
}
</script>

<style scoped>
#main {
  background-color: lightblue;
}
#image1{
  float: left;
}
#image2{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lobster&display=swap');
#title{
  background-color: lightgray;
  color: white;
  height: 70px;
  text-align: center;
  padding-top: 10px;;
}
.sous-title{
  color: red;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
.articles{
  font-size: xx-large;
  font-family: 'Lobster', cursive;
}
#debout{
  margin-left: 5%;
  margin-right: 5%;
}
/*text effect*/
HTML CSSResult Skip Results Iframe
EDIT ON
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 1170px;
  min-height: 10vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 15px;
  margin-left: -100px;
}
.text span {
  font-size: 60px;
  padding: 0 10px;
  text-transform: uppercase;
  color: #fff;
  animation: zoomup 2s linear infinite;
  animation-delay: calc(200ms * var(--i));
}
@keyframes zoomup {
  0%,
  100% {
    color: #00c2ba;
    filter: blur(1px);
    text-shadow: 0 0 10px #00c2ba, 0 0 20px #00c2ba, 0 0 30px #00c2ba,
      0 0 40px #00c2ba, 0 0 60px #00c2ba, 0 0 80px #00c2ba, 0 0 100px #00c2ba,
      0 0 120px #00c2ba;
  }
  5%,
  95% {
    filter: blur(0);
    color: #fff;
    text-shadow: none;
  }
}
</style>