<template>
  <!-- Start of template section -->
  <div class="compare">
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
      <aside>
        <h2>Coffee Cultures</h2>
        <p>Now that you know a little more about the origin of coffee, you can now explore the different coffee cultures around the world.</p>
      </aside>
      <!-- Accordion with v-for loop -->
      <section class="content">
        <h2>United States</h2>
        <p>Coffee in America is about convenience, accessibility, and speed. You will typically find Americans drinking coffee at home or grabbing a cup quickly before heading into the office to begin their workday. Although the craft coffee culture has very much taken off in America, even those craft cocktails are often taken to go.</p>
        <p>This is beginning to change with the third wave of coffee. See more about the three waves of coffee below.</p>
          <div id="coffeeWavesAccordion" class="accordion">
          <div class="accordion-item" v-for="(wave, waveIndex) in coffeeWaves" :key="'wave-' + waveIndex">
            <h3 class="accordion-header" :id="'heading-' + waveIndex">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#collapse-' + waveIndex"
                :aria-expanded="waveIndex === 0 ? 'true' : 'false'"
                :aria-controls="'collapse-' + waveIndex"
              >
                {{ wave.title }}
              </button>
            </h3>
            <div
              :id="'collapse-' + waveIndex"
              class="accordion-collapse collapse"
              :class="{ 'show': waveIndex === 0 }"
              :aria-labelledby="'heading-' + waveIndex"
              data-bs-parent="#coffeeWavesAccordion"
            >
              <div class="accordion-body">
                <p>
                  {{ wave.description }}
                  <a
                    :href="wave.link"
                    data-bs-toggle="tooltip"
                    :title="'Click here to learn more about ' + wave.title"
                    >Learn more</a
                  >
                </p>
              </div>
            </div>
          </div>
        <h2>Outside of the US</h2>
        <div class="image-container text-center">
          <img :src="worldMap.src" :alt="worldMap.alt" class="img-fluid img-thumbnail w-50">
          <p>{{ worldMap.description }}</p>
        </div>
      </section>
      <section class="content">
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
export default {
  name: 'compare',
  data() {
    return {
      title: 'Comparison of Coffee Cultures',
      images: [
        { src: require('../static/top-view-tasty-coffee-with-coffee-beans.jpg'), alt: 'top view coffee with coffee beans' }
      ],
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
      coffeeWaves: [
        { title: 'First Wave', description: 'The first wave of coffee is seen as the lowest quality and is known as commodity coffee. The beans are artificially or naturally flavored, primarily pre-ground offerings, and the coffee is dark and bitter.' },
        { title: 'Second Wave', description: 'The second wave is largely focused on the experience and can be seen in brands like Starbucks and Caribou Coffee that revolutionized cafe culture in the United States in the late 1900s which introduced coffee lovers to a wider variety of coffee experiences.' },
        { title: 'Third Wave', description: 'Third wave coffee, commonly known as specialty coffee, evolved from a small community in the 1980s that was highly focused on the coffee beans. The coffee has specific flavor notes (eg. honey sweetness, rose aromatics, and orange acidity), lighter roast profiles, latte art, single origin beans, and more. This wave in now the largest coffee sub-industry in the US.' }
      ],
      worldMap: {
        src: require('../static/world-map-made-coffee-white-background.jpg'),
        alt: 'world map of coffee',
        description: 'In most other parts of the world, coffee culture stems from connection. People gather in groups or at home to socialize with friends and family over a cup of coffee. Coffee culture around the world thrives on connection and it can be seen in cafes in Italy, Turkey, Egypt, Japan, and many other regions.'
      },
      sources: [
        { text: 'Coffee Culture in the United States and Europe', link: 'https://theculinarytravelguide.com/coffee-culture-in-the-united-states-and-europe/' },
        { text: 'COFFEE CULTURE AROUND THE WORLD', link: 'https://www.taylorlane.com/blogs/read/coffee-culture-around-the-world' }
      ]
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'This is the compare page of my project site.' },
        { name: 'keywords', content: 'coffee, coffee history, coffee drinks, coffee culture, comparison' },
        { property: 'og:title', content: 'Compare - Coffee Project' },
        { property: 'og:description', content: 'This is my compare page where you can explore more about different coffee cultures around the world.' },
        { property: 'og:type', content: 'website' }
      ]
    };
  }
};
</script>