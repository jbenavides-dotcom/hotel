
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'pink' | 'gold';
  showBadge?: boolean;
}

// Logo imagen de Cloudinary
const LOGO_URL = "https://res.cloudinary.com/dsylu9a7k/image/upload/lpet/logo.png";

const Logo: React.FC<LogoProps> = ({
  className = "w-24 h-24",
  variant = 'pink',
  showBadge = false
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img
        src={LOGO_URL}
        alt="La Palma & El Tucán Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
