export interface ImageProp {
    src: string;
    alt: string;  // Required for accessibility
    width?: number;
    height?: number;
    className?: string;
}

export const Image = ({ src, alt, width, height, className }: ImageProp) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
            className={className}
            loading="lazy" // Enable lazy loading for images
        />
    );
};