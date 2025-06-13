 
    const API_KEY = '8d076dab'; 

    async function searchMovie() {
      const query = document.getElementById('searchInput').value;
      const container = document.getElementById('movieContainer');
      container.innerHTML = '<p>Loading...</p>';

      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response === "True") {
          container.innerHTML = '';
          data.Search.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `
              <img src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/200'}" alt="Poster">
              <h3>${movie.Title}</h3>
              <p>Year: ${movie.Year}</p>
            `;
            container.appendChild(card);
          });
        } else {
          container.innerHTML = `<p>No results found for "${query}"</p>`;
        }
      } catch (error) {
        container.innerHTML = '<p>Error fetching movie data.</p>';
        console.error(error,"Loution Error");
      }
    }
 