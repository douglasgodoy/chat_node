export default class Utils {
    formatDate(): any {
        const date  = new Date().setHours(new Date().getHours() - 3)
        return new Date(date).toISOString().replace(/T/, " ").replace(/\..+/, "");
    }
}