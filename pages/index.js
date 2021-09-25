import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cstyles from '../styles/Common.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head >
        <title>fHz | fly through the waves</title>
        <meta name="description" content="fly through the waves" />
        <meta property="og:title" content="fHz" />
        <meta property="og:description" content="fly through the waves" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flyhaozi.com/" />
        <meta property="og:image" content="https://flyhaozi.com/banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <div className={styles.top}>
        <svg viewBox="0 0 813 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M813 99.3747L800.66 124.987L744.614 124.987L695.253 212.578L680.341 124.987L559.509 124.987L554.367 66.5908L521.46 124.987L444.333 124.987L459.758 99.3747L507.577 99.3748L569.279 -1.06349e-05L578.02 99.3747L695.253 99.3748L705.536 155.208L735.873 99.3748L813 99.3747Z" fill="white" />
          <path d="M33.6579 12.819H17.9052L15.5968 23.5933H30.1019L28.2926 31.8764H13.8188L10.1691 49.1587H0L9.51406 4.50482H35.4048L33.6579 12.819Z" fill="white" />
          <path d="M60.0166 49.1587H33.3148L42.8289 4.50482H52.998L45.262 40.8757H61.7634L60.0166 49.1587Z" fill="white" />
          <path d="M88.7459 32.9663L85.377 49.1587H75.2079L78.608 33.1531L70.56 4.50482H81.4778L85.0339 21.4758C85.2002 22.1816 85.2938 22.8356 85.3146 23.4376C85.3562 24.0396 85.3978 24.5794 85.4394 25.0568H85.5018C85.7305 24.4756 85.9801 23.8839 86.2504 23.2819C86.5416 22.6799 86.8431 22.1194 87.155 21.6004L98.0728 4.50482H109.396L88.7459 32.9663Z" fill="white" />
          <path d="M109.49 97.7259H96.8875L89.1514 134.19H79.0135L86.7183 97.7259H73.9601L75.7382 89.5362H111.268L109.49 97.7259Z" fill="white" />
          <path d="M146.579 134.19H136.441L140.247 116.129H121.874L118.037 134.19H107.868L117.382 89.5362H127.551L123.714 107.348H142.118L145.955 89.5362H156.093L146.579 134.19Z" fill="white" />
          <path d="M195.896 100.902C195.896 102.791 195.553 104.504 194.867 106.04C194.18 107.556 193.245 108.874 192.059 109.995C190.874 111.116 189.481 112.029 187.879 112.735C186.299 113.441 184.604 113.918 182.795 114.167V114.292C184.084 114.707 185.186 115.496 186.101 116.659C187.016 117.821 187.703 119.368 188.16 121.298L191.279 134.19H180.486L178.053 122.7C177.679 120.852 177.024 119.461 176.088 118.527C175.152 117.572 173.873 117.095 172.251 117.095H170.536L166.886 134.19H156.717L166.231 89.5362H181.516C184.115 89.5362 186.33 89.8476 188.16 90.4704C189.99 91.0724 191.477 91.9028 192.621 92.9615C193.765 93.9995 194.596 95.2036 195.116 96.5737C195.636 97.9438 195.896 99.3866 195.896 100.902ZM185.165 102.552C185.165 100.829 184.656 99.4904 183.637 98.5355C182.618 97.5598 181.079 97.0719 179.02 97.0719H174.809L172.127 109.497H176.213C177.752 109.497 179.083 109.31 180.206 108.936C181.329 108.542 182.254 108.033 182.982 107.41C183.71 106.767 184.25 106.03 184.604 105.199C184.978 104.348 185.165 103.466 185.165 102.552Z" fill="white" />
          <path d="M243.248 107.971C243.248 109.756 243.092 111.552 242.78 113.358C242.468 115.164 242 116.918 241.376 118.62C240.773 120.302 240.004 121.921 239.068 123.478C238.153 125.035 237.082 126.457 235.855 127.744C234.815 128.845 233.682 129.841 232.455 130.734C231.228 131.626 229.887 132.384 228.431 133.007C226.996 133.63 225.436 134.107 223.752 134.439C222.068 134.792 220.248 134.969 218.293 134.969C215.34 134.969 212.699 134.481 210.37 133.505C208.062 132.529 206.107 131.19 204.506 129.488C202.904 127.765 201.677 125.731 200.825 123.385C199.993 121.039 199.577 118.496 199.577 115.756C199.577 113.825 199.743 111.925 200.076 110.057C200.409 108.168 200.908 106.362 201.573 104.639C202.26 102.895 203.102 101.245 204.1 99.6876C205.119 98.1099 206.294 96.6671 207.625 95.3593C208.665 94.3628 209.788 93.4701 210.994 92.6813C212.2 91.8717 213.5 91.1762 214.893 90.5949C216.286 90.0137 217.784 89.5673 219.385 89.2559C220.986 88.9445 222.702 88.7888 224.532 88.7888C227.298 88.7888 229.824 89.2248 232.112 90.0967C234.42 90.9686 236.396 92.2349 238.039 93.8957C239.682 95.5357 240.961 97.5494 241.876 99.9368C242.791 102.303 243.248 104.981 243.248 107.971ZM232.58 108.313C232.58 106.632 232.361 105.127 231.925 103.798C231.509 102.469 230.906 101.348 230.116 100.435C229.325 99.5008 228.358 98.795 227.215 98.3175C226.092 97.8193 224.813 97.5702 223.378 97.5702C221.714 97.5702 220.134 97.9542 218.636 98.7223C217.139 99.4904 215.808 100.56 214.643 101.93C213.936 102.76 213.313 103.715 212.772 104.795C212.231 105.874 211.774 107.016 211.399 108.22C211.025 109.424 210.734 110.659 210.526 111.925C210.339 113.171 210.245 114.406 210.245 115.631C210.245 117.313 210.453 118.818 210.869 120.146C211.306 121.475 211.919 122.596 212.709 123.509C213.5 124.402 214.446 125.087 215.548 125.565C216.671 126.042 217.919 126.281 219.291 126.281C220.997 126.281 222.619 125.907 224.158 125.16C225.717 124.412 227.079 123.302 228.244 121.828C228.972 120.956 229.606 119.98 230.147 118.901C230.687 117.8 231.135 116.659 231.488 115.475C231.842 114.292 232.112 113.088 232.299 111.863C232.486 110.638 232.58 109.455 232.58 108.313Z" fill="white" />
          <path d="M286.482 116.005C285.859 118.932 285.058 121.568 284.081 123.914C283.103 126.26 281.803 128.253 280.181 129.893C278.58 131.533 276.584 132.789 274.192 133.661C271.801 134.533 268.879 134.969 265.427 134.969C262.931 134.969 260.685 134.626 258.689 133.941C256.693 133.256 254.998 132.27 253.604 130.983C252.211 129.675 251.14 128.097 250.391 126.25C249.643 124.381 249.268 122.264 249.268 119.897C249.268 118.818 249.352 117.634 249.518 116.347C249.684 115.039 249.892 113.825 250.142 112.704L255.133 89.5362H265.302L260.249 112.766C260.02 113.866 259.812 114.967 259.625 116.067C259.438 117.167 259.344 118.101 259.344 118.87C259.344 120.074 259.521 121.143 259.874 122.077C260.249 122.99 260.758 123.758 261.403 124.381C262.068 125.004 262.838 125.481 263.711 125.814C264.605 126.125 265.562 126.281 266.581 126.281C267.766 126.281 268.868 126.104 269.887 125.751C270.906 125.398 271.821 124.817 272.632 124.008C273.444 123.198 274.161 122.129 274.785 120.8C275.409 119.451 275.929 117.79 276.345 115.818L282.022 89.5362H292.191L286.482 116.005Z" fill="white" />
          <path d="M333.554 100.528C332.909 100.092 332.16 99.6773 331.308 99.2828C330.455 98.8676 329.519 98.5147 328.5 98.2241C327.502 97.9127 326.431 97.6636 325.287 97.4767C324.164 97.2899 323 97.1965 321.794 97.1965C319.194 97.1965 316.844 97.6221 314.744 98.4732C312.664 99.3036 310.886 100.487 309.41 102.023C307.954 103.539 306.831 105.376 306.041 107.535C305.271 109.673 304.887 112.05 304.887 114.666C304.887 116.555 305.147 118.247 305.667 119.741C306.186 121.236 306.925 122.492 307.881 123.509C308.859 124.527 310.034 125.305 311.406 125.845C312.779 126.385 314.307 126.654 315.992 126.654C317.115 126.654 318.04 126.592 318.768 126.468C319.517 126.322 320.192 126.156 320.795 125.969L322.698 116.908H313.621L315.337 108.874H334.458L329.654 131.512C328.76 131.948 327.783 132.374 326.722 132.789C325.662 133.183 324.508 133.547 323.26 133.879C322.012 134.211 320.671 134.47 319.236 134.657C317.801 134.865 316.252 134.969 314.588 134.969C311.385 134.969 308.516 134.491 305.978 133.536C303.462 132.581 301.341 131.232 299.615 129.488C297.889 127.744 296.568 125.658 295.653 123.229C294.738 120.779 294.281 118.081 294.281 115.133C294.281 112.808 294.541 110.545 295.061 108.344C295.581 106.123 296.35 104.037 297.369 102.085C298.409 100.134 299.698 98.3486 301.237 96.7294C302.797 95.0894 304.606 93.6881 306.665 92.5256C308.744 91.3423 311.084 90.4289 313.683 89.7853C316.283 89.121 319.142 88.7888 322.262 88.7888C323.676 88.7888 325.017 88.8719 326.286 89.038C327.575 89.1833 328.781 89.3805 329.904 89.6296C331.027 89.8787 332.056 90.159 332.992 90.4704C333.949 90.761 334.801 91.0516 335.55 91.3423L333.554 100.528Z" fill="white" />
          <path d="M376.351 134.19H366.213L370.019 116.129H351.646L347.809 134.19H337.64L347.154 89.5362H357.323L353.486 107.348H371.891L375.727 89.5362H385.865L376.351 134.19Z" fill="white" />
          <path d="M179.863 182.757H167.26L159.524 219.221H149.386L157.091 182.757H144.333L146.111 174.568H181.641L179.863 182.757Z" fill="white" />
          <path d="M216.952 219.221H206.814L210.62 201.161H192.246L188.41 219.221H178.24L187.755 174.568H197.924L194.087 192.379H212.491L216.328 174.568H226.466L216.952 219.221Z" fill="white" />
          <path d="M260.623 182.757H244.995L242.874 192.815H257.441L255.663 201.036H241.158L238.975 211.063H255.663L253.916 219.221H227.09L236.604 174.568H262.37L260.623 182.757Z" fill="white" />
          <path d="M325.381 219.221H314.65L312.748 190.262C312.727 189.95 312.727 189.577 312.748 189.141C312.789 188.705 312.831 188.259 312.872 187.802C312.935 187.345 312.997 186.909 313.059 186.494C313.122 186.058 313.184 185.684 313.247 185.373H313.122C313.018 185.705 312.883 186.089 312.716 186.525C312.571 186.961 312.415 187.407 312.248 187.864C312.082 188.321 311.916 188.757 311.749 189.172C311.583 189.587 311.427 189.95 311.281 190.262L297.088 219.221H285.578L283.301 174.568H293.907L294.218 204.181C294.239 204.534 294.229 204.939 294.187 205.396C294.166 205.852 294.125 206.309 294.063 206.766C294 207.222 293.938 207.658 293.875 208.074C293.813 208.468 293.761 208.8 293.719 209.07H293.907C293.99 208.759 294.104 208.395 294.25 207.98C294.395 207.544 294.551 207.098 294.718 206.641C294.905 206.164 295.092 205.707 295.279 205.271C295.487 204.814 295.664 204.43 295.809 204.119L310.19 174.568H320.858L322.324 204.493C322.345 204.783 322.345 205.126 322.324 205.52C322.324 205.894 322.314 206.288 322.293 206.703C322.272 207.119 322.241 207.534 322.199 207.949C322.158 208.343 322.116 208.696 322.074 209.008H322.199C322.282 208.717 322.386 208.364 322.511 207.949C322.657 207.534 322.802 207.108 322.948 206.672C323.114 206.236 323.27 205.811 323.416 205.396C323.582 204.98 323.728 204.617 323.852 204.306L336.236 174.568H346.78L325.381 219.221Z" fill="white" />
          <path d="M372.14 219.221L370.861 209.288H354.828L349.587 219.221H338.233L364.03 174.568H376.039L382.434 219.221H372.14ZM368.491 186.494C368.47 186.162 368.449 185.799 368.428 185.404C368.428 184.989 368.428 184.594 368.428 184.221C368.449 183.847 368.47 183.515 368.491 183.224C368.511 182.913 368.532 182.685 368.553 182.539H368.366C368.324 182.726 368.251 182.965 368.147 183.255C368.043 183.546 367.919 183.868 367.773 184.221C367.648 184.553 367.492 184.906 367.305 185.28C367.139 185.653 366.962 186.016 366.775 186.369L358.602 201.565H370.113L368.491 186.494Z" fill="white" />
          <path d="M409.385 219.221H398.28L392.541 174.568H402.866L405.892 205.458C405.954 206.184 405.985 206.932 405.985 207.7C406.006 208.447 405.954 209.143 405.829 209.786H406.079C406.266 209.184 406.505 208.51 406.796 207.762C407.108 207.015 407.483 206.205 407.919 205.333L423.454 174.568H434.559L409.385 219.221Z" fill="white" />
          <path d="M464.005 182.757H448.377L446.256 192.815H460.824L459.046 201.036H444.541L442.357 211.063H459.046L457.299 219.221H430.472L439.986 174.568H465.752L464.005 182.757Z" fill="white" />
          <path d="M496.104 184.906C495.459 184.511 494.742 184.127 493.951 183.754C493.182 183.359 492.35 183.017 491.456 182.726C490.582 182.435 489.657 182.197 488.68 182.01C487.702 181.823 486.683 181.73 485.623 181.73C484.437 181.73 483.439 181.896 482.628 182.228C481.817 182.539 481.172 182.934 480.694 183.411C480.216 183.889 479.873 184.408 479.665 184.968C479.457 185.508 479.353 186.016 479.353 186.494C479.353 187.179 479.457 187.812 479.665 188.393C479.893 188.954 480.237 189.504 480.694 190.044C481.172 190.563 481.786 191.103 482.535 191.663C483.304 192.203 484.229 192.805 485.311 193.469C486.725 194.341 487.973 195.223 489.054 196.116C490.156 196.988 491.092 197.933 491.861 198.95C492.631 199.946 493.213 201.036 493.608 202.219C494.003 203.403 494.201 204.731 494.201 206.205C494.201 207.056 494.097 207.991 493.889 209.008C493.702 210.025 493.369 211.053 492.891 212.091C492.413 213.108 491.747 214.094 490.894 215.049C490.063 216.004 489.012 216.845 487.744 217.571C486.475 218.298 484.947 218.879 483.158 219.315C481.391 219.772 479.322 220 476.951 220C475.62 220 474.32 219.907 473.052 219.72C471.804 219.554 470.608 219.325 469.464 219.035C468.341 218.723 467.291 218.381 466.314 218.007C465.336 217.633 464.473 217.249 463.725 216.855L465.44 208.011C466.21 208.572 467.042 209.101 467.936 209.599C468.851 210.098 469.797 210.534 470.775 210.907C471.773 211.281 472.802 211.572 473.863 211.779C474.923 211.987 475.994 212.091 477.076 212.091C478.261 212.091 479.27 211.966 480.101 211.717C480.933 211.447 481.609 211.084 482.129 210.627C482.649 210.17 483.023 209.641 483.252 209.039C483.481 208.437 483.595 207.793 483.595 207.108C483.595 206.423 483.481 205.811 483.252 205.271C483.044 204.711 482.69 204.181 482.191 203.683C481.692 203.164 481.027 202.635 480.195 202.095C479.384 201.534 478.386 200.912 477.2 200.226C475.932 199.521 474.778 198.763 473.738 197.953C472.698 197.123 471.804 196.209 471.055 195.213C470.307 194.196 469.724 193.075 469.308 191.85C468.892 190.604 468.685 189.224 468.685 187.708C468.685 185.985 469.007 184.293 469.652 182.633C470.296 180.972 471.305 179.488 472.677 178.18C474.05 176.872 475.797 175.824 477.918 175.035C480.06 174.225 482.607 173.82 485.56 173.82C486.787 173.82 487.973 173.893 489.116 174.038C490.26 174.163 491.352 174.339 492.392 174.568C493.431 174.796 494.409 175.055 495.324 175.346C496.239 175.637 497.071 175.938 497.819 176.249L496.104 184.906Z" fill="white" />
        </svg>
      </div>
      <section className={cstyles.section}>
        <h2>Projects</h2>
        <div className={styles.cardContainer}>
          <Link href="/quick-bookmarks-menu">
            <a className={styles.projectCard}>
              <div className={styles.projectBasic}>
                <div>
                  <p className={styles.projectType}>Browser Extension</p>
                  <p className={styles.projectName}>Quick Bookmarks Menu</p>
                </div>
                <img className={styles.projectImg}></img>
              </div>
              <p className={styles.projectDesc}>A chrome extension gives you quick access to your bookmarks.</p>
            </a>
          </Link>
          <Link href="/twitter-video-fixer">
            <a className={styles.projectCard}>
              <div className={styles.projectBasic}>
                <div>
                  <p className={styles.projectType}>Userscript</p>
                  <p className={styles.projectName}>Video Quality Fixer for Twitter</p>
                </div>
              </div>
              <p className={styles.projectDesc}>Force highest quality playback for Twitter videos.</p>
            </a>
          </Link>
        </div>
        <a href="/projects" className={styles.viewAll}>View all projects...</a>
      </section>
      <section className={cstyles.section}>
        <h2>Blog</h2>
        <ul className={styles.blogList}>
          <li><span>2021-10-01</span><a href="/blog/2021-national-day">Celebrate The 2021 National Day!!! 🎉✨</a></li>
        </ul>
        <a href="/blog" className={styles.viewAll}>View all posts...</a>
      </section>
    </>
  )
}
