import Axios from "axios";

const searchImages = async (term) => {
  const response = await Axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 34xShMOLnN78PxB-J0VMMIZHj3f1AmBERfac_fzH6iI",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
