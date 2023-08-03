import './style.css'


export function Button({titulo, color, variant, disableShadow, disabled, startIcon, endIcon, size}) {
    let disabledShadow
    let disable
    if(disabled === true) {
        disable = 'disabled'
    }
    if (disableShadow === true) {
        disabledShadow = 'disableShadow'
    }

    if (startIcon !== undefined && endIcon !== undefined) {
        return (
            <div>
                <p>{titulo}</p>
            <button className={`${color} ${variant} ${disabledShadow} ${disable} ${size}`}>
                <img src={startIcon} alt="" />
            Default
            <img src={endIcon} alt="" />
        </button>
        </div>
        )
    }

    if (startIcon !== undefined) {
        return (
            <div>
                <p>{titulo}</p>
            <button className={`${color} ${variant} ${disabledShadow} ${disable} ${size}`}>
                <img src={startIcon} alt="" />
            Default
            
        </button>
        </div>
        )
    }else if(endIcon !== undefined) {
        return (
            <div>
                <p>{titulo}</p>
            
            <button className={`${color} ${variant} ${disabledShadow} ${disable} ${size}`}>
                
            Default
            <img src={endIcon} alt="" />
        </button>
        </div>
        )
    }

    return (
        <div>
            <p>{titulo}</p>
                <button className={`${color} ${variant} ${disabledShadow} ${disable} ${size}`}>
                Default
            </button>
        </div>
    )
}