const ApiConfig = {
    token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjdhMTk5ZGEzYTlmMGQ4NTZiNzk0OTkxZTQxODJjOSIsInN1YiI6IjYxZjg4M2I2Y2NiMTVmMDBiZTAxNTk1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8w2leam12ZsH3MQFNGfmwIBS-5X2y1jGZ5ApcwI-Yh4',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default ApiConfig;
