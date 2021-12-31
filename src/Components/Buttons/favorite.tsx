import React, {ReactNode, useState} from 'react';
import Button from '../Common/IconButton';

interface FavoriteIconProps {
    height : string;
    width : string;
    color:string;
}
const FavoriteIcon: React.FC<FavoriteIconProps> = ({height, width, color,
                          ...props}: React.SVGProps<SVGSVGElement>) => {
    const [like, setLike] = useState(false);
    return (
	<Button onClick={(e) => setLike(!like)}>
        <svg width={width} height={height} color={color} {...props} viewBox="0 0 32 32" version="1.1" aria-hidden="false">
            <path fill={like? 'red' :color } d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z">
            </path>
        </svg>
	</Button>
)};

export default FavoriteIcon;
