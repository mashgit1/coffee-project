export default {
  async mounted() {
    try {
      const response = await this.$axios.$get('/api/maps', {
        params: {
          location: '47.6062,-122.3321',
          radius: 1500,
          type: 'cafe',
          apiKey: 'AIzaSyANGVxUHQhIwKBPqGT-bKSu3Hi5BM3Vn7k'
        }
      });
      
      // Handle the response from the server
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}