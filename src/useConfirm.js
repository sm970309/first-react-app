const useConfirm = (message = "", callback, reject) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            callback();
        } else {
            reject();
        }
    }
    return (!callback && reject && typeof callback !== "function") ? undefined : confirmAction
}

export default useConfirm;