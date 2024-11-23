import * as React from 'react';

{/* Viewbox is what makes this tick -- it wraps the icon in a container with the viewbox size which then scales
    to the container -- this means that the icon scales to the appbar (etc.), instead of being cut off
    Conversion to Typescript was done with SVGR -- the SVG files are still present, if you need to transform the code
    again for some reason, just use SVGR on the SVG files BUT be sure to add the viewbox to ensure the raster scales*/}

const SvgPenguinIconWhiteWithTextTall = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' {...props} viewBox={'0 0 550 270'}>
        <defs>
            <path
                id="penguin-icon-white-with-text-tall_svg__a"
                d="M237.725 0h474.559v272.003H237.725z"
            />
        </defs>
        <path
            fill="#010101"
            d="m127.75 12.688 2.16.014c5.589.124 10.062.925 15.09 3.298l2.656 1.207C151.658 19.11 154.962 20.735 158 24l2.375 1.875C164.791 29.45 168.648 33.406 172 38v2l1.75.563c2.427 1.55 3.026 2.525 4.375 5 1.47 3.472 1.47 3.472 3.875 4.437 1.29 1.996 1.29 1.996 2.625 4.438l1.352 2.433C187 59 187 59 187 61h2q1.256 2.183 2.5 4.375l1.406 2.46C194 70 194 70 194 72h2a1505 1505 0 0 1 3 5.875l1.688 3.305C202 84 202 84 202 86h2q1.259 2.653 2.5 5.313l1.406 2.988C209 97 209 97 209 100h2q1.255 3.435 2.5 6.875l.723 1.973C216 113.773 216 113.773 216 116h2q1.262 4.09 2.5 8.188l.723 2.33c1.18 3.926 2.11 7.332 1.777 11.482h2c3.82 18.013 7.622 43.755-1 61h-2l-.25 2.5c-2.055 9.592-7.987 15.737-14.75 22.5l-2.21 2.828c-2.872 3.474-6.212 5.896-9.915 8.422l-1.879 1.313A470 470 0 0 1 185 242l2 2c.688 3.063.688 3.063 1 6-1 1-1 1-4.969 1.114q-2.658 0-5.316-.016l-2.82-.004c-2.986-.006-5.972-.019-8.958-.031l-6.056-.014A7853 7853 0 0 1 145 251l-1-3h-5l-1 3H97c-1-3-1-3 .375-6.062L99 242l1-2-2.055-1.433C76.862 223.587 76.862 223.587 74 215l-1.812-1.687C68.678 209.603 66 205.176 66 200h-2c-2.95-8.497-5.323-15.942-5-25h-2q-.04-3.469-.062-6.937l-.036-3.903C57 161 57 161 58 160q.061-3.5 0-7h2l-.188-2.879c0-4.978 1.61-9.385 3.188-14.058l.867-2.65Q64.92 130.201 66 127h2l.25-2.437c.952-4.522 2.766-8.41 4.75-12.563h2l.34-2.601c.686-3.535 1.793-6.475 3.222-9.774l1.38-3.21L81 94h2l.55-1.906C85.157 86.63 86.937 81.308 89 76h2V56h-2c-2-3-2-3-2-6l-2.168-.867L72 44v-2l-13-2v-2l8-2v-2l2.082-.586 2.73-.789 2.708-.773c2.685-.804 2.685-.804 5.48-2.852h4v-2c9.201-4.59 18.048-8.675 28.047-11.21 2.913-.694 2.913-.694 5.36-1.872 3.446-1.22 6.731-1.26 10.343-1.23"
        />
        <path
            fill="#fdfdfc"
            d="M167 93v2l2.063.125c4.14 1.233 7.019 3.722 9.937 6.875 2.592 7.776 1.365 15.71-2 23h-2l-.684 3.078c-1.232 4.313-3.544 7.264-6.379 10.672-3.57 4.26-3.57 4.26-5.937 9.25l-2.375 1.875c-2.721 2.203-3.924 4.11-5.625 7.125-1.562 1.813-1.562 1.813-3 3h-2l-.687 2.168c-1.593 3.437-3.614 5.497-6.313 8.144l-2.687 2.676C137 175 137 175 135 175v2h6v-2l1.69-.228c11.525-1.566 22.94-3.31 34.31-5.772v-2l2.125-.883c5.664-2.447 10.488-5.001 15.219-8.98C196 156 196 156 199 156v-2h2l1-2c1.592 5.57 2.207 10.211 2 16h2q.037 7.043.055 14.087.008 2.391.02 4.783.018 3.455.023 6.911l.015 2.129c0 4.777-.443 9.359-1.113 14.09h-2l-.149 1.8a249 249 0 0 1-.535 5.274 113 113 0 0 0-.476 5.758c-.44 4.421-.952 7.204-4.02 10.535-4.049 3.28-8.335 5.992-12.82 8.633l2 2c.688 3.063.688 3.063 1 6-1 1-1 1-4.969 1.114q-2.658 0-5.316-.016l-2.82-.004c-2.986-.006-5.972-.019-8.958-.031l-6.056-.014q-7.44-.017-14.881-.049l-1-3h-5l-1 3H97c-1-3-1-3 .375-6.062L99 242l1-2-2.195-1.504C92.085 234.477 87.003 230.782 83 225c.36-2.203.36-2.203 1-4h-2c-4.423-19.958-8.529-53.942 1-73 1.75.188 1.75.188 4 1l1.563 2.25c3.665 4.135 8.384 5.703 13.437 7.75v2c8.286 1.924 16.636 3.46 25 5l-1.094-1.68-1.406-2.195-1.406-2.18C122 158 122 158 122 156h-2c-1.367-1.977-1.367-1.977-2.875-4.625-1.701-2.954-3.38-5.73-5.375-8.5-2.194-3.604-2.898-6.755-3.75-10.875h-2c-3.977-11.48-5.339-20.027-1-31.687 3.161-3.655 7.431-4.968 12-6.313h3v-2c34.254-5.373 34.254-5.373 47 1"
        />
        <path
            fill="#f96b38"
            d="M185.063 241.813c2.405 2.715 2.778 4.6 2.937 8.187-1 1-1 1-4.969 1.114q-2.658 0-5.316-.016l-2.82-.004c-2.986-.006-5.972-.019-8.958-.031l-6.056-.014q-7.44-.017-14.881-.049c0-4.289.135-4.667 2.813-7.625l1.582-1.789c8.79-8.684 25.987-5.503 35.667.227M133 240c2.465 2.41 4.544 4.86 6 8l-1 3H97c-1-3-1-3 .125-6 2.846-4.554 6.503-6.319 11.664-7.648 7.83-1.246 17.222-1.61 24.211 2.648"
        />
        <path
            fill="#f2f2f2"
            d="M133 30c2.438 1.438 2.438 1.438 4 4 .487 3.068.624 5.95 0 9-1.402 1.777-1.402 1.777-3 3h-2v2c-3.935.458-5.572.297-8.875-2-2.914-4.114-2.677-6.028-2.125-11 .813-2.437.813-2.437 2-4 3.593-1.198 6.227-1.331 10-1"
        />
        <path
            fill="#bcbcbc"
            d="m83 148 4 1v2l-3 1c-.733 2.015-.733 2.015-1 4h-2z"
        />
        <text
            xmlSpace="preserve"
            style={{
                fontStyle: 'normal',
                fontVariant: 'normal',
                fontWeight: 400,
                fontStretch: 'normal',
                fontSize: 120,
                lineHeight: 0.9,
                fontFamily: 'Gabriola',
                InkscapeFontSpecification: '&quot',
                fontVariantLigatures: 'normal',
                fontVariantCaps: 'normal',
                fontVariantNumeric: 'normal',
                fontVariantEastAsian: 'normal',
                textAlign: 'start',
                writingMode: 'lr-tb',
                direction: 'ltr',
                whiteSpace: 'pre',
                shapeInside: 'url(#penguin-icon-white-with-text-tall_svg__a)',
                fill: '#000',
            }}
            transform="translate(7.568 29.651)"
        >
            <tspan x={237.725} y={76.031}>
                {'Ticket\n'}
            </tspan>
            <tspan x={237.725} y={184.031}>
                {'Penguin'}
            </tspan>
        </text>
    </svg>
);
export default SvgPenguinIconWhiteWithTextTall;

