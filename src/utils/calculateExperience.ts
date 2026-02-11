export function calculateExperience(): string {
    const startDate = new Date("2022-08-16");
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();

    if (
        today.getMonth() < startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() &&
            today.getDate() < startDate.getDate())
    ) {
        years--;
    }

    let lastAnniversary = new Date(
        today.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
    );

    if (today < lastAnniversary) {
        lastAnniversary.setFullYear(lastAnniversary.getFullYear() - 1);
    }

    const monthsSinceAnniversary =
        (today.getFullYear() - lastAnniversary.getFullYear()) * 12 +
        (today.getMonth() - lastAnniversary.getMonth());

    return monthsSinceAnniversary >= 6
        ? `${years + 0.5}+`
        : `${years}+`;
}
