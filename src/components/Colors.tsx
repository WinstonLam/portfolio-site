
import '../styles/Colors.css'

type Theme = {
    primary: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
};

type ColorsProps = {
    changeTheme: (newTheme: Theme) => void;
};

const Colors: React.FC<ColorsProps> = ({ changeTheme }) => {

    const handleColorClick = (color: number) => {
        const color1 = '4, 66, 14';
        const color2 = '239, 238, 227';
        const color3 = '130, 132, 86';
        const color4 = '0, 116, 153';
        const color5 = '255, 255, 255';
        let newTheme: Theme;
        switch (color) {
            case 1:
                newTheme = {
                    primary: color1,
                    second: color2,
                    third: color3,
                    fourth: color4,
                    fifth: color5
                };
                break;
            case 2:
                newTheme = {
                    primary: color3,
                    second: color1,
                    third: color2,
                    fourth: color4,
                    fifth: color5
                };
                break;
            case 3:
                newTheme = {
                    primary: color4,
                    second: color3,
                    third: color2,
                    fourth: color1,
                    fifth: color5
                };
                break;
            case 4:
                newTheme = {
                    primary: color1,
                    second: color4,
                    third: color2,
                    fourth: color3,
                    fifth: color5
                };
                break;

            default:
                newTheme = {
                    primary: color1,
                    second: color2,
                    third: color3,
                    fourth: color4,
                    fifth: color5
                };
        }

        changeTheme(newTheme);
    };

    return (
        <div className="colors" >
            <div className="color1" onClick={() => handleColorClick(1)} />
            <div className="color2" onClick={() => handleColorClick(2)} />
            <div className="color4" onClick={() => handleColorClick(4)} />
            <div className="color3" onClick={() => handleColorClick(3)} />
        </div>
    )
}

export default Colors;