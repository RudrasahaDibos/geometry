function ClickForParaCalulator(){

    const base = getElementInputId('parallelogram-base')
    const height = getElementInputId('rectangle-length')
    const area = base * height
    setElementInputId('parallelogram-area',area)
}