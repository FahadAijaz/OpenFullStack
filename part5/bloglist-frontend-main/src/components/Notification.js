import "../index.css"
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
export default Notification