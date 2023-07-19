//For playlist icon on sidebar
function togglePlaylists() {
    const playlists = document.getElementById('playlists');
    playlists.style.display = playlists.style.display === 'none' ? 'block' : 'none';
}

//For Playlist toggling
function togglePlaylist(playlistId) {
    const playlistVideos = document.getElementById(playlistId);
    playlistVideos.style.display = playlistVideos.style.display === 'none' ? 'flex' : 'none';
}

// Sample data for the playlist with video details
const playlistVideos = {
    // Playlist 1 videos
    playlist1: [
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/QdE-_Tj47f8",
        authorImage: "author_1.jpg",
        title: "Why Threads is a bigger Deal",
        author: "Google",
        views: "1M Views • 2 Weeks Ago",
      },
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/ntz2c2z54dg",
        authorImage: "author_2.jpg",
        title: "The Downfall of Mobile Gaming",
        author: "Microsoft",
        views: "500K Views • 1 Month Ago",
      },
    ],
    // Playlist 2 videos
    playlist2: [
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/Ri-HcFlNcJk",
        authorImage: "author_1.jpg",
        title: "IOS 17 Hands On",
        author: "Google",
        views: "800K Views • 3 Weeks Ago",
      },
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/nk0qACYkbQM",
        authorImage: "author_2.jpg",
        title: "Nothing Phone(2)",
        author: "Microsoft",
        views: "300K Views • 2 Months Ago",
      },
    ],
  };

  const dispVideos = {
    // Playlist 1 videos
    playlist1: [
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/QdE-_Tj47f8",
        authorImage: "author_1.jpg",
        title: "Why Threads is a bigger Deal",
        author: "Google",
        views: "1M Views • 2 Weeks Ago",
      },
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/ntz2c2z54dg",
        authorImage: "author_2.jpg",
        title: "The Downfall of Mobile Gaming",
        author: "Microsoft",
        views: "500K Views • 1 Month Ago",
      },
    ],
    // Playlist 2 videos
    playlist2: [
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/Ri-HcFlNcJk",
        authorImage: "author_1.jpg",
        title: "IOS 17 Hands On",
        author: "Google",
        views: "800K Views • 3 Weeks Ago",
      },
      {
        thumbnail: "yt_1200.jpg",
        embedLink: "https://www.youtube.com/embed/nk0qACYkbQM",
        authorImage: "author_2.jpg",
        title: "Nothing Phone(2)",
        author: "Microsoft",
        views: "300K Views • 2 Months Ago",
      },
    ],
  };
  
  // Function to create video cards for the playlist
  function createPlaylistVideos(playlistId) {
    const playlistSection = document.getElementById(playlistId);
  
    playlistVideos[playlistId].forEach((video) => {
      const videoCard = document.createElement("div");
      videoCard.className = "video";

      const videoIframe = document.createElement("iframe");
      videoIframe.src = video.embedLink;
      videoIframe.frameborder = "0";
      videoIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      videoIframe.allowFullscreen = true;

      const videoDetails = document.createElement("div");
      videoDetails.className = "details";
      videoDetails.innerHTML = `
        <div class="author">
          <img src="${video.authorImage}" alt="" />
        </div>
        <div class="title">
          <h3>${video.title}</h3>
          <a href="">${video.author}</a>
          <span>${video.views}</span>
        </div>
      `;

      videoCard.appendChild(videoIframe);
      videoCard.appendChild(videoDetails);
      playlistSection.appendChild(videoCard);
    });
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = (sidebar.style.display === 'none') ? 'block' : 'none';
  }
  
  const sidebarToggle = document.getElementById('menu');
  
  sidebarToggle.addEventListener('click', toggleSidebar);

// Call the function to create video cards for each playlist
createPlaylistVideos('playlist1');
createPlaylistVideos('playlist2');