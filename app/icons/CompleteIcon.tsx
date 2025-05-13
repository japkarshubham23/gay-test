"use client";

export default function CompleteIcon(props: {previewMode: boolean}) {
    return <svg width="100%" height="30" viewBox="4 4 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_106_691)">
            <circle cx="18" cy="18" r="12" fill={props.previewMode ? "#d2d24a" : "#343935"}/>
        </g>
        <path d="M15.4337 20.7315L22.6652 13.5L23.6254 14.4602L15.4337 22.6519L11.625 18.8443L12.5852 17.8841L15.4337 20.7315Z"
              fill="#060701"/>
        <defs>
            <clipPath id="clip0_106_691">
                <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
            </clipPath>
        </defs>
    </svg>

}