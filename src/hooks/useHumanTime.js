const useHumanTime = () => {
    return (time) => {
        const date = new Date(time);
        return `${("0" + date.getDate()).slice(-2)}.${("0" + date.getMonth()).slice(-2)}.${date.getFullYear()} в ${date.getHours()}:${date.getMinutes()}`
    }
}

export default useHumanTime;