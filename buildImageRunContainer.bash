docker build -t amazon_reviews .
docker run -d -p 3001:3001 -v  "$(pwd)":/src/app --name reviews_module amazon_reviews:latest