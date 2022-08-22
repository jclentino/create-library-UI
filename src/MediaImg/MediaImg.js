import { forwardRef } from "react";
import { css,cx } from "@emotion/css";
import { PropTypes } from 'prop-types'

const MediaImgStyles = (borderRadius,width, height)=> css`
    border-radius: ${borderRadius || '16px'};
    width: ${width || '100px'};
    height: ${height || '100px'};
`

const MediaImg = forwardRef((props, ref)=> {
    const { 
        className,
        src,
        alt,
        borderRadius,
        width,
        height,
        ...otherProps
    } = props 

    return (
        <img
            src={src}
            alt={alt}
            ref={ref}
            {...otherProps}
            className={cx(MediaImgStyles(borderRadius,width, height), className)}
        />
    )
})

MediaImg.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string
}

export default MediaImg