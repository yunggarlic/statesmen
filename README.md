# Statesmen! 
<a href="http://statesmenpodcast.com">statesmenpodcast.com</a>
<br /><br/>
The interactive website for the podcast that explores all fifty states with the five senses of perception.
Access our collection of 100+ episodes, and sort using the clickable SVG map to find one that peaks your interest.

![Screen Shot 2021-03-02 at 11 26 01 AM](https://user-images.githubusercontent.com/71295717/109688601-1381c480-7b4a-11eb-9e5e-bfc49b8462c2.png)

# Explanation
Frontend: Upon an initial load, the user is presented with the show's full podcastography in a responsive grid and sorted by release date. By clicking a state, or another icon as part of the Map, the user is able to sort episodes by their state, or episode type.

![Screen Shot 2021-03-02 at 11 56 10 AM](https://user-images.githubusercontent.com/71295717/109692557-4af27000-7b4e-11eb-8e49-375aab202faa.png)

Every episode has it's own page that holds links to podcast providers (iTunes, Spotify, etc), and an embedded audio player for listeners to tune in on the page itself.

![Screen Shot 2021-03-02 at 11 56 34 AM](https://user-images.githubusercontent.com/71295717/109692605-59408c00-7b4e-11eb-8408-0f4a1d689d62.png)


Backend: Episodes are pulled in by an Axios request and parsed from the RSS feed from the show's hosting provider. Each episode is then cached into a Redis NoSQL database and saved for four hours before being deleted, drastically reducing the load time for site visitors who request episode information.

# Technologies!
React, Material-UI, Node, ExpressJS, Redis, Axios
