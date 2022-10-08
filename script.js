let nextPageToken = ""

function getVideos() {
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0K4P_esry8WbHXETfHcNFw&maxResults=10&order=date&key=AIzaSyAVVYO7Sx1SGVihy5CWJhzShfVvFlNyCO0" + nextPageToken)
        .then((result) => {
            return result.json()
        }).then((data) => {
            console.log(data)
            let videos = data.items
            nextPageToken = data.nextPageToken
            let videoContainer = document.querySelector(".youtube-container")
            for (video of videos) {
                videoContainer.innerHTML += `
                        <h3>${video.snippet.tittle}</h3>
                        < img src = "${video.snippet.thumbnails.high.url}" >
                `
            }
        })
}