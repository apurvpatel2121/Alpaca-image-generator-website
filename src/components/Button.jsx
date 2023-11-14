const Button = ({  label,active,onclick }) => (
    <button
        className={active ? "btn active" : "btn"}
        onClick={onclick}>
        {label}
    </button>
)

export default Button;