export function calculateExperience(): string {
    const startDate = new Date("2022-08-16");
    const today = new Date();

    let totalMonths =
        (today.getFullYear() - startDate.getFullYear()) * 12 +
        (today.getMonth() - startDate.getMonth());

    if (today.getDate() < startDate.getDate()) {
        totalMonths--;
    }

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    return remainingMonths >= 6
        ? `${years + 0.5}+`
        : `${years}+`;
}
