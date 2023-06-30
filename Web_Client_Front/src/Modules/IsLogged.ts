import axios from "axios";
export function IsLogged() {
    return new Promise((resolve) => {
        if (localStorage.getItem("JWT_auth_Cesivroo")) {
            axios
                .post(
                    import.meta.env.VITE_BACK_HOST +
                    import.meta.env.VITE_URL_MS_AUTH +
                    "/verify",
                    null,
                    {
                        params: {
                            token: localStorage.getItem("JWT_auth_Cesivroo"),
                        },
                    }
                )
                .then((response) => {
                    if (response.data.check !== false) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    resolve(false);
                });
        } else {
            resolve(false);
        }
    });
}
