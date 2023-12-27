import React from "react";

const sectionStyle = {
  height: "100vh",
  width: "100vw",
  margin: "10px",
  maxWidth: "1920px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};

const Section = (props) => {
  const { children } = props;

  return <section style={sectionStyle}>{children}</section>;
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
};

const Interface = () => {
  return (
    <div style={containerStyle}>
      <AboutSection />
      <SkillSection />
      <Section>
        <></>
      </Section>
      <Section>
        <div class="relative mt-6 flex w-96 flex-col rounded-xl bg-black bg-opacity-20 border-t border-b m-4  bg-clip-border text-white shadow-md">
          <div class="p-6">
            <div className="flex w-full justify-center">
              <svg
                className="w-16"
                viewBox="-3.52 -3.52 39.04 39.04"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#1a1a1a"
                stroke="#1a1a1a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#121212"
                  stroke-width="0.064"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>start-favorite</title>{" "}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke-width="0.22400000000000003"
                    fill="none"
                    fill-rule="evenodd"
                    sketch:type="MSPage"
                  >
                    {" "}
                    <g
                      id="Icon-Set-Filled"
                      sketch:type="MSLayerGroup"
                      transform="translate(-154.000000, -881.000000)"
                      fill="#fbff00"
                    >
                      {" "}
                      <path
                        d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                        id="start-favorite"
                        sketch:type="MSShapeGroup"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                className="w-16"
                viewBox="-3.52 -3.52 39.04 39.04"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#1a1a1a"
                stroke="#1a1a1a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#121212"
                  stroke-width="0.064"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>start-favorite</title>{" "}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke-width="0.22400000000000003"
                    fill="none"
                    fill-rule="evenodd"
                    sketch:type="MSPage"
                  >
                    {" "}
                    <g
                      id="Icon-Set-Filled"
                      sketch:type="MSLayerGroup"
                      transform="translate(-154.000000, -881.000000)"
                      fill="#fbff00"
                    >
                      {" "}
                      <path
                        d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                        id="start-favorite"
                        sketch:type="MSShapeGroup"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <svg
                className="w-16"
                viewBox="-3.52 -3.52 39.04 39.04"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                fill="#1a1a1a"
                stroke="#1a1a1a"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#121212"
                  stroke-width="0.064"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>start-favorite</title>{" "}
                  <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke-width="0.22400000000000003"
                    fill="none"
                    fill-rule="evenodd"
                    sketch:type="MSPage"
                  >
                    {" "}
                    <g
                      id="Icon-Set-Filled"
                      sketch:type="MSLayerGroup"
                      transform="translate(-154.000000, -881.000000)"
                      fill="#fbff00"
                    >
                      {" "}
                      <path
                        d="M186,893.244 L174.962,891.56 L170,881 L165.038,891.56 L154,893.244 L161.985,901.42 L160.095,913 L170,907.53 L179.905,913 L178.015,901.42 L186,893.244"
                        id="start-favorite"
                        sketch:type="MSShapeGroup"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>

            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Designed a heartfelt tribute website for Argentina, celebrating
              their triumphant World Cup victory
            </h5>
          </div>
          <div class="p-6 pt-0">
            <div
              class="flex font-extrabold text-2xl  select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans  uppercase text-black-500 transition-all active:bg-pink-500/30 "
              type="button"
              data-ripple-dark="true"
            >
              18/12/22
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Interface;

const AboutSection = () => {
  return (
    <Section>
      <h1
        style={{
          color: "#fff",
          fontSize: "3rem",
          fontWeight: "bold",
          lineHeight: "1.2",
        }}
      >
        Hi, I am
        <br />
        <span
          style={{
            color: "#000",
            backgroundColor: "white",
            padding: "0.1rem",
            fontStyle: "italic",
          }}
        >
          Franco Valenti
        </span>
      </h1>
      <p style={{ fontSize: "1rem", color: "gray", marginTop: "1rem" }}>
        I am FULL STACK DEVELOPER
        <br />
        learn how to build 3d apps
      </p>
      <a
        href="https://www.linkedin.com/in/franco-valenti-57b643246/"
        style={{
          backgroundColor: "indigo",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          fontSize: "1rem",
          marginTop: "2.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        Contact Me
      </a>
    </Section>
  );
};

const SkillSection = () => {
  return (
    <Section>
      <div class="flex flex-col justify-center items-center h-[100vh] pt-4">
        <div class="min-w-[375px] md:min-w-[700px] xl:min-w-[800px]  mt-3 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1 1xl:grid-cols-1 1xl:grid-cols-6">
          <div class="relative flex flex-grow flex-row  bg-opacity-15 items-center  rounded-[10px] border-[1px] border-gray-200  bg-slate-300 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span class="flex w-full items-center text-brand-500 dark:text-white">
                  <svg
                    class="w-16 h-16"
                    fill="none"
                    stroke-linecap="square"
                    stroke-miterlimit="10"
                    version="1.1"
                    viewBox="0 0 226.77 226.77"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(8.964 4.2527)"
                      fill-rule="evenodd"
                      stroke="#000"
                      stroke-linecap="butt"
                      stroke-linejoin="round"
                      stroke-width="4"
                    >
                      <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
                      <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
                      <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
                      <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
                      <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
                      <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="h-50 ml-4 flex w-auto flex-col justify-center">
              <p class=" font-extrabold text-2xl  text-white">Three JS</p>
              <h4 class="text-xl font-bold text-navy-700 text-white">
                JavaScript library for web 3D graphics.
              </h4>
            </div>
          </div>
          <div class="relative flex flex-grow flex-row  bg-opacity-15 items-center  rounded-[10px] border-[1px] border-gray-200 bg-neutral-400 bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span class="flex w-full items-center text-brand-500 ">
                  <svg
                    className="w-16 h-16 "
                    viewBox="0 -24 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M100.43032,115.194555 C101.361124,98.5893536 109.492492,83.9599162 121.759794,73.5893487 C133.790003,63.4031858 149.98249,57.1773328 167.650214,57.1773328 C185.300375,57.1773328 201.492862,63.4031858 213.531852,73.5893487 C225.790373,83.9599162 233.921741,98.5893536 234.861326,115.176993 C235.792131,132.238816 228.934033,148.088836 216.903824,159.838048 C204.636522,171.789227 187.188328,179.288351 167.650214,179.288351 C148.1121,179.288351 130.62878,171.789227 118.37026,159.838048 C106.331269,148.088836 99.4907342,132.238816 100.43032,115.194555 Z"
                          fill="#FFFFFF"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M133.167672,116.676183 C133.645276,108.155909 137.817552,100.649417 144.112012,95.3281876 C150.284817,90.1015783 158.593324,86.9070386 167.658788,86.9070386 C176.71524,86.9070386 185.023747,90.1015783 191.201058,95.3281876 C197.491012,100.649417 201.663288,108.155909 202.145398,116.667172 C202.623002,125.421743 199.104052,133.554527 192.931246,139.58315 C186.636786,145.715405 177.683965,149.563271 167.658788,149.563271 C157.63361,149.563271 148.662766,145.715405 142.372812,139.58315 C136.195501,133.554527 132.685562,125.421743 133.167672,116.676183 Z"
                          fill="#265787"
                        >
                          {" "}
                        </path>{" "}
                        <path
                          d="M78.4107749,134.179185 C78.4694744,137.520542 79.5350962,144.01361 81.133529,149.084344 C84.4929469,159.817323 90.1913143,169.746571 98.1202631,178.497312 C106.256918,187.491883 116.276472,194.716438 127.849305,199.845871 C140.013649,205.23268 153.193946,207.978011 166.884477,207.955572 C180.552431,207.937373 193.732728,205.137858 205.897072,199.710411 C217.469906,194.531308 227.480429,187.275146 235.603538,178.27606 C243.527971,169.489196 249.217308,159.541887 252.585757,148.808908 C254.279012,143.385977 255.349149,137.881769 255.778107,132.3595 C256.198034,126.918508 256.021935,121.468484 255.249811,116.022976 C253.741685,105.411912 250.070708,95.4555722 244.417494,86.3797254 C239.247423,78.0398801 232.582771,70.7385646 224.658338,64.5931778 L224.676399,64.5796318 L144.705094,3.1754327 C144.632849,3.12124854 144.574149,3.06254903 144.497388,3.01288022 C139.250556,-1.01480899 130.427568,-1.00126295 124.656955,3.03545695 C118.823127,7.11733032 118.154856,13.8677736 123.347505,18.1257455 L123.324928,18.1483222 L156.679794,45.2720095 L55.0167639,45.3803778 L54.8813035,45.3803778 C46.4782434,45.3894085 38.4002883,50.9026468 36.8018556,57.8698267 C35.1582694,64.9679516 40.8656676,70.8559636 49.6028633,70.887571 L49.5893173,70.9191785 L101.118453,70.8198408 L9.16793408,141.399224 C9.05053507,141.485016 8.92410536,141.575323 8.81573704,141.661114 C0.14175613,148.303189 -2.66227414,159.347727 2.80129531,166.337484 C8.34614099,173.444639 20.1357111,173.458186 28.8999989,166.378122 L79.0835616,125.306529 C79.0835616,125.306529 78.3520754,130.851375 78.4107749,134.179185 Z M207.36456,152.74629 C197.024416,163.280594 182.548215,169.254398 166.884477,169.286098 C151.198163,169.313097 136.721962,163.393478 126.381818,152.877235 C121.329145,147.752317 117.61753,141.855274 115.328249,135.574427 C113.084122,129.401948 112.21266,122.85018 112.790624,116.239713 C113.336981,109.778252 115.260519,103.614804 118.330955,98.0383504 C121.347206,92.5567196 125.501325,87.6033843 130.630759,83.4131426 C140.681921,75.2223038 153.478413,70.7882334 166.8619,70.7701166 C180.258934,70.7521106 193.046396,75.1455429 203.106588,83.3092897 C208.226991,87.48147 212.376595,92.4167439 215.392846,97.889344 C218.476828,103.461282 220.38682,109.602153 220.955753,116.081676 C221.524687,122.683112 220.653225,129.22585 218.409098,135.402844 C216.115302,141.701753 212.417233,147.598795 207.36456,152.74629 Z"
                          fill="#EA7600"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="h-50 ml-4 flex w-auto flex-col justify-center">
              <p class=" font-extrabold text-2xl  text-white">Blender</p>
              <h4 class="text-xl font-bold text-navy-700 text-white">
                Powerful open-source 3D modeling and animation software.
              </h4>
            </div>
          </div>

          <div class="relative flex flex-grow flex-row items-center rounded-[10px] border-[1px] border-gray-200 bg-opacity-15 bg-black bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
            <div class="ml-[18px] flex h-[90px] w-auto flex-row items-center">
              <div class="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
                <span class="flex w-full items-center text-brand-500 dark:text-white">
                  <svg
                    class="w-16 h-16"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                        fill="#53C1DE"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                        fill="#53C1DE"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="h-50 ml-4 flex w-auto flex-col justify-center">
              <p class=" font-extrabold text-2xl  text-white"> React JS</p>
              <h4 class="text-xl font-bold text-navy-700 text-white">
                {" "}
                JavaScript library for interactive web interfaces.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ProgressBar3 = () => {
  return (
    <div style={{ width: "100%", padding: "1rem", maxWidth: "50%" }}>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            50%
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            75%
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "lightgray",
            position: "relative",
            height: "1rem",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            90%
          </div>
        </div>
      </div>
    </div>
  );
};
