<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(place, index) in places" :key="index">
      <h3 @click="toggleInfo(index)">{{ place.name }}</h3>
      <div v-if="activeIndex === index">
        <p>Address: {{ place.vicinity }}</p>
        <p>Rating: {{ place.rating }}</p>
        <img :src="getPhotoUrl(place.photos)" alt="Coffee Shop Photo" v-if="place.photos && place.photos.length > 0">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PropTypes from 'vue-types';

export default {
  props: {
    title: PropTypes.string.isRequired,
    apiKey: PropTypes.string.isRequired
  },
  data() {
    return {
      places: [],
      activeIndex: -1 
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
          location: '47.6062,-122.3321',
          radius: 1500,
          type: 'cafe',
          key: this.apiKey
        }
      })
      .then(response => {
        this.places = response.data.results;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },
    getPhotoUrl(photos) {
      if (photos && photos.length > 0) {
        return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${this.apiKey}`;
      }
      return '';
    },
    toggleInfo(index) {
      this.activeIndex = this.activeIndex === index ? -1 : index; 
    }
  }
};
</script>