interface ButtonInterface {
    label: string
    onClick?: () => void
}

const Button: React.FC<ButtonInterface> = (props) => {
    return (
    <button type="button" onClick={props.onClick}>
        {props.label}
    </button>
)
}

export default Button