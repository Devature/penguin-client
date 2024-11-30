import * as React from 'react';
const SvgPenguinPhotoBlack: React.FC = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 215" {...props}>

        {/* Adding white fill to the logo so it works on the appbar */}
        {/*<rect width="100%" height="100%" fill="white" /> */}

        {/* This is the svg for the penguin icon + text converted into a usable TS format with the SVGR utility
            The original image can be found for now in the assets folder, though TODO: Remove the original image later
            Docs on how to do that are here: https://react-svgr.com/docs/cli/*/}
        <path
            fillRule="evenodd"
            d="M81.5 11.672c-1.65.876-3.146 1.716-3.324 1.867s.427 1.727 1.345 3.501c1.545 2.988 1.549 3.65.057 8.968-.886 3.158-1.307 6.586-.935 7.617s-1.421-.217-3.984-2.775C71.078 27.276 70 25.47 70 23.041c0-2.044-.388-2.919-1.101-2.479-.646.4-.849 1.939-.491 3.726 1.704 8.521 12.083 15.166 24.842 15.904 7.22.418 3.14 2.658-8.646 4.748-8.008 1.421-11.562 3.737-14.504 9.455-2.457 4.775-2.467 4.893-.794 9.604 2.171 6.113 2.381 11.323.344 8.538-1.265-1.731-1.451-1.642-2.984 1.43-.898 1.802-1.339 3.784-.978 4.404s-.311.281-1.493-.755c-1.181-1.036-1.907-2.273-1.612-2.75S62.65 74 62.078 74c-.972 0-1.58 1.713-2.299 6.479-.207 1.375-1.171 2.047-3.154 2.199-2.995.231-3.062-.644-.082-1.081 1.156-.17 1.809-1.309 1.977-3.453.207-2.628.004-2.994-1.134-2.049-.762.632-1.431 1.882-1.486 2.777-.056.922-.44.544-.885-.872-.778-2.472-.795-2.464-1.526.75-.406 1.787-1.159 3.25-1.673 3.25s-.675.419-.359.931.118 1.213-.441 1.559S50 86.385 50 87.933s-.64 4.628-1.421 6.844c-1.292 3.661-1.251 4.334.446 7.376 4.381 7.849 5.932 11.508 5.953 14.04.012 1.481.971 4.301 2.13 6.266 1.498 2.538 2.36 6.395 2.977 13.307.477 5.354 1.354 11.984 1.949 14.734.63 2.914.811 8.441.434 13.247-.895 11.414 3.411 12.359 10.285 2.259 8.258-12.134 9.461-46.344 2.224-63.243-4.197-9.798-4.719-16.293-2.072-25.743C74.057 72.906 75 67.257 75 64.466c0-8.803 7.006-17.572 15.07-18.861 2.277-.364 5.485-1.358 7.128-2.207 1.643-.85 3.246-1.287 3.562-.972.315.316-.038.574-.784.574-.871 0-.663.508.58 1.417 2.588 1.893 4.444.299 4.444-3.817 0-9.211 15.801-19.033 33-20.514l8.5-.733-4.854-2.269c-4.131-1.932-5.47-2.122-9-1.279-5.233 1.25-20.824-.754-28.646-3.681-6.839-2.56-18.102-2.786-22.5-.452m40 6.528c-14.87 3.494-20.692 6.651-9.891 5.363C123.764 22.114 137.942 18 130.782 18c-1.44 0-3.218-.167-3.95-.37-.733-.204-3.132.053-5.332.57M52.287 47.25c-2.336 2.55-6.275 10.014-6.311 11.96-.013.71-1.169 3.99-2.569 7.29-9.769 23.029-11.962 36.235-11.117 66.965.376 13.702 1.216 23.816 2.655 31.996 1.576 8.964 1.85 12.688 1.091 14.865-.556 1.597-.766 3.302-.465 3.789s-.155.885-1.012.885c-1.603 0-2.144 1.506-.809 2.253.413.23.21.291-.45.134-1.609-.383-5.636 6.261-4.706 7.765.496.802.205.985-.898.562-.898-.345-1.902-.189-2.233.346-.33.535-3.99 3.259-8.133 6.055-8.898 6.004-8.651 7.435 1.257 7.291 5.705-.082 6.848-.44 9.583-3l3.105-2.906-1.837 3-1.837 3 2.835-2.5 2.835-2.5-1.19 2.5c-1.129 2.37-1.08 2.357.947-.25 1.176-1.512 2.664-2.743 3.305-2.735.667.009.525.431-.333.985-.918.593-1.034.975-.3.985.66.008 1.659-.772 2.22-1.735.807-1.385 1.032-1.437 1.081-.25.048 1.151.404 1.049 1.531-.441.807-1.068 1.475-1.518 1.483-1 .009.517.423.298.92-.489 1.194-1.885 4.065-2.263 4.065-.534 0 .954 1.242 1.308 4.177 1.191 2.539-.101 4.337.314 4.585 1.06.225.674.708 1.042 1.073.818.366-.225.714.924.774 2.553.061 1.628.645 3.497 1.3 4.151 1.508 1.51 36.552 2.246 35.627.75-.348-.564 1.556-1.268 4.484-1.656 3.916-.52 4.959-1.015 4.523-2.15-.446-1.164.018-1.341 2.196-.839l2.761.637-2.5-2.003c-2.064-1.654-4.015-2.007-11.185-2.026-9.856-.025-14.087-1.149-13.184-3.503.326-.849.054-2.194-.605-2.988s-.94-1.861-.624-2.372c1.604-2.596-1.582-7.159-5-7.159H72l-.032 5.25c-.017 2.887-.58 5.931-1.25 6.764-1.931 2.402-7.012 2.424-9.169.04-2.443-2.7-5.149-2.611-5.991.196-.653 2.179-.7 2.187-1.48.25-.555-1.38-.383-2.1.559-2.323.749-.178 1.363-1.217 1.363-2.309s-.45-1.708-1-1.368-1.045.029-1.1-.691-.46-.184-.9 1.191c-.747 2.332-.807 2.273-.9-.872-.09-3.038-.268-3.237-1.792-2-1.15.932-1.451.971-.941.122.426-.709.256-1.25-.391-1.25-.629 0-.957-.558-.729-1.241s-.185-1.84-.917-2.572c-2.014-2.014-1.656-3.432.567-2.242 4.004 2.143 3.209-8.268-1.492-19.518-4.271-10.223-6.536-29.17-3.98-33.305.323-.523.022-1.215-.669-1.537-.998-.465-.99-.708.036-1.182.991-.459 1.021-.923.127-2-.662-.798-.739-1.403-.18-1.403.541 0 .778-1.075.527-2.388s.035-3.306.635-4.427c.891-1.664.77-2.124-.655-2.496-1.471-.385-1.431-.478.254-.588 1.667-.11 1.751-.293.5-1.101-1.178-.761-1.206-.973-.128-.985 1.107-.012 1.132-.306.128-1.515-1.026-1.236-.938-1.5.5-1.5s1.526-.264.5-1.5c-.685-.825-.91-1.5-.5-1.5s.185-.675-.5-1.5c-1.026-1.236-.938-1.5.5-1.5 1.254 0 1.468-.351.76-1.25-1.148-1.458-2.76-7.584-1.722-6.546 2.785 2.786 3.832-5.466 1.318-10.393-.497-.975-.474-1.929.056-2.257.504-.311 1.176-.001 1.493.69s.325.243.018-.994C45.091 82.911 45.324 82 46 82c.68 0 .88-.802.5-2-.349-1.1-.203-2 .326-2 1.145 0 2.272-2.507 2.755-6.127.193-1.444 1.716-5.114 3.385-8.154S56 56.812 56 55.127c0-2.445.336-2.935 1.661-2.427 1.278.49 1.543.188 1.151-1.311C58.291 49.397 60.041 47 62.017 47c.605 0 .823-.45.483-1-1.211-1.96-8.037-1.125-10.213 1.25M43 94.059c0 .582.45.781 1 .441s1-.816 1-1.059S44.55 93 44 93s-1 .477-1 1.059M251 109.5c0 14 .227 16.5 1.5 16.5 1.154 0 1.5-1.287 1.5-5.583 0-6.595.483-6.568 5.914.333 2.495 3.169 4.916 5.25 6.109 5.25 2.612 0 2.657.117-2.539-6.575l-4.516-5.816 4.016-4.092c2.209-2.251 4.016-4.413 4.016-4.805 0-2.095-4.009-.143-8.216 4L254 113.425v-10.213c0-8.411-.265-10.212-1.5-10.212-1.273 0-1.5 2.5-1.5 16.5m-58-12c0 1.111 1.167 1.5 4.5 1.5h4.5v13.5c0 12.833.099 13.5 2 13.5s2-.667 2-13.5V99h4.5c3.333 0 4.5-.389 4.5-1.5 0-1.242-1.889-1.5-11-1.5s-11 .258-11 1.5m26 .5q0 2 2 2c2 0 2-.667 2-2s-.667-2-2-2-2 .667-2 2m103 13.073c0 13.816.146 15.046 1.75 14.741 1.375-.262 1.814-1.538 2.046-5.949l.296-5.615 4.516-.509c7.526-.849 11.319-6.555 8.771-13.196C338.358 97.884 333.453 96 327.55 96H322zM442 98q0 2 2 2c2 0 2-.667 2-2s-.667-2-2-2-2 .667-2 2m-146.333.667c-.367.366-.667 1.716-.667 3 0 1.407-.595 2.333-1.5 2.333-.825 0-1.5.675-1.5 1.5s.627 1.5 1.394 1.5c1.047 0 1.486 2.014 1.762 8.089.302 6.658.719 8.346 2.355 9.542 2.586 1.891 6.876 1.376 7.303-.877.236-1.244-.125-1.572-1.254-1.139-3.147 1.208-4.56-1.499-4.56-8.737V107h3q3 0 3-1.5c0-1.5-1-1.5-3-1.5-2.667 0-3-.333-3-3 0-2.821-1.674-3.993-3.333-2.333M326 105c0 5.893.049 6 2.777 6 4.106 0 7.223-2.589 7.223-6s-3.117-6-7.223-6c-2.728 0-2.777.107-2.777 6m-211.473.75c1.592 3.757 2.36 11.325 2.514 24.75.131 11.47.338 13.277 1.147 10 1.943-7.878-.775-36.5-3.467-36.5-.514 0-.601.787-.194 1.75M219 115c0 10.333.121 11 2 11s2-.667 2-11-.121-11-2-11-2 .667-2 11m15.02-9.716c-5.761 2.915-6.943 12.947-2.097 17.793 4.245 4.245 13.077 3.496 13.077-1.109 0-1.951-.139-1.984-2.223-.525-4.919 3.446-9.777.244-9.777-6.443 0-6.727 3.884-9.198 10.25-6.522 2.487 1.046 2.319-2.103-.184-3.443-2.578-1.379-6.014-1.285-9.046.249m41.337-.292c-7.038 2.84-7.491 16.213-.673 19.845 4.131 2.2 13.316.447 13.316-2.542 0-1.034-.551-1.291-1.75-.817-5.053 1.998-8.097 1.766-10.677-.814-3.921-3.921-3.249-4.554 5.177-4.872l7.75-.292-.173-3.485c-.306-6.153-6.634-9.58-12.97-7.023m74 0c-5.577 2.25-7.399 12.523-3.105 17.514 3.789 4.406 15.748 4.339 15.748-.088 0-1.146-.522-1.43-1.75-.955-6.275 2.427-12.25.727-12.25-3.486 0-1.794.696-1.977 7.5-1.977 7.295 0 7.5-.067 7.5-2.453 0-7.319-6.541-11.421-13.643-8.555M369 115c0 10.333.121 11 2 11 1.831 0 2-.667 2-7.885 0-7.277.19-8.009 2.465-9.5 5.561-3.644 7.716-1.202 8.332 9.441.338 5.84.823 7.944 1.831 7.944 2.681 0 1.863-17.19-.942-19.826-2.681-2.518-6.467-2.807-9.245-.706-2.498 1.89-3.441 1.898-3.441.032 0-.825-.675-1.5-1.5-1.5-1.242 0-1.5 1.889-1.5 11m27.337-9.523c-2.564 1.795-3.634 5.547-2.475 8.678.536 1.449.445 2.983-.243 4.083-.81 1.298-.785 2.266.096 3.677.957 1.532.905 2.156-.26 3.122-1.89 1.569-1.866 5.377.046 6.963 4.04 3.354 15.385 1.951 17.593-2.175 2.379-4.445-.249-6.667-9.094-7.689-7.319-.846-7.791-3.467-.649-3.601 5.764-.109 7.649-2.013 7.649-7.726 0-2.719.429-3.809 1.5-3.809.825 0 1.5-.675 1.5-1.5 0-2.098-12.674-2.117-15.663-.023M417 112.826c0 7.932.234 9.045 2.314 11 2.681 2.518 6.467 2.807 9.245.706 2.498-1.89 3.441-1.898 3.441-.032 0 .825.675 1.5 1.5 1.5 1.242 0 1.5-1.889 1.5-11 0-10.333-.121-11-2-11-1.832 0-2 .667-2 7.943 0 7.075-.243 8.114-2.223 9.5-5.476 3.836-7.962 1.083-8.574-9.499-.338-5.84-.823-7.944-1.831-7.944-1.059 0-1.372 2.015-1.372 8.826M442 115c0 10.333.121 11 2 11s2-.667 2-11-.121-11-2-11-2 .667-2 11m11 0c0 10.333.121 11 2 11 1.831 0 2-.667 2-7.885 0-7.277.19-8.009 2.465-9.5 5.561-3.644 7.716-1.202 8.332 9.441.338 5.84.823 7.944 1.831 7.944 2.681 0 1.863-17.19-.942-19.826-2.681-2.518-6.467-2.807-9.245-.706-2.498 1.89-3.441 1.898-3.441.032 0-.825-.675-1.5-1.5-1.5-1.242 0-1.5 1.889-1.5 11m-177.169-6.75c-4.063 3.273-3.068 4.75 3.2 4.75 4.507 0 5.969-.35 5.969-1.429 0-3.774-5.937-5.925-9.169-3.321m73.824.579c-2.906 3.211-2.022 4.171 3.845 4.171 4.801 0 5.5-.25 5.5-1.965 0-3.84-6.481-5.371-9.345-2.206m48.545-.629c-2.805 2.805-.692 7.8 3.3 7.8 2.68 0 4.5-1.82 4.5-4.5s-1.82-4.5-4.5-4.5c-1.155 0-2.64.54-3.3 1.2M51.739 127.983c-.309 4.503-1.15 8.808-1.897 9.708-1.493 1.8-1.972 19.582-.668 24.809 1.518 6.087 5.227 15.797 5.603 14.669.213-.64-.624-4.202-1.861-7.916-3.461-10.394-3.548-23.133-.204-30.04 2.177-4.498 2.477-6.195 2.008-11.366-.841-9.276-2.341-9.208-2.981.136m345.272-1.496c-2.215 2.668-.442 4.513 4.335 4.513 5.135 0 7.697-2.039 5.654-4.5-1.615-1.946-8.378-1.955-9.989-.013m-291.37 20.557c-.921 4.605-.762 11.216.309 12.91 2.289 3.618 11.219-7.297 10.964-13.4-.069-1.642-.248-1.518-.893.618-1.395 4.621-2.263 5.405-3.196 2.884-.658-1.778-1.41-2.177-3.393-1.798-1.732.331-2.399.098-2.083-.726.256-.667.121-1.771-.3-2.453-.492-.796-.996-.092-1.408 1.965m-50.509 36.535c.47 2.706 1.112 6.654 1.426 8.773.933 6.294 1.579 3.445.845-3.723-.373-3.643-1.229-7.377-1.903-8.298-.989-1.353-1.06-.73-.368 3.248m-10.599 1.982c.615 3.466-2.393 7.215-4.72 5.883-.722-.413-.413.15.687 1.252 1.481 1.484 2.084 1.654 2.323.654.178-.743.692-1.35 1.142-1.35 1.403 0 2.081-4.721 1.028-7.167-.897-2.086-.945-2.009-.46.728M41 185.382c0 .825.45 1.778 1 2.118s1-.057 1-.882-.45-1.778-1-2.118-1 .057-1 .882m-4.019 1.63c-1.933 1.194-.938 1.903 1.453 1.035 1.063-.386 1.492-.975.952-1.309s-1.622-.21-2.405.274M35.5 191c.34.55.816 1 1.059 1s.441-.45.441-1-.477-1-1.059-1-.781.45-.441 1m10.5-.118c0 .55.45 1.278 1 1.618s1 .168 1-.382-.45-1.278-1-1.618-1-.168-1 .382m-21.622 7.316c-.448.724-.225.826.637.292.983-.607 1.146-.352.632.987-.586 1.527-.457 1.61.83.542 1.876-1.557 1.879-1.669.055-2.368-.807-.31-1.777-.064-2.154.547m1.546 4.552L23.5 205.5l2.75-2.424c2.57-2.266 3.209-3.076 2.424-3.076-.179 0-1.416 1.238-2.75 2.75m36.743 1.917c-1.215 1.214-.691 2.28.833 1.695.825-.317 1.5-.978 1.5-1.469 0-1.048-1.378-1.182-2.333-.226M81.5 206c1.1.473 2.9.846 4 .83 1.608-.024 1.51-.186-.5-.83-3.419-1.095-6.048-1.095-3.5 0m-13 .788c-4.951.492-6.233 1.137-4.472 2.25 1.85 1.171 7.274 1.259 6.562.108-.29-.47 1.438-.404 3.841.145 3.999.915 8.576.382 7.339-.855-.833-.833-10.004-1.972-13.27-1.648M83 209c0 .55.477 1 1.059 1s.781-.45.441-1-.816-1-1.059-1-.441.45-.441 1"
        />
    </svg>
);
export default SvgPenguinPhotoBlack;

