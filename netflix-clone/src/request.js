const url='f8201a0a6d44d06780a3da9586dc43ca'

const request={
    RequstTrend:`https://api.themoviedb.org/3/trending/all/day?api_key=${url}`,
    RequstPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${url}&language=en-US&page=1`,
    RequstTopRate:`https://api.themoviedb.org/3/movie/top_rated?api_key=${url}&language=en-US&page=1`,
    RequstUpComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${url}&language=en-US&page=1`,
}
export default request