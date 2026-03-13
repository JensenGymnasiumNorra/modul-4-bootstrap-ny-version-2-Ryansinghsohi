 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil
 let header = document.getElementsByTagName('header')[0].innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="movies.html">movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="music.html">music</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="series.html">series</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>`