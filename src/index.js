// index.js

function generateLink(url, time) {
  // Get input values
  var youtubeLink = url.trim();
  var startHours = parseInt(time.hours, 10) || 0;
  var startMinutes = parseInt(time.minutes, 10) || 0;
  var startSeconds = parseInt(time.seconds, 10) || 0;

  // Validate YouTube link
  if (!isValidYouTubeLink(youtubeLink)) {
    throw new Error("Please enter a valid YouTube link.");
  }

  // Parse video ID
  var videoId = extractVideoId(youtubeLink);

  // Calculate total start time in seconds
  var totalStartTime = startHours * 3600 + startMinutes * 60 + startSeconds;

  // Generate new YouTube link with added start time
  var newLink =
    "https://www.youtube.com/watch?v=" +
    videoId +
    "&t=" +
    (totalStartTime > 0 ? totalStartTime : 0) +
    "s";

  return newLink;
}

function isValidYouTubeLink(link) {
  return /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))|(youtu\.be\/([a-zA-Z0-9_-]+))/.test(
    link
  );
}

function extractVideoId(link) {
  // Extract video ID from YouTube link
  var match = link.match(/[?&]v=([^&]+)/);
  if (match) {
    return match[1];
  } else {
    // For links in the format https://youtu.be/VIDEO_ID
    var parts = link.split("/");
    return parts[parts.length - 1];
  }
}

module.exports = {
  generateLink: generateLink,
};
