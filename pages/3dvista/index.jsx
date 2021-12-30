import Head from "next/head";
import innerHTML from './innerHTML.js'

export default function index() {
  return (
    <div>
      <Head>
        <title>Untitled 2</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" id="metaViewport" content="user-scalable=no, initial-scale=1, width=device-width, viewport-fit=cover" data-tdv-general-scale="0.5"/>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="preload" href="locale/en.txt" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="./script.js" as="script" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/r/1/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/l/1/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/u/1/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/d/1/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/f/1/0_0.jpg" as="image" />
        <link rel="preload" href="media/panorama_06775DB7_0C2E_D9EB_41A3_14479EFA84DD_0/b/1/0_0.jpg" as="image" />
        <meta name="description" content="Virtual Tour" />
        <meta name="theme-color" content="#FFFFFF" />
        <script src="lib/tdvplayer.js"></script>
        <script src="script.js"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: innerHTML}}></script>
      </Head>

      <section>
        <div id="preloadContainer" className="fill-viewport">
          <div className="wrapper">
            <div className="loadingDiv">
              <div className="subWrapper">
                <span className="textSpan">
                  Loading virtual tour. Please wait...
                </span>
              </div>
              <div className="subWrapper">
                <span className="textSpan">
                  created with the trial of 3DVista VT Pro
                </span>
              </div>
              <div className="lastDiv">
                <a
                  href="https://www.3dvista.com"
                  target="_blank"
                  className="link"
                >
                  <span className="textSpan colorChange">
                    <u>www.3DVista.com</u>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="viewer" className="fill-viewport"></div>
      </section>
    </div>
  );
}
