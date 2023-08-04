import './style.css'

export function Input({titulo, error, disabled, value, size, fullWidth, startIcon, endIcon, helperText, multiline, row}){
    let erro
    let width
    if (error === true) {
        erro = 'error'
    }

    if (fullWidth === true) {
        width = 'fullWidth'
    }

    return (
        <div className="input">
                <h2>{titulo}</h2>
                <label className="label">Label</label>
                <div className='inputDetails'>
                    {startIcon !== undefined && <img src={startIcon} className={'startIcon'} alt="" />}
                    {multiline !== undefined ? <textarea placeholder="Placeholder" disabled={disabled} className={`${erro} ${width}`} rows={row}>{value}</textarea> : <input placeholder="Placeholder" disabled={disabled} value={value} type="text" className={`${erro} ${size} ${width}`} />}
                    {endIcon !== undefined && <img className='endIcon' src={endIcon} alt="" />}
                    {helperText !== undefined && <p className="helpText">{helperText}</p>}
                </div>
                
            </div>
    )
}