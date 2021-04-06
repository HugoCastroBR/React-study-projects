
import Light from "../assets/themes/light";


function ThemeManager(newTheme = false) {
    let ActiveTheme =  Light;
    if(newTheme){
        const Themes =  Light 
        if(Themes[newTheme] ) ActiveTheme = Themes[newTheme] 
    }
    else{
        return ActiveTheme.data
    }
}

let Theme = {...ThemeManager()}



export default Theme;
