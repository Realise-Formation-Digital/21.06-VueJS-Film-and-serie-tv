<template>
  <div>
    <Carousel />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Bryan Cranston"
            img-src="https://www.mercurynews.com/wp-content/uploads/2016/10/bryancranstonportraitses.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Aaron Paul"
            img-src="https://dl.img-news.com/dl/img/s3/dl/2020/06/Aaron-Paul.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Anna Gunn"
            img-src="https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2013/07/Anna-Gunn.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Dean Norris"
            img-src="https://autourdelafrance.com/wp-content/uploads/2020/10/Fortune-de-Dean-Norris-2020-age-taille-poids-femme-enfants.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card
            title="Betsy Brandt"
            img-src="https://tvline.com/wp-content/uploads/2019/04/betsy-brandt-pearson.jpg?w=619"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Bob Odenkirk"
            img-src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAMIkJr.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=999&y=661"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Krysten Ritter"
            img-src="https://resize-elle.ladmedia.fr/rcrop/638,,forcex/img/var/plain_site/storage/images/people/la-vie-des-people/news/pourquoi-krysten-ritter-est-une-super-heroine/60572481-1-fre-FR/Pourquoi-Krysten-Ritter-est-une-super-heroine.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Jonathan Banks"
            img-src="https://images.newindianexpress.com/uploads/user/imagelibrary/2019/9/25/w600X390/Jonathan_Banks_AP.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>


<style scoped>
</style>