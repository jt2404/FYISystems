import { toast } from "react-toastify";
import { axiosInstance } from "./AxiosInterceptor";

const defaultOptions = {
    showToast: false,
    successToast: "Record has been saved successfully",
    errorToast: "Something Went Wrong",
};

localStorage.setItem("apiCount", 0);

const get = (url, options = defaultOptions.errorToast, ...other) => {
    options = { ...defaultOptions, ...options };
    let apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
    showLoader();
    localStorage.setItem("apiCount", apiCount ? apiCount + 1 : 1);

    return axiosInstance
        .get(url)
        .then((res) => res) // Removed unnecessary block statement
        .catch((err) => {
            hideLoader();
            toast.error(defaultOptions.errorToast);
            return Promise.reject(err);
        })
        .finally(() => {
            apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
            apiCount -= 1;
            if (apiCount >= 0) {
                localStorage.setItem("apiCount", apiCount);
                if (apiCount === 0) {
                    hideLoader();
                }
            }
        });
};

const post = (url, payload, options = defaultOptions) => {
    options = { ...defaultOptions, ...options };

    let apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
    showLoader();
    localStorage.setItem("apiCount", apiCount ? apiCount + 1 : 1);

    return axiosInstance
        .post(url, payload)
        .then((res) => {
            toast.success(defaultOptions.successToast);
            return res;
        })
        .catch((err) => {
            hideLoader();
            toast.error(defaultOptions.errorToast);
            return Promise.reject(err);
        })
        .finally(() => {
            apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
            apiCount -= 1;
            if (apiCount >= 0) {
                localStorage.setItem("apiCount", apiCount);
                if (apiCount === 0) {
                    hideLoader();
                }
            }
        });
};

const put = (url, payload, options = defaultOptions) => {
    options = { ...defaultOptions, ...options };
    let apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
    showLoader();
    localStorage.setItem("apiCount", apiCount ? apiCount + 1 : 1);

    return axiosInstance
        .put(url, payload)
        .then((res) => {
            toast.success(defaultOptions.successToast);
            return res;
        })
        .catch((err) => {
            hideLoader();
            toast.error(defaultOptions.errorToast);
            return Promise.reject(err);
        })
        .finally(() => {
            apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
            apiCount -= 1;
            if (apiCount >= 0) {
                localStorage.setItem("apiCount", apiCount);
                if (apiCount === 0) {
                    hideLoader();
                }
            }
        });
};

const Delete = (url, payload, options = defaultOptions) => {
    options = { ...defaultOptions, ...options };

    let apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
    showLoader();
    localStorage.setItem("apiCount", apiCount ? apiCount + 1 : 1);

    return axiosInstance
        .delete(url)
        .then((res) => res) // Removed unnecessary block statement
        .catch((err) => {
            hideLoader();
            toast.error(defaultOptions.errorToast);
            return Promise.reject(err);
        })
        .finally(() => {
            apiCount = parseInt(localStorage.getItem("apiCount"), 10); // Added radix parameter
            apiCount -= 1;
            if (apiCount >= 0) {
                localStorage.setItem("apiCount", apiCount);
                if (apiCount === 0) {
                    hideLoader();
                }
            }
        });
};
const putWithFormData = (url, formData, options = defaultOptions) => {
    options = { ...defaultOptions, ...options };

    let apiCount = parseInt(localStorage.getItem("apiCount"), 10);
    showLoader();
    localStorage.setItem("apiCount", apiCount ? apiCount + 1 : 1);

    return axiosInstance
        .put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            toast.success(options.successToast);
            return res;
        })
        .catch((err) => {
            hideLoader();
            toast.error(options.errorToast);
            return Promise.reject(err);
        })
        .finally(() => {
            apiCount = parseInt(localStorage.getItem("apiCount"), 10);
            apiCount -= 1;
            if (apiCount >= 0) {
                localStorage.setItem("apiCount", apiCount);
                if (apiCount === 0) {
                    hideLoader();
                }
            }
        });
};

const showLoader = () => {
    document.body.classList.add("loading-indicator");
};

const hideLoader = () => {
    setTimeout(() => {
        document.body.classList.remove("loading-indicator");
    }, 2000);
};

const ApiService = {
    get,
    post,
    Delete,
    put,
    putWithFormData,
    showLoader,
    hideLoader,
};

export default ApiService;
