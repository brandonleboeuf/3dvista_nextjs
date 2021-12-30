const innerHTML = `let tour;
let devicesUrl = { general: "script_general.js" };

(function () {
  let deviceType = ["general"];
  if (TDV.PlayerAPI.mobile) deviceType.unshift("mobile");
  if (TDV.PlayerAPI.device == TDV.PlayerAPI.DEVICE_IPAD)
    deviceType.unshift("ipad");
  let url;
  for (let i = 0; i < deviceType.length; ++i) {
    let d = deviceType[i];
    if (d in devicesUrl) {
      url = devicesUrl[d];
      break;
    }
  }
  if (typeof url == "object") {
    let orient = TDV.PlayerAPI.getOrientation();
    if (orient in url) {
      url = url[orient];
    }
  }
  let link = document.createElement("link");
  link.rel = "preload";
  link.href = url;
  link.as = "script";
  let el = document.getElementsByTagName("script")[0];
  el.parentNode.insertBefore(link, el);
})();

function loadTour() {
  if (tour) return;

  if (
    /AppleWebKit/.test(navigator.userAgent) && /Mobile/.test(navigator.userAgent)
  ) {
    let preloadContainer = document.getElementById("preloadContainer");
    if (preloadContainer)
      document.body.style.backgroundColor =
        window.getComputedStyle(preloadContainer).backgroundColor;
  }

  let settings = new TDV.PlayerSettings();
  settings.set(
    TDV.PlayerSettings.CONTAINER,
    document.getElementById("viewer")
  );
  settings.set(
    TDV.PlayerSettings.WEBVR_POLYFILL_URL,
    "lib/WebVRPolyfill.js"
  );
  settings.set(TDV.PlayerSettings.HLS_URL, "lib/Hls.js");
  settings.set(
    TDV.PlayerSettings.QUERY_STRING_PARAMETERS,
    "v=1640882506117"
  );

  tour = new TDV.Tour(settings, devicesUrl);
  tour.bind(TDV.Tour.EVENT_TOUR_INITIALIZED, onVirtualTourInit);
  tour.bind(TDV.Tour.EVENT_TOUR_LOADED, onVirtualTourLoaded);
  tour.bind(TDV.Tour.EVENT_TOUR_ENDED, onVirtualTourEnded);
  tour.load();
}

function pauseTour() {
  if (!tour) return;

  tour.pause();
}

function resumeTour() {
  if (!tour) return;

  tour.resume();
}

function onVirtualTourInit() {
  let updateTexts = function () {
    document.title = this.trans("tour.name");
  };

  tour.locManager.bind(
    TDV.Tour.LocaleManager.EVENT_LOCALE_CHANGED,
    updateTexts.bind(tour.locManager)
  );

  if (tour.player.cookiesEnabled) enableCookies();
  else tour.player.bind("enableCookies", enableCookies);
}

function onVirtualTourLoaded() {
  disposePreloader();
}

function onVirtualTourEnded() {}

function enableCookies() {}

function setMediaByIndex(index) {
  if (!tour) return;

  tour.setMediaByIndex(index);
}

function setMediaByName(name) {
  if (!tour) return;

  tour.setMediaByName(name);
}

function showPreloader() {
  let preloadContainer = document.getElementById("preloadContainer");
  if (preloadContainer != undefined) preloadContainer.style.opacity = 1;
}

function disposePreloader() {
  let preloadContainer = document.getElementById("preloadContainer");
  if (preloadContainer == undefined) return;

  let transitionEndName = transitionEndEventName();
  if (transitionEndName) {
    preloadContainer.addEventListener(transitionEndName, hide, false);
    preloadContainer.style.opacity = 0;
    setTimeout(hide, 500);
  } else {
    hide();
  }

  function hide() {
    document.body.style.backgroundColor =
      window.getComputedStyle(preloadContainer).backgroundColor;
    preloadContainer.style.visibility = "hidden";
    preloadContainer.style.display = "none";
    let videoList = preloadContainer.getElementsByTagName("video");
    for (let i = 0; i < videoList.length; ++i) {
      let video = videoList[i];
      video.pause();
      while (video.children.length) video.removeChild(video.children[0]);
    }
  }

  function transitionEndEventName() {
    let el = document.createElement("div");
    let transitions = {
      transition: "transitionend",
      OTransition: "otransitionend",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd",
    };

    let t;
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }

    return undefined;
  }
}

function onBodyClick() {
  document.body.removeEventListener("click", onBodyClick);
  document.body.removeEventListener("touchend", onBodyClick);
}

function onLoad() {
  if (
    /AppleWebKit/.test(navigator.userAgent) && /Mobile/.test(navigator.userAgent)
  ) {
    let onOrientationChange = function () {
      document.documentElement.style.height = "initial";
      Array.from(document.querySelectorAll(".fill-viewport")).forEach(
        function (element) {
          element.classList.toggle(
            "landscape-right",
            window.orientation == -90
          );
          element.classList.toggle(
            "landscape-left",
            window.orientation == 90
          );
        }
      );
      setTimeout(function () {
        document.documentElement.style.height = "100%";
      }, 500);
    };
    window.addEventListener("orientationchange", onOrientationChange);
    onOrientationChange();
  }

  let params = getParams(location.search.substr(1));
  if (params.hasOwnProperty("skip-loading")) {
    loadTour();
    disposePreloader();
    return;
  }

  if (isOVRWeb()) {
    showPreloader();
    loadTour();
    return;
  }

  showPreloader();
  loadTour();
}

function playVideo(video) {
  // function isSafariDesktopV11orGreater() {
  //   return (
  //     /^((?!chrome|android|crios|ipad|iphone).)*safari/i.test(
  //       navigator.userAgent
  //     ) &&
  //     parseFloat(
  //       /Version\/([0-9]+\.[0-9]+)/i.exec(navigator.userAgent)[1]
  //     ) >= 11
  //   );
  // }

  function hasAudio(video) {
    return (
      video.mozHasAudio ||
      Boolean(video.webkitAudioDecodedByteCount) ||
      Boolean(video.audioTracks && video.audioTracks.length)
    );
  }

  function detectUserAction() {
    let onVideoClick = function (e) {
      if (video.paused) {
        video.play();
      }
      video.muted = false;
      if (hasAudio(video)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        e.preventDefault();
      }

      video.removeEventListener("click", onVideoClick);
      video.removeEventListener("touchend", onVideoClick);
    };
    video.addEventListener("click", onVideoClick);
    video.addEventListener("touchend", onVideoClick);
  }

  if (isSafariDesktopV11orGreater()) {
    video.muted = true;
    video.play();
  } else {
    let canPlay = true;
    let promise = video.play();
    if (promise) {
      promise.catch(function () {
        video.muted = true;
        video.play();
        detectUserAction();
      });
    } else {
      canPlay = false;
    }

    if (!canPlay || video.muted) {
      detectUserAction();
    }
  }
}

function isOVRWeb() {
  return (
    window.location.hash.substring(1).split("&").indexOf("ovrweb") > -1
  );
}

function getParams(params) {
  let queryDict = {};
  params.split("&").forEach(function (item) {
    let k = item.split("=")[0],
      v = decodeURIComponent(item.split("=")[1]);
    queryDict[k.toLowerCase()] = v;
  });
  return queryDict;
}

document.addEventListener("DOMContentLoaded", onLoad);`

export default innerHTML;