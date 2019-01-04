import {espStrings} from "./espStrings";
import {engStrings} from "./engStrings";

var currentLanguage="eng";

const languagesData = {
    empty: {},
    esp: espStrings,
    eng: engStrings,
};

const getString = (s,data) => {
    var st = languagesData[currentLanguage][s];
    if (!st)
        st = "#" + currentLanguage + "." + s + "#"
    if (!!data)
        Object.keys(data).map(k => {
            st = st.replace("{" + k + "}", data[k]);
            return null;
        });
    return st;
}

export const setLanguage =(language)=> {
    var ln = language.toLowerCase();
    if (!Object.keys(languagesData).find(x => x === ln))
        console.error("Language not exist", "Request:", ln, "Languages:", Object.keys(languagesData));
    else
        currentLanguage = ln;
}

export const strings = {
    page_not_found: x => getString("page_not_found", x),

    dialog_confirm: x => getString("dialog_confirm", x),

    menu_login: x => getString("menu_login", x),

    account_login_title: x => getString("account_login_title", x),
    account_login_username: x => getString("account_login_username", x),
    account_login_usernameError_regex: x => getString("account_login_usernameError_regex", x),
    account_login_password: x => getString("account_login_password", x),
    account_login_passwordError_regex: x => getString("account_login_passwordError_regex", x),
    account_login_confirm: x => getString("account_login_confirm", x),
    account_login_failure_title: x => getString("account_login_failure_title", x),
    account_login_failure_message: x => getString("account_login_failure_message", x),
    account_login_goToRecover: x => getString("account_login_goToRecover", x),
    account_login_goToSignin: x => getString("account_login_goToSignin", x),

    account_logout_title: x => getString("account_logout_title", x),

    account_password_title: x => getString("account_password_title", x),
    account_password_old: x => getString("account_password_old", x),
    account_password_new: x => getString("account_password_new", x),
    account_password_retry: x => getString("account_password_retry", x),
    account_password_confirm: x => getString("account_password_confirm", x),
    account_password_success_title: x => getString("account_password_success_title", x),
    account_password_success_message: x => getString("account_password_success_message", x),
    account_password_failure_title: x => getString("account_password_failure_title", x),
    account_password_failure_message: x => getString("account_password_failure_message", x),

    account_profile_title: x => getString("account_profile_title", x),

    account_recovery_title: x => getString("account_recovery_title", x),
    account_recovery_username: x => getString("account_recovery_username", x),
    account_recovery_password: x => getString("account_recovery_password", x),
    account_recovery_passwordRetry: x => getString("account_recovery_passwordRetry", x),
    account_recovery_confirm: x => getString("account_recovery_confirm", x),
    account_recovery_success_title: x => getString("account_recovery_success_title", x),
    account_recovery_success_message: x => getString("account_recovery_success_message", x),

    account_signin_title: x => getString("account_signin_title", x),
    account_signin_username: x => getString("account_signin_username", x),
    account_signin_password: x => getString("account_signin_password", x),
    account_signin_passwordRetry: x => getString("account_signin_passwordRetry", x),
    account_signin_confirm: x => getString("account_signin_confirm", x),
    account_signin_success_title: x => getString("account_signin_success_title", x),
    account_signin_success_message: x => getString("account_signin_success_message", x),
    account_signin_failure_title: x => getString("account_signin_failure_title", x),
    account_signin_failure_message: x => getString("account_signin_failure_message", x),

}
