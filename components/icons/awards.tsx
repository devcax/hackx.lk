import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const FirstPlaceIcon: React.FC<IconProps> = ({
  className,
  size = 24,
  ...props
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="4" fill="#FCD34D" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="8"
      fill="#92400E"
      fontWeight="bold"
    >
      1
    </text>
  </svg>
);

export const SecondPlaceIcon: React.FC<IconProps> = ({
  className,
  size = 24,
  ...props
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <circle cx="12" cy="12" r="6" fill="#E5E7EB" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="8"
      fill="#374151"
      fontWeight="bold"
    >
      2
    </text>
  </svg>
);

export const ThirdPlaceIcon: React.FC<IconProps> = ({
  className,
  size = 24,
  ...props
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
      fill="currentColor"
    />
    <circle cx="12" cy="12" r="4" fill="#F59E0B" />
    <text
      x="12"
      y="16"
      textAnchor="middle"
      fontSize="8"
      fill="#78350F"
      fontWeight="bold"
    >
      3
    </text>
  </svg>
);
