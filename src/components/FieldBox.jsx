export default function FieldBox({ title, children }) {

    return (
        <>
            <fieldset className="universal-box">
                <legend>{title}</legend>
                {children}
            </fieldset>
        </>
    )
}