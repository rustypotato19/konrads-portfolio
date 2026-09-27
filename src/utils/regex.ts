export function validateEmailFormat(s: string): boolean {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm

    if (emailRegex.test(s)) {
        return true
    }
    return false
}