const roads = [
  {
    id: "road-turku",
    d: "M 375.1 457.2 L 367.4 458.7 L 355.5 457.8 L 354.9 449.8 L 350.4 450.7 L 316.6 431.9 L 297.3 430.1 L 286.0 433.9 L 269.0 424.8 L 262.2 416.9 L 252.3 413.8 L 240.4 416.6 L 231.2 412.1 L 225.4 411.7 L 208.8 415.6 L 187.3 406.4 L 167.3 403.0 L 136.3 405.2 L 128.8 401.4 L 118.7 400.3 L 108.8 404.9 L 101.3 405.5 L 98.6 404.4 L 94.8 398.6 L 91.8 399.5",
    duration: "9s",
    delay: "3.25s",
  },
  {
    id: "road-tampere",
    d: "M 375.1 457.2 L 371.2 451.9 L 371.7 445.4 L 361.5 420.4 L 365.8 388.7 L 364.2 379.1 L 360.2 371.4 L 361.2 359.8 L 354.4 349.4 L 351.0 332.6 L 345.3 321.7 L 337.8 315.5 L 323.3 286.7 L 312.3 275.4 L 304.2 270.8 L 297.5 270.1 L 285.9 259.7 L 276.4 257.3 L 259.1 245.9 L 258.4 235.1 L 255.4 229.4 L 256.9 223.5 L 253.5 217.4 L 253.4 208.3 L 249.6 200.0 L 252.4 186.5 L 250.3 185.0",
    duration: "10s",
    delay: "3.45s",
  },
  {
    id: "road-pori",
    d: "M 375.1 457.2 L 367.4 458.7 L 355.5 457.8 L 354.9 449.8 L 350.5 450.7 L 322.6 434.3 L 314.4 431.6 L 309.2 415.9 L 311.7 406.3 L 309.2 397.3 L 296.0 376.9 L 283.2 368.0 L 262.2 359.5 L 254.6 351.8 L 248.4 340.7 L 203.8 295.0 L 186.0 289.2 L 177.4 284.2 L 164.6 275.9 L 138.7 253.1 L 115.9 247.2 L 85.5 230.2 L 65.7 215.9 L 41.2 189.9 L 42.0 187.5",
    duration: "11s",
    delay: "3.65s",
  },
  {
    id: "road-lahti",
    d: "M 375.1 457.2 L 377.5 454.7 L 379.0 447.4 L 387.8 441.6 L 391.3 434.8 L 394.0 425.0 L 396.7 386.7 L 415.5 357.6 L 428.0 344.0 L 434.0 328.6 L 449.1 301.4 L 451.7 290.5",
    duration: "8s",
    delay: "3.35s",
  },
  {
    id: "road-kotka",
    d: "M 375.1 457.2 L 377.5 454.8 L 379.2 447.1 L 388.7 440.4 L 416.5 434.1 L 422.8 428.4 L 434.6 422.9 L 450.5 407.1 L 468.0 402.9 L 473.6 394.3 L 479.4 391.1 L 498.4 394.2 L 506.1 397.9 L 521.7 391.6 L 544.9 392.3 L 564.8 388.8 L 576.0 390.4 L 582.5 388.8 L 585.3 396.9 L 587.8 396.4",
    duration: "9.5s",
    delay: "3.55s",
  },
  {
    id: "road-lappeenranta",
    d: "M 375.1 457.2 L 377.5 454.8 L 379.2 447.1 L 388.7 440.4 L 416.4 434.2 L 422.8 428.4 L 434.6 422.9 L 450.5 407.1 L 467.5 403.2 L 474.0 393.9 L 479.5 391.0 L 483.1 391.4 L 484.1 384.6 L 490.8 380.3 L 500.0 367.9 L 511.1 363.6 L 515.7 351.7 L 521.8 346.9 L 533.0 342.5 L 543.9 323.8 L 545.3 317.6 L 551.6 313.1 L 582.3 310.1 L 586.1 306.6 L 614.1 306.7 L 648.8 303.6 L 670.2 299.5 L 681.0 296.1 L 701.3 282.6 L 718.1 278.7 L 719.6 275.0",
    duration: "12s",
    delay: "3.75s",
  },
  {
    id: "road-jyvaskyla",
    d: "M 375.1 457.2 L 377.5 454.7 L 379.0 447.4 L 387.7 441.7 L 391.1 435.3 L 394.0 425.0 L 396.2 388.2 L 402.1 376.3 L 415.8 357.1 L 427.8 344.3 L 434.0 328.6 L 449.4 300.6 L 454.5 297.4 L 460.1 289.4 L 469.0 283.9 L 476.9 267.6 L 487.2 253.7 L 488.0 244.1 L 492.5 238.3 L 495.8 227.8 L 492.3 222.6 L 493.1 206.9 L 486.4 195.4 L 485.4 184.9 L 488.3 178.7 L 488.9 158.2 L 494.1 141.6 L 499.1 132.4 L 497.4 121.0 L 499.7 95.1 L 494.2 85.6 L 491.5 66.4 L 476.9 52.4 L 475.9 32.3 L 460.7 32.2",
    duration: "13s",
    delay: "3.85s",
  },
];

const cities: Array<{ name: string; x: number; y: number; anchor: "start" | "end" }> = [
  { name: "PORI", x: 42, y: 187, anchor: "start" },
  { name: "TAMPERE", x: 250, y: 185, anchor: "end" },
  { name: "TURKU", x: 92, y: 400, anchor: "end" },
  { name: "LAHTI", x: 452, y: 291, anchor: "start" },
  { name: "KOTKA", x: 588, y: 396, anchor: "start" },
  { name: "LAPPEENRANTA", x: 720, y: 275, anchor: "start" },
  { name: "JYVÄSKYLÄ", x: 461, y: 32, anchor: "start" },
];

export function FinlandRoadMap() {
  return (
    <div className="hero-map">
      <svg
        viewBox="0 0 980 560"
        role="img"
        aria-labelledby="finland-map-title finland-map-description"
      >
        <title id="finland-map-title">Southern Finland road network</title>
        <desc id="finland-map-description">
          Major roads radiate from Helsinki to Turku, Pori, Tampere, Lahti, Kotka, Lappeenranta, and
          Jyväskylä. Animated dots follow the road routes.
        </desc>
        <defs>
          <linearGradient id="finland-land-fill" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#152436" />
            <stop offset="100%" stopColor="#0d1927" />
          </linearGradient>
          <radialGradient id="finland-hub-glow">
            <stop offset="0%" stopColor="#4ba8ff" stopOpacity=".32" />
            <stop offset="100%" stopColor="#4ba8ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          className="finland-land"
          d="M 12 0 L 965 0 L 962 78 L 951 137 L 957 193 L 949 244 L 960 291 L 950 332 L 932 358 L 905 378 L 868 391 L 830 398 L 790 400 L 754 396 L 719 399 L 685 407 L 650 408 L 620 400 L 588 396 L 576 390 L 565 389 L 545 392 L 522 392 L 506 398 L 498 394 L 479 391 L 468 403 L 451 407 L 435 423 L 415 434 L 394 425 L 391 435 L 379 447 L 375 457 L 355 458 L 350 451 L 317 432 L 297 430 L 286 434 L 269 425 L 262 417 L 252 414 L 240 417 L 231 412 L 225 412 L 209 416 L 187 406 L 167 403 L 136 405 L 129 401 L 119 400 L 109 405 L 99 405 L 95 399 L 92 400 L 84 380 L 68 348 L 63 305 L 57 267 L 42 230 L 42 188 L 29 146 L 12 101 Z"
        />

        <g className="finland-lakes">
          <path d="M 275 223 C 282 211 288 194 294 186 C 301 177 307 186 302 199 C 298 212 294 227 286 237 C 280 244 272 237 275 223 Z" />
          <path d="M 470 193 C 476 178 477 160 485 153 C 494 145 497 158 493 174 C 490 189 487 204 479 212 C 471 217 466 207 470 193 Z" />
          <path d="M 671 271 C 679 257 681 241 690 234 C 700 228 706 240 699 254 C 693 269 691 286 681 292 C 672 296 666 283 671 271 Z" />
          <path d="M 512 109 C 517 99 521 83 528 79 C 536 76 538 87 533 100 C 529 112 524 126 517 128 C 510 128 508 118 512 109 Z" />
        </g>

        <g className="finland-roads-base">
          {roads.map((road) => (
            <path key={road.id} id={road.id} d={road.d} />
          ))}
        </g>
        <g className="finland-road-traces">
          {roads.map((road) => (
            <path key={road.id} d={road.d} pathLength="1" />
          ))}
        </g>
        <g className="finland-cars">
          {roads.map((road) => (
            <circle key={road.id} r="2.6" opacity="0">
              <animateMotion
                begin={road.delay}
                dur={road.duration}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${road.id}`} />
              </animateMotion>
              <animate
                attributeName="opacity"
                begin={road.delay}
                dur={road.duration}
                values="0;1;1;0"
                keyTimes="0;0.06;0.94;1"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>

        <g className="finland-city-labels">
          {cities.map((city) => (
            <g key={city.name}>
              <circle cx={city.x} cy={city.y} r="3.5" />
              <text
                x={city.x + (city.anchor === "start" ? 10 : -10)}
                y={city.y - 9}
                textAnchor={city.anchor}
              >
                {city.name}
              </text>
            </g>
          ))}
        </g>

        <circle className="finland-hub-halo" cx="375" cy="457" r="47" />
        <g className="finland-hub" transform="translate(375 457)">
          <rect x="-19" y="-19" width="38" height="38" rx="11" />
          <text x="0" y="6">
            G
          </text>
        </g>
      </svg>
      <a
        className="finland-map-credit"
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noreferrer"
      >

      </a>
    </div>
  );
}
