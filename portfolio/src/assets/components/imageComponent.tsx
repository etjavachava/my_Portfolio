export interface ImageProp {
    src: string;
    alt: string; 
    width?: number |string;
    height?: number;
    className?: string;
    
}

export const Image = ({ src, alt, width="100%", height, className, }: ImageProp) => {
    return (
        <img 
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
            className={className}
            loading="lazy" 
        />
    );
};