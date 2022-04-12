import React from "react";
import { createIcon } from "@chakra-ui/icons";

export const ReportIcon = createIcon({
  displayName: "ReportIcon",
  viewBox: "0 0 24 24",
  d: "M4 24h-2v-24h2v24zm18-22h-16v12h16l-4-5.969 4-6.031z"
});

export const HomeIcon = createIcon({
  displayName: "HomeIcon",
  viewBox: "0 0 24 24",
  d: "M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"
});

export const OmnidIcon = createIcon({
  displayName: "OmnidIcon",
  viewBox: "0 0 512 512",
  path: (
    <g>
      <path
        fill="currentColor"
        d="M262.2 498.2C92.8 486 91.4 43.9 253.1 13.8c169.6 9.7 169.1 460.3 9.1 484.4zM338.9 256c4.3-52.2-28.1-295.4-114.3-206.1-64.5 109.3-62.9 302.5 0 412.2 87.2 89.6 118.1-154.2 114.3-206.1z"
      />
      <path
        fill="currentColor"
        d="M501.3 314.7v6h-1.5v9c-50.5 112.8-453 116.7-484.4-9 12.2-132.7 460.5-132.8 484.4-6h1.5zM257.6 253c-68.3 1.1-140.6 8.5-203.1 37.6-28.2 22.8-31 31.4 0 54.2 53.6 46.9 451.9 59.3 427.2-37.6-47.5-49.8-157.3-51.9-224.1-54.2z"
      />
    </g>
  )
});

export const EnsIcon = createIcon({
  displayName: "EnsIcon",
  viewBox: "0 0 73 81",
  path: (
    <>
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="42"
          x2="12.6"
          y1="2.6"
          y2="34.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".6" stopColor="#a0a8d4" />
          <stop offset=".7" stopColor="#8791c7" />
          <stop offset=".9" stopColor="#6470b4" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-2"
          x1="42.6"
          x2="72"
          y1="81.7"
          y2="49.8"
        />
        <linearGradient
          id="linear-gradient-3"
          x1="42.3"
          x2="42.3"
          y1="1.2"
          y2="82.8"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#513eff" />
          <stop offset=".2" stopColor="#5157ff" />
          <stop offset=".6" stopColor="#5298ff" />
          <stop offset="1" stopColor="#52e5ff" />
        </linearGradient>
      </defs>
      <g>
        <g id="Layer_1">
          <path
            fill="url(#linear-gradient)"
            d="m15 34 3 5L41 2 19 17a10 10 0 0 0-4 4 16 16 0 0 0 0 13z"
            transform="translate(-6 -2)"
          />
          <path
            d="M6 47a25 25 0 0 0 10 18l25 18-29-45a22 22 0 0 1-2-7 12 12 0 0 1 0-4l-1 2a29 29 0 0 0-3 8 52 52 0 0 0 0 10z"
            fill="#a0a8d4"
            transform="translate(-6 -2)"
          />
          <path
            fill="url(#linear-gradient-2)"
            d="m69 50-3-5-22 38 22-16a10 10 0 0 0 3-3 16 16 0 0 0 0-14z"
            transform="translate(-6 -2)"
          />
          <path
            d="M78 37a25 25 0 0 0-10-18L44 2l28 44a22 22 0 0 1 3 8 12 12 0 0 1 0 3l1-2a29 29 0 0 0 2-8 52 52 0 0 0 0-10z"
            fill="#a0a8d4"
            transform="translate(-6 -2)"
          />
          <path
            fill="url(#linear-gradient-3)"
            d="M15 21a10 10 0 0 1 4-4L41 2 18 39l-3-5a16 16 0 0 1 0-13zM6 47a25 25 0 0 0 10 18l25 18-29-45a22 22 0 0 1-2-7 12 12 0 0 1 0-4l-1 2a29 29 0 0 0-3 8 52 52 0 0 0 0 10zm63 3-3-5-22 38 22-16a10 10 0 0 0 3-3 16 16 0 0 0 0-14zm9-13a25 25 0 0 0-10-18L44 2l28 44a22 22 0 0 1 3 8 12 12 0 0 1 0 3l1-2a29 29 0 0 0 2-8 52 52 0 0 0 0-10z"
            transform="translate(-6 -2)"
          />
        </g>
      </g>
    </>
  )
});

export const TwitterIcon = createIcon({
  displayName: "TwitterIcon",
  viewBox: "0 0 24 24",
  d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
});
