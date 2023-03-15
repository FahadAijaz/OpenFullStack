import "../index.css"
import PropTypes from 'prop-types'
import React from "react"
const Notification = ({ errorMessage, className }) => {
    if (errorMessage === null) {
        return null
    }

    return (
        <div className={className}>
            {errorMessage}
        </div>
    )

}
Notification.propTypes = {
    errorMessage: PropTypes.string,
    className: PropTypes.string
}
export default Notification