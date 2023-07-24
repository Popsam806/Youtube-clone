// Video API
const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fde4414dfemsh2dbb098ec842924p11e95bjsn2220b6dfe9a4',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};



fetch(url, options)
.then(response => response.json())
.then(JSON.stringify())
.then(data => {
  console.log(data);

  const video_container = document.querySelector('.videos')
  showVideo(data.results)

  function showVideo(video) {
    video_container.innerHTML =''

    video.forEach((vid) => {

      const {title, imageurl, imdbrating, released} = vid

      const vidEl = document.createElement('div')
      vidEl.classList.add('video')

      vidEl.innerHTML = `
      <div class="vid">
              <a href="#">
                <img src="${imageurl}" alt="video" />
              </a>
              <span class="timer">2:23</span>
              <div class="watch_later">
                <div class="watch">
                  <span>Watch Later</span
                  ><i class="material-symbols-outlined"> pace </i>
                </div>
                <div class="watch">
                  <span>Add to queue</span
                  ><i class="material-symbols-outlined"> segment </i>
                </div>
              </div>
            </div>
            <div class="detail">
              <a href="#" class="detail-cont">
                <img src="files/unnamed(3).jpg" alt="img" />
                <div class="title">
                  <span>${title} </span>
                  <div class="impressions">
                    <span
                      >Omah Lay
                      <i class="material-symbols-outlined"> music_note </i>
                    </span>
                    <span>4.6M Views . 3 weeks ago</span>
                  </div>
                </div>
              </a>
              <i class="material-symbols-outlined more_vert"> more_vert </i>
              <div class="options show_toggle">
                <div class="box">
                  <div class="option">
                    <i class="material-symbols-outlined"> segment </i> Add to
                    queue
                  </div>
                  <div class="option">
                    <i class="material-symbols-outlined"> pace </i> Save to
                    Watch later
                  </div>
                  <div class="option">
                    <i class="material-symbols-outlined"> playlist_add </i> Save
                    to Playlist
                  </div>
                  <div class="option">
                    <i class="material-symbols-outlined"> share </i> Share
                  </div>
                </div>
                <div class="box">
                  <div class="option">
                    <i class="material-symbols-outlined"> do_not_disturb </i>
                    Not interested
                  </div>
                  <div class="option">
                    <i class="material-symbols-outlined"> do_not_disturb_on </i>
                    Don't Reccomend this Channel
                  </div>
                  <div class="option">
                    <i class="material-symbols-outlined"> flag </i> Report
                  </div>
                </div>
              </div>
            </div>
      `
      video_container.append(vidEl)

    })
  }


})
.catch (err  => console.error(err))





// Nav Toggle
let menu = document.querySelector(".menu");
let sideNav = document.querySelectorAll(".left-side .cont");
let colapseNav = document.querySelector(".collapse");

menu.addEventListener("click", () => {
  sideNav.forEach((side) => {
    side.classList.toggle("show_toggle");
  });
  colapseNav.classList.toggle("show_toggle");
});




let moreBtn = document.querySelectorAll(".more_vert");

moreBtn.forEach((btn) => {
  let options = btn.nextElementSibling;
  let allOptions = document.querySelectorAll(".options");

  btn.addEventListener("mousedown", () => {
    allOptions.forEach((option) => {});
  });

  btn.addEventListener("click", (e) => {
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;

    options.style.top = btnTop + "px";
    options.style.left = btnLeft + "px";

    // allOptions.forEach(option => {
    //     option.classList.add('show_toggle')
    // })

    options.classList.toggle("show_toggle");
  });
});







	
