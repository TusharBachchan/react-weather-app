export function timestampToFormattedDate(timestamp, timezone) {
    // Convert timestamp to milliseconds with given timezone offset
    const milliseconds = (timestamp + timezone) * 1000;

    // Create a new Date object with the adjusted milliseconds
    const date = new Date(milliseconds);

    // Create date and time formatters (same as before)
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // Use 12-hour format
    });

    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);

    return {
        date: formattedDate,
        time: formattedTime,
    };
}
