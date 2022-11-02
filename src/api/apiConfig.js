const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "995349e2feef706072e377f33d7c8a69", //application programming interface calling from a back end // remember bomo_2022 as password, bomoyor22@gmail.com, beznield-user name TMDB
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;