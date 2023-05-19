interface color {
    teacherId: string | null,
    color: string
}

let colors = ["color1", "color2", "color3", "color4", "color5"]

const BgColors = ({teacherId}: {teacherId: Array<any>;}) => {

    let bgColors = new Array<color>();
    for(let i = 0; i < teacherId.length; i++) {
        for(let j = 0; j < colors.length; j++) {   
            if(teacherId[i] != null) {
                bgColors.push({
                    teacherId: teacherId[i],
                    color: colors[i]
                })
            } else {
                bgColors.push({
                    teacherId: teacherId[i],
                    color: ''
                })
            }
        }
    }
    
    return (
        <>
        <div> 
            {bgColors.map((color, index)=> (
                <>
                <td key={index} className={color.color}></td>
                </>
            ))}  
        </div>
        </>
    )
}

export default BgColors;