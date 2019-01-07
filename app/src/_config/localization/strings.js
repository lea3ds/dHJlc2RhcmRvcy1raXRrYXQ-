
const getString = (key,value)=> {
    // var valueDemo = {username: "Roberto", age: 18};
    var res = Object.keys(strings).find(x => x === key);
    if (!res) return "#" + key + "#";
    res = strings[res];
    if (!!value) Object.keys(value).map(x => {
        res = res.replace(new RegExp("{" + x + "}", 'g'), value[x]);
        return x;
    });
    return res;
}

// const saveLanguageStorage=(language, strings, version)=>{
//     if (!!language) localStorage.setItem("STRINGS_CURRENT_LANGUAGE", language);
//     if (!!version) localStorage.setItem("STRINGS_"+language.toUpperCase()+"_VERSION", version);
//     if (!!strings) localStorage.setItem("STRINGS_"+language.toUpperCase(), strings);
// }

const setStringLanguage =(language)=> {
    console.log("setStringLanguage", language);
    //strings = strings_del_STORAGE; // aca hay que cargar del storage la que va
    strings = {...strings, getString: getString, setStringLanguage: setStringLanguage};
    //saveLanguageStorage(language);
    //strings = localStorage.getItem("STRINGS_"+language.toUpperCase());
    // if (!strings) strings = defaultStrings;
}

const getStringLanguage =()=> {
    var language = "esp"; // aca hay que cargar del storage la que va
    console.log("getStringLanguage", language);
    return language;
}

export var strings = {
    getString:getString,
    getStringLanguage:getStringLanguage,
    setStringLanguage:setStringLanguage,

    page_not_found:'#Page Not Found',

    dialog_confirm:'#Ok',

    menu_login:'#Ingresar',

    account_login_title:'#LOGIN',
    account_login_username:'#username',
    account_login_usernameError_regex:'#Email no válido',
    account_login_password:'#password',
    account_login_passwordError_regex:'#Contraseña no válida',
    account_login_confirm:'#Login',
    account_login_failure_title:'#Error',
    account_login_failure_message:'#Ups!',
    account_login_goToRecover:'#recover',
    account_login_goToSignin:'#singn in',

    account_logout_title:'#LOGOUT',

    account_password_title:'#PASSWORD',
    account_password_old:'#Old',
    account_password_new:'#New',
    account_password_retry:'#Retry',
    account_password_confirm:'#Confirm',
    account_password_success_title:'#Message',
    account_password_success_message:'#Success!',
    account_password_failure_title:'#Error',
    account_password_failure_message:'#Ups!',

    account_profile_title:'#PROFILE',

    account_recovery_title:'#RECOVERY',
    account_recovery_username:'#username',
    account_recovery_password:'#password',
    account_recovery_passwordRetry:'#passwordRetry',
    account_recovery_confirm:'#Confirm',
    account_recovery_success_title:'#Message',
    account_recovery_success_message:'#Success!',

    account_signin_title:'#SIGNIN',
    account_signin_username:'#username',
    account_signin_password:'#password',
    account_signin_passwordRetry:'#passwordRetry',
    account_signin_confirm:'#Confirm',
    account_signin_success_title:'#Message',
    account_signin_success_message:'#Success!',
    account_signin_failure_title:'#Error',
    account_signin_failure_message:'#Ups!',

}

export default strings;