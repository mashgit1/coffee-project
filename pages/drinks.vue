<template>
  <!-- Start of template section -->
  <div class="drinks">
    <header class="text-center">
      <h1>{{ title }}</h1>
      <!-- Images with v-for loop -->
      <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" class="img-fluid" :key="'image-' + index">
      <!-- Navigation bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(link, linkIndex) in navItems[0].links" :key="'link-' + linkIndex">
                <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Main section -->
    <main class="container">
      <div class="row">
        <section class="content">
          <h2>Coffee Drink Options</h2>
          <CoffeeMap title="Nearby Coffee Shops" />
          <p>After exploring the history of coffee and coffee culture you're now ready to begin picking your drink of choice.</p>
        </section>
        <section class="content">
          <p>Below you will find some common drink options.</p>
          <div class="image-container d-flex align-items-center mb-4">
            <img src="../images/couple-enjoying-coffee-weekend.jpg" alt="top view of different coffee drinks" class="img-fluid">
          </div>
          <!-- List of drink options with v-for loop -->
          <ul>
            <li v-for="(drink, drinkIndex) in drinkOptions.types" :key="'drink-' + drinkIndex">
              <strong>{{ drink.name }}:</strong> {{ drink.description }}
            </li>
          </ul>
        </section>
      </div>
      <section class="row">
        <h2>Sources</h2>
        <ul>
          <li v-for="(source, sourceIndex) in sources" :key="'source-' + sourceIndex">
            <a :href="source.link">{{ source.text }}</a>
          </li>
        </ul>
      </section>
    </main>
    <!-- Footer section -->
    <footer>
      <!-- Footer navigation bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <!-- Footer navigation links with v-for loop -->
              <li class="nav-item" v-for="(link, linkIndex) in navItems[0].links" :key="'footer-link-' + linkIndex">
                <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>© 2024 Coffee, LLC | Seattle, WA</p>
    </footer>
  </div>
</template>

<script>
import CoffeeMap from '@/components/CoffeeMap.vue'; 

export default {
  name: 'drinks',
  components: {
    CoffeeMap 
  },
  data() {
    return {
      title: 'Types of Coffee Drinks',
      images: [
        { src: require ('../static/top-view-tasty-coffee-with-coffee-beans.jpg'), alt: 'top view coffee with coffee beans' }
      ],
      // Array of navigation items
      navItems: [
        {
          links: [
            { text: 'Home', to: '/' },
            { text: 'About', to: '/about' },
            { text: 'Compare', to: '/compare' },
            { text: 'Drinks', to: '/drinks' }
          ]
        }
      ],
      // containing drink options
      drinkOptions: {
        image: { src: '../images/couple-enjoying-coffee-weekend.jpg', alt: 'top view of different coffee drinks' },
        types: [
          { name: 'Drip Coffee', description: 'Ground coffee is added to a brew basket and placed in an automatic coffee machine for this brewing style. Gravity is used to pass water through the grounds, resulting in a traditional cup of coffee.' },
          { name: 'Pour Over', description: 'This brewing style is achieved by pouring boiling water slowly through coffee grounds as they sit in a filter basket. The coffee then drips into a single cup, resulting in a potent brew.' },
          { name: 'Cold Brew', description: 'For cold brew, coarsely ground coffee is placed in room temperature water and allowed to steep for an extended period of time. This results in a less bitter, highly caffeinated brew.' },
          { name: 'Espresso', description: 'Espresso requires an espresso machine which will pass pressurized hot water through a filter containing dark roasted finely ground coffee beans. The force of the water produces a highly concentrated coffee shot. This is the method most commonly used for the base of coffee drinks.' }
        ]
      },
      sources: [
        { text: 'Types of Coffee Drinks', link: 'https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html' }
      ]
    };
  },
    head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'This is the drinks page of my project site.' },
        { name: 'keywords', content: 'coffee, coffee history, coffee drinks, latte, pour over, cold brew, espresso' },
        { property: 'og:title', content: 'Drinks - Coffee Project' },
        { property: 'og:description', content: 'This is my drinks page where you can explore more about different coffee drink options.' },
        { property: 'og:type', content: 'website' }
      ]
    };
  }
};
</script>