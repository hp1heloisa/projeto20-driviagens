export default function formatError(errors) {
    return {
        type: "format",
        message: errors
    }
}