import axios from 'axios';
const baseUrl = "http://localhost:8000"

const Service = {
  async getAll() {
    try {
      let response = await axios.get(baseUrl+"/cakes");
      // console.log(response.data);
      return response.data;
    }catch (error) {
      console.error(error);
    }
  },
  postNew(title, url) {
    axios.post(baseUrl+"/cakes", {
        title: title,
        url: url
      })
      .then = ((response) => {
        return response;
      })
      .catch = ((error) => {
        return error;
      });
  },
  postReview(review, comment, id) {
    axios.post(baseUrl+`/cakes/rating/${id}`, {
        review: review,
        comment: comment,
      })
      .then = ((response) => {
        return response;
      })
      .catch = ((error) => {
        return error;
      });
  }
}

export default Service;
