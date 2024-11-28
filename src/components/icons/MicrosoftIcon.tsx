import SvgIcon from '@mui/material/SvgIcon';

{
    /* SVG grabbed from https://en.m.wikipedia.org/wiki/File:Microsoft_icon.svg, converted using SVGR web playground
    Code had to be modified a little bit to fit here instead of be its own .tsx file, but this works fine*/
}

export function MicrosoftIcon() {
    return (
        <SvgIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                <path fill="#f35325" d="M0 0h10v10H0z" />
                <path fill="#81bc06" d="M11 0h10v10H11z" />
                <path fill="#05a6f0" d="M0 11h10v10H0z" />
                <path fill="#ffba08" d="M11 11h10v10H11z" />
            </svg>
        </SvgIcon>
    );
}
