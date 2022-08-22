import { forwardRef } from 'react'
import { cx, css } from "@emotion/css";
import { PropTypes } from 'prop-types'

const buttonStyles = (bgColor, color, width, height, colorHover, bgColorHover, borderRadius)=> css`
    background-color: ${bgColor};
    color: ${color};
    border-radius: ${borderRadius || '8px'};
    width: ${width || '40px'};
    height: ${height || '150px'};
    text-align: center;
    &:hover {
        background-color: ${bgColorHover};
        color: ${colorHover};
    }
`

const Button = forwardRef((props, ref)=> {
    const { className, bgColor, color, width, height, colorHover, bgColorHover, borderRadius, ...otherProps } = props 
    
    return (
        <button
            ref={ref}
            type="button"
            {...otherProps}
            className={cx(buttonStyles(bgColor, color, width, height, colorHover, bgColorHover, borderRadius), className)}
        />
    )
})

Button.propTypes = {
    className: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    bgColorHover: PropTypes.string,
    colorHover: PropTypes.string,
    borderRadius: PropTypes.string
}

export default Button 